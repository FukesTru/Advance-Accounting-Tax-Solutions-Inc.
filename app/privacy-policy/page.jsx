import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { Container } from '@/components/primitives';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { addressLine, site } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Advance Accounting & Tax Solutions, Inc. — how we collect, use, and protect the information you share with our firm.',
  path: '/privacy-policy',
  noindex: true,
});

const breadcrumb = [{ name: 'Privacy Policy', href: '/privacy-policy' }];

// TODO(client): update whenever the policy text changes.
const lastUpdated = 'August 9, 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumb)} />
      <Breadcrumbs trail={breadcrumb} />

      <div className="border-b border-navy/10 bg-shell">
        <Container className="py-12 sm:py-14">
          <h1 className="text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-body">Last updated: {lastUpdated}</p>
        </Container>
      </div>

      <Container className="py-14 sm:py-16">
        <div className="prose-legal max-w-3xl">
          <p className="rounded-lg border-l-4 border-gold bg-gold-50 p-4 text-sm leading-relaxed text-charcoal">
            <strong>Note for the firm:</strong> this policy is a starting draft. Have it reviewed by
            an attorney before launch, particularly the client confidentiality section and any
            obligations arising under the Gramm-Leach-Bliley Act, IRS Publication 4557, and IRC
            §7216, which govern how tax practitioners safeguard and disclose client information.
          </p>

          <p>
            {site.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;the firm&rdquo;) respects the
            privacy of everyone who visits this website and everyone who becomes a client. This
            policy explains what information we collect, how we use it, and the choices you have.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information in three ways:</p>
          <ul>
            <li>
              <strong>Information you give us directly.</strong> When you submit our contact form,
              call, or email, you may provide your name, email address, phone number, the service
              you are interested in, and whatever you choose to write in your message.
            </li>
            <li>
              <strong>Information you provide as a client.</strong> Engagements require sensitive
              financial and personal information — tax documents, identification numbers, financial
              statements, payroll records, and similar material. That material is collected
              directly during the engagement, not through this website.
            </li>
            <li>
              <strong>Information collected automatically.</strong> Like most websites, ours records
              standard technical data through analytics: pages visited, approximate location, device
              and browser type, referring site, and time on page.
            </li>
          </ul>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To respond to your enquiry and schedule a consultation</li>
            <li>To provide the accounting, tax, payroll, and advisory services you engage us for</li>
            <li>To meet our legal, regulatory, and professional obligations</li>
            <li>To communicate about your engagement, deadlines, and filings</li>
            <li>To understand how the website is used so we can improve it</li>
          </ul>
          <p>
            We do not sell your personal information, and we do not rent or trade it. We do not send
            marketing email to people who have not asked to hear from us.
          </p>

          <h2>Cookies &amp; Analytics</h2>
          <p>
            This site uses Google Analytics 4 to understand aggregate visitor behavior. GA4 sets
            cookies that collect usage data in a form that does not directly identify you. You can
            block cookies in your browser settings or install Google&rsquo;s opt-out browser
            add-on; the site will continue to work normally either way.
          </p>

          <h2>Data Security</h2>
          <p>
            We maintain administrative, technical, and physical safeguards designed to protect the
            information in our care. Access to client files is limited to the people who need it,
            and our systems are kept current with security updates.
          </p>
          <p>
            No method of transmission or storage is completely secure, and we will not claim
            otherwise. Please do not send Social Security numbers, account numbers, or tax documents
            by email or through the website contact form —{' '}
            <Link href="/contact">contact the office</Link> and we will arrange a secure way to get
            them to us.
          </p>

          <h2>Client Confidentiality</h2>
          <p>
            Beyond ordinary privacy obligations, accounting and tax professionals are bound by
            confidentiality duties that apply specifically to this profession. Information you share
            with us in the course of an engagement is treated as confidential and is not disclosed
            to third parties except in these circumstances:
          </p>
          <ul>
            <li>With your written consent, in the form required by law</li>
            <li>
              To the extent required by law, subpoena, court order, or a valid regulatory or peer
              review process
            </li>
            <li>
              To service providers who support our practice and are themselves bound by
              confidentiality obligations
            </li>
          </ul>
          <p>
            Under Internal Revenue Code §7216, disclosing or using tax return information for
            purposes other than preparing your return generally requires your specific written
            consent. We will request that consent explicitly if such a situation ever arises rather
            than relying on general acceptance of this policy.
          </p>

          <h2>Third-Party Services</h2>
          <p>We rely on a small number of vendors to operate the practice:</p>
          <ul>
            <li>
              <strong>Google Analytics 4</strong> — website usage analytics.
            </li>
            <li>
              <strong>Accounting, payroll, and tax software providers</strong> — used to deliver the
              services you engage us for.
            </li>
            <li>
              <strong>Website hosting and email providers</strong> — infrastructure for this site
              and our communications.
            </li>
          </ul>
          <p>
            Each vendor has its own privacy policy governing information it processes. We select
            vendors with security practices appropriate to the sensitivity of the data involved.
          </p>

          <h2>Data Retention</h2>
          <p>
            Client records are retained for as long as the professional relationship continues and
            afterward for the period required by professional standards, records-retention
            obligations, and applicable statutes of limitation. Contact form submissions from people
            who do not become clients are retained only as long as needed to respond.
          </p>

          <h2>Your Choices</h2>
          <ul>
            <li>You can ask what personal information we hold about you</li>
            <li>You can ask us to correct information that is inaccurate</li>
            <li>You can ask us to delete information we are not required to retain</li>
            <li>You can opt out of non-essential communications at any time</li>
          </ul>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            This website is not directed to children under 13, and we do not knowingly collect
            personal information from them through it. Dependent information supplied as part of a
            tax engagement is handled under the client confidentiality terms above.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy as our practice or the applicable rules change. The revised
            version will be posted here with a new &ldquo;last updated&rdquo; date.
          </p>

          <h2>Contact for Privacy Questions</h2>
          <p>Questions about this policy or about the information we hold can be directed to:</p>
          <ul>
            <li>
              <strong>{site.name}</strong>
            </li>
            <li>{addressLine}</li>
            <li>
              Phone: <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              Email: <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>

          <p className="mt-10 text-sm">
            <Link href="/">Return home</Link> · <Link href="/contact">Contact us</Link>
          </p>
        </div>
      </Container>
    </>
  );
}
