/**
 * Pure helpers for the RankGPT webhook (app/api/rankgpt-webhook/route.js):
 * request authentication, payload validation, and URL rewriting.
 *
 * Nothing here touches the network or the database, so every function is
 * covered by `npm test` (tests/rankgpt.test.mjs).
 */
import { createHash, timingSafeEqual } from 'node:crypto';

const MAX_ID_LENGTH = 200;
const MAX_SLUG_LENGTH = 200;
const MAX_LANGUAGE_LENGTH = 35;
const MAX_FILENAME_LENGTH = 150;
const MAX_IMAGES = 100;

/* ------------------------------------------------------------------ */
/* Authentication                                                      */
/* ------------------------------------------------------------------ */

/**
 * Constant-time comparison of two secrets. Both sides are hashed first so the
 * comparison always runs over equal-length buffers and neither the length nor
 * the position of the first mismatch leaks through timing.
 */
export function secretsMatch(provided, expected) {
  if (typeof provided !== 'string' || typeof expected !== 'string' || expected.length === 0) {
    return false;
  }
  const a = createHash('sha256').update(provided).digest();
  const b = createHash('sha256').update(expected).digest();
  return timingSafeEqual(a, b);
}

/** Secrets a request presents: `Authorization: Bearer <secret>` and/or `X-API-Key: <secret>`. */
export function presentedSecrets(headers) {
  const candidates = [];
  const authorization = headers.get('authorization');
  if (authorization) {
    const match = /^\s*bearer\s+(.+?)\s*$/i.exec(authorization);
    if (match) candidates.push(match[1]);
  }
  const apiKey = headers.get('x-api-key');
  if (apiKey && apiKey.trim()) candidates.push(apiKey.trim());
  return candidates;
}

export function isAuthorized(headers, expected) {
  // Check every candidate rather than returning on the first hit, so the
  // response time does not depend on which header carried the match.
  return presentedSecrets(headers).reduce(
    (authorized, candidate) => secretsMatch(candidate, expected) || authorized,
    false
  );
}

/* ------------------------------------------------------------------ */
/* Payload validation                                                  */
/* ------------------------------------------------------------------ */

function fail(error) {
  return { ok: false, error };
}

function isPlainObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function requiredString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

function optionalString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null;
}

export function isHttpUrl(value) {
  if (typeof value !== 'string') return false;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' || url.protocol === 'http:';
  } catch {
    return false;
  }
}

/**
 * Lower-cases and trims the slug and rejects anything that cannot sit in one
 * URL path segment. Returns null when the slug is unusable.
 */
export function normalizeSlug(value) {
  if (typeof value !== 'string') return null;
  const slug = value.trim().toLowerCase();
  if (!slug || slug.length > MAX_SLUG_LENGTH) return null;
  if (slug === '.' || slug === '..') return null;
  // eslint-disable-next-line no-control-regex
  if (/[\s/\\?#%]|[\u0000-\u001f\u007f]/.test(slug)) return null;
  return slug;
}

function parseIsoDate(value) {
  if (typeof value !== 'string' || !value.trim()) return null;
  const time = Date.parse(value);
  return Number.isNaN(time) ? null : new Date(time).toISOString();
}

/**
 * Reduces a filename to a single safe path segment: no directories, no query
 * strings, ASCII letters, digits, dot, dash and underscore only. Falls back to
 * the last segment of the source URL, then to a positional name.
 */
export function safeFilename(filename, url, index = 0) {
  let name = typeof filename === 'string' ? filename : '';
  name = name.split(/[\\/]/).pop().split(/[?#]/)[0];

  if (!name) {
    try {
      name = decodeURIComponent(new URL(url).pathname.split('/').pop() ?? '');
    } catch {
      name = '';
    }
  }

  name = name
    .normalize('NFKD')
    .replace(/[^\x20-\x7e]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^[.\-_]+/, '')
    .replace(/[.\-_]+$/, '');

  if (name.length > MAX_FILENAME_LENGTH) {
    const dot = name.lastIndexOf('.');
    const extension = dot > 0 && name.length - dot <= 10 ? name.slice(dot) : '';
    name = name.slice(0, MAX_FILENAME_LENGTH - extension.length) + extension;
  }

  return name || `image-${index + 1}`;
}

function safeSegment(value) {
  const segment = String(value)
    .normalize('NFKD')
    .replace(/[^\x20-\x7e]/g, '')
    .replace(/[^A-Za-z0-9._-]+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^[.\-_]+|[.\-_]+$/g, '');
  return segment || 'article';
}

/**
 * Where an article's image lives inside the bucket. Files are grouped under
 * the article id so two articles that both ship `image-1.jpg` cannot overwrite
 * each other, while a resend of the same article overwrites its own files.
 */
export function storagePath(articleId, filename) {
  return `${safeSegment(articleId)}/${filename}`;
}

const CONTENT_TYPES = {
  avif: 'image/avif',
  bmp: 'image/bmp',
  gif: 'image/gif',
  ico: 'image/x-icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  webp: 'image/webp',
};

/** Prefers the extension; falls back to what the origin server declared. */
export function guessContentType(filename, declared) {
  const extension = filename.includes('.') ? filename.split('.').pop().toLowerCase() : '';
  if (CONTENT_TYPES[extension]) return CONTENT_TYPES[extension];
  const header = typeof declared === 'string' ? declared.split(';')[0].trim().toLowerCase() : '';
  if (header && header !== 'application/octet-stream') return header;
  return 'application/octet-stream';
}

function parseImages(raw, { heroImageUrl, heroImageAlt }) {
  if (raw !== undefined && raw !== null && !Array.isArray(raw)) {
    return fail('"images" must be an array.');
  }
  const list = raw ?? [];
  if (list.length > MAX_IMAGES) return fail(`"images" may hold at most ${MAX_IMAGES} items.`);

  const images = [];
  const seen = new Set();

  list.forEach((item, index) => {
    if (!isPlainObject(item)) {
      images.push(fail(`"images[${index}]" must be an object.`));
      return;
    }
    if (!isHttpUrl(item.url)) {
      images.push(fail(`"images[${index}].url" must be an http(s) URL.`));
      return;
    }
    if (seen.has(item.url)) return;
    seen.add(item.url);
    images.push({
      url: item.url,
      filename: safeFilename(item.filename, item.url, index),
      alt: optionalString(item.alt),
      is_hero: item.is_hero === true,
    });
  });

  const invalid = images.find((image) => image.ok === false);
  if (invalid) return invalid;

  // The hero is normally the first entry in `images`; if it was left out, mirror
  // it anyway so the stored hero never points back at RankGPT.
  if (heroImageUrl && !seen.has(heroImageUrl)) {
    images.unshift({
      url: heroImageUrl,
      filename: safeFilename(null, heroImageUrl, images.length),
      alt: heroImageAlt,
      is_hero: true,
    });
  }

  return { ok: true, value: images };
}

/**
 * Validates and normalises a webhook body.
 * Returns `{ ok: true, value }` or `{ ok: false, error }` with a short,
 * client-facing message suitable for a 400 response.
 */
export function parseWebhookPayload(body) {
  if (!isPlainObject(body)) return fail('Body must be a JSON object.');

  const event = requiredString(body.event);
  if (!event) return fail('"event" is required.');
  if (event === 'test') return { ok: true, value: { event } };

  const id = requiredString(body.id);
  if (!id) return fail('"id" is required.');
  if (id.length > MAX_ID_LENGTH) return fail(`"id" may be at most ${MAX_ID_LENGTH} characters.`);

  const title = requiredString(body.title);
  if (!title) return fail('"title" is required.');

  const slug = normalizeSlug(body.slug);
  if (!slug) {
    return fail('"slug" is required and may not contain whitespace, slashes, "?", "#" or "%".');
  }

  if (typeof body.content_html !== 'string' || !body.content_html.trim()) {
    return fail('"content_html" is required.');
  }
  if (body.content_markdown !== undefined && body.content_markdown !== null && typeof body.content_markdown !== 'string') {
    return fail('"content_markdown" must be a string.');
  }

  if (body.status !== 'publish' && body.status !== 'draft') {
    return fail('"status" must be "publish" or "draft".');
  }

  const published_at = parseIsoDate(body.published_at);
  if (!published_at) return fail('"published_at" must be an ISO 8601 date-time.');

  const hero_image_url = optionalString(body.hero_image_url);
  if (hero_image_url && !isHttpUrl(hero_image_url)) {
    return fail('"hero_image_url" must be an http(s) URL or null.');
  }
  const hero_image_alt = optionalString(body.hero_image_alt);

  const images = parseImages(body.images, { heroImageUrl: hero_image_url, heroImageAlt: hero_image_alt });
  if (!images.ok) return images;

  const language = (optionalString(body.language) ?? 'en').slice(0, MAX_LANGUAGE_LENGTH);

  return {
    ok: true,
    value: {
      event,
      id,
      title,
      slug,
      meta_description: optionalString(body.meta_description),
      content_html: body.content_html,
      content_markdown: body.content_markdown ?? '',
      hero_image_url,
      hero_image_alt,
      images: images.value,
      language,
      status: body.status,
      published_at,
    },
  };
}

/* ------------------------------------------------------------------ */
/* URL rewriting                                                       */
/* ------------------------------------------------------------------ */

function escapeAmpersands(value) {
  return value.replaceAll('&', '&amp;');
}

/**
 * Replaces every occurrence of each original URL with its mirrored URL.
 * Longer URLs go first so `…/a.jpg?w=800` is never half-rewritten by
 * `…/a.jpg`. URLs containing `&` are also swapped in their HTML-escaped form,
 * which is how they appear inside attributes.
 */
export function rewriteUrls(text, replacements) {
  if (typeof text !== 'string' || !text) return text;
  const pairs = [...(replacements instanceof Map ? replacements.entries() : replacements)]
    .filter(([from, to]) => from && to && from !== to)
    .sort((a, b) => b[0].length - a[0].length);

  let output = text;
  for (const [from, to] of pairs) {
    output = output.split(from).join(to);
    if (from.includes('&')) {
      output = output.split(escapeAmpersands(from)).join(escapeAmpersands(to));
    }
  }
  return output;
}
