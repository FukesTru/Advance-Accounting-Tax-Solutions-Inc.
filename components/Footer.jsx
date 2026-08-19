import Link from 'next/link';
import Logo from '@/components/Logo';
import { Icon } from '@/components/Icons';
import { Container } from '@/components/primitives';
import { addressLine, serviceAreas, serviceCategories, site, trustBadges } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-navy-100">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Column 1 — identity + trust badges */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-100">
              Tax planning, accounting, and fractional CFO support for individuals and business
              owners in Fort Myers, Naples, and across the country.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <li
                  key={badge}
                  className="rounded-full border border-gold/40 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-gold"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — services */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link href={category.slug} prefetch={false} className="hover:text-gold hover:underline">
                    {category.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" prefetch={false} className="hover:text-gold hover:underline">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/testimonials" prefetch={false} className="hover:text-gold hover:underline">
                  Client Reviews
                </Link>
              </li>
              <li>
                <Link href="/team" prefetch={false} className="hover:text-gold hover:underline">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — service areas */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Service Areas
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link href={area.slug} prefetch={false} className="hover:text-gold hover:underline">
                    {area.city}, FL
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/areas" prefetch={false} className="font-semibold hover:text-gold hover:underline">
                  All service areas
                </Link>
              </li>
              <li className="pt-1 text-navy-200">Remote service nationwide</li>
            </ul>

            {/* TODO(client): link a LinkedIn profile here once it exists. */}
            <p className="mt-6 text-xs text-navy-200">Social profiles coming soon.</p>
          </div>

          {/* Column 4 — contact + hours */}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="flex items-start gap-2.5 hover:text-gold">
                  <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-start gap-2.5 break-all hover:text-gold">
                  <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <address className="not-italic">{addressLine}</address>
              </li>
            </ul>

            <h3 className="mt-7 flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              <Icon name="clock" className="h-4 w-4 text-gold" />
              Hours
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              {site.hours.map((entry) => (
                <li key={entry.days} className="flex justify-between gap-4">
                  <span>{entry.days}</span>
                  <span className="text-navy-200">{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-200 sm:flex-row">
            <p>
              &copy; {year} {site.name} All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy-policy" prefetch={false} className="hover:text-gold hover:underline">
                Privacy Policy
              </Link>
              <Link href="/portal" prefetch={false} className="hover:text-gold hover:underline">
                Client Portal
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
