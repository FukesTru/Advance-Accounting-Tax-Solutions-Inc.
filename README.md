# Advance Accounting & Tax Solutions, Inc. — Website

Twenty-page marketing site for a CPA/tax advisory firm in Ave Maria, Florida,
serving Fort Myers, Naples, and clients nationwide.

Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS v4**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Copy `.env.example` to `.env.local` and fill in what applies.

> **Before launch, work through [`CONTENT-TODO.md`](./CONTENT-TODO.md).** It lists
> every placeholder in the build — phone number, review data, GA4 ID, portal URL,
> photography — with the file to edit for each.

## Design system

| Token | Value | Used for |
|---|---|---|
| Deep Navy | `#0B2545` | Nav, footer, headings, primary buttons |
| Champagne Gold | `#C9A44B` | CTAs, underlines, icons, stat callouts |
| Charcoal | `#1C1C1C` | Body copy |
| Off-white | `#FAFAFA` | Alternating section backgrounds |
| Plus Jakarta Sans | Headings | via `next/font/google` |
| Inter | Body | via `next/font/google` |

Tokens are defined once in `app/globals.css` under `@theme` and consumed as
Tailwind utilities (`bg-navy`, `text-gold-700`, `bg-shell`, …). Light
backgrounds throughout — no dark hero.

## Structure

```
app/
  layout.jsx                     Root layout: fonts, GA4 tag, nav, footer, floating call button
  page.jsx                       Homepage
  about/ portal/ blog/ contact/ testimonials/ privacy-policy/
  tax-services/                  Category page + 3 sub-services
  accounting-cfo-services/       Category page + 3 sub-services
  business-advisory-services/    Category page + 2 sub-services
  areas/fort-myers-fl/ areas/naples-fl/
  api/contact/route.js           Contact form endpoint
  sitemap.js  robots.js  icon.svg  not-found.jsx
components/
  Navbar  Footer  FloatingCall  Breadcrumbs  Logo  Icons
  primitives.jsx                 Container, Section, Button, CheckList, …
  sections.jsx                   PageHero, ServiceCardGrid, ProcessSteps, CTABanner, FAQSection, MapBlock, …
  templates.jsx                  Template A (category), B (sub-service), C (service area)
  FAQ  FadeIn  Media  ContactForm  BlogFilter  JsonLd
lib/
  site.js          Firm details, nav, service tree — single source of truth
  images.js        Image slots (see CONTENT-TODO.md)
  schema.js        Schema.org JSON-LD builders
  seo.js           Metadata builder (title, description, canonical, OG)
  posts.js         Blog index entries
  testimonials.js  Reviews (placeholders)
```

### Page templates

Three reusable templates in `components/templates.jsx` keep the section rhythm
consistent while each page supplies its own copy:

- **Template A — category page.** Hero → intro → sub-service card grid →
  What's Included → 4-step process → mid-page CTA → FAQ → related links → final CTA.
- **Template B — sub-service page.** Hero → intro → Who This Is For → What We Do
  → 3-step process → FAQ → related links → CTA.
- **Template C — service area page.** Hero → local intro → map/address →
  services offered → county-level detail → review → FAQ → related links → CTA.

## SEO

Every page has a unique title and a 150–160 character description, a canonical
URL, Open Graph and Twitter tags, exactly one `<h1>`, breadcrumb navigation
(inner pages), and JSON-LD:

| Page | Schema |
|---|---|
| Homepage | `AccountingService` + `FAQPage` |
| About | `Person` + `BreadcrumbList` |
| Service pages (8) | `Service` + `FAQPage` + `BreadcrumbList` |
| Area pages (2) | `AccountingService` (local) + `FAQPage` + `BreadcrumbList` |
| Testimonials | `AggregateRating` (placeholder) + `BreadcrumbList` |
| Blog | `Blog` / `BlogPosting` + `BreadcrumbList` |
| Contact | `ContactPage` + `BreadcrumbList` |
| Portal, Privacy | `BreadcrumbList` |

`robots.txt` and `sitemap.xml` are generated at build time from `lib/site.js`.
The GA4 tag loads sitewide with `next/script` on the `afterInteractive`
strategy. Every page links to at least three related pages.

## Accessibility

Skip-to-content link, keyboard-accessible nav and accordions with correct
`aria-expanded` / `aria-controls`, visible focus rings, alt text on every image,
`aria-live` regions for form and filter status, WCAG AA contrast, and
`prefers-reduced-motion` support on all scroll animations.

## Contact form

`app/api/contact/route.js` validates input, drops honeypot submissions, and
forwards the payload as JSON to `CONTACT_WEBHOOK_URL`. If that variable is not
set the endpoint returns 503 and the form shows the firm's phone and email
instead — an enquiry is never silently dropped.

## Deploying

Any Next.js host works; Vercel needs no configuration. Set the environment
variables from `.env.example`, then point the domain at the deployment.
