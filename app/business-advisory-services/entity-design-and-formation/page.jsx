import { SubServicePageTemplate } from '@/components/templates';
import { images } from '@/lib/images';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'LLC & S-Corp Formation Accountant | Florida',
  description:
    'Choose and set up the right business structure — LLC, S-corp, partnership — with tax efficiency and growth in mind. Florida formation support.',
  path: '/business-advisory-services/entity-design-and-formation',
});

const breadcrumb = [
  { name: 'Business Advisory Services', href: '/business-advisory-services' },
  {
    name: 'Entity Design & Formation',
    href: '/business-advisory-services/entity-design-and-formation',
  },
];

const faqs = [
  {
    q: 'Do you file the formation paperwork or just advise?',
    a: 'Both, within our lane. We handle the Florida Division of Corporations registration, the EIN application, and the federal elections such as Form 2553 for S-corp status. Drafting operating agreements, partnership agreements, and buy-sell provisions is legal work — we coordinate with your attorney on those, or refer you to one if you do not have one yet.',
  },
  {
    q: 'Should I be an LLC or an S-corp?',
    a: 'These are not actually competing options, which is the source of most confusion. An LLC is a legal structure; an S-corp is a tax election that an LLC can make. The real question is whether your profit is high enough that electing S-corp treatment saves more in self-employment tax than it adds in payroll administration and filing costs. That threshold depends on your numbers, and we calculate it rather than guessing.',
  },
  {
    q: 'Can you help restructure an existing business?',
    a: 'Yes. Converting a sole proprietorship to an LLC, electing S-corp status for an existing LLC, adding or removing owners, or separating operations into multiple entities are all workable. Timing matters — some elections have deadlines tied to the tax year — so it is worth raising early rather than in December.',
  },
  {
    q: 'What does this cost compared to a DIY filing service?',
    a: 'More than a $99 online filing, and the difference is what you are actually buying. Those services file a form; they do not tell you whether the entity type fits your situation, whether an election makes sense at your profit level, or how to set up your books and owner compensation afterward. Most of the expensive entity problems we fix later started with a correctly filed form and no advice attached to it.',
  },
];

export default function EntityFormationPage() {
  return (
    <SubServicePageTemplate
      breadcrumb={breadcrumb}
      eyebrow="Business Advisory"
      h1="Entity Design & Formation Assistance"
      subtitle="Choose the structure that fits the business you are building — and set it up so it still works as the business grows."
      introHeading="A decision you make once and live with for years"
      intro={[
        'Entity selection gets treated as paperwork. It is closer to a foundation. The structure you choose determines how your profit is taxed, how you can pay yourself, what liability protection you have, how hard it is to add a partner or take on investment, and what happens when you eventually sell or hand the business on. Changing it later is possible but rarely cheap or clean.',
        'The confusion usually starts with the LLC-versus-S-corp framing, which compares two different things. An LLC is a legal entity registered with the state. An S-corp is a federal tax election that an LLC or a corporation can make. You can have both, and for many profitable owner-operated businesses that combination is exactly right — but only above a profit level where the self-employment tax savings outweigh the payroll and filing costs it adds.',
        'So we start with your numbers rather than a rule of thumb. Expected profit, how many owners, whether you plan to raise capital, what your exit horizon looks like. Then we model the realistic options, recommend one with the reasoning attached, and handle the Florida registration, EIN, and elections. If your attorney needs to draft an operating agreement, we work with them so the legal documents and the tax structure actually agree.',
      ]}
      image={images.legal}
      whoFor={[
        {
          title: 'New business owners',
          text: 'Setting up correctly at the start, when it costs a conversation instead of a restructuring.',
        },
        {
          title: 'Sole proprietors ready to formalize',
          text: 'Where liability exposure or profit level has outgrown operating under your own name.',
        },
        {
          title: 'Businesses considering an S-corp election',
          text: 'Owners who have heard it saves money and want to know whether it does at their profit level.',
        },
        {
          title: 'Multi-entity operators',
          text: 'Real estate holdings, multiple lines of business, or partners who need clean separation.',
        },
      ]}
      whatWeDo={[
        {
          title: 'Entity type comparison',
          text: 'LLC, S-corp election, partnership, and C-corp modeled against your actual expected numbers.',
        },
        {
          title: 'Florida formation support',
          text: 'Division of Corporations registration, EIN, and the state accounts your business needs.',
        },
        {
          title: 'S-corp election guidance',
          text: 'Form 2553 timing, reasonable compensation analysis, and the payroll setup it requires.',
        },
        {
          title: 'Attorney coordination',
          text: 'We work with your attorney on operating agreements and ownership documents so tax and legal align.',
        },
        {
          title: 'Post-formation setup',
          text: 'Chart of accounts, owner compensation, and bookkeeping configured for the structure you chose.',
        },
      ]}
      process={[
        {
          title: 'Consultation',
          text: 'Your plans, expected profit, ownership, and risk profile — the inputs the decision actually turns on.',
        },
        {
          title: 'Structure Recommendation',
          text: 'The realistic options modeled side by side, with a clear recommendation and the reasoning behind it.',
        },
        {
          title: 'Formation & Setup Support',
          text: 'Registration, EIN, elections, and accounting foundations put in place and verified.',
        },
      ]}
      faqs={faqs}
      related={[
        {
          href: '/accounting-cfo-services/fractional-cfo-services',
          title: 'Fractional CFO Services',
          text: 'Strategy once the structure is settled.',
        },
        {
          href: '/business-advisory-services/financial-planning',
          title: 'Financial Planning',
          text: 'Personal planning around your business.',
        },
        {
          href: '/tax-services/tax-planning',
          title: 'Tax Planning',
          text: 'Ongoing strategy for your new entity.',
        },
        { href: '/contact', title: 'Contact', text: 'Talk through your structure options.' },
      ]}
      schema={[
        serviceSchema({
          name: 'Entity Design & Formation Assistance',
          serviceType: 'Business Formation',
          description:
            'LLC, S-corp, and partnership entity selection, Florida business formation, S-corp election guidance, and post-formation accounting setup.',
          path: '/business-advisory-services/entity-design-and-formation',
        }),
      ]}
    />
  );
}
