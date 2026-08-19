import Link from 'next/link';
import Avatar from '@/components/Avatar';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Button, CheckList, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks, StatRow } from '@/components/sections';
import { images } from '@/lib/images';
import { affiliatedFirmSchema, breadcrumbSchema, personSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { aboutStats, affiliatedFirm, firmFacts, scopeExclusions, site, team } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Meet Joseph F. Fragnoli, CPA — President & CEO',
  description:
    'Joseph F. Fragnoli, CPA has spent 42 years in public accounting. Meet the founder of Advance Accounting & Tax Solutions in Ave Maria, Florida.',
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
  { href: '/team', title: 'Our Team', text: 'The three people behind the firm.' },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[personSchema(), affiliatedFirmSchema(), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="About the firm"
        title="Meet Joseph F. Fragnoli, CPA — President & CEO"
        subtitle="Forty-two years in public accounting, the last thirteen in independent practice. Straight answers and real planning — not just a once-a-year filing service."
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
            {/* Capped so the 360px source is not upscaled into softness. */}
            <Media
              image={images.joseph}
              className="mx-auto w-full max-w-90 lg:mx-0"
              sizes="(max-width: 1024px) 90vw, 360px"
            />
          </FadeIn>

          <FadeIn delay={120}>
            <SectionHeading eyebrow="Background" title="Four decades of doing this work" />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                Joseph F. Fragnoli is a CPA licensed in Florida and the President and CEO of Advance
                Accounting &amp; Tax Solutions, Inc. He has spent 42 years in public accounting —
                first licensed in California in {firmFacts.firstLicensed} — and the last thirteen of
                those in independent practice, working directly with the clients whose returns he
                signs.
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
                Advance Accounting &amp; Tax Solutions was created deliberately to hold the work
                that falls <em>outside</em> traditional CPA-firm services. It is co-owned with
                Patricia Alcantara, and it does not perform financial statement preparation or the
                reporting that goes with it. That is not a limitation so much as a decision about
                focus &mdash; and where a client genuinely needs a CPA firm, there is one.
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
                <li>• 42 years in public accounting; 13 years in independent practice</li>
                <li>
                  • B.A. in Business Administration, emphasis in Accounting — California State
                  University, Fullerton (also attended UCLA)
                </li>
                <li>• Co-owner of Advance Accounting &amp; Tax Solutions, Inc.</li>
                <li>• Sole owner of Joseph F. Fragnoli, CPA, Inc., the affiliated CPA firm</li>
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
            <StatRow stats={aboutStats} />
          </div>
        </FadeIn>
      </Section>

      <Section tone="navyTint">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="The team"
              title="Joseph is not the whole firm"
              intro="Patricia Alcantara co-owns the practice and runs its operations. James Fragnoli, a retired CFO of a hundred-million-dollar manufacturer, provides the senior input on fractional CFO and accounting engagements. Between them, you get a small firm rather than a sole practitioner."
            />
            <div className="mt-8">
              <Button href="/team" variant="navy">
                Meet the team
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <ul className="space-y-4">
              {team.map((member) => (
                <li key={member.slug}>
                  <Link
                    href={`/team#${member.slug}`}
                    className="flex items-center gap-4 rounded-xl border border-navy/10 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
                  >
                    <Avatar
                      image={images[member.imageKey]}
                      initials={member.initials}
                      name={member.name}
                      size="sm"
                    />
                    <span className="min-w-0">
                      <span className="block font-display text-[0.95rem] font-bold text-navy">
                        {member.name}
                      </span>
                      <span className="block text-xs text-gold-700">{member.role}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="How the firm is structured"
              title="Two entities, one team"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                <strong className="text-navy">{site.name}</strong> handles tax compliance and
                planning, tax resolution, start-up assistance, bookkeeping, and accounting. It was
                built specifically for that work, and it does not take on financial statement
                preparation or the reporting attached to it.
              </p>
              <p>
                <strong className="text-navy">{affiliatedFirm.name}</strong> is the affiliated
                general practice public accounting firm, wholly owned by Joseph. It emphasizes tax
                planning and compliance for closely held companies and high-net-worth individuals,
                tax resolution, and accounting for small and regional businesses.{' '}
                {affiliatedFirm.whenItApplies}
              </p>
              <p>
                Practically speaking, you deal with the same people either way. The distinction
                exists so that engagements land in the entity licensed and structured for them.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-2xl border border-navy/10 bg-shell p-8">
              <h3 className="text-lg">What we do not do</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                Worth stating plainly, so nobody engages us expecting it.
              </p>
              <ul className="mt-5 space-y-3">
                {scopeExclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-body">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-slate-body">
                For attest work we point you to the affiliated CPA firm; for legal documents and
                investment management, to your attorney and your advisor. We coordinate with all
                three.
              </p>
            </div>
          </FadeIn>
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
