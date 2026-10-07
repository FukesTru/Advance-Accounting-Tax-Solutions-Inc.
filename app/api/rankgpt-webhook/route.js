import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { articleUrl } from '@/lib/blog';
import {
  guessContentType,
  isAuthorized,
  parseWebhookPayload,
  rewriteUrls,
  storagePath,
} from '@/lib/rankgpt';
import { BLOG_BUCKET, BLOG_TABLE, getSupabase, isSupabaseConfigured } from '@/lib/supabase';

/**
 * POST /api/rankgpt-webhook
 *
 * RankGPT calls this server-to-server whenever an article is published or
 * resent. The request must carry the shared secret (RANKGPT_WEBHOOK_SECRET)
 * as `Authorization: Bearer <secret>` or `X-API-Key: <secret>`.
 *
 * For an article event the handler:
 *   1. validates the body (400 on anything malformed);
 *   2. copies every image into the site's own Supabase Storage bucket — RankGPT
 *      deletes its copies soon after publishing — overwriting files from an
 *      earlier delivery of the same article;
 *   3. rewrites the image URLs inside the HTML, Markdown and hero fields;
 *   4. upserts the row keyed on RankGPT's article id, so a retry or a resend
 *      updates the article instead of duplicating it;
 *   5. purges the cached blog pages and replies `{ link }`.
 *
 * Any failure while copying images or writing the row answers 500 so RankGPT
 * retries the delivery. `event: "test"` answers 200 without storing anything.
 */

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
// RankGPT gives up after 20 seconds; keep the platform from cutting the
// function off before the handler has answered (or failed loudly).
export const maxDuration = 25;

const IMAGE_FETCH_TIMEOUT_MS = 15_000;
const MAX_IMAGE_BYTES = 20 * 1024 * 1024;
const LOG = '[rankgpt-webhook]';

function json(body, status) {
  return NextResponse.json(body, { status });
}

export async function POST(request) {
  const secret = process.env.RANKGPT_WEBHOOK_SECRET;
  if (!secret) {
    console.error(`${LOG} RANKGPT_WEBHOOK_SECRET is not set; refusing the request.`);
    return json({ error: 'Webhook is not configured.' }, 500);
  }
  if (!isAuthorized(request.headers, secret)) {
    return json({ error: 'Unauthorized.' }, 401);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Body must be valid JSON.' }, 400);
  }

  const parsed = parseWebhookPayload(body);
  if (!parsed.ok) return json({ error: parsed.error }, 400);
  const article = parsed.value;

  if (article.event === 'test') return json({ ok: true }, 200);

  if (!isSupabaseConfigured()) {
    console.error(`${LOG} SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are not set; cannot store "${article.id}".`);
    return json({ error: 'Article storage is not configured.' }, 500);
  }

  const startedAt = Date.now();
  const supabase = getSupabase();

  // Two articles cannot share a URL. Also remember the slug this article had
  // before, so its old page is purged if RankGPT renamed it.
  const [slugOwner, previous] = await Promise.all([
    supabase.from(BLOG_TABLE).select('id').eq('slug', article.slug).neq('id', article.id).maybeSingle(),
    supabase.from(BLOG_TABLE).select('slug').eq('id', article.id).maybeSingle(),
  ]);
  if (slugOwner.error || previous.error) {
    console.error(`${LOG} lookup failed:`, slugOwner.error ?? previous.error);
    return json({ error: 'Could not read article storage.' }, 500);
  }
  if (slugOwner.data) {
    return json(
      { error: `Slug "${article.slug}" is already used by article "${slugOwner.data.id}".` },
      409
    );
  }

  let mirrored;
  try {
    mirrored = await mirrorImages(supabase, article);
  } catch (error) {
    console.error(`${LOG} image copy failed for "${article.id}":`, error);
    return json({ error: `Image copy failed: ${error.message}` }, 500);
  }

  const now = new Date().toISOString();
  const row = {
    id: article.id,
    slug: article.slug,
    title: article.title,
    meta_description: article.meta_description,
    content_html: rewriteUrls(article.content_html, mirrored),
    content_markdown: rewriteUrls(article.content_markdown, mirrored),
    hero_image_url: article.hero_image_url ? rewriteUrls(article.hero_image_url, mirrored) : null,
    hero_image_alt: article.hero_image_alt,
    language: article.language,
    status: article.status,
    published_at: article.published_at,
    updated_at: now,
  };

  const { error: upsertError } = await supabase.from(BLOG_TABLE).upsert(row, { onConflict: 'id' });
  if (upsertError) {
    console.error(`${LOG} upsert failed for "${article.id}":`, upsertError);
    if (upsertError.code === '23505') {
      return json({ error: `Slug "${article.slug}" is already used by another article.` }, 409);
    }
    return json({ error: 'Could not store the article.' }, 500);
  }

  const paths = new Set(['/blog', `/blog/${article.slug}`, '/sitemap.xml']);
  if (previous.data?.slug && previous.data.slug !== article.slug) {
    paths.add(`/blog/${previous.data.slug}`);
  }
  for (const path of paths) {
    try {
      revalidatePath(path);
    } catch (error) {
      console.warn(`${LOG} could not revalidate ${path}:`, error);
    }
  }

  console.info(
    `${LOG} ${article.status} "${article.id}" → /blog/${article.slug} (${mirrored.size} image${
      mirrored.size === 1 ? '' : 's'
    }, ${Date.now() - startedAt}ms)`
  );
  return json({ link: articleUrl(article.slug) }, 200);
}

/**
 * Downloads every image and uploads it to the bucket, in parallel.
 * Resolves to a Map of original URL → public URL on this site's storage.
 */
async function mirrorImages(supabase, article) {
  const bucket = supabase.storage.from(BLOG_BUCKET);

  const entries = await Promise.all(
    article.images.map(async (image) => {
      const { bytes, contentType } = await downloadImage(image.url);
      const path = storagePath(article.id, image.filename);

      const { error } = await bucket.upload(path, bytes, {
        contentType: guessContentType(image.filename, contentType),
        cacheControl: '31536000',
        upsert: true,
      });
      if (error) throw new Error(`upload of "${path}" failed: ${error.message}`);

      return [image.url, bucket.getPublicUrl(path).data.publicUrl];
    })
  );

  return new Map(entries);
}

async function downloadImage(url) {
  let response;
  try {
    response = await fetch(url, {
      signal: AbortSignal.timeout(IMAGE_FETCH_TIMEOUT_MS),
      redirect: 'follow',
      cache: 'no-store',
      headers: { accept: 'image/*,*/*;q=0.8' },
    });
  } catch (error) {
    throw new Error(`download of ${url} failed: ${error.message}`);
  }
  if (!response.ok) throw new Error(`download of ${url} failed: HTTP ${response.status}`);

  const declaredLength = Number(response.headers.get('content-length'));
  if (declaredLength > MAX_IMAGE_BYTES) throw new Error(`${url} exceeds ${MAX_IMAGE_BYTES} bytes`);

  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length === 0) throw new Error(`download of ${url} returned no data`);
  if (bytes.length > MAX_IMAGE_BYTES) throw new Error(`${url} exceeds ${MAX_IMAGE_BYTES} bytes`);

  return { bytes, contentType: response.headers.get('content-type') };
}
