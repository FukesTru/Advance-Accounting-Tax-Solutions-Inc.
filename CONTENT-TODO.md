# Pre-launch checklist

Everything below is a placeholder in the current build. Each item lists the file
to edit. Most live in one place: `lib/site.js`.

## Blocking — must be resolved before launch

| # | Item | Where | Notes |
|---|------|-------|-------|
| 1 | **Business phone number** | `lib/site.js` → `site.phone`, `site.phoneHref` | Currently the cell, `(615) 513-5522`. Swap to the new business line once it is live. It appears in the nav, footer, every CTA, the floating mobile button, and all schema — change it in one place. |
| 2 | **Review data / AggregateRating** | `lib/testimonials.js`, `app/testimonials/page.jsx` | All six reviews are clearly-labelled placeholders and the `AggregateRating` schema is a stand-in. Publishing invented reviews or ratings violates Google's review policies and risks a structured-data penalty. Replace with verified Google Business Profile reviews, **or delete the `aggregateRatingSchema` block entirely** if real reviews are not ready at launch. |
| 3 | **Privacy Policy attorney review** | `app/privacy-policy/page.jsx` | The client confidentiality and IRC §7216 sections in particular. There is a visible reviewer note at the top of the page — delete it once reviewed. |
| 4 | **Contact form delivery** | Hosting env var `CONTACT_WEBHOOK_URL` | Until it is set, the form returns 503 and tells visitors to call or email. See `.env.example`. |
| 5 | **Client portal URL** | `lib/site.js` → `site.portalLoginUrl` | Currently points at a generic TaxDome login. Set it once the provider (TaxDome / SafeSend / SmartVault / Canopy) is chosen. |
| 6 | **GA4 measurement ID** | `lib/site.js` → `site.gaMeasurementId` | Currently `G-XXXXXXXXXX`; the tag fires but reports nowhere. |
| 7 | **Business hours** | `lib/site.js` → `site.hours` and `site.openingHoursSpec` | Assumed Mon–Fri 9–5. Keep both in sync — the second one feeds schema. |
| 8 | **Google Business Profile review link** | `lib/site.js` → `site.googleReviewUrl` | Currently a search URL. Replace with the direct "write a review" link from the GBP dashboard. |

## Content to confirm

| # | Item | Where |
|---|------|-------|
| 9 | **Joseph's credentials, licensure, and career history** | `app/about/page.jsx` — the bio is written generically because the CSV had no detail. The site describes the firm as "Licensed CPA Firm" in the trust badges (`lib/site.js` → `trustBadges`); confirm that claim is accurate as worded, or change it. |
| 10 | **Stat figures** (`X+` years / clients / industries) | `app/page.jsx` and `app/about/page.jsx` |
| 11 | **Logo** | `components/Logo.jsx` — placeholder AATS monogram + wordmark. `app/icon.svg` is the matching favicon. |
| 12 | **Photography** | `lib/images.js` — see the images section below. |
| 13 | **Blog articles** | `lib/posts.js` — the five starter topics exist as cards. Each links to its most relevant service page until the article is written, so no card dead-ends. Once written, add `/blog/<slug>` pages and point `href` at them. |
| 14 | **LinkedIn** | `components/Footer.jsx` — currently "Social profiles coming soon." |
| 15 | **Email vs. site domain** | Site is `taxstrategiesandaccountingservices.com`; email is `@accounting-tax-solutions.com`. Worth aligning eventually — mismatched domains cost a little trust and a little deliverability. |

## Images

The sandbox this was built in blocks every image CDN (`images.unsplash.com`
returns 403 at the egress proxy), so no photography could be downloaded or
verified. Every image slot renders a branded navy/gold gradient placeholder with
correct alt text and the right aspect ratio — the layout is final, only the
pixels are missing.

Two ways to fill them, both in `lib/images.js`:

- **Real photos (preferred).** Drop files in `public/images/` and set each
  slot's `src` to e.g. `/images/joseph.jpg`. Use the Drive folder photos
  (office, Joseph, SWFL) wherever they cover a slot.
- **Stock.** Each slot carries a candidate Unsplash URL in its `unsplash`
  field. Setting `NEXT_PUBLIC_USE_STOCK_IMAGES=1` switches every slot to those
  URLs at once (`images.unsplash.com` is already allow-listed in
  `next.config.mjs`). **The candidate URLs are unverified** — they were written
  from memory and could not be fetched to confirm what they show. Check each one
  in a browser before relying on it.

Alt text is already written for every slot and describes the intended subject;
update it if the final photo shows something different.
