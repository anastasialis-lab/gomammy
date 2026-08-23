'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { t } from '@/lib/i18n/dictionaries';
import { searchDocs, type SearchDoc } from '@/components/search/SearchOverlay';

export function SearchClient({
  docs,
  dict,
  initialQuery,
}: {
  docs: SearchDoc[];
  dict: Dictionary;
  initialQuery: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const results = useMemo(() => searchDocs(docs, query, 30), [docs, query]);

  return (
    <div className="mt-8">
      <label htmlFor="site-search" className="sr-only">
        {dict.actions.search}
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        autoFocus
        onChange={(event) => setQuery(event.target.value)}
        placeholder={dict.search.placeholder}
        className="w-full max-w-measure rounded-full border border-line bg-card px-5 py-3.5 text-base outline-none placeholder:text-muted focus-visible:border-rose-400"
      />

      <div className="mt-8">
        {query.trim().length < 2 ? (
          <p className="text-sm text-muted">{dict.search.typeToSearch}</p>
        ) : results.length === 0 ? (
          <p className="text-sm text-muted">{dict.search.noResults}</p>
        ) : (
          <>
            <p className="text-xs uppercase tracking-wider text-muted">
              {t(dict.search.resultsCount, { n: results.length })}
            </p>
            <ul className="mt-5 grid gap-3">
              {results.map((doc) => (
                <li key={doc.id}>
                  <Link
                    href={doc.href}
                    className="block rounded-md border border-line-soft bg-card px-5 py-4 transition-colors hover:border-rose-200"
                  >
                    <span className="eyebrow">{doc.category}</span>
                    <span className="mt-1 block font-serif text-xl">{doc.title}</span>
                    {doc.description ? (
                      <span className="mt-1 block text-sm text-muted">{doc.description}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
