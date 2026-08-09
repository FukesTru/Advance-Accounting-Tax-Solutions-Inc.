import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Tax Preparation & Compliance | Fort Myers Accountant',
  description:
    'Accurate, on-time tax preparation and compliance for individuals and businesses across Southwest Florida and beyond. Federal, state, and multi-entity filings.',
  path: '/tax-services/tax-compliance-and-preparation',
});

const breadcrumb = [
  { name: 'Tax Services', href: '/tax-services' },
  {
    name: 'Tax Compliance & Preparation',
    href: '/tax-services/tax-compliance-and-preparation',
  },
];

const faqs = [
  {
    q: 'What entity types do you file for?',
    a: 'Individual returns (1040), S-corporations (1120-S), partnerships and multi-member LLCs (1065), C-corporations (1120), and single-member LLCs reported on Schedule C. We also handle the related state filings and the owner-level returns that flow from each, so the business and personal sides stay consistent.',
  },
  {
    q: 'Can you help if I am behind on past returns?',
    a: 'Yes, and it is more common than most people assume. We reconstruct the missing years from bank records and whatever documentation exists, file them in the correct sequence, and address accrued penalties — first-time abatement and reasonable-cause relief are both real options. Filing voluntarily almost always produces a better outcome than waiting.',
  },
  {
    q: 'Do you e-file?',
    a: 'Yes. Federal and state returns are e-filed wherever the IRS and the state allow it, and you get written confirmation once each return is accepted. Paper filing is reserved for the handful of forms and prior-year situations that still require it.',
  },
  {
    q: 'What if I get an IRS notice after filing?',
    a: 'Send it to us. Most notices are routine — a matching discrepancy, a payment posted to the wrong year, an estimated payment the IRS did not credit. We read it, tell you plainly whether it is a real problem, and draft the response. Notice support is part of the relationship, not a separate engagement.',
  },
  {
    q: 'How do I securely send documents?',
    a: 'Through the secure client portal, which is encrypted and built for exactly this. You upload from your phone or computer, e-sign there, and everything stays in one place year over year. Please do not email tax documents — email is the least secure way to move a Social Security number.',
  },
];

export default function TaxCompliancePage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Tax Services"
      h1="Tax Compliance & Preparation"
      subtitle="Accurate returns, filed on time, with records organized well enough to stand up to a second look."
      introHeading="The unglamorous part, done properly"
      intro={[
        'Compliance work does not get talked about much, which is exactly why it goes wrong. A return that is filed late, filed twice, or filed with a number that does not reconcile to the books creates months of cleanup — and the cost of that cleanup usually exceeds what careful preparation would have cost in the first place.',
        'We treat preparation as a controlled process rather than a spring sprint. Documents come in through a secure portal so nothing gets lost in an email thread. Returns are prepared, then reviewed against your books and your prior year before anything is filed. Deadlines and extensions are tracked on our calendar, not yours. And your records are kept organized in a way that would survive an audit without a scramble.',
        'Individuals, S-corps, partnerships, LLCs, and C-corps are all handled here, along with the state filings that come with them. If your business return and personal return are connected — and for most owners they are — they are prepared together so the two actually agree.',
      ]}
      image={images.taxServices}
      whoFor={[
        {
          title: 'Individuals and families',
          text: 'Including multi-state filers, new Florida residents, and anyone with income beyond a single W-2.',
        },
        {
          title: 'Small businesses',
          text: 'Owners who need the business and personal returns handled as one connected picture.',
        },
        {
          title: 'S-corps, partnerships, and LLCs',
          text: 'Pass-through entities where K-1s, basis, and owner compensation have to line up correctly.',
        },
        {
          title: 'Anyone behind on filings',
          text: 'Multiple unfiled years brought current, in the right order, with penalty relief pursued where it applies.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Individual & business return preparation',
          text: 'Federal and state returns prepared, reviewed, and reconciled to your books before filing.',
        },
        {
          title: 'Multi-entity filings',
          text: 'Related entities and owner returns coordinated so K-1s and basis tie out across the group.',
        },
        {
          title: 'Extension management',
          text: 'Filed properly and tracked, with estimated payments calculated so an extension does not create a penalty.',
        },
        {
          title: 'Prior-year catch-up filings',
          text: 'Missing years reconstructed and filed, with abatement or payment arrangements pursued as appropriate.',
        },
        {
          title: 'IRS notice response support',
          text: 'We interpret the notice, respond on your behalf, and follow it through to resolution.',
        },
      ]}
      process={[
        {
          title: 'Gather Documents',
          text: 'You upload to the secure client portal from your phone or laptop; we send a checklist so nothing is missed.',
        },
        {
          title: 'Prepare & Review',
          text: 'Returns are prepared, reconciled against your books and prior year, then reviewed before they go anywhere.',
        },
        {
          title: 'File & Confirm',
          text: 'You e-sign, we e-file, and you receive written acceptance confirmation plus a copy for your records.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/tax-services/tax-planning',
          title: 'Tax Planning',
          text: 'Lower next year’s bill before the year closes.',
        },
        {
          href: '/tax-services/estate-planning',
          title: 'Estate Planning',
          text: 'Trust and estate return support.',
        },
        {
          href: '/portal',
          title: 'Client Portal',
          text: 'Where you upload documents and e-sign securely.',
        },
        { href: '/contact', title: 'Contact', text: 'Get your return handled this year.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Tax Compliance & Preparation',
          serviceType: 'Tax Preparation',
          description:
            'Individual and business tax return preparation, multi-entity and multi-state filings, extensions, prior-year catch-up returns, and IRS notice support.',
          path: '/tax-services/tax-compliance-and-preparation',
        }),
      ]}
    />
  );
}
