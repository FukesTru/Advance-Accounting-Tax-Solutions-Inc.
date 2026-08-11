import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

const MARK_SRC = '/images/logo-mark.png';
const MARK_W = 512;
const MARK_H = 435;

/**
 * Firm lockup: the growth-arrow mark plus the wordmark.
 *
 * The mark's darker teals sit close to the navy footer, so the `light` variant
 * places it on a white chip rather than letting it fade into the background.
 */
export default function Logo({ variant = 'dark', className = '' }) {
  const onNavy = variant === 'light';

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group flex shrink-0 items-center gap-3 ${className}`}
    >
      <span
        className={`flex shrink-0 items-center justify-center rounded-lg transition-transform duration-200 group-hover:scale-105 ${
          onNavy ? 'bg-white p-1.5' : ''
        }`}
      >
        <Image
          src={MARK_SRC}
          alt=""
          width={MARK_W}
          height={MARK_H}
          priority
          sizes="56px"
          className="h-9 w-auto sm:h-10"
        />
      </span>

      <span className="flex flex-col leading-tight">
        <span
          className={`whitespace-nowrap font-display text-[0.95rem] font-bold tracking-tight sm:text-base ${
            onNavy ? 'text-white' : 'text-navy'
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
      </span>
    </Link>
  );
}
