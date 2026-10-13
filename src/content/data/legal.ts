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

const editorialCopy: Record<Locale, {
  intro: string;
  sourcesTitle: string;
  sources: string;
  reviewTitle: string;
  review: string;
  correctionsTitle: string;
  corrections: string;
  fundingTitle: string;
  funding: string;
}> = {
  en: {
    intro: 'HelloMommy publishes general pregnancy information and explains how it is prepared.',
    sourcesTitle: 'Sources',
    sources: 'Where an article cites guidance or research, its sources are listed on the page. A source citation does not mean that a clinician reviewed the article.',
    reviewTitle: 'Medical review',
    review: 'We name a medical reviewer only when a named, qualified professional has reviewed that specific article. Articles without a named reviewer should not be treated as medically reviewed. This site does not replace individual care.',
    correctionsTitle: 'Corrections',
    corrections: 'Send corrections to hello@hellomommy.co. We update factual errors and show the latest update date on the article.',
    fundingTitle: 'Our apps',
    funding: 'HelloMommy promotes its own apps. Promotional blocks are labelled. Bubbi is a keepsake app and cannot confirm a fetal heartbeat or assess a baby’s health.',
  },
  de: {
    intro: 'HelloMommy veröffentlicht allgemeine Informationen zur Schwangerschaft und erklärt, wie die Inhalte entstehen.',
    sourcesTitle: 'Quellen',
    sources: 'Wenn ein Artikel Leitlinien oder Forschung zitiert, stehen die Quellen auf der Seite. Eine Quellenangabe bedeutet nicht, dass eine Fachperson den Artikel medizinisch geprüft hat.',
    reviewTitle: 'Medizinische Prüfung',
    review: 'Wir nennen eine medizinische Fachperson nur, wenn eine namentlich genannte und qualifizierte Person den jeweiligen Artikel tatsächlich geprüft hat. Ohne diese Angabe ist der Artikel nicht als medizinisch geprüft zu verstehen. Die Website ersetzt keine persönliche Betreuung.',
    correctionsTitle: 'Korrekturen',
    corrections: 'Melde Fehler an hello@hellomommy.co. Wir korrigieren Sachfehler und zeigen das letzte Aktualisierungsdatum am Artikel.',
    fundingTitle: 'Unsere Apps',
    funding: 'HelloMommy bewirbt eigene Apps; Werbeblöcke sind gekennzeichnet. Bubbi ist eine Erinnerungs-App und kann weder einen Herzschlag bestätigen noch die Gesundheit des Babys beurteilen.',
  },
  it: {
    intro: 'HelloMommy pubblica informazioni generali sulla gravidanza e spiega come prepara i contenuti.',
    sourcesTitle: 'Fonti',
    sources: 'Quando un articolo cita linee guida o ricerche, le fonti sono indicate nella pagina. Citare una fonte non significa che il testo sia stato revisionato da un medico.',
    reviewTitle: 'Revisione medica',
    review: 'Indichiamo un revisore medico solo quando un professionista qualificato e identificato ha effettivamente esaminato quello specifico articolo. Senza un revisore nominato, l’articolo non va considerato revisionato dal punto di vista medico. Il sito non sostituisce l’assistenza personale.',
    correctionsTitle: 'Correzioni',
    corrections: 'Segnala gli errori a hello@hellomommy.co. Correggiamo le informazioni errate e mostriamo la data dell’ultimo aggiornamento.',
    fundingTitle: 'Le nostre app',
    funding: 'HelloMommy promuove le proprie app; i contenuti promozionali sono indicati. Bubbi è un’app per i ricordi e non può confermare il battito o valutare la salute del bambino.',
  },
  es: {
    intro: 'HelloMommy publica información general sobre el embarazo y explica cómo prepara sus contenidos.',
    sourcesTitle: 'Fuentes',
    sources: 'Cuando un artículo cita guías o estudios, las fuentes aparecen en la página. Citar una fuente no significa que un profesional sanitario haya revisado el texto.',
    reviewTitle: 'Revisión médica',
    review: 'Solo indicamos un revisor médico cuando un profesional identificado y cualificado ha revisado ese artículo concreto. Si no aparece un revisor nombrado, el artículo no debe considerarse revisado médicamente. La web no sustituye la atención personal.',
    correctionsTitle: 'Correcciones',
    corrections: 'Escribe a hello@hellomommy.co si encuentras un error. Corregimos los datos erróneos y mostramos la fecha de la última actualización.',
    fundingTitle: 'Nuestras apps',
    funding: 'HelloMommy promociona sus propias apps; los bloques promocionales están señalados. Bubbi es una app de recuerdos y no puede confirmar el latido ni evaluar la salud del bebé.',
  },
  pt: {
    intro: 'A HelloMommy publica informação geral sobre gravidez e explica como prepara os conteúdos.',
    sourcesTitle: 'Fontes',
    sources: 'Quando um artigo cita recomendações ou estudos, as fontes aparecem na página. Citar uma fonte não significa que um profissional de saúde reviu o texto.',
    reviewTitle: 'Revisão médica',
    review: 'Só indicamos um revisor médico quando um profissional identificado e qualificado reviu esse artigo específico. Sem um revisor nomeado, o artigo não deve ser considerado revisto clinicamente. O site não substitui cuidados individuais.',
    correctionsTitle: 'Correções',
    corrections: 'Envia correções para hello@hellomommy.co. Corrigimos erros factuais e mostramos a data da última atualização.',
    fundingTitle: 'As nossas apps',
    funding: 'A HelloMommy promove as suas próprias apps; os blocos promocionais estão identificados. A Bubbi é uma app de recordações e não confirma batimentos nem avalia a saúde do bebé.',
  },
  fr: {
    intro: 'HelloMommy publie des informations générales sur la grossesse et explique comment ses contenus sont préparés.',
    sourcesTitle: 'Sources',
    sources: 'Lorsqu’un article cite des recommandations ou des études, les sources figurent sur la page. Citer une source ne signifie pas qu’un soignant a relu l’article.',
    reviewTitle: 'Relecture médicale',
    review: 'Nous indiquons un relecteur médical uniquement lorsqu’un professionnel qualifié et identifié a réellement relu cet article précis. Sans relecteur nommé, l’article ne doit pas être considéré comme relu médicalement. Le site ne remplace pas un suivi individuel.',
    correctionsTitle: 'Corrections',
    corrections: 'Signalez les erreurs à hello@hellomommy.co. Nous corrigeons les faits inexacts et affichons la date de dernière mise à jour.',
    fundingTitle: 'Nos applis',
    funding: 'HelloMommy présente ses propres applis ; les blocs promotionnels sont identifiés. Bubbi est une appli souvenir et ne peut ni confirmer le rythme cardiaque ni évaluer la santé du bébé.',
  },
  uk: {
    intro: 'HelloMommy публікує загальну інформацію про вагітність і пояснює, як готує матеріали.',
    sourcesTitle: 'Джерела',
    sources: 'Якщо стаття посилається на рекомендації чи дослідження, джерела наведені на її сторінці. Наявність джерел не означає, що статтю перевірив лікар.',
    reviewTitle: 'Медичне рецензування',
    review: 'Ми вказуємо медичного рецензента лише тоді, коли названий кваліфікований фахівець справді перевірив саме цю статтю. Якщо рецензента не зазначено, статтю не слід вважати медично перевіреною. Сайт не замінює індивідуальну допомогу.',
    correctionsTitle: 'Виправлення',
    corrections: 'Повідомляйте про помилки на hello@hellomommy.co. Ми виправляємо фактичні неточності й показуємо дату останнього оновлення статті.',
    fundingTitle: 'Наші застосунки',
    funding: 'HelloMommy просуває власні застосунки; рекламні блоки позначені. Bubbi створений для спогадів і не підтверджує серцебиття та не оцінює здоров’я дитини.',
  },
};

function editorialBlocks(locale: Locale): LegalPage['blocks'] {
  const copy = editorialCopy[locale];
  return [
    p(copy.intro),
    h2(copy.sourcesTitle), p(copy.sources),
    h2(copy.reviewTitle), p(copy.review),
    h2(copy.correctionsTitle), p(copy.corrections),
    h2(copy.fundingTitle), p(copy.funding),
  ];
}

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
  if (fromCms) return key === 'editorial'
    ? {
        ...fromCms,
        blocks: editorialBlocks(locale),
        updatedAt: '2026-10-13',
        seo: { ...fromCms.seo, description: editorialCopy[locale].intro, noindex: false },
      }
    : fromCms;

  const title = titles[locale][key];
  const isSource = locale === DEFAULT_LOCALE;
  return {
    translationKey: key,
    locale,
    slug: slugs[locale][key],
    title,
    updatedAt: key === 'editorial' ? '2026-10-13' : '2026-08-20',
    blocks: key === 'editorial'
      ? editorialBlocks(locale)
      : isSource
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
      noindex: key === 'editorial' ? false : !isSource,
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
