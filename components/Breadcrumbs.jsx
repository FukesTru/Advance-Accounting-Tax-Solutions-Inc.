import Link from 'next/link';
import { Container } from '@/components/primitives';

/**
 * Breadcrumb bar for every inner page.
 * @param {{trail: {name: string, href: string}[]}} props last item = current page
 */
export default function Breadcrumbs({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy/10 bg-shell">
      <Container>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 text-[0.8rem] text-slate-body">
          <li>
            <Link href="/" className="hover:text-navy hover:underline">
              Home
            </Link>
          </li>
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-navy/30">
                  /
                </span>
                {isLast ? (
                  <span aria-current="page" className="font-semibold text-navy">
                    {crumb.name}
                  </span>
                ) : (
                  <Link href={crumb.href} className="hover:text-navy hover:underline">
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
