import Breadcrumbs from '@/components/Breadcrumbs';
import FadeIn from '@/components/FadeIn';
import JsonLd from '@/components/JsonLd';
import { Icon } from '@/components/Icons';
import { Button, Section, SectionHeading } from '@/components/primitives';
import { CTABanner, PageHero, RelatedLinks } from '@/components/sections';
import { aggregateRatingSchema, breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { reviewSummary, testimonials } from '@/lib/testimonials';

export const metadata = buildMetadata({
  title: 'Client Reviews & Testimonials',
  description:
    'See what individuals and business owners say about working with Advance Accounting & Tax Solutions, Inc. in Fort Myers, Naples, and across Florida.',
  path: '/testimonials',
});

const breadcrumb = [{ name: 'Client Reviews', href: '/testimonials' }];

const related = [
  { href: '/', title: 'Home', text: 'How the firm works and who we help.' },
  { href: '/about', title: 'About Joseph', text: 'Meet the person doing the work.' },
  { href: '/tax-services', title: 'Tax Services', text: 'Planning, compliance, and estate work.' },
  { href: '/contact', title: 'Contact', text: 'Book a free consultation.' },
];

export default function TestimonialsPage() {
  return (
    <>
      {/*
        TODO(client): the AggregateRating below is a placeholder and MUST be
        replaced with verified Google Business Profile data before launch —
        publishing an invented rating violates Google's review policies and
        risks a structured-data penalty. Delete this schema block entirely if
        real reviews are not yet available at launch.
      */}
      <JsonLd
        data={[
          aggregateRatingSchema({ ratingValue: reviewSummary.rating, reviewCount: 1 }),
          breadcrumbSchema(breadcrumb),
        ]}
      />
      <Breadcrumbs trail={breadcrumb} />

      <PageHero
        eyebrow="Client Reviews"
        title="What Our Clients Say"
        subtitle="Reviews from individuals and business owners across Southwest Florida — and a standing invitation to add yours."
      >
        <Button href={site.googleReviewUrl} variant="gold" target="_blank" rel="noopener noreferrer">
          Leave a Review on Google
        </Button>
        <Button href="/contact" variant="outline">
          Schedule a Free Consultation
        </Button>
      </PageHero>

      {/* Rating summary */}
      <Section>
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-navy/10 bg-shell p-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-5">
              <span className="font-display text-5xl font-extrabold text-navy">
                {reviewSummary.rating}
              </span>
              <div>
                <div aria-hidden="true" className="flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} name="star" className="h-5 w-5" />
                  ))}
                </div>
                <p className="mt-1.5 text-sm text-slate-body">
                  {reviewSummary.source} · {reviewSummary.note}
                </p>
              </div>
            </div>
            <Button href={site.googleReviewUrl} variant="navy" target="_blank" rel="noopener noreferrer">
              Write a Review
            </Button>
          </div>
        </FadeIn>
      </Section>

      {/* Review grid */}
      <Section tone="shell">
        <SectionHeading
          eyebrow="Testimonials"
          title="In our clients' words"
          intro="Placeholder reviews are shown below while the firm's Google Business Profile reviews are being collected. Each will be replaced with a verified review before launch."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, index) => (
            <FadeIn key={review.quote.slice(0, 30)} delay={(index % 3) * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7">
                <div className="flex items-center justify-between">
                  <div aria-hidden="true" className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Icon key={starIndex} name="star" className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="rounded-full bg-navy-50 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-wide text-navy">
                    {review.service}
                  </span>
                </div>
                <blockquote className="mt-5 flex-1 leading-relaxed text-charcoal">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-navy/10 pt-4 text-sm">
                  <span className="block font-display font-bold text-navy">{review.name}</span>
                  <span className="text-slate-body">{review.detail}</span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={120}>
          <div className="mt-12 rounded-2xl border border-gold/40 bg-gold-50 p-8 text-center">
            <h2 className="text-2xl">Worked with us? We would appreciate a review.</h2>
            <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-slate-body">
              Reviews from real clients are how other business owners in Fort Myers and Naples find
              us. It takes about a minute.
            </p>
            <div className="mt-6 flex justify-center">
              <Button href={site.googleReviewUrl} variant="navy" target="_blank" rel="noopener noreferrer">
                Leave a Review on Google
              </Button>
            </div>
          </div>
        </FadeIn>
      </Section>

      <RelatedLinks links={related} title="Explore the firm" />

      <CTABanner />
    </>
  );
}
