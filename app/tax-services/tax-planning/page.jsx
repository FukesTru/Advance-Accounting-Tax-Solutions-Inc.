import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Tax Planning Services in Fort Myers & Naples',
  description:
    'Year-round, proactive tax planning designed to reduce your tax burden and align with your business and personal financial goals.',
  path: '/tax-services/tax-planning',
});

const breadcrumb = [
  { name: 'Tax Services', href: '/tax-services' },
  { name: 'Tax Planning', href: '/tax-services/tax-planning' },
];

const faqs = [
  {
    q: 'When should I start tax planning?',
    a: 'The best time is early in the year, when every month still counts. The second-best is right now — even a November conversation can change year-end purchases, retirement contributions, bonus timing, and owner distributions. Once December 31 passes, most of the meaningful levers are gone and we are down to reporting what happened.',
  },
  {
    q: 'Do you work with my existing CPA or replace them?',
    a: 'Either works. Some clients keep their current preparer and bring us in purely for planning, in which case we deliver a strategy their CPA can execute. Others prefer to consolidate so planning and filing sit with the same person. We will tell you honestly which makes more sense for your situation.',
  },
  {
    q: 'Can tax planning help lower this year’s bill?',
    a: 'Often, yes — how much depends on when you start and how much flexibility your situation has. Timing income and expenses, entity elections, retirement plan choices, and how owners take compensation can all move the current-year number. We will give you a realistic read at the consultation rather than a promise before we have seen anything.',
  },
  {
    q: 'Do you handle business and personal taxes together?',
    a: 'Yes, and we prefer to. For most owners the two are one system: how the entity is structured determines what flows onto the personal return. Planning them separately is how people end up optimizing one side and creating a problem on the other.',
  },
  {
    q: 'What documents do I need to start?',
    a: 'For a first conversation, the last two years of business and personal returns plus your current year-to-date financials are enough. If you have an entity agreement, a payroll summary, or a recent balance sheet, bring those too — but do not delay the call gathering paperwork.',
  },
];

export default function TaxPlanningPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Tax Services"
      h1="Tax Planning Services"
      subtitle="Proactive, year-round strategy that treats your tax bill as something you can influence — because until December 31, it is."
      introHeading="Filing records the past. Planning changes the outcome."
      intro={[
        'There is a specific kind of frustration that shows up every spring: you did everything right, you kept your receipts, your return was filed accurately — and the number at the bottom is still bigger than it should have been. Nothing went wrong. The problem is that by the time anyone looked at your taxes, the year was already closed.',
        'Tax planning moves that conversation forward by a few months, which turns out to make all the difference. While the year is still open we can look at how your entity is structured, how you are paying yourself, when income lands and when expenses clear, what your retirement contributions could be doing, and how a major purchase or sale should be timed. Every one of those is a decision. After December 31, they are all just history.',
        'This is ongoing work, not a one-time report. We meet through the year, adjust estimated payments as your actual results come in, and sit down in Q4 while there is still time to act on what we find. You should never be surprised by your own tax bill — and with enough runway, you rarely will be.',
      ]}
      image={images.taxServices}
      whoFor={[
        {
          title: 'Business owners',
          text: 'Especially anyone whose profit, payroll, or structure has changed since the entity was first set up.',
        },
        {
          title: 'High earners',
          text: 'Where marginal rates, phase-outs, and timing decisions have real dollars attached.',
        },
        {
          title: 'Real estate investors',
          text: 'Depreciation, cost segregation, passive activity rules, and dispositions all reward planning ahead.',
        },
        {
          title: 'Equity compensation holders',
          text: 'RSUs, options, and vesting schedules create timing choices most people find out about too late.',
        },
        {
          title: 'Multiple income streams',
          text: 'W-2 plus consulting, rentals, or a side business — where estimated payments get complicated fast.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Income & entity structuring review',
          text: 'Whether your current structure and compensation split still fit the business you actually run today.',
        },
        {
          title: 'Quarterly estimated tax planning',
          text: 'Payments based on real year-to-date results, so you are neither penalized nor lending the IRS money.',
        },
        {
          title: 'Deduction & credit strategy',
          text: 'Identifying what you qualify for and documenting it properly before it is needed.',
        },
        {
          title: 'Retirement & investment coordination',
          text: 'Plan selection and contribution timing looked at as tax decisions, not just savings decisions.',
        },
        {
          title: 'Year-end planning sessions',
          text: 'A Q4 working meeting to lock in the moves that only work before the calendar turns.',
        },
      ]}
      process={[
        {
          title: 'Discovery Call',
          text: 'A free conversation about your income, entities, and what has been frustrating you about tax season.',
        },
        {
          title: 'Tax Situation Review',
          text: 'We read your prior returns and current financials closely and identify the specific opportunities.',
        },
        {
          title: 'Custom Plan & Ongoing Check-Ins',
          text: 'A written strategy, quarterly reviews, and adjustments as the year develops.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/tax-services/tax-compliance-and-preparation',
          title: 'Tax Compliance & Preparation',
          text: 'Filing the plan accurately and on time.',
        },
        {
          href: '/tax-services/estate-planning',
          title: 'Estate Planning',
          text: 'Extending the plan to what you pass on.',
        },
        {
          href: '/accounting-cfo-services/fractional-cfo-services',
          title: 'Fractional CFO Services',
          text: 'Forecasting and strategy behind the tax plan.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free planning consultation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Tax Planning',
          serviceType: 'Tax Planning',
          description:
            'Year-round proactive tax planning for business owners, high earners, real estate investors, and individuals with multiple income streams in Southwest Florida and nationwide.',
          path: '/tax-services/tax-planning',
        }),
      ]}
    />
  );
}
