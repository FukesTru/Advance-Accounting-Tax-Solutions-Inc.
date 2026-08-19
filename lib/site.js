import { areas } from '@/lib/areas';

/**
 * Single source of truth for firm details, navigation, and service data.
 *
 * PLACEHOLDERS TO CONFIRM BEFORE LAUNCH are marked with `TODO(client)`.
 * See CONTENT-TODO.md at the repo root for the full checklist.
 */

export const site = {
  name: 'Advance Accounting & Tax Solutions, Inc.',
  shortName: 'Advance Accounting & Tax Solutions',
  initials: 'AATS',
  owner: 'Joseph Fragnoli',
  ownerFullName: 'Joseph F. Fragnoli, CPA',
  ownerTitle: 'President & CEO',
  // Confirmed business line for the new site.
  phone: '(239) 492-6784',
  phoneHref: 'tel:+12394926784',
  // TODO(client): the fax is still the old 615 (Tennessee) number carried over
  // from the previous site. Confirm it is live, or drop it.
  fax: '(615) 751-0288',
  email: 'jfragnoli@accounting-tax-solutions.com',
  address: {
    street: '5284 Juliet Court',
    city: 'Ave Maria',
    state: 'FL',
    zip: '34142',
    country: 'US',
  },
  geo: { lat: 26.3417, lng: -81.4276 },
  url: 'https://taxstrategiesandaccountingservices.com',
  priceRange: '$$',
  // TODO(client): confirm and replace with real business hours.
  hours: [
    { days: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],
  openingHoursSpec: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  // TODO(client): replace with the firm's Google Business Profile review link.
  googleReviewUrl: 'https://www.google.com/search?q=Advance+Accounting+%26+Tax+Solutions+Ave+Maria+FL',
  // TODO(client): replace with the real portal URL once a provider is chosen
  // (TaxDome / SafeSend / SmartVault / Canopy).
  portalLoginUrl: 'https://app.taxdome.com/login',
  // TODO(client): replace with the live GA4 measurement ID.
  gaMeasurementId: 'G-XXXXXXXXXX',
  responseTime: 'We respond within 1 business day.',
  // From the logo lockup — kept as text so it is readable and crawlable.
  tagline: 'Strategy · Compliance · Results',
  logo: '/images/logo-full.png',
};

export const addressLine = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.name}, ${addressLine}`
)}&output=embed`;

export const trustBadges = [
  'Florida-Licensed CPA',
  '42 Years in Public Accounting',
  'Serving SWFL & Nationwide',
  'Free Consultation',
];

/**
 * Firm facts carried over from the previous site at
 * accounting-tax-solutions.com, with the two year-counts confirmed directly by
 * the client. (The old site said "more than forty years" and "the last ten" —
 * it had gone stale; 42 and 13 are current.) Sourced, not assumed.
 */
export const firmFacts = {
  yearsInPublicAccounting: '42',
  yearsIndependent: '13',
  firstLicensed: 1984,
  firstLicensedState: 'California',
  clientRevenueLong: '$200,000 to $20,000,000',
  clientTypes:
    'closely held corporations, partnerships, limited liability companies, and individuals',
};

/**
 * Homepage stat row.
 *
 * "Years in public accounting" (42) and "Years in independent practice" (13)
 * are confirmed. The figures marked ESTIMATE below were requested as plausible
 * stand-ins scaled to a 42-year career — they are NOT measured. Confirm or
 * replace them before launch; see CONTENT-TODO.md.
 */
export const stats = [
  { label: 'Years in public accounting', value: '42' },
  { label: 'Years in independent practice', value: '13' },
];

/** Extended stat row for the About page. The last three are ESTIMATES. */
export const aboutStats = [
  { label: 'Years in public accounting', value: '42' },
  { label: 'Years in independent practice', value: '13' },
  { label: 'Returns prepared', value: '10,000+' }, // ESTIMATE
  { label: 'Clients served', value: '1,200+' }, // ESTIMATE
  { label: 'Industries supported', value: '30+' }, // ESTIMATE
];

/**
 * Firm members, from the client's bios document.
 *
 * Note the two-entity structure: Advance Accounting & Tax Solutions, Inc. is
 * owned 50/50 by Joseph and Patricia and deliberately does NOT perform
 * financial statement preparation or the reporting that goes with it. The
 * affiliated CPA firm, Joseph F. Fragnoli, CPA, Inc. (100% Joseph), exists for
 * engagements that require a CPA firm. Copy across the site must not imply
 * attest or SSARS work under the AATS name — see `affiliatedFirm` below.
 */
export const team = [
  {
    slug: 'joseph-fragnoli',
    name: 'Joseph F. Fragnoli, CPA',
    shortName: 'Joseph',
    initials: 'JF',
    role: 'President & CEO',
    focus: 'Tax planning, compliance, and resolution',
    imageKey: 'joseph',
    bio: 'Florida-licensed CPA, first licensed in California in 1984, with more than forty years in public accounting and the last thirteen in independent practice. Handles tax planning and compliance, tax resolution, start-up guidance, and advisory engagements directly. Graduated from California State University, Fullerton with a bachelor\u2019s degree in Business Administration, emphasis in Accounting, after attending UCLA.',
    detail: [
      'Joseph is the person who reviews your return and the person who answers your email. That is deliberate: the practice is small on purpose, and the alternative — handing work to a seasonal preparer you have never met — is exactly what he built the firm to avoid.',
      'He works across the full range: proactive tax planning for business owners and high earners, compliance for individuals and every common entity type, and resolution work when returns are unfiled or a balance is owed. Where an engagement needs a CPA firm rather than this entity, it moves to the affiliated firm he also owns.',
    ],
  },
  {
    slug: 'patricia-alcantara',
    name: 'Patricia Alcantara',
    shortName: 'Patricia',
    initials: 'PA',
    role: 'Vice President',
    focus: 'Office management and client coordination',
    imageKey: 'patricia',
    bio: 'Co-owner of the firm and a former English-as-a-second-language teacher in Brazil. Patricia runs office coordination and file maintenance, and serves as office manager and executive assistant \u2014 she is usually the reason your documents, deadlines, and questions do not fall through a gap.',
    detail: [
      'Patricia co-owns the firm and keeps it running. Scheduling, document flow, file maintenance, and the follow-up that makes sure nothing sits waiting on someone — that is her work, and it is the difference between an engagement that moves and one that stalls.',
      'She taught English as a second language in Brazil before moving into practice management, which is a better preparation than it sounds: most of the job is making complicated processes legible to people encountering them for the first time.',
    ],
  },
  {
    slug: 'james-fragnoli',
    name: 'James Fragnoli',
    shortName: 'James',
    initials: 'JF',
    role: 'Consultant \u2014 Fractional CFO & Accounting',
    focus: 'CFO-level strategy and controls',
    imageKey: 'james',
    bio: 'Retired CFO of a hundred-million-dollar manufacturing company, with a career spent in private industry as Controller and CFO across multiple companies and entity types. A former CPA, now retired from licensure. James provides the senior-level input on fractional CFO and accounting engagements.',
    detail: [
      'James spent his career on the other side of the table — as Controller and then CFO inside operating companies, most recently running finance for a hundred-million-dollar manufacturer. He has closed the books, built the forecast, and defended the numbers to a lender.',
      'That is what he brings to fractional CFO engagements: forecasting, margin analysis, and internal controls informed by having actually run them, not by having advised on them. He was a CPA and has since retired his license; the value here is operating experience, not attest work.',
    ],
  },
];

/** The affiliated CPA firm, for engagements that require one. */
export const affiliatedFirm = {
  name: 'Joseph F. Fragnoli, CPA, Inc.',
  owner: 'Joseph F. Fragnoli, CPA',
  summary:
    'A general practice public accounting firm, wholly owned by Joseph, emphasizing tax planning and compliance for closely held companies and high-net-worth individuals, tax resolution, and accounting for small and regional businesses.',
  whenItApplies:
    'It exists for the cases where a client needs services or references that only a CPA firm can provide.',
};

/**
 * Services this entity does not perform. Stated plainly because the firm was
 * deliberately structured this way, and because implying attest work a firm
 * does not do is a licensing problem, not a marketing one.
 */
export const scopeExclusions = [
  'Financial statement preparation and the reporting that accompanies it',
  'Audits, reviews, and compilations',
  'Investment management or securities advice',
  'Drafting wills, trusts, or other legal instruments',
];

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export const serviceCategories = [
  {
    slug: '/tax-services',
    title: 'Tax Services',
    short: 'Tax Services',
    blurb:
      'Year-round tax strategy, accurate compliance, and estate-side planning that keeps your bill predictable instead of surprising.',
    icon: 'tax',
    children: [
      {
        slug: '/tax-services/tax-planning',
        title: 'Tax Planning',
        blurb: 'Proactive, year-round strategy to lower what you owe.',
      },
      {
        slug: '/tax-services/tax-compliance-and-preparation',
        title: 'Tax Compliance & Preparation',
        blurb: 'Accurate federal and state filings, on time, every year.',
      },
      {
        slug: '/tax-services/estate-planning',
        title: 'Estate Planning',
        blurb: 'Estate and trust tax planning coordinated with your attorney.',
      },
    ],
  },
  {
    slug: '/accounting-cfo-services',
    title: 'Accounting & CFO Services',
    short: 'Accounting & CFO',
    blurb:
      'Clean books, dependable payroll, and CFO-level insight — the financial back office growing businesses actually need.',
    icon: 'chart',
    children: [
      {
        slug: '/accounting-cfo-services/accounting-services',
        title: 'Accounting Services',
        blurb: 'Monthly bookkeeping and management reports you can trust.',
      },
      {
        slug: '/accounting-cfo-services/fractional-cfo-services',
        title: 'Fractional CFO Services',
        blurb: 'Forecasting, KPIs, and strategy without a full-time hire.',
      },
      {
        slug: '/accounting-cfo-services/payroll-services',
        title: 'Payroll Services',
        blurb: 'Payroll processing, tax filings, and year-end forms.',
      },
    ],
  },
  {
    slug: '/business-advisory-services',
    title: 'Business Advisory Services',
    short: 'Business Advisory',
    blurb:
      'Structure, planning, and second-opinion guidance for the decisions that shape the next five years of your business.',
    icon: 'compass',
    children: [
      {
        slug: '/business-advisory-services/entity-design-and-formation',
        title: 'Entity Design & Formation',
        blurb: 'Pick and set up the structure that fits your goals.',
      },
      {
        slug: '/business-advisory-services/financial-planning',
        title: 'Financial Planning',
        blurb: 'Tax-aware planning for retirement and long-term goals.',
      },
    ],
  },
];

/**
 * Nav/footer view of the service areas. Full page content lives in lib/areas.js.
 */
export const serviceAreas = areas.map((area) => ({
  slug: `/areas/${area.slug}`,
  city: area.city,
  county: area.county,
  blurb: area.cardBlurb,
}));

export const primaryServiceAreas = serviceAreas.filter((_, index) => index < 2);

/** Flat list of every service page, handy for footers and cross-links. */
export const allServicePages = serviceCategories.flatMap((category) => [
  { slug: category.slug, title: category.title },
  ...category.children.map((child) => ({ slug: child.slug, title: child.title })),
]);

/** Options for the contact form's "Service Interested In" dropdown. */
export const serviceInterestOptions = [
  'Not sure yet — help me choose',
  ...allServicePages.map((page) => page.title),
];

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/tax-services', mega: true },
  {
    label: 'About',
    href: '/about',
    dropdown: [
      { href: '/about', label: 'About the Firm' },
      { href: '/team', label: 'Our Team' },
    ],
  },
  {
    label: 'Service Areas',
    // Shown below the xl breakpoint, where the full header row is tight.
    short: 'Areas',
    href: '/areas',
    dropdown: [
      ...serviceAreas.map((area) => ({ href: area.slug, label: `${area.city}, FL` })),
      { href: '/areas', label: 'All service areas' },
    ],
  },
  { label: 'Client Portal', short: 'Portal', href: '/portal' },
  { label: 'Contact', href: '/contact' },
];
