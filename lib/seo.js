import { site } from '@/lib/site';

/**
 * Builds a complete Next.js Metadata object: unique title, 150–160 char
 * description, canonical URL, and Open Graph / Twitter tags.
 */
export function buildMetadata({ title, description, path = '/', noindex = false }) {
  const url = `${site.url}${path === '/' ? '' : path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
