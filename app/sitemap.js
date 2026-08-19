import { areas } from '@/lib/areas';
import { allServicePages, site } from '@/lib/site';

/** Generates /sitemap.xml at build time. */
export default function sitemap() {
  const lastModified = new Date();

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
    { path: '/testimonials', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/portal', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  ];

  return entries.map((entry) => ({
    url: `${site.url}${entry.path === '/' ? '' : entry.path}`,
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
