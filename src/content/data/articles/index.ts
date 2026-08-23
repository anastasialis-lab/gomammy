import type { Locale } from '@/lib/i18n/config';
import type { Article } from '@/lib/content/types';
import { generatedFor } from '@/content/generated';
import { enArticles } from './en';
import { deArticles } from './de';
import { itArticles } from './it';
import { esArticles } from './es';
import { ptArticles } from './pt';
import { frArticles } from './fr';
import { ukArticles } from './uk';

/**
 * Seed articles per locale. Each language is authored independently — the same
 * `translationKey` links the versions together for hreflang, but the copy,
 * slug, SEO fields and sources are written for that audience.
 *
 * Anything published in the CMS replaces the seed for that language.
 */
const byLocale: Record<Locale, Article[]> = {
  en: enArticles,
  de: deArticles,
  it: itArticles,
  es: esArticles,
  pt: ptArticles,
  fr: frArticles,
  uk: ukArticles,
};

export function getSeedArticles(locale: Locale): Article[] {
  return generatedFor('articles', locale) ?? byLocale[locale] ?? [];
}
