import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { Button, Section } from '@/components/primitives';
import { CTABanner, PageHero } from '@/components/sections';
import { articlePath, formatArticleDate, getPublishedArticle } from '@/lib/blog';
import { sanitizeArticleHtml } from '@/lib/sanitize';
import { blogPostingSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

// Rendered on first request and cached; the RankGPT webhook purges the page
// whenever the article is (re)published. The interval is only a safety net.
export const revalidate = 300;

async function slugFromParams(params) {
  const { slug } = await params;
  try {
    return decodeURIComponent(slug);
  } catch {
    return slug;
  }
}

export async function generateMetadata({ params }) {
  const article = await getPublishedArticle(await slugFromParams(params));
  if (!article) return {};

  return buildMetadata({
    title: article.title,
    description: article.meta_description ?? undefined,
    path: articlePath(article.slug),
    type: 'article',
    publishedTime: article.published_at,
    modifiedTime: article.updated_at ?? article.published_at,
    image: article.hero_image_url
      ? { url: article.hero_image_url, alt: article.hero_image_alt ?? article.title }
      : undefined,
  });
}

export default async function ArticlePage({ params }) {
  const article = await getPublishedArticle(await slugFromParams(params));
  if (!article) notFound();

  const body = sanitizeArticleHtml(article.content_html, { heroImageUrl: article.hero_image_url });
  const breadcrumb = [
    { name: 'Blog', href: '/blog' },
    { name: article.title, href: articlePath(article.slug) },
  ];

  return (
    <>
      <JsonLd data={[blogPostingSchema(article), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow={<time dateTime={article.published_at}>{formatArticleDate(article.published_at, article.language)}</time>}
        title={article.title}
        subtitle={article.meta_description}
      />

      <Section>
        <article
          lang={article.language && article.language !== 'en' ? article.language : undefined}
          className="mx-auto max-w-3xl"
        >
          {article.hero_image_url ? (
            <figure>
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-navy/10 bg-navy-50">
                <Image
                  src={article.hero_image_url}
                  alt={article.hero_image_alt ?? ''}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
            </figure>
          ) : null}

          <div
            className={`prose-article ${article.hero_image_url ? 'mt-10' : ''}`}
            // Sanitised in lib/sanitize.js before it gets here.
            dangerouslySetInnerHTML={{ __html: body }}
          />

          <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-8">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-gold-700"
            >
              <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
                &larr;
              </span>
              All articles
            </Link>
            <Button href="/contact" variant="gold">
              Ask about your situation
            </Button>
          </footer>
        </article>
      </Section>

      <CTABanner tone="shell" />
    </>
  );
}
