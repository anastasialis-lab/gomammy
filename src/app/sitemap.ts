import type { MetadataRoute } from "next";
import { DEFAULT_LOCALE, LOCALES, type Locale } from "@/lib/i18n/config";
import {
  APPS_SLUG,
  listApps,
  listArticles,
  listCategories,
} from "@/lib/content/source";
import { alternatesFor, resolveRoute, routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo/site";
import { LEGAL_KEYS, getLegalPage } from "@/content/data/legal";
import { TOTAL_WEEKS, weekSlug } from "@/content/weeks";

type Entry = MetadataRoute.Sitemap[number];

// Keep scheduled articles out until publishedAt, then refresh their sitemap
// entries without requiring a manual deployment.
export const revalidate = 60;

/** Every entry carries the full hreflang cluster, as Google recommends. */
function withAlternates(
  path: string,
  alternates: Partial<Record<Locale, string>>,
  extra: Omit<Entry, "url" | "alternates">,
): Entry {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    const target = alternates[locale];
    if (target) languages[locale] = absoluteUrl(target);
  }
  const fallback = alternates[DEFAULT_LOCALE] ?? Object.values(alternates)[0];
  if (fallback) languages["x-default"] = absoluteUrl(fallback);

  return { url: absoluteUrl(path), alternates: { languages }, ...extra };
}

/**
 * A single sitemap covers roughly 350 URLs today, far below the 50 000 limit.
 * When the article count grows, split by type with `generateSitemaps()` — the
 * per-entry data below already carries everything an index would need.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [];
  const lastModified = new Date();

  for (const locale of LOCALES) {
    entries.push(
      withAlternates(`/${locale}`, alternatesFor("home"), {
        lastModified,
        changeFrequency: "weekly",
        priority: 1,
      }),
    );

    const blogRoute = resolveRoute(locale, [
      routes.blog(locale).split("/").at(-1)!,
    ]);
    if (blogRoute) {
      entries.push(
        withAlternates(routes.blog(locale), alternatesFor(blogRoute), {
          lastModified,
          changeFrequency: "weekly",
          priority: 0.9,
        }),
      );
    }

    for (const category of listCategories(locale)) {
      const route = resolveRoute(locale, [category.slug]);
      if (!route) continue;
      entries.push(
        withAlternates(
          routes.category(locale, category),
          alternatesFor(route),
          {
            lastModified,
            changeFrequency: "weekly",
            priority: category.isWeekIndex ? 0.9 : 0.8,
          },
        ),
      );
    }

    const weekCategory = listCategories(locale).find(
      (category) => category.isWeekIndex,
    );
    if (weekCategory) {
      for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
        const route = resolveRoute(locale, [
          weekCategory.slug,
          weekSlug(locale, week),
        ]);
        if (!route) continue;
        entries.push(
          withAlternates(routes.week(locale, week), alternatesFor(route), {
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
          }),
        );
      }
    }

    for (const article of listArticles(locale)) {
      if (article.seo.noindex) continue;
      const category = listCategories(locale).find(
        (item) => item.translationKey === article.categoryKey,
      );
      if (!category) continue;
      const route = resolveRoute(locale, [category.slug, article.slug]);
      if (!route) continue;
      entries.push(
        withAlternates(routes.article(locale, article), alternatesFor(route), {
          lastModified: new Date(article.updatedAt),
          changeFrequency: "monthly",
          priority: 0.7,
        }),
      );
    }

    const appsRoute = resolveRoute(locale, [APPS_SLUG[locale]]);
    if (appsRoute) {
      entries.push(
        withAlternates(routes.apps(locale), alternatesFor(appsRoute), {
          lastModified,
          changeFrequency: "monthly",
          priority: 0.7,
        }),
      );
    }

    for (const app of listApps(locale)) {
      const route = resolveRoute(locale, [APPS_SLUG[locale], app.slug]);
      if (!route) continue;
      entries.push(
        withAlternates(routes.app(locale, app), alternatesFor(route), {
          lastModified,
          changeFrequency: "monthly",
          priority: 0.6,
        }),
      );
    }

    for (const key of LEGAL_KEYS) {
      const page = getLegalPage(locale, key);
      if (page.seo.noindex) continue;
      const route = resolveRoute(locale, [page.slug]);
      if (!route) continue;
      entries.push(
        withAlternates(`/${locale}/${page.slug}`, alternatesFor(route), {
          lastModified: new Date(page.updatedAt),
          changeFrequency: "yearly",
          priority: 0.3,
        }),
      );
    }
  }

  return entries;
}
