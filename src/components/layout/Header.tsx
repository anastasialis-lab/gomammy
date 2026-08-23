'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { BRAND } from '@/content/data/site';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchOverlay } from '@/components/search/SearchOverlay';

export type NavItem = { label: string; href: string };

export function Header({
  locale,
  dict,
  items,
}: {
  locale: Locale;
  dict: Dictionary;
  items: NavItem[];
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-ivory"
      >
        {dict.actions.skipToContent}
      </a>

      <header className="sticky top-0 z-40 border-b border-line-soft bg-ivory/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center justify-between gap-4">
          <Link href={`/${locale}`} className="flex shrink-0 items-center gap-2.5" aria-label={BRAND.name}>
            <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden>
              <circle cx="24" cy="24" r="24" fill="var(--color-rose-100)" />
              <path
                d="M13 32c0-6.2 3.1-10.4 7.6-10.4 3.3 0 5.6 2.2 6.4 5.6.8-3.4 3.1-5.6 6.4-5.6 4.5 0 7.6 4.2 7.6 10.4"
                fill="none"
                stroke="var(--color-rose-500)"
                strokeWidth="3.1"
                strokeLinecap="round"
              />
              <circle cx="24" cy="15.5" r="3.3" fill="var(--color-rose-500)" />
            </svg>
            <span className="font-serif text-[1.35rem] tracking-tight">{BRAND.name}</span>
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {items.map((item) => {
                const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      className={`rounded-full px-3 py-2 text-sm transition-colors hover:bg-ivory-deep ${
                        active ? 'font-semibold text-rose-700' : 'text-ink-soft'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={dict.actions.search}
              className="rounded-full border border-line p-2 transition-colors hover:border-ink"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M11 11l3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <LanguageSwitcher locale={locale} label={dict.nav.language} />

            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? dict.nav.closeMenu : dict.nav.menu}
              className="rounded-full border border-line p-2 transition-colors hover:border-ink lg:hidden"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden fill="none">
                {menuOpen ? (
                  <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                ) : (
                  <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="border-t border-line-soft bg-ivory lg:hidden"
          >
            <ul className="container-page grid gap-1 py-4">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-lg transition-colors hover:bg-ivory-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </header>

      <SearchOverlay
        locale={locale}
        dict={dict}
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
