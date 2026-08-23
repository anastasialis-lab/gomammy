import type { Locale } from '@/lib/i18n/config';
import type { AppProduct, Article, Category, CtaBlock, LegalPage } from '@/lib/content/types';

/**
 * Content pulled from the CMS at build time.
 *
 * `npm run content:pull` overwrites this file with everything published in
 * Sanity. It is committed empty so the site builds — and looks complete — with
 * no CMS connected, and so a failed pull can never silently ship a blank site.
 *
 * Build-time pull rather than request-time fetching is deliberate: every page
 * stays static HTML, which is what keeps LCP low on the mobile traffic this
 * site is built for. Re-deploy on a Sanity webhook to publish.
 */
export type GeneratedContent = {
  generatedAt: string;
  articles: Partial<Record<Locale, Article[]>>;
  categories: Partial<Record<Locale, Category[]>>;
  ctas: Partial<Record<Locale, CtaBlock[]>>;
  apps: Partial<Record<Locale, AppProduct[]>>;
  legal: Partial<Record<Locale, LegalPage[]>>;
};

export const GENERATED: GeneratedContent = {
  generatedAt: '',
  articles: {},
  categories: {},
  ctas: {},
  apps: {},
  legal: {},
};

/** Returns CMS content for a locale, or null to fall back to the seed data. */
export function generatedFor<K extends keyof Omit<GeneratedContent, 'generatedAt'>>(
  kind: K,
  locale: Locale,
): NonNullable<GeneratedContent[K][Locale]> | null {
  const bucket = GENERATED[kind][locale];
  return bucket && bucket.length > 0
    ? (bucket as NonNullable<GeneratedContent[K][Locale]>)
    : null;
}
