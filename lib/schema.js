import { site } from '@/lib/site';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.state,
  postalCode: site.address.zip,
  addressCountry: site.address.country,
};

const areaServed = [
  { '@type': 'City', name: 'Fort Myers', containedInPlace: { '@type': 'State', name: 'Florida' } },
  { '@type': 'City', name: 'Naples', containedInPlace: { '@type': 'State', name: 'Florida' } },
  { '@type': 'Country', name: 'United States' },
];

export const organizationId = `${site.url}/#organization`;

export function accountingServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': organizationId,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    faxNumber: site.fax,
    email: site.email,
    priceRange: site.priceRange,
    description:
      'Full service tax, accounting, and business consulting firm led by Joseph F. Fragnoli, CPA. Tax planning and compliance, tax resolution, bookkeeping, payroll, and fractional CFO services for individuals and businesses in Fort Myers and Naples, Florida, and nationwide.',
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed,
    openingHoursSpecification: site.openingHoursSpec,
    founder: { '@id': `${site.url}/about#person` },
    employee: { '@id': `${site.url}/about#person` },
    knowsLanguage: 'en-US',
  };
}

export function localBusinessSchema({ city, county, path, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${site.url}${path}#localbusiness`,
    name: `${site.name} — ${city}, FL`,
    url: `${site.url}${path}`,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    description,
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    parentOrganization: { '@id': organizationId },
    openingHoursSpecification: site.openingHoursSpec,
    areaServed: [
      { '@type': 'City', name: city, containedInPlace: { '@type': 'State', name: 'Florida' } },
      ...(county
        ? [{ '@type': 'AdministrativeArea', name: `${county}, Florida` }]
        : []),
    ],
  };
}

export function serviceSchema({ name, description, path, serviceType }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${site.url}${path}#service`,
    name,
    serviceType: serviceType || name,
    description,
    url: `${site.url}${path}`,
    provider: { '@id': organizationId },
    areaServed,
    audience: { '@type': 'Audience', audienceType: 'Individuals and business owners' },
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${site.url}/about#person`,
    name: 'Joseph F. Fragnoli',
    honorificSuffix: 'CPA',
    jobTitle: 'President & CEO',
    description:
      'Florida-licensed Certified Public Accountant with more than forty years in public accounting, the last ten in independent practice, specializing in tax planning, compliance, tax resolution, and business advisory work.',
    worksFor: { '@id': organizationId },
    url: `${site.url}/about`,
    telephone: site.phone,
    faxNumber: site.fax,
    email: site.email,
    workLocation: { '@type': 'Place', address: postalAddress },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'California State University, Fullerton' },
      { '@type': 'CollegeOrUniversity', name: 'University of California, Los Angeles' },
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional license',
      name: 'Certified Public Accountant (CPA)',
      recognizedBy: { '@type': 'GovernmentOrganization', name: 'State of Florida' },
    },
    knowsAbout: [
      'Tax planning',
      'Tax compliance and preparation',
      'Tax resolution',
      'Bookkeeping and accounting',
      'Business entity formation',
      'Fractional CFO services',
    ],
  };
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', href: '/' }, ...trail].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${site.url}${crumb.href === '/' ? '' : crumb.href}`,
    })),
  };
}

export function contactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${site.url}/contact#contactpage`,
    name: 'Contact Advance Accounting & Tax Solutions',
    url: `${site.url}/contact`,
    about: { '@id': organizationId },
    mainEntity: {
      '@type': 'Organization',
      '@id': organizationId,
      name: site.name,
      telephone: site.phone,
      email: site.email,
      address: postalAddress,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: site.phone,
        email: site.email,
        areaServed: 'US',
        availableLanguage: 'English',
      },
    },
  };
}

export function blogSchema(posts) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog#blog`,
    name: 'Tax & Accounting Insights',
    url: `${site.url}/blog`,
    publisher: { '@id': organizationId },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${site.url}/blog`,
      datePublished: post.date,
      author: { '@type': 'Person', name: site.owner },
      publisher: { '@id': organizationId },
    })),
  };
}

/**
 * Placeholder aggregate rating for the testimonials page.
 * TODO(client): replace with real Google Business Profile review data before
 * launch — publishing invented review counts is a Google policy violation.
 */
export function aggregateRatingSchema({ ratingValue, reviewCount }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': organizationId,
    name: site.name,
    url: site.url,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };
}
