'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { t } from '@/lib/i18n/dictionaries';
import { track } from '@/lib/analytics/events';

export type SearchDoc = {
  id: string;
  type: 'article' | 'category' | 'week' | 'app';
  title: string;
  description: string;
  category: string;
  href: string;
  keywords: string;
};

export function searchDocs(docs: SearchDoc[], query: string, limit = 12): SearchDoc[] {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return [];
  const terms = needle.split(/\s+/);

  return docs
    .map((doc) => {
      const haystack = `${doc.title} ${doc.description} ${doc.keywords}`.toLowerCase();
      const title = doc.title.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (!haystack.includes(term)) return { doc, score: -1 };
        if (title.startsWith(term)) score += 6;
        else if (title.includes(term)) score += 4;
        else score += 1;
      }
      if (doc.type === 'article') score += 1;
      return { doc, score };
    })
    .filter((entry) => entry.score >= 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.doc);
}

export function SearchOverlay({
  locale,
  dict,
  open,
  onClose,
}: {
  locale: Locale;
  dict: Dictionary;
  open: boolean;
  onClose: () => void;
}) {
  const [docs, setDocs] = useState<SearchDoc[] | null>(null);
  const [query, setQuery] = useState('');
  const input = useRef<HTMLInputElement>(null);

  const load = useCallback(async () => {
    if (docs) return;
    const response = await fetch(`/api/search-index/${locale}`);
    if (response.ok) setDocs((await response.json()) as SearchDoc[]);
  }, [docs, locale]);

  useEffect(() => {
    if (!open) return;
    input.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [load, onClose, open]);

  const results = useMemo(() => searchDocs(docs ?? [], query), [docs, query]);

  useEffect(() => {
    if (query.trim().length < 3) return;
    const timer = setTimeout(() => {
      track('site_search', { search_term: query.trim(), results: results.length });
    }, 900);
    return () => clearTimeout(timer);
  }, [query, results.length]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={dict.actions.search}
      className="fixed inset-0 z-50 bg-ivory/95 backdrop-blur-sm"
    >
      <div className="container-page py-5">
        <div className="flex items-center gap-3">
          <input
            ref={input}
            type="search"
            value={query}
            onFocus={() => void load()}
            onChange={(event) => {
              void load();
              setQuery(event.target.value);
            }}
            placeholder={dict.actions.searchPlaceholder}
            aria-label={dict.actions.search}
            className="w-full rounded-full border border-line bg-card px-5 py-3 text-base outline-none placeholder:text-muted focus-visible:border-rose-400"
          />
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full border border-line px-4 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            {dict.actions.close}
          </button>
        </div>

        <div className="mt-6 max-h-[70vh] overflow-y-auto pb-10">
          {query.trim().length < 2 ? (
            <p className="text-sm text-muted">{dict.search.typeToSearch}</p>
          ) : results.length === 0 ? (
            <p className="text-sm text-muted">{dict.search.noResults}</p>
          ) : (
            <>
              <p className="mb-3 text-xs uppercase tracking-wider text-muted">
                {t(dict.search.resultsCount, { n: results.length })}
              </p>
              <ul className="grid gap-2">
                {results.map((doc) => (
                  <li key={doc.id}>
                    <Link
                      href={doc.href}
                      onClick={onClose}
                      className="block rounded-md border border-transparent bg-card px-4 py-3 transition-colors hover:border-line"
                    >
                      <span className="eyebrow">{doc.category}</span>
                      <span className="mt-1 block font-serif text-lg">{doc.title}</span>
                      <span className="mt-0.5 block text-sm text-muted">{doc.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
