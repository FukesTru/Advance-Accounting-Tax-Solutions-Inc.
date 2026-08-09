import { AreaPageTemplate } from '@/components/templates';
import { localBusinessSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accountant & Tax Advisor in Naples, FL',
  description:
    'Tax planning, accounting, and CFO advisory services for individuals and businesses in Naples, FL. Free consultation with a local advisory firm.',
  path: '/areas/naples-fl',
});

const breadcrumb = [
  { name: 'Service Areas', href: '/areas/fort-myers-fl' },
  { name: 'Naples, FL', href: '/areas/naples-fl' },
];

const faqs = [
  {
    q: 'Do you meet clients in person in Naples?',
    a: 'Yes. Our office in Ave Maria is roughly half an hour from most of Naples, and we meet clients there by appointment. For planning conversations that benefit from being face to face — estate coordination or a business succession discussion, say — we are happy to arrange something closer to you. Everything else runs comfortably over video call.',
  },
  {
    q: 'Do you handle estate and trust tax planning for Naples clients?',
    a: 'We do, and it is a significant share of the Collier County work. Our role is the tax side: modeling exposure, preparing trust and estate returns, advising on gifting strategy, and coordinating with your estate attorney, who drafts the actual documents. Florida imposes no state estate or inheritance tax, but federal rules, basis planning, and inherited retirement account timelines all still apply.',
  },
  {
    q: 'Can I get started remotely?',
    a: 'Yes, start to finish. Onboarding, secure document exchange, e-signature, and planning meetings all work remotely, and many Naples clients never visit the office at all. Same advisor, same responsiveness — the format is whatever suits you.',
  },
];

export default function NaplesPage() {
  return (
    <AreaPageTemplate
      breadcrumb={breadcrumb}
      city="Naples"
      eyebrow="Service Area"
      h1="Accountant & Tax Advisor in Naples, FL"
      subtitle="Planning-forward tax, accounting, and advisory work for Naples business owners, investors, and families."
      introHeading="Advisory work suited to Naples' financial complexity"
      intro={[
        'Naples has an unusually high concentration of business owners, investors, retirees, and people who relocated here specifically for the tax treatment. That produces financial situations with more moving parts than the national average: multiple entities, property held in several states, closely held businesses approaching a sale, trusts established decades ago in other jurisdictions, and residency positions that need to hold up if a former home state takes an interest.',
        'These are not situations that suit seasonal filing. They call for planning that happens before decisions are made — modeling what a business sale looks like under different structures, deciding whether a gift this year beats a bequest later, coordinating an estate plan drafted in another state with Florida realities, or sorting out where income is actually sourced when you spend part of the year somewhere else.',
        'Our Collier County practice concentrates on exactly that: proactive tax planning, estate and trust tax work coordinated with your attorney, accounting and fractional CFO support for owner-operated companies, and entity structuring for investors running multiple holdings. We are close by in Ave Maria, and full remote service is available for clients who prefer it.',
      ]}
      localAuthority={{
        title: 'Working in Collier County',
        paragraphs: [
          'Businesses operating in Naples register with the Florida Division of Corporations and then handle Collier County and City of Naples local business tax receipts, along with sales tax and reemployment tax accounts where applicable. Investors holding property through multiple entities have registration and annual report obligations for each one, which is where things most commonly slip.',
          'On the estate side, Florida is genuinely favorable — no state estate tax and no state inheritance tax. Clients arriving from states that impose both are often surprised how much simpler the picture becomes. Federal estate tax, basis planning, and inherited retirement account rules still apply, and plans drafted under another state\'s regime usually deserve a fresh look after a move.',
        ],
        points: [
          'Florida Division of Corporations registration and per-entity annual reports',
          'Collier County and City of Naples business tax receipt requirements',
          'No Florida state estate tax or inheritance tax — federal rules still apply',
          'Residency documentation for clients relocating from income-tax states',
          'Multi-entity and multi-state coordination for property investors',
        ],
      }}
      testimonial={{
        quote:
          'Our books were nine months behind. They cleaned everything up, set the chart of accounts straight, and now we get statements by the tenth every month.',
        name: 'Placeholder Client',
        detail: 'Retail owner · Naples, FL',
      }}
      faqs={faqs}
      related={[
        {
          href: '/areas/fort-myers-fl',
          title: 'Fort Myers, FL',
          text: 'Our other primary service area in Lee County.',
        },
        {
          href: '/tax-services/estate-planning',
          title: 'Estate Planning',
          text: 'Estate and trust tax planning for Naples families.',
        },
        {
          href: '/business-advisory-services',
          title: 'Business Advisory Services',
          text: 'Entity structure and succession planning.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free Naples consultation.' },
      ]}
      schema={[
        localBusinessSchema({
          city: 'Naples',
          county: 'Collier County',
          path: '/areas/naples-fl',
          description:
            'Tax planning, estate and trust tax work, accounting, and fractional CFO services for individuals and businesses in Naples and Collier County, Florida.',
        }),
      ]}
    />
  );
}
