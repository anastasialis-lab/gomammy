import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  iss: {
    label: 'Gravidanza: informazioni per le future mamme',
    publisher: 'Istituto Superiore di Sanità',
    url: 'https://www.epicentro.iss.it/gravidanza/',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'Raccomandazioni OMS sull’assistenza prenatale',
    publisher: 'Organizzazione Mondiale della Sanità',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  salute: {
    label: 'Gravidanza e percorso nascita',
    publisher: 'Ministero della Salute',
    url: 'https://www.salute.gov.it/portale/donna/dettaglioContenutiDonna.jsp?area=Salute+donna&id=4491',
    checkedAt: '2026-08-01',
  },
};

export const itArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'it',
    slug: 'primi-sintomi-di-gravidanza',
    categoryKey: 'symptoms',
    title: 'Primi sintomi di gravidanza: quali sono e quando arrivano',
    excerpt:
      'I segnali che compaiono per primi, quando il test diventa affidabile e cosa conviene fare nei giorni successivi a un risultato positivo.',
    heroImage: {
      src: '/images/articles/early-signs.svg',
      alt: 'Mattina tranquilla con una tazza di tè e un test di gravidanza sul tavolo',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    reviewerId: 'reviewer',
    publishedAt: '2026-05-18',
    updatedAt: '2026-08-12',
    status: 'published',
    tagKeys: ['first-trimester', 'symptoms'],
    intro:
      'La gravidanza all’inizio raramente si annuncia con chiarezza. Alcune donne notano un cambiamento pochi giorni dopo l’impianto, altre si sentono perfettamente normali ben oltre il ritardo. Entrambe le cose sono comuni e nessuna delle due dice qualcosa su come sta andando la gravidanza.',
    blocks: [
      h2('I segnali che compaiono per primi'),
      p(
        'Quasi tutti i disturbi iniziali dipendono da un ormone: l’hCG, prodotto dalla placenta in formazione dopo l’impianto. I valori raddoppiano ogni due o tre giorni: per questo le prime due settimane sembrano non dire nulla, e poi arriva tutto insieme.',
      ),
      ul([
        [b('Ritardo delle mestruazioni. '), { text: 'Con cicli regolari resta il segnale precoce più affidabile.' }],
        [b('Seno teso e più pesante. '), { text: 'Spesso il primissimo cambiamento, a volte prima del test.' }],
        [b('Stanchezza. '), { text: 'Non la solita stanchezza, ma una pesantezza che resta anche dopo una notte intera.' }],
        [b('Nausea. '), { text: 'Può iniziare verso la 5ª o 6ª settimana e raramente si limita al mattino.' }],
        [b('Bisogno di urinare più spesso. '), { text: 'Il flusso di sangue ai reni aumenta già nelle prime settimane.' }],
        [b('Olfatto più sensibile. '), { text: 'Caffè, olio di cottura e profumi sono le prime vittime.' }],
      ]),
      cta('bubbi-inline'),
      h2('Quando fare il test'),
      p(
        'I test casalinghi misurano l’hCG nelle urine. Dal giorno in cui aspetti il ciclo il risultato è molto attendibile. Testare prima può funzionare, ma un esito negativo in quel momento non esclude la gravidanza: l’ormone potrebbe essere ancora troppo basso.',
      ),
      ol([
        'Usa la prima urina del mattino, quando l’hCG è più concentrato.',
        'Controlla la scadenza e rispetta con precisione i tempi indicati nel foglietto.',
        'Se il test è negativo e il ciclo non arriva, ripetilo dopo tre giorni.',
      ]),
      callout(
        'info',
        'Anche una linea sbiadita è una linea',
        'Qualsiasi seconda linea, per quanto tenue, significa hCG rilevato. Ripeti il test dopo 48 ore se vuoi vederla più marcata.',
      ),
      h2('Cosa fare dopo un test positivo'),
      p(
        'Nei primi giorni non serve correre da nessuno, ma due cose valgono subito: iniziare un integratore prenatale con 400 µg di acido folico ed eliminare alcol e fumo. Poi prenota la prima visita: nella maggior parte dei casi si fa tra l’8ª e la 12ª settimana.',
      ),
      p(
        'Se conosci il primo giorno dell’ultima mestruazione hai già tutto per calcolare la data presunta e seguire la ',
        link('gravidanza settimana per settimana', 'category:by-week'),
        '.',
      ),
      callout(
        'warning',
        'Chiama prima se',
        'hai perdite abbondanti, dolore forte o localizzato da un lato, dolore alla spalla o senti di svenire. Sono situazioni da valutare in giornata.',
      ),
    ],
    faq: [
      {
        question: 'Quando iniziano i sintomi della gravidanza?',
        answer:
          'Alcune donne notano seno teso o stanchezza già dalla 4ª settimana, subito dopo l’impianto. Molte non avvertono nulla fino alla 6ª settimana o oltre, e alcune quasi nessun sintomo.',
      },
      {
        question: 'Il test può essere negativo se sono incinta?',
        answer:
          'Sì, se lo fai troppo presto. L’hCG raddoppia ogni due o tre giorni, quindi prima del ritardo può non essere rilevabile. Ripeti dopo tre giorni.',
      },
      {
        question: 'Le perdite nelle prime settimane sono normali?',
        answer:
          'Perdite leggere intorno alla data attesa del ciclo possono essere da impianto e sono comuni. Un sanguinamento abbondante o con dolore va valutato lo stesso giorno.',
      },
    ],
    sources: [SOURCES.iss, SOURCES.salute],
    seo: {
      title: 'Primi sintomi di gravidanza: quali sono e quando fare il test',
      description:
        'I sintomi più precoci della gravidanza, quando compaiono, da quando il test è affidabile e cosa fare dopo un risultato positivo.',
      primaryKeyword: 'primi sintomi di gravidanza',
      secondaryKeywords: ['sintomi gravidanza prima settimana', 'quando fare il test di gravidanza'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['preparing-for-pregnancy', 'baby-heartbeat-in-pregnancy'],
    featured: true,
  },
  {
    translationKey: 'hospital-bag-checklist',
    locale: 'it',
    slug: 'borsa-per-il-parto-cosa-mettere',
    categoryKey: 'birth',
    title: 'Borsa per il parto: cosa mettere e quando prepararla',
    excerpt:
      'Una lista pratica per il travaglio, per i giorni dopo il parto e per il bambino — pronta entro la 36ª settimana.',
    heroImage: {
      src: '/images/articles/hospital-bag.svg',
      alt: 'Borsa preparata per l’ospedale con vestitini piegati accanto',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'La borsa per l’ospedale non serve a essere pronte a tutto. Serve a togliere decisioni da un giorno in cui non vorrai prenderne nessuna. Preparala bene una volta e lasciala vicino alla porta.',
    blocks: [
      h2('Quando prepararla'),
      p(
        'Tienila pronta entro la 36ª settimana. I bambini rispettano poco il calendario, e fare la valigia con calma è molto più semplice che farla tra una contrazione e l’altra. Attacca sopra un biglietto con le ultime cose da prendere: telefono, caricabatterie, occhiali.',
      ),
      h2('Per il travaglio'),
      ul([
        'Documenti, tessera sanitaria e cartella della gravidanza',
        'Una maglia o camicia da notte larga e comoda che non ti dispiaccia rovinare',
        'Ciabatte e calzini caldi: durante il travaglio i piedi si raffreddano',
        'Burrocacao, elastici per capelli e una borraccia',
        'Snack per una notte lunga e monete o carta per i distributori',
        'Il piano del parto stampato e un cavo di ricarica lungo',
      ]),
      cta('bubbi-inline'),
      h2('Per dopo il parto'),
      ul([
        'Due o tre reggiseni per l’allattamento e coppette assorbilatte',
        'Assorbenti post parto — più di quanti pensi, niente tamponi',
        'Slip comodi a vita alta, in più paia',
        'Vestiti larghi per tornare a casa: niente di pre-gravidanza',
        'Necessaire, asciugamano e qualsiasi cosa renda familiare una stanza estranea',
      ]),
      h2('Per il tuo bambino'),
      ul([
        'Body e tutine taglia neonato e 0–3 mesi',
        'Cappellino, muffole antigraffio e una golfina',
        'Pannolini e cotone o salviette all’acqua',
        'Una copertina e un completo per il rientro adatto alla stagione',
        'Il seggiolino auto installato correttamente: senza, molti ospedali non dimettono',
      ]),
      callout(
        'care',
        'Una borsa per chi ti accompagna',
        'Snack, un cambio, il caricabatterie e contanti. Chi ti accompagna spesso non può allontanarsi, e il bar dell’ospedale chiude.',
      ),
    ],
    faq: [
      {
        question: 'Quando va preparata la borsa per il parto?',
        answer:
          'Entro la 36ª settimana. Circa un bambino su dieci nasce prima della 37ª e prepararsi in anticipo non costa nulla.',
      },
      {
        question: 'Quante borse servono?',
        answer:
          'Una per il travaglio e una per il post parto è la divisione più pratica, più una piccola per chi ti accompagna. Alcuni ospedali limitano ciò che si può portare in sala.',
      },
      {
        question: 'Cosa si dimentica più spesso?',
        answer:
          'Un cavo di ricarica lungo, gli snack per chi ti accompagna e vestiti comodi per te al rientro.',
      },
    ],
    sources: [SOURCES.salute],
    seo: {
      title: 'Borsa per il parto: la lista completa di cosa mettere',
      description:
        'Cosa portare in ospedale per il travaglio, per i giorni dopo il parto e per il neonato, con i tempi giusti per preparare tutto.',
      primaryKeyword: 'borsa per il parto',
      secondaryKeywords: ['cosa mettere nella valigia per l’ospedale', 'lista ospedale parto'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'it',
    slug: 'come-dormire-in-gravidanza',
    categoryKey: 'health',
    title: 'Come dormire in gravidanza: le posizioni che aiutano davvero',
    excerpt:
      'Perché dalla 28ª settimana si consiglia di dormire su un fianco, come renderlo comodo e cosa fare per gli altri motivi che ti svegliano.',
    heroImage: {
      src: '/images/articles/sleep.svg',
      alt: 'Camera da letto con luce soffusa e cuscini disposti per dormire su un fianco',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    reviewerId: 'reviewer',
    publishedAt: '2026-06-11',
    updatedAt: '2026-08-16',
    status: 'published',
    tagKeys: ['third-trimester', 'sleep'],
    intro:
      'Il sonno si complica proprio quando ti serve di più. La buona notizia è che il consiglio è più semplice di quanto sembri, e gran parte del fastidio si risolve con qualche cuscino messo bene.',
    blocks: [
      h2('Perché la posizione inizia a contare'),
      p(
        'Dalla 28ª settimana circa il peso dell’utero può comprimere la grande vena che riporta il sangue dalle gambe al cuore. Restare distese sulla schiena riduce quel ritorno: per questo, da quella settimana, si consiglia di addormentarsi su un fianco.',
      ),
      p(
        'Va bene entrambi i lati. Il sinistro viene spesso consigliato perché alleggerisce il fegato e migliora leggermente la circolazione, ma la cosa che conta è semplicemente non addormentarsi supina.',
      ),
      callout(
        'info',
        'Svegliarsi sulla schiena non è un problema',
        'Il corpo cambia posizione molte volte per notte. Gli studi guardano alla posizione in cui ti addormenti, perché è quella che dura di più.',
      ),
      h2('Rendere comodo il fianco'),
      ul([
        'Un cuscino tra le ginocchia allinea bacino e parte bassa della schiena.',
        'Un cuscino o un asciugamano arrotolato dietro la schiena impedisce di girarti supina.',
        'Un cuscino sotto la pancia toglie tensione ai legamenti.',
        'Alzare un po’ la testiera aiuta se ti sveglia il bruciore di stomaco.',
      ]),
      cta('bubbi-inline'),
      h2('Il resto della notte'),
      p(
        'La posizione è solo metà del problema. Il sonno spezzato in gravidanza ha di solito tre cause: il bagno, il reflusso e una testa che non si spegne. Bevi soprattutto nella prima parte della giornata, evita pasti abbondanti nelle tre ore prima di coricarti e usa l’ultima mezz’ora per rallentare, non per stare davanti a uno schermo.',
      ),
      p(
        'I riposini diurni vanno presi, non combattuti. Le notti spezzate si accumulano e nel ',
        link('terzo trimestre', 'category:by-week'),
        ' quasi tutte ne hanno bisogno.',
      ),
    ],
    faq: [
      {
        question: 'Su quale lato è meglio dormire in gravidanza?',
        answer:
          'Entrambi vanno bene. Il sinistro è spesso suggerito perché migliora leggermente la circolazione, ma l’essenziale è addormentarsi su un fianco invece che sulla schiena dalla 28ª settimana.',
      },
      {
        question: 'E se mi sveglio supina?',
        answer:
          'Giràti su un fianco e torna a dormire. Il consiglio riguarda la posizione in cui ti addormenti, non ogni posizione della notte.',
      },
      {
        question: 'Serve un cuscino da gravidanza?',
        answer:
          'Non necessariamente. Due cuscini normali — uno tra le ginocchia e uno dietro la schiena — fanno quasi lo stesso lavoro.',
      },
    ],
    sources: [SOURCES.iss, SOURCES.who],
    seo: {
      title: 'Come dormire in gravidanza: posizioni e consigli pratici',
      description:
        'Perché dalla 28ª settimana si consiglia il fianco, come sistemare i cuscini e cosa fare contro reflusso e notti interrotte.',
      primaryKeyword: 'come dormire in gravidanza',
      secondaryKeywords: ['posizione per dormire incinta', 'dormire sul fianco gravidanza'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'it',
    slug: 'battito-del-bambino-in-gravidanza',
    categoryKey: 'baby',
    title: 'Il battito del bambino: quando inizia e quali valori sono normali',
    excerpt:
      'Quando il cuore inizia a battere, quali frequenze sono normali settimana per settimana e perché le ostetriche preferiscono i movimenti al doppler casalingo.',
    heroImage: {
      src: '/images/articles/heartbeat.svg',
      alt: 'Immagine ecografica su uno schermo in un ambulatorio con luce soffusa',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    reviewerId: 'reviewer',
    publishedAt: '2026-06-25',
    updatedAt: '2026-08-18',
    status: 'published',
    tagKeys: ['baby-development', 'first-trimester'],
    intro:
      'Per molte donne il battito è il momento in cui la gravidanza diventa reale. È anche uno degli argomenti più cercati e più fraintesi: ecco cosa dicono davvero quei numeri.',
    blocks: [
      h2('Quando il cuore inizia a battere'),
      p(
        'Il cuore nasce come un semplice tubo che comincia a pulsare intorno alla 5ª o 6ª settimana. In un’ecografia precoce sembra più un tremolio che un battito. Dalla 6ª settimana è di solito visibile con l’ecografia transvaginale, e tra la 10ª e la 12ª un doppler riesce spesso a farlo sentire.',
      ),
      h2('Cosa dicono i numeri'),
      p(
        'Il cuore di un bambino batte molto più in fretta di quello di un adulto. La frequenza sale nelle prime settimane, tocca il massimo intorno alla 9ª–10ª con circa 170 battiti al minuto, poi si stabilizza per il resto della gravidanza tra 110 e 160.',
      ),
      ul([
        'Settimana 6: circa 100–120 battiti al minuto',
        'Settimane 9–10: circa 140–170, il valore più alto di tutta la gravidanza',
        'Dalla settimana 12: si assesta tra 110 e 160 e resta lì',
      ]),
      callout(
        'care',
        'La frequenza non rivela il sesso',
        'L’idea che un battito più veloce significhi una femmina è stata studiata e non regge. La frequenza dipende dall’attività e dall’epoca gestazionale, non dal sesso.',
      ),
      h2('I doppler da casa'),
      p(
        'Si vendono ovunque, ma le ostetriche sconsigliano di affidarsi a loro. È facile captare il proprio polso e scambiarlo per quello del bambino, e un suono rassicurante può ritardare una telefonata necessaria. Dalla 24ª settimana in poi il ritmo dei movimenti è il segnale più affidabile.',
      ),
      callout(
        'warning',
        'Fidati dei movimenti, non dei suoni',
        'Se il tuo bambino si muove meno del solito o cambia ritmo, contatta subito l’ostetrica o il punto nascita — di giorno o di notte, per quante volte tu abbia già chiamato.',
      ),
      cta('bubbi-inline'),
    
    ],
    faq: [
      {
        question: 'Quando si sente il battito del bambino?',
        answer:
          'Di solito è visibile all’ecografia transvaginale dalla 6ª settimana e udibile con il doppler alle visite dalla 10ª–12ª.',
      },
      {
        question: 'Qual è la frequenza cardiaca normale?',
        answer:
          'Dalla 12ª settimana circa 110–160 battiti al minuto. È più alta tra la 9ª e la 10ª, quando arriva a circa 170.',
      },
      {
        question: 'I doppler casalinghi sono sicuri?',
        answer:
          'Non risultano dannosi, ma le ostetriche sconsigliano di affidarsi a loro: il suono che credi del bambino può essere il tuo polso, e una falsa rassicurazione ritarda i controlli.',
      },
    ],
    sources: [SOURCES.iss, SOURCES.salute],
    seo: {
      title: 'Battito del bambino: quando si sente e valori normali',
      description:
        'Quando il cuore del bambino inizia a battere, le frequenze normali settimana per settimana e perché i movimenti contano più di un doppler casalingo.',
      primaryKeyword: 'battito del bambino gravidanza',
      secondaryKeywords: ['frequenza cardiaca fetale', 'quando si sente il battito'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'sleeping-positions-in-pregnancy'],
    featured: true,
  },
  {
    translationKey: 'preparing-for-pregnancy',
    locale: 'it',
    slug: 'prepararsi-alla-gravidanza',
    categoryKey: 'pregnancy',
    title: 'Prepararsi alla gravidanza: cosa fare nei tre mesi prima',
    excerpt:
      'Controlli, integratori e conoscenza del ciclo prima di iniziare a cercare — e quanto tempo serve di solito per concepire.',
    heroImage: {
      src: '/images/articles/preparing.svg',
      alt: 'Un calendario, un bicchiere d’acqua e una ciotola di frutta sul tavolo della cucina',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    reviewerId: 'reviewer',
    publishedAt: '2026-07-02',
    updatedAt: '2026-08-19',
    status: 'published',
    tagKeys: ['preparation', 'nutrition'],
    intro:
      'Prepararsi alla gravidanza non significa fare tutto alla perfezione, ma sistemare per tempo poche cose: a partire dall’acido folico e dal sapere più o meno quando ovuli.',
    blocks: [
      h2('Tre mesi prima di iniziare'),
      p(
        'Gran parte di ciò che aiuta una gravidanza avviene prima che cominci. Gli ovociti maturano nell’arco di circa tre mesi: i cambiamenti che fai oggi riguardano il ciclo in cui concepirai.',
      ),
      ol([
        'Inizia 400 µg di acido folico al giorno: protegge il tubo neurale nelle prime settimane, quando spesso non sai ancora di essere incinta.',
        'Fai un controllo: pressione, tiroide, ferro, immunità alla rosolia e revisione di eventuali farmaci abituali.',
        'Elimina fumo e alcol e riduci la caffeina a una o due tazze al giorno.',
        'Aggiorna le cure dentali: la malattia gengivale è associata al parto pretermine.',
      ]),
      cta('bubbi-inline'),
      h2('Conoscere il proprio ciclo'),
      p(
        'La finestra fertile comprende i cinque giorni prima dell’ovulazione e il giorno stesso. Gli spermatozoi sopravvivono diversi giorni, l’ovulo è fecondabile solo per circa 24 ore. Sapere all’incirca quando ovuli conta più di qualunque tempismo perfetto.',
      ),
      ul([
        'Il muco cervicale diventa trasparente ed elastico nei giorni precedenti.',
        'La temperatura basale sale leggermente dopo l’ovulazione e la conferma.',
        'I test di ovulazione rilevano il picco di LH, di solito 24–36 ore prima.',
      ]),
      callout(
        'info',
        'Quanto tempo serve di solito',
        'Circa 8 coppie su 10 concepiscono entro un anno senza contraccezione. Dopo i 35 anni è ragionevole chiedere un parere dopo sei mesi invece che dodici.',
      ),
      h2('La parte che nessuno mette in conto'),
      p(
        'La ricerca di una gravidanza può occupare silenziosamente il calendario e l’umore. Decidi in anticipo quanto monitoraggio ti è davvero utile, accordati con il partner su quanto parlarne e tieni almeno una parte del mese libera da tutto questo.',
      ),
    ],
    faq: [
      {
        question: 'Quando iniziare l’acido folico?',
        answer:
          'Almeno un mese prima, idealmente tre. Il tubo neurale si chiude nelle prime settimane, spesso prima che il test sia positivo.',
      },
      {
        question: 'Quanto tempo serve per rimanere incinta?',
        answer:
          'Circa 8 coppie su 10 ci riescono entro un anno. Dopo i 35 anni chiedi consiglio dopo sei mesi, prima se i cicli sono irregolari.',
      },
      {
        question: 'Il partner deve fare qualcosa?',
        answer:
          'Sì. Gli spermatozoi maturano in circa tre mesi: smettere di fumare, ridurre l’alcol ed evitare fonti di calore conta fin da subito.',
      },
    ],
    sources: [SOURCES.iss, SOURCES.who],
    seo: {
      title: 'Prepararsi alla gravidanza: la checklist dei tre mesi',
      description:
        'Cosa fare prima di cercare una gravidanza: acido folico, controlli medici, stile di vita e come riconoscere la finestra fertile.',
      primaryKeyword: 'prepararsi alla gravidanza',
      secondaryKeywords: ['preconcezionale checklist', 'cercare una gravidanza'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
