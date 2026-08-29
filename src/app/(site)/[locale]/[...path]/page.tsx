import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LOCALES, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  APPS_SLUG,
  findAuthor,
  listApps,
  listArticles,
  listCategories,
} from "@/lib/content/source";
import {
  alternatesFor,
  resolveRoute,
  routes,
  type ResolvedRoute,
} from "@/lib/routes";
import { buildMetadata, ogImageUrl } from "@/lib/seo/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  graph,
  softwareApplicationSchema,
} from "@/lib/seo/schema";
import { LEGAL_KEYS, getLegalPage } from "@/content/data/legal";
import { TOTAL_WEEKS, weekSlug } from "@/content/weeks";
import { JsonLd } from "@/components/seo/JsonLd";
import { ArticleView } from "@/components/views/ArticleView";
import { CategoryView } from "@/components/views/CategoryView";
import { WeekIndexView } from "@/components/views/WeekIndexView";
import { WeekView } from "@/components/views/WeekView";
import { AppView, AppsIndexView } from "@/components/views/AppViews";
import { LegalView } from "@/components/views/LegalView";
import { BlogView } from "@/components/views/BlogView";
import { BLOG_SLUG } from "@/lib/routes";

type Props = { params: Promise<{ locale: string; path: string[] }> };

/** Pre-renders every content URL in every language at build time. */
export function generateStaticParams() {
  const params: { locale: string; path: string[] }[] = [];

  for (const locale of LOCALES) {
    params.push({ locale, path: [BLOG_SLUG[locale]] });
    for (const category of listCategories(locale)) {
      params.push({ locale, path: [category.slug] });

      if (category.isWeekIndex) {
        for (let week = 1; week <= TOTAL_WEEKS; week += 1) {
          params.push({
            locale,
            path: [category.slug, weekSlug(locale, week)],
          });
        }
      }
    }

    for (const article of listArticles(locale)) {
      const category = listCategories(locale).find(
        (item) => item.translationKey === article.categoryKey,
      );
      if (category)
        params.push({ locale, path: [category.slug, article.slug] });
    }

    params.push({ locale, path: [APPS_SLUG[locale]] });
    for (const app of listApps(locale)) {
      params.push({ locale, path: [APPS_SLUG[locale], app.slug] });
    }

    for (const key of LEGAL_KEYS) {
      params.push({ locale, path: [getLegalPage(locale, key).slug] });
    }
  }

  return params;
}

function metaFor(locale: Locale, route: ResolvedRoute, path: string): Metadata {
  const alternates = alternatesFor(route);

  switch (route.kind) {
    case "blog-index": {
      const dict = getDictionary(locale);
      return buildMetadata({
        locale,
        title: dict.blog.title,
        description: dict.blog.intro,
        path,
        alternates,
      });
    }
    case "category":
    case "week-index":
      return buildMetadata({
        locale,
        title: route.category.seo.title,
        description: route.category.seo.description,
        path,
        alternates,
        image: route.category.featuredImage?.src,
      });
    case "week":
      return buildMetadata({
        locale,
        title: route.page.seo.title,
        description: route.page.seo.description,
        path,
        alternates,
        image: ogImageUrl({
          locale,
          title: route.page.title,
          eyebrow: route.category.title,
        }),
      });
    case "article":
      return buildMetadata({
        locale,
        title: route.article.seo.title,
        description: route.article.seo.description,
        path,
        alternates,
        image: route.article.seo.ogImage?.src ?? route.article.heroImage.src,
        imageAlt: route.article.heroImage.alt,
        type: "article",
        publishedTime: route.article.publishedAt,
        modifiedTime: route.article.updatedAt,
        canonicalOverride: route.article.seo.canonicalOverride,
        noindex: route.article.seo.noindex,
      });
    case "apps-index": {
      const dict = getDictionary(locale);
      return buildMetadata({
        locale,
        title: dict.apps.title,
        description: dict.apps.intro,
        path,
        alternates,
      });
    }
    case "app":
      return buildMetadata({
        locale,
        title: route.app.seo.title,
        description: route.app.seo.description,
        path,
        alternates,
        image: route.app.icon.src,
      });
    case "legal":
      return buildMetadata({
        locale,
        title: route.page.seo.title,
        description: route.page.seo.description,
        path,
        alternates,
        noindex: route.page.seo.noindex,
      });
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, path } = await params;
  if (!isLocale(raw)) return {};
  const route = resolveRoute(raw, path);
  if (!route) return { robots: { index: false, follow: false } };
  return metaFor(raw, route, `/${raw}/${path.join("/")}`);
}

export default async function ContentPage({ params }: Props) {
  const { locale: rawLocale, path } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;

  const route = resolveRoute(locale, path);
  if (!route) notFound();

  const dict = getDictionary(locale);
  const url = `/${locale}/${path.join("/")}`;
  const home = { name: dict.article.breadcrumbHome, path: `/${locale}` };

  switch (route.kind) {
    case "blog-index":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([home, { name: dict.blog.title, path: url }]),
            ])}
          />
          <BlogView locale={locale} dict={dict} />
        </>
      );

    case "category":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([
                home,
                { name: route.category.title, path: url },
              ]),
            ])}
          />
          <CategoryView locale={locale} dict={dict} category={route.category} />
        </>
      );

    case "week-index":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([
                home,
                { name: route.category.title, path: url },
              ]),
            ])}
          />
          <WeekIndexView
            locale={locale}
            dict={dict}
            category={route.category}
          />
        </>
      );

    case "week":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([
                home,
                {
                  name: route.category.title,
                  path: routes.category(locale, route.category),
                },
                { name: route.page.title, path: url },
              ]),
              articleSchema({
                locale,
                path: url,
                headline: route.page.title,
                description: route.page.seo.description,
                image:
                  route.category.featuredImage?.src ??
                  "/images/categories/by-week.webp",
                publishedAt: "2026-01-15",
                updatedAt: "2026-08-20",
                section: route.category.title,
                keywords: [route.page.title],
              }),
              faqSchema(route.page.faq),
            ])}
          />
          <WeekView
            locale={locale}
            dict={dict}
            page={route.page}
            category={route.category}
          />
        </>
      );

    case "article": {
      const author = findAuthor(locale, route.article.authorId);
      const reviewer = route.article.reviewerId
        ? findAuthor(locale, route.article.reviewerId)
        : undefined;
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([
                home,
                {
                  name: route.category.title,
                  path: routes.category(locale, route.category),
                },
                { name: route.article.title, path: url },
              ]),
              articleSchema({
                locale,
                path: url,
                headline: route.article.title,
                description: route.article.seo.description,
                image: route.article.heroImage.src,
                publishedAt: route.article.publishedAt,
                updatedAt: route.article.updatedAt,
                author,
                reviewer,
                sources: route.article.sources,
                section: route.category.title,
                keywords: [
                  route.article.seo.primaryKeyword ?? "",
                  ...(route.article.seo.secondaryKeywords ?? []),
                ].filter(Boolean),
              }),
              faqSchema(route.article.faq),
            ])}
          />
          <ArticleView
            locale={locale}
            dict={dict}
            article={route.article}
            category={route.category}
          />
        </>
      );
    }

    case "apps-index":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([home, { name: dict.apps.title, path: url }]),
            ])}
          />
          <AppsIndexView locale={locale} dict={dict} />
        </>
      );

    case "app":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([
                home,
                { name: dict.apps.title, path: routes.apps(locale) },
                { name: route.app.name, path: url },
              ]),
              softwareApplicationSchema(route.app, url),
            ])}
          />
          <AppView locale={locale} dict={dict} app={route.app} />
        </>
      );

    case "legal":
      return (
        <>
          <JsonLd
            data={graph([
              breadcrumbSchema([home, { name: route.page.title, path: url }]),
            ])}
          />
          <LegalView locale={locale} dict={dict} page={route.page} />
        </>
      );
  }
}
