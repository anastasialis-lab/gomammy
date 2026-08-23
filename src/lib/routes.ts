import type { Locale } from '@/lib/i18n/config';
import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n/config';
import type { AppProduct, Category, LegalPage } from '@/lib/content/types';
import {
  APPS_SLUG,
  appSlugsByLocale,
  articleSlugsByLocale,
  findAppBySlug,
  findCategory,
  findCategoryBySlug,
  getArticleBySlug,
  type ArticleWithMeta,
} from '@/lib/content/source';
import { categorySlugsByLocale } from '@/content/data/categories';
import {
  getLegalPage,
  getLegalPageBySlug,
  legalSlugsByLocale,
  type LegalKey,
} from '@/content/data/legal';
import { buildWeekPage, weekFromSlug, weekSlug } from '@/content/weeks';
import type { WeekPage } from '@/lib/content/types';

/* ------------------------------------------------------------------ */
/* Path builders                                                       */
/* ------------------------------------------------------------------ */

function join(locale: Locale, ...segments: string[]): string {
  return `/${[locale, ...segments.filter(Boolean)].join('/')}`;
}

export const routes = {
  home: (locale: Locale) => `/${locale}`,
  search: (locale: Locale) => join(locale, 'search'),
  category: (locale: Locale, category: Pick<Category, 'slug'>) => join(locale, category.slug),
  categoryByKey: (locale: Locale, key: string) => {
    const category = findCategory(locale, key);
    return category ? join(locale, category.slug) : `/${locale}`;
  },
  article: (locale: Locale, article: Pick<ArticleWithMeta, 'slug' | 'categoryKey'>) => {
    const category = findCategory(locale, article.categoryKey);
    return join(locale, category?.slug ?? '', article.slug);
  },
  week: (locale: Locale, week: number) => {
    const category = findCategory(locale, 'by-week');
    return join(locale, category?.slug ?? '', weekSlug(locale, week));
  },
  apps: (locale: Locale) => join(locale, APPS_SLUG[locale]),
  app: (locale: Locale, app: Pick<AppProduct, 'slug'>) => join(locale, APPS_SLUG[locale], app.slug),
  legal: (locale: Locale, key: LegalKey) => join(locale, getLegalPage(locale, key).slug),
} as const;

/* ------------------------------------------------------------------ */
/* Resolver                                                            */
/* ------------------------------------------------------------------ */

export type ResolvedRoute =
  | { kind: 'category'; category: Category }
  | { kind: 'week-index'; category: Category }
  | { kind: 'week'; category: Category; page: WeekPage }
  | { kind: 'article'; category: Category; article: ArticleWithMeta }
  | { kind: 'apps-index' }
  | { kind: 'app'; app: AppProduct }
  | { kind: 'legal'; page: LegalPage };

/**
 * Maps a locale-relative path onto a page. Everything below `/{locale}/` goes
 * through here, so localised slugs stay entirely in the content layer and the
 * route files never hard-code an English segment.
 */
export function resolveRoute(locale: Locale, segments: string[]): ResolvedRoute | null {
  if (segments.length === 0 || segments.length > 2) return null;
  const [first, second] = segments;

  if (first === APPS_SLUG[locale]) {
    if (!second) return { kind: 'apps-index' };
    const app = findAppBySlug(locale, second);
    return app ? { kind: 'app', app } : null;
  }

  const category = findCategoryBySlug(locale, first);
  if (category) {
    if (!second) {
      return category.isWeekIndex
        ? { kind: 'week-index', category }
        : { kind: 'category', category };
    }
    if (category.isWeekIndex) {
      const week = weekFromSlug(locale, second);
      if (week === null) return null;
      const page = buildWeekPage(locale, week);
      return page ? { kind: 'week', category, page } : null;
    }
    const article = getArticleBySlug(locale, second);
    if (article && article.categoryKey === category.translationKey) {
      return { kind: 'article', category, article };
    }
    return null;
  }

  if (!second) {
    const legal = getLegalPageBySlug(locale, first);
    if (legal) return { kind: 'legal', page: legal };
  }

  return null;
}

/* ------------------------------------------------------------------ */
/* hreflang alternates                                                 */
/* ------------------------------------------------------------------ */

export type Alternates = Partial<Record<Locale, string>>;

function everyLocale(build: (locale: Locale) => string): Alternates {
  return Object.fromEntries(LOCALES.map((locale) => [locale, build(locale)]));
}

/**
 * The path of the same page in each language. Pages that do not exist in a
 * language are simply left out, so hreflang never points at a 404.
 */
export function alternatesFor(route: ResolvedRoute | 'home' | 'search'): Alternates {
  if (route === 'home') return everyLocale((locale) => `/${locale}`);
  if (route === 'search') return everyLocale((locale) => routes.search(locale));

  switch (route.kind) {
    case 'category':
    case 'week-index': {
      const slugs = categorySlugsByLocale(route.category.translationKey);
      return everyLocale((locale) => `/${locale}/${slugs[locale]}`);
    }
    case 'week': {
      const slugs = categorySlugsByLocale('by-week');
      return everyLocale(
        (locale) => `/${locale}/${slugs[locale]}/${weekSlug(locale, route.page.week)}`,
      );
    }
    case 'article': {
      const categorySlugs = categorySlugsByLocale(route.article.categoryKey);
      const articleSlugs = articleSlugsByLocale(route.article.translationKey);
      const alternates: Alternates = {};
      for (const locale of LOCALES) {
        const slug = articleSlugs[locale];
        if (slug) alternates[locale] = `/${locale}/${categorySlugs[locale]}/${slug}`;
      }
      return alternates;
    }
    case 'apps-index':
      return everyLocale((locale) => routes.apps(locale));
    case 'app': {
      const slugs = appSlugsByLocale(route.app.translationKey);
      return everyLocale((locale) => `/${locale}/${APPS_SLUG[locale]}/${slugs[locale]}`);
    }
    case 'legal': {
      const slugs = legalSlugsByLocale(route.page.translationKey as LegalKey);
      return everyLocale((locale) => `/${locale}/${slugs[locale]}`);
    }
  }
}

/** The locale used for `hreflang="x-default"`. */
export function xDefaultPath(alternates: Alternates): string | undefined {
  return alternates[DEFAULT_LOCALE] ?? Object.values(alternates)[0];
}

/**
 * Rewrites a CMS-authored href. `category:<key>` and `app:<key>` keep internal
 * links locale-correct without the editor knowing every localised slug.
 */
export function resolveHref(locale: Locale, href: string): string {
  if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:')) {
    return href;
  }
  if (href.startsWith('category:')) return routes.categoryByKey(locale, href.slice(9));
  if (href.startsWith('app:')) {
    const app = findAppBySlug(locale, href.slice(4));
    return app ? routes.app(locale, app) : routes.apps(locale);
  }
  if (href.startsWith('week:')) return routes.week(locale, Number(href.slice(5)));
  if (href.startsWith('/')) return href;
  return `/${locale}/${href}`;
}
