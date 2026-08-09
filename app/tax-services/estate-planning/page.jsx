import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Estate & Trust Tax Planning | Naples & Fort Myers',
  description:
    'Coordinated estate and trust tax planning to help protect assets and simplify what you pass on to the people and causes you care about.',
  path: '/tax-services/estate-planning',
});

const breadcrumb = [
  { name: 'Tax Services', href: '/tax-services' },
  { name: 'Estate Planning', href: '/tax-services/estate-planning' },
];

const faqs = [
  {
    q: 'Do you draft wills or trusts?',
    a: 'No — drafting those documents is the practice of law and belongs with a licensed estate attorney. Our work is the tax side: modeling what a proposed structure does to your tax exposure, handling trust and estate returns, and making sure the plan your attorney drafts is tax-efficient rather than merely valid.',
  },
  {
    q: 'Can you work with my existing estate attorney?',
    a: 'Yes, and that is the usual arrangement. Your attorney owns the documents and the legal structure; we own the tax analysis and the filings. The two disciplines produce a much better plan together than either does alone, and we are comfortable being the one who raises a tax question about a draft before it gets signed.',
  },
  {
    q: 'What taxes apply to inherited assets in Florida?',
    a: 'Florida imposes no state estate tax and no state inheritance tax, which is a real advantage. The federal estate tax still applies above the federal exemption, and income tax questions do not disappear — inherited retirement accounts carry distribution rules, and the step-up in basis at death affects what a later sale costs. The state-level relief is genuine, but it is not the whole picture.',
  },
  {
    q: 'When should estate tax planning start?',
    a: 'Earlier than most people think, and specifically before a triggering event rather than after. Selling a business, a large liquidity event, a second marriage, a child entering the business, or a move to Florida from a state with its own estate tax are all moments where the planning window is open beforehand and closed afterward.',
  },
];

export default function EstatePlanningPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Tax Services"
      h1="Estate & Trust Tax Planning"
      subtitle="The tax side of what you pass on — coordinated with your attorney, so the plan works on paper and in practice."
      introHeading="Where estate documents meet tax reality"
      intro={[
        'A good estate plan and a tax-efficient estate plan are not automatically the same thing. Attorneys draft documents that do what you intend legally: who receives what, who decides, what happens if circumstances change. That is essential work, and it is not our work. What frequently goes unexamined is the tax consequence of the structure — which trust type creates which filing obligation, how basis behaves at death, what a gift today costs versus a bequest later.',
        'That is the gap we fill. We look at the plan you have or the plan being drafted, model the tax exposure it creates, and coordinate with your attorney on the changes worth making. Then we handle the ongoing compliance those structures generate: trust returns, estate returns, and the reporting that follows a gift.',
        'Florida helps here — no state estate tax and no state inheritance tax removes a whole layer that clients moving from the Northeast are used to fighting. But the federal rules still apply, inherited retirement accounts carry their own distribution timelines, and business owners planning a succession have an entirely separate set of questions. Getting those right is worth doing before the event, not after.',
      ]}
      note="Scope note: we provide tax analysis and compliance for estates and trusts. We do not draft wills, trusts, or other legal instruments — that work belongs with your estate attorney, and we coordinate directly with them."
      image={images.advisory}
      whoFor={[
        {
          title: 'Individuals with significant assets',
          text: 'Where federal exemption thresholds, gifting strategy, and basis planning start to carry real dollars.',
        },
        {
          title: 'Business owners planning succession',
          text: 'Transferring an operating business to family or partners is a tax event long before it is a legal one.',
        },
        {
          title: 'Families updating an existing plan',
          text: 'Plans written years ago often reflect exemptions, rules, and family circumstances that have since changed.',
        },
        {
          title: 'New Florida residents',
          text: 'Relocating from a state with its own estate or inheritance tax changes the calculus considerably.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Trust and estate tax return support',
          text: 'Form 1041 and related filings prepared and coordinated with beneficiary reporting.',
        },
        {
          title: 'Gifting strategy tax guidance',
          text: 'Annual exclusion and lifetime exemption planning, plus the gift tax reporting that follows.',
        },
        {
          title: 'Coordination with your attorney',
          text: 'Reviewing proposed entity and trust structures for tax consequences before documents are executed.',
        },
        {
          title: 'Generational transfer planning',
          text: 'Modeling what a transfer costs now versus later, including basis and business succession considerations.',
        },
      ]}
      process={[
        {
          title: 'Review Current Plan',
          text: 'We read the existing documents and returns to understand what is actually in place today.',
        },
        {
          title: 'Identify Tax Exposure',
          text: 'Where the current structure creates avoidable tax, and which options are realistically available.',
        },
        {
          title: 'Coordinate With Your Attorney',
          text: 'We take the tax recommendations directly to your attorney so the documents reflect them.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/tax-services/tax-planning',
          title: 'Tax Planning',
          text: 'Year-round strategy alongside the estate work.',
        },
        {
          href: '/business-advisory-services',
          title: 'Business Advisory Services',
          text: 'Succession and structure for business owners.',
        },
        {
          href: '/business-advisory-services/financial-planning',
          title: 'Financial Planning',
          text: 'Long-term goals coordinated with the estate plan.',
        },
        { href: '/contact', title: 'Contact', text: 'Start the estate tax conversation.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Estate & Trust Tax Planning',
          serviceType: 'Estate Tax Planning',
          description:
            'Estate and trust tax planning, trust and estate return preparation, gifting strategy, and generational transfer planning coordinated with estate attorneys in Naples and Fort Myers, Florida.',
          path: '/tax-services/estate-planning',
        }),
      ]}
    />
  );
}
