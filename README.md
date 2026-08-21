# Advance Accounting & Tax Solutions, Inc. — Website

Twenty-six-page marketing site for a CPA/tax advisory firm in Ave Maria,
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
> every placeholder in the build — fax number, GA4 ID, business hours, and
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
  about/ team/ portal/ blog/ contact/ privacy-policy/
  tax-services/                  Category page + 3 sub-services
  accounting-cfo-services/       Category page + 3 sub-services
  business-advisory-services/    Category page + 2 sub-services
  areas/                         Hub page + [slug] route generating 7 city pages
  sitemap.js  robots.js  icon.png  not-found.jsx
components/
  Navbar  Footer  FloatingCall  Breadcrumbs  Logo  Icons
  HomeHero  PlanningWindowChart  LeadConnectorForm
  primitives.jsx                 Container, Section, Button, CheckList, …
  sections.jsx                   PageHero, ServiceCardGrid, ProcessSteps, CTABanner, FAQSection, MapBlock, …
  templates.jsx                  Template A (category), B (sub-service), C (service area)
  FAQ  FadeIn  Media  Avatar  BlogFilter  JsonLd  MapEmbed
lib/
  site.js          Firm details, nav, service tree — single source of truth
  areas.js         Per-city service-area content (intro, local detail, FAQs)
  images.js        Image slots (see CONTENT-TODO.md)
  schema.js        Schema.org JSON-LD builders
  seo.js           Metadata builder (title, description, canonical, OG)
  posts.js         Blog index entries
```

### Page templates

Three reusable templates in `components/templates.jsx` keep the section rhythm
consistent while each page supplies its own copy:

- **Template A — category page.** Hero → intro → sub-service card grid →
  What's Included → 4-step process → mid-page CTA → FAQ → related links → final CTA.
- **Template B — sub-service page.** Hero → intro → Who This Is For → What We Do
  → 3-step process → FAQ → related links → CTA.
- **Template C — service area page.** Hero → local intro → map/address →
  services offered → county-level detail → FAQ → related links → CTA.

Two rules keep the rhythm even across all of them:

- **Section tones alternate strictly** (white → shell → white → …). Two
  same-toned sections in a row merge into one oversized slab with no visible
  break, which is why `ProcessSteps`, `FAQSection`, `RelatedLinks` and
  `CTABanner` all take an explicit `tone` rather than relying on defaults.
- **`ProcessSteps` sets its column count from `steps.length`.** A fixed
  four-column track left a dead quarter-width column on every three-step page.

Every section heading is wrapped in `FadeIn`, so a heading and the cards beneath
it animate together instead of the heading appearing instantly.

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
| Blog | `Blog` / `BlogPosting` + `BreadcrumbList` |
| Contact | `ContactPage` + `BreadcrumbList` |
| Portal, Privacy | `BreadcrumbList` |

`robots.txt` and `sitemap.xml` are generated at build time from `lib/site.js`
and `lib/areas.js`. Every page links to at least three related pages.

## Performance

- **Third-party scripts are kept off the critical path.** The LeadConnector
  chat widget loads `lazyOnload`, so it never competes with the hero. The
  Google Maps embed sits behind a facade (`components/MapEmbed.jsx`) that
  renders the address and a directions link, and only mounts the iframe when a
  visitor asks for it. Analytics is gated on a real GA4 measurement ID and
  loads `lazyOnload`, so the placeholder ID costs nothing. The one third party
  that loads eagerly is the LeadConnector form embed on `/contact` — it is that
  page's whole purpose, so it uses `afterInteractive`.
- **The homepage hero is vector, not photography.** The planning-window chart is
  inline SVG built at compile time (`components/PlanningWindowChart.jsx`), so
  the largest element above the fold costs no image request at all.
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
`aria-live` regions for filter status, a text alternative on the hero chart,
WCAG AA contrast, and
`prefers-reduced-motion` support on all scroll animations.

## Contact form & chat

Enquiries run through the firm's **LeadConnector (GoHighLevel)** account:

- `components/LeadConnectorForm.jsx` embeds the enquiry form on `/contact`. The
  iframe carries a `min-height` matching the form's own `data-height`, because
  `form_embed.js` only sizes it once it runs — without that the section jumps
  on load.
- The chat widget is mounted in `app/layout.jsx` and appears on every page.
  It occupies the bottom-right corner, so `components/FloatingCall.jsx` (the
  mobile "Call Now" button) was moved to the bottom-left to avoid overlapping
  it on a phone.

Both are owned in the LeadConnector dashboard — form fields, routing, and
autoresponders are changed there, not in this repo. The only values here are
the form ID and widget ID.

## Deploying

Any Next.js host works; Vercel needs no configuration. Set the environment
variables from `.env.example`, then point the domain at the deployment.
