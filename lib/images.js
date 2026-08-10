import { existsSync } from 'node:fs';
import path from 'node:path';

/**
 * Image slots for the site.
 *
 * Each slot resolves the first candidate in `local` that actually exists in
 * /public, so adding photography is a matter of dropping a file in and naming
 * it here — and removing one degrades to the branded placeholder rather than a
 * broken image.
 *
 * Slots still awaiting photography are marked NEEDS PHOTO; see CONTENT-TODO.md
 * for the shot list. Every slot also carries a candidate Unsplash URL, used
 * only when NEXT_PUBLIC_USE_STOCK_IMAGES=1 and no local file is present. Those
 * URLs are UNVERIFIED — this build environment blocks image CDNs, so they could
 * not be fetched to confirm what they show.
 */

const useStock = process.env.NEXT_PUBLIC_USE_STOCK_IMAGES === '1';

function firstLocal(candidates = []) {
  return (
    candidates.find((candidate) => existsSync(path.join(process.cwd(), 'public', candidate))) ?? null
  );
}

function slot({ key, alt, icon = 'users', unsplash, local = [], aspect = '4/3', focus = 'center' }) {
  const localSrc = firstLocal(local);
  return {
    key,
    alt,
    icon,
    unsplash,
    aspect,
    focus,
    // Real photography always wins over stock and over the placeholder.
    src: localSrc ?? (useStock ? unsplash : null),
  };
}

export const images = {
  /* -------------------------------------------------------------- */
  /* Joseph — About page and homepage hero                           */
  /* -------------------------------------------------------------- */
  heroHome: slot({
    key: 'heroHome',
    alt: 'Joseph F. Fragnoli, CPA, President and CEO of Advance Accounting & Tax Solutions, Inc.',
    icon: 'users',
    // A wider office/hero photo dropped in as hero.jpg takes over automatically.
    local: ['/images/hero.jpg', '/images/joseph.jpg'],
    aspect: 'square',
    unsplash: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=70&auto=format&fit=crop',
  }),
  joseph: slot({
    key: 'joseph',
    alt: 'Joseph F. Fragnoli, CPA, President and CEO of Advance Accounting & Tax Solutions, Inc.',
    icon: 'users',
    local: ['/images/joseph.jpg'],
    aspect: 'square',
    unsplash: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=70&auto=format&fit=crop',
  }),

  /* -------------------------------------------------------------- */
  /* Analysis — homepage story, fractional CFO, business advisory     */
  /* -------------------------------------------------------------- */
  analysis: slot({
    key: 'analysis',
    alt: 'Advisor and client reviewing financial charts together with a notepad and calculator',
    icon: 'growth',
    local: ['/images/analysis.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1000&q=70&auto=format&fit=crop',
  }),

  /* -------------------------------------------------------------- */
  /* Accounting — accounting hub, bookkeeping, payroll                */
  /* -------------------------------------------------------------- */
  accounting: slot({
    key: 'accounting',
    alt: 'Calculator resting on printed financial reports beside a laptop on an accountant’s desk',
    icon: 'chart',
    local: ['/images/accounting-desk.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&q=70&auto=format&fit=crop',
  }),

  /* -------------------------------------------------------------- */
  /* Tax — compliance-leaning pages                                   */
  /* -------------------------------------------------------------- */
  taxForms: slot({
    key: 'taxForms',
    alt: 'IRS Publication 505 tax withholding forms and Schedule D laid out in a folder with a pen',
    icon: 'doc',
    local: ['/images/tax-forms.jpg'],
    aspect: '2/3',
    unsplash: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=70&auto=format&fit=crop',
  }),

  /* -------------------------------------------------------------- */
  /* Tax — planning-leaning pages                                     */
  /* -------------------------------------------------------------- */
  taxDesk: slot({
    key: 'taxDesk',
    alt: 'IRS tax forms and a pen on a desk beside a cup of coffee',
    icon: 'tax',
    local: ['/images/tax-desk.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&q=70&auto=format&fit=crop',
  }),

  /* -------------------------------------------------------------- */
  /* NEEDS PHOTO                                                      */
  /* -------------------------------------------------------------- */
  advisory: slot({
    key: 'advisory',
    // NEEDS PHOTO: business owner and advisor in conversation, or a meeting at the office.
    alt: 'Business owner and advisor discussing an entity structure and growth plan',
    icon: 'compass',
    local: ['/images/advisory.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1000&q=70&auto=format&fit=crop',
  }),
  fortMyers: slot({
    key: 'fortMyers',
    // NEEDS PHOTO: recognizable Fort Myers / Lee County scene.
    alt: 'Palm-lined street in Fort Myers, Florida',
    icon: 'pin',
    local: ['/images/fort-myers.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1000&q=70&auto=format&fit=crop',
  }),
  naples: slot({
    key: 'naples',
    // NEEDS PHOTO: recognizable Naples / Collier County scene.
    alt: 'Naples, Florida waterfront at golden hour',
    icon: 'pin',
    local: ['/images/naples.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1571041519170-9c1e0d69e5e0?w=1000&q=70&auto=format&fit=crop',
  }),
  portal: slot({
    key: 'portal',
    // NEEDS PHOTO: someone uploading documents from a laptop or phone.
    alt: 'Client securely uploading tax documents from a laptop',
    icon: 'lock',
    local: ['/images/portal.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1000&q=70&auto=format&fit=crop',
  }),
  blog: slot({
    key: 'blog',
    // NEEDS PHOTO: reading/writing scene, or the office.
    alt: 'Notebook, coffee, and financial charts on a desk',
    icon: 'doc',
    local: ['/images/blog.jpg'],
    unsplash: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1000&q=70&auto=format&fit=crop',
  }),
};
