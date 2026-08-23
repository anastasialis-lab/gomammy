import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { LegalPage } from '@/lib/content/types';
import { ArticleBody } from '@/components/article/ArticleBody';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function LegalView({
  locale,
  dict,
  page,
}: {
  locale: Locale;
  dict: Dictionary;
  page: LegalPage;
}) {
  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[{ label: dict.article.breadcrumbHome, href: `/${locale}` }, { label: page.title }]}
      />

      <header className="mt-6 max-w-measure">
        <h1 className="text-[2rem] leading-tight md:text-[2.75rem]">{page.title}</h1>
        <p className="mt-4 text-sm text-muted">
          {dict.article.updatedOn} <time dateTime={page.updatedAt}>{page.updatedAt}</time>
        </p>
      </header>

      <div className="mt-10">
        <ArticleBody blocks={page.blocks} locale={locale} dict={dict} context={`legal_${page.translationKey}`} />
      </div>
    </div>
  );
}
