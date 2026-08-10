import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Financial Planning CPA | Fort Myers & Naples, FL',
  description:
    'Tax-aware financial planning for individuals and business owners — retirement, cash flow, and long-term wealth goals in one coordinated plan.',
  path: '/business-advisory-services/financial-planning',
});

const breadcrumb = [
  { name: 'Business Advisory Services', href: '/business-advisory-services' },
  { name: 'Financial Planning', href: '/business-advisory-services/financial-planning' },
];

const faqs = [
  {
    q: 'Are you a financial advisor who manages investments?',
    a: 'No. We do not manage portfolios, sell securities or insurance products, or provide investment advice, and we are not compensated by anyone who does. Our work is the planning and tax layer: what your goals require, what the tax treatment of each option is, and how the pieces fit together. Investment implementation stays with a licensed advisor.',
  },
  {
    q: 'Do you work alongside my existing financial advisor?',
    a: 'Regularly, and it produces better outcomes than either of us working alone. Your advisor manages the portfolio; we make sure the tax side is handled — account location, withdrawal sequencing, capital gain timing, charitable strategy. Most of the value in that collaboration comes from decisions that fall between the two roles and would otherwise go unmade.',
  },
  {
    q: 'Is this for individuals, businesses, or both?',
    a: 'Both, and for business owners the distinction barely holds. When your company is your largest asset, your income source, and your retirement plan simultaneously, personal and business planning are the same conversation. Planning them separately is how owners end up with a retirement strategy their business cannot actually fund.',
  },
  {
    q: 'How often do we review the plan?',
    a: 'Annually at minimum, and more often when something material changes — a liquidity event, a new entity, a move, a sale, a change in family circumstances. A plan built once and filed away stops reflecting reality within a couple of years, which is worse than useful because it feels like a plan.',
  },
];

export default function FinancialPlanningPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Business Advisory"
      h1="Financial Planning"
      subtitle="Tax-aware planning that keeps your personal goals and your business in the same picture."
      introHeading="Planning with the tax consequences already accounted for"
      intro={[
        'A financial plan tells you what you are working toward and whether your current trajectory gets you there — retirement at a particular age, a second property, funding education, selling the business on your terms. That framing is useful. What is often missing is the tax layer underneath it, which quietly determines how much of each dollar actually reaches the goal.',
        'That is the perspective we add. Which account type a contribution should go into and why. How a business sale is structured and taxed. Which assets are worth holding for a step-up in basis rather than selling. What sequence of withdrawals in retirement costs the least. These are planning questions with tax answers, and they tend to fall between the advisor who manages investments and the accountant who files the return.',
        'To be direct about scope: we are not investment managers. We do not sell products, manage portfolios, or earn commissions, which means the advice has no product attached to it. If you already work with a financial advisor, we coordinate with them. If you do not have one and need one, we will point you toward good options. Our role is the plan and the tax reasoning that makes it hold together.',
      ]}
      note="Scope note: we provide tax-aware financial planning, not investment management or securities advice. We do not sell financial products or manage portfolios. Investment implementation stays with your licensed financial advisor, and we coordinate directly with them."
      image={images.advisory}
      whoFor={[
        {
          title: 'Individuals planning for retirement',
          text: 'Where account type, contribution timing, and withdrawal sequence change the after-tax result materially.',
        },
        {
          title: 'Business owners',
          text: 'Whose company is simultaneously the main asset, the income source, and the retirement plan.',
        },
        {
          title: 'Anyone facing a major transition',
          text: 'A business sale, an inheritance, a relocation, or a liquidity event — all better planned before than after.',
        },
        {
          title: 'Families with long-term goals',
          text: 'Education funding, property purchases, and generational transfers coordinated with the tax picture.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Retirement savings strategy coordination',
          text: 'Plan selection for owners — SEP, SIMPLE, solo 401(k), defined benefit — and contribution timing.',
        },
        {
          title: 'Cash-flow and goal planning',
          text: 'What your goals actually require, and whether your current path realistically funds them.',
        },
        {
          title: 'Tax-aware investment coordination',
          text: 'Asset location, gain and loss timing, and withdrawal sequencing, coordinated with your advisor.',
        },
        {
          title: 'Transition planning',
          text: 'Business sales, relocations, inheritances, and other events modeled before they happen.',
        },
      ]}
      process={[
        {
          title: 'Goals Conversation',
          text: 'What you are working toward, on what timeline, and what you are unwilling to compromise on.',
        },
        {
          title: 'Plan Build',
          text: 'A written plan with the tax reasoning, funding requirements, and specific next steps.',
        },
        {
          title: 'Ongoing Reviews',
          text: 'Annual reviews, plus updates whenever something material changes in your life or business.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/tax-services/estate-planning',
          title: 'Estate Planning',
          text: 'Extending the plan to what you pass on.',
        },
        {
          href: '/business-advisory-services/entity-design-and-formation',
          title: 'Entity Design & Formation',
          text: 'Structure decisions that shape the plan.',
        },
        {
          href: '/tax-services/tax-planning',
          title: 'Tax Planning',
          text: 'Year-round strategy behind the plan.',
        },
        { href: '/contact', title: 'Contact', text: 'Start the planning conversation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Financial Planning',
          serviceType: 'Financial Planning',
          description:
            'Tax-aware financial planning for individuals and business owners in Fort Myers and Naples, Florida, including retirement strategy coordination, cash-flow planning, and transition planning. Not investment management or securities advice.',
          path: '/business-advisory-services/financial-planning',
        }),
      ]}
    />
  );
}
