import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { AppProduct } from '@/lib/content/types';
import { listApps, listArticles, listCategories } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { StoreButtons } from '@/components/cta/StoreButtons';
import { ImpressionTracker } from '@/components/analytics/Trackers';

export function AppsIndexView({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const apps = listApps(locale);

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[{ label: dict.article.breadcrumbHome, href: `/${locale}` }, { label: dict.apps.title }]}
      />

      <header className="mt-6 max-w-measure">
        <h1 className="text-[2.25rem] leading-tight md:text-[3rem]">{dict.apps.title}</h1>
        <p className="mt-5 text-lg text-muted">{dict.apps.intro}</p>
      </header>

      {/* One app should not sit in half a two-column grid. */}
      <ul
        className={`mt-14 grid gap-12 ${
          apps.length > 1 ? 'md:grid-cols-2' : 'max-w-xl'
        }`}
      >
        {apps.map((app) => (
          <li key={app.translationKey} className="card-soft relative overflow-hidden p-7">
            <ImpressionTracker
              ctaId={`apps_index_${app.translationKey}`}
              appId={app.translationKey}
              location="apps_index"
            />
            <Image
              src={app.icon.src}
              alt=""
              width={72}
              height={72}
              className="rounded-[1.2rem] shadow-[0_10px_30px_-16px_rgba(36,35,33,0.5)]"
            />
            <h2 className="mt-5 font-serif text-2xl">
              <Link href={routes.app(locale, app)} className="link-underline">
                {app.name}
              </Link>
            </h2>
            <p className="mt-1 text-sm text-rose-700">{app.tagline}</p>
            <p className="mt-3 text-sm text-muted">{app.description}</p>
            <div className="mt-6">
              <StoreButtons
                appStoreUrl={app.appStoreUrl}
                googlePlayUrl={app.googlePlayUrl}
                campaign={app.campaign}
                content="apps_index"
                appId={app.translationKey}
                appStoreLabel={dict.actions.appStore}
                googlePlayLabel={dict.actions.googlePlay}
                tone="light"
              />
            </div>
            {app.disclaimer ? (
              <p className="mt-4 text-xs leading-relaxed text-muted">{app.disclaimer}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AppView({
  locale,
  dict,
  app,
}: {
  locale: Locale;
  dict: Dictionary;
  app: AppProduct;
}) {
  const categories = listCategories(locale);
  // Editor-declared links first, then the newest articles to fill the row.
  const all = listArticles(locale);
  const picked = app.relatedArticleKeys
    .map((key) => all.find((article) => article.translationKey === key))
    .filter((article) => article !== undefined);
  const related = [
    ...picked,
    ...all.filter((article) => !picked.some((p) => p.translationKey === article.translationKey)),
  ].slice(0, 3);

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: dict.apps.title, href: routes.apps(locale) },
          { label: app.name },
        ]}
      />

      <header className="mt-8 grid gap-8 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
        <Image
          src={app.icon.src}
          alt=""
          width={112}
          height={112}
          priority
          className="rounded-[1.8rem] shadow-[0_16px_40px_-20px_rgba(36,35,33,0.5)]"
        />
        <div>
          <h1 className="text-[2rem] leading-tight md:text-[2.75rem]">{app.name}</h1>
          <p className="mt-2 text-lg text-rose-700">{app.tagline}</p>
          <p className="mt-4 max-w-measure text-muted">{app.description}</p>
          <div className="mt-6">
            <ImpressionTracker
              ctaId={`app_page_${app.translationKey}`}
              appId={app.translationKey}
              location={`app_${app.translationKey}`}
            />
            <StoreButtons
              appStoreUrl={app.appStoreUrl}
              googlePlayUrl={app.googlePlayUrl}
              campaign={app.campaign}
              content={`app_${app.translationKey}`}
              appId={app.translationKey}
              appStoreLabel={dict.actions.appStore}
              googlePlayLabel={dict.actions.googlePlay}
            />
          </div>
          {app.disclaimer ? (
            <p className="mt-6 max-w-measure rounded-md border-l-2 border-rose-200 bg-rose-50 px-5 py-3 text-sm text-ink-soft">
              {app.disclaimer}
            </p>
          ) : null}
        </div>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl">{dict.apps.keyFeatures}</h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2">
          {app.features.map((feature) => (
            <li key={feature.title}>
              <h3 className="font-serif text-xl">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted">{feature.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl md:text-3xl">{dict.apps.screenshots}</h2>
        <ul className="mt-8 flex snap-x gap-5 overflow-x-auto pb-4">
          {app.screenshots.map((shot) => (
            <li key={shot.src} className="w-56 shrink-0 snap-start">
              <Image
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="224px"
                className="rounded-xl border border-line-soft"
              />
            </li>
          ))}
        </ul>
      </section>

      {related.length > 0 ? (
        <section className="mt-16 border-t border-line-soft pt-12">
          <h2 className="text-2xl md:text-3xl">{dict.apps.relatedArticles}</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((article) => (
              <li key={article.translationKey}>
                <ArticleCard
                  card={{
                    href: routes.article(locale, article),
                    title: article.title,
                    excerpt: article.excerpt,
                    eyebrow: categories.find((c) => c.translationKey === article.categoryKey)?.title,
                    image: article.heroImage,
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
