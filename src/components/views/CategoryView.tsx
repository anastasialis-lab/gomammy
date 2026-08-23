import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { t } from '@/lib/i18n/dictionaries';
import type { Category } from '@/lib/content/types';
import { findCta, listArticlesByCategory, listCategories } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { POPULAR_WEEKS, buildWeekPage } from '@/content/weeks';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaView } from '@/components/cta/CtaView';

export function CategoryView({
  locale,
  dict,
  category,
}: {
  locale: Locale;
  dict: Dictionary;
  category: Category;
}) {
  const articles = listArticlesByCategory(locale, category.translationKey);
  const [featured, ...rest] = articles;
  const categories = listCategories(locale);
  const weekCategory = categories.find((item) => item.isWeekIndex)!;
  const cta = findCta(locale, 'bubbi-inline');

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: category.title },
        ]}
      />

      <header className="mt-6 max-w-measure">
        <span className="eyebrow">{category.title}</span>
        <h1 className="mt-3 text-[2.25rem] leading-tight md:text-[3rem]">{category.heroTitle}</h1>
        <p className="mt-5 text-lg text-muted">{category.heroIntro}</p>
      </header>

      {featured ? (
        <section className="mt-12">
          <h2 className="sr-only">{dict.home.featured}</h2>
          <ArticleCard
            size="wide"
            priority
            card={{
              href: routes.article(locale, featured),
              title: featured.title,
              excerpt: featured.excerpt,
              eyebrow: category.title,
              image: featured.heroImage,
              meta: `${featured.readingMinutes} ${dict.article.minRead}`,
            }}
          />
        </section>
      ) : null}

      {rest.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl">{dict.home.latest}</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((article) => (
              <li key={article.translationKey}>
                <ArticleCard
                  card={{
                    href: routes.article(locale, article),
                    title: article.title,
                    excerpt: article.excerpt,
                    eyebrow: category.title,
                    image: article.heroImage,
                    meta: `${article.readingMinutes} ${dict.article.minRead}`,
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Every category links into the week pillar — the strongest internal link
          path on the site, and a useful fallback while a category is still thin. */}
      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl">{dict.home.popularWeeks}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {POPULAR_WEEKS.map((week) => {
            const page = buildWeekPage(locale, week);
            if (!page) return null;
            return (
              <li key={week}>
                <Link
                  href={routes.week(locale, week)}
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                >
                  {t(dict.week.shortLabel, { n: week })}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={routes.category(locale, weekCategory)}
              className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
            >
              {dict.actions.viewAll}
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl">{dict.home.exploreTopics}</h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {categories
            .filter((item) => item.translationKey !== category.translationKey)
            .map((item) => (
              <li key={item.translationKey}>
                <Link
                  href={routes.category(locale, item)}
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>

      {cta ? (
        <CtaView
          cta={cta}
          locale={locale}
          dict={dict}
          context={`category_${category.translationKey}`}
        />
      ) : null}
    </div>
  );
}
