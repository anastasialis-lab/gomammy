import type { Locale } from '@/lib/i18n/config';
import { LOCALES } from '@/lib/i18n/config';
import type { AppProduct } from '@/lib/content/types';
import { generatedFor } from '@/content/generated';

export const APP_KEYS = ['baby-heartbeat'] as const;
export type AppKey = (typeof APP_KEYS)[number];

/**
 * Store URLs live here so a single edit updates every CTA on the site.
 *
 * The App Store link is the storefront-less form (`/app/id…`) so Apple sends
 * each reader to their own regional store rather than to the US one.
 */
const STORE_URLS: Record<AppKey, { ios: string; android: string; campaign: string }> = {
  'baby-heartbeat': {
    ios: 'https://apps.apple.com/app/id6782431465',
    android: 'https://play.google.com/store/apps/details?id=com.bubbi.app',
    campaign: 'bubbi',
  },
};

type AppCopy = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: { title: string; body: string }[];
  disclaimer: string;
  seoTitle: string;
  seoDescription: string;
};

const copy: Record<Locale, Record<AppKey, AppCopy>> = {
  en: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Hear your baby for the first time.',
      description:
        'Rest your phone on your belly, put your headphones in, and listen. Bubbi records the moment as a waveform you can keep, save it next to your diary entries, and send it to your partner in one tap.',
      features: [
        {
          title: 'Listen and record',
          body: 'Capture the live waveform while you listen, then save the clip as a keepsake.',
        },
        {
          title: 'Your pregnancy diary',
          body: 'Notes, mood and photos week by week, with your recordings kept alongside them.',
        },
        {
          title: 'Watch baby grow',
          body: 'Size, length and weight for every week, with illustrated comparisons.',
        },
        {
          title: 'Share the moment',
          body: 'Send your partner a weekly card: baby’s size, a heartbeat clip and a note from you.',
        },
      ],
      disclaimer:
        'Bubbi is a keepsake app, not a medical device. It cannot assess your baby’s wellbeing and does not replace antenatal care — if you are worried about movements or anything else, contact your midwife or maternity unit straight away.',
      seoTitle: 'Bubbi — baby heartbeat monitor and pregnancy diary app',
      seoDescription:
        'Listen to your baby’s heartbeat on your phone, save the recording, keep a week-by-week pregnancy diary and share the moment. Free on iPhone and Android.',
    },
  },
  de: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Hör dein Baby zum ersten Mal.',
      description:
        'Leg dein Handy auf den Bauch, setz Kopfhörer auf und hör zu. Bubbi zeichnet den Moment als Wellenform auf, speichert ihn neben deinen Tagebucheinträgen und schickt ihn mit einem Tipp an deinen Partner.',
      features: [
        {
          title: 'Hören und aufnehmen',
          body: 'Nimm die Wellenform live auf und speichere den Clip als Erinnerung.',
        },
        {
          title: 'Dein Schwangerschaftstagebuch',
          body: 'Notizen, Stimmung und Fotos Woche für Woche — mit den Aufnahmen direkt daneben.',
        },
        {
          title: 'Zusehen, wie dein Baby wächst',
          body: 'Größe, Länge und Gewicht für jede Woche, mit anschaulichen Vergleichen.',
        },
        {
          title: 'Den Moment teilen',
          body: 'Schick deinem Partner eine Wochenkarte: Größe des Babys, ein Herzschlag-Clip und ein paar Zeilen von dir.',
        },
      ],
      disclaimer:
        'Bubbi ist eine Erinnerungs-App und kein Medizinprodukt. Sie kann das Befinden deines Babys nicht beurteilen und ersetzt keine Vorsorge — wenn du dir Sorgen um die Kindsbewegungen oder etwas anderes machst, melde dich sofort bei deiner Hebamme oder in der Klinik.',
      seoTitle: 'Bubbi — App für Herzschlag und Schwangerschaftstagebuch',
      seoDescription:
        'Höre den Herzschlag deines Babys über dein Handy, speichere die Aufnahme, führe ein Tagebuch Woche für Woche und teile den Moment. Kostenlos für iPhone und Android.',
    },
  },
  it: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Ascolta il tuo bambino per la prima volta.',
      description:
        'Appoggia il telefono sulla pancia, metti le cuffie e ascolta. Bubbi registra il momento come onda sonora, lo conserva accanto alle pagine del tuo diario e lo invia al tuo partner con un tocco.',
      features: [
        {
          title: 'Ascolta e registra',
          body: 'Cattura l’onda sonora mentre ascolti e salva la clip come ricordo.',
        },
        {
          title: 'Il tuo diario di gravidanza',
          body: 'Note, umore e foto settimana per settimana, con le registrazioni sempre accanto.',
        },
        {
          title: 'Guarda crescere il bambino',
          body: 'Dimensioni, lunghezza e peso per ogni settimana, con confronti illustrati.',
        },
        {
          title: 'Condividi il momento',
          body: 'Manda al partner una cartolina settimanale: dimensioni, una clip del battito e due righe da te.',
        },
      ],
      disclaimer:
        'Bubbi è un’app per conservare ricordi, non un dispositivo medico. Non può valutare il benessere del bambino e non sostituisce i controlli in gravidanza: se sei preoccupata per i movimenti o per altro, contatta subito l’ostetrica o il punto nascita.',
      seoTitle: 'Bubbi — app per il battito del bambino e diario di gravidanza',
      seoDescription:
        'Ascolta il battito del tuo bambino dal telefono, salva la registrazione, tieni un diario settimana per settimana e condividi il momento. Gratis su iPhone e Android.',
    },
  },
  es: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Escucha a tu bebé por primera vez.',
      description:
        'Apoya el móvil en la barriga, ponte los auriculares y escucha. Bubbi graba el momento como una onda que puedes guardar, lo conserva junto a tu diario y lo envía a tu pareja con un toque.',
      features: [
        {
          title: 'Escucha y graba',
          body: 'Captura la onda mientras escuchas y guarda el clip como recuerdo.',
        },
        {
          title: 'Tu diario de embarazo',
          body: 'Notas, ánimo y fotos semana a semana, con tus grabaciones al lado.',
        },
        {
          title: 'Ve crecer a tu bebé',
          body: 'Tamaño, longitud y peso de cada semana, con comparaciones ilustradas.',
        },
        {
          title: 'Comparte el momento',
          body: 'Envía a tu pareja una tarjeta semanal: el tamaño del bebé, un clip del latido y unas líneas tuyas.',
        },
      ],
      disclaimer:
        'Bubbi es una app de recuerdos, no un dispositivo médico. No puede valorar el bienestar de tu bebé ni sustituye el seguimiento del embarazo: si te preocupan los movimientos o cualquier otra cosa, contacta de inmediato con tu matrona o el hospital.',
      seoTitle: 'Bubbi — app de latido del bebé y diario de embarazo',
      seoDescription:
        'Escucha el latido de tu bebé con el móvil, guarda la grabación, lleva un diario semana a semana y comparte el momento. Gratis en iPhone y Android.',
    },
  },
  pt: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Ouve o teu bebé pela primeira vez.',
      description:
        'Pousa o telemóvel na barriga, coloca os auscultadores e ouve. A Bubbi grava o momento como uma onda que podes guardar, mantém-no junto ao teu diário e envia-o ao teu companheiro num toque.',
      features: [
        {
          title: 'Ouve e grava',
          body: 'Capta a onda sonora enquanto ouves e guarda o clipe como recordação.',
        },
        {
          title: 'O teu diário de gravidez',
          body: 'Notas, humor e fotografias semana a semana, com as gravações mesmo ao lado.',
        },
        {
          title: 'Vê o bebé crescer',
          body: 'Tamanho, comprimento e peso em cada semana, com comparações ilustradas.',
        },
        {
          title: 'Partilha o momento',
          body: 'Envia um cartão semanal: o tamanho do bebé, um clipe do batimento e umas linhas tuas.',
        },
      ],
      disclaimer:
        'A Bubbi é uma app de recordações, não um dispositivo médico. Não avalia o bem-estar do bebé nem substitui a vigilância da gravidez — se estiveres preocupada com os movimentos ou com outra coisa, contacta já a parteira ou a maternidade.',
      seoTitle: 'Bubbi — app de batimento do bebé e diário de gravidez',
      seoDescription:
        'Ouve o batimento do teu bebé no telemóvel, guarda a gravação, mantém um diário semana a semana e partilha o momento. Grátis em iPhone e Android.',
    },
  },
  fr: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Entendez votre bébé pour la première fois.',
      description:
        'Posez votre téléphone sur votre ventre, mettez vos écouteurs et écoutez. Bubbi enregistre le moment sous forme d’onde, le conserve à côté de votre journal et l’envoie à votre partenaire en un geste.',
      features: [
        {
          title: 'Écouter et enregistrer',
          body: 'Capturez l’onde pendant que vous écoutez, puis gardez le clip en souvenir.',
        },
        {
          title: 'Votre journal de grossesse',
          body: 'Notes, humeur et photos semaine après semaine, avec vos enregistrements à côté.',
        },
        {
          title: 'Voir bébé grandir',
          body: 'Taille, longueur et poids pour chaque semaine, avec des comparaisons illustrées.',
        },
        {
          title: 'Partager le moment',
          body: 'Envoyez une carte hebdomadaire à votre partenaire : la taille de bébé, un clip du cœur et un mot de vous.',
        },
      ],
      disclaimer:
        'Bubbi est une application souvenir, pas un dispositif médical. Elle ne permet pas d’évaluer l’état de votre bébé et ne remplace pas le suivi de grossesse : en cas d’inquiétude sur les mouvements ou autre, contactez immédiatement votre sage-femme ou la maternité.',
      seoTitle: 'Bubbi — appli battements de cœur et journal de grossesse',
      seoDescription:
        'Écoutez les battements de cœur de votre bébé avec votre téléphone, gardez l’enregistrement, tenez un journal semaine après semaine et partagez le moment. Gratuit sur iPhone et Android.',
    },
  },
  uk: {
    'baby-heartbeat': {
      slug: 'bubbi',
      name: 'Baby Heartbeat Monitor: Bubbi',
      tagline: 'Почуйте свою дитину вперше.',
      description:
        'Покладіть телефон на живіт, вдягніть навушники — і слухайте. Bubbi записує цей момент як звукову хвилю, зберігає його поруч із записами щоденника й надсилає партнеру одним дотиком.',
      features: [
        {
          title: 'Слухайте й записуйте',
          body: 'Записуйте звукову хвилю просто під час прослуховування й зберігайте як спогад.',
        },
        {
          title: 'Ваш щоденник вагітності',
          body: 'Нотатки, настрій і фото тиждень за тижнем — записи зберігаються поруч.',
        },
        {
          title: 'Спостерігайте, як росте дитина',
          body: 'Розмір, довжина й вага для кожного тижня з наочними порівняннями.',
        },
        {
          title: 'Діліться моментом',
          body: 'Надішліть партнеру щотижневу картку: розмір дитини, запис серцебиття й кілька слів від вас.',
        },
      ],
      disclaimer:
        'Bubbi — застосунок для спогадів, а не медичний пристрій. Він не оцінює стан дитини й не замінює спостереження за вагітністю: якщо вас турбують рухи дитини чи щось інше, одразу зв’яжіться з акушеркою або пологовим.',
      seoTitle: 'Bubbi — застосунок серцебиття дитини та щоденник вагітності',
      seoDescription:
        'Слухайте серцебиття дитини на телефоні, зберігайте запис, ведіть щоденник тиждень за тижнем і діліться моментом. Безкоштовно на iPhone та Android.',
    },
  },
};

/** Store artwork, downloaded from the App Store listing for this app. */
const ARTWORK = {
  icon: { src: '/images/apps/bubbi/icon.png', width: 512, height: 512 },
  screenshots: [1, 2, 3, 4].map((n) => ({
    src: `/images/apps/bubbi/screen-${n}.jpg`,
    width: 600,
    height: 1299,
  })),
};

export function getApps(locale: Locale): AppProduct[] {
  const fromCms = generatedFor('apps', locale);
  if (fromCms) return fromCms;

  return APP_KEYS.map((key) => {
    const c = copy[locale][key];
    const store = STORE_URLS[key];
    return {
      translationKey: key,
      locale,
      slug: c.slug,
      name: c.name,
      tagline: c.tagline,
      description: c.description,
      icon: { ...ARTWORK.icon, alt: c.name },
      screenshots: ARTWORK.screenshots.map((shot, index) => ({
        ...shot,
        alt: `${c.name} — ${c.features[index]?.title ?? index + 1}`,
      })),
      features: c.features,
      appStoreUrl: store.ios,
      googlePlayUrl: store.android,
      campaign: store.campaign,
      disclaimer: c.disclaimer,
      relatedArticleKeys: ['baby-heartbeat-in-pregnancy'],
      seo: { title: c.seoTitle, description: c.seoDescription },
    } satisfies AppProduct;
  });
}

export function getApp(locale: Locale, key: string): AppProduct | undefined {
  return getApps(locale).find((app) => app.translationKey === key);
}

export function getAppBySlug(locale: Locale, slug: string): AppProduct | undefined {
  return getApps(locale).find((app) => app.slug === slug);
}

export function appSlugsByLocale(key: string): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [
      locale,
      getApps(locale).find((app) => app.translationKey === key)?.slug ??
        copy[locale][key as AppKey].slug,
    ]),
  ) as Record<Locale, string>;
}
