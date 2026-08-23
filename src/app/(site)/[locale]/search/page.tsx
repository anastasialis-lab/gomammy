import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { LOCALES, isLocale, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { buildSearchIndex } from '@/lib/search-index';
import { alternatesFor, routes } from '@/lib/routes';
import { buildMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SearchClient } from './SearchClient';

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = getDictionary(raw);

  return buildMetadata({
    locale: raw,
    title: dict.search.title,
    description: dict.search.intro,
    path: routes.search(raw),
    alternates: alternatesFor('search'),
    // Internal result pages add nothing to the index.
    noindex: true,
  });
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const { q } = await searchParams;

  const dict = getDictionary(locale);
  const docs = buildSearchIndex(locale);

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: dict.search.title },
        ]}
      />
      <header className="mt-6 max-w-measure">
        <h1 className="text-[2rem] leading-tight md:text-[2.5rem]">{dict.search.title}</h1>
        <p className="mt-4 text-muted">{dict.search.intro}</p>
      </header>

      <SearchClient docs={docs} dict={dict} initialQuery={q ?? ''} />
    </div>
  );
}
