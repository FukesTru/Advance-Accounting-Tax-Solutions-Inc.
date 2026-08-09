import Link from 'next/link';
import { Button, Container } from '@/components/primitives';
import { serviceCategories, site } from '@/lib/site';

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-gold-700">
          404
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl">We could not find that page</h1>
        <p className="mt-5 text-lg leading-relaxed text-slate-body">
          The link may be out of date, or the page may have moved. Here is where most people are
          headed.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/" variant="navy">
            Back to home
          </Button>
          <Button href="/contact" variant="gold">
            Schedule a Free Consultation
          </Button>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {serviceCategories.map((category) => (
            <li key={category.slug}>
              <Link
                href={category.slug}
                className="block rounded-lg border border-navy/10 bg-shell px-5 py-4 font-display text-sm font-bold text-navy hover:border-gold/50 hover:text-gold-700"
              >
                {category.title}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/about"
              className="block rounded-lg border border-navy/10 bg-shell px-5 py-4 font-display text-sm font-bold text-navy hover:border-gold/50 hover:text-gold-700"
            >
              About {site.owner}
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
