import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Button, CheckList, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks, StatRow } from '@/components/sections';
import { images } from '@/lib/images';
import { breadcrumbSchema, personSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { firmFacts, site, stats, team } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Meet Joseph F. Fragnoli, CPA — President & CEO',
  description:
    'Joseph F. Fragnoli, CPA has spent 40+ years in public accounting. Meet the founder of Advance Accounting & Tax Solutions in Ave Maria, Florida.',
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
        title="Meet Joseph F. Fragnoli, CPA — President & CEO, Advance Accounting & Tax Solutions"
        subtitle="Forty years in public accounting, the last ten in independent practice. Straight answers and real planning — not just a once-a-year filing service."
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
            <SectionHeading eyebrow="Background" title="Four decades of doing this work" />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                Joseph F. Fragnoli is a CPA licensed in Florida and the President and CEO of Advance
                Accounting &amp; Tax Solutions, Inc. He has spent more than forty years in public
                accounting — first licensed in California in {firmFacts.firstLicensed} — and the
                last ten of those in independent practice, working directly with the clients whose
                returns he signs.
              </p>
              <p>
                He attended UCLA and California State University, Fullerton, graduating from CSUF
                with a bachelor&rsquo;s degree in Business Administration with an emphasis in
                Accounting. Four decades on, the through-line of the practice is the same: tax
                compliance and planning, tax resolution work when things have gone wrong,
                start-up and entity guidance, and the bookkeeping and accounting that everything
                else depends on.
              </p>
              <p>
                The firm works with {firmFacts.clientTypes} — businesses generally running between{' '}
                {firmFacts.clientRevenueLong} in annual revenue. Based in Ave Maria and serving Fort
                Myers, Naples, and the surrounding Southwest Florida communities, the practice also
                supports clients across the country remotely, including multi-state filers and
                owners who relocated to Florida but kept operations elsewhere.
              </p>
            </div>

            <div className="mt-9">
              <h3 className="text-lg">Credentials &amp; background</h3>
              <ul className="mt-4 space-y-2 text-slate-body">
                <li>• Certified Public Accountant, licensed in Florida</li>
                <li>• First licensed as a CPA in California in {firmFacts.firstLicensed}</li>
                <li>• 40+ years in public accounting; 10 years in independent practice</li>
                <li>
                  • B.A. in Business Administration, emphasis in Accounting — California State
                  University, Fullerton (also attended UCLA)
                </li>
                <li>• President, Joseph F. Fragnoli, CPA, Inc. — Ave Maria, Florida</li>
              </ul>
            </div>

            <div className="mt-9">
              <h3 className="text-lg">Who Joseph works best with</h3>
              <ul className="mt-4 space-y-2 text-slate-body">
                <li>• Closely held corporations, partnerships, and LLCs</li>
                <li>• Individuals who want a real plan, not a receipt for a filed return</li>
                <li>• Small business owners juggling books, payroll, and taxes alone</li>
                <li>• Owners who need CFO-level guidance without a full-time hire</li>
                <li>• Anyone dealing with back taxes, unfiled returns, or an IRS notice</li>
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
          <SectionHeading eyebrow="By the numbers" title="The practice at a glance" />
          <div className="mt-10">
            <StatRow stats={stats} />
          </div>
        </FadeIn>
      </Section>

      <Section tone="navyTint">
        <SectionHeading
          eyebrow="The team"
          title="Who you will be working with"
          intro="A small practice on purpose — the person who reviews your work is the person who answers your call."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 100} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7">
                <h3 className="text-lg">{member.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
                  {member.role}
                </p>
                <p className="mt-4 leading-relaxed text-slate-body">{member.bio}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <CTABanner
        title="Ready to talk?"
        text="A free consultation is exactly that — a conversation about your situation with no obligation attached."
      />

      <RelatedLinks links={related} title="Where to go next" />
    </>
  );
}
