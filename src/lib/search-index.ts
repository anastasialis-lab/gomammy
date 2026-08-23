import type { Locale } from '@/lib/i18n/config';
import { getDictionary, t } from '@/lib/i18n/dictionaries';
import { listApps, listArticles, listCategories, listTags, findTag } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { WEEK_FACTS, buildWeekPage } from '@/content/weeks';
import type { SearchDoc } from '@/components/search/SearchOverlay';

/**
 * Flat index used by both the header overlay and the /search page.
 * Small enough (≈60 documents per language) to ship as JSON and filter on the
 * client, which keeps search instant and needs no third-party service.
 */
export function buildSearchIndex(locale: Locale): SearchDoc[] {
  const dict = getDictionary(locale);
  const categories = listCategories(locale);
  const docs: SearchDoc[] = [];

  for (const category of categories) {
    docs.push({
      id: `category:${category.translationKey}`,
      type: 'category',
      title: category.title,
      description: category.description,
      category: dict.home.exploreTopics,
      href: routes.category(locale, category),
      keywords: `${category.heroTitle} ${category.seo.description}`,
    });
  }

  for (const article of listArticles(locale)) {
    const category = categories.find((item) => item.translationKey === article.categoryKey);
    const tags = article.tagKeys
      .map((key) => findTag(locale, key)?.title ?? '')
      .join(' ');
    docs.push({
      id: `article:${article.translationKey}`,
      type: 'article',
      title: article.title,
      description: article.excerpt,
      category: category?.title ?? '',
      href: routes.article(locale, article),
      keywords: `${tags} ${article.seo.primaryKeyword ?? ''} ${(article.seo.secondaryKeywords ?? []).join(' ')}`,
    });
  }

  const weekCategory = categories.find((item) => item.isWeekIndex);
  for (const facts of WEEK_FACTS) {
    const page = buildWeekPage(locale, facts.week);
    if (!page) continue;
    docs.push({
      id: `week:${facts.week}`,
      type: 'week',
      title: page.title,
      description: page.sizeLabel,
      category: weekCategory?.title ?? '',
      href: routes.week(locale, facts.week),
      keywords: `${t(dict.week.shortLabel, { n: facts.week })} ${facts.week} ${dict.week.trimesterNames[facts.trimester - 1]}`,
    });
  }

  for (const app of listApps(locale)) {
    docs.push({
      id: `app:${app.translationKey}`,
      type: 'app',
      title: app.name,
      description: app.tagline,
      category: dict.apps.title,
      href: routes.app(locale, app),
      keywords: app.description,
    });
  }

  for (const tag of listTags(locale)) {
    docs.push({
      id: `tag:${tag.translationKey}`,
      type: 'category',
      title: tag.title,
      description: '',
      category: dict.search.title,
      href: `${routes.search(locale)}?q=${encodeURIComponent(tag.title)}`,
      keywords: tag.slug,
    });
  }

  return docs;
}
