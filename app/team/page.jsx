import Link from 'next/link';
import Avatar from '@/components/Avatar';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { Icon } from '@/components/Icons';
import { Button, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks } from '@/components/sections';
import { images } from '@/lib/images';
import { breadcrumbSchema, teamSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { affiliatedFirm, scopeExclusions, site, team } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Our Team',
  description:
    'Meet the people behind Advance Accounting & Tax Solutions — Joseph F. Fragnoli CPA, Patricia Alcantara, and James Fragnoli, serving Southwest Florida.',
  path: '/team',
});

const breadcrumb = [{ name: 'Our Team', href: '/team' }];

const related = [
  { href: '/about', title: 'About the Firm', text: 'How the practice is structured and why.' },
  {
    href: '/accounting-cfo-services/fractional-cfo-services',
    title: 'Fractional CFO Services',
    text: "Where James's CFO experience does the work.",
  },
  { href: '/tax-services', title: 'Tax Services', text: 'Planning, compliance, and resolution.' },
  { href: '/contact', title: 'Contact', text: 'Book a free consultation.' },
];

export default function TeamPage() {
  return (
    <>
      <JsonLd data={[teamSchema(team), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Our Team"
        title="The people you will actually be working with"
        subtitle="Three people, no call queue, no seasonal preparers. The person who reviews your work is the person who answers your call — and you will know all of them by name."
      >
        <Button href="/contact" variant="gold">
          Schedule a Free Consultation
        </Button>
        <Button href={site.phoneHref} variant="outline">
          <Icon name="phone" className="h-4 w-4" />
          {site.phone}
        </Button>
      </PageHero>

      {/* One profile per member, alternating the photo side. */}
      {team.map((member, index) => (
        <Section key={member.slug} tone={index % 2 === 1 ? 'shell' : 'white'} id={member.slug}>
          {/* Alternating rows put the portrait on the right. The track sizes
              have to flip with it — otherwise the portrait lands in the wide
              column and the bio is squeezed into the narrow one. */}
          <div
            className={`grid gap-10 lg:items-start ${
              index % 2 === 1
                ? 'lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]'
                : 'lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'
            }`}
          >
            <FadeIn className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <div className="flex items-center gap-5 lg:block">
                <Avatar
                  image={images[member.imageKey]}
                  initials={member.initials}
                  name={member.name}
                  size="lg"
                  className="lg:h-44 lg:w-44"
                />
                <div className="lg:mt-6">
                  <h2 className="text-2xl">{member.name}</h2>
                  <p className="mt-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm text-slate-body">{member.focus}</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120} className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
              <div className="space-y-4 leading-relaxed text-slate-body">
                {member.detail.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          </div>
        </Section>
      ))}

      <Section tone="navyTint">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="How the firm is structured"
              title="Two entities, one team"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                <strong className="text-navy">{site.name}</strong> handles tax compliance and
                planning, tax resolution, start-up assistance, bookkeeping, and accounting. It is
                co-owned by Joseph and Patricia and does not take on financial statement preparation
                or the reporting attached to it.
              </p>
              <p>
                <strong className="text-navy">{affiliatedFirm.name}</strong> is the affiliated
                public accounting firm, wholly owned by Joseph. {affiliatedFirm.whenItApplies}
              </p>
              <p>
                You deal with the same people either way — the distinction exists so engagements
                land in the entity structured for them.
              </p>
            </div>
            <p className="mt-6 text-sm">
              <Link href="/about" className="font-semibold text-navy underline hover:text-gold-700">
                More on how the firm works
              </Link>
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-2xl border border-navy/10 bg-white p-8">
              <h3 className="text-lg">What we do not do</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                Worth stating plainly, so nobody engages us expecting it.
              </p>
              <ul className="mt-5 space-y-3">
                {scopeExclusions.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-body">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Section>

      <RelatedLinks links={related} title="Where to go next" />

      <CTABanner
        title="Talk to one of us directly"
        text="A free consultation is a conversation with the person who would do the work — not a sales call."
      />
    </>
  );
}
