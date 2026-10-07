-- Blog articles delivered by RankGPT through /api/rankgpt-webhook.
-- Run this once against the project (SQL editor or `supabase db push`).

create table if not exists public.blog_articles (
  id               text primary key,          -- RankGPT article id (stable across resends)
  slug             text not null,
  title            text not null,
  meta_description text,
  content_html     text not null,             -- image URLs already rewritten to this site's storage
  content_markdown text,
  hero_image_url   text,
  hero_image_alt   text,
  language         text not null default 'en',
  status           text not null check (status in ('publish', 'draft')),
  published_at     timestamptz not null,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);

-- Every article needs its own URL.
create unique index if not exists blog_articles_slug_key
  on public.blog_articles (slug);

-- The /blog index: published articles, newest first.
create index if not exists blog_articles_published_idx
  on public.blog_articles (status, published_at desc);

-- The site reads and writes with the service-role key, which bypasses RLS.
-- Anyone holding only the anon key may read published articles; drafts stay private.
alter table public.blog_articles enable row level security;

drop policy if exists "Published articles are public" on public.blog_articles;
create policy "Published articles are public"
  on public.blog_articles
  for select
  using (status = 'publish');

-- Public bucket for article images (the webhook copies them here because
-- RankGPT deletes its own copies soon after publishing).
insert into storage.buckets (id, name, public)
values ('blog-images', 'blog-images', true)
on conflict (id) do nothing;
