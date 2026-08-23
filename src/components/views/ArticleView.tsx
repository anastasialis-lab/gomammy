import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Category } from '@/lib/content/types';
import {
  findAuthor,
  findCta,
  getRelatedArticles,
  listCategories,
  type ArticleWithMeta,
} from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { ArticleBody } from '@/components/article/ArticleBody';
import { ArticleMeta, Sources } from '@/components/article/ArticleMeta';
import { Faq } from '@/components/article/Faq';
import { TableOfContents } from '@/components/article/TableOfContents';
import { ArticleCard } from '@/components/ui/ArticleCard';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaView } from '@/components/cta/CtaView';
import { ScrollDepthTracker, ViewTracker } from '@/components/analytics/Trackers';

export function ArticleView({
  locale,
  dict,
  article,
  category,
}: {
  locale: Locale;
  dict: Dictionary;
  article: ArticleWithMeta;
  category: Category;
}) {
  const author = findAuthor(locale, article.authorId);
  const reviewer = article.reviewerId ? findAuthor(locale, article.reviewerId) : undefined;
  const related = getRelatedArticles(locale, article);
  const categories = listCategories(locale);
  const context = `article_${article.translationKey}`;

  const slot = (placement: string) =>
    article.ctas.find((entry) => entry.placement === placement);
  const afterIntro = slot('after-intro');
  const sidebar = slot('sidebar');
  const beforeFaq = slot('before-faq');
  const end = slot('end');

  const ctaFor = (id?: string) => (id ? findCta(locale, id) : undefined);

  return (
    <article className="container-page pt-8">
      <ViewTracker
        event="article_view"
        params={{
          article_id: article.translationKey,
          category: article.categoryKey,
          language: locale,
        }}
      />
      <ScrollDepthTracker
        params={{ article_id: article.translationKey, category: article.categoryKey }}
      />

      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: category.title, href: routes.category(locale, category) },
          { label: article.title },
        ]}
      />

      <header className="mt-6 max-w-measure">
        <span className="eyebrow">{category.title}</span>
        <h1 className="mt-3 text-[2rem] leading-tight md:text-[2.75rem]">
          {article.heading ?? article.title}
        </h1>
        <p className="mt-5 text-lg text-muted">{article.intro}</p>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl bg-ivory-deep">
        <Image
          src={article.heroImage.src}
          alt={article.heroImage.alt}
          fill
          priority
          sizes="(min-width: 1024px) 1000px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0">
          <ArticleMeta
            locale={locale}
            dict={dict}
            author={author}
            reviewer={reviewer}
            publishedAt={article.publishedAt}
            updatedAt={article.updatedAt}
            readingMinutes={article.readingMinutes}
          />

          <div className="mt-8 lg:hidden">
            <TableOfContents blocks={article.blocks} title={dict.article.tableOfContents} />
          </div>

          {ctaFor(afterIntro?.ctaId) ? (
            <CtaView
              cta={ctaFor(afterIntro?.ctaId)!}
              locale={locale}
              dict={dict}
              context={context}
            />
          ) : null}

          <div className="mt-8">
            <ArticleBody
              blocks={article.blocks}
              locale={locale}
              dict={dict}
              context={context}
            />
          </div>

          {ctaFor(beforeFaq?.ctaId) ? (
            <CtaView
              cta={ctaFor(beforeFaq?.ctaId)!}
              locale={locale}
              dict={dict}
              context={context}
            />
          ) : null}

          <Faq items={article.faq} title={dict.article.faqTitle} />

          <Sources
            sources={article.sources}
            title={dict.article.sources}
            disclaimer={dict.article.disclaimer}
          />

          {ctaFor(end?.ctaId) ? (
            <CtaView cta={ctaFor(end?.ctaId)!} locale={locale} dict={dict} context={context} />
          ) : null}
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 grid gap-6">
            <TableOfContents blocks={article.blocks} title={dict.article.tableOfContents} />
            {ctaFor(sidebar?.ctaId) ? (
              <CtaView
                cta={ctaFor(sidebar?.ctaId)!}
                locale={locale}
                dict={dict}
                context={context}
                variant="sidebar"
              />
            ) : null}
          </div>
        </aside>
      </div>

      {related.length > 0 ? (
        <section className="mt-20 border-t border-line-soft pt-12">
          <h2 className="text-2xl md:text-3xl">{dict.article.relatedArticles}</h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.translationKey}>
                <ArticleCard
                  card={{
                    href: routes.article(locale, item),
                    title: item.title,
                    excerpt: item.excerpt,
                    eyebrow: categories.find((c) => c.translationKey === item.categoryKey)?.title,
                    image: item.heroImage,
                    meta: `${item.readingMinutes} ${dict.article.minRead}`,
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
