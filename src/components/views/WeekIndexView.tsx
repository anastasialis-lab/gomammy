import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { t } from '@/lib/i18n/dictionaries';
import type { Category } from '@/lib/content/types';
import { findCta } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { WEEK_FACTS, buildWeekPage } from '@/content/weeks';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CtaView } from '@/components/cta/CtaView';

export function WeekIndexView({
  locale,
  dict,
  category,
}: {
  locale: Locale;
  dict: Dictionary;
  category: Category;
}) {
  const cta = findCta(locale, 'bubbi-inline');
  const trimesters = [1, 2, 3] as const;

  return (
    <div className="container-page pt-8">
      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: category.title },
        ]}
      />

      <header className="mt-6 max-w-measure">
        <h1 className="text-[2.25rem] leading-tight md:text-[3rem]">{dict.week.indexTitle}</h1>
        <p className="mt-5 text-lg text-muted">{dict.week.indexIntro}</p>
      </header>

      {trimesters.map((trimester) => (
        <section key={trimester} className="mt-14">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
            {dict.week.trimesterNames[trimester - 1]}
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {WEEK_FACTS.filter((facts) => facts.trimester === trimester).map((facts) => {
              const page = buildWeekPage(locale, facts.week);
              if (!page) return null;
              return (
                <li key={facts.week}>
                  <Link
                    href={routes.week(locale, facts.week)}
                    className="card-soft flex h-full flex-col justify-between p-4 transition-colors hover:border-rose-200"
                  >
                    <span className="font-serif text-2xl">
                      {t(dict.week.shortLabel, { n: facts.week })}
                    </span>
                    <span className="mt-2 text-xs leading-snug text-muted">{page.sizeLabel}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <p className="mt-12 rounded-md bg-ivory-deep/60 p-5 text-sm text-muted">
        {dict.week.dueDateNote}
      </p>

      {cta ? (
        <CtaView cta={cta} locale={locale} dict={dict} context="week_index" />
      ) : null}
    </div>
  );
}
