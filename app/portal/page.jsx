import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Icon } from '@/components/Icons';
import { Button, CheckList, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks } from '@/components/sections';
import { images } from '@/lib/images';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Client Portal Login',
  description:
    'Securely access your documents, e-sign forms, and communicate with your Advance Accounting & Tax Solutions team through our client portal.',
  path: '/portal',
});

const breadcrumb = [{ name: 'Client Portal', href: '/portal' }];

const uses = [
  {
    title: 'Secure document exchange',
    text: 'Upload W-2s, 1099s, statements, and receipts from your phone or computer — encrypted in transit and at rest.',
  },
  {
    title: 'Electronic signatures',
    text: 'Sign engagement letters and e-file authorizations without printing, scanning, or driving anywhere.',
  },
  {
    title: 'Messaging with your team',
    text: 'Questions and answers stay attached to your file instead of scattered across email threads.',
  },
  {
    title: 'Your document history',
    text: 'Prior-year returns and supporting records stay available year over year, in one place you control.',
  },
];

const steps = [
  {
    title: 'We send your invitation',
    text: 'After your consultation you receive an email invitation to set up your portal account. It comes from your portal provider, not from a personal email address.',
  },
  {
    title: 'Create your password',
    text: 'Set a strong, unique password and enable two-factor authentication. It takes an extra thirty seconds and it protects the most sensitive documents you own.',
  },
  {
    title: 'Upload your first documents',
    text: 'We post a checklist of exactly what we need. Upload as things arrive — you do not have to wait until you have everything.',
  },
];

const related = [
  { href: '/contact', title: 'Contact', text: 'Trouble getting in? Reach us directly.' },
  { href: '/', title: 'Home', text: 'How the firm works and who we help.' },
  {
    href: '/tax-services/tax-compliance-and-preparation',
    title: 'Tax Preparation',
    text: 'What the portal is used for most.',
  },
  { href: '/about', title: 'About Joseph', text: 'The person on the other end.' },
];

export default function PortalPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Secure Access"
        title="Client Portal"
        subtitle="Your documents, signatures, and messages in one secure place — available whenever you need them."
      >
        {/* TODO(client): point this at the real portal URL once a provider is chosen. */}
        <Button href={site.portalLoginUrl} variant="gold" target="_blank" rel="noopener noreferrer">
          <Icon name="lock" className="h-4 w-4" />
          Client Login
        </Button>
        <Button href="/contact" variant="outline">
          Need access? Contact us
        </Button>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
          <FadeIn>
            <SectionHeading
              eyebrow="What it's for"
              title="A safer place for the documents that matter most"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-slate-body">
              <p>
                Tax documents contain the exact information identity thieves want: Social Security
                numbers, bank account details, income history, and dependent information all in one
                package. Email was never built to carry that. Messages sit unencrypted on servers,
                get forwarded, and stay searchable in inboxes for years.
              </p>
              <p>
                The client portal exists so none of that is necessary. Files are encrypted in
                transit and at rest, access requires your own credentials, and everything related to
                your engagement stays in one organized place — this year&rsquo;s documents and the
                prior years alike.
              </p>
            </div>
            <div className="mt-8">
              <CheckList items={uses} />
            </div>

            <p className="mt-8 rounded-lg border-l-4 border-gold bg-gold-50 p-4 text-sm leading-relaxed text-charcoal">
              A note on security: we will never email you asking for your portal password, and we
              will never ask you to send a Social Security number or bank details by email or text.
              If you receive a message like that claiming to be from us, do not respond — call{' '}
              <a href={site.phoneHref} className="font-semibold underline">
                {site.phone}
              </a>{' '}
              and check with us first.
            </p>
          </FadeIn>

          <FadeIn delay={120}>
            <Media image={images.workingOnline} sizes="(max-width: 1024px) 100vw, 34vw" />

            <div className="mt-6 rounded-2xl border border-navy/10 bg-shell p-7">
              <h2 className="text-lg">Already a client?</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-body">
                Sign in with the credentials you created when you were invited.
              </p>
              <div className="mt-5">
                <Button
                  href={site.portalLoginUrl}
                  variant="navy"
                  className="w-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="lock" className="h-4 w-4" />
                  Go to Client Login
                </Button>
              </div>
              <p className="mt-4 text-xs text-slate-body">
                The login opens in a new tab on our portal provider&rsquo;s secure site.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section tone="shell">
        <SectionHeading
          eyebrow="Getting started"
          title="New client? Here's how access works"
          intro="Three steps, and the first one is on us."
        />
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <FadeIn key={step.title} as="li" delay={index * 90} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7">
                <span className="font-display text-4xl font-extrabold text-gold/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg">{step.title}</h3>
                <p className="mt-2.5 leading-relaxed text-slate-body">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </Section>

      <Section>
        <FadeIn>
          <div className="grid gap-8 rounded-2xl border border-navy/10 bg-navy-50 p-8 sm:grid-cols-2">
            <div>
              <h2 className="text-2xl">Trouble getting in?</h2>
              <p className="mt-3 leading-relaxed text-slate-body">
                Locked out, never received your invitation, or changed email addresses? Contact us
                directly and we will get you back in — usually the same business day.
              </p>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-gold-700">
                  <Icon name="phone" className="h-5 w-5" />
                </span>
                <span>
                  <strong className="block font-display text-navy">Call</strong>
                  <a href={site.phoneHref} className="text-slate-body hover:underline">
                    {site.phone}
                  </a>
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
                    className="break-all text-slate-body hover:underline"
                  >
                    {site.email}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      <RelatedLinks links={related} title="Related pages" />

      <CTABanner
        title="Not a client yet?"
        text="Book a free consultation and we will get you set up with portal access as part of onboarding."
      />
    </>
  );
}
