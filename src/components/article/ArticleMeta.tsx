import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Author, Source } from '@/lib/content/types';

export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(iso));
}

export function ArticleMeta({
  locale,
  dict,
  author,
  reviewer,
  publishedAt,
  updatedAt,
  readingMinutes,
}: {
  locale: Locale;
  dict: Dictionary;
  author?: Author;
  reviewer?: Author;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-y border-line-soft py-4 text-sm text-muted">
      {author ? (
        <span className="flex items-center gap-2.5">
          {author.avatar ? (
            <Image
              src={author.avatar.src}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-rose-100 object-cover"
            />
          ) : null}
          <span>
            <span className="text-ink">{dict.article.writtenBy} </span>
            {author.role}
          </span>
        </span>
      ) : null}

      {reviewer ? (
        <span className="flex items-center gap-2.5">
          {reviewer.avatar ? (
            <Image
              src={reviewer.avatar.src}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 rounded-full border border-sage-100 object-cover"
            />
          ) : null}
          <span>
            <span className="text-ink">{dict.article.reviewedBy} </span>
            {reviewer.role}
          </span>
        </span>
      ) : null}

      <span>
        {dict.article.updatedOn}{' '}
        <time dateTime={updatedAt}>{formatDate(locale, updatedAt)}</time>
      </span>

      <span className="sr-only">
        {dict.article.publishedOn} <time dateTime={publishedAt}>{formatDate(locale, publishedAt)}</time>
      </span>

      <span>
        {readingMinutes} {dict.article.minRead}
      </span>
    </div>
  );
}

export function Sources({
  sources,
  title,
  disclaimer,
}: {
  sources: Source[];
  title: string;
  disclaimer: string;
}) {
  return (
    <section className="mt-16 rounded-lg bg-ivory-deep/60 p-6">
      {sources.length > 0 ? (
        <>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">{title}</h2>
          <ul className="mt-3 grid gap-2 text-sm">
            {sources.map((source) => (
              <li key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="link-underline"
                >
                  {source.publisher} — {source.label}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      <p className="mt-4 text-xs leading-relaxed text-muted">{disclaimer}</p>
    </section>
  );
}
