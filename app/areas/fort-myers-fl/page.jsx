import { AreaPageTemplate } from '@/components/templates';
import { localBusinessSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accountant & Tax Advisor in Fort Myers, FL',
  description:
    'Tax planning, accounting, and CFO advisory services for individuals and businesses in Fort Myers, FL. Free consultation with a local advisory firm.',
  path: '/areas/fort-myers-fl',
});

const breadcrumb = [
  { name: 'Service Areas', href: '/areas/fort-myers-fl' },
  { name: 'Fort Myers, FL', href: '/areas/fort-myers-fl' },
];

const faqs = [
  {
    q: 'Do you meet clients in person in Fort Myers?',
    a: 'Yes. Our office is in Ave Maria, an easy drive from most of Fort Myers, and we meet clients there by appointment. For engagements where an in-person conversation makes more sense on your side — reviewing books with your team, for instance — we can arrange to come to you. Most clients settle into a mix: a face-to-face planning session once or twice a year, everything else remote.',
  },
  {
    q: 'Do you work with seasonal and part-year Florida residents?',
    a: 'Regularly. Part-year residency creates genuine complexity: which state gets to tax which income, how residency is established and documented, and whether a former state is likely to contest the change. If you have recently moved to Florida or split the year between here and somewhere else, this is worth getting right early — states with income tax do audit departures, and documentation built after the fact is much weaker.',
  },
  {
    q: 'Can I get started remotely?',
    a: 'Entirely. Onboarding, document exchange, e-signatures, and planning meetings all work by secure portal and video call, and plenty of our Fort Myers clients never need to drive out. You get the same advisor and the same turnaround either way — the delivery method is your preference, not a service tier.',
  },
];

export default function FortMyersPage() {
  return (
    <AreaPageTemplate
      breadcrumb={breadcrumb}
      city="Fort Myers"
      eyebrow="Service Area"
      h1="Accountant & Tax Advisor in Fort Myers, FL"
      subtitle="Tax planning, accounting, and fractional CFO support for Fort Myers businesses, professionals, and seasonal residents."
      introHeading="Tax and accounting support built for how Fort Myers actually works"
      intro={[
        'Fort Myers has grown into one of the busiest small-business markets on the Gulf Coast. Contractors and trades, hospitality, healthcare practices, professional services, property managers, and an expanding base of remote-first business owners who moved down and brought their companies with them — Lee County adds new businesses at a pace that outstrips most of the state.',
        'That growth produces a specific set of financial questions. A contractor whose revenue doubled in two years is probably in the wrong entity structure. A hospitality business with sharp seasonal swings needs cash-flow forecasting more than it needs another monthly report. Someone who relocated from New York or Illinois and kept operating there has a multi-state filing question they may not know exists yet. And seasonal residents splitting the year face residency and sourcing rules that get expensive when handled casually.',
        'We work with all of it — proactive tax planning, monthly accounting and payroll, and fractional CFO support for businesses at the point where the numbers need interpreting rather than just recording. Our office is a short drive away in Ave Maria, and clients who prefer to keep everything remote work with us entirely by video call and secure portal.',
      ]}
      localAuthority={{
        title: 'Working in Lee County',
        paragraphs: [
          'Operating in Fort Myers means dealing with Lee County and City of Fort Myers requirements alongside the state ones. New businesses register with the Florida Division of Corporations, then handle local business tax receipts at both the county and, where applicable, city level. Fictitious name registrations, sales tax accounts with the Florida Department of Revenue, and reemployment tax registration follow from there depending on your setup.',
          'None of it is difficult in isolation. What causes problems is missing a step and finding out at renewal, or registering in a way that does not match how the business actually operates. We handle these as part of formation and ongoing compliance so nothing sits unfinished.',
        ],
        points: [
          'Florida Division of Corporations registration and annual report filings',
          'Lee County and City of Fort Myers business tax receipt requirements',
          'Florida sales and use tax registration and recurring filings',
          'Reemployment tax registration for businesses with employees',
          'Multi-state filing analysis for owners who relocated but kept operations elsewhere',
        ],
      }}
      testimonial={{
        quote:
          'They moved us from a once-a-year scramble to an actual plan. We knew our estimated payments a quarter ahead and stopped getting surprised in April.',
        name: 'Placeholder Client',
        detail: 'Construction business owner · Fort Myers, FL',
      }}
      faqs={faqs}
      related={[
        {
          href: '/areas/naples-fl',
          title: 'Naples, FL',
          text: 'Our other primary service area in Collier County.',
        },
        {
          href: '/tax-services',
          title: 'Tax Services',
          text: 'Planning, compliance, and estate tax work.',
        },
        {
          href: '/accounting-cfo-services',
          title: 'Accounting & CFO Services',
          text: 'Books, payroll, and financial strategy.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free Fort Myers consultation.' },
      ]}
      schema={[
        localBusinessSchema({
          city: 'Fort Myers',
          county: 'Lee County',
          path: '/areas/fort-myers-fl',
          description:
            'Tax planning, accounting, payroll, and fractional CFO services for individuals and businesses in Fort Myers and Lee County, Florida.',
        }),
      ]}
    />
  );
}
