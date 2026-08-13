import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * Text wordmark, no graphic mark.
 *
 * Still the primary "go home" affordance alongside the explicit Home item in
 * the nav. If a mark is reinstated later, drop the image back in ahead of the
 * text block and give the light variant a white chip — its dark tones sink
 * into the navy footer otherwise.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const onNavy = variant === 'light';

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex shrink-0 flex-col leading-tight ${className}`}
    >
      <span
        className={`whitespace-nowrap font-display text-base font-bold tracking-tight transition-colors sm:text-lg ${
          onNavy ? 'text-white' : 'text-navy group-hover:text-gold-700'
        }`}
      >
        Advance Accounting
      </span>
      <span
        className={`whitespace-nowrap font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
          onNavy ? 'text-gold' : 'text-gold-700'
        }`}
      >
        &amp; Tax Solutions
      </span>
    </Link>
  );
}
