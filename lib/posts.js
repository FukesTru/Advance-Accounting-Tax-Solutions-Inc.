/**
 * Blog index entries.
 *
 * These are the five starter topics from the content plan. Individual article
 * pages are not part of the 20-page sitemap yet — each card links to the most
 * relevant service page until the article itself is written, so no card is a
 * dead end.
 *
 * No publication date or read time is shown: the articles are not written, so
 * any date here would be invented. Add both alongside the real article.
 *
 * TODO(client): draft the articles, then point `href` at /blog/<slug>.
 */

export const categories = ['Tax Planning', 'Accounting', 'Business Advisory'];

export const posts = [
  {
    slug: 'tax-planning-vs-tax-preparation',
    title: "Tax Planning vs. Tax Preparation: What's the Difference (and Why It Matters)",
    category: 'Tax Planning',
    excerpt:
      'Preparation records what already happened. Planning changes what happens next. Here is where the two split, and why business owners who only do one of them tend to overpay.',
    href: '/tax-services/tax-planning',
    hrefLabel: 'Tax Planning',
  },
  {
    slug: 'when-to-consider-a-fractional-cfo',
    title: 'When Should a Small Business Consider a Fractional CFO?',
    category: 'Accounting',
    excerpt:
      'Clean bookkeeping tells you what happened last month. A CFO tells you what to do about it. The signals that you have outgrown reporting alone.',
    href: '/accounting-cfo-services/fractional-cfo-services',
    hrefLabel: 'Fractional CFO Services',
  },
  {
    slug: 'llc-vs-s-corp-florida',
    title: 'LLC vs. S-Corp in Florida: Which Is Right for Your Business?',
    category: 'Business Advisory',
    excerpt:
      'Florida has no personal income tax, which changes the math on an S-corp election. What the choice really hinges on: payroll, profit level, and your growth plan.',
    href: '/business-advisory-services/entity-design-and-formation',
    hrefLabel: 'Entity Design & Formation',
  },
  {
    slug: 'year-end-tax-moves-florida-business-owners',
    title: "Year-End Tax Moves Florida Business Owners Shouldn't Skip",
    category: 'Tax Planning',
    excerpt:
      'Most of the levers that lower a tax bill close on December 31. A short checklist to run in Q4 while there is still time to act on it.',
    href: '/tax-services/tax-planning',
    hrefLabel: 'Tax Planning',
  },
  {
    slug: 'entity-formation-mistakes',
    title: 'What New Business Owners Get Wrong About Entity Formation',
    category: 'Business Advisory',
    excerpt:
      'Filing the paperwork is the easy part. The expensive mistakes happen in what comes after: elections, ownership splits, and books that never got separated.',
    href: '/business-advisory-services/entity-design-and-formation',
    hrefLabel: 'Entity Design & Formation',
  },
];
