import type { Locale } from "@/lib/i18n/config";
import { LOCALE_TAGS } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { listArticles, listCategories } from "@/lib/content/source";
import { routes } from "@/lib/routes";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function BlogView({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const articles = listArticles(locale);
  const categories = listCategories(locale);
  const dateFormatter = new Intl.DateTimeFormat(LOCALE_TAGS[locale], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: routes.home(locale) },
          { label: dict.nav.blog },
        ]}
      />

      <header className="mt-6 max-w-measure">
        <span className="eyebrow">{dict.blog.newestFirst}</span>
        <h1 className="mt-3 text-[2.25rem] leading-tight md:text-[3rem]">
          {dict.blog.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{dict.blog.intro}</p>
      </header>

      <section className="mt-12" aria-labelledby="all-articles-heading">
        <h2 id="all-articles-heading" className="sr-only">
          {dict.blog.title}
        </h2>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => {
            const category = categories.find(
              (item) => item.translationKey === article.categoryKey,
            );
            return (
              <li key={article.translationKey}>
                <ArticleCard
                  priority={index < 3}
                  card={{
                    href: routes.article(locale, article),
                    title: article.title,
                    excerpt: article.excerpt,
                    eyebrow: category?.title,
                    image: article.heroImage,
                    meta: `${dateFormatter.format(new Date(article.publishedAt))} · ${article.readingMinutes} ${dict.article.minRead}`,
                  }}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
