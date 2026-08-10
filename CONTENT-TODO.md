# Pre-launch checklist

Most placeholders live in one file: `lib/site.js`.

## Resolved from the old site

The previous site at `accounting-tax-solutions.com` could not be fetched
directly (the build environment's egress proxy blocks that domain), but its
content was recoverable through search. The following are now **real, sourced
facts** in the build — no longer placeholders:

- **Joseph F. Fragnoli, CPA** — President & CEO; CPA licensed in Florida, first
  licensed in California in 1984; 40+ years in public accounting, the last ten
  in independent practice; attended UCLA and California State University,
  Fullerton (B.A. Business Administration, emphasis in Accounting).
- **Patricia Alcantara** — Vice President, Office Manager & Executive Assistant.
  Now on the About page team section.
- **Client profile** — closely held corporations, partnerships, LLCs, and
  individuals; businesses generally $200,000–$20,000,000 in annual revenue.
  This replaced a guessed range in the Accounting & CFO FAQ.
- **Fax** — (615) 751-0288. On the contact page and in schema.
- **Photo** — Joseph's headshot is live at `public/images/joseph.jpg`, used on
  the About page and in the homepage hero.
- **Stats** — the `X+` placeholders are gone. 42 years in public accounting
  (confirmed by the client), 10 years in independent practice, and the
  $200K–$20M client revenue range are all real.
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
| 10 | **Remaining photography** | `lib/images.js` — see below. Joseph's headshot is in; the other eight slots are still placeholders. A **higher-resolution copy of the headshot** would also help: the supplied file is 360×360, which is sharp at its current display size but cannot be used any larger. |
| 11 | **Blog articles** | `lib/posts.js` — the five starter topics exist as cards. Each links to its most relevant service page until the article is written, so no card dead-ends. Once written, add `/blog/<slug>` pages and point `href` at them. |
| 12 | **LinkedIn** | `components/Footer.jsx` — currently "Social profiles coming soon." Joseph has a LinkedIn profile; link it if he wants it public. |
| 13 | **Email vs. site domain** | Site is `taxstrategiesandaccountingservices.com`; email is `@accounting-tax-solutions.com`. Worth aligning eventually — mismatched domains cost a little trust and a little deliverability. |
| 14 | **301 redirects from the old site** | Hosting config — map the old `.php` URLs to the new pages so existing rankings and links are not lost. Suggested mapping: `taxservices.php` → `/tax-services`, `taxprep.php` → `/tax-services/tax-compliance-and-preparation`, `bizservices.php` → `/accounting-cfo-services`, `bookkeeping.php` → `/accounting-cfo-services/accounting-services`, `bizplan.php` → `/business-advisory-services`, `Team.php` → `/about`, `contact.php` → `/contact`, `irs-backtaxes.php` / `internalcontrols.php` / `qbtraining.php` / `lawfirms.php` / `links.php` → nearest match above. |

## Images

Joseph's headshot is in place at `public/images/joseph.jpg` and fills both the
About portrait and the homepage hero. The remaining eight slots have no
photography: this build environment blocks every image CDN
(`images.unsplash.com` returns 403 at the egress proxy), so nothing could be
downloaded or verified. Those slots render a branded navy/gold gradient
placeholder with correct alt text and the right aspect ratio — the layout is
final, only the pixels are missing.

Two ways to fill them, both in `lib/images.js`:

- **Real photos (preferred).** Drop a file in `public/images/` and add its path
  to that slot's `local` array — the first candidate that exists on disk wins,
  so no code change is needed beyond the filename. Use the Drive folder photos
  (office, SWFL) wherever they cover a slot. Adding a wide
  `public/images/hero.jpg` automatically takes over the homepage hero from the
  headshot.
- **Stock.** Each slot carries a candidate Unsplash URL in its `unsplash`
  field. Setting `NEXT_PUBLIC_USE_STOCK_IMAGES=1` switches every slot to those
  URLs at once (`images.unsplash.com` is already allow-listed in
  `next.config.mjs`). **The candidate URLs are unverified** — they were written
  from memory and could not be fetched to confirm what they show. Check each one
  in a browser before relying on it.

Alt text is already written for every slot and describes the intended subject;
update it if the final photo shows something different.
