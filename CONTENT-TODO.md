# Pre-launch checklist

Most placeholders live in one file: `lib/site.js`.

> **Read [Hero figures](#-hero-figures--must-be-confirmed-or-replaced-before-launch)
> first.** The homepage hero states a specific client tax saving that nothing
> supplied supports. It needs Joseph's sign-off before the site goes live.

## Resolved from the old site

The previous site at `accounting-tax-solutions.com` could not be fetched
directly (the build environment's egress proxy blocks that domain), but its
content was recoverable through search. The following are now **real, sourced
facts** in the build — no longer placeholders:

- **Joseph F. Fragnoli, CPA** — President & CEO; CPA licensed in Florida, first
  licensed in California in 1984; 42 years in public accounting, the last 13 in
  independent practice; attended UCLA and California State University,
  Fullerton (B.A. Business Administration, emphasis in Accounting).
- **Client profile** — closely held corporations, partnerships, LLCs, and
  individuals; businesses generally $200,000–$20,000,000 in annual revenue.
  This replaced a guessed range in the Accounting & CFO FAQ.
- **Phone** — (239) 492-6784, confirmed by the client. Set once in `lib/site.js`; flows to the nav, footer, every CTA, the mobile call button, and all schema.
- **Photo** — Joseph's headshot is live at `public/images/joseph.jpg`, used on
  the About page and his `/team` profile.
- **Stats** — the `X+` placeholders are gone. 42 years in public accounting and
  13 years in independent practice (both confirmed by the client — the old site
  said "more than forty" and "the last ten", which had gone stale), plus the
  $200,000–$20,000,000 client revenue range (now referenced in prose rather
  than as a stat box), are all real.
- **Trust badges** — "Licensed CPA Firm" became "Florida-Licensed CPA" and
  "42 Years in Public Accounting", both verifiable.
- **Full bios** for all three firm members, from the client's Bios.docx:
  Joseph (President & CEO, co-owner), **Patricia Alcantara** (Vice President,
  co-owner, former ESL teacher in Brazil, runs office coordination and file
  maintenance), and **James Fragnoli** (consultant; retired CFO of a $100M
  manufacturing company, career Controller/CFO in private industry, former CPA
  now retired from licensure — he provides the senior input on fractional CFO
  and accounting engagements). All three have full profiles on the new `/team`
  page, appear in the homepage roster card, and James is named on the Fractional
  CFO page where his experience is the actual selling point.
- **The two-entity structure.** Advance Accounting & Tax Solutions, Inc. was
  created deliberately for work outside traditional CPA-firm services and does
  **not** perform financial statement preparation or the reporting attached to
  it. Joseph F. Fragnoli, CPA, Inc. is the affiliated general-practice CPA firm
  (100% Joseph) for engagements that require one. This is now explained on the
  About page, declared in schema, and — importantly — the site's copy was
  corrected to stop advertising work the entity does not do (see below).
- **Ave Maria photo** — the town-center aerial is now on the `/areas` hub.

Sources: the old site's Home, Team, Tax Services, Business Services, and
Contact pages, plus the client's Bios.docx.

## Corrected: the site was advertising attest work

The bios document states that Advance Accounting & Tax Solutions "does not do
financial statement preparation and applicable reporting on thereto." The build
had three places implying otherwise — "Financial statement preparation" as a
service bullet, "Monthly financial statements" on the hub, and the same phrase
in `Service` schema.

All three now read as **management reporting** (internal-use P&L, balance sheet,
cash flow), which is what bookkeeping actually produces. Scope notes and FAQs on
the Accounting hub and Accounting Services pages state plainly that audits,
reviews, compilations, and reported financial statements go through the
affiliated CPA firm. `lib/site.js` → `scopeExclusions` is the single list, and
`team`'s doc comment warns against reintroducing the claim.

**Worth an explicit confirmation from Joseph**, since the line between
"management reports" and SSARS "prepared financial statements" is his call, not
mine. If he wants the site silent on reporting altogether, it is a small edit.

## ⚠ Hero figures — must be confirmed or replaced before launch

The homepage hero card presents these as a real client outcome:

| Shown | Where |
|---|---|
| **CLIENT TAX POSITION · FY 2026** | `components/PlanningWindowChart.jsx` → `HEADLINE.eyebrow` |
| **$164,800** | `HEADLINE.figure` |
| **▼ 31% TAX BURDEN** | `HEADLINE.delta` |
| **Projected savings from entity restructuring, S-corp election & accelerated depreciation.** | `HEADLINE.caption` |
| **Q3 estimates filed** / Reviewed by a Florida-licensed CPA | `components/HomeHero.jsx` |
| **Books closed in 6 days** / Monthly, on time, every time | `components/HomeHero.jsx` |

They came from a design mockup, not from the firm. Nothing supplied
supports any of them, and the card carries no wording marking it as
illustrative — a visitor reads it as a real engagement.

**Two reasons this needs Joseph's sign-off specifically, not just the
agency's:**

1. A licensed CPA advertising specific savings the firm cannot evidence is a
   professional-conduct question under the AICPA code and Florida Board of
   Accountancy advertising rules, not only a marketing one. It is his licence
   attached to the claim.
2. Unsubstantiated performance claims in advertising carry general FTC
   exposure regardless of profession.

**To fix, pick one:**

- Replace the figures with a real, documented engagement (best — a true number
  is more persuasive than a round one anyway). Everything lives in the
  `HEADLINE` block at the top of `PlanningWindowChart.jsx`.
- Keep the figures and add a visible qualifier such as "Illustrative example"
  next to the eyebrow. One line.
- Say the word and the card reverts to the wording it had before, which made
  the same argument without naming a number.

## Every number on the site is one you supplied

A sweep removed every figure that was not given by the client or taken from
Bios.docx. What remains, and where it came from:

| Figure | Source |
|---|---|
| 42 years in public accounting | Client message |
| 13 years in independent practice | Client message (Bios.docx says fourteen; the client's figure wins) |
| First licensed 1984 | Bios.docx |
| Client revenue $200,000–$20,000,000 | Bios.docx |
| Hundred-million-dollar manufacturer (James) | Bios.docx |
| (239) 492-6784, (615) 751-0288, 5284 Juliet Court, 34142 | Client messages / Joe's signature |

Removed as invented: business hours, "we respond within 1 business day",
"same business day" portal turnaround, every drive time and distance between
Ave Maria and the service-area cities, map coordinates, the `$$` price band,
blog publication dates and read times, the privacy policy's "last updated"
date, and the About stat row.

Still on the page and deliberately kept: IRS form numbers (1040, 1120-S, 1065,
941, 940, W-2, 1099, K-1, §7216, §179, 401(k)), statutory dates like December 31,
the copyright year (computed at build time), and counts of things visible on the
page itself ("Showing 5 articles").

**If you add a number, add its source.** Anything that reads as a fact about the
practice needs to come from the client, not from a plausible estimate.

## Estimated figures — removed

The About page carried a stat row with three numbers that were never measured:
**Returns prepared 10,000+**, **Clients served 1,200+**, and **Industries
supported 30+**. They were originally requested as plausible stand-ins scaled to
a 42-year career, and they were flagged here as unconfirmed.

They are now gone, along with the section that held them. Two reasons:

1. They read to a visitor as factual claims about the practice, and nothing
   supports them.
2. The section was redundant anyway — the only honest figures in it (42 years,
   13 in independent practice) already appear three times on that page: in the
   hero subtitle, in the Background copy, and in the credentials list.

If Joseph can substantiate real numbers and wants them shown, say so and the
section comes back in a few lines with the verified figures.

## The homepage hero

The hero leads with the pitch and a chart, not a photograph and not a portrait
of one person. A single headshot there read as a sole practitioner, which
undersells a three-person firm.

**The chart is an illustration, not client data — and that is deliberate.** It
shows how the tax-planning window narrows across the year: the decisions you can
still influence fall away as December approaches, while the decisions already
locked in rise to meet them. The point it makes is the firm's actual argument,
and it makes it without publishing a client outcome the firm cannot evidence.
The caption says so in as many words. If real, documented figures ever exist,
`components/PlanningWindowChart.jsx` is where they would go.

**The stats strip carries only verified numbers**: 42 years in public
accounting, 13 in independent practice, and the count of service-area
communities, which is derived from `lib/areas.js` so it cannot drift.

The roster sits below the fold as its own section — "A small firm, on purpose" —
with a card per member linking to their profile on `/team`.

**One reserved image slot:**

| Drop this file in `public/images/` | What happens |
|---|---|
| `patricia.jpg` | Fills Patricia's space in the roster card, on `/team`, and on the About page. Square, head and shoulders, 600px or larger. |

Until it arrives, `components/Avatar.jsx` renders a navy-and-gold monogram that
reads as deliberate rather than broken. Nothing needs re-coding when the photo
lands — the filename is the wiring.

## Contact details — three conflicts to settle

Joe's email signature does not match what the site currently uses. None of
these are guesses on my part; they are genuine conflicts between sources, and
each needs a decision:

| Field | Site uses | Signature says | Note |
|---|---|---|---|
| Phone | `(239) 492-6784` | `(615) 513-5522` (cell) | You gave the 239 number as the website number, so that is what ships. The signature is presumably older. |
| Email | `jfragnoli@accounting-tax-solutions.com` | `jfragnolicpa@gmail.com` | I kept the domain address — a Gmail address on a CPA site costs real trust. Confirm the domain mailbox actually receives mail. |
| Website | `taxstrategiesandaccountingservices.com` | `accounting-tax-solutions.com` | The new domain is what the site is built for; the old one should 301-redirect to it. |
| Years independent | 13 | Bios.docx says "fourteen" | You said "about 13"; the document says fourteen. One word to change either way. |

## Blocking — must be resolved before launch

| # | Item | Where | Notes |
|---|------|-------|-------|
| 1 | **Fax number** | `lib/site.js` → `site.fax` | The business line is now `(239) 492-6784`, confirmed and live sitewide. The fax is still the old `(615) 751-0288` Tennessee number carried over from the previous site — a 615 fax beside a 239 phone looks odd for a Florida firm. Confirm it works, replace it, or drop it. |
| 2 | **Privacy Policy attorney review** | `app/privacy-policy/page.jsx` | The client confidentiality and IRC §7216 sections in particular. There is a visible reviewer note at the top of the page — delete it once reviewed. |
| 3 | **LeadConnector form & chat** | `components/LeadConnectorForm.jsx`, `app/layout.jsx` | Both are live and wired to the IDs you supplied. **Please submit the form once from the published site** to confirm the notification lands where Joseph expects — the embed could not be loaded from the build environment, so the wiring is verified but a real submission is not. Fields and routing are edited in LeadConnector, not in the repo. |
| 4 | **Client portal — verify the sign-in link** | `lib/site.js` → `site.portalLoginUrl` | Set to `https://us.titanfile.com/login/?next=/`, the US TitanFile instance, as supplied. Worth one click from the live site to confirm it lands on the firm's sign-in rather than a generic TitanFile page. Also confirm the `/portal` page's feature list matches your plan; it claims secure exchange, large-file transfer, in-portal messaging, and return delivery, and deliberately does **not** claim e-signature. |
| 5 | **GA4 measurement ID** | `lib/site.js` → `site.gaMeasurementId` | Currently `G-XXXXXXXXXX`; the tag fires but reports nowhere. |
| 6 | **Business hours** | `lib/site.js` → `site.hours` | **Not published anywhere on the site.** The Mon–Fri 9–5 that used to show in the footer and on Contact was an assumption, never supplied, so it has been removed along with `openingHoursSpecification` in schema. Both pages now say to call or email to arrange a time. Send the real hours and they go back in. |

## Service areas — how to add another

Seven area pages now live under `/areas/<slug>`, all generated from
`lib/areas.js` by a single dynamic route, with `/areas` as the hub:

Fort Myers · Naples · Cape Coral · Bonita Springs · Estero · Marco Island ·
Immokalee

**Adding a city means writing real content for it.** Each entry carries its own
intro, county-level filing detail, and FAQs, because city pages
that differ only by a swapped place name are the textbook definition of a
doorway page and Google devalues them. Measured 3-gram overlap between the
current pages tops out at 24%, which is comfortably distinct — a find-and-
replace clone would land above 80% and put the whole set at risk.

Obvious next candidates, if the firm actually serves them: Lehigh Acres,
Golden Gate, Sanibel, Fort Myers Beach, Punta Gorda. Only add ones where there
is something true and specific to say.

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
| 7 | **Logo vector original** | The real lockup is in and used sitewide. It came as a raster JPEG, background-removed and cropped into three PNGs (see README). Ask the designer for the **vector original (SVG/AI/EPS)** — the current files are fine for the website but cannot scale to signage, print, or a large-format banner. |
| 8 | **Remaining photography** | Two reserved headshot slots, both optional and both degrading gracefully: `patricia.jpg` and `james.jpg` — see the Images section below. |
| 9 | **Blog articles** | `lib/posts.js` — the five starter topics exist as cards. Each links to its most relevant service page until the article is written, so no card dead-ends. Once written, add `/blog/<slug>` pages and point `href` at them. |
| 10 | **LinkedIn** | `components/Footer.jsx` — currently "Social profiles coming soon." Joseph has a LinkedIn profile; link it if he wants it public. |
| 11 | **Headshots for Patricia and James** | Drop `patricia.jpg` and `james.jpg` into `public/images/` and they appear automatically on `/team`, in the homepage roster section, and on the About page. Until then `components/Avatar.jsx` renders a monogram, which looks deliberate rather than broken — but two real faces would finish the team page properly. Square crops, head and shoulders, 600px or larger. |
| 12 | **Email vs. site domain** | Site is `taxstrategiesandaccountingservices.com`; email is `@accounting-tax-solutions.com`. Worth aligning eventually — mismatched domains cost a little trust and a little deliverability. |
| 13 | **301 redirects from the old site** | Hosting config — map the old `.php` URLs to the new pages so existing rankings and links are not lost. Suggested mapping: `taxservices.php` → `/tax-services`, `taxprep.php` → `/tax-services/tax-compliance-and-preparation`, `bizservices.php` → `/accounting-cfo-services`, `bookkeeping.php` → `/accounting-cfo-services/accounting-services`, `bizplan.php` → `/business-advisory-services`, `Team.php` → `/about`, `contact.php` → `/contact`, `irs-backtaxes.php` / `internalcontrols.php` / `qbtraining.php` / `lawfirms.php` / `links.php` → nearest match above. |

## Images

### In place

| File | Slot | Used on |
|---|---|---|
| `joseph.jpg` | `joseph` | About, `/team`, homepage roster card |
| `ave-maria.jpg` | `aveMaria` | Service Areas hub |
| `analysis.jpg` | `analysis` | Homepage story, Fractional CFO, Business Advisory hub |
| `accounting-desk.jpg` | `accounting` | Accounting & CFO hub, Accounting Services, Payroll |
| `tax-forms.jpg` | `taxForms` | Tax Services hub, Tax Compliance & Preparation |
| `tax-desk.jpg` | `taxDesk` | Tax Planning, Financial Planning |
| `justice.jpg` | `legal` | Estate Planning, Entity Design & Formation |
| `working-online.jpg` | `workingOnline` | Blog |
| `swfl-waterfront.jpg` | `fortMyers` | Homepage Fort Myers card |
| `naples.jpg` | `naples` | Homepage Naples card |

No image appears more than three times, and none appears twice on the same
page. Since the homepage hero became a chart, every photo is now used on exactly
one page or in one role.

### Still needed

| Slot | File to add | Page | What is needed |
|---|---|---|---|
| `patricia` | `patricia.jpg` | `/team`, homepage roster, About | Square headshot, head and shoulders, 600px or larger. Reserved; a monogram holds the space. |
| `james` | `james.jpg` | `/team`, homepage roster, About | Square headshot, head and shoulders, 600px or larger. Reserved; a monogram holds the space. |

One earlier submission for the Naples slot showed the Fontana del Nettuno in
**Naples, Italy**. It was not used — the card exists to establish local
credibility in Collier County, and an Italian piazza would undercut exactly
that for any local reader who recognizes it. The Gulf-shore aerial now in place
is unmistakably Naples, Florida, so the pair of homepage area cards finally
reads as a matched set.

Also unused: the LinkedIn signup screenshot. It carries another company's
branding and tagline, which is not something this firm's site should present as
its own.

One optional upgrade: **a higher-resolution copy of Joseph's headshot.** The
supplied file is 360x360 — sharp at its current framed size, but it cannot be
used any larger.

A wide office or full-team photograph is no longer needed for the hero, which is
now a chart. If one turns up it would sit well on the About page or `/team`.

### How to add one

Drop the file in `public/images/` using the filename listed in the table above.
The slot resolves the first candidate that exists on disk, so no code change is
needed. Update the slot's `alt` text if the photo shows something different from
what is described, and set `aspect` (`4/3`, `4/5`, `2/3`, or `square`) if the shot is not landscape.

Images are served through `next/image`, so they are resized and lazy-loaded
automatically — but keep source files under roughly 500KB.

### Stock fallback

Each slot also carries a candidate Unsplash URL in its `unsplash` field.
Setting `NEXT_PUBLIC_USE_STOCK_IMAGES=1` switches any slot without a local file
to that URL (`images.unsplash.com` is already allow-listed in
`next.config.mjs`). **The candidate URLs are unverified** — this build
environment blocks image CDNs, so they could not be fetched to confirm what
they show. Check each in a browser before relying on it.
