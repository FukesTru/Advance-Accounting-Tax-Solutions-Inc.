import Link from 'next/link';
import { site } from '@/lib/site';

/**
 * Placeholder wordmark lockup: "AATS" monogram + full firm name.
 * TODO(client): replace with the final designed logo when it is delivered.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const onNavy = variant === 'light';

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border font-display text-[0.95rem] font-extrabold tracking-tight transition-colors ${
          onNavy
            ? 'border-gold/60 bg-navy-900 text-gold'
            : 'border-navy/15 bg-navy text-gold'
        }`}
      >
        {site.initials}
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-[0.95rem] font-bold tracking-tight sm:text-base ${
            onNavy ? 'text-white' : 'text-navy'
          }`}
        >
          Advance Accounting
        </span>
        <span
          className={`font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${
            onNavy ? 'text-gold' : 'text-gold-600'
          }`}
        >
          &amp; Tax Solutions
        </span>
      </span>
    </Link>
  );
}
