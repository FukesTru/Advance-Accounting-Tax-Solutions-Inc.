import { notFound } from 'next/navigation';
import { AreaPageTemplate } from '@/components/templates';
import { areaBySlug, areas } from '@/lib/areas';
import { localBusinessSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = areaBySlug[slug];
  if (!area) return {};

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/areas/${area.slug}`,
  });
}

export default async function AreaPage({ params }) {
  const { slug } = await params;
  const area = areaBySlug[slug];
  if (!area) notFound();

  // Cross-link to the three nearest other markets rather than all of them —
  // keeps the block useful instead of turning into a link dump.
  const others = areas.filter((item) => item.slug !== area.slug).slice(0, 3);

  return (
    <AreaPageTemplate
      breadcrumb={[
        { name: 'Service Areas', href: '/areas' },
        { name: `${area.city}, FL`, href: `/areas/${area.slug}` },
      ]}
      city={area.city}
      eyebrow="Service Area"
      h1={area.h1}
      subtitle={area.subtitle}
      introHeading={area.introHeading}
      intro={area.intro}
      localAuthority={area.localAuthority}
      faqs={area.faqs}
      related={[
        ...others.map((item) => ({
          href: `/areas/${item.slug}`,
          title: `${item.city}, FL`,
          text: item.cardBlurb,
        })),
        { href: '/areas', title: 'All service areas', text: 'Every community we cover in SWFL.' },
      ]}
      schema={[
        localBusinessSchema({
          city: area.city,
          county: area.county,
          path: `/areas/${area.slug}`,
          description: area.metaDescription,
        }),
      ]}
    />
  );
}
