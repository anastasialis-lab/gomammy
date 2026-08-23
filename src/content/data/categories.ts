import type { Locale } from '@/lib/i18n/config';
import { LOCALES } from '@/lib/i18n/config';
import type { Category } from '@/lib/content/types';
import { generatedFor } from '@/content/generated';

/**
 * Category keys are stable across languages; slugs and copy are localised.
 * `planning` and `by-week` are the two SEO pillars: everything else hangs off
 * them through internal links.
 */
export const CATEGORY_KEYS = [
  'pregnancy',
  'by-week',
  'symptoms',
  'health',
  'birth',
  'baby',
] as const;

export type CategoryKey = (typeof CATEGORY_KEYS)[number];

type CategoryCopy = {
  slug: string;
  title: string;
  navLabel: string;
  heroTitle: string;
  heroIntro: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
};

const copy: Record<Locale, Record<CategoryKey, CategoryCopy>> = {
  en: {
    pregnancy: {
      slug: 'pregnancy',
      title: 'Pregnancy',
      navLabel: 'Pregnancy',
      heroTitle: 'Planning, testing and the first weeks',
      heroIntro:
        'From tracking your cycle to the first positive test — what helps, what waits, and what is worth knowing before you begin.',
      description: 'Preparing for pregnancy, fertility, ovulation and the earliest weeks.',
      seoTitle: 'Pregnancy: planning, fertility and early weeks',
      seoDescription:
        'Clear guidance on preparing for pregnancy, understanding ovulation and fertility, and knowing what happens in the earliest weeks.',
    },
    'by-week': {
      slug: 'pregnancy-by-week',
      title: 'Pregnancy by week',
      navLabel: 'Pregnancy by Week',
      heroTitle: 'Your pregnancy, week by week',
      heroIntro:
        'Forty weeks, forty pages. Baby development, changes in your body, common symptoms and one calm thing to do this week.',
      description: 'A page for every week of pregnancy, from week 1 to week 40.',
      seoTitle: 'Pregnancy week by week: weeks 1 to 40',
      seoDescription:
        'Follow every week of pregnancy: your baby’s size and development, how your body changes, common symptoms and practical tips.',
    },
    symptoms: {
      slug: 'symptoms',
      title: 'Symptoms',
      navLabel: 'Symptoms',
      heroTitle: 'Symptoms and changes, explained',
      heroIntro:
        'What is common, what is worth mentioning at your next appointment, and what needs a call today.',
      description: 'Pregnancy symptoms, body changes and when to seek advice.',
      seoTitle: 'Pregnancy symptoms and body changes',
      seoDescription:
        'Understand common pregnancy symptoms trimester by trimester, why they happen, and which signs need medical advice.',
    },
    health: {
      slug: 'health',
      title: 'Health',
      navLabel: 'Health',
      heroTitle: 'Feeling well through the months',
      heroIntro: 'Sleep, food, movement and stress — the everyday things that make pregnancy easier.',
      description: 'Nutrition, sleep, activity and wellbeing during pregnancy.',
      seoTitle: 'Pregnancy health: sleep, food and movement',
      seoDescription:
        'Practical, evidence-based guidance on eating well, sleeping better, staying active and managing stress during pregnancy.',
    },
    birth: {
      slug: 'birth',
      title: 'Birth',
      navLabel: 'Birth',
      heroTitle: 'Getting ready for birth',
      heroIntro:
        'Your bag, your birth plan, the signs of labour and the first days afterwards — prepared calmly, in advance.',
      description: 'Preparing for labour, birth plans, hospital bags and the postpartum weeks.',
      seoTitle: 'Preparing for birth: bag, plan and signs of labour',
      seoDescription:
        'What to pack, how to write a birth plan, how to recognise the signs of labour and what to expect in the first days after birth.',
    },
    baby: {
      slug: 'baby',
      title: 'Baby',
      navLabel: 'Baby',
      heroTitle: 'Your baby, before you meet',
      heroIntro:
        'Growth, heartbeat, movement and the small milestones that happen quietly, week after week.',
      description: 'Baby development, heartbeat, size and movement during pregnancy.',
      seoTitle: 'Baby development during pregnancy',
      seoDescription:
        'How your baby grows during pregnancy: heartbeat, size and weight, senses and movement, week by week.',
    },
  },
  de: {
    pregnancy: {
      slug: 'schwangerschaft',
      title: 'Schwangerschaft',
      navLabel: 'Schwangerschaft',
      heroTitle: 'Kinderwunsch, Test und die ersten Wochen',
      heroIntro:
        'Vom Zyklus bis zum ersten positiven Test — was jetzt hilft, was warten kann und was du vorher wissen solltest.',
      description: 'Vorbereitung, Fruchtbarkeit, Eisprung und die allerersten Wochen.',
      seoTitle: 'Schwangerschaft: Kinderwunsch, Fruchtbarkeit und erste Wochen',
      seoDescription:
        'Klare Informationen zur Vorbereitung auf die Schwangerschaft, zu Eisprung und Fruchtbarkeit und zu den ersten Wochen.',
    },
    'by-week': {
      slug: 'schwangerschaftswochen',
      title: 'Schwangerschaftswochen',
      navLabel: 'Schwangerschaftswochen',
      heroTitle: 'Deine Schwangerschaft, Woche für Woche',
      heroIntro:
        'Vierzig Wochen, vierzig Seiten. Entwicklung deines Babys, Veränderungen im Körper, typische Anzeichen und ein ruhiger Tipp pro Woche.',
      description: 'Eine Seite für jede Schwangerschaftswoche, von Woche 1 bis Woche 40.',
      seoTitle: 'Schwangerschaftswochen: SSW 1 bis 40 im Überblick',
      seoDescription:
        'Jede Schwangerschaftswoche im Detail: Größe und Entwicklung deines Babys, Veränderungen deines Körpers, Anzeichen und praktische Tipps.',
    },
    symptoms: {
      slug: 'anzeichen',
      title: 'Anzeichen',
      navLabel: 'Anzeichen',
      heroTitle: 'Anzeichen und Veränderungen, verständlich erklärt',
      heroIntro:
        'Was normal ist, was beim nächsten Termin zur Sprache gehört und was heute einen Anruf braucht.',
      description: 'Schwangerschaftsanzeichen, Veränderungen und wann ärztlicher Rat nötig ist.',
      seoTitle: 'Schwangerschaftsanzeichen und Veränderungen des Körpers',
      seoDescription:
        'Typische Schwangerschaftsanzeichen Trimester für Trimester: warum sie auftreten und welche Signale ärztlich abgeklärt gehören.',
    },
    health: {
      slug: 'gesundheit',
      title: 'Gesundheit',
      navLabel: 'Gesundheit',
      heroTitle: 'Sich wohlfühlen — Monat für Monat',
      heroIntro: 'Schlaf, Ernährung, Bewegung und Stress: die Alltagsdinge, die eine Schwangerschaft leichter machen.',
      description: 'Ernährung, Schlaf, Bewegung und Wohlbefinden in der Schwangerschaft.',
      seoTitle: 'Gesundheit in der Schwangerschaft: Schlaf, Ernährung, Bewegung',
      seoDescription:
        'Praktische, fundierte Empfehlungen zu Ernährung, Schlaf, Bewegung und Stress in der Schwangerschaft.',
    },
    birth: {
      slug: 'geburt',
      title: 'Geburt',
      navLabel: 'Geburt',
      heroTitle: 'Gut vorbereitet in die Geburt',
      heroIntro:
        'Kliniktasche, Geburtsplan, Anzeichen der Geburt und die ersten Tage danach — in Ruhe vorbereitet.',
      description: 'Geburtsvorbereitung, Geburtsplan, Kliniktasche und Wochenbett.',
      seoTitle: 'Geburtsvorbereitung: Kliniktasche, Geburtsplan und Anzeichen',
      seoDescription:
        'Was in die Kliniktasche gehört, wie ein Geburtsplan entsteht, woran du den Geburtsbeginn erkennst und was danach kommt.',
    },
    baby: {
      slug: 'baby',
      title: 'Baby',
      navLabel: 'Baby',
      heroTitle: 'Dein Baby, bevor ihr euch seht',
      heroIntro:
        'Wachstum, Herzschlag, Bewegungen und die kleinen Meilensteine, die Woche für Woche leise passieren.',
      description: 'Entwicklung, Herzschlag, Größe und Bewegungen deines Babys.',
      seoTitle: 'Entwicklung des Babys in der Schwangerschaft',
      seoDescription:
        'Wie dein Baby wächst: Herzschlag, Größe und Gewicht, Sinne und Bewegungen — Woche für Woche erklärt.',
    },
  },
  it: {
    pregnancy: {
      slug: 'gravidanza',
      title: 'Gravidanza',
      navLabel: 'Gravidanza',
      heroTitle: 'Concepimento, test e prime settimane',
      heroIntro:
        'Dal ciclo al primo test positivo: cosa aiuta davvero, cosa può aspettare e cosa vale la pena sapere prima di iniziare.',
      description: 'Preparazione, fertilità, ovulazione e primissime settimane.',
      seoTitle: 'Gravidanza: preparazione, fertilità e prime settimane',
      seoDescription:
        'Informazioni chiare su come prepararsi alla gravidanza, capire l’ovulazione e la fertilità e affrontare le prime settimane.',
    },
    'by-week': {
      slug: 'gravidanza-settimana-per-settimana',
      title: 'Settimana per settimana',
      navLabel: 'Settimana per settimana',
      heroTitle: 'La tua gravidanza, settimana per settimana',
      heroIntro:
        'Quaranta settimane, quaranta pagine. Sviluppo del bambino, cambiamenti del corpo, sintomi comuni e un consiglio alla volta.',
      description: 'Una pagina per ogni settimana di gravidanza, dalla 1ª alla 40ª.',
      seoTitle: 'Gravidanza settimana per settimana: dalla 1ª alla 40ª',
      seoDescription:
        'Segui ogni settimana di gravidanza: dimensioni e sviluppo del bambino, cambiamenti del corpo, sintomi e consigli pratici.',
    },
    symptoms: {
      slug: 'sintomi',
      title: 'Sintomi',
      navLabel: 'Sintomi',
      heroTitle: 'Sintomi e cambiamenti, spiegati',
      heroIntro:
        'Cosa è normale, cosa vale la pena dire alla prossima visita e cosa richiede una telefonata oggi.',
      description: 'Sintomi della gravidanza, cambiamenti del corpo e quando chiedere aiuto.',
      seoTitle: 'Sintomi della gravidanza e cambiamenti del corpo',
      seoDescription:
        'I sintomi più comuni trimestre per trimestre: perché compaiono e quali segnali richiedono un parere medico.',
    },
    health: {
      slug: 'salute',
      title: 'Salute',
      navLabel: 'Salute',
      heroTitle: 'Stare bene mese dopo mese',
      heroIntro: 'Sonno, alimentazione, movimento e stress: le cose quotidiane che rendono la gravidanza più leggera.',
      description: 'Alimentazione, sonno, attività fisica e benessere in gravidanza.',
      seoTitle: 'Salute in gravidanza: sonno, alimentazione e movimento',
      seoDescription:
        'Consigli pratici e basati sulle evidenze per mangiare bene, dormire meglio, muoversi e gestire lo stress in gravidanza.',
    },
    birth: {
      slug: 'parto',
      title: 'Parto',
      navLabel: 'Parto',
      heroTitle: 'Prepararsi al parto',
      heroIntro:
        'La borsa, il piano del parto, i segnali del travaglio e i primi giorni dopo: tutto preparato con calma, in anticipo.',
      description: 'Preparazione al travaglio, piano del parto, borsa e post parto.',
      seoTitle: 'Prepararsi al parto: borsa, piano e segnali del travaglio',
      seoDescription:
        'Cosa mettere in valigia, come scrivere un piano del parto, come riconoscere il travaglio e cosa aspettarsi nei primi giorni.',
    },
    baby: {
      slug: 'bambino',
      title: 'Bambino',
      navLabel: 'Bambino',
      heroTitle: 'Il tuo bambino, prima di incontrarvi',
      heroIntro:
        'Crescita, battito, movimenti e i piccoli traguardi che arrivano in silenzio, settimana dopo settimana.',
      description: 'Sviluppo, battito, dimensioni e movimenti del bambino in gravidanza.',
      seoTitle: 'Sviluppo del bambino in gravidanza',
      seoDescription:
        'Come cresce il tuo bambino: battito, dimensioni e peso, sensi e movimenti, settimana per settimana.',
    },
  },
  es: {
    pregnancy: {
      slug: 'embarazo',
      title: 'Embarazo',
      navLabel: 'Embarazo',
      heroTitle: 'Búsqueda, test y primeras semanas',
      heroIntro:
        'Del ciclo al primer test positivo: qué ayuda de verdad, qué puede esperar y qué conviene saber antes de empezar.',
      description: 'Preparación, fertilidad, ovulación y las primerísimas semanas.',
      seoTitle: 'Embarazo: preparación, fertilidad y primeras semanas',
      seoDescription:
        'Información clara para preparar el embarazo, entender la ovulación y la fertilidad y afrontar las primeras semanas.',
    },
    'by-week': {
      slug: 'embarazo-semana-a-semana',
      title: 'Semana a semana',
      navLabel: 'Semana a semana',
      heroTitle: 'Tu embarazo, semana a semana',
      heroIntro:
        'Cuarenta semanas, cuarenta páginas. Desarrollo del bebé, cambios en tu cuerpo, síntomas frecuentes y un consejo por semana.',
      description: 'Una página para cada semana de embarazo, de la 1 a la 40.',
      seoTitle: 'Embarazo semana a semana: de la semana 1 a la 40',
      seoDescription:
        'Sigue cada semana del embarazo: tamaño y desarrollo del bebé, cambios en tu cuerpo, síntomas y consejos prácticos.',
    },
    symptoms: {
      slug: 'sintomas',
      title: 'Síntomas',
      navLabel: 'Síntomas',
      heroTitle: 'Síntomas y cambios, explicados',
      heroIntro:
        'Qué es normal, qué conviene comentar en la próxima revisión y qué necesita una llamada hoy mismo.',
      description: 'Síntomas del embarazo, cambios del cuerpo y cuándo consultar.',
      seoTitle: 'Síntomas del embarazo y cambios en el cuerpo',
      seoDescription:
        'Los síntomas más comunes trimestre a trimestre: por qué aparecen y qué señales requieren consulta médica.',
    },
    health: {
      slug: 'salud',
      title: 'Salud',
      navLabel: 'Salud',
      heroTitle: 'Encontrarte bien mes a mes',
      heroIntro: 'Sueño, alimentación, movimiento y estrés: lo cotidiano que hace el embarazo más llevadero.',
      description: 'Alimentación, sueño, actividad física y bienestar en el embarazo.',
      seoTitle: 'Salud en el embarazo: sueño, alimentación y ejercicio',
      seoDescription:
        'Consejos prácticos y basados en la evidencia para comer bien, dormir mejor, moverte y manejar el estrés en el embarazo.',
    },
    birth: {
      slug: 'parto',
      title: 'Parto',
      navLabel: 'Parto',
      heroTitle: 'Prepararte para el parto',
      heroIntro:
        'La bolsa, el plan de parto, las señales de que empieza y los primeros días después: todo preparado con calma y por adelantado.',
      description: 'Preparación al parto, plan de parto, bolsa del hospital y posparto.',
      seoTitle: 'Prepararse para el parto: bolsa, plan y señales',
      seoDescription:
        'Qué llevar al hospital, cómo escribir un plan de parto, cómo reconocer las señales de parto y qué esperar los primeros días.',
    },
    baby: {
      slug: 'bebe',
      title: 'Bebé',
      navLabel: 'Bebé',
      heroTitle: 'Tu bebé, antes de conoceros',
      heroIntro:
        'Crecimiento, latido, movimientos y los pequeños hitos que ocurren en silencio, semana tras semana.',
      description: 'Desarrollo, latido, tamaño y movimientos del bebé durante el embarazo.',
      seoTitle: 'Desarrollo del bebé durante el embarazo',
      seoDescription:
        'Cómo crece tu bebé: latido, tamaño y peso, sentidos y movimientos, semana a semana.',
    },
  },
  pt: {
    pregnancy: {
      slug: 'gravidez',
      title: 'Gravidez',
      navLabel: 'Gravidez',
      heroTitle: 'Preparação, teste e primeiras semanas',
      heroIntro:
        'Do ciclo ao primeiro teste positivo: o que ajuda mesmo, o que pode esperar e o que vale a pena saber antes de começar.',
      description: 'Preparação, fertilidade, ovulação e as primeiras semanas.',
      seoTitle: 'Gravidez: preparação, fertilidade e primeiras semanas',
      seoDescription:
        'Informação clara para preparar a gravidez, perceber a ovulação e a fertilidade e atravessar as primeiras semanas.',
    },
    'by-week': {
      slug: 'gravidez-semana-a-semana',
      title: 'Semana a semana',
      navLabel: 'Semana a semana',
      heroTitle: 'A tua gravidez, semana a semana',
      heroIntro:
        'Quarenta semanas, quarenta páginas. Desenvolvimento do bebé, mudanças no corpo, sintomas comuns e uma dica de cada vez.',
      description: 'Uma página para cada semana de gravidez, da 1 à 40.',
      seoTitle: 'Gravidez semana a semana: da semana 1 à 40',
      seoDescription:
        'Acompanha cada semana da gravidez: tamanho e desenvolvimento do bebé, mudanças no corpo, sintomas e dicas práticas.',
    },
    symptoms: {
      slug: 'sintomas',
      title: 'Sintomas',
      navLabel: 'Sintomas',
      heroTitle: 'Sintomas e mudanças, explicados',
      heroIntro:
        'O que é normal, o que vale a pena falar na próxima consulta e o que exige um telefonema hoje.',
      description: 'Sintomas da gravidez, mudanças no corpo e quando pedir ajuda.',
      seoTitle: 'Sintomas da gravidez e mudanças no corpo',
      seoDescription:
        'Os sintomas mais comuns trimestre a trimestre: porque acontecem e que sinais exigem avaliação médica.',
    },
    health: {
      slug: 'saude',
      title: 'Saúde',
      navLabel: 'Saúde',
      heroTitle: 'Sentires-te bem mês após mês',
      heroIntro: 'Sono, alimentação, movimento e stress: o dia a dia que torna a gravidez mais leve.',
      description: 'Alimentação, sono, atividade física e bem-estar na gravidez.',
      seoTitle: 'Saúde na gravidez: sono, alimentação e exercício',
      seoDescription:
        'Conselhos práticos e baseados em evidência para comer bem, dormir melhor, mexer-te e lidar com o stress na gravidez.',
    },
    birth: {
      slug: 'parto',
      title: 'Parto',
      navLabel: 'Parto',
      heroTitle: 'Preparar o parto',
      heroIntro:
        'A mala, o plano de parto, os sinais de trabalho de parto e os primeiros dias a seguir — preparados com calma, à frente do tempo.',
      description: 'Preparação para o parto, plano de parto, mala da maternidade e pós-parto.',
      seoTitle: 'Preparar o parto: mala, plano e sinais',
      seoDescription:
        'O que levar para a maternidade, como escrever um plano de parto, como reconhecer o trabalho de parto e o que esperar depois.',
    },
    baby: {
      slug: 'bebe',
      title: 'Bebé',
      navLabel: 'Bebé',
      heroTitle: 'O teu bebé, antes de se conhecerem',
      heroIntro:
        'Crescimento, batimento cardíaco, movimentos e os pequenos marcos que acontecem em silêncio, semana após semana.',
      description: 'Desenvolvimento, batimento, tamanho e movimentos do bebé na gravidez.',
      seoTitle: 'Desenvolvimento do bebé durante a gravidez',
      seoDescription:
        'Como o teu bebé cresce: batimento cardíaco, tamanho e peso, sentidos e movimentos, semana a semana.',
    },
  },
  fr: {
    pregnancy: {
      slug: 'grossesse',
      title: 'Grossesse',
      navLabel: 'Grossesse',
      heroTitle: 'Projet de bébé, test et premières semaines',
      heroIntro:
        'Du cycle au premier test positif : ce qui aide vraiment, ce qui peut attendre et ce qu’il vaut mieux savoir avant de commencer.',
      description: 'Préparation, fertilité, ovulation et toutes premières semaines.',
      seoTitle: 'Grossesse : préparation, fertilité et premières semaines',
      seoDescription:
        'Des repères clairs pour préparer une grossesse, comprendre l’ovulation et la fertilité et traverser les premières semaines.',
    },
    'by-week': {
      slug: 'grossesse-semaine-par-semaine',
      title: 'Semaine par semaine',
      navLabel: 'Semaine par semaine',
      heroTitle: 'Votre grossesse, semaine après semaine',
      heroIntro:
        'Quarante semaines, quarante pages. Développement du bébé, changements du corps, symptômes fréquents et un conseil à la fois.',
      description: 'Une page pour chaque semaine de grossesse, de la 1re à la 40e.',
      seoTitle: 'Grossesse semaine par semaine : de la 1re à la 40e',
      seoDescription:
        'Suivez chaque semaine de grossesse : taille et développement du bébé, changements du corps, symptômes et conseils pratiques.',
    },
    symptoms: {
      slug: 'symptomes',
      title: 'Symptômes',
      navLabel: 'Symptômes',
      heroTitle: 'Symptômes et changements, expliqués',
      heroIntro:
        'Ce qui est courant, ce qu’il faut signaler au prochain rendez-vous et ce qui mérite un appel aujourd’hui.',
      description: 'Symptômes de grossesse, changements du corps et quand consulter.',
      seoTitle: 'Symptômes de grossesse et changements du corps',
      seoDescription:
        'Les symptômes les plus fréquents trimestre par trimestre : pourquoi ils surviennent et quels signes nécessitent un avis médical.',
    },
    health: {
      slug: 'sante',
      title: 'Santé',
      navLabel: 'Santé',
      heroTitle: 'Se sentir bien, mois après mois',
      heroIntro: 'Sommeil, alimentation, mouvement et stress : le quotidien qui rend la grossesse plus légère.',
      description: 'Alimentation, sommeil, activité physique et bien-être pendant la grossesse.',
      seoTitle: 'Santé et grossesse : sommeil, alimentation et activité',
      seoDescription:
        'Des conseils pratiques et fondés pour bien manger, mieux dormir, bouger et gérer le stress pendant la grossesse.',
    },
    birth: {
      slug: 'accouchement',
      title: 'Accouchement',
      navLabel: 'Accouchement',
      heroTitle: 'Se préparer à l’accouchement',
      heroIntro:
        'La valise, le projet de naissance, les signes du travail et les premiers jours d’après — préparés calmement, à l’avance.',
      description: 'Préparation au travail, projet de naissance, valise et post-partum.',
      seoTitle: 'Préparer l’accouchement : valise, projet et signes du travail',
      seoDescription:
        'Que mettre dans la valise, comment écrire un projet de naissance, reconnaître le travail et à quoi s’attendre ensuite.',
    },
    baby: {
      slug: 'bebe',
      title: 'Bébé',
      navLabel: 'Bébé',
      heroTitle: 'Votre bébé, avant la rencontre',
      heroIntro:
        'Croissance, battements du cœur, mouvements et les petites étapes qui passent presque inaperçues, semaine après semaine.',
      description: 'Développement, cœur, taille et mouvements du bébé pendant la grossesse.',
      seoTitle: 'Développement du bébé pendant la grossesse',
      seoDescription:
        'Comment votre bébé grandit : cœur, taille et poids, sens et mouvements, semaine après semaine.',
    },
  },
  uk: {
    pregnancy: {
      slug: 'vahitnist',
      title: 'Вагітність',
      navLabel: 'Вагітність',
      heroTitle: 'Планування, тест і перші тижні',
      heroIntro:
        'Від спостереження за циклом до першого позитивного тесту — що справді допомагає, що може зачекати й що варто знати ще до початку.',
      description: 'Підготовка до вагітності, фертильність, овуляція та найперші тижні.',
      seoTitle: 'Вагітність: планування, фертильність і перші тижні',
      seoDescription:
        'Зрозуміла інформація про підготовку до вагітності, овуляцію та фертильність і про те, що відбувається у найперші тижні.',
    },
    'by-week': {
      slug: 'vahitnist-po-tyzhniakh',
      title: 'Вагітність по тижнях',
      navLabel: 'По тижнях',
      heroTitle: 'Ваша вагітність — тиждень за тижнем',
      heroIntro:
        'Сорок тижнів, сорок сторінок. Розвиток дитини, зміни у вашому тілі, типові симптоми й одна спокійна порада на тиждень.',
      description: 'Окрема сторінка для кожного тижня вагітності — від 1-го до 40-го.',
      seoTitle: 'Вагітність по тижнях: від 1 до 40 тижня',
      seoDescription:
        'Стежте за кожним тижнем вагітності: розмір і розвиток дитини, зміни у вашому тілі, симптоми та практичні поради.',
    },
    symptoms: {
      slug: 'symptomy',
      title: 'Симптоми',
      navLabel: 'Симптоми',
      heroTitle: 'Симптоми і зміни — простими словами',
      heroIntro:
        'Що є нормою, про що варто сказати на наступному прийомі, а з чим треба телефонувати вже сьогодні.',
      description: 'Симптоми вагітності, зміни в організмі й коли звертатися по допомогу.',
      seoTitle: 'Симптоми вагітності та зміни в організмі',
      seoDescription:
        'Найпоширеніші симптоми вагітності по триместрах: чому вони виникають і які ознаки потребують консультації лікаря.',
    },
    health: {
      slug: 'zdorovia',
      title: 'Здоров’я',
      navLabel: 'Здоров’я',
      heroTitle: 'Добре почуватися щомісяця',
      heroIntro: 'Сон, харчування, рух і стрес — щоденні речі, які роблять вагітність легшою.',
      description: 'Харчування, сон, фізична активність і самопочуття під час вагітності.',
      seoTitle: 'Здоров’я під час вагітності: сон, харчування, рух',
      seoDescription:
        'Практичні й доказові поради про харчування, сон, фізичну активність і подолання стресу під час вагітності.',
    },
    birth: {
      slug: 'polohy',
      title: 'Пологи',
      navLabel: 'Пологи',
      heroTitle: 'Підготовка до пологів',
      heroIntro:
        'Сумка, план пологів, ознаки їх початку й перші дні після — усе підготовлено спокійно й заздалегідь.',
      description: 'Підготовка до пологів, план пологів, сумка в пологовий і післяпологовий період.',
      seoTitle: 'Підготовка до пологів: сумка, план і ознаки початку',
      seoDescription:
        'Що взяти в пологовий, як скласти план пологів, як розпізнати початок пологів і чого очікувати в перші дні.',
    },
    baby: {
      slug: 'dytyna',
      title: 'Дитина',
      navLabel: 'Дитина',
      heroTitle: 'Ваша дитина — ще до зустрічі',
      heroIntro:
        'Ріст, серцебиття, рухи й маленькі досягнення, які відбуваються тихо, тиждень за тижнем.',
      description: 'Розвиток дитини, серцебиття, розмір і рухи протягом вагітності.',
      seoTitle: 'Розвиток дитини під час вагітності',
      seoDescription:
        'Як росте ваша дитина: серцебиття, зріст і вага, органи чуття та рухи — тиждень за тижнем.',
    },
  },
};
export function getCategories(locale: Locale): Category[] {
  const fromCms = generatedFor('categories', locale);
  if (fromCms) return [...fromCms].sort((a, b) => a.order - b.order);

  return CATEGORY_KEYS.map((key, index) => {
    const c = copy[locale][key];
    return {
      translationKey: key,
      locale,
      slug: c.slug,
      title: c.title,
      navLabel: c.navLabel,
      heroTitle: c.heroTitle,
      heroIntro: c.heroIntro,
      description: c.description,
      order: index,
      isWeekIndex: key === 'by-week',
      seo: { title: c.seoTitle, description: c.seoDescription },
      featuredImage: {
        src: `/images/categories/${key}.webp`,
        alt: c.title,
        width: 1536,
        height: 1024,
      },
    } satisfies Category;
  });
}

export function getCategory(locale: Locale, key: string): Category | undefined {
  return getCategories(locale).find((category) => category.translationKey === key);
}

export function getCategoryBySlug(locale: Locale, slug: string): Category | undefined {
  return getCategories(locale).find((category) => category.slug === slug);
}

/** Slug of the same category in every language — the basis for hreflang. */
export function categorySlugsByLocale(key: string): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map((locale) => [
      locale,
      getCategories(locale).find((category) => category.translationKey === key)?.slug ??
        copy[locale][key as CategoryKey].slug,
    ]),
  ) as Record<Locale, string>;
}

/** Slug of the "Our apps" section per locale. */
export const APPS_SLUG: Record<Locale, string> = {
  en: 'apps',
  de: 'apps',
  it: 'app',
  es: 'apps',
  pt: 'apps',
  fr: 'applications',
  uk: 'zastosunky',
};
