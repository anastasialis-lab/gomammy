/**
 * Locale configuration.
 *
 * Every public URL is prefixed with a locale segment (`/en/…`, `/de/…`) so each
 * language version has its own indexable URL, as recommended for hreflang.
 * `x-default` points at DEFAULT_LOCALE.
 */

export const LOCALES = ['en', 'de', 'it', 'es', 'pt', 'fr', 'uk'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** BCP-47 tags used in `hreflang`, `<html lang>` and Open Graph `og:locale`. */
export const LOCALE_TAGS: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  it: 'it',
  es: 'es',
  pt: 'pt',
  fr: 'fr',
  uk: 'uk',
};

export const OG_LOCALES: Record<Locale, string> = {
  en: 'en_US',
  de: 'de_DE',
  it: 'it_IT',
  es: 'es_ES',
  pt: 'pt_PT',
  fr: 'fr_FR',
  uk: 'uk_UA',
};

/** Endonyms — the language name written in its own language. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  uk: 'Українська',
};

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Picks the best locale for an `Accept-Language` header.
 * Falls back to DEFAULT_LOCALE — never guesses from IP.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return DEFAULT_LOCALE;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith('q='));
      return { tag: tag.toLowerCase(), q: q ? Number(q.slice(2)) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return DEFAULT_LOCALE;
}
