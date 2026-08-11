import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { Icon } from '@/components/Icons';
import { Button, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, MapBlock, PageHero, ServiceCardGrid } from '@/components/sections';
import { areas } from '@/lib/areas';
import { breadcrumbSchema, serviceAreaListSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { serviceCategories, site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Service Areas Across Southwest Florida',
  description:
    'CPA-led tax, accounting, and CFO services across Fort Myers, Naples, Cape Coral, Bonita Springs, Estero, Marco Island, and Immokalee, Florida.',
  path: '/areas',
});

const breadcrumb = [{ name: 'Service Areas', href: '/areas' }];

export default function ServiceAreasPage() {
  const serviceCards = serviceCategories.map((category) => ({
    href: category.slug,
    title: category.title,
    blurb: category.blurb,
    icon: category.icon,
    links: category.children,
    cta: 'Explore',
  }));

  return (
    <>
      <JsonLd data={[serviceAreaListSchema(areas), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Where We Work"
        title="Service Areas Across Southwest Florida"
        subtitle="Our office is in Ave Maria, between Naples and Fort Myers. We meet clients across Lee and Collier counties in person — and work with clients nationwide entirely remotely."
      >
        <Button href="/contact" variant="gold">
          Schedule a Free Consultation
        </Button>
        <Button href={site.phoneHref} variant="outline">
          <Icon name="phone" className="h-4 w-4" />
          {site.phone}
        </Button>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Communities"
          title="Local to Lee and Collier counties"
          intro="Each community below has its own page covering the local filing requirements and the financial questions that come up most often there — they are genuinely different, and so is the work."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <FadeIn key={area.slug} delay={(index % 3) * 90} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy">
                  <Icon name="pin" className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl">
                  <Link href={`/areas/${area.slug}`} className="hover:text-gold-700">
                    {area.city}, FL
                  </Link>
                </h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
                  {area.county}
                </p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                  {area.cardBlurb}
                </p>
                <Link
                  href={`/areas/${area.slug}`}
                  className="group mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-gold-700"
                >
                  {area.city} services
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 max-w-3xl leading-relaxed text-slate-body">
            Not on the list? We also work with clients in Lehigh Acres, Golden Gate, Sanibel, Fort
            Myers Beach, and the surrounding communities — and with clients across the country
            entirely remotely.{' '}
            <Link href="/contact" className="font-semibold text-navy underline hover:text-gold-700">
              Tell us where you are
            </Link>{' '}
            and we will tell you honestly whether we are a good fit.
          </p>
        </FadeIn>
      </Section>

      <Section tone="shell">
        <SectionHeading
          eyebrow="Services"
          title="The same work, wherever you are"
          intro="Location changes the local filing details, not the standard of the work or who you deal with."
        />
        <div className="mt-12">
          <ServiceCardGrid items={serviceCards} />
        </div>
      </Section>

      <MapBlock />

      <CTABanner tone="shell" />
    </>
  );
}
