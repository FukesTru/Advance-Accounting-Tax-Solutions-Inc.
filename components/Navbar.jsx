'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';
import { Icon } from '@/components/Icons';
import { mainNav, serviceCategories, site } from '@/lib/site';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // 'Services' | 'Service Areas' | null
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close everything on navigation.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen || openMenu
          ? 'border-b border-navy/10 bg-white shadow-[0_6px_24px_-12px_rgba(11,37,69,0.35)]'
          : 'border-b border-transparent bg-white/90 backdrop-blur-sm'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8 xl:gap-4">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.mega) {
              // Deliberately NOT `relative` — the mega panel below anchors to
              // the sticky <header> so it spans the page container instead of
              // overflowing from a trigger-relative origin.
              return (
                <div
                  key={item.label}
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-2 font-display text-[0.875rem] font-semibold transition-colors xl:px-3 xl:text-[0.9rem] ${
                      isActive('/tax-services') ||
                      isActive('/accounting-cfo-services') ||
                      isActive('/business-advisory-services')
                        ? 'text-gold-700'
                        : 'text-navy hover:text-gold-700'
                    }`}
                  >
                    Services
                    <Chevron open={openMenu === item.label} />
                  </button>

                  {/*
                    Anchored to the <header> (left-0 right-0), not centred on the
                    trigger — the trigger sits left of centre, so a centred panel
                    ran off the left edge at narrower desktop widths.
                  */}
                  {openMenu === item.label ? (
                    <div className="absolute inset-x-0 top-full z-50 pt-3">
                      {/* Same container as the page body, so the panel's edges
                          line up with the logo and the header CTA. */}
                      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
                        <div className="grid grid-cols-3 gap-6 rounded-xl border border-navy/10 bg-white p-6 shadow-xl">
                          {serviceCategories.map((category) => (
                            <div key={category.slug}>
                              <Link
                                href={category.slug}
                                className="flex items-center gap-2 font-display text-sm font-bold text-navy hover:text-gold-700"
                              >
                                <span className="text-gold-700">
                                  <Icon name={category.icon} className="h-5 w-5" />
                                </span>
                                {category.title}
                              </Link>
                              <p className="mt-2 text-xs leading-relaxed text-slate-body">
                                {category.blurb}
                              </p>
                              <ul className="mt-3 space-y-1 border-t border-navy/10 pt-3">
                                {category.children.map((child) => (
                                  <li key={child.slug}>
                                    <Link
                                      href={child.slug}
                                      className="block rounded-md px-2 py-1.5 text-sm text-slate-body transition-colors hover:bg-navy-50 hover:text-navy"
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            if (item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                    className={`flex items-center gap-1.5 whitespace-nowrap rounded-md px-2 py-2 font-display text-[0.875rem] font-semibold transition-colors xl:px-3 xl:text-[0.9rem] ${
                      item.dropdown.some((link) => isActive(link.href))
                        ? 'text-gold-700'
                        : 'text-navy hover:text-gold-700'
                    }`}
                  >
                    <NavLabel item={item} />
                    <Chevron open={openMenu === item.label} />
                  </button>
                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full z-50 w-56 pt-3">
                      <ul className="rounded-xl border border-navy/10 bg-white p-2 shadow-xl">
                        {item.dropdown.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="block rounded-md px-3 py-2 text-sm text-slate-body transition-colors hover:bg-navy-50 hover:text-navy"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-md px-2 py-2 font-display text-[0.875rem] font-semibold transition-colors xl:px-3 xl:text-[0.9rem] ${
                  isActive(item.href) ? 'text-gold-700' : 'text-navy hover:text-gold-700'
                }`}
              >
                <NavLabel item={item} />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex xl:gap-4">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 whitespace-nowrap font-display text-[0.85rem] font-bold text-navy hover:text-gold-700 xl:text-sm"
          >
            <Icon name="phone" className="h-4 w-4 shrink-0 text-gold-700" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-lg bg-gold px-4 py-3 font-display text-[0.85rem] font-bold text-navy-900 shadow-sm transition-colors hover:bg-gold-600 hover:text-white xl:px-5 xl:text-sm"
          >
            <span className="xl:hidden">Free Consultation</span>
            <span className="hidden xl:inline">Schedule a Free Consultation</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-navy/15 text-navy lg:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="m5 5 14 14M19 5 5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-navy/10 bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="space-y-6 px-5 py-6">
            <Link
              href="/"
              className="block border-b border-navy/10 pb-4 font-display text-base font-bold text-navy"
            >
              Home
            </Link>

            {serviceCategories.map((category) => (
              <div key={category.slug}>
                <Link
                  href={category.slug}
                  className="flex items-center gap-2 font-display text-base font-bold text-navy"
                >
                  <span className="text-gold-700">
                    <Icon name={category.icon} className="h-5 w-5" />
                  </span>
                  {category.title}
                </Link>
                <ul className="mt-2 space-y-1 border-l-2 border-gold/40 pl-4">
                  {category.children.map((child) => (
                    <li key={child.slug}>
                      <Link href={child.slug} className="block py-1.5 text-sm text-slate-body">
                        {child.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-1 border-t border-navy/10 pt-5">
              <Link href="/about" className="block py-2 font-display font-semibold text-navy">
                About the Firm
              </Link>
              <Link href="/team" className="block py-2 font-display font-semibold text-navy">
                Our Team
              </Link>
              {serviceAreaLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 font-display font-semibold text-navy"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/testimonials" className="block py-2 font-display font-semibold text-navy">
                Client Reviews
              </Link>
              <Link href="/blog" className="block py-2 font-display font-semibold text-navy">
                Blog
              </Link>
              <Link href="/portal" className="block py-2 font-display font-semibold text-navy">
                Client Portal
              </Link>
              <Link href="/contact" className="block py-2 font-display font-semibold text-navy">
                Contact
              </Link>
            </div>

            <div className="space-y-3 border-t border-navy/10 pt-5">
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-lg bg-gold px-5 py-3.5 font-display text-sm font-bold text-navy-900"
              >
                Schedule a Free Consultation
              </Link>
              <a
                href={site.phoneHref}
                className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-navy/20 px-5 py-3.5 font-display text-sm font-bold text-navy"
              >
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

const serviceAreaLinks = mainNav.find((item) => item.dropdown)?.dropdown ?? [];

/** Full label from xl up; a shorter one below, where the row is tight. */
function NavLabel({ item }) {
  if (!item.short) return item.label;
  return (
    <>
      <span className="xl:hidden">{item.short}</span>
      <span className="hidden xl:inline">{item.label}</span>
    </>
  );
}

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
