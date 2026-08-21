import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Fractional CFO Services | Southwest Florida',
  description:
    'Get CFO-level financial strategy — cash flow, forecasting, and growth planning — without the cost of a full-time hire. Serving SWFL and clients nationwide.',
  path: '/accounting-cfo-services/fractional-cfo-services',
});

const breadcrumb = [
  { name: 'Accounting & CFO Services', href: '/accounting-cfo-services' },
  { name: 'Fractional CFO Services', href: '/accounting-cfo-services/fractional-cfo-services' },
];

const faqs = [
  {
    q: 'How is a fractional CFO different from bookkeeping?',
    a: 'Bookkeeping produces the record — accurate, complete, backward-looking. CFO work uses that record to decide what happens next: whether to hire, how to price, when the cash gets tight, what a second location would really cost. One tells you where you have been; the other tells you where you are going. You need the first before the second is worth anything.',
  },
  {
    q: 'How many hours per month is typical?',
    a: 'Most engagements land somewhere between roughly ten and forty hours a month depending on complexity and how much is happening. A stable business in a reporting rhythm sits at the lower end; one raising capital, integrating an acquisition, or rebuilding its pricing model needs considerably more for a stretch. Scope is set in advance and revisited as things change.',
  },
  {
    q: 'Can this scale up as we grow?',
    a: 'That is the point of the model. Engagements start small and expand as the questions get bigger. Eventually some clients outgrow fractional entirely and hire internally — when that point arrives we will say so, and help with the transition rather than holding onto the work.',
  },
  {
    q: 'Who actually does the CFO work?',
    a: 'Joseph leads the engagement and James Fragnoli provides the senior-level input. James is a retired CFO of a hundred-million-dollar manufacturing company who spent most of his career in private industry as a Controller and CFO across multiple companies and entity types. He was a CPA and has since retired his license — the value he brings is operating experience, not attest work.',
  },
  {
    q: 'Do you work with our existing bookkeeper?',
    a: 'Frequently, yes. If your bookkeeper is doing solid work there is no reason to displace them; we layer strategy on top and give them a clearer reporting structure to work within. If the underlying records will not support real analysis, we will tell you that plainly, since forecasting on bad data is worse than not forecasting at all.',
  },
];

export default function FractionalCfoPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Accounting & CFO"
      h1="Fractional CFO Services"
      subtitle="CFO-level financial strategy — forecasting, margins, and growth planning — at a fraction of a full-time hire."
      introHeading="Strategy, without the executive salary"
      intro={[
        'There is a stage most growing businesses hit where the questions outrun the reporting. Revenue is up but cash is tight and nobody can explain why. One service line feels profitable but nothing confirms it. A big hire, a new location, or an equipment purchase is on the table and the decision comes down to gut feel. The books are fine. What is missing is someone whose job is to interpret them.',
        'That is CFO work, and until recently it came in one size: a full-time executive with a salary to match. Fractional changes the shape of it. You get the same discipline — forecasting, budget-versus-actual review, margin analysis, KPI reporting, capital planning — on a monthly cadence sized to what your business actually needs right now.',
        'In practice that means you stop making your biggest decisions on instinct. You know which customers are worth keeping, what a price change does to contribution margin, and how many months of runway you have under a few different scenarios. And when you need to show numbers to a bank, an investor, or a buyer, they are already in a form those people expect.',
        'The senior input on these engagements comes from James Fragnoli, a retired CFO who ran finance for a hundred-million-dollar manufacturing company and spent his career as a Controller and CFO across several industries and entity types. That is operator experience rather than advisory theory — he has sat in the chair the client is sitting in.',
      ]}
      image={images.analysis}
      whoFor={[
        {
          title: 'Established small and mid-size businesses',
          text: 'Past survival mode, where decisions now carry enough weight to deserve real analysis.',
        },
        {
          title: 'Businesses preparing to raise capital',
          text: 'Lenders and investors want forecasts, unit economics, and clean reporting — built before the conversation.',
        },
        {
          title: 'Owners planning an exit',
          text: 'Buyers pay for demonstrable, well-documented earnings. That case takes a year or more to build.',
        },
        {
          title: 'Companies scaling fast',
          text: 'Growth consumes cash. Knowing how much and when is the difference between scaling and stalling.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Cash-flow forecasting',
          text: 'Rolling projections that show the squeeze months early, with scenarios for the decisions you are weighing.',
        },
        {
          title: 'Budget vs. actual reporting',
          text: 'Monthly variance review — not just what missed, but why, and what to do about it.',
        },
        {
          title: 'KPI dashboards',
          text: 'The handful of numbers that actually run your business, tracked consistently and reviewed together.',
        },
        {
          title: 'Pricing & margin analysis',
          text: 'True profitability by service line, customer, or location — usually the most surprising work we do.',
        },
        {
          title: 'Board & investor-ready reporting',
          text: 'Financial packages in the format lenders, investors, and buyers expect to receive.',
        },
        {
          title: 'Internal controls review',
          text: 'Segregation of duties, approval thresholds, and cash handling — the safeguards that prevent losses nobody notices.',
        },
        {
          title: 'Strategic planning sessions',
          text: 'Working meetings on hiring, capacity, expansion, and capital structure with the numbers in front of you.',
        },
      ]}
      process={[
        {
          title: 'Financial Assessment',
          text: 'We review your records, structure, and reporting to establish where things genuinely stand.',
        },
        {
          title: 'Systems & Reporting Setup',
          text: 'Forecast model, KPI dashboard, and monthly reporting package built around your business.',
        },
        {
          title: 'Ongoing Strategic Partnership',
          text: 'A recurring cadence of review, forecast updates, and decision support as things develop.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/accounting-cfo-services/accounting-services',
          title: 'Accounting Services',
          text: 'The clean books CFO work depends on.',
        },
        {
          href: '/business-advisory-services',
          title: 'Business Advisory Services',
          text: 'Structure and long-range planning.',
        },
        {
          href: '/business-advisory-services/entity-design-and-formation',
          title: 'Entity Design & Formation',
          text: 'Getting the structure right as you scale.',
        },
        { href: '/contact', title: 'Contact', text: 'Discuss a fractional CFO engagement.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Fractional CFO Services',
          serviceType: 'Fractional CFO',
          description:
            'Cash-flow forecasting, KPI reporting, margin analysis, and strategic financial planning for growing businesses in Southwest Florida and nationwide.',
          path: '/accounting-cfo-services/fractional-cfo-services',
        }),
      ]}
    />
  );
}
