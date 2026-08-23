import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { t } from '@/lib/i18n/dictionaries';
import type { Category, WeekPage } from '@/lib/content/types';
import { findCta } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import {
  TOTAL_WEEKS,
  formatWeekLength,
  formatWeekWeight,
  milestoneFor,
} from '@/content/weeks';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Faq } from '@/components/article/Faq';
import { CtaView } from '@/components/cta/CtaView';
import { ScrollDepthTracker, ViewTracker } from '@/components/analytics/Trackers';

function SectionBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-[1.75rem]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="relative pl-6 text-ink-soft">
          <span
            aria-hidden
            className="absolute left-0.5 top-[0.72em] size-1.5 rounded-full bg-rose-400"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function WeekView({
  locale,
  dict,
  page,
  category,
}: {
  locale: Locale;
  dict: Dictionary;
  page: WeekPage;
  category: Category;
}) {
  const { facts } = page;
  const milestone = milestoneFor(locale, facts);
  const cta = findCta(locale, 'bubbi-inline');
  const sidebarCta = findCta(locale, 'bubbi-sidebar');
  const context = `week_${page.week}`;

  const nearby = [page.week - 2, page.week - 1, page.week + 1, page.week + 2].filter(
    (week) => week >= 1 && week <= TOTAL_WEEKS,
  );

  return (
    <div className="container-page pt-8">
      <ViewTracker
        event="week_view"
        params={{ week: page.week, trimester: facts.trimester, language: locale }}
      />
      <ScrollDepthTracker params={{ week: page.week, article_id: `week_${page.week}` }} />

      <Breadcrumbs
        items={[
          { label: dict.article.breadcrumbHome, href: `/${locale}` },
          { label: category.title, href: routes.category(locale, category) },
          { label: t(dict.week.shortLabel, { n: page.week }) },
        ]}
      />

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0 max-w-measure">
          <header>
            <span className="eyebrow">{dict.week.trimesterNames[facts.trimester - 1]}</span>
            <h1 className="mt-3 text-[2.25rem] leading-tight md:text-[3rem]">{page.title}</h1>
            <p className="mt-5 text-lg text-muted">{page.intro}</p>
            {milestone ? (
              <p className="mt-5 rounded-md border-l-2 border-sage-300 bg-sage-50 px-5 py-3 text-[0.98rem] text-ink-soft">
                {milestone}
              </p>
            ) : null}
          </header>

          {/* Facts strip */}
          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line-soft bg-line-soft sm:grid-cols-4">
            {[
              { label: dict.week.sizeOf, value: page.sizeLabel },
              { label: dict.week.length, value: formatWeekLength(locale, facts.lengthCm) },
              { label: dict.week.weight, value: formatWeekWeight(locale, facts.weightG) },
              {
                label: dict.week.trimester,
                value: String(facts.trimester),
              },
            ].map((item) => (
              <div key={item.label} className="bg-card px-4 py-4">
                <dt className="text-xs uppercase tracking-wider text-muted">{item.label}</dt>
                <dd className="mt-1 font-serif text-lg leading-snug">{item.value}</dd>
              </div>
            ))}
          </dl>

          <SectionBlock title={dict.week.babyDevelopment}>
            <Bullets items={page.development} />
          </SectionBlock>

          <SectionBlock title={dict.week.yourBody}>
            <Bullets items={page.body} />
          </SectionBlock>

          {cta ? <CtaView cta={cta} locale={locale} dict={dict} context={context} /> : null}

          <SectionBlock title={dict.week.commonSymptoms}>
            <Bullets items={page.symptoms} />
          </SectionBlock>

          <SectionBlock title={dict.week.whatToExpect}>
            <p className="text-ink-soft">{page.expect}</p>
          </SectionBlock>

          <SectionBlock title={dict.week.tips}>
            <Bullets items={page.tips} />
          </SectionBlock>

          <Faq items={page.faq} title={dict.article.faqTitle} />

          <p className="mt-10 rounded-md bg-ivory-deep/60 p-5 text-sm text-muted">
            {dict.week.dueDateNote}
          </p>
          <p className="mt-4 text-xs leading-relaxed text-muted">{dict.article.disclaimer}</p>

          {/* Prev / next */}
          <nav className="mt-12 flex items-center justify-between gap-4 border-t border-line-soft pt-6">
            {page.week > 1 ? (
              <Link href={routes.week(locale, page.week - 1)} className="link-underline text-sm">
                ← {dict.week.previousWeek}: {t(dict.week.shortLabel, { n: page.week - 1 })}
              </Link>
            ) : (
              <span />
            )}
            {page.week < TOTAL_WEEKS ? (
              <Link
                href={routes.week(locale, page.week + 1)}
                className="link-underline text-right text-sm"
              >
                {dict.week.nextWeek}: {t(dict.week.shortLabel, { n: page.week + 1 })} →
              </Link>
            ) : (
              <span />
            )}
          </nav>

          <section className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
              {dict.week.relatedWeeks}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {nearby.map((week) => (
                <li key={week}>
                  <Link
                    href={routes.week(locale, week)}
                    className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                  >
                    {t(dict.week.shortLabel, { n: week })}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={routes.category(locale, category)}
                  className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                >
                  {dict.actions.viewAll}
                </Link>
              </li>
            </ul>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 grid gap-6">
            {sidebarCta ? (
              <CtaView
                cta={sidebarCta}
                locale={locale}
                dict={dict}
                context={context}
                variant="sidebar"
              />
            ) : null}
          </div>
        </aside>
      </div>
    </div>
  );
}
