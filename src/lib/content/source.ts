import type { Locale } from '@/lib/i18n/config';
import { LOCALES } from '@/lib/i18n/config';
import type {
  AppProduct,
  Article,
  Author,
  Category,
  CtaBlock,
  SiteSettings,
  Tag,
} from './types';
import { getCategories, getCategory, getCategoryBySlug, APPS_SLUG } from '@/content/data/categories';
import { getApps, getApp, getAppBySlug, appSlugsByLocale } from '@/content/data/apps';
import { getCtas, getCta } from '@/content/data/ctas';
import { getTags, getTag } from '@/content/data/tags';
import { getAuthor, getAuthors, getSiteSettings } from '@/content/data/site';
import { getSeedArticles } from '@/content/data/articles';
import { readingMinutes } from '@/content/data/articles/helpers';

export type ArticleWithMeta = Article & { readingMinutes: number };

function withMeta(article: Article): ArticleWithMeta {
  return {
    ...article,
    readingMinutes: readingMinutes(
      article.blocks,
      `${article.intro} ${article.faq.map((f) => `${f.question} ${f.answer}`).join(' ')}`,
    ),
  };
}

/** Only published items are ever returned to the public site. */
function isLive(article: Article): boolean {
  if (article.status !== 'published') return false;
  return new Date(article.publishedAt).getTime() <= Date.now();
}

export function listArticles(locale: Locale): ArticleWithMeta[] {
  return getSeedArticles(locale)
    .filter(isLive)
    .map(withMeta)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function listArticlesByCategory(locale: Locale, categoryKey: string): ArticleWithMeta[] {
  return listArticles(locale).filter((article) => article.categoryKey === categoryKey);
}

export function getArticleBySlug(locale: Locale, slug: string): ArticleWithMeta | undefined {
  return listArticles(locale).find((article) => article.slug === slug);
}

export function getArticleByKey(locale: Locale, key: string): ArticleWithMeta | undefined {
  return listArticles(locale).find((article) => article.translationKey === key);
}

/** Slug of the same article in every locale where a translation exists. */
export function articleSlugsByLocale(key: string): Partial<Record<Locale, string>> {
  const entries = LOCALES.map((locale) => {
    const article = getArticleByKey(locale, key);
    return article ? ([locale, article.slug] as const) : null;
  }).filter((entry): entry is readonly [Locale, string] => entry !== null);
  return Object.fromEntries(entries);
}

export function getFeaturedArticle(locale: Locale): ArticleWithMeta | undefined {
  const articles = listArticles(locale);
  return articles.find((article) => article.featured) ?? articles[0];
}

/**
 * Related articles: manual links from the CMS first, then same category, then
 * shared tags. Always returns at most `limit` items and never the article itself.
 */
export function getRelatedArticles(
  locale: Locale,
  article: ArticleWithMeta,
  limit = 3,
): ArticleWithMeta[] {
  const pool = listArticles(locale).filter((item) => item.translationKey !== article.translationKey);
  const picked: ArticleWithMeta[] = [];

  const add = (candidate?: ArticleWithMeta) => {
    if (!candidate) return;
    if (picked.length >= limit) return;
    if (picked.some((item) => item.translationKey === candidate.translationKey)) return;
    picked.push(candidate);
  };

  article.relatedKeys.forEach((key) => add(pool.find((item) => item.translationKey === key)));
  pool.filter((item) => item.categoryKey === article.categoryKey).forEach(add);
  pool
    .filter((item) => item.tagKeys.some((tag) => article.tagKeys.includes(tag)))
    .forEach(add);

  return picked;
}

export function listCategories(locale: Locale): Category[] {
  return getCategories(locale);
}

export function findCategory(locale: Locale, key: string): Category | undefined {
  return getCategory(locale, key);
}

export function findCategoryBySlug(locale: Locale, slug: string): Category | undefined {
  return getCategoryBySlug(locale, slug);
}

export function listApps(locale: Locale): AppProduct[] {
  return getApps(locale);
}

export function findApp(locale: Locale, key: string): AppProduct | undefined {
  return getApp(locale, key);
}

export function findAppBySlug(locale: Locale, slug: string): AppProduct | undefined {
  return getAppBySlug(locale, slug);
}

export function listCtas(locale: Locale): CtaBlock[] {
  return getCtas(locale);
}

export function findCta(locale: Locale, id: string): CtaBlock | undefined {
  return getCta(locale, id);
}

export function listTags(locale: Locale): Tag[] {
  return getTags(locale);
}

export function findTag(locale: Locale, key: string): Tag | undefined {
  return getTag(locale, key);
}

export function listAuthors(locale: Locale): Author[] {
  return getAuthors(locale);
}

export function findAuthor(locale: Locale, id: string): Author | undefined {
  return getAuthor(locale, id);
}

export function siteSettings(locale: Locale): SiteSettings {
  return getSiteSettings(locale);
}

export { APPS_SLUG, appSlugsByLocale };
