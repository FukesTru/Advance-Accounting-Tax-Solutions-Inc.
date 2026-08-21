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
    'Securely send and receive tax documents with Advance Accounting & Tax Solutions through TitanFile, our encrypted client portal. Sign in or request access.',
  path: '/portal',
});

const breadcrumb = [{ name: 'Client Portal', href: '/portal' }];

const uses = [
  {
    title: 'Secure document exchange',
    text: 'Send W-2s, 1099s, statements, and receipts from your phone or computer instead of attaching them to an email.',
  },
  {
    title: 'Large files without the bounce',
    text: 'Full QuickBooks backups and multi-year document sets go through without hitting an email attachment limit.',
  },
  {
    title: 'Messaging that stays with your file',
    text: 'Questions and answers stay attached to the documents they are about, instead of scattered across email threads.',
  },
  {
    title: 'Documents we send you, too',
    text: 'Completed returns and supporting schedules come back the same secure way they went out.',
  },
];

const steps = [
  {
    title: 'We send your invitation',
    text: `After your consultation you receive an email invitation from ${site.portalProvider} to set up your account. Check spam if it has not arrived within a day.`,
  },
  {
    title: 'Create your password',
    text: 'Set a strong, unique password and turn on two-factor authentication if offered. It takes an extra thirty seconds and it protects the most sensitive documents you own.',
  },
  {
    title: 'Send your first documents',
    text: 'We give you a checklist of exactly what we need. Send things as they arrive — you do not have to wait until you have everything.',
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
        eyebrow="For clients"
        title="Client Portal"
        subtitle={`We exchange documents through ${site.portalProvider}, an encrypted file-sharing service built for exactly this — so your tax records never travel by email.`}
      >
        <Button href={site.portalLoginUrl} variant="gold" target="_blank" rel="noopener noreferrer">
          <Icon name="lock" className="h-4 w-4" />
          Go to Client Login
        </Button>
        <Button href="/contact" variant="outline">
          Request Access
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
                your engagement stays in one organized place rather than buried in an inbox.
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
                Opens in a new tab on {site.portalProvider}&rsquo;s secure site.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section tone="shell">
        <FadeIn>
          <SectionHeading
            eyebrow="Getting started"
            title="New client? Here's how access works"
            intro="Three steps, and the first one is on us."
          />
        </FadeIn>
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
