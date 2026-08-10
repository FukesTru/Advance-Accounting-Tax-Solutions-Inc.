/**
 * Image slots for the site.
 *
 * This container's network policy blocks every image CDN (images.unsplash.com
 * returns 403 at the egress proxy), so no photography could be downloaded or
 * verified during the build. Every slot therefore ships with a branded
 * gradient placeholder that always renders, plus a candidate Unsplash URL to
 * drop in once real or licensed photography is available.
 *
 * To switch a slot to a photo: set `src` and keep `alt` accurate.
 * To switch ALL slots to their `unsplash` candidates at once:
 *   NEXT_PUBLIC_USE_STOCK_IMAGES=1 next build
 * (remote hosts are already allow-listed in next.config.mjs)
 *
 * TODO(client): replace `unsplash` candidates with the real photos in the
 * Drive folder (office, Joseph, SWFL) wherever coverage exists.
 */

import { existsSync } from 'node:fs';
import path from 'node:path';

const useStock = process.env.NEXT_PUBLIC_USE_STOCK_IMAGES === '1';

/**
 * Resolves the first candidate that actually exists in /public, so dropping a
 * file in is the only step required — no code change, and a removed file
 * degrades to the placeholder instead of a broken image.
 */
function firstLocal(candidates = []) {
  return (
    candidates.find((candidate) =>
      existsSync(path.join(process.cwd(), 'public', candidate))
    ) ?? null
  );
}

function slot({ key, alt, icon = 'users', unsplash, local = [], aspect = '4/3' }) {
  const localSrc = firstLocal(local);
  return {
    key,
    alt,
    icon,
    unsplash,
    aspect,
    // Real photography always wins over stock and over the placeholder.
    src: localSrc ?? (useStock ? unsplash : null),
  };
}

export const images = {
  heroHome: slot({
    key: 'heroHome',
    alt: 'Joseph F. Fragnoli, CPA, President and CEO of Advance Accounting & Tax Solutions, Inc.',
    icon: 'users',
    // Falls back to the headshot until a wider office/hero photo is supplied.
    local: ['/images/hero.jpg', '/images/joseph.jpg'],
    aspect: 'square',
    unsplash: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=70&auto=format&fit=crop',
  }),
  story: slot({
    key: 'story',
    alt: 'Advance Accounting & Tax Solutions team reviewing financial statements together',
    icon: 'growth',
    unsplash: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=70&auto=format&fit=crop',
  }),
  joseph: slot({
    key: 'joseph',
    alt: 'Joseph F. Fragnoli, CPA, President and CEO of Advance Accounting & Tax Solutions, Inc.',
    icon: 'users',
    local: ['/images/joseph.jpg'],
    aspect: 'square',
    unsplash: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=70&auto=format&fit=crop',
  }),
  taxServices: slot({
    key: 'taxServices',
    alt: 'Tax planning documents and a calculator on a desk',
    icon: 'tax',
    unsplash: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=70&auto=format&fit=crop',
  }),
  accounting: slot({
    key: 'accounting',
    alt: 'Monthly financial reports and charts on a laptop screen',
    icon: 'chart',
    unsplash: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=70&auto=format&fit=crop',
  }),
  advisory: slot({
    key: 'advisory',
    alt: 'Business owner and advisor discussing a growth plan',
    icon: 'compass',
    unsplash: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1000&q=70&auto=format&fit=crop',
  }),
  fortMyers: slot({
    key: 'fortMyers',
    alt: 'Palm-lined street in Fort Myers, Florida',
    icon: 'pin',
    unsplash: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1000&q=70&auto=format&fit=crop',
  }),
  naples: slot({
    key: 'naples',
    alt: 'Naples, Florida waterfront at golden hour',
    icon: 'pin',
    unsplash: 'https://images.unsplash.com/photo-1571041519170-9c1e0d69e5e0?w=1000&q=70&auto=format&fit=crop',
  }),
  portal: slot({
    key: 'portal',
    alt: 'Client securely uploading tax documents from a laptop',
    icon: 'lock',
    unsplash: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=70&auto=format&fit=crop',
  }),
  blog: slot({
    key: 'blog',
    alt: 'Notebook, coffee, and financial charts on a desk',
    icon: 'doc',
    unsplash: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&q=70&auto=format&fit=crop',
  }),
};
