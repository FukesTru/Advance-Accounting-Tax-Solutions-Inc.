import { CategoryPageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Tax Services in Fort Myers & Naples, FL',
  description:
    'Proactive tax planning, compliance, and estate tax guidance from Advance Accounting & Tax Solutions — serving Southwest Florida and clients nationwide.',
  path: '/tax-services',
});

const breadcrumb = [{ name: 'Tax Services', href: '/tax-services' }];

const faqs = [
  {
    q: "What's the difference between tax planning and tax preparation?",
    a: 'Preparation is the report: it documents a year that has already closed and files it accurately and on time. Planning happens while the year is still open, when entity structure, owner compensation, timing of income and expenses, retirement contributions, and asset purchases can all still be adjusted. Preparation keeps you compliant; planning is what changes the number.',
  },
  {
    q: 'Do you work with business owners and individuals?',
    a: 'Both, and usually together. For most owners the business return and the personal return are one connected picture — how the entity is structured drives what lands on the personal side. Handling them under one roof means the two are planned as a unit rather than reconciled after the fact.',
  },
  {
    q: 'Can you help with prior-year unfiled returns?',
    a: 'Yes. Catch-up filings are a routine part of our work. We reconstruct the missing years, file them in the right order, and where penalties have accrued we look at whether abatement or a payment arrangement applies. Coming forward voluntarily almost always ends better than waiting for the IRS to open the conversation.',
  },
  {
    q: 'Do you handle multi-state returns?',
    a: 'We do. Florida has no personal income tax, but plenty of our clients still owe filings elsewhere — income earned in another state, a business registered out of state, rental property, or a mid-year move. We sort out where you actually have a filing obligation and make sure you are not taxed twice on the same income.',
  },
  {
    q: 'How often will we meet?',
    a: 'Planning clients typically meet quarterly, with a heavier year-end session in Q4 while there is still time to act. Compliance-only clients meet around filing season. Either way, questions between meetings are part of the engagement, not a billable surprise.',
  },
];

export default function TaxServicesPage() {
  return (
    <CategoryPageTemplate
      breadcrumb={breadcrumb}
      categorySlug="/tax-services"
      eyebrow="Tax Services"
      h1="Tax Services in Fort Myers & Naples, FL"
      subtitle="Year-round tax strategy, accurate filings, and estate-side planning — from a firm that talks to you before the year closes, not after."
      introHeading="Planning first, filing second"
      intro={[
        'Most tax relationships run backwards. You gather a year of paperwork in March, hand it over, and find out what you owe. Every decision that could have changed that number — how the business was structured, how you paid yourself, when you bought equipment, what you contributed to retirement — was made months earlier without anyone looking at the tax consequences.',
        'We run it the other way. Planning conversations happen while the year is still open and the levers still move. Then compliance work becomes the straightforward part: the documentation of a plan you already understood, filed accurately and on time.',
        'That covers three connected areas — proactive tax planning, compliance and preparation for individuals and every common business entity type, and estate and trust tax planning coordinated with your attorney. Whether you need all three or just one, you work with the same advisor throughout.',
      ]}
      image={images.taxServices}
      included={[
        {
          title: 'Year-round tax strategy',
          text: 'Ongoing planning tied to your actual business and personal calendar, not the filing deadline.',
        },
        {
          title: 'Quarterly check-ins',
          text: 'Regular reviews so estimated payments stay accurate and surprises get caught early.',
        },
        {
          title: 'Entity-level tax optimization',
          text: 'Reviewing whether your current structure and owner compensation still fit the business you have now.',
        },
        {
          title: 'Multi-state filing support',
          text: 'Nexus review and coordinated filings when income, property, or operations cross state lines.',
        },
        {
          title: 'IRS correspondence support',
          text: 'We read the notice, tell you what it actually means, and respond on your behalf.',
        },
        {
          title: 'Prior-year catch-up filings',
          text: 'Unfiled or amended returns reconstructed and brought current, penalties addressed where possible.',
        },
      ]}
      processTitle="How our tax work runs"
      process={[
        {
          title: 'Free Consultation',
          text: 'We talk through your situation, entities, and prior returns to see where the gaps are.',
        },
        {
          title: 'Review & Diagnosis',
          text: 'A close look at your last returns and structure, with the specific opportunities flagged.',
        },
        {
          title: 'Plan & Scope',
          text: 'You get the recommended strategy in writing, with what it costs and what it should save.',
        },
        {
          title: 'Execute & File',
          text: 'Quarterly check-ins through the year, then filings prepared, reviewed, and e-filed on time.',
        },
      ]}
      midCta={{
        title: 'Wondering whether you are overpaying?',
        text: 'Bring your last two returns to a free consultation and we will tell you plainly whether there is money being left on the table.',
      }}
      faqs={faqs}
      related={[
        {
          href: '/accounting-cfo-services',
          title: 'Accounting & CFO Services',
          text: 'Clean books and CFO-level insight behind the tax work.',
        },
        {
          href: '/business-advisory-services',
          title: 'Business Advisory Services',
          text: 'Entity structure and planning for growth decisions.',
        },
        {
          href: '/areas/fort-myers-fl',
          title: 'Fort Myers, FL',
          text: 'Tax and accounting support for Lee County clients.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free consultation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Tax Services',
          serviceType: 'Tax Services',
          description:
            'Proactive tax planning, compliance and preparation, and estate and trust tax planning for individuals and businesses in Fort Myers and Naples, Florida, and nationwide.',
          path: '/tax-services',
        }),
      ]}
    />
  );
}
