import Image from 'next/image';
import Link from 'next/link';
import { articleExcerpt, articlePath, formatArticleDate } from '@/lib/blog';

/** Card for one published article on the /blog index. Server component. */
export default function ArticleCard({ article }) {
  const href = articlePath(article.slug);
  const excerpt = articleExcerpt(article);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-navy/10 bg-white transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg">
      {article.hero_image_url ? (
        <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-video bg-navy-50">
          <Image
            src={article.hero_image_url}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <time
          dateTime={article.published_at}
          className="text-xs font-semibold uppercase tracking-wide text-gold-700"
        >
          {formatArticleDate(article.published_at, article.language)}
        </time>

        <h3 className="mt-3 text-lg leading-snug">
          <Link href={href} className="hover:text-gold-700">
            {article.title}
          </Link>
        </h3>

        {excerpt ? (
          <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-body">{excerpt}</p>
        ) : null}

        <div className="mt-6 border-t border-navy/10 pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-navy hover:text-gold-700"
          >
            Read article
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
