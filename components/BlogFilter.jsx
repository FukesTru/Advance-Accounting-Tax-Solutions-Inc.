'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/posts';

export default function BlogFilter({ posts }) {
  const [active, setActive] = useState('All');

  const visible = useMemo(
    () => (active === 'All' ? posts : posts.filter((post) => post.category === active)),
    [active, posts]
  );

  return (
    <div>
      <div role="group" aria-label="Filter articles by category" className="flex flex-wrap gap-2">
        {['All', ...categories].map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(category)}
              className={`rounded-full border px-4 py-2 font-display text-sm font-semibold transition-colors ${
                isActive
                  ? 'border-navy bg-navy text-white'
                  : 'border-navy/20 bg-white text-navy hover:border-gold hover:text-gold-700'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-slate-body">
        Showing {visible.length} {visible.length === 1 ? 'article' : 'articles'}
        {active === 'All' ? '' : ` in ${active}`}.
      </p>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <li key={post.slug} className="h-full">
            <article className="flex h-full flex-col rounded-xl border border-navy/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full bg-navy-50 px-3 py-1 font-semibold uppercase tracking-wide text-navy">
                  {post.category}
                </span>
              </div>

              <h3 className="mt-4 text-lg leading-snug">{post.title}</h3>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">
                {post.excerpt}
              </p>

              <div className="mt-6 border-t border-navy/10 pt-4">
                <p className="text-xs text-slate-body">Article coming soon — in the meantime:</p>
                <Link
                  href={post.href}
                  className="group mt-1.5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-gold-700"
                >
                  {post.hrefLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
