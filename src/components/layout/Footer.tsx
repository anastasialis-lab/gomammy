'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { BRAND } from '@/content/data/site';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { CookieSettingsLink } from '@/components/consent/CookieBanner';
import type { NavItem } from './Header';

export function Footer({
  locale,
  dict,
  explore,
  legal,
}: {
  locale: Locale;
  dict: Dictionary;
  explore: NavItem[];
  legal: NavItem[];
}) {
  return (
    <footer className="mt-24 border-t border-line-soft bg-ivory-deep/60">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href={`/${locale}`} className="inline-flex" aria-label={BRAND.name}>
            <Image
              src="/brand/logo-stacked.webp"
              alt={BRAND.name}
              width={900}
              height={932}
              className="h-auto w-44"
            />
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">{dict.footer.tagline}</p>
        </div>

        <nav aria-label={dict.footer.explore}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            {dict.footer.explore}
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {explore.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.legal}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            {dict.footer.legal}
          </h2>
          <ul className="mt-4 grid gap-2 text-sm">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink label={dict.cookies.manageLink} />
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line-soft">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl">{dict.footer.disclaimer}</p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {BRAND.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
