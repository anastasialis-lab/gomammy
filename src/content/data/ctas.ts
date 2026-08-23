import type { Locale } from '@/lib/i18n/config';
import type { CtaBlock } from '@/lib/content/types';
import { generatedFor } from '@/content/generated';

/**
 * Promo blocks available to the editor. In the CMS these become documents;
 * here they are seeded so every article template has something real to render.
 * `trackingId` is what shows up in GA4 as `cta_id`.
 *
 * The app blocks carry a `note`: Bubbi sits next to health content, so the
 * "keepsake, not a medical device" line travels with every placement rather
 * than living only on the app page.
 */
type CtaCopy = Pick<CtaBlock, 'eyebrow' | 'title' | 'body' | 'buttonLabel' | 'note'>;

const copy: Record<Locale, Record<string, CtaCopy>> = {
  en: {
    'bubbi-inline': {
      eyebrow: 'Bubbi app',
      title: 'Hear your baby’s heartbeat',
      body: 'Rest your phone on your belly, listen, and keep the recording next to your week-by-week diary.',
      buttonLabel: 'Explore Bubbi',
      note: 'Free. A keepsake app, not a medical device.',
    },
    'bubbi-sidebar': {
      eyebrow: 'Bubbi app',
      title: 'Listen. Record. Keep.',
      body: 'Your baby’s heartbeat, saved as a keepsake.',
      buttonLabel: 'Get the app',
      note: 'Not a medical device.',
    },
    'weeks-banner': {
      eyebrow: 'Pregnancy by week',
      title: 'Find your week',
      body: 'Forty pages, one for every week — development, symptoms and what to expect.',
      buttonLabel: 'Browse the weeks',
    },
  },
  de: {
    'bubbi-inline': {
      eyebrow: 'Bubbi App',
      title: 'Hör den Herzschlag deines Babys',
      body: 'Leg dein Handy auf den Bauch, hör zu und bewahre die Aufnahme neben deinem Wochentagebuch auf.',
      buttonLabel: 'Bubbi entdecken',
      note: 'Kostenlos. Eine Erinnerungs-App, kein Medizinprodukt.',
    },
    'bubbi-sidebar': {
      eyebrow: 'Bubbi App',
      title: 'Hören. Aufnehmen. Behalten.',
      body: 'Der Herzschlag deines Babys, als Erinnerung gespeichert.',
      buttonLabel: 'App holen',
      note: 'Kein Medizinprodukt.',
    },
    'weeks-banner': {
      eyebrow: 'Schwangerschaftswochen',
      title: 'Finde deine Woche',
      body: 'Vierzig Seiten, eine für jede Woche — Entwicklung, Anzeichen und was dich erwartet.',
      buttonLabel: 'Zu den Wochen',
    },
  },
  it: {
    'bubbi-inline': {
      eyebrow: 'App Bubbi',
      title: 'Ascolta il battito del tuo bambino',
      body: 'Appoggia il telefono sulla pancia, ascolta e conserva la registrazione accanto al tuo diario settimanale.',
      buttonLabel: 'Scopri Bubbi',
      note: 'Gratis. Un’app per ricordi, non un dispositivo medico.',
    },
    'bubbi-sidebar': {
      eyebrow: 'App Bubbi',
      title: 'Ascolta. Registra. Conserva.',
      body: 'Il battito del tuo bambino, salvato come ricordo.',
      buttonLabel: 'Scarica l’app',
      note: 'Non è un dispositivo medico.',
    },
    'weeks-banner': {
      eyebrow: 'Settimana per settimana',
      title: 'Trova la tua settimana',
      body: 'Quaranta pagine, una per ogni settimana: sviluppo, sintomi e cosa aspettarti.',
      buttonLabel: 'Vai alle settimane',
    },
  },
  es: {
    'bubbi-inline': {
      eyebrow: 'App Bubbi',
      title: 'Escucha el latido de tu bebé',
      body: 'Apoya el móvil en la barriga, escucha y guarda la grabación junto a tu diario semana a semana.',
      buttonLabel: 'Descubre Bubbi',
      note: 'Gratis. Una app de recuerdos, no un dispositivo médico.',
    },
    'bubbi-sidebar': {
      eyebrow: 'App Bubbi',
      title: 'Escucha. Graba. Guarda.',
      body: 'El latido de tu bebé, guardado como recuerdo.',
      buttonLabel: 'Consigue la app',
      note: 'No es un dispositivo médico.',
    },
    'weeks-banner': {
      eyebrow: 'Semana a semana',
      title: 'Encuentra tu semana',
      body: 'Cuarenta páginas, una por semana: desarrollo, síntomas y qué esperar.',
      buttonLabel: 'Ver las semanas',
    },
  },
  pt: {
    'bubbi-inline': {
      eyebrow: 'App Bubbi',
      title: 'Ouve o batimento do teu bebé',
      body: 'Pousa o telemóvel na barriga, ouve e guarda a gravação ao lado do teu diário semana a semana.',
      buttonLabel: 'Conhecer a Bubbi',
      note: 'Grátis. Uma app de recordações, não um dispositivo médico.',
    },
    'bubbi-sidebar': {
      eyebrow: 'App Bubbi',
      title: 'Ouve. Grava. Guarda.',
      body: 'O batimento do teu bebé, guardado como recordação.',
      buttonLabel: 'Obter a app',
      note: 'Não é um dispositivo médico.',
    },
    'weeks-banner': {
      eyebrow: 'Semana a semana',
      title: 'Encontra a tua semana',
      body: 'Quarenta páginas, uma por semana: desenvolvimento, sintomas e o que esperar.',
      buttonLabel: 'Ver as semanas',
    },
  },
  fr: {
    'bubbi-inline': {
      eyebrow: 'Appli Bubbi',
      title: 'Écoutez le cœur de votre bébé',
      body: 'Posez votre téléphone sur votre ventre, écoutez, et gardez l’enregistrement à côté de votre journal semaine par semaine.',
      buttonLabel: 'Découvrir Bubbi',
      note: 'Gratuit. Une appli souvenir, pas un dispositif médical.',
    },
    'bubbi-sidebar': {
      eyebrow: 'Appli Bubbi',
      title: 'Écouter. Enregistrer. Garder.',
      body: 'Les battements de cœur de votre bébé, gardés en souvenir.',
      buttonLabel: 'Obtenir l’appli',
      note: 'Pas un dispositif médical.',
    },
    'weeks-banner': {
      eyebrow: 'Semaine par semaine',
      title: 'Trouvez votre semaine',
      body: 'Quarante pages, une par semaine : développement, symptômes et ce qui vous attend.',
      buttonLabel: 'Voir les semaines',
    },
  },
  uk: {
    'bubbi-inline': {
      eyebrow: 'Застосунок Bubbi',
      title: 'Почуйте серцебиття своєї дитини',
      body: 'Покладіть телефон на живіт, послухайте — і збережіть запис поруч зі щоденником по тижнях.',
      buttonLabel: 'Переглянути Bubbi',
      note: 'Безкоштовно. Застосунок для спогадів, а не медичний пристрій.',
    },
    'bubbi-sidebar': {
      eyebrow: 'Застосунок Bubbi',
      title: 'Слухайте. Записуйте. Зберігайте.',
      body: 'Серцебиття вашої дитини, збережене як спогад.',
      buttonLabel: 'Завантажити застосунок',
      note: 'Не є медичним пристроєм.',
    },
    'weeks-banner': {
      eyebrow: 'Вагітність по тижнях',
      title: 'Знайдіть свій тиждень',
      body: 'Сорок сторінок, по одній на кожен тиждень: розвиток, симптоми й чого очікувати.',
      buttonLabel: 'Перейти до тижнів',
    },
  },
};

export function getCtas(locale: Locale): CtaBlock[] {
  const fromCms = generatedFor('ctas', locale);
  if (fromCms) return fromCms;

  const c = copy[locale];
  return [
    {
      id: 'bubbi-inline',
      locale,
      kind: 'app-both',
      trackingId: 'bubbi_inline',
      appId: 'baby-heartbeat',
      ...c['bubbi-inline'],
    },
    {
      id: 'bubbi-sidebar',
      locale,
      kind: 'app-both',
      trackingId: 'bubbi_sidebar',
      appId: 'baby-heartbeat',
      ...c['bubbi-sidebar'],
    },
    {
      id: 'weeks-banner',
      locale,
      kind: 'banner',
      trackingId: 'weeks_banner',
      href: 'category:by-week',
      ...c['weeks-banner'],
    },
  ];
}

export function getCta(locale: Locale, id: string): CtaBlock | undefined {
  return getCtas(locale).find((cta) => cta.id === id);
}
