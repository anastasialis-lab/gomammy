import type { Locale } from '@/lib/i18n/config';
import type { AppProduct, CtaBlock } from '@/lib/content/types';

/** Public copy shared by seed content and Sanity snapshots until the CMS is corrected. */
const safeCopy: Record<Locale, {
  tagline: string;
  description: string;
  recordFeature: string;
  shareFeature: string;
  disclaimer: string;
  seoTitle: string;
  seoDescription: string;
  ctaTitle: string;
  ctaBody: string;
  sidebarBody: string;
  ctaNote: string;
}> = {
  en: {
    tagline: 'Keep the sounds and memories of your pregnancy.',
    description: 'Bubbi lets you record audio moments, keep them with your pregnancy diary and share memories with someone close to you. A recording cannot identify its source or confirm a baby’s heartbeat.',
    recordFeature: 'Record an audio moment and save it with your diary. A rhythm in the recording does not establish where the sound came from.',
    shareFeature: 'Share a weekly card with a diary note or audio memory. A recording is not a health check.',
    disclaimer: 'Bubbi is a keepsake app, not a medical device. It cannot confirm a fetal heartbeat or assess your baby’s wellbeing. If movements change or you have any concern, contact your midwife or maternity unit promptly; do not use the app for reassurance.',
    seoTitle: 'Bubbi — pregnancy diary and audio keepsake app',
    seoDescription: 'Keep pregnancy diary entries, audio memories and weekly cards with Bubbi. Recordings cannot confirm a baby’s heartbeat or assess health.',
    ctaTitle: 'Keep your pregnancy memories',
    ctaBody: 'Record an audio moment and save it with your week-by-week diary in Bubbi.',
    sidebarBody: 'Audio moments and diary entries, kept together.',
    ctaNote: 'A keepsake app, not a medical device or heartbeat check.',
  },
  de: {
    tagline: 'Bewahre Klänge und Erinnerungen an deine Schwangerschaft auf.',
    description: 'Mit Bubbi kannst du Audiomomente aufnehmen, im Schwangerschaftstagebuch speichern und mit vertrauten Menschen teilen. Eine Aufnahme kann die Schallquelle nicht bestimmen und keinen Herzschlag des Babys bestätigen.',
    recordFeature: 'Nimm einen Audiomoment auf und speichere ihn im Tagebuch. Ein Rhythmus in der Aufnahme belegt nicht, woher das Geräusch kommt.',
    shareFeature: 'Teile eine Wochenkarte mit einer Notiz oder Audioerinnerung. Eine Aufnahme ist keine Gesundheitskontrolle.',
    disclaimer: 'Bubbi ist eine Erinnerungs-App, kein Medizinprodukt. Sie kann den Herzschlag des Babys nicht bestätigen oder sein Befinden beurteilen. Wenn sich die Kindsbewegungen verändern oder du dir Sorgen machst, wende dich sofort an deine Hebamme oder die Klinik. Nutze die App nicht zur Beruhigung.',
    seoTitle: 'Bubbi — Schwangerschaftstagebuch und Audioerinnerungen',
    seoDescription: 'Bewahre Tagebucheinträge, Audiomomente und Wochenkarten mit Bubbi auf. Aufnahmen bestätigen keinen Herzschlag und beurteilen nicht die Gesundheit.',
    ctaTitle: 'Bewahre deine Schwangerschaftserinnerungen auf',
    ctaBody: 'Nimm einen Audiomoment auf und speichere ihn mit deinem Wochentagebuch in Bubbi.',
    sidebarBody: 'Audiomomente und Tagebucheinträge an einem Ort.',
    ctaNote: 'Erinnerungs-App, kein Medizinprodukt oder Herzschlagtest.',
  },
  it: {
    tagline: 'Conserva i suoni e i ricordi della gravidanza.',
    description: 'Bubbi ti permette di registrare momenti audio, conservarli nel diario di gravidanza e condividere i ricordi. Una registrazione non può identificare la fonte del suono né confermare il battito del bambino.',
    recordFeature: 'Registra un momento audio e salvalo nel diario. Un ritmo nella registrazione non ne identifica la fonte.',
    shareFeature: 'Condividi una scheda settimanale con una nota o un ricordo audio. Una registrazione non è un controllo medico.',
    disclaimer: 'Bubbi è un’app per i ricordi, non un dispositivo medico. Non può confermare il battito del bambino né valutarne il benessere. Se i movimenti cambiano o hai dubbi, contatta subito l’ostetrica o il punto nascita; non usare l’app per rassicurarti.',
    seoTitle: 'Bubbi — diario di gravidanza e ricordi audio',
    seoDescription: 'Conserva note, ricordi audio e schede settimanali con Bubbi. Le registrazioni non confermano il battito del bambino né valutano la salute.',
    ctaTitle: 'Conserva i ricordi della gravidanza',
    ctaBody: 'Registra un momento audio e salvalo nel diario settimana per settimana di Bubbi.',
    sidebarBody: 'Momenti audio e pagine del diario, insieme.',
    ctaNote: 'Un’app per i ricordi, non un dispositivo medico o un controllo del battito.',
  },
  es: {
    tagline: 'Guarda los sonidos y recuerdos de tu embarazo.',
    description: 'Bubbi te permite grabar momentos de audio, guardarlos en tu diario de embarazo y compartir recuerdos. Una grabación no puede identificar el origen del sonido ni confirmar el latido del bebé.',
    recordFeature: 'Graba un momento de audio y guárdalo en tu diario. Un ritmo en la grabación no demuestra de dónde procede.',
    shareFeature: 'Comparte una tarjeta semanal con una nota o un recuerdo de audio. Una grabación no es un control de salud.',
    disclaimer: 'Bubbi es una app de recuerdos, no un dispositivo médico. No puede confirmar el latido del bebé ni evaluar su bienestar. Si cambian sus movimientos o tienes alguna preocupación, contacta enseguida con tu matrona o maternidad; no uses la app para tranquilizarte.',
    seoTitle: 'Bubbi — diario de embarazo y recuerdos de audio',
    seoDescription: 'Guarda notas, recuerdos de audio y tarjetas semanales con Bubbi. Las grabaciones no confirman el latido del bebé ni evalúan su salud.',
    ctaTitle: 'Guarda tus recuerdos del embarazo',
    ctaBody: 'Graba un momento de audio y guárdalo con tu diario semana a semana en Bubbi.',
    sidebarBody: 'Momentos de audio y páginas del diario, juntos.',
    ctaNote: 'Una app de recuerdos, no un dispositivo médico ni un control del latido.',
  },
  pt: {
    tagline: 'Guarda os sons e as memórias da gravidez.',
    description: 'A Bubbi permite gravar momentos áudio, guardá-los no diário de gravidez e partilhar memórias. Uma gravação não identifica a origem do som nem confirma os batimentos do bebé.',
    recordFeature: 'Grava um momento áudio e guarda-o no diário. Um ritmo na gravação não comprova de onde vem o som.',
    shareFeature: 'Partilha um cartão semanal com uma nota ou memória áudio. Uma gravação não é uma avaliação de saúde.',
    disclaimer: 'A Bubbi é uma app de recordações, não um dispositivo médico. Não confirma os batimentos do bebé nem avalia o seu bem-estar. Se os movimentos mudarem ou tiveres alguma preocupação, contacta de imediato a parteira ou a maternidade; não uses a app para te tranquilizares.',
    seoTitle: 'Bubbi — diário de gravidez e memórias áudio',
    seoDescription: 'Guarda notas, memórias áudio e cartões semanais com a Bubbi. As gravações não confirmam os batimentos do bebé nem avaliam a saúde.',
    ctaTitle: 'Guarda as memórias da gravidez',
    ctaBody: 'Grava um momento áudio e guarda-o no teu diário semana a semana na Bubbi.',
    sidebarBody: 'Momentos áudio e páginas do diário, juntos.',
    ctaNote: 'App de recordações, não um dispositivo médico ou teste dos batimentos.',
  },
  fr: {
    tagline: 'Gardez les sons et les souvenirs de votre grossesse.',
    description: 'Bubbi vous permet d’enregistrer des moments audio, de les garder dans votre journal de grossesse et de partager vos souvenirs. Un enregistrement ne permet pas d’identifier la source du son ni de confirmer le cœur du bébé.',
    recordFeature: 'Enregistrez un moment audio et gardez-le dans votre journal. Un rythme enregistré ne prouve pas d’où vient le son.',
    shareFeature: 'Partagez une carte hebdomadaire avec une note ou un souvenir audio. Un enregistrement n’est pas un contrôle de santé.',
    disclaimer: 'Bubbi est une appli souvenir, pas un dispositif médical. Elle ne peut ni confirmer le rythme cardiaque du bébé ni évaluer son état. Si ses mouvements changent ou si vous êtes inquiète, contactez sans attendre votre sage-femme ou la maternité ; ne vous fiez pas à l’appli pour vous rassurer.',
    seoTitle: 'Bubbi — journal de grossesse et souvenirs audio',
    seoDescription: 'Gardez vos notes, souvenirs audio et cartes hebdomadaires avec Bubbi. Les enregistrements ne confirment pas le rythme cardiaque du bébé ni sa santé.',
    ctaTitle: 'Gardez vos souvenirs de grossesse',
    ctaBody: 'Enregistrez un moment audio et gardez-le dans votre journal semaine après semaine avec Bubbi.',
    sidebarBody: 'Souvenirs audio et pages de journal réunis.',
    ctaNote: 'Une appli souvenir, pas un dispositif médical ni un contrôle du cœur.',
  },
  uk: {
    tagline: 'Зберігайте звуки та спогади про вагітність.',
    description: 'У Bubbi можна записувати звукові моменти, зберігати їх у щоденнику вагітності й ділитися спогадами. Запис не визначає джерело звуку та не підтверджує серцебиття дитини.',
    recordFeature: 'Запишіть звуковий момент і збережіть його у щоденнику. Ритм у записі не доводить, звідки походить звук.',
    shareFeature: 'Поділіться щотижневою карткою з нотаткою або звуковим спогадом. Запис не є перевіркою здоров’я.',
    disclaimer: 'Bubbi — застосунок для спогадів, а не медичний пристрій. Він не підтверджує серцебиття дитини й не оцінює її стан. Якщо рухи змінилися або вас щось турбує, одразу зверніться до лікаря чи пологового відділення; не використовуйте застосунок для заспокоєння.',
    seoTitle: 'Bubbi — щоденник вагітності та звукові спогади',
    seoDescription: 'Зберігайте нотатки, звукові спогади й щотижневі картки в Bubbi. Записи не підтверджують серцебиття дитини та не оцінюють здоров’я.',
    ctaTitle: 'Зберігайте спогади про вагітність',
    ctaBody: 'Запишіть звуковий момент і збережіть його у щоденнику вагітності в Bubbi.',
    sidebarBody: 'Звукові моменти й записи щоденника разом.',
    ctaNote: 'Застосунок для спогадів, не медичний пристрій і не перевірка серцебиття.',
  },
};

export function clarifyBubbiApp(app: AppProduct, locale: Locale): AppProduct {
  if (app.translationKey !== 'baby-heartbeat') return app;
  const copy = safeCopy[locale];
  return {
    ...app,
    name: 'Bubbi',
    tagline: copy.tagline,
    description: copy.description,
    disclaimer: copy.disclaimer,
    features: app.features.map((feature, index) => ({
      ...feature,
      body: index === 0 ? copy.recordFeature : index === 3 ? copy.shareFeature : feature.body,
    })),
    icon: { ...app.icon, alt: 'Bubbi' },
    screenshots: app.screenshots.map((shot) => ({ ...shot, alt: 'Bubbi app' })),
    seo: { ...app.seo, title: copy.seoTitle, description: copy.seoDescription },
  };
}

export function clarifyBubbiCta(cta: CtaBlock, locale: Locale): CtaBlock {
  if (cta.id !== 'bubbi-inline' && cta.id !== 'bubbi-sidebar') return cta;
  const copy = safeCopy[locale];
  return {
    ...cta,
    title: cta.id === 'bubbi-inline' ? copy.ctaTitle : cta.title,
    body: cta.id === 'bubbi-inline' ? copy.ctaBody : copy.sidebarBody,
    note: copy.ctaNote,
  };
}
