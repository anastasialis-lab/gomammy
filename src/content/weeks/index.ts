import type { Locale } from '@/lib/i18n/config';
import { getDictionary, t } from '@/lib/i18n/dictionaries';
import type { FaqItem, WeekFacts, WeekPage } from '@/lib/content/types';
import { WEEK_FACTS, TOTAL_WEEKS, getWeekFacts } from './facts';
import { WEEK_PHRASEBOOKS } from './phrasebook';

export { WEEK_FACTS, TOTAL_WEEKS, getWeekFacts };

/** Average weeks per calendar month, used for the "how many months" answer. */
const WEEKS_PER_MONTH = 4.345;

function formatNumber(locale: Locale, value: number, maximumFractionDigits = 1): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(value);
}

/**
 * Units go through Intl rather than a hard-coded suffix, so Ukrainian reads
 * "25,6 см" and English "25.6 cm" without a per-locale unit table.
 */
function formatUnit(
  locale: Locale,
  value: number,
  unit: 'millimeter' | 'centimeter' | 'gram' | 'kilogram',
  maximumFractionDigits: number,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'unit',
    unit,
    unitDisplay: 'short',
    maximumFractionDigits,
  }).format(value);
}

function formatLength(locale: Locale, lengthCm: number | null): string {
  if (lengthCm === null) return '—';
  if (lengthCm < 1) return formatUnit(locale, lengthCm * 10, 'millimeter', 1);
  return formatUnit(locale, lengthCm, 'centimeter', 1);
}

function formatWeight(locale: Locale, weightG: number | null): string {
  if (weightG === null) return '—';
  if (weightG >= 1000) return formatUnit(locale, weightG / 1000, 'kilogram', 2);
  return formatUnit(locale, weightG, 'gram', 0);
}

function monthsFor(week: number): number {
  return Math.round((week / WEEKS_PER_MONTH) * 2) / 2;
}

export function weekSlug(locale: Locale, week: number): string {
  return t(WEEK_PHRASEBOOKS[locale].slugTemplate, { n: week });
}

/** Parses a localised week slug back into a week number, or null. */
export function weekFromSlug(locale: Locale, slug: string): number | null {
  const template = WEEK_PHRASEBOOKS[locale].slugTemplate;
  const pattern = new RegExp(
    `^${template.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace('\\{n\\}', '(\\d{1,2})')}$`,
  );
  const match = slug.match(pattern);
  if (!match) return null;
  const week = Number(match[1]);
  return week >= 1 && week <= TOTAL_WEEKS ? week : null;
}

function buildFaq(locale: Locale, facts: WeekFacts): FaqItem[] {
  const book = WEEK_PHRASEBOOKS[locale];
  const values = {
    n: facts.week,
    size: book.sizes[facts.sizeKey],
    length: formatLength(locale, facts.lengthCm),
    weight: formatWeight(locale, facts.weightG),
    months: t(book.monthsLabel, { months: formatNumber(locale, monthsFor(facts.week)) }),
  };
  return book.faq.map((item) => ({
    question: t(item.question, values),
    answer: t(item.answer, values),
  }));
}

export function buildWeekPage(locale: Locale, week: number): WeekPage | null {
  const facts = getWeekFacts(week);
  if (!facts) return null;

  const book = WEEK_PHRASEBOOKS[locale];
  const dict = getDictionary(locale);
  const sizeLabel = book.sizes[facts.sizeKey];
  const trimesterInline = book.trimesterInline[facts.trimester - 1];
  const hasBaby = facts.sizeKey !== 'not_yet';

  const intro = hasBaby
    ? t(book.intro, { n: week, size: sizeLabel, trimester: trimesterInline })
    : t(book.introEarly, { n: week });

  const expect = t(book.expect[facts.trimester - 1], {
    n: week,
    left: TOTAL_WEEKS - week,
  });

  const title = t(dict.week.pageTitle, { n: week });

  return {
    locale,
    week,
    slug: weekSlug(locale, week),
    title,
    intro,
    facts,
    sizeLabel,
    development: facts.developmentKeys.map((key) => book.development[key]),
    body: facts.bodyKeys.map((key) => book.body[key]),
    symptoms: facts.symptomKeys.map((key) => book.symptoms[key]),
    tips: facts.tipKeys.map((key) => book.tips[key]),
    expect,
    faq: buildFaq(locale, facts),
    seo: {
      title: t(book.seoTitle, { n: week }),
      description: t(book.seoDescription, { n: week, size: sizeLabel }),
      primaryKeyword: title,
    },
  };
}

export function milestoneFor(locale: Locale, facts: WeekFacts): string | null {
  if (!facts.milestoneKey) return null;
  return WEEK_PHRASEBOOKS[locale].milestones[facts.milestoneKey] ?? null;
}

export function formatWeekLength(locale: Locale, lengthCm: number | null): string {
  return formatLength(locale, lengthCm);
}

export function formatWeekWeight(locale: Locale, weightG: number | null): string {
  return formatWeight(locale, weightG);
}

/** Weeks highlighted on the homepage and category landing pages. */
export const POPULAR_WEEKS = [4, 6, 8, 12, 20, 24, 28, 32, 36, 40];
