'use client';

import { useState } from 'react';
import { Icon } from '@/components/Icons';
import { addressLine, mapEmbedSrc, site } from '@/lib/site';

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${site.name}, ${addressLine}`
)}`;

/**
 * Facade for the Google Maps embed.
 *
 * The iframe pulls roughly half a megabyte of third-party JavaScript and is
 * the single heaviest thing on any page that shows it. Almost nobody
 * interacts with it — they read the address. So the map only mounts once the
 * visitor asks for it; until then this renders a styled, accessible block
 * carrying the same information plus a direct link to Google Maps.
 */
export default function MapEmbed({ title }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="overflow-hidden rounded-2xl border border-navy/10 shadow-sm">
        <iframe
          title={title}
          src={mapEmbedSrc}
          width="100%"
          height="420"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0 }}
        />
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-navy/10 bg-linear-to-br from-navy via-navy-600 to-navy-900 shadow-sm">
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl"
      />
      {/* Decorative street-grid hint, drawn rather than fetched. */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        preserveAspectRatio="none"
        viewBox="0 0 400 280"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
      >
        <path d="M-10 70h420M-10 150h420M-10 220h420M80 -10v300M190 -10v300M300 -10v300" />
        <path d="M-10 250 120 150 260 190 420 90" strokeWidth="3" />
      </svg>

      <div className="relative flex min-h-[420px] flex-col items-center justify-center gap-5 p-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
          <Icon name="pin" className="h-7 w-7" />
        </span>
        <div>
          <p className="font-display text-lg font-bold text-white">{site.name}</p>
          <address className="mt-1 not-italic text-navy-100">{addressLine}</address>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold px-5 py-3 font-display text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600 hover:text-white"
          >
            <Icon name="pin" className="h-4 w-4" />
            Load interactive map
          </button>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-5 py-3 font-display text-sm font-bold text-white transition-colors hover:border-white hover:bg-white hover:text-navy"
          >
            Get directions
          </a>
        </div>

        <p className="max-w-xs text-xs text-navy-200">
          The map loads from Google only when you ask for it, so the page stays fast.
        </p>
      </div>
    </div>
  );
}
