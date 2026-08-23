import type { Locale } from '@/lib/i18n/config';
import { DEFAULT_LOCALE, LOCALES } from '@/lib/i18n/config';
import type { LegalPage } from '@/lib/content/types';
import { h2, p, ul } from './articles/helpers';
import { generatedFor } from '@/content/generated';

export const LEGAL_KEYS = ['privacy', 'cookies', 'terms', 'about', 'editorial'] as const;
export type LegalKey = (typeof LEGAL_KEYS)[number];

const slugs: Record<Locale, Record<LegalKey, string>> = {
  en: {
    privacy: 'privacy-policy',
    cookies: 'cookie-policy',
    terms: 'terms-of-use',
    about: 'about-us',
    editorial: 'editorial-policy',
  },
  de: {
    privacy: 'datenschutz',
    cookies: 'cookie-richtlinie',
    terms: 'nutzungsbedingungen',
    about: 'ueber-uns',
    editorial: 'redaktionelle-grundsaetze',
  },
  it: {
    privacy: 'informativa-privacy',
    cookies: 'cookie-policy',
    terms: 'termini-di-utilizzo',
    about: 'chi-siamo',
    editorial: 'linea-editoriale',
  },
  es: {
    privacy: 'politica-de-privacidad',
    cookies: 'politica-de-cookies',
    terms: 'terminos-de-uso',
    about: 'quienes-somos',
    editorial: 'politica-editorial',
  },
  pt: {
    privacy: 'politica-de-privacidade',
    cookies: 'politica-de-cookies',
    terms: 'termos-de-utilizacao',
    about: 'sobre-nos',
    editorial: 'politica-editorial',
  },
  fr: {
    privacy: 'politique-de-confidentialite',
    cookies: 'politique-des-cookies',
    terms: 'conditions-d-utilisation',
    about: 'qui-sommes-nous',
    editorial: 'charte-editoriale',
  },
  uk: {
    privacy: 'polityka-konfidentsiinosti',
    cookies: 'polityka-cookies',
    terms: 'umovy-korystuvannia',
    about: 'pro-nas',
    editorial: 'redaktsiina-polityka',
  },
};

const titles: Record<Locale, Record<LegalKey, string>> = {
  en: {
    privacy: 'Privacy policy',
    cookies: 'Cookie policy',
    terms: 'Terms of use',
    about: 'About HelloMommy',
    editorial: 'Editorial policy',
  },
  de: {
    privacy: 'Datenschutzerklärung',
    cookies: 'Cookie-Richtlinie',
    terms: 'Nutzungsbedingungen',
    about: 'Über HelloMommy',
    editorial: 'Redaktionelle Grundsätze',
  },
  it: {
    privacy: 'Informativa sulla privacy',
    cookies: 'Cookie policy',
    terms: 'Termini di utilizzo',
    about: 'Chi è HelloMommy',
    editorial: 'Linea editoriale',
  },
  es: {
    privacy: 'Política de privacidad',
    cookies: 'Política de cookies',
    terms: 'Términos de uso',
    about: 'Sobre HelloMommy',
    editorial: 'Política editorial',
  },
  pt: {
    privacy: 'Política de privacidade',
    cookies: 'Política de cookies',
    terms: 'Termos de utilização',
    about: 'Sobre a HelloMommy',
    editorial: 'Política editorial',
  },
  fr: {
    privacy: 'Politique de confidentialité',
    cookies: 'Politique des cookies',
    terms: 'Conditions d’utilisation',
    about: 'À propos de HelloMommy',
    editorial: 'Charte éditoriale',
  },
  uk: {
    privacy: 'Політика конфіденційності',
    cookies: 'Політика cookie',
    terms: 'Умови користування',
    about: 'Про HelloMommy',
    editorial: 'Редакційна політика',
  },
};

/**
 * Legal copy is authored in English only.
 *
 * A privacy policy is a legal instrument: publishing a machine translation of
 * one in five more jurisdictions would be worse than pointing readers at the
 * authoritative version. Non-English legal pages therefore render a short,
 * localised notice with a link to the English text, and are marked noindex
 * until a lawyer-reviewed translation replaces them in the CMS.
 */
const pendingNotice: Record<Locale, string> = {
  en: '',
  de: 'Diese Seite liegt derzeit nur auf Englisch vor. Die geprüfte deutsche Fassung folgt.',
  it: 'Questa pagina è per ora disponibile solo in inglese. La versione italiana verificata sarà pubblicata a breve.',
  es: 'Esta página está disponible por ahora solo en inglés. La versión revisada en español se publicará en breve.',
  pt: 'Esta página está por agora disponível apenas em inglês. A versão portuguesa revista será publicada em breve.',
  fr: 'Cette page n’est pour l’instant disponible qu’en anglais. La version française vérifiée sera publiée prochainement.',
  uk: 'Наразі ця сторінка доступна лише англійською. Перевірену українську версію буде опубліковано найближчим часом.',
};

const readInEnglish: Record<Locale, string> = {
  en: '',
  de: 'Auf Englisch lesen',
  it: 'Leggi in inglese',
  es: 'Leer en inglés',
  pt: 'Ler em inglês',
  fr: 'Lire en anglais',
  uk: 'Читати англійською',
};

const englishBodies: Record<LegalKey, ReturnType<typeof p>[]> = {
  privacy: [
    p(
      'This policy explains what HelloMommy collects when you read the site, why, and what you can decide about it. It applies to hellomommy.co and to every language version of it.',
    ),
    h2('What we collect'),
    ul([
      'Analytics data — pages viewed, referring source, country, language, device type and scroll depth — but only after you accept analytics cookies.',
      'Technical data your browser sends with every request, such as IP address, which is needed to deliver the page and to keep the service secure.',
      'Anything you choose to send us by email.',
    ]),
    h2('What we do not do'),
    ul([
      'We do not ask for, store or infer health data about you or your pregnancy on this website.',
      'We do not sell personal data.',
      'We do not run advertising cookies without your consent.',
    ]),
    h2('Legal basis'),
    p(
      'Necessary cookies are used on the basis of legitimate interest in operating the site. Analytics, marketing and preference cookies are used only with your consent, which you can withdraw at any time from the cookie settings link in the footer.',
    ),
    h2('Your rights'),
    p(
      'If you are in the EU or UK you can request access to your data, correction, deletion, restriction, portability, and you can object to processing. Write to hello@hellomommy.co and we will respond within one month.',
    ),
    h2('Retention'),
    p(
      'Analytics data is retained for 14 months. Emails are kept for as long as needed to answer you, and then deleted.',
    ),
  ],
  cookies: [
    p(
      'Cookies are small files stored by your browser. We group them into four categories, and you choose which ones to allow.',
    ),
    h2('Necessary'),
    p('Required to serve pages, remember your language and store your cookie choice. These cannot be switched off.'),
    h2('Analytics'),
    p(
      'Google Analytics 4, used to count visits and understand which articles help. Loaded only after you accept, using Google Consent Mode so no analytics cookies are set beforehand.',
    ),
    h2('Marketing'),
    p('Used to measure app campaigns. Not loaded unless you accept this category.'),
    h2('Preferences'),
    p('Remember reading settings so the site behaves the way you left it.'),
    h2('Changing your mind'),
    p('Select “Cookie settings” in the footer at any time to change or withdraw consent.'),
  ],
  terms: [
    p(
      'By using HelloMommy you accept these terms. If you do not agree with them, please do not use the site.',
    ),
    h2('Information, not medical advice'),
    p(
      'Everything published here is general information about pregnancy and parenthood. It is not a diagnosis, a treatment plan or a substitute for care from your doctor or midwife. In an emergency, contact your local emergency service.',
    ),
    h2('Content and accuracy'),
    p(
      'We date every article and review health content against current antenatal guidance, but medicine changes and no article can account for your individual situation.',
    ),
    h2('Intellectual property'),
    p('The text, design and brand on this site belong to HelloMommy. You may link to it and quote it with attribution.'),
    h2('Links to other sites'),
    p('We link to external sources for reference. We are not responsible for their content or their privacy practices.'),
  ],
  about: [
    p(
      'HelloMommy is a digital companion for pregnancy: a place to read something calm and accurate at two in the morning, and a set of apps that keep the practical side in one place.',
    ),
    h2('What we publish'),
    p(
      'Forty week-by-week pages, plus articles on symptoms, health, birth and your baby’s development — written in plain language, in six languages, and updated as guidance changes.',
    ),
    h2('How we are funded'),
    p(
      'The site is funded by our own apps. We do not take payment for editorial coverage, and any commercial placement is visually separated from editorial content.',
    ),
    h2('Contact'),
    p('Write to hello@hellomommy.co. We read everything, including corrections.'),
  ],
  editorial: [
    p(
      'Health content deserves to say where it comes from. This is how HelloMommy articles are made.',
    ),
    h2('Sourcing'),
    p(
      'Health claims are checked against national antenatal guidance and international bodies such as the WHO, and the sources are listed at the end of each article with the date they were last checked.',
    ),
    h2('Review'),
    p(
      'Clinical articles are reviewed before publication, and the reviewer is named on the page. Every article carries a publication date and a last-updated date.',
    ),
    h2('Corrections'),
    p(
      'If something is wrong, tell us at hello@hellomommy.co. Corrections to facts are made promptly and noted in the updated date.',
    ),
    h2('Independence'),
    p(
      'Editorial decisions are made by the editorial team. Promotional blocks for our apps are labelled and never written as if they were advice.',
    ),
  ],
};

export function legalSlug(locale: Locale, key: LegalKey): string {
  return slugs[locale][key];
}

export function legalSlugsByLocale(key: LegalKey): Record<Locale, string> {
  return Object.fromEntries(LOCALES.map((locale) => [locale, slugs[locale][key]])) as Record<
    Locale,
    string
  >;
}

export function getLegalPage(locale: Locale, key: LegalKey): LegalPage {
  const fromCms = generatedFor('legal', locale)?.find((page) => page.translationKey === key);
  if (fromCms) return fromCms;

  const title = titles[locale][key];
  const isSource = locale === DEFAULT_LOCALE;
  return {
    translationKey: key,
    locale,
    slug: slugs[locale][key],
    title,
    updatedAt: '2026-08-20',
    blocks: isSource
      ? englishBodies[key]
      : [
          p(pendingNotice[locale]),
          p({
            text: `${readInEnglish[locale]} — ${titles.en[key]}`,
            href: `/${DEFAULT_LOCALE}/${slugs.en[key]}`,
          }),
        ],
    seo: {
      title,
      description: isSource ? `${title} — HelloMommy.` : pendingNotice[locale],
      noindex: !isSource,
    },
  };
}

export function getLegalPageBySlug(locale: Locale, slug: string): LegalPage | undefined {
  const key = LEGAL_KEYS.find((candidate) => slugs[locale][candidate] === slug);
  return key ? getLegalPage(locale, key) : undefined;
}

export function listLegalPages(locale: Locale): LegalPage[] {
  return LEGAL_KEYS.map((key) => getLegalPage(locale, key));
}
