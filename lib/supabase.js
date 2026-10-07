import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Server-side Supabase access.
 *
 * The site talks to Supabase from the server only — the webhook route writes
 * articles and images, and the blog pages read them while rendering. Both use
 * the service-role key, which is why none of these variables carry the
 * NEXT_PUBLIC_ prefix: they must never reach the browser bundle.
 *
 * Required environment:
 *   SUPABASE_URL                 https://<project-ref>.supabase.co
 *   SUPABASE_SERVICE_ROLE_KEY    Project Settings → API → service_role
 * Optional:
 *   SUPABASE_BLOG_BUCKET         Storage bucket for article images (default: blog-images)
 */

export const BLOG_TABLE = 'blog_articles';
export const BLOG_BUCKET = process.env.SUPABASE_BLOG_BUCKET || 'blog-images';

let client = null;

export function isSupabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getSupabase() {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase is not configured: set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.');
  }
  client ??= createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
  return client;
}
