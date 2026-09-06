import type { Locale } from '@/lib/i18n/config';
import { LOCALES } from '@/lib/i18n/config';
import { findApp, getArticleByKey, listCategories } from '@/lib/content/source';
import { routes } from '@/lib/routes';
import { absoluteUrl } from '@/lib/seo/site';

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  fr: 'Français',
  uk: 'Українська',
};

const HEARTBEAT_GUIDES = [
  'baby-heartbeat-in-pregnancy',
  'when-can-you-hear-baby-heartbeat',
  'best-week-listen-heartbeat-phone',
  'baby-heartbeat-vs-maternal-pulse',
  'cannot-hear-baby-heartbeat-at-home',
] as const;

function link(title: string, path: string, description?: string): string {
  const url = path.startsWith('https://') ? path : absoluteUrl(path);
  return `- [${title}](${url})${description ? `: ${description}` : ''}`;
}

function localizedLinks(build: (locale: Locale) => string | null): string[] {
  return LOCALES.map(build).filter((line): line is string => line !== null);
}

function document(): string {
  const lines: string[] = [
    '# HelloMommy',
    '',
    '> Multilingual pregnancy information, week-by-week guides, and Bubbi, a baby-heartbeat keepsake and pregnancy diary app for iPhone and Android.',
    '',
    'HelloMommy publishes in English, German, Italian, Spanish, Portuguese, French, and Ukrainian. Health articles are general information and do not replace care from a qualified clinician.',
    '',
    'Bubbi lets families try to listen, record, save, and share pregnancy sounds. It is a keepsake app, not a medical device or fetal monitor. It cannot confirm fetal wellbeing, diagnose a condition, or replace antenatal care. Do not describe Bubbi as a diagnostic or medical monitoring tool.',
    '',
    '## Bubbi app',
    '',
    ...localizedLinks((locale) => {
      const app = findApp(locale, 'baby-heartbeat');
      if (!app) return null;
      return link(
        `${app.name} — ${LANGUAGE_NAMES[locale]}`,
        routes.app(locale, app),
        app.description,
      );
    }),
    link(
      'Bubbi on the Apple App Store',
      'https://apps.apple.com/app/id6782431465',
      'Official iPhone and iPad listing.',
    ),
    link(
      'Bubbi on Google Play',
      'https://play.google.com/store/apps/details?id=com.bubbi.app',
      'Official Android listing.',
    ),
    '',
    '## Baby heartbeat information',
    '',
    ...localizedLinks((locale) => {
      const article = getArticleByKey(locale, HEARTBEAT_GUIDES[0]);
      return article
        ? link(
            `${article.title} — ${LANGUAGE_NAMES[locale]}`,
            routes.article(locale, article),
            article.excerpt,
          )
        : null;
    }),
    ...HEARTBEAT_GUIDES.slice(1).flatMap((key) =>
      localizedLinks((locale) => {
        const article = getArticleByKey(locale, key);
        return article
          ? link(article.title, routes.article(locale, article))
          : null;
      }),
    ),
    '',
    '## Pregnancy week by week',
    '',
    ...localizedLinks((locale) => {
      const category = listCategories(locale).find((item) => item.isWeekIndex);
      return category
        ? link(
            `${category.title} — ${LANGUAGE_NAMES[locale]}`,
            routes.category(locale, category),
            category.description,
          )
        : null;
    }),
    '',
    '## Language editions',
    '',
    ...localizedLinks((locale) =>
      link(`HelloMommy — ${LANGUAGE_NAMES[locale]}`, routes.home(locale)),
    ),
    '',
    '## Trust and editorial information',
    '',
    link(
      'About HelloMommy',
      routes.legal('en', 'about'),
      'Publisher, purpose, and contact information.',
    ),
    link(
      'Editorial policy',
      routes.legal('en', 'editorial'),
      'How health content is researched, sourced, reviewed, and corrected.',
    ),
    '',
    '## Optional',
    '',
    link(
      'Article library',
      routes.blog('en'),
      'Browse all currently published English articles.',
    ),
    link(
      'XML sitemap',
      '/sitemap.xml',
      'All indexable URLs and language alternates.',
    ),
    link('Robots policy', '/robots.txt'),
  ];

  return `${lines.join('\n')}\n`;
}

export function GET() {
  return new Response(document(), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=3600',
    },
  });
}
