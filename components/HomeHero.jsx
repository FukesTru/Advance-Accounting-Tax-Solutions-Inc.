import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import PlanningWindowChart from '@/components/PlanningWindowChart';
import { Icon } from '@/components/Icons';
import { Button, Container } from '@/components/primitives';
import { firmFacts, serviceAreas, site, trustBadges } from '@/lib/site';

// Only verified facts belong here. Years in practice and the first-licence date
// are confirmed; the community count is derived from lib/areas.js so it cannot
// drift. No client-outcome figures — nothing has been measured.
const heroStats = [
  { value: firmFacts.yearsInPublicAccounting, suffix: '+', label: 'Years in public accounting' },
  { value: firmFacts.yearsIndependent, label: 'Years in independent practice' },
  { value: `${serviceAreas.length}`, label: 'SWFL communities served' },
];

export default function HomeHero() {
  const cities = serviceAreas.slice(0, 4).map((area) => area.city);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-navy-50 via-white to-white">
      {/* Faint grid, drawn in CSS so the hero costs no extra request. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(11,37,69,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(11,37,69,0.05)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-32 h-80 w-80 rounded-full bg-navy/5 blur-3xl"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
          {/* ------------------------------------------------------ */}
          {/* Left: the pitch                                        */}
          {/* ------------------------------------------------------ */}
          <FadeIn>
            <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-50/70 px-4 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-gold-700">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />
              Southwest Florida · CPA-Led · {firmFacts.yearsInPublicAccounting} Years
            </p>

            <h1 className="mt-6 text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[3.75rem]">
              Stop overpaying the IRS.
              <br />
              Start{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-gold-700">outplanning it.</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 -bottom-0.5 h-[0.18em] rounded-full bg-gold/70"
                />
              </span>
            </h1>

            {/* Keeps the service and geography keywords adjacent to the H1. */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-body">
              Proactive tax strategy, clean books, and fractional CFO support for business owners
              and families in <strong className="font-semibold text-navy">Fort Myers</strong>,{' '}
              <strong className="font-semibold text-navy">Naples</strong>, and across Southwest
              Florida — built around your goals, not your filing deadline.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" variant="gold">
                Get My Free Tax Review
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
              <Button href={site.phoneHref} variant="outline">
                <Icon name="phone" className="h-4 w-4" />
                {site.phone}
              </Button>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-6 border-t border-navy/10 pt-8">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-display text-3xl font-extrabold text-navy sm:text-4xl">
                    {stat.value}
                    {stat.suffix ? <span className="text-gold">{stat.suffix}</span> : null}
                  </dd>
                  <dt className="mt-1 max-w-35 text-xs font-semibold uppercase tracking-wide text-slate-body">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </FadeIn>

          {/* ------------------------------------------------------ */}
          {/* Right: the planning-window card                        */}
          {/* ------------------------------------------------------ */}
          <FadeIn delay={140}>
            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-navy/5 via-transparent to-gold/10"
              />

              {/* Extra bottom padding is deliberate: the floating badge below
                  overlaps the card, and without it the badge sat on top of the
                  chart's footnote. */}
              <div className="rounded-2xl border border-navy/10 bg-white p-6 pb-16 shadow-[0_24px_60px_-24px_rgba(11,37,69,0.35)] sm:p-7 sm:pb-16">
                <PlanningWindowChart />
              </div>

              {/* Floating callouts — both are verifiable claims about the firm,
                  not client outcomes. */}
              <div className="absolute -top-4 right-2 hidden max-w-64 items-start gap-3 rounded-xl border border-navy/10 bg-white p-3.5 shadow-lg sm:flex lg:-right-4">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-navy-900">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-[0.8rem] font-bold text-navy">
                    Florida-licensed CPA
                  </span>
                  <span className="block text-[0.7rem] leading-snug text-slate-body">
                    Licensed since {firmFacts.firstLicensed}
                  </span>
                </span>
              </div>

              <div className="absolute -bottom-6 left-2 hidden max-w-68 items-start gap-3 rounded-xl border border-navy/10 bg-white p-3.5 shadow-lg sm:flex lg:-left-6">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                  <Icon name="chart" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-display text-[0.8rem] font-bold text-navy">
                    Planning starts in January
                  </span>
                  <span className="block text-[0.7rem] leading-snug text-slate-body">
                    Not the week before the deadline
                  </span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* ---------------------------------------------------------- */}
      {/* Trust strip                                                 */}
      {/* ---------------------------------------------------------- */}
      <div className="relative border-t border-navy/10 bg-white/70">
        <Container>
          <div className="flex flex-col gap-4 py-5 lg:flex-row lg:items-center lg:justify-between">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <li className="font-display text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-body/70">
                Trusted across SWFL
              </li>
              {trustBadges.map((badge) => (
                <li key={badge} className="flex items-center gap-2 text-sm text-slate-body">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-gold-700" />
                  {badge}
                </li>
              ))}
            </ul>
            <p className="font-display text-sm font-semibold text-navy">
              {cities.map((city, index) => (
                <span key={city}>
                  {index > 0 ? <span className="px-1.5 text-gold">·</span> : null}
                  <Link
                    href={serviceAreas[index].slug}
                    className="hover:text-gold-700 hover:underline"
                  >
                    {city}
                  </Link>
                </span>
              ))}
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
}
