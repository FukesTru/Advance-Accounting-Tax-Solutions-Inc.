import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Icon } from '@/components/Icons';
import { CheckList, Section, SectionHeading } from '@/components/primitives';
import {
  CTABanner,
  FAQSection,
  MapBlock,
  PageHero,
  ProcessSteps,
  ProseSection,
  RelatedLinks,
  ServiceCardGrid,
} from '@/components/sections';
import { serviceCategories, site } from '@/lib/site';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

/* ================================================================== */
/* Template A — Service category (parent) page                         */
/* ================================================================== */

export function CategoryPageTemplate({
  breadcrumb,
  eyebrow,
  h1,
  subtitle,
  intro,
  introHeading,
  categorySlug,
  included,
  includedHeading = "What's Included",
  process,
  processTitle,
  midCta,
  faqs,
  related,
  schema,
  image,
}) {
  const category = serviceCategories.find((item) => item.slug === categorySlug);
  const cards =
    category?.children.map((child) => ({
      href: child.slug,
      title: child.title,
      blurb: child.blurb,
      icon: category.icon,
      cta: 'View service',
    })) ?? [];

  return (
    <>
      <JsonLd data={[...schema, faqSchema(faqs), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero eyebrow={eyebrow} title={h1} subtitle={subtitle}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600 hover:text-white"
        >
          Schedule a Free Consultation
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy/20 px-6 py-3.5 font-display text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <Icon name="phone" className="h-4 w-4" />
          {site.phone}
        </a>
      </PageHero>

      <ProseSection
        eyebrow="Overview"
        title={introHeading}
        paragraphs={intro}
        aside={<Media image={image} sizes="(max-width: 1024px) 100vw, 34vw" />}
      />

      <Section tone="shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title={`Explore our ${category?.title.toLowerCase()}`}
            intro="Every engagement starts with understanding your situation — then we recommend only what actually moves the needle."
          />
        </FadeIn>
        <div className="mt-12">
          <ServiceCardGrid items={cards} columns={cards.length === 2 ? 2 : 3} />
        </div>
      </Section>

      {/* Full-width heading over a two-column list. Previously the heading sat
          alone in a narrow track beside a long list, leaving most of the left
          half of the section empty. */}
      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Scope"
            title={includedHeading}
            intro="Everything below is in scope from day one — no add-on line items once we are working together."
          />
        </FadeIn>
        <FadeIn delay={120}>
          <div className="mt-10">
            <CheckList items={included} columns={2} />
          </div>
        </FadeIn>
      </Section>

      {/* Tones alternate strictly from here: shell, white, shell, white, shell.
          Two same-toned sections in a row merged into one oversized slab. */}
      <ProcessSteps
        tone="shell"
        steps={process}
        title={processTitle}
        intro="A simple, predictable path from first call to ongoing support."
      />

      <CTABanner title={midCta.title} text={midCta.text} tone="white" />

      <FAQSection faqs={faqs} tone="shell" />

      <RelatedLinks links={related} title="Keep exploring" tone="white" />

      <CTABanner tone="shell" />
    </>
  );
}

/* ================================================================== */
/* Template B — Sub-service page                                       */
/* ================================================================== */

export function SubServicePageTemplate({
  breadcrumb,
  eyebrow,
  h1,
  subtitle,
  intro,
  introHeading,
  whoFor,
  whoForHeading = 'Who This Is For',
  whatWeDo,
  whatWeDoHeading = 'What We Do',
  process,
  processTitle = 'How It Works',
  faqs,
  related,
  schema,
  image,
  note,
}) {
  return (
    <>
      <JsonLd data={[...schema, faqSchema(faqs), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero eyebrow={eyebrow} title={h1} subtitle={subtitle}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600 hover:text-white"
        >
          Schedule a Free Consultation
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy/20 px-6 py-3.5 font-display text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <Icon name="phone" className="h-4 w-4" />
          {site.phone}
        </a>
      </PageHero>

      <ProseSection
        eyebrow="Overview"
        title={introHeading}
        paragraphs={intro}
        aside={<Media image={image} sizes="(max-width: 1024px) 100vw, 34vw" />}
      >
        {note ? (
          <p className="mt-6 rounded-lg border-l-4 border-gold bg-gold-50 p-4 text-sm leading-relaxed text-charcoal">
            {note}
          </p>
        ) : null}
      </ProseSection>

      <Section tone="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading eyebrow="Fit" title={whoForHeading} />
            <div className="mt-7">
              <CheckList items={whoFor} />
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <SectionHeading eyebrow="Scope" title={whatWeDoHeading} />
            <div className="mt-7">
              <CheckList items={whatWeDo} />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* White here, not shell: the section above is shell, and back-to-back
          shell sections read as one oversized grey band. */}
      <ProcessSteps
        tone="white"
        steps={process}
        title={processTitle}
        intro="Three steps, clear expectations, no surprises."
      />

      <FAQSection faqs={faqs} tone="shell" />

      <RelatedLinks links={related} title="Related services" tone="white" />

      <CTABanner tone="shell" />
    </>
  );
}

/* ================================================================== */
/* Template C — Service area page                                      */
/* ================================================================== */

export function AreaPageTemplate({
  breadcrumb,
  eyebrow,
  h1,
  subtitle,
  intro,
  introHeading,
  localAuthority,
  faqs,
  related,
  schema,
  city,
}) {
  const cards = serviceCategories.map((category) => ({
    href: category.slug,
    title: category.title,
    blurb: category.blurb,
    icon: category.icon,
    links: category.children,
    cta: 'Explore',
  }));

  return (
    <>
      <JsonLd data={[...schema, faqSchema(faqs), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero eyebrow={eyebrow} title={h1} subtitle={subtitle}>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold text-navy-900 transition-colors hover:bg-gold-600 hover:text-white"
        >
          Schedule a Free Consultation
        </Link>
        <a
          href={site.phoneHref}
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy/20 px-6 py-3.5 font-display text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
        >
          <Icon name="phone" className="h-4 w-4" />
          {site.phone}
        </a>
      </PageHero>

      <ProseSection eyebrow={`${city}, Florida`} title={introHeading} paragraphs={intro} />

      <MapBlock
        tone="shell"
        eyebrow="Meet With Us"
        title={`Serving ${city} in person and online`}
        intro={`Our office sits in Ave Maria, a short drive from ${city}. Clients who prefer to keep everything remote work with us by video call and phone — same advisor, same responsiveness.`}
      />

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title={`What we do for ${city} clients`}
            intro="The full range of tax, accounting, and advisory support — matched to whichever stage you are in."
          />
        </FadeIn>
        <div className="mt-12">
          <ServiceCardGrid items={cards} />
        </div>
      </Section>

      <Section tone="navyTint">
        {/* Local detail reads as two columns: the narrative on the left, the
            scannable points on the right. */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading eyebrow="Local Detail" title={localAuthority.title} />
            <div className="mt-6 space-y-4">
              {localAuthority.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="leading-relaxed text-slate-body">
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
              <CheckList items={localAuthority.points} />
            </div>
          </FadeIn>
        </div>
      </Section>

      <FAQSection faqs={faqs} tone="white" />

      <RelatedLinks links={related} title="Related pages" />

      <CTABanner />
    </>
  );
}
