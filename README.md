# Advance Accounting & Tax Solutions, Inc. — Website

Twenty-seven-page marketing site for a CPA/tax advisory firm in Ave Maria,
Florida, serving Lee and Collier counties and clients nationwide.

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

The firm logo is rendered by `components/Logo.jsx` from three crops of one
source artwork, all background-knocked-out to transparency:

| File | Contents | Used |
|---|---|---|
| `public/images/logo.png` | Mark + wordmark, tagline cropped | Nav, at 56px tall |
| `public/images/logo-full.png` | Complete lockup incl. STRATEGY · COMPLIANCE · RESULTS | Footer, at 80px tall |
| `public/images/logo-mark.png` | The "A" mark alone | Square placements |

The artwork is navy and silver, so on the navy footer it sits on a white chip.
The nav is 56px tall because that is where "SOLUTIONS, INC." stops rendering as
mush — below roughly 48px the third line is unreadable. `app/icon.png` is the
favicon, derived from the mark. The tagline is also stored as text in
`lib/site.js` (`site.tagline`) so it is crawlable, and feeds `slogan` in
Organization schema.

## Structure

```
app/
  layout.jsx                     Root layout: fonts, GA4 tag, nav, footer, floating call button
  page.jsx                       Homepage
  about/ team/ portal/ blog/ contact/ testimonials/ privacy-policy/
  tax-services/                  Category page + 3 sub-services
  accounting-cfo-services/       Category page + 3 sub-services
  business-advisory-services/    Category page + 2 sub-services
  areas/                         Hub page + [slug] route generating 7 city pages
  api/contact/route.js           Contact form endpoint
  sitemap.js  robots.js  icon.png  not-found.jsx
components/
  Navbar  Footer  FloatingCall  Breadcrumbs  Logo  Icons
  primitives.jsx                 Container, Section, Button, CheckList, …
  sections.jsx                   PageHero, ServiceCardGrid, ProcessSteps, CTABanner, FAQSection, MapBlock, …
  templates.jsx                  Template A (category), B (sub-service), C (service area)
  FAQ  FadeIn  Media  Avatar  ContactForm  BlogFilter  JsonLd  MapEmbed
lib/
  site.js          Firm details, nav, service tree — single source of truth
  areas.js         Per-city service-area content (intro, local detail, FAQs)
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
| About | `Person` + `AccountingService` (affiliated firm) + `BreadcrumbList` |
| Team | `Person` × 3 + `BreadcrumbList` |
| Service pages (8) | `Service` + `FAQPage` + `BreadcrumbList` |
| Area hub | `ItemList` + `BreadcrumbList` |
| Area pages (7) | `AccountingService` (local) + `FAQPage` + `BreadcrumbList` |
| Testimonials | `AggregateRating` (placeholder) + `BreadcrumbList` |
| Blog | `Blog` / `BlogPosting` + `BreadcrumbList` |
| Contact | `ContactPage` + `BreadcrumbList` |
| Portal, Privacy | `BreadcrumbList` |

`robots.txt` and `sitemap.xml` are generated at build time from `lib/site.js`
and `lib/areas.js`. Every page links to at least three related pages.

## Performance

- **No third-party requests on load.** The Google Maps embed sits behind a
  facade (`components/MapEmbed.jsx`) that renders the address and a directions
  link, and only mounts the iframe when a visitor asks for it. Analytics is
  gated on a real GA4 measurement ID and loads `lazyOnload`, so the placeholder
  ID costs nothing.
- **Images** are served as AVIF/WebP through `next/image` at layout-matched
  widths — around 8KB total on the homepage.
- **Fonts** are self-hosted variable files via `next/font` (two files, no
  external requests, `display: swap`).
- **One shared IntersectionObserver** drives every scroll animation on a page
  instead of one per section.
- Static assets under `/images` are served `immutable` with a one-year
  max-age; security headers are set in `next.config.mjs`.
- Every page is prerendered at build time.

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
