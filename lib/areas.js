/**
 * Service-area pages.
 *
 * Every entry carries its own intro, local-authority detail, and FAQs. That is
 * deliberate: near-identical city pages that differ only
 * by a swapped place name are the textbook definition of a doorway page and
 * Google devalues or penalizes them. If a new city is added here, it needs
 * genuinely local content — not a find-and-replace of an existing entry.
 *
 * `slug` is the URL segment under /areas/.
 */

export const areas = [
  /* ---------------------------------------------------------------- */
  {
    slug: 'fort-myers-fl',
    city: 'Fort Myers',
    county: 'Lee County',
    primary: true,
    cardBlurb:
      'Tax, accounting, and CFO support for Fort Myers business owners, professionals, and seasonal residents.',
    metaTitle: 'Accountant & Tax Advisor in Fort Myers, FL',
    metaDescription:
      'Tax planning, accounting, and CFO advisory services for individuals and businesses in Fort Myers, FL. Free consultation with a local advisory firm.',
    h1: 'Accountant & Tax Advisor in Fort Myers, FL',
    subtitle:
      'Tax planning, accounting, and fractional CFO support for Fort Myers businesses, professionals, and seasonal residents.',
    introHeading: 'Tax and accounting support built for how Fort Myers actually works',
    intro: [
      'Fort Myers has grown into one of the busiest small-business markets on the Gulf Coast. Contractors and trades, hospitality, healthcare practices, professional services, property managers, and an expanding base of remote-first business owners who moved down and brought their companies with them — Lee County adds new businesses at a pace that outstrips most of the state.',
      'That growth produces a specific set of financial questions. A contractor whose revenue doubled in two years is probably in the wrong entity structure. A hospitality business with sharp seasonal swings needs cash-flow forecasting more than it needs another monthly report. Someone who relocated from New York or Illinois and kept operating there has a multi-state filing question they may not know exists yet. And seasonal residents splitting the year face residency and sourcing rules that get expensive when handled casually.',
      'We work with all of it — proactive tax planning, monthly accounting and payroll, and fractional CFO support for businesses at the point where the numbers need interpreting rather than just recording. Our office is a short drive away in Ave Maria, and clients who prefer to keep everything remote work with us entirely by video call and phone.',
    ],
    localAuthority: {
      title: 'Working in Lee County',
      paragraphs: [
        'Operating in Fort Myers means dealing with Lee County and City of Fort Myers requirements alongside the state ones. New businesses register with the Florida Division of Corporations, then handle local business tax receipts at both the county and, where applicable, city level. Fictitious name registrations, sales tax accounts with the Florida Department of Revenue, and reemployment tax registration follow from there depending on your setup.',
        'None of it is difficult in isolation. What causes problems is missing a step and finding out at renewal, or registering in a way that does not match how the business actually operates. We handle these as part of formation and ongoing compliance so nothing sits unfinished.',
      ],
      points: [
        'Florida Division of Corporations registration and annual report filings',
        'Lee County and City of Fort Myers business tax receipt requirements',
        'Florida sales and use tax registration and recurring filings',
        'Reemployment tax registration for businesses with employees',
        'Multi-state filing analysis for owners who relocated but kept operations elsewhere',
      ],
    },
    faqs: [
      {
        q: 'Do you meet clients in person in Fort Myers?',
        a: 'Yes. Our office is in Ave Maria, an easy drive from most of Fort Myers, and we meet clients there by appointment. For engagements where an in-person conversation makes more sense on your side — reviewing books with your team, for instance — we can arrange to come to you. Most clients settle into a mix: a face-to-face planning session once or twice a year, everything else remote.',
      },
      {
        q: 'Do you work with seasonal and part-year Florida residents?',
        a: 'Regularly. Part-year residency creates genuine complexity: which state gets to tax which income, how residency is established and documented, and whether a former state is likely to contest the change. If you have recently moved to Florida or split the year between here and somewhere else, this is worth getting right early — states with income tax do audit departures, and documentation built after the fact is much weaker.',
      },
      {
        q: 'Can I get started remotely?',
        a: 'Entirely. Onboarding, planning meetings, and electronic filing all work remotely, and plenty of our Fort Myers clients never need to drive out. You get the same advisor and the same turnaround either way — the delivery method is your preference, not a service tier.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'naples-fl',
    city: 'Naples',
    county: 'Collier County',
    primary: true,
    cardBlurb:
      'Planning-forward tax and advisory work for Naples entrepreneurs, investors, and families.',
    metaTitle: 'Accountant & Tax Advisor in Naples, FL',
    metaDescription:
      'Tax planning, accounting, and CFO advisory services for individuals and businesses in Naples, FL. Free consultation with a local advisory firm.',
    h1: 'Accountant & Tax Advisor in Naples, FL',
    subtitle:
      'Planning-forward tax, accounting, and advisory work for Naples business owners, investors, and families.',
    introHeading: "Advisory work suited to Naples' financial complexity",
    intro: [
      'Naples has an unusually high concentration of business owners, investors, retirees, and people who relocated here specifically for the tax treatment. That produces financial situations with more moving parts than the national average: multiple entities, property held in several states, closely held businesses approaching a sale, trusts established decades ago in other jurisdictions, and residency positions that need to hold up if a former home state takes an interest.',
      'These are not situations that suit seasonal filing. They call for planning that happens before decisions are made — modeling what a business sale looks like under different structures, deciding whether a gift this year beats a bequest later, coordinating an estate plan drafted in another state with Florida realities, or sorting out where income is actually sourced when you spend part of the year somewhere else.',
      'Our Collier County practice concentrates on exactly that: proactive tax planning, estate and trust tax work coordinated with your attorney, accounting and fractional CFO support for owner-operated companies, and entity structuring for investors running multiple holdings. We are close by in Ave Maria, and full remote service is available for clients who prefer it.',
    ],
    localAuthority: {
      title: 'Working in Collier County',
      paragraphs: [
        'Businesses operating in Naples register with the Florida Division of Corporations and then handle Collier County and City of Naples local business tax receipts, along with sales tax and reemployment tax accounts where applicable. Investors holding property through multiple entities have registration and annual report obligations for each one, which is where things most commonly slip.',
        "On the estate side, Florida is genuinely favorable — no state estate tax and no state inheritance tax. Clients arriving from states that impose both are often surprised how much simpler the picture becomes. Federal estate tax, basis planning, and inherited retirement account rules still apply, and plans drafted under another state's regime usually deserve a fresh look after a move.",
      ],
      points: [
        'Florida Division of Corporations registration and per-entity annual reports',
        'Collier County and City of Naples business tax receipt requirements',
        'No Florida state estate tax or inheritance tax — federal rules still apply',
        'Residency documentation for clients relocating from income-tax states',
        'Multi-entity and multi-state coordination for property investors',
      ],
    },
    faqs: [
      {
        q: 'Do you meet clients in person in Naples?',
        a: 'Yes. Our office in Ave Maria is roughly half an hour from most of Naples, and we meet clients there by appointment. For planning conversations that benefit from being face to face — estate coordination or a business succession discussion, say — we are happy to arrange something closer to you. Everything else runs comfortably over video call.',
      },
      {
        q: 'Do you handle estate and trust tax planning for Naples clients?',
        a: 'We do, and it is a significant share of the Collier County work. Our role is the tax side: modeling exposure, preparing trust and estate returns, advising on gifting strategy, and coordinating with your estate attorney, who drafts the actual documents. Florida imposes no state estate or inheritance tax, but federal rules, basis planning, and inherited retirement account timelines all still apply.',
      },
      {
        q: 'Can I get started remotely?',
        a: 'Yes, start to finish. Onboarding, secure document exchange, e-signature, and planning meetings all work remotely, and many Naples clients never visit the office at all. Same advisor, same responsiveness — the format is whatever suits you.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'cape-coral-fl',
    city: 'Cape Coral',
    county: 'Lee County',
    cardBlurb:
      'Bookkeeping, payroll, and tax work for Cape Coral trades, contractors, and rental-property owners.',
    metaTitle: 'Accountant & Tax Advisor in Cape Coral, FL',
    metaDescription:
      'Bookkeeping, payroll, tax planning, and CFO support for Cape Coral businesses and rental property owners. Free consultation with a Florida CPA.',
    h1: 'Accountant & Tax Advisor in Cape Coral, FL',
    subtitle:
      'Clean books, dependable payroll, and real tax planning for Cape Coral trades, contractors, and property owners.',
    introHeading: 'Built for an owner-operator economy',
    intro: [
      'Cape Coral is the largest city in Southwest Florida by population and one of the most owner-operator-heavy. Roofers, pool companies, landscapers, marine services, HVAC, remodelers, and the property managers who keep thousands of seasonal rentals running — the city runs on small businesses where the owner is also the estimator, the scheduler, and, most nights, the bookkeeper.',
      'That shape creates predictable financial pressure points. Revenue is lumpy and weather-dependent, so cash planning matters more than in a steady-margin business. Crews expand and contract, which makes payroll compliance and worker classification a live question rather than a theoretical one. And profitable trades businesses very often stay in the entity structure they started with long past the point where an S-corp election would have saved real money.',
      "We work through those specifics: bookkeeping that keeps up with job-level costs, payroll handled properly for a workforce that changes size, and planning conversations that happen before December rather than after. If you own rental property here as well — and a lot of Cape Coral owners do — that gets folded into the same picture rather than treated as someone else's problem.",
    ],
    localAuthority: {
      title: 'Working in Cape Coral and Lee County',
      paragraphs: [
        'Cape Coral businesses register with the Florida Division of Corporations, then obtain a City of Cape Coral business tax receipt and, where required, a Lee County receipt as well. Contractors carry an additional layer: licensing through the state or Lee County, plus the insurance and workers-compensation exemptions that need to line up with how the crew is actually structured.',
        'Rental property adds its own compliance. Short-term rentals are subject to Florida sales tax and the Lee County tourist development tax, both of which are separate filings from the income tax return and both of which owners routinely discover late.',
      ],
      points: [
        'City of Cape Coral and Lee County business tax receipts',
        'Contractor licensing, insurance, and workers-compensation exemption coordination',
        'Florida sales tax and Lee County tourist development tax on short-term rentals',
        'Job-level cost tracking so trades businesses can see margin per job',
        'S-corp election analysis for profitable owner-operated trades',
      ],
    },
    faqs: [
      {
        q: 'Do you work with contractors and trades businesses?',
        a: 'A good portion of our Cape Coral work is exactly that. The recurring issues are consistent: job costing that never got set up, subcontractors who should have been employees or vice versa, and an entity structure chosen when the business was a fraction of its current size. All three are fixable, and all three are cheaper to fix now than after a notice arrives.',
      },
      {
        q: 'I rent out property in Cape Coral. What do I actually owe?',
        a: 'Beyond income tax on the net rental profit, short-term rentals generally trigger Florida sales tax and the Lee County tourist development tax. Those are separate registrations and separate recurring filings. If you have been renting for a while without them, come forward voluntarily — the exposure grows the longer it sits, and there are usually workable resolutions.',
      },
      {
        q: 'Do I need to come to your office?',
        a: 'No. Cape Coral is about an hour from Ave Maria, and most clients there work with us entirely remotely — video calls for planning, electronic filing for returns. If you would rather meet in person, we are glad to; it is simply not required.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'bonita-springs-fl',
    city: 'Bonita Springs',
    county: 'Lee County',
    cardBlurb:
      'Tax planning and advisory for Bonita Springs professionals, retirees, and small business owners.',
    metaTitle: 'Accountant & Tax Advisor in Bonita Springs, FL',
    metaDescription:
      'Tax planning, retirement-aware advice, and small business accounting for Bonita Springs, FL. Free consultation with a Florida-licensed CPA.',
    h1: 'Accountant & Tax Advisor in Bonita Springs, FL',
    subtitle:
      'Tax planning and advisory work for Bonita Springs professionals, retirees, and owner-run businesses.',
    introHeading: 'Where the Lee and Collier lines blur',
    intro: [
      'Bonita Springs sits on the county line, and its financial profile reflects that. It draws the professional and retiree population you would associate with Naples to the south, alongside the small-business and service economy of Lee County to the north. Plenty of residents work in one county and own property or a business in the other.',
      'The questions that follow are mostly about transition and timing. People arriving from the Midwest and Northeast need their residency change documented properly before a former state asks about it. Recent retirees face a genuinely consequential decision about the order in which they draw from taxable, tax-deferred, and Roth accounts. Owners who sold a business elsewhere and moved down have a basis and installment-sale question that is easier to handle before the closing than after.',
      'That is the work here: tax-aware planning around retirement income and relocation, compliance for people with income sourced in more than one state, and accounting and advisory support for the professional practices and small businesses operating along the corridor.',
    ],
    localAuthority: {
      title: 'Working in Bonita Springs',
      paragraphs: [
        'Bonita Springs businesses register with the Florida Division of Corporations and obtain a City of Bonita Springs business tax receipt, with a Lee County receipt where the activity requires one. Because the Collier line is minutes away, businesses serving both counties sometimes need registration in each — worth checking rather than assuming.',
        'For individuals, the recurring theme is residency. Establishing Florida domicile is not a single form; it is an accumulation of evidence — driver license, voter registration, homestead exemption, where you actually spend your days. States with income tax do review departures, and contemporaneous documentation is far stronger than a reconstruction two years later.',
      ],
      points: [
        'City of Bonita Springs and Lee County business tax receipts',
        'Florida domicile documentation for clients relocating from income-tax states',
        'Homestead exemption timing and its interaction with residency evidence',
        'Retirement withdrawal sequencing across taxable, deferred, and Roth accounts',
        'Multi-county registration for businesses serving both Lee and Collier',
      ],
    },
    faqs: [
      {
        q: 'I just moved to Bonita Springs. What should I do first?',
        a: 'Start documenting Florida domicile immediately rather than at tax time — license, voter registration, homestead, and a clear record of where you actually spend your days. Then have someone look at your final part-year return in the old state alongside your first Florida year. That pairing is where mistakes get made, and it is much easier to plan than to unwind.',
      },
      {
        q: 'Do you advise on retirement withdrawals?',
        a: 'On the tax side, yes. The order in which you draw from taxable, tax-deferred, and Roth accounts has a large cumulative effect, as do Roth conversion timing and the interaction with Social Security and Medicare thresholds. We do not manage investments — we work alongside whoever does, and handle the tax reasoning.',
      },
      {
        q: 'Are you close enough to meet in person?',
        a: 'Ave Maria is roughly a 40-minute drive from Bonita Springs, and we meet clients at the office by appointment. Most people find one or two in-person sessions a year is plenty, with the rest handled by video call and phone.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'estero-fl',
    city: 'Estero',
    county: 'Lee County',
    cardBlurb:
      'Accounting and fractional CFO support for growing Estero businesses and professional practices.',
    metaTitle: 'Accountant & Tax Advisor in Estero, FL',
    metaDescription:
      'Accounting, fractional CFO support, and tax planning for growing businesses and professional practices in Estero, FL. Free consultation.',
    h1: 'Accountant & Tax Advisor in Estero, FL',
    subtitle:
      'Accounting and CFO-level support for Estero businesses at the stage where the numbers need interpreting.',
    introHeading: 'A growth-stage village',
    intro: [
      'Estero has changed faster than almost anywhere else in Lee County. What was a quiet stretch between Fort Myers and Bonita Springs now carries a university, a major arena, substantial commercial development, and a steady arrival of professional practices and service businesses following the residential growth.',
      'Businesses in a market growing that quickly tend to hit the same wall. Revenue climbs, the owner hires, a second location or a bigger lease starts to look plausible — and the reporting that was adequate at half the size stops answering the questions being asked. Which service line actually carries the margin. Whether the cash will be there in four months. What a lender or a buyer would make of the numbers as they currently stand.',
      'That is where our fractional CFO work fits: forecasting, margin analysis, and a monthly reporting rhythm, sitting on top of bookkeeping that is genuinely reliable. Combined with year-round tax planning, growth decisions get made with the tax consequences already priced in rather than discovered the following April.',
    ],
    localAuthority: {
      title: 'Working in Estero',
      paragraphs: [
        'Estero businesses register with the Florida Division of Corporations and obtain a Village of Estero business tax receipt, plus a Lee County receipt where applicable. Professional practices carry the additional layer of state licensing boards, and practices structured as professional entities have specific requirements about ownership and naming that are worth confirming at formation rather than later.',
        'Growth-stage businesses also cross thresholds that change their obligations: the first employee triggers payroll tax registration and reemployment tax, crossing into other states creates nexus questions, and a lease or an equipment purchase can change the depreciation picture materially for the year.',
      ],
      points: [
        'Village of Estero and Lee County business tax receipts',
        'Professional entity formation and licensing-board coordination',
        'Payroll and reemployment tax registration at the first hire',
        'Nexus review when a growing business starts serving other states',
        'Depreciation and Section 179 planning around leases and equipment',
      ],
    },
    faqs: [
      {
        q: 'When does a business my size need a fractional CFO?',
        a: 'Usually when the questions outrun the reporting — you can see revenue growing but cannot explain where the cash goes, or a hire or expansion decision is on the table and the answer comes down to instinct. If your bookkeeping is solid and you still cannot answer those, that is the signal. If the bookkeeping is not solid, that comes first.',
      },
      {
        q: 'Do you work with professional practices?',
        a: 'Yes — medical, dental, legal, and consulting practices are a natural fit. The recurring issues are owner compensation versus distributions, retirement plan selection at partner income levels, and buy-in or buy-out mechanics when a partner joins or leaves. All three have significant tax consequences and are far easier to plan than to correct.',
      },
      {
        q: 'Can you take over from our current bookkeeper?',
        a: 'Yes, and mid-year transitions are routine. We review what has been recorded, reconcile it, correct what needs correcting, and pick up from there. If your bookkeeper is doing good work and you simply need strategy layered on top, that also works — we do not insist on displacing people who are doing their job well.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'marco-island-fl',
    city: 'Marco Island',
    county: 'Collier County',
    cardBlurb:
      'Estate, rental, and multi-state tax work for Marco Island residents and property owners.',
    metaTitle: 'Accountant & Tax Advisor in Marco Island, FL',
    metaDescription:
      'Estate, rental property, and multi-state tax planning for Marco Island, FL residents and second-home owners. Free consultation with a Florida CPA.',
    h1: 'Accountant & Tax Advisor in Marco Island, FL',
    subtitle:
      'Estate, rental, and multi-state tax work for Marco Island residents, second-home owners, and investors.',
    introHeading: 'Second homes, rentals, and two-state lives',
    intro: [
      'Marco Island has one of the highest concentrations of second homes and seasonal residents in Florida. A large share of the island is owned by people who spend part of the year here and part somewhere else, and who rent the property out during the months they are away.',
      'That combination produces three tax questions that almost always arrive together. Where are you actually a resident, and can you document it if the other state disagrees? How is the rental income reported, and are the short-term rental taxes being collected and remitted correctly? And how does a property held in a trust or an LLC, often set up years ago in another state, fit into an estate plan drafted under different rules?',
      'We handle all three as one connected picture. That means residency and domicile documentation, rental income and expense treatment including depreciation and the passive-activity rules, sales and tourist development tax compliance, and estate and trust tax work coordinated with your attorney.',
    ],
    localAuthority: {
      title: 'Working on Marco Island and in Collier County',
      paragraphs: [
        'Short-term rentals on Marco Island are subject to Florida sales tax and the Collier County tourist development tax, both filed separately from the income tax return. Rental activity conducted as a business generally also requires a City of Marco Island business tax receipt and a Collier County receipt. Owners who manage the property themselves rather than through an agency carry those filing obligations directly.',
        'On the estate side, Florida imposes no state estate or inheritance tax. That is a real advantage for owners arriving from states that impose both — but property still held in an out-of-state trust or LLC may not be positioned the way the current owner assumes, and a review after a move is usually worth the hour.',
      ],
      points: [
        'Florida sales tax and Collier County tourist development tax on short-term rentals',
        'City of Marco Island and Collier County business tax receipts for rental businesses',
        'Depreciation, passive activity, and personal-use day tracking on second homes',
        'Residency and domicile documentation for part-year residents',
        'Out-of-state trusts and LLCs reviewed against Florida estate tax treatment',
      ],
    },
    faqs: [
      {
        q: 'I rent my Marco Island home part of the year. What do I owe?',
        a: 'Income tax on the net rental profit, plus Florida sales tax and the Collier County tourist development tax on short-term stays. Those last two are separate registrations and separate recurring filings, and they are the ones owners most often miss. Personal-use days also matter: they change how expenses are allocated and can limit what is deductible.',
      },
      {
        q: 'My rental agency says they handle the taxes. Do they?',
        a: 'Sometimes, partially. Many agencies collect and remit sales and tourist tax on the bookings they handle — but not on bookings you take directly, and not the income tax side at all. It is worth confirming in writing exactly which filings they make in your name, because the liability remains yours regardless.',
      },
      {
        q: 'Do you handle estate planning for second-home owners?',
        a: 'The tax side of it, yes, coordinated with your estate attorney who drafts the documents. Property held across two states, an out-of-state trust, and a recent change of domicile are exactly the combination worth reviewing — plans drafted under another state’s regime often stop fitting once Florida becomes the home state.',
      },
    ],
  },

  /* ---------------------------------------------------------------- */
  {
    slug: 'immokalee-fl',
    city: 'Immokalee',
    county: 'Collier County',
    cardBlurb:
      'Agricultural, seasonal-payroll, and small business accounting minutes from our Ave Maria office.',
    metaTitle: 'Accountant & Tax Advisor in Immokalee, FL',
    metaDescription:
      'Agricultural accounting, seasonal payroll, and small business tax services in Immokalee, FL — minutes from our Ave Maria office.',
    h1: 'Accountant & Tax Advisor in Immokalee, FL',
    subtitle:
      'Agricultural accounting, seasonal payroll, and small business tax work — from the firm just down the road in Ave Maria.',
    introHeading: 'Our closest neighbors',
    intro: [
      'Immokalee is the nearest sizeable community to our Ave Maria office, and the economy there looks nothing like coastal Collier County. Agriculture anchors it — packing, produce, nurseries, ranching and the businesses that supply them — alongside a dense base of family-owned retail, food service, trucking, and construction firms.',
      'Agricultural and seasonal businesses carry accounting problems that general practices often handle badly. Income arrives in concentrated bursts tied to harvest rather than spread across the year, which makes estimated tax payments and cash planning genuinely difficult. Payroll can multiply severalfold in season and contract again, with the worker classification and reporting obligations that go with it. And there are farm-specific tax provisions — income averaging, particular depreciation treatment, crop and livestock rules — that only matter if someone is looking for them.',
      'Being ten minutes away helps. We handle bookkeeping and payroll for businesses with seasonal workforces, tax planning that works around a harvest calendar rather than a corporate one, and entity and succession work for family businesses being handed to the next generation.',
    ],
    localAuthority: {
      title: 'Working in Immokalee and eastern Collier County',
      paragraphs: [
        'Businesses in Immokalee register with the Florida Division of Corporations and obtain a Collier County business tax receipt. Agricultural operations may also qualify for the Florida agricultural classification on property — the greenbelt exemption — which is administered by the Collier County Property Appraiser and has real value where land is held for a bona fide commercial agricultural purpose.',
        'Employers with seasonal workforces have obligations that scale with headcount: reemployment tax, new-hire reporting, and correct classification of workers who may be hired through crew leaders or labor contractors. Misclassification is expensive, and it is one of the areas where enforcement is active.',
      ],
      points: [
        'Collier County business tax receipts and Division of Corporations filings',
        'Agricultural classification (greenbelt) and its property tax consequences',
        'Seasonal payroll, new-hire reporting, and worker classification',
        'Farm income averaging and agriculture-specific depreciation treatment',
        'Succession planning for family-owned agricultural businesses',
      ],
    },
    faqs: [
      {
        q: 'Do you work with agricultural businesses?',
        a: 'Yes. Farm accounting has its own rhythm and its own rules — income concentrated around harvest, inventory and crop treatment, specific depreciation provisions, and income averaging that can smooth a spike year. A general tax practice will file the return correctly and still leave provisions on the table simply because it is not looking for them.',
      },
      {
        q: 'How do estimated payments work when income is seasonal?',
        a: 'Not the way the default quarterly schedule assumes. Paying a flat quarter of an estimate when income has not arrived yet strains cash unnecessarily, and the annualized income installment method often produces a better result for seasonal businesses. It takes more work to compute, which is precisely why it frequently is not used.',
      },
      {
        q: 'How close is your office?',
        a: 'About ten minutes. We are in Ave Maria, which makes Immokalee our nearest community — in-person meetings are easy to arrange, and we are glad to visit the operation when seeing it makes the conversation more useful.',
      },
    ],
  },
];

export const areaBySlug = Object.fromEntries(areas.map((area) => [area.slug, area]));

/** The two markets the homepage and metadata lead with. */
export const primaryAreas = areas.filter((area) => area.primary);
