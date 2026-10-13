import type { Locale } from '@/lib/i18n/config';
import type { WeekPage } from '@/lib/content/types';

type EarlyCopy = {
  titles: [string, string, string];
  intro: [string, string, string];
  expect: [string, string, string];
  development: [string, string, string];
  body: [string, string, string];
  symptoms: [string, string, string];
  monthQuestion: string;
  monthAnswer: string;
  conceptionQuestion: string;
  conceptionAnswers: [string, string, string];
  symptomsQuestion: string;
  symptomsAnswer: string;
  stageTitle: string;
};

const copy: Record<Locale, EarlyCopy> = {
  en: {
    titles: ['1 Week Pregnant', '2 Weeks Pregnant', '3 Weeks Pregnant'],
    intro: [
      'Pregnancy is dated from the first day of your last period. In week 1, conception has not happened yet; this is the beginning of the cycle used for pregnancy dating.',
      'Week 2 is usually before conception. Ovulation may happen around this time in a 28-day cycle, but timing varies from person to person.',
      'In week 3, fertilisation may happen if sperm meets an egg. It is usually too early for symptoms or a home test to reliably confirm pregnancy.',
    ],
    expect: [
      'Your period may be underway. If you are planning pregnancy, ask a clinician about medicines and start taking folic acid as recommended for you.',
      'The fertile window depends on when you ovulate. Cycle tracking can help you understand your pattern, but a calendar cannot pinpoint ovulation for everyone.',
      'Early cell division may begin after fertilisation. A home pregnancy test is most reliable from the first day of a missed period; follow the instructions for your test.',
    ],
    development: [
      'There is no embryo in week 1. The body begins a new menstrual cycle.',
      'An egg may mature and be released around this time. Conception has usually not happened yet.',
      'If fertilisation occurs, the first cells divide as they travel toward the uterus.',
    ],
    body: [
      'The menstrual period marks day one of the cycle used to date a later pregnancy.',
      'Hormonal changes prepare for ovulation; the timing differs between cycles.',
      'Your body may have no noticeable changes yet. Symptoms cannot confirm whether fertilisation occurred.',
    ],
    symptoms: [
      'Bleeding or cramps now are menstrual symptoms, not signs of a developing embryo.',
      'Some people notice ovulation signs, while others notice nothing. These signs do not confirm pregnancy.',
      'There may be no noticeable symptoms. A missed period and a correctly used test give more useful information than symptoms alone.',
    ],
    monthQuestion: 'Which month of pregnancy is this?',
    monthAnswer: 'These early weeks belong to the first month in common pregnancy calendars. Weeks are more precise than months.',
    conceptionQuestion: 'Has conception happened yet?',
    conceptionAnswers: [
      'No. Week 1 begins with the last menstrual period, before conception.',
      'Usually not yet. Ovulation and conception may occur around the end of this week in a 28-day cycle, but cycles differ.',
      'It may have happened, but a symptom or home audio recording cannot confirm it. Follow a pregnancy test’s instructions after the appropriate interval.',
    ],
    symptomsQuestion: 'Can symptoms tell me whether I am pregnant?',
    symptomsAnswer: 'No. Early symptoms overlap with ordinary cycle changes. A home test is most reliable from the first day of a missed period.',
    stageTitle: 'What happens at this stage',
  },
  de: {
    titles: ['1. Schwangerschaftswoche', '2. Schwangerschaftswoche', '3. Schwangerschaftswoche'],
    intro: [
      'Die Schwangerschaftswochen werden ab dem ersten Tag der letzten Periode gezählt. In der 1. Woche hat die Empfängnis noch nicht stattgefunden.',
      'Die 2. Woche liegt meist vor der Empfängnis. Bei einem 28-Tage-Zyklus kann der Eisprung etwa jetzt stattfinden; der Zeitpunkt ist individuell verschieden.',
      'In der 3. Woche kann eine Befruchtung stattfinden. Für zuverlässige Schwangerschaftsanzeichen oder einen Heimtest ist es meist noch zu früh.',
    ],
    expect: [
      'Deine Periode kann noch andauern. Wenn du eine Schwangerschaft planst, lass Medikamente prüfen und informiere dich über Folsäure.',
      'Das fruchtbare Zeitfenster hängt vom Eisprung ab. Zyklusbeobachtung hilft, aber ein Kalender bestimmt den Eisprung nicht zuverlässig für alle.',
      'Nach einer Befruchtung können sich die ersten Zellen teilen. Ein Schwangerschaftstest ist ab dem ersten Tag der ausbleibenden Periode am zuverlässigsten.',
    ],
    development: [
      'In Woche 1 gibt es noch keinen Embryo. Ein neuer Menstruationszyklus beginnt.',
      'Eine Eizelle kann heranreifen und freigesetzt werden. Die Empfängnis hat meist noch nicht stattgefunden.',
      'Bei einer Befruchtung teilen sich die ersten Zellen auf dem Weg zur Gebärmutter.',
    ],
    body: [
      'Mit dem ersten Tag der Periode beginnt die Zählung für eine spätere Schwangerschaft.',
      'Hormonelle Veränderungen bereiten den Eisprung vor; der Zeitpunkt schwankt von Zyklus zu Zyklus.',
      'Du bemerkst vielleicht noch keine Veränderung. Beschwerden können eine Befruchtung nicht bestätigen.',
    ],
    symptoms: [
      'Blutung und Krämpfe sind jetzt Zeichen der Periode, nicht eines heranwachsenden Embryos.',
      'Manche bemerken Anzeichen des Eisprungs, andere nicht. Diese Zeichen bestätigen keine Schwangerschaft.',
      'Möglicherweise gibt es noch keine Beschwerden. Eine ausbleibende Periode und ein korrekt angewendeter Test sind aussagekräftiger.',
    ],
    monthQuestion: 'Welcher Schwangerschaftsmonat ist das?',
    monthAnswer: 'Diese frühen Wochen liegen nach gängiger Zählung im ersten Monat. Die Angabe in Wochen ist genauer.',
    conceptionQuestion: 'Hat die Empfängnis schon stattgefunden?',
    conceptionAnswers: [
      'Nein. Die 1. Woche beginnt mit der letzten Periode, noch vor der Empfängnis.',
      'Meist noch nicht. Bei einem 28-Tage-Zyklus können Eisprung und Empfängnis gegen Ende dieser Woche liegen; Zyklen unterscheiden sich.',
      'Das ist möglich, lässt sich aber nicht an Beschwerden erkennen. Beachte den richtigen Zeitpunkt und die Anleitung für einen Schwangerschaftstest.',
    ],
    symptomsQuestion: 'Beweisen Beschwerden eine Schwangerschaft?',
    symptomsAnswer: 'Nein. Frühe Anzeichen überschneiden sich mit normalen Zyklusveränderungen. Ein Test ist ab dem ersten Tag der ausbleibenden Periode am zuverlässigsten.',
    stageTitle: 'Was in dieser Phase geschieht',
  },
  it: {
    titles: ['1ª settimana di gravidanza', '2ª settimana di gravidanza', '3ª settimana di gravidanza'],
    intro: [
      'Le settimane di gravidanza si contano dal primo giorno dell’ultima mestruazione. Nella 1ª settimana il concepimento non è ancora avvenuto.',
      'La 2ª settimana di solito precede il concepimento. In un ciclo di 28 giorni l’ovulazione può avvenire in questo periodo, ma i tempi variano.',
      'Nella 3ª settimana può avvenire la fecondazione. Di solito è troppo presto perché sintomi o test domestici confermino la gravidanza con affidabilità.',
    ],
    expect: [
      'Le mestruazioni possono essere in corso. Se stai cercando una gravidanza, chiedi consiglio sui farmaci e sull’acido folico.',
      'La finestra fertile dipende dall’ovulazione. Monitorare il ciclo può aiutare, ma il calendario non individua l’ovulazione di tutte.',
      'Dopo la fecondazione possono iniziare le prime divisioni cellulari. Un test è più affidabile dal primo giorno di ritardo mestruale.',
    ],
    development: [
      'Nella 1ª settimana non c’è ancora un embrione: inizia un nuovo ciclo mestruale.',
      'Un ovulo può maturare ed essere rilasciato. Di solito il concepimento non è ancora avvenuto.',
      'Se avviene la fecondazione, le prime cellule si dividono mentre raggiungono l’utero.',
    ],
    body: [
      'Dal primo giorno delle mestruazioni inizia il conteggio di un’eventuale gravidanza.',
      'I cambiamenti ormonali preparano l’ovulazione, ma il momento varia tra i cicli.',
      'Potresti non notare cambiamenti. I sintomi non confermano che la fecondazione sia avvenuta.',
    ],
    symptoms: [
      'Sanguinamento e crampi ora appartengono alle mestruazioni, non allo sviluppo di un embrione.',
      'Alcune persone notano segnali dell’ovulazione, altre no. Non confermano una gravidanza.',
      'Potrebbero non esserci sintomi. Un ritardo e un test usato correttamente sono più utili dei sintomi da soli.',
    ],
    monthQuestion: 'A quale mese corrisponde questa settimana?',
    monthAnswer: 'Queste prime settimane rientrano nel primo mese dei calendari comuni. Contare le settimane è più preciso.',
    conceptionQuestion: 'Il concepimento è già avvenuto?',
    conceptionAnswers: [
      'No. La 1ª settimana inizia con l’ultima mestruazione, prima del concepimento.',
      'Di solito no. In un ciclo di 28 giorni ovulazione e concepimento possono avvenire verso la fine della settimana, ma ogni ciclo è diverso.',
      'È possibile, ma i sintomi non bastano a confermarlo. Segui tempi e istruzioni del test di gravidanza.',
    ],
    symptomsQuestion: 'I sintomi confermano la gravidanza?',
    symptomsAnswer: 'No. I primi segnali somigliano ai normali cambiamenti del ciclo. Il test è più affidabile dal primo giorno di ritardo.',
    stageTitle: 'Cosa succede in questa fase',
  },
  es: {
    titles: ['1 semana de embarazo', '2 semanas de embarazo', '3 semanas de embarazo'],
    intro: [
      'Las semanas de embarazo se cuentan desde el primer día de la última regla. En la semana 1 aún no ha ocurrido la concepción.',
      'La semana 2 suele ser anterior a la concepción. En un ciclo de 28 días la ovulación puede ocurrir por estas fechas, pero el momento varía.',
      'En la semana 3 puede producirse la fecundación. Suele ser pronto para que los síntomas o un test casero confirmen el embarazo con fiabilidad.',
    ],
    expect: [
      'Puedes tener la regla. Si buscas un embarazo, consulta sobre tus medicamentos y el ácido fólico.',
      'La ventana fértil depende de la ovulación. Seguir tu ciclo puede orientar, pero un calendario no predice la ovulación de todas las personas.',
      'Tras la fecundación pueden empezar las primeras divisiones celulares. El test es más fiable desde el primer día de falta.',
    ],
    development: [
      'En la semana 1 todavía no hay embrión: empieza un nuevo ciclo menstrual.',
      'Un óvulo puede madurar y liberarse. Por lo general, la concepción aún no ha ocurrido.',
      'Si ocurre la fecundación, las primeras células se dividen mientras avanzan hacia el útero.',
    ],
    body: [
      'El primer día de la regla inicia el cómputo de un posible embarazo.',
      'Los cambios hormonales preparan la ovulación; el momento varía entre ciclos.',
      'Puede que todavía no notes cambios. Los síntomas no confirman si hubo fecundación.',
    ],
    symptoms: [
      'El sangrado y los cólicos son síntomas menstruales, no señales de un embrión en desarrollo.',
      'Algunas personas notan signos de ovulación y otras no. No confirman embarazo.',
      'Puede que no haya síntomas. Una falta y un test usado correctamente aportan más información.',
    ],
    monthQuestion: '¿A qué mes corresponde esta semana?',
    monthAnswer: 'Estas primeras semanas pertenecen al primer mes en los calendarios habituales. Contar en semanas es más preciso.',
    conceptionQuestion: '¿Ha ocurrido ya la concepción?',
    conceptionAnswers: [
      'No. La semana 1 empieza con la última regla, antes de la concepción.',
      'Normalmente no. En un ciclo de 28 días, ovulación y concepción pueden llegar al final de esta semana; los ciclos varían.',
      'Es posible, pero los síntomas no lo confirman. Sigue los plazos y las instrucciones del test de embarazo.',
    ],
    symptomsQuestion: '¿Los síntomas confirman un embarazo?',
    symptomsAnswer: 'No. Los signos tempranos coinciden con cambios normales del ciclo. El test es más fiable desde el primer día de falta.',
    stageTitle: 'Qué ocurre en esta etapa',
  },
  pt: {
    titles: ['1.ª semana de gravidez', '2.ª semana de gravidez', '3.ª semana de gravidez'],
    intro: [
      'As semanas de gravidez contam-se desde o primeiro dia da última menstruação. Na 1.ª semana ainda não ocorreu a conceção.',
      'A 2.ª semana costuma anteceder a conceção. Num ciclo de 28 dias, a ovulação pode acontecer por esta altura, mas o momento varia.',
      'Na 3.ª semana pode ocorrer a fecundação. Geralmente ainda é cedo para sintomas ou testes caseiros confirmarem a gravidez com confiança.',
    ],
    expect: [
      'A menstruação pode estar em curso. Se planeias engravidar, pede orientação sobre medicamentos e ácido fólico.',
      'A janela fértil depende da ovulação. Acompanhar o ciclo pode ajudar, mas o calendário não prevê a ovulação de todas as pessoas.',
      'Após a fecundação, as primeiras células podem começar a dividir-se. O teste é mais fiável desde o primeiro dia de atraso menstrual.',
    ],
    development: [
      'Na 1.ª semana ainda não há embrião: começa um novo ciclo menstrual.',
      'Um óvulo pode amadurecer e ser libertado. Em geral, a conceção ainda não aconteceu.',
      'Se houver fecundação, as primeiras células dividem-se a caminho do útero.',
    ],
    body: [
      'O primeiro dia da menstruação inicia a contagem de uma eventual gravidez.',
      'As alterações hormonais preparam a ovulação; o momento varia entre ciclos.',
      'Podes ainda não notar mudanças. Os sintomas não confirmam se houve fecundação.',
    ],
    symptoms: [
      'Hemorragia e cólicas nesta fase são sintomas menstruais, não sinais de um embrião em desenvolvimento.',
      'Algumas pessoas notam sinais de ovulação e outras não. Esses sinais não confirmam gravidez.',
      'Pode não haver sintomas. Um atraso e um teste corretamente usado dão informação mais útil.',
    ],
    monthQuestion: 'A que mês corresponde esta semana?',
    monthAnswer: 'Estas primeiras semanas pertencem ao primeiro mês nos calendários habituais. Contar semanas é mais preciso.',
    conceptionQuestion: 'A conceção já aconteceu?',
    conceptionAnswers: [
      'Não. A 1.ª semana começa com a última menstruação, antes da conceção.',
      'Geralmente ainda não. Num ciclo de 28 dias, ovulação e conceção podem ocorrer no fim desta semana; os ciclos variam.',
      'É possível, mas os sintomas não o confirmam. Segue o tempo e as instruções do teste de gravidez.',
    ],
    symptomsQuestion: 'Os sintomas confirmam uma gravidez?',
    symptomsAnswer: 'Não. Os sinais iniciais podem confundir-se com mudanças normais do ciclo. O teste é mais fiável desde o primeiro dia de atraso.',
    stageTitle: 'O que acontece nesta fase',
  },
  fr: {
    titles: ['1 semaine de grossesse', '2 semaines de grossesse', '3 semaines de grossesse'],
    intro: [
      'Les semaines de grossesse sont comptées depuis le premier jour des dernières règles. En semaine 1, la conception n’a pas encore eu lieu.',
      'La semaine 2 précède généralement la conception. Dans un cycle de 28 jours, l’ovulation peut survenir à cette période, mais le moment varie.',
      'En semaine 3, une fécondation peut avoir lieu. Il est généralement trop tôt pour que des symptômes ou un test à domicile confirment une grossesse de façon fiable.',
    ],
    expect: [
      'Vos règles peuvent être en cours. Si vous préparez une grossesse, demandez conseil pour vos médicaments et l’acide folique.',
      'La fenêtre fertile dépend de l’ovulation. Suivre son cycle peut aider, mais un calendrier ne prédit pas l’ovulation de tout le monde.',
      'Après une fécondation, les premières cellules peuvent se diviser. Un test est plus fiable dès le premier jour de retard des règles.',
    ],
    development: [
      'En semaine 1, il n’y a pas encore d’embryon : un nouveau cycle menstruel commence.',
      'Un ovule peut mûrir et être libéré. La conception n’a généralement pas encore eu lieu.',
      'Si la fécondation se produit, les premières cellules se divisent en allant vers l’utérus.',
    ],
    body: [
      'Le premier jour des règles marque le début du calcul d’une éventuelle grossesse.',
      'Les changements hormonaux préparent l’ovulation, dont la date varie selon les cycles.',
      'Vous ne remarquerez peut-être aucun changement. Les symptômes ne confirment pas une fécondation.',
    ],
    symptoms: [
      'Les saignements et crampes sont ici des symptômes des règles, pas d’un embryon en développement.',
      'Certaines personnes remarquent des signes d’ovulation, d’autres non. Ils ne confirment pas une grossesse.',
      'Il peut ne pas y avoir de symptômes. Un retard des règles et un test bien utilisé sont plus informatifs.',
    ],
    monthQuestion: 'À quel mois correspond cette semaine ?',
    monthAnswer: 'Ces premières semaines appartiennent au premier mois des calendriers habituels. Compter en semaines est plus précis.',
    conceptionQuestion: 'La conception a-t-elle déjà eu lieu ?',
    conceptionAnswers: [
      'Non. La semaine 1 commence avec les dernières règles, avant la conception.',
      'En général, pas encore. Dans un cycle de 28 jours, ovulation et conception peuvent arriver vers la fin de cette semaine ; les cycles varient.',
      'C’est possible, mais les symptômes ne le confirment pas. Suivez le délai et les instructions de votre test de grossesse.',
    ],
    symptomsQuestion: 'Les symptômes confirment-ils une grossesse ?',
    symptomsAnswer: 'Non. Les signes précoces ressemblent à des changements habituels du cycle. Le test est plus fiable dès le premier jour de retard.',
    stageTitle: 'Ce qui se passe à ce stade',
  },
  uk: {
    titles: ['1-й тиждень вагітності', '2-й тиждень вагітності', '3-й тиждень вагітності'],
    intro: [
      'Термін вагітності рахують від першого дня останньої менструації. На 1-му тижні зачаття ще не відбулося: це початок циклу, за яким визначають термін.',
      '2-й тиждень зазвичай передує зачаттю. За 28-денного циклу овуляція може відбутися приблизно зараз, але її час у всіх різний.',
      'На 3-му тижні може відбутися запліднення. Зазвичай ще рано робити висновок про вагітність за симптомами чи домашнім тестом.',
    ],
    expect: [
      'Менструація може тривати. Якщо плануєте вагітність, обговоріть ліки з лікарем і дізнайтеся про прийом фолієвої кислоти.',
      'Фертильне вікно залежить від овуляції. Відстеження циклу може допомогти, але календар не визначає її точний день для кожної людини.',
      'Після запліднення можуть початися перші поділи клітин. Домашній тест найнадійніший із першого дня затримки менструації.',
    ],
    development: [
      'На 1-му тижні ембріона ще немає: починається новий менструальний цикл.',
      'Яйцеклітина може дозрівати й вивільнитися. Зачаття зазвичай ще не відбулося.',
      'Якщо відбулося запліднення, перші клітини діляться на шляху до матки.',
    ],
    body: [
      'Перший день менструації починає відлік можливої вагітності.',
      'Гормональні зміни готують овуляцію; її час відрізняється між циклами.',
      'Ви можете ще не помічати змін. Симптоми не підтверджують, чи відбулося запліднення.',
    ],
    symptoms: [
      'Кровотеча й спазми зараз пов’язані з менструацією, а не з розвитком ембріона.',
      'Дехто помічає ознаки овуляції, дехто ні. Вони не підтверджують вагітність.',
      'Симптомів може не бути. Затримка й правильно виконаний тест дадуть більше інформації.',
    ],
    monthQuestion: 'Який це місяць вагітності?',
    monthAnswer: 'Ці ранні тижні зазвичай відносять до першого місяця. Рахувати термін у тижнях точніше.',
    conceptionQuestion: 'Чи вже відбулося зачаття?',
    conceptionAnswers: [
      'Ні. 1-й тиждень починається з останньої менструації, ще до зачаття.',
      'Зазвичай іще ні. За 28-денного циклу овуляція й зачаття можуть припасти на кінець цього тижня, але цикли різняться.',
      'Це можливо, але самі симптоми цього не підтверджують. Дотримуйтеся термінів та інструкції до тесту.',
    ],
    symptomsQuestion: 'Чи підтверджують симптоми вагітність?',
    symptomsAnswer: 'Ні. Ранні ознаки схожі на звичайні зміни циклу. Тест найнадійніший із першого дня затримки менструації.',
    stageTitle: 'Що відбувається на цьому етапі',
  },
};

export function earlyStageTitle(locale: Locale, week: number, fallback: string): string {
  return week <= 3 ? copy[locale].stageTitle : fallback;
}

export function clarifyEarlyWeek(page: WeekPage, locale: Locale): WeekPage {
  if (page.week < 1 || page.week > 3) return page;
  const content = copy[locale];
  const index = (page.week - 1) as 0 | 1 | 2;
  const title = content.titles[index];
  return {
    ...page,
    title,
    intro: content.intro[index],
    expect: content.expect[index],
    development: [content.development[index]],
    body: [content.body[index]],
    symptoms: [content.symptoms[index]],
    facts: { ...page.facts, lengthCm: null, weightG: null },
    faq: [
      { question: content.monthQuestion, answer: content.monthAnswer },
      { question: content.conceptionQuestion, answer: content.conceptionAnswers[index] },
      { question: content.symptomsQuestion, answer: content.symptomsAnswer },
    ],
    seo: {
      ...page.seo,
      title,
      description: content.intro[index],
      primaryKeyword: title,
    },
  };
}
