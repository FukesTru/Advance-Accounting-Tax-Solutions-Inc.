import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { Icon } from '@/components/Icons';
import { Section, SectionHeading } from '@/components/primitives';
import { MapBlock, PageHero, RelatedLinks } from '@/components/sections';
import { breadcrumbSchema, contactPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { addressLine, site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact Us — Schedule a Free Consultation',
  description:
    'Get in touch with Advance Accounting & Tax Solutions, Inc. Call, email, or send a message to schedule your free consultation in Fort Myers or Naples.',
  path: '/contact',
});

const breadcrumb = [{ name: 'Contact', href: '/contact' }];

const related = [
  { href: '/team', title: 'Our Team', text: 'The three people you will be working with.' },
  { href: '/tax-services', title: 'Tax Services', text: 'Planning, compliance, and estate work.' },
  {
    href: '/accounting-cfo-services',
    title: 'Accounting & CFO Services',
    text: 'Books, payroll, and financial strategy.',
  },
  {
    href: '/business-advisory-services',
    title: 'Business Advisory Services',
    text: 'Entity structure and financial planning.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[contactPageSchema(), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Get in touch"
        title="Schedule Your Free Consultation"
        subtitle="Tell us what is going on — behind on filings, messy books, a structure decision, or just a question you have been putting off. The first conversation costs nothing."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start">
          <FadeIn>
            <SectionHeading eyebrow="Send a message" title="Tell us about your situation" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-2xl border border-navy/10 bg-shell p-8">
              <h2 className="text-xl">Prefer to call?</h2>
              <p className="mt-2 leading-relaxed text-slate-body">
                Direct is often fastest. You will reach us, not a call center.
              </p>

              <ul className="mt-7 space-y-5">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold-700">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="block font-display text-navy">Phone</strong>
                    <a
                      href={site.phoneHref}
                      className="text-lg font-semibold text-navy hover:text-gold-700 hover:underline"
                    >
                      {site.phone}
                    </a>
                    <span className="mt-1 block text-sm text-slate-body">Fax: {site.fax}</span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold-700">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="block font-display text-navy">Email</strong>
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all text-slate-body hover:text-navy hover:underline"
                    >
                      {site.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold-700">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="block font-display text-navy">Office</strong>
                    <address className="not-italic text-slate-body">{addressLine}</address>
                    <span className="mt-1 block text-sm text-slate-body">
                      Serving Fort Myers, Naples, and clients nationwide.
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold-700">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <span>
                    <strong className="block font-display text-navy">Hours</strong>
                    <ul className="text-slate-body">
                      {site.hours.map((entry) => (
                        <li key={entry.days}>
                          {entry.days}: {entry.time}
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              </ul>

              <p className="mt-7 flex items-start gap-2 rounded-lg border-l-4 border-gold bg-gold-50 p-4 text-sm leading-relaxed text-charcoal">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold-700" />
                {site.responseTime} Consultations are free and carry no obligation.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <MapBlock
        tone="shell"
        eyebrow="Find Us"
        title="Our office in Ave Maria, Florida"
        intro="Between Naples and Fort Myers, with parking on site. In-person meetings are by appointment — and most clients handle everything remotely instead."
      />

      <RelatedLinks links={related} title="Related pages" />
    </>
  );
}
