import 'server-only';
import { cache } from 'react';
import { BLOG_TABLE, getSupabase, isSupabaseConfigured } from '@/lib/supabase';
import { site } from '@/lib/site';

/**
 * Read side of the blog. Articles arrive through the RankGPT webhook
 * (app/api/rankgpt-webhook/route.js) and live in the `blog_articles` table —
 * see supabase/migrations for the schema.
 *
 * Without Supabase credentials every query resolves to "no articles", so the
 * site still builds and runs (with an empty blog) in environments that have
 * not been configured yet.
 */

const LIST_COLUMNS =
  'id, slug, title, meta_description, content_html, hero_image_url, hero_image_alt, language, status, published_at, updated_at';

export function articlePath(slug) {
  return `/blog/${encodeURIComponent(slug)}`;
}

export function articleUrl(slug) {
  return `${site.url}${articlePath(slug)}`;
}

/** Published articles, newest first. */
export async function getPublishedArticles() {
  if (!isSupabaseConfigured()) return [];
  const { data, error } = await getSupabase()
    .from(BLOG_TABLE)
    .select(LIST_COLUMNS)
    .eq('status', 'publish')
    .order('published_at', { ascending: false });
  if (error) throw new Error(`Could not load blog articles: ${error.message}`);
  return data ?? [];
}

/**
 * One published article by slug, or null (drafts and unknown slugs alike).
 * Memoised per request: generateMetadata and the page body both ask for it.
 */
export const getPublishedArticle = cache(async function getPublishedArticle(slug) {
  if (!isSupabaseConfigured() || !slug) return null;
  const { data, error } = await getSupabase()
    .from(BLOG_TABLE)
    .select('*')
    .eq('slug', slug)
    .eq('status', 'publish')
    .maybeSingle();
  if (error) throw new Error(`Could not load blog article "${slug}": ${error.message}`);
  return data ?? null;
});

/** "October 7, 2026" in the article's language, in the firm's time zone. */
export function formatArticleDate(iso, language = 'en') {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' };
  try {
    return new Intl.DateTimeFormat(language || 'en', options).format(date);
  } catch {
    return new Intl.DateTimeFormat('en', options).format(date);
  }
}

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

/** Plain-text teaser for cards when RankGPT sent no meta description. */
export function excerptFromHtml(html, maxLength = 160) {
  if (typeof html !== 'string') return '';
  const text = html
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (entity) => ENTITIES[entity] ?? ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= maxLength) return text;
  const cut = text.slice(0, maxLength);
  return `${cut.slice(0, Math.max(cut.lastIndexOf(' '), 60)).trimEnd()}…`;
}

export function articleExcerpt(article) {
  return article.meta_description || excerptFromHtml(article.content_html);
}
