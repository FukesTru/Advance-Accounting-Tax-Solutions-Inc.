# Pre-launch checklist

Most placeholders live in one file: `lib/site.js`.

## Resolved from the old site

The previous site at `accounting-tax-solutions.com` could not be fetched
directly (the build environment's egress proxy blocks that domain), but its
content was recoverable through search. The following are now **real, sourced
facts** in the build — no longer placeholders:

- **Joseph F. Fragnoli, CPA** — President & CEO; CPA licensed in Florida, first
  licensed in California in 1984; 42 years in public accounting, the last 13 in
  independent practice; attended UCLA and California State University,
  Fullerton (B.A. Business Administration, emphasis in Accounting).
- **Patricia Alcantara** — Vice President, Office Manager & Executive Assistant.
  Now on the About page team section.
- **Client profile** — closely held corporations, partnerships, LLCs, and
  individuals; businesses generally $200,000–$20,000,000 in annual revenue.
  This replaced a guessed range in the Accounting & CFO FAQ.
- **Fax** — (615) 751-0288. On the contact page and in schema.
- **Photo** — Joseph's headshot is live at `public/images/joseph.jpg`, used on
  the About page and in the homepage hero.
- **Stats** — the `X+` placeholders are gone. 42 years in public accounting and
  13 years in independent practice (both confirmed by the client — the old site
  said "more than forty" and "the last ten", which had gone stale), plus the
  $200K–$20M client revenue range, are all real.
- **Trust badges** — "Licensed CPA Firm" became "Florida-Licensed CPA" and
  "42 Years in Public Accounting", both verifiable.

Sources: the old site's Home, Team, Tax Services, Business Services, and
Contact pages.

## Estimated figures — confirm or replace

Three numbers on the About page stat row were requested as plausible stand-ins
scaled to a 42-year career. **They are not measured.** They live in
`lib/site.js` → `aboutStats`, each marked `// ESTIMATE`:

| Figure | Shown | Basis |
|---|---|---|
| Returns prepared | 10,000+ | ~240 returns/year × 42 years |
| Clients served | 1,200+ | Cumulative over the career, not active clients |
| Industries supported | 30+ | Round number, no underlying count |

They read as factual claims to a visitor, so please confirm them or swap in real
figures. Deleting the last three entries from `aboutStats` leaves a clean
three-stat row of verified numbers if you would rather not publish estimates.

## Blocking — must be resolved before launch

| # | Item | Where | Notes |
|---|------|-------|-------|
| 1 | **Business phone number** | `lib/site.js` → `site.phone`, `site.phoneHref` | Currently `(615) 513-5522` — the number the old site also used. Swap to the new business line once it is live. It appears in the nav, footer, every CTA, the floating mobile button, and all schema — change it in one place. |
| 2 | **Review data / AggregateRating** | `lib/testimonials.js`, `app/testimonials/page.jsx` | All six reviews are clearly-labelled placeholders and the `AggregateRating` schema is a stand-in. Publishing invented reviews or ratings violates Google's review policies and risks a structured-data penalty. Replace with verified Google Business Profile reviews, **or delete the `aggregateRatingSchema` block entirely** if real reviews are not ready at launch. |
| 3 | **Privacy Policy attorney review** | `app/privacy-policy/page.jsx` | The client confidentiality and IRC §7216 sections in particular. There is a visible reviewer note at the top of the page — delete it once reviewed. |
| 4 | **Contact form delivery** | Hosting env var `CONTACT_WEBHOOK_URL` | Until it is set, the form returns 503 and tells visitors to call or email. See `.env.example`. |
| 5 | **Client portal URL** | `lib/site.js` → `site.portalLoginUrl` | Currently points at a generic TaxDome login. Set it once the provider (TaxDome / SafeSend / SmartVault / Canopy) is chosen. |
| 6 | **GA4 measurement ID** | `lib/site.js` → `site.gaMeasurementId` | Currently `G-XXXXXXXXXX`; the tag fires but reports nowhere. |
| 7 | **Business hours** | `lib/site.js` → `site.hours` and `site.openingHoursSpec` | Still unknown — the old site's contact page did not publish them. Assumed Mon–Fri 9–5. Keep both fields in sync; the second feeds schema. |
| 8 | **Google Business Profile review link** | `lib/site.js` → `site.googleReviewUrl` | Currently a search URL. Replace with the direct "write a review" link from the GBP dashboard. |

## Worth deciding — service lines the old site had that the new sitemap does not

The old site carried real service pages that the 20-page plan has no home for.
They are currently folded into existing pages as bullets, which is thin cover
for work the firm actually sells:

| Old page | Where it landed now | Recommendation |
|---|---|---|
| Tax Relief, IRS Audit Representation, Non-Filed Tax Returns, Back Taxes Owed, Payroll Tax Problems | Bullets on `/tax-services` and `/tax-services/tax-compliance-and-preparation` | **Add a 21st page**, `/tax-services/tax-resolution`. This is high-intent search traffic ("back taxes owed", "IRS audit representation Fort Myers") and it deserves its own page rather than five bullets. |
| Law firm services (`lawfirms.php`) | Not represented | An industry page for law firms is a genuine differentiator if the firm still wants that niche. Confirm before building. |
| QuickBooks training (`qbtraining.php`) | One bullet under Accounting Services | Fine as-is unless training is still sold as a standalone service. |
| Internal controls (`internalcontrols.php`) | Now a bullet under Fractional CFO Services | Fine as-is. |
| Business plans (`bizplan.php`) | Covered by Business Advisory Services | Fine as-is. |

## Content still to confirm

| # | Item | Where |
|---|------|-------|
| 9 | **Logo** | `components/Logo.jsx` — placeholder AATS monogram + wordmark. `app/icon.svg` is the matching favicon. |
| 10 | **Remaining photography** | One slot left: a Naples, FL photo for the homepage area card — see the Images section below. |
| 11 | **Blog articles** | `lib/posts.js` — the five starter topics exist as cards. Each links to its most relevant service page until the article is written, so no card dead-ends. Once written, add `/blog/<slug>` pages and point `href` at them. |
| 12 | **LinkedIn** | `components/Footer.jsx` — currently "Social profiles coming soon." Joseph has a LinkedIn profile; link it if he wants it public. |
| 13 | **Email vs. site domain** | Site is `taxstrategiesandaccountingservices.com`; email is `@accounting-tax-solutions.com`. Worth aligning eventually — mismatched domains cost a little trust and a little deliverability. |
| 14 | **301 redirects from the old site** | Hosting config — map the old `.php` URLs to the new pages so existing rankings and links are not lost. Suggested mapping: `taxservices.php` → `/tax-services`, `taxprep.php` → `/tax-services/tax-compliance-and-preparation`, `bizservices.php` → `/accounting-cfo-services`, `bookkeeping.php` → `/accounting-cfo-services/accounting-services`, `bizplan.php` → `/business-advisory-services`, `Team.php` → `/about`, `contact.php` → `/contact`, `irs-backtaxes.php` / `internalcontrols.php` / `qbtraining.php` / `lawfirms.php` / `links.php` → nearest match above. |

## Images

### In place

| File | Slot | Used on |
|---|---|---|
| `joseph.jpg` | `joseph`, `heroHome` | About, homepage hero |
| `analysis.jpg` | `analysis` | Homepage story, Fractional CFO, Business Advisory hub |
| `accounting-desk.jpg` | `accounting` | Accounting & CFO hub, Accounting Services, Payroll |
| `tax-forms.jpg` | `taxForms` | Tax Services hub, Tax Compliance & Preparation |
| `tax-desk.jpg` | `taxDesk` | Tax Planning, Financial Planning |
| `justice.jpg` | `legal` | Estate Planning, Entity Design & Formation |
| `working-online.jpg` | `workingOnline` | Client Portal, Blog |
| `swfl-waterfront.jpg` | `fortMyers` | Homepage Fort Myers card |

Every page carries a photo. No image appears more than three times, and never
twice on the same page.

### Still needed — one shot

| Slot | Page | What is needed |
|---|---|---|
| `naples` | Homepage Naples service-area card | A recognizable **Naples, Florida** scene — the pier, 5th Avenue South, Tin City, or the beach. Landscape. |

The photo supplied for this slot showed the Fontana del Nettuno in **Naples,
Italy**. It was not used: the area page exists to establish local credibility in
Collier County, and an Italian piazza would undercut exactly that for any local
reader who recognizes it. Until a Naples FL photo arrives, the card shows the
branded placeholder — which sits directly beside the Fort Myers photo on the
homepage, so the pair currently looks uneven.

Also unused: the LinkedIn signup screenshot. It carries LinkedIn's branding and
tagline, and on a page headed "Client Portal" it would read as a claim that the
firm's portal is LinkedIn. The laptop photo went there instead.

Two optional upgrades:

- **A wider hero image.** Drop in `public/images/hero.jpg` and it takes over the
  homepage hero from the headshot automatically.
- **A higher-resolution copy of Joseph's headshot.** The supplied file is
  360x360 — sharp at its current framed size, but it cannot be used any larger.

### How to add one

Drop the file in `public/images/` using the filename listed in that slot's
`local` array — for the outstanding slot that is `naples.jpg`. The slot resolves
the first candidate that exists on disk, so no code change is needed. Update the
slot's `alt` text if the photo shows something different from what is described,
and set `aspect` (`4/3`, `4/5`, `2/3`, or `square`) if the shot is not landscape.

Images are served through `next/image`, so they are resized and lazy-loaded
automatically — but keep source files under roughly 500KB.

### Stock fallback

Each slot also carries a candidate Unsplash URL in its `unsplash` field.
Setting `NEXT_PUBLIC_USE_STOCK_IMAGES=1` switches any slot without a local file
to that URL (`images.unsplash.com` is already allow-listed in
`next.config.mjs`). **The candidate URLs are unverified** — this build
environment blocks image CDNs, so they could not be fetched to confirm what
they show. Check each in a browser before relying on it.
