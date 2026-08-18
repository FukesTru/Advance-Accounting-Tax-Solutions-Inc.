import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * Firm logo lockup.
 *
 * Two crops of the same artwork:
 *  - `logo.png`      mark + wordmark, tagline cropped. Used in the nav, where
 *                    the tagline would render at ~5px and read as noise.
 *  - `logo-full.png` the complete lockup including STRATEGY · COMPLIANCE ·
 *                    RESULTS, used at footer size where it is legible.
 *
 * The artwork is navy and silver on transparency, so on the navy footer it
 * sits on a white chip rather than disappearing into the background.
 *
 * No text wordmark alongside it — the name is inside the image.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const onNavy = variant === 'light';
  const src = onNavy ? '/images/logo-full.png' : '/images/logo.png';

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex shrink-0 items-center ${className}`}
    >
      <span
        className={
          onNavy
            ? 'inline-flex rounded-lg bg-white px-4 py-3 transition-transform duration-200 group-hover:scale-[1.02]'
            : 'inline-flex transition-transform duration-200 group-hover:scale-[1.02]'
        }
      >
        <Image
          src={src}
          alt=""
          width={onNavy ? 1000 : 900}
          height={onNavy ? 362 : 279}
          priority
          sizes={onNavy ? '260px' : '200px'}
          // 56px (sm:h-14) is the point at which "SOLUTIONS, INC." stops
          // being mush; the footer gets more room again for the tagline.
          className={onNavy ? 'h-20 w-auto' : 'h-12 w-auto sm:h-14'}
        />
      </span>
    </Link>
  );
}
