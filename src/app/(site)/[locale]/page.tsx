import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary, t } from '@/lib/i18n/dictionaries';
import {
  getFeaturedArticle,
  listArticles,
  listCategories,
  findCta,
  siteSettings,
} from '@/lib/content/source';
import { alternatesFor, routes } from '@/lib/routes';
import { buildMetadata } from '@/lib/seo/metadata';
import { graph, organizationSchema, websiteSchema } from '@/lib/seo/schema';
import { POPULAR_WEEKS, buildWeekPage } from '@/content/weeks';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { LinkButton } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { CtaView } from '@/components/cta/CtaView';
import { JsonLd } from '@/components/seo/JsonLd';
import { getLegalPage } from '@/content/data/legal';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale: Locale = raw;
  const dict = getDictionary(locale);
  const settings = siteSettings(locale);

  return buildMetadata({
    locale,
    title: `${settings.siteName} — ${dict.home.heroTitle}`,
    description: settings.siteDescription,
    path: `/${locale}`,
    alternates: alternatesFor('home'),
  });
}

export default async function HomePage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const dict = getDictionary(locale);
  const categories = listCategories(locale);
  const articles = listArticles(locale);
  const featured = getFeaturedArticle(locale);
  const latest = articles.filter((a) => a.translationKey !== featured?.translationKey).slice(0, 3);
  const weekCategory = categories.find((category) => category.isWeekIndex)!;
  const editorialHref = `/${locale}/${getLegalPage(locale, 'editorial').slug}`;
  const appCta = findCta(locale, 'bubbi-inline');

  return (
    <>
      <JsonLd
        data={graph([organizationSchema(), websiteSchema(locale, routes.search(locale))])}
      />

      {/* Hero */}
      <section className="container-page pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="fade-up">
            <span className="eyebrow">{dict.footer.tagline}</span>
            <h1 className="mt-4 text-[2.5rem] leading-[1.08] md:text-[3.5rem]">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted">{dict.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={routes.category(locale, weekCategory)}>
                {dict.home.heroCtaPrimary}
              </LinkButton>
              <LinkButton href={routes.apps(locale)} variant="secondary">
                {dict.home.heroCtaSecondary}
              </LinkButton>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-ivory-deep md:aspect-[5/4]">
            <Image
              src="/images/categories/by-week.svg"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Popular weeks */}
      <Section
        title={dict.home.popularWeeks}
        action={{ label: dict.actions.viewAll, href: routes.category(locale, weekCategory) }}
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {POPULAR_WEEKS.map((week) => {
            const page = buildWeekPage(locale, week);
            if (!page) return null;
            return (
              <li key={week}>
                <Link
                  href={routes.week(locale, week)}
                  className="card-soft flex h-full flex-col justify-between p-4 transition-colors hover:border-rose-200"
                >
                  <span className="font-serif text-2xl">{t(dict.week.shortLabel, { n: week })}</span>
                  <span className="mt-2 text-xs text-muted">{page.sizeLabel}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Featured */}
      {featured ? (
        <Section title={dict.home.featured}>
          <ArticleCard
            size="wide"
            card={{
              href: routes.article(locale, featured),
              title: featured.title,
              excerpt: featured.excerpt,
              eyebrow: categories.find((c) => c.translationKey === featured.categoryKey)?.title,
              image: featured.heroImage,
              meta: `${featured.readingMinutes} ${dict.article.minRead}`,
            }}
          />
        </Section>
      ) : null}

      {/* Topics */}
      <Section title={dict.home.exploreTopics}>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.translationKey}>
              <ArticleCard
                card={{
                  href: routes.category(locale, category),
                  title: category.title,
                  excerpt: category.description,
                  image: category.featuredImage,
                }}
              />
            </li>
          ))}
        </ul>
      </Section>

      {/* Latest */}
      {latest.length > 0 ? (
        <Section title={dict.home.latest}>
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <li key={article.translationKey}>
                <ArticleCard
                  card={{
                    href: routes.article(locale, article),
                    title: article.title,
                    excerpt: article.excerpt,
                    eyebrow: categories.find((c) => c.translationKey === article.categoryKey)?.title,
                    image: article.heroImage,
                    meta: `${article.readingMinutes} ${dict.article.minRead}`,
                  }}
                />
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {/* App promo */}
      {appCta ? (
        <div className="container-page pb-6">
          <CtaView cta={appCta} locale={locale} dict={dict} context="home" />
        </div>
      ) : null}

      {/* Trust */}
      <Section>
        <div className="mx-auto max-w-measure text-center">
          <h2 className="text-2xl md:text-3xl">{dict.home.trustTitle}</h2>
          <p className="mt-4 text-muted">{dict.home.trustBody}</p>
          <p className="mt-6">
            <Link href={editorialHref} className="link-underline text-sm text-muted hover:text-ink">
              {dict.footer.editorialPolicy}
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}
