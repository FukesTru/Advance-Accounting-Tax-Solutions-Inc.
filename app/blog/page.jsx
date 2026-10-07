import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import Media from '@/components/Media';
import { Button, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks } from '@/components/sections';
import { getPublishedArticles } from '@/lib/blog';
import { images } from '@/lib/images';
import { blogSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { serviceCategories } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Tax & Accounting Insights',
  description:
    'Practical tax planning, accounting, and business advisory insights from Advance Accounting & Tax Solutions, Inc. for Florida business owners.',
  path: '/blog',
});

// Articles arrive through the RankGPT webhook, which purges this page the
// moment one lands. The interval is only a safety net.
export const revalidate = 300;

const breadcrumb = [{ name: 'Blog', href: '/blog' }];

const related = [
  {
    href: '/tax-services/tax-planning',
    title: 'Tax Planning',
    text: 'The service behind most of these articles.',
  },
  {
    href: '/accounting-cfo-services/fractional-cfo-services',
    title: 'Fractional CFO Services',
    text: 'Strategy for growing businesses.',
  },
  {
    href: '/business-advisory-services/entity-design-and-formation',
    title: 'Entity Design & Formation',
    text: 'LLC vs. S-corp, answered properly.',
  },
  { href: '/contact', title: 'Contact', text: 'Ask about your specific situation.' },
];

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <JsonLd data={[blogSchema(articles), breadcrumbSchema(breadcrumb)]} />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Insights"
        title="Tax & Accounting Insights"
        subtitle="Practical answers to the questions Florida business owners and individuals actually ask — without the jargon."
      >
        <Button href="/contact" variant="gold">
          Ask Us Your Question
        </Button>
      </PageHero>

      <Section>
        <FadeIn>
          <SectionHeading
            eyebrow="Articles"
            title="Written for owners, not accountants"
            intro={
              articles.length
                ? 'The questions Florida business owners and individuals raise most often, answered in plain English. Newest first.'
                : 'The first articles are on their way. In the meantime, every service page covers its topic in detail — and a free consultation answers the question that matters most: yours.'
            }
          />
        </FadeIn>

        {articles.length ? (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <FadeIn key={article.id} as="li" delay={(index % 3) * 80} className="h-full">
                <ArticleCard article={article} />
              </FadeIn>
            ))}
          </ul>
        ) : (
          <FadeIn>
            <ul className="mt-10 grid gap-4 sm:grid-cols-3">
              {serviceCategories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={category.slug}
                    className="block h-full rounded-xl border border-navy/10 bg-shell px-6 py-5 font-display text-[0.98rem] font-bold text-navy transition-colors hover:border-gold/50 hover:text-gold-700"
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeIn>
        )}
      </Section>

      <Section tone="shell">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <FadeIn>
            <Media image={images.workingOnline} sizes="(max-width: 1024px) 100vw, 45vw" />
          </FadeIn>
          <FadeIn delay={120}>
            <SectionHeading
              eyebrow="Subscribe"
              title="Have a question specific to your situation?"
              intro="General articles only take you so far. Most tax questions turn on details that are unique to you — your entity, your profit level, your state, your timeline. A free consultation gets you an answer about your actual situation rather than a general one."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" variant="gold">
                Schedule a Free Consultation
              </Button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border-2 border-navy/20 px-6 py-3.5 font-display text-sm font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
              >
                About the firm
              </Link>
            </div>
          </FadeIn>
        </div>
      </Section>

      <RelatedLinks links={related} title="Related services" />

      <CTABanner />
    </>
  );
}
