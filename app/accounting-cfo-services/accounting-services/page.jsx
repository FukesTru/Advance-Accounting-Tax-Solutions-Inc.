import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Small Business Accounting | Fort Myers & Naples',
  description:
    'Reliable monthly bookkeeping and management reporting so you always know where your business stands. Serving Fort Myers, Naples, and clients nationwide.',
  path: '/accounting-cfo-services/accounting-services',
});

const breadcrumb = [
  { name: 'Accounting & CFO Services', href: '/accounting-cfo-services' },
  { name: 'Accounting Services', href: '/accounting-cfo-services/accounting-services' },
];

const faqs = [
  {
    q: 'What accounting software do you use?',
    a: 'QuickBooks Online for most engagements, since it is well supported and your records stay portable if you ever move firms. We work in other platforms where a client is already established in one and it fits the business. What we will not do is keep a growing company on spreadsheets past the point where that is safe.',
  },
  {
    q: 'Can you clean up messy prior books?',
    a: 'Yes — cleanup is how a large share of our accounting relationships begin. Unreconciled accounts, personal and business spending mixed together, a chart of accounts that grew without a plan, a year of uncategorized transactions. We quote cleanup separately once we have seen the file, so you get a real number rather than an estimate that moves.',
  },
  {
    q: 'Do you offer weekly, monthly, or quarterly service?',
    a: 'Monthly suits most businesses: it is frequent enough to catch problems while they are small and steady enough to be affordable. Higher-volume operations sometimes need weekly reconciliation, and very small or seasonal businesses do fine quarterly. We match the cadence to your transaction volume rather than selling everyone the same package.',
  },
  {
    q: 'Can you produce financial statements for my bank or investor?',
    a: 'Not under this entity, and that is a deliberate structure rather than a gap. Advance Accounting & Tax Solutions does bookkeeping and internal management reporting; it does not issue audited, reviewed, or compiled financial statements. When a lender or investor needs statements with an accountant\u2019s report attached, the affiliated CPA firm, Joseph F. Fragnoli, CPA, Inc., handles that engagement — same people, correct entity.',
  },
  {
    q: 'Is this different from tax preparation?',
    a: 'Yes, though the two connect directly. Accounting is the ongoing record of what your business does — maintained monthly, used for decisions all year. Tax preparation is the annual filing built on top of that record. Good books make the return faster, cheaper, and far more likely to be right.',
  },
];

export default function AccountingServicesPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Accounting & CFO"
      h1="Accounting Services"
      subtitle="Monthly books you can actually rely on — reconciled, organized, and delivered on schedule."
      introHeading="Everything else depends on the books"
      intro={[
        'Clean books are not an accounting nicety. They are the input for every financial decision you make: whether you can afford a hire, what your real margin is on your best-selling service, how much cash you will have in March, what your tax bill is shaping up to be. When the underlying records are unreliable, every one of those answers is a guess dressed up as a number.',
        'That is the standard we work to. Accounts get reconciled every month, not chased in January. The chart of accounts is built to reflect how your business actually operates, so the categories tell you something instead of just satisfying the software. Statements arrive on a predictable date, and if something in them looks wrong, we flag it rather than waiting for you to notice.',
        'The immediate benefit is knowing where you stand. The compounding one is that everything downstream gets easier — tax planning has real numbers to work with, CFO-level analysis has a foundation, and filing season becomes a handoff instead of a reconstruction project.',
      ]}
      image={images.accounting}
      note="Scope note: this is bookkeeping and internal management reporting. Advance Accounting & Tax Solutions does not perform audits, reviews, compilations, or prepared financial statements with an accountant's report attached. Where an engagement genuinely requires a CPA firm, the affiliated firm Joseph F. Fragnoli, CPA, Inc. takes it on."
      whoFor={[
        {
          title: 'Small businesses',
          text: 'Owners currently doing the books at night and knowing it is not being done well.',
        },
        {
          title: 'Startups',
          text: 'Setting up properly from the beginning, before bad habits become a cleanup project.',
        },
        {
          title: 'Real estate investors',
          text: 'Multiple properties or entities where per-property tracking matters at tax time.',
        },
        {
          title: 'Solopreneurs outgrowing DIY',
          text: 'When the spreadsheet stopped being enough but a full-time hire is nowhere close to justified.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Monthly bookkeeping & reconciliation',
          text: 'Every bank, credit card, and loan account reconciled monthly so the balances are real.',
        },
        {
          title: 'Monthly management reporting',
          text: 'P&L, balance sheet, and cash flow for internal use, delivered on a set schedule with the anomalies flagged.',
        },
        {
          title: 'Chart of accounts cleanup',
          text: 'Rebuilt around how your business actually works, so reports answer the questions you ask.',
        },
        {
          title: 'Software setup & support',
          text: 'QuickBooks Online configuration, bank feeds, and app integrations — plus training your team.',
        },
        {
          title: 'Sales tax support',
          text: 'Florida sales tax tracking and filings kept current, including multi-location reporting.',
        },
      ]}
      process={[
        {
          title: 'Onboarding & Cleanup',
          text: 'We review the current file, reconcile history, and rebuild the chart of accounts.',
        },
        {
          title: 'Monthly Bookkeeping',
          text: 'Transactions categorized, accounts reconciled, and the month closed on a fixed schedule.',
        },
        {
          title: 'Reporting & Review',
          text: 'Statements delivered with a plain-language summary of what changed and what to watch.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/accounting-cfo-services/fractional-cfo-services',
          title: 'Fractional CFO Services',
          text: 'Turn clean books into strategy.',
        },
        {
          href: '/accounting-cfo-services/payroll-services',
          title: 'Payroll Services',
          text: 'Bundle payroll with your bookkeeping.',
        },
        {
          href: '/tax-services/tax-compliance-and-preparation',
          title: 'Tax Compliance & Preparation',
          text: 'Filings built on reconciled records.',
        },
        { href: '/contact', title: 'Contact', text: 'Get a cleanup quote.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Accounting Services',
          serviceType: 'Bookkeeping',
          description:
            'Monthly bookkeeping, reconciliation, management reporting, chart of accounts cleanup, and sales tax support for small businesses in Southwest Florida.',
          path: '/accounting-cfo-services/accounting-services',
        }),
      ]}
    />
  );
}
