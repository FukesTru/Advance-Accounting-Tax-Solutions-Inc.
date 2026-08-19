import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import FAQ from '@/components/FAQ';
import MapEmbed from '@/components/MapEmbed';
import { Icon } from '@/components/Icons';
import {
  Button,
  Container,
  Eyebrow,
  Section,
  SectionHeading,
  TextLink,
} from '@/components/primitives';
import { addressLine, site } from '@/lib/site';

/* ------------------------------------------------------------------ */
/* Inner-page hero                                                     */
/* ------------------------------------------------------------------ */

export function PageHero({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-linear-to-b from-navy-50 to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <Container className="relative py-14 sm:py-18 lg:py-22">
        <FadeIn className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-4 text-4xl leading-[1.1] sm:text-5xl">
            {title}
            <span aria-hidden="true" className="mt-4 block h-1 w-20 rounded-full bg-gold" />
          </h1>
          {subtitle ? (
            <p className="mt-6 text-lg leading-relaxed text-slate-body">{subtitle}</p>
          ) : null}
          {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
        </FadeIn>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Service cards                                                       */
/* ------------------------------------------------------------------ */

export function ServiceCard({ href, title, blurb, icon = 'check', links = [], cta = 'Explore' }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7 shadow-[0_2px_18px_-14px_rgba(11,37,69,0.5)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_40px_-24px_rgba(11,37,69,0.55)]">
      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy transition-colors group-hover:bg-gold group-hover:text-navy-900">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 text-xl">
        <Link href={href} className="hover:text-gold-700">
          {title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">{blurb}</p>
      {links.length ? (
        <ul className="mt-5 space-y-1.5 border-t border-navy/10 pt-4 text-sm">
          {links.map((link) => (
            <li key={link.slug}>
              <Link href={link.slug} className="text-slate-body hover:text-navy hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-6">
        <TextLink href={href}>{cta}</TextLink>
      </div>
    </article>
  );
}

export function ServiceCardGrid({ items, columns = 3 }) {
  return (
    <div
      className={`grid gap-6 ${columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'}`}
    >
      {items.map((item, index) => (
        <FadeIn key={item.href} delay={index * 90} className="h-full">
          <ServiceCard {...item} />
        </FadeIn>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Process steps                                                       */
/* ------------------------------------------------------------------ */

export function ProcessSteps({ steps, eyebrow = 'How It Works', title, intro, tone = 'shell' }) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <FadeIn key={step.title} as="li" delay={index * 90} className="relative h-full">
            <div className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7">
              <span className="font-display text-4xl font-extrabold text-gold/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-slate-body">{step.text}</p>
            </div>
          </FadeIn>
        ))}
      </ol>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* CTA banners                                                         */
/* ------------------------------------------------------------------ */

/**
 * Closing / mid-page call to action.
 *
 * Rendered as an inset navy card on a light section rather than a full-bleed
 * navy band: the footer is also navy, so a full-bleed banner merged with it
 * into one undifferentiated slab. Trust badges deliberately live only in the
 * footer — showing them here too repeated the same four chips twice in a row.
 */
export function CTABanner({
  title = 'Ready for a tax and accounting partner who plans ahead?',
  text = 'Book a free consultation and we will map out exactly what you need — no pressure, no jargon.',
  primaryLabel = 'Schedule a Free Consultation',
  tone = 'white',
}) {
  return (
    <section className={`${tone === 'shell' ? 'bg-shell' : 'bg-white'} py-14 sm:py-16`}>
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-navy px-7 py-10 shadow-[0_24px_60px_-40px_rgba(11,37,69,0.9)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <h2 className="text-3xl leading-tight text-white sm:text-[2.1rem]">{title}</h2>
                <p className="mt-4 leading-relaxed text-navy-100">{text}</p>
                <p className="mt-4 text-sm text-navy-200">{site.responseTime}</p>
              </div>
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
                <Button href="/contact" variant="gold">
                  {primaryLabel}
                </Button>
                <Button href={site.phoneHref} variant="outlineLight">
                  <Icon name="phone" className="h-4 w-4" />
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ section                                                         */
/* ------------------------------------------------------------------ */

export function FAQSection({ faqs, title = 'Frequently Asked Questions', eyebrow = 'Questions', intro, tone = 'white' }) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
        <FadeIn>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <p className="mt-6 text-sm text-slate-body">
            Still have a question?{' '}
            <Link href="/contact" className="font-semibold text-navy underline hover:text-gold-700">
              Send it over
            </Link>{' '}
            or call{' '}
            <a href={site.phoneHref} className="font-semibold text-navy underline hover:text-gold-700">
              {site.phone}
            </a>
            .
          </p>
        </FadeIn>
        <FadeIn delay={120}>
          <FAQ faqs={faqs} />
        </FadeIn>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

/**
 * Wraps rather than using a fixed column count, so an odd number of stats
 * fills the last row instead of leaving a hole.
 */
export function StatRow({ stats, onDark = false }) {
  return (
    <dl className="flex flex-wrap gap-6">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`min-w-56 flex-1 rounded-xl border p-6 ${
            onDark ? 'border-white/15 bg-white/5' : 'border-navy/10 bg-shell'
          }`}
        >
          <dt className={`text-sm font-semibold ${onDark ? 'text-navy-100' : 'text-slate-body'}`}>
            {stat.label}
          </dt>
          <dd
            className={`mt-2 font-display text-3xl font-extrabold ${
              onDark ? 'text-gold' : 'text-navy'
            }`}
          >
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------------ */
/* Map + contact details                                               */
/* ------------------------------------------------------------------ */

export function MapBlock({
  eyebrow = 'Find Us',
  title = 'Visit the office or meet with us virtually',
  intro = 'Our office is in Ave Maria, minutes from both Naples and Fort Myers. Prefer to keep it remote? Most of our clients work with us entirely by video call and secure portal.',
  tone = 'white',
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-gold-700">
                <Icon name="pin" className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-display text-navy">Office</strong>
                <address className="not-italic text-slate-body">{addressLine}</address>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-gold-700">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-display text-navy">Phone</strong>
                <a href={site.phoneHref} className="text-slate-body hover:text-navy hover:underline">
                  {site.phone}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-gold-700">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-display text-navy">Email</strong>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-slate-body hover:text-navy hover:underline"
                >
                  {site.email}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 text-gold-700">
                <Icon name="clock" className="h-5 w-5" />
              </span>
              <span>
                <strong className="block font-display text-navy">Hours</strong>
                <ul className="text-slate-body">
                  {site.hours.map((entry) => (
                    <li key={entry.days}>
                      {entry.days}: {entry.time}
                    </li>
                  ))}
                </ul>
              </span>
            </li>
          </ul>
        </FadeIn>

        <FadeIn delay={120}>
          <MapEmbed title={`Google Map showing ${site.name} at ${addressLine}`} />
        </FadeIn>
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Related pages                                                       */
/* ------------------------------------------------------------------ */

export function RelatedLinks({ title = 'Related services', links }) {
  return (
    <Section tone="shell">
      <FadeIn>
        <h2 className="text-2xl">{title}</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex h-full flex-col justify-between gap-3 rounded-xl border border-navy/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
              >
                <span className="font-display text-[0.98rem] font-bold text-navy">{link.title}</span>
                <span className="text-sm text-slate-body">{link.text}</span>
                <span aria-hidden="true" className="font-display text-sm font-bold text-gold-700">
                  Learn more &rarr;
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Section>
  );
}

/* ------------------------------------------------------------------ */
/* Rich text block                                                     */
/* ------------------------------------------------------------------ */

export function ProseSection({ eyebrow, title, paragraphs, tone = 'white', children, aside }) {
  return (
    <Section tone={tone}>
      <div className={aside ? 'grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]' : ''}>
        <FadeIn>
          <SectionHeading eyebrow={eyebrow} title={title} />
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-body">
                {paragraph}
              </p>
            ))}
          </div>
          {children}
        </FadeIn>
        {aside ? <FadeIn delay={120}>{aside}</FadeIn> : null}
      </div>
    </Section>
  );
}
