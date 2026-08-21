import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import HomeHero from '@/components/HomeHero';
import JsonLd from '@/components/JsonLd';
import Avatar from '@/components/Avatar';
import Media from '@/components/Media';
import { Icon } from '@/components/Icons';
import { Button, Section, SectionHeading } from '@/components/primitives';
import {
  CTABanner,
  FAQSection,
  MapBlock,
  ProcessSteps,
  ServiceCardGrid,
} from '@/components/sections';
import { images } from '@/lib/images';
import { accountingServiceSchema, faqSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { firmFacts, serviceAreas, serviceCategories, site, stats, team } from '@/lib/site';

export const metadata = buildMetadata({
  title: `Accountant & Tax Advisor in Fort Myers & Naples, FL | ${site.shortName}`,
  description:
    'CPA-led tax planning, accounting, and fractional CFO services for individuals and businesses in Fort Myers & Naples, FL. Free consultation — call today.',
  path: '/',
});

const faqs = [
  {
    q: 'Do you work with clients outside of Florida?',
    a: 'Yes. Fort Myers and Naples are our home markets and where we meet clients in person, but we serve individuals and businesses nationwide. Onboarding, planning meetings, and e-filing are all handled remotely by video call and phone, including multi-state returns.',
  },
  {
    q: 'Do you offer fractional CFO services for small businesses?',
    a: 'We do. Fractional CFO work is designed for businesses that need forecasting, margin analysis, and strategic financial guidance but are not ready to pay for a full-time CFO. Engagements typically run a set number of hours each month and scale up or down as your business changes.',
  },
  {
    q: "What's the difference between tax planning and tax preparation?",
    a: 'Tax preparation reports what already happened — it is accurate, on-time compliance for a year that is finished. Tax planning happens before the year closes, while decisions about entity structure, compensation, timing, retirement contributions, and purchases can still change the outcome. Most clients need both, and we handle them together.',
  },
  {
    q: 'How do I get started?',
    a: 'Call us or send a message through the contact form to book a free consultation. We will talk through your situation, tell you honestly whether we are the right fit, and outline what working together would look like and what it would cost before you commit to anything.',
  },
];

const process = [
  {
    title: 'Book a Free Consultation',
    text: 'A short, no-obligation call to understand your situation, your deadlines, and what has been frustrating you.',
  },
  {
    title: 'We Review Your Situation',
    text: 'We look at prior returns, entity structure, and books to find the gaps and the opportunities most firms skip past.',
  },
  {
    title: 'We Build Your Plan',
    text: 'You get a clear scope: what we handle, what it costs, and the specific moves we recommend and why.',
  },
  {
    title: 'Ongoing Support & Filing',
    text: 'Year-round check-ins, proactive adjustments, and filings handled on time — not a once-a-year scramble.',
  },
];

export default function HomePage() {
  const serviceCards = serviceCategories.map((category) => ({
    href: category.slug,
    title: category.title,
    blurb: category.blurb,
    icon: category.icon,
    links: category.children,
    cta: 'Explore',
  }));

  return (
    <>
      <JsonLd data={[accountingServiceSchema(), faqSchema(faqs)]} />

      <HomeHero />

      {/* ---------------------------------------------------------- */}
      {/* What we do                                                  */}
      {/* ---------------------------------------------------------- */}
      <Section tone="shell">
        <SectionHeading
          eyebrow="What We Do"
          title="Three ways we support individuals and business owners"
          intro="Most clients start with one service and grow into the others. Whether you need a return filed correctly or a financial strategy for the next five years, it is the same advisor and the same standard of work."
        />
        <div className="mt-12">
          <ServiceCardGrid items={serviceCards} />
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Mid-page CTA                                                */}
      {/* ---------------------------------------------------------- */}
      <CTABanner
        title="Not sure which service you need? We'll map it out on a free call."
        text="Tell us what is going on — behind on filings, unclear books, thinking about restructuring — and we will tell you what actually needs to happen first."
      />

      {/* ---------------------------------------------------------- */}
      {/* Our story                                                   */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <Media image={images.analysis} sizes="(max-width: 1024px) 100vw, 45vw" />
          </FadeIn>
          <FadeIn delay={120}>
            <SectionHeading
              eyebrow="Our Story"
              title="Forty-two years of doing this, built for the other eleven months"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                Advance Accounting &amp; Tax Solutions is led by Joseph F. Fragnoli, CPA, a
                Florida-licensed CPA with 42 years in public accounting and the last thirteen in
                independent practice. The firm was built around a simple observation: most
                people only hear from their accountant when a deadline is close. By then the
                decisions that mattered — how the business was structured, how owners paid
                themselves, when equipment was bought — had already been made without any tax input
                at all.
              </p>
              <p>
                We work the other way around. Clients get a relationship, not a transaction:
                planning conversations before the year ends, clean books they can actually read, and
                an advisor who picks up the phone. We work with {firmFacts.clientTypes} — businesses
                generally between {firmFacts.clientRevenueLong} in revenue — and every one of them
                gets direct access to the person doing the work.
              </p>
            </div>

            <div className="mt-9">
              <dl className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-navy/10 bg-shell p-5">
                    <dd className="font-display text-3xl font-extrabold text-navy">{stat.value}</dd>
                    <dt className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-body">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-8">
              <Button href="/about" variant="navy">
                Meet {site.owner.split(' ')[0]}
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* Meet the team                                               */}
      {/* ---------------------------------------------------------- */}
      <Section tone="shell">
        <SectionHeading
          eyebrow="Meet the team"
          title="A small firm, on purpose"
          intro="No call queue and no seasonal preparers. Three people, and you will know all of them by name — the person who reviews your work is the person who answers your call."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <FadeIn key={member.slug} delay={index * 90} className="h-full">
              <Link
                href={`/team#${member.slug}`}
                className="group flex h-full flex-col items-start rounded-xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <Avatar
                  image={images[member.imageKey]}
                  initials={member.initials}
                  name={member.name}
                  size="md"
                />
                <h3 className="mt-5 text-lg group-hover:text-gold-700">{member.name}</h3>
                <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                  {member.role}
                </p>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                  {member.focus}
                </p>
                <span
                  aria-hidden="true"
                  className="mt-5 font-display text-sm font-bold text-navy group-hover:text-gold-700"
                >
                  Read {member.shortName}&rsquo;s profile &rarr;
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* How we work                                                 */}
      {/* ---------------------------------------------------------- */}
      <ProcessSteps
        tone="white"
        steps={process}
        eyebrow="How We Work"
        title="Getting started takes one phone call"
        intro="No long onboarding forms before we have even spoken. We start with a conversation, and you will know exactly what working together looks like before anything is signed."
      />

      {/* ---------------------------------------------------------- */}
      {/* Where we serve                                              */}
      {/* ---------------------------------------------------------- */}
      <Section>
        <SectionHeading
          eyebrow="Where We Serve"
          title="Rooted in Southwest Florida, working with clients nationwide"
          intro="Our office is in Ave Maria, between Naples and Fort Myers, and we meet local clients in person. Everyone else works with us remotely — same advisor, same responsiveness, wherever you are."
        />
        {/* Two flagship markets get a card; the rest are linked below so the
            section stays scannable as the area list grows. */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {serviceAreas.slice(0, 2).map((area, index) => (
            <FadeIn key={area.slug} delay={index * 100}>
              <Link
                href={area.slug}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg"
              >
                <Media
                  image={index === 0 ? images.fortMyers : images.naples}
                  className="rounded-none border-0"
                  sizes="(max-width: 640px) 100vw, 45vw"
                />
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl group-hover:text-gold-700">{area.city}, Florida</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-700">
                    {area.county}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-body">{area.blurb}</p>
                  <span
                    aria-hidden="true"
                    className="mt-5 font-display text-sm font-bold text-navy group-hover:text-gold-700"
                  >
                    View {area.city} services &rarr;
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div className="mt-8 rounded-2xl border border-navy/10 bg-shell p-7">
            <h3 className="text-lg">Also serving across Lee &amp; Collier counties</h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {serviceAreas.slice(2).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={area.slug}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-4 py-2 font-display text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold-700"
                  >
                    <Icon name="pin" className="h-3.5 w-3.5 text-gold-700" />
                    {area.city}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-body">
              <Link href="/areas" className="font-semibold text-navy underline hover:text-gold-700">
                See all service areas
              </Link>{' '}
              — or, if you are outside Southwest Florida,{' '}
              <Link
                href="/contact"
                className="font-semibold text-navy underline hover:text-gold-700"
              >
                we work with clients across the country remotely
              </Link>
              .
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* ---------------------------------------------------------- */}
      {/* FAQ                                                         */}
      {/* ---------------------------------------------------------- */}
      <FAQSection
        faqs={faqs}
        eyebrow="FAQ"
        title="Questions we hear before the first call"
        intro="If yours is not here, ask it directly — we answer every message ourselves."
      />

      {/* ---------------------------------------------------------- */}
      {/* Find us                                                     */}
      {/* ---------------------------------------------------------- */}
      <MapBlock tone="shell" />

      {/* ---------------------------------------------------------- */}
      {/* Final CTA                                                   */}
      {/* ---------------------------------------------------------- */}
      <CTABanner
        title="Schedule your free consultation"
        text="Bring your questions, your last return, or just a rough idea of what you need. We will tell you straight whether we can help."
      />
    </>
  );
}
