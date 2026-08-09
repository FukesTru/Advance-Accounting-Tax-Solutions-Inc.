import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Button, CheckList, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks, StatRow } from '@/components/sections';
import { images } from '@/lib/images';
import { breadcrumbSchema, personSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Meet Joseph Fragnoli — Founder & CPA',
  description:
    'Meet Joseph Fragnoli, founder of Advance Accounting & Tax Solutions — hands-on tax and accounting guidance for individuals and businesses across SWFL.',
  path: '/about',
});

const breadcrumb = [{ name: 'About', href: '/about' }];

const howIWork = [
  {
    title: 'You talk to me, not a call queue',
    text: 'The person who reviews your return is the person who answers your email. No handoffs to a seasonal preparer you have never met.',
  },
  {
    title: 'Plain language, always',
    text: 'You should be able to explain your own tax position to your spouse or business partner. If an explanation leaves you nodding without understanding, I have not finished it.',
  },
  {
    title: 'Proactive, not reactive',
    text: 'We meet before the year closes, while there is still time to change the outcome — not in April to record what already happened.',
  },
  {
    title: 'Honest about fit',
    text: 'If your situation needs a specialist I am not, I will say so and point you somewhere better. That has cost me work and earned me referrals.',
  },
];

const stats = [
  // TODO(client): Joseph to confirm licensure, certifications, and real figures.
  { label: 'Years in practice', value: 'X+' },
  { label: 'Clients served', value: 'X+' },
  { label: 'Industries supported', value: 'X+' },
];

const related = [
  {
    href: '/tax-services',
    title: 'Tax Services',
    text: 'Planning, compliance, and estate-side tax guidance.',
  },
  {
    href: '/accounting-cfo-services',
    title: 'Accounting & CFO Services',
    text: 'Bookkeeping, payroll, and fractional CFO support.',
  },
  {
    href: '/business-advisory-services',
    title: 'Business Advisory',
    text: 'Entity structure and long-term financial planning.',
  },
  { href: '/contact', title: 'Contact', text: 'Book a free consultation with Joseph directly.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personSchema(), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="About the firm"
        title={`Meet ${site.owner} — Founder, Advance Accounting & Tax Solutions`}
        subtitle="Straight answers and real planning — not just a once-a-year filing service."
      >
        <Button href="/contact" variant="gold">
          Schedule a Free Consultation
        </Button>
        <Button href={site.phoneHref} variant="outline">
          {site.phone}
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
          <FadeIn>
            <Media image={images.joseph} tall sizes="(max-width: 1024px) 100vw, 36vw" />
          </FadeIn>

          <FadeIn delay={120}>
            <SectionHeading eyebrow="Background" title="Why this firm exists" />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                {/* TODO(client): confirm credentials, licensure, and career history. */}
                {site.owner} founded Advance Accounting &amp; Tax Solutions, Inc. after years of
                watching capable business owners get good compliance work and no strategy. Returns
                were filed correctly and on time, and yet the same people kept overpaying — because
                nobody had talked to them in October about how they were structured, how they paid
                themselves, or what the next twelve months were going to look like.
              </p>
              <p>
                The firm was built to close that gap. Alongside tax work, Joseph brings hands-on
                accounting and fractional CFO experience, which means the advice does not stop at
                the return. Owners get help reading their own numbers, forecasting cash, and making
                structural decisions with the tax consequences already priced in.
              </p>
              <p>
                Based in Ave Maria and serving Fort Myers, Naples, and the surrounding Southwest
                Florida communities, the practice also works with clients across the country
                remotely — including multi-state filers and business owners who relocated to Florida
                but kept operations elsewhere.
              </p>
            </div>

            <div className="mt-9">
              <h3 className="text-lg">Who Joseph works best with</h3>
              <ul className="mt-4 space-y-2 text-slate-body">
                <li>• Individuals who want a real plan, not a receipt for a filed return</li>
                <li>• Small business owners juggling books, payroll, and taxes alone</li>
                <li>• Entrepreneurs who need CFO-level guidance without a full-time hire</li>
                <li>• Families and investors coordinating estate and multi-entity tax planning</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section tone="shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading eyebrow="Approach" title="How I work with clients" />
          </FadeIn>
          <FadeIn delay={120}>
            <CheckList items={howIWork} />
          </FadeIn>
        </div>
      </Section>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="By the numbers"
            title="The practice at a glance"
            intro="Figures are being confirmed and will be updated before launch."
          />
          <div className="mt-10">
            <StatRow stats={stats} />
          </div>
        </FadeIn>
      </Section>

      <CTABanner
        title="Ready to talk?"
        text="A free consultation is exactly that — a conversation about your situation with no obligation attached."
      />

      <RelatedLinks links={related} title="Where to go next" />
    </>
  );
}
