import { CategoryPageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Business Advisory Services | Fort Myers & Naples',
  description:
    'Entity structuring, financial planning, and strategic advisory support to help business owners make confident, informed decisions.',
  path: '/business-advisory-services',
});

const breadcrumb = [{ name: 'Business Advisory Services', href: '/business-advisory-services' }];

const faqs = [
  {
    q: 'Do you help start a new business?',
    a: 'Yes. We help you choose the entity type, understand the tax treatment that comes with each option, register in Florida, and get the accounting and payroll foundations set up correctly from day one. Where a legal filing or an operating agreement needs an attorney, we coordinate with yours or refer you to one.',
  },
  {
    q: 'Can you help restructure an existing entity?',
    a: 'Often, yes. Businesses outgrow the structure they started with — a sole proprietorship that should be an LLC, an LLC that would benefit from an S-corp election, a single entity that ought to be two. We model what the change would actually save against what it costs to make, and we will tell you when the answer is to leave it alone.',
  },
  {
    q: 'Is financial planning only for individuals or also business owners?',
    a: 'Both, and for owners the two are inseparable. Your business is usually your largest asset, your main income source, and your retirement plan simultaneously. Planning that treats personal finances and the business as separate systems tends to produce advice that does not survive contact with reality.',
  },
  {
    q: 'How does this connect to tax planning?',
    a: 'Directly — nearly every advisory decision has a tax consequence attached. Entity type determines how profit is taxed. Owner compensation splits affect payroll tax. Retirement plan selection changes deductible amounts. Because we handle the tax work too, the advice comes with those consequences already priced in rather than discovered later.',
  },
];

export default function BusinessAdvisoryPage() {
  return (
    <CategoryPageTemplate
      breadcrumb={breadcrumb}
      categorySlug="/business-advisory-services"
      eyebrow="Business Advisory"
      h1="Business Advisory Services"
      subtitle="Second-opinion guidance for the structural and strategic decisions that shape the next several years of your business."
      introHeading="For the decisions that are hard to undo"
      intro={[
        'Most of what a business owner decides is reversible. Pricing can be adjusted, a hire can be replaced, a vendor can be swapped. But a handful of decisions are structural — how the entity is organized, who owns what, how profit is distributed, what happens when a partner leaves — and those are expensive and disruptive to change once they are in place.',
        'Those are the decisions worth taking outside counsel on. Advisory work here means sitting down with the specifics of your situation and modeling the real consequences: what an S-corp election saves at your profit level and what it costs in administration, whether a second entity genuinely protects anything, what a partner buyout would look like in tax terms.',
        'It covers two connected areas — entity design and formation, and financial planning that keeps your personal goals and your business in the same picture. Because the same firm handles your tax and accounting work, the advice is grounded in your actual numbers rather than a general principle that may or may not apply to you.',
      ]}
      image={images.analysis}
      included={[
        {
          title: 'Entity structure review',
          text: 'Whether your current structure still fits your profit level, ownership, and growth plans.',
        },
        {
          title: 'Formation support',
          text: 'Florida registration, EIN, elections, and the accounting foundations set up correctly from the start.',
        },
        {
          title: 'Financial planning coordination',
          text: 'Personal goals, retirement, and business decisions planned as one connected system.',
        },
        {
          title: 'Growth & exit conversations',
          text: 'What scaling, adding a partner, or selling would mean financially and how to prepare for it.',
        },
        {
          title: 'Tax-integrated advice',
          text: 'Every recommendation carries its tax consequence, calculated rather than assumed.',
        },
        {
          title: 'Professional coordination',
          text: 'We work alongside your attorney, banker, and financial advisor so the plan stays consistent.',
        },
      ]}
      processTitle="How advisory engagements work"
      process={[
        {
          title: 'Free Consultation',
          text: 'The decision you are facing, the constraints around it, and what you are trying to achieve.',
        },
        {
          title: 'Analysis & Modeling',
          text: 'We run the numbers on the realistic options, including the ones you had not considered.',
        },
        {
          title: 'Recommendation',
          text: 'A clear recommendation with the reasoning, the cost, and the trade-offs laid out plainly.',
        },
        {
          title: 'Implementation Support',
          text: 'Filings, elections, and coordination with your attorney to put the decision into effect.',
        },
      ]}
      midCta={{
        title: 'Facing a decision you do not want to get wrong?',
        text: 'Bring it to a free consultation. Even one conversation tends to clarify which options are genuinely on the table.',
      }}
      faqs={faqs}
      related={[
        {
          href: '/tax-services',
          title: 'Tax Services',
          text: 'The tax consequences behind every structural decision.',
        },
        {
          href: '/accounting-cfo-services',
          title: 'Accounting & CFO Services',
          text: 'The numbers advisory work is built on.',
        },
        {
          href: '/tax-services/estate-planning',
          title: 'Estate Planning',
          text: 'Succession and generational transfer planning.',
        },
        { href: '/contact', title: 'Contact', text: 'Book a free consultation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Business Advisory Services',
          serviceType: 'Business Advisory',
          description:
            'Entity structuring, business formation support, and tax-aware financial planning for business owners in Fort Myers, Naples, and across Florida.',
          path: '/business-advisory-services',
        }),
      ]}
    />
  );
}
