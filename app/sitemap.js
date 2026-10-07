import { areas } from '@/lib/areas';
import { articleUrl, getPublishedArticles } from '@/lib/blog';
import { allServicePages, site } from '@/lib/site';

// Static pages are known at build time; blog articles arrive later through the
// RankGPT webhook, which purges this file on every delivery. The interval is a
// safety net.
export const revalidate = 3600;

/** Generates /sitemap.xml. */
export default async function sitemap() {
  const lastModified = new Date();
  const articles = await getPublishedArticles();

  const entries = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/team', priority: 0.8, changeFrequency: 'monthly' },
    ...allServicePages.map((page) => ({
      path: page.slug,
      priority: page.slug.split('/').length === 2 ? 0.9 : 0.8,
      changeFrequency: 'monthly',
    })),
    { path: '/areas', priority: 0.8, changeFrequency: 'monthly' },
    ...areas.map((area) => ({
      path: `/areas/${area.slug}`,
      priority: area.primary ? 0.9 : 0.7,
      changeFrequency: 'monthly',
    })),
    { path: '/portal', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  ];

  return [
    ...entries.map((entry) => ({
      url: `${site.url}${entry.path === '/' ? '' : entry.path}`,
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
    })),
    ...articles.map((article) => ({
      url: articleUrl(article.slug),
      lastModified: new Date(article.updated_at ?? article.published_at),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
