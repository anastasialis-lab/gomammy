'use client';

import { useEffect, useRef, useState } from 'react';
import { LOCALES, LOCALE_NAMES, type Locale } from '@/lib/i18n/config';
import { track } from '@/lib/analytics/events';

/**
 * Reads the per-page hreflang links the server already rendered, so switching
 * language lands on the translated version of the same page rather than the
 * homepage. Locales without a translation fall back to their homepage.
 */
export function LanguageSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const [open, setOpen] = useState(false);
  const [targets, setTargets] = useState<Partial<Record<Locale, string>>>({});
  const container = useRef<HTMLDivElement>(null);

  /**
   * The translated URL of the current page is already in the document as
   * hreflang links, so the switcher reads them when it opens instead of
   * duplicating the routing logic on the client.
   */
  const openMenu = () => {
    const links = document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]');
    const next: Partial<Record<Locale, string>> = {};
    links.forEach((link) => {
      const tag = link.hreflang as Locale;
      if ((LOCALES as readonly string[]).includes(tag)) {
        next[tag] = new URL(link.href, window.location.origin).pathname;
      }
    });
    setTargets(next);
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const onClick = (event: MouseEvent) => {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={container} className="relative">
      <button
        type="button"
        onClick={() => (open ? setOpen(false) : openMenu())}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={label}
        className="tap-target flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-ink"
      >
        {locale}
        <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden fill="none">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {open ? (
        <ul
          role="menu"
          className="absolute right-0 z-40 mt-2 w-44 overflow-hidden rounded-lg border border-line bg-card py-1 shadow-[0_18px_40px_-24px_rgba(36,35,33,0.45)]"
        >
          {LOCALES.map((code) => (
            <li key={code} role="none">
              <a
                role="menuitem"
                href={targets[code] ?? `/${code}`}
                hrefLang={code}
                onClick={() => track('language_switch', { from: locale, to: code })}
                aria-current={code === locale ? 'true' : undefined}
                className={`flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-ivory ${
                  code === locale ? 'font-semibold text-rose-700' : ''
                }`}
              >
                {LOCALE_NAMES[code]}
                <span className="text-xs uppercase tracking-wider text-muted">{code}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
