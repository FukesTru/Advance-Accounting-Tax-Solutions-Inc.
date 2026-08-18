import { CategoryPageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Accounting & Fractional CFO Services | Fort Myers',
  description:
    'Bookkeeping, accounting, payroll, and fractional CFO support that gives business owners clarity and a real financial strategy.',
  path: '/accounting-cfo-services',
});

const breadcrumb = [{ name: 'Accounting & CFO Services', href: '/accounting-cfo-services' }];

const faqs = [
  {
    q: 'What size business do you work with?',
    a: 'Our clients generally run between $200,000 and $20,000,000 in annual revenue — solo operators with real complexity at the low end, and companies with a small internal finance team at the high end. They are mostly closely held corporations, partnerships, and LLCs. What matters more than revenue is whether the numbers are currently being used to make decisions or just to file a return.',
  },
  {
    q: 'Do I need a full-time CFO or would fractional work better for me?',
    a: 'If you need financial strategy a few days a month rather than every day, fractional is the better economics by a wide margin. Businesses generally outgrow fractional when transaction volume, headcount, or financing complexity demands someone in the building daily. We will tell you when you have reached that point rather than stretching an engagement past its usefulness.',
  },
  {
    q: 'Can you take over my current bookkeeping mid-year?',
    a: 'Yes. Mid-year transitions are routine. We review what has been recorded so far, reconcile it, clean up whatever needs correcting, and pick up from there — you do not have to wait for January or carry a messy first half into your return.',
  },
  {
    q: 'Do you handle payroll taxes?',
    a: 'We do. Payroll processing, federal and Florida payroll tax filings, new-hire reporting, and year-end W-2s and 1099s are all covered. Payroll tax penalties are among the most avoidable costs a small business incurs, and they are avoided by someone owning the calendar.',
  },
  {
    q: 'Do you issue audited or reviewed financial statements?',
    a: 'Not under this entity. Advance Accounting & Tax Solutions was set up for the work that sits outside traditional CPA-firm services: tax compliance and planning, tax resolution, start-up assistance, bookkeeping, and accounting. Audits, reviews, compilations, and prepared financial statements with a report attached go through the affiliated CPA firm, Joseph F. Fragnoli, CPA, Inc. You deal with the same people either way.',
  },
  {
    q: 'How do fees work?',
    a: 'Recurring accounting and CFO work is priced as a flat monthly fee based on scope, transaction volume, and how many entities are involved — so you know the number in advance and are not billed for asking a question. Cleanup or catch-up work is quoted separately once we have seen the current state of the books.',
  },
];

export default function AccountingCfoServicesPage() {
  return (
    <CategoryPageTemplate
      breadcrumb={breadcrumb}
      categorySlug="/accounting-cfo-services"
      eyebrow="Accounting & CFO"
      h1="Accounting & Fractional CFO Services"
      subtitle="Clean books, dependable payroll, and the strategic read on your numbers that most small businesses never get."
      introHeading="Between bookkeeping and a full-time CFO"
      intro={[
        'There is a gap most growing businesses fall into. A bookkeeper records what happened. A full-time CFO costs six figures plus benefits. In between sits the owner, staring at a profit-and-loss statement that is technically accurate and practically useless, trying to decide whether they can afford to hire.',
        'We cover that middle ground. The foundation is accounting done properly — monthly reconciliation, a chart of accounts that reflects how your business actually works, statements you receive on a predictable schedule. On top of that sits the interpretation: what your margins are by service line, where cash is going to be tight in four months, whether that price increase is worth the customers it will cost.',
        'Payroll rounds it out, because it is the piece that generates penalties fastest when nobody owns it. Take one service or all three — the books, the payroll, and the strategy stay consistent because the same firm handles them.',
      ]}
      image={images.accounting}
      included={[
        {
          title: 'Monthly management reports',
          text: 'P&L, balance sheet, and cash flow for your own decision-making, delivered on a set schedule and reconciled.',
        },
        {
          title: 'Cash-flow visibility',
          text: 'Forward-looking projections so you see a squeeze coming with time to do something about it.',
        },
        {
          title: 'Payroll management',
          text: 'Processing, tax filings, and year-end forms handled without you tracking the deadlines.',
        },
        {
          title: 'KPI & dashboard reporting',
          text: 'The handful of numbers that actually drive your business, tracked and reviewed monthly.',
        },
        {
          title: 'Strategic planning sessions',
          text: 'Regular working meetings on pricing, hiring, capacity, and growth decisions.',
        },
        {
          title: 'Tax-ready books year-round',
          text: 'Records maintained so filing season is a handoff, not an archaeology project.',
        },
      ]}
      processTitle="How we take over your finance function"
      process={[
        {
          title: 'Free Consultation',
          text: 'We look at where your books stand today and what decisions you are trying to make.',
        },
        {
          title: 'Onboarding & Cleanup',
          text: 'Historical records reconciled, chart of accounts rebuilt, software configured properly.',
        },
        {
          title: 'Monthly Rhythm',
          text: 'Books closed, statements delivered, payroll run — on the same schedule every month.',
        },
        {
          title: 'Review & Strategy',
          text: 'Regular sessions where the numbers turn into decisions about the next quarter.',
        },
      ]}
      midCta={{
        title: 'Books behind, or numbers you cannot read?',
        text: 'Tell us the current state honestly — we have seen worse. A free consultation will tell you what cleanup actually involves.',
      }}
      faqs={faqs}
      related={[
        {
          href: '/tax-services',
          title: 'Tax Services',
          text: 'Planning and filings built on clean books.',
        },
        {
          href: '/business-advisory-services',
          title: 'Business Advisory Services',
          text: 'Structure and planning for bigger decisions.',
        },
        {
          href: '/areas/naples-fl',
          title: 'Naples, FL',
          text: 'Accounting and CFO support in Collier County.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free consultation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Accounting & Fractional CFO Services',
          serviceType: 'Accounting Services',
          description:
            'Monthly bookkeeping, financial reporting, payroll, and fractional CFO services for small and mid-size businesses in Fort Myers, Naples, and nationwide.',
          path: '/accounting-cfo-services',
        }),
      ]}
    />
  );
}
