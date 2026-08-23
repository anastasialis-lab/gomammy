import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  bzga: {
    label: 'Schwangerschaft und Geburt — Informationen für Eltern',
    publisher: 'Bundeszentrale für gesundheitliche Aufklärung',
    url: 'https://www.familienplanung.de/schwangerschaft/',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'WHO-Empfehlungen zur Schwangerenvorsorge',
    publisher: 'Weltgesundheitsorganisation',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  gba: {
    label: 'Mutterschafts-Richtlinien',
    publisher: 'Gemeinsamer Bundesausschuss',
    url: 'https://www.g-ba.de/richtlinien/19/',
    checkedAt: '2026-08-01',
  },
};

export const deArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'de',
    slug: 'erste-anzeichen-einer-schwangerschaft',
    categoryKey: 'symptoms',
    title: 'Erste Anzeichen einer Schwangerschaft: worauf du achten kannst',
    excerpt:
      'Welche Anzeichen zuerst auftauchen, ab wann ein Test zuverlässig ist und was in den Tagen nach einem positiven Ergebnis wirklich zählt.',
    heroImage: {
      src: '/images/articles/early-signs.webp',
      alt: 'Ruhiger Morgen mit einer Tasse Tee und einem Schwangerschaftstest auf dem Tisch',
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
      'Eine frühe Schwangerschaft meldet sich selten deutlich. Manche Frauen spüren schon Tage nach der Einnistung eine Veränderung, andere fühlen sich bis weit nach der ausbleibenden Periode völlig normal. Beides ist häufig — und beides sagt nichts darüber aus, wie es der Schwangerschaft geht.',
    blocks: [
      h2('Die Anzeichen, die zuerst auftauchen'),
      p(
        'Die meisten frühen Beschwerden gehen auf ein Hormon zurück: hCG, das die entstehende Plazenta nach der Einnistung bildet. Der Wert verdoppelt sich etwa alle zwei bis drei Tage — deshalb fühlen sich die ersten zwei Wochen oft nach gar nichts an und dann plötzlich nach allem gleichzeitig.',
      ),
      ul([
        [b('Ausbleibende Periode. '), { text: 'Bei regelmäßigem Zyklus nach wie vor das verlässlichste frühe Zeichen.' }],
        [b('Spannende, schwerere Brüste. '), { text: 'Oft die allererste Veränderung, manchmal noch vor dem Test.' }],
        [b('Müdigkeit. '), { text: 'Keine gewöhnliche Müdigkeit, sondern eine Schwere, die auch nach einer vollen Nacht bleibt.' }],
        [b('Übelkeit. '), { text: 'Sie beginnt meist um die 5. oder 6. Woche und hält sich selten an den Morgen.' }],
        [b('Häufiger Harndrang. '), { text: 'Die Nieren werden früh stärker durchblutet.' }],
        [b('Empfindlicher Geruchssinn. '), { text: 'Kaffee, Bratfett und Parfüm sind meist die ersten Opfer.' }],
      ]),
      cta('bubbi-inline'),
      h2('Wann ein Test sinnvoll ist'),
      p(
        'Ein Test misst hCG im Urin. Ab dem Tag, an dem die Periode fällig wäre, ist er sehr zuverlässig. Früher zu testen kann funktionieren, aber ein negatives Ergebnis schließt eine Schwangerschaft zu diesem Zeitpunkt nicht aus — das Hormon ist möglicherweise noch zu niedrig.',
      ),
      ol([
        'Nimm den ersten Morgenurin, dort ist hCG am stärksten konzentriert.',
        'Achte auf das Haltbarkeitsdatum und halte die Wartezeit aus der Anleitung genau ein.',
        'Bleibt der Test negativ und die Periode aus, teste in drei Tagen erneut.',
      ]),
      callout(
        'info',
        'Auch eine blasse Linie ist eine Linie',
        'Jede zweite Linie, so schwach sie auch ist, bedeutet nachgewiesenes hCG. Wiederhole den Test nach 48 Stunden, wenn du die Linie deutlicher sehen möchtest.',
      ),
      h2('Was nach einem positiven Test wichtig ist'),
      p(
        'In den ersten Tagen musst du niemanden sofort aufsuchen, aber zwei Dinge lohnen sich gleich: ein Schwangerschaftsvitamin mit 400 µg Folsäure beginnen und auf Alkohol und Zigaretten verzichten. Danach den ersten Vorsorgetermin vereinbaren — er findet meist zwischen der 8. und 12. Woche statt.',
      ),
      p(
        'Wenn du den ersten Tag deiner letzten Periode kennst, kannst du den Geburtstermin berechnen und deine ',
        link('Schwangerschaft Woche für Woche', 'category:by-week'),
        ' verfolgen.',
      ),
      callout(
        'warning',
        'Melde dich früher, wenn',
        'du starke Blutungen, heftige oder einseitige Schmerzen, Schulterschmerzen oder Kreislaufprobleme hast. Das gehört am selben Tag abgeklärt.',
      ),
    ],
    faq: [
      {
        question: 'Wie früh können Schwangerschaftsanzeichen auftreten?',
        answer:
          'Manche Frauen bemerken ab der 4. Woche empfindliche Brüste oder Müdigkeit, kurz nach der Einnistung. Viele spüren bis zur 6. Woche gar nichts, und manche haben fast keine Beschwerden.',
      },
      {
        question: 'Kann ein Test negativ sein, obwohl ich schwanger bin?',
        answer:
          'Ja, wenn du zu früh testest. hCG verdoppelt sich alle zwei bis drei Tage, deshalb kann ein Test vor dem Fälligkeitstag der Periode zu wenig nachweisen. Teste nach drei Tagen erneut.',
      },
      {
        question: 'Sind Schmierblutungen in der Frühschwangerschaft normal?',
        answer:
          'Eine leichte Schmierblutung um den erwarteten Periodentermin kann eine Einnistungsblutung sein und ist häufig. Starke Blutungen oder Blutungen mit Schmerzen gehören am selben Tag abgeklärt.',
      },
    ],
    sources: [SOURCES.bzga, SOURCES.gba],
    seo: {
      title: 'Erste Anzeichen einer Schwangerschaft: Symptome und Test',
      description:
        'Die frühesten Schwangerschaftsanzeichen, wann sie auftreten, ab wann ein Test zuverlässig ist und was nach einem positiven Ergebnis zu tun ist.',
      primaryKeyword: 'erste Anzeichen Schwangerschaft',
      secondaryKeywords: ['Schwangerschaftsanzeichen', 'Schwangerschaftstest wann'],
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
    locale: 'de',
    slug: 'kliniktasche-checkliste',
    categoryKey: 'birth',
    title: 'Kliniktasche packen: Checkliste für Geburt und Wochenbett',
    excerpt:
      'Was für die Geburt, für die Zeit danach und für dein Baby wirklich in die Tasche gehört — gepackt bis zur 36. Woche.',
    heroImage: {
      src: '/images/articles/hospital-bag.webp',
      alt: 'Gepackte Kliniktasche mit zusammengelegter Babykleidung daneben',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'Bei der Kliniktasche geht es nicht darum, auf alles vorbereitet zu sein. Es geht darum, an einem Tag keine Entscheidungen mehr treffen zu müssen, an dem du keine treffen willst. Einmal gut packen und neben die Tür stellen.',
    blocks: [
      h2('Wann packen'),
      p(
        'Die Tasche sollte ab der 36. Woche bereitstehen. Babys halten sich selten an Termine, und in Ruhe zu packen ist deutlich leichter als zwischen ersten Wehen. Stell die Tasche an die Tür und kleb eine kurze Liste der letzten Dinge — Handy, Ladekabel, Brille — obendrauf.',
      ),
      h2('Für die Geburt'),
      ul([
        'Mutterpass, Ausweis und Versichertenkarte',
        'Ein weites, bequemes Oberteil oder Nachthemd, um das es dir nicht leidtut',
        'Hausschuhe oder Badelatschen und warme Socken — Füße werden bei der Geburt kalt',
        'Lippenpflege, Haargummis und eine Trinkflasche',
        'Snacks für eine lange Nacht und Kleingeld oder Karte für die Automaten',
        'Den ausgedruckten Geburtsplan und ein langes Ladekabel',
      ]),
      cta('bubbi-inline'),
      h2('Für die Zeit nach der Geburt'),
      ul([
        'Zwei bis drei Still-BHs und Stilleinlagen',
        'Wochenbetteinlagen — mehr als du denkst, keine Tampons',
        'Bequeme, hoch geschnittene Unterwäsche, mehrere Stück',
        'Weite Kleidung für den Heimweg: nichts, was vor der Schwangerschaft gepasst hat',
        'Kulturbeutel, Handtuch und alles, was ein fremdes Zimmer vertrauter macht',
      ]),
      h2('Für dein Baby'),
      ul([
        'Bodys und Strampler in Größe 50 und 56',
        'Mützchen, Kratzfäustlinge und eine Jacke oder Strickjacke',
        'Windeln und Waschlappen oder Wasserwischtücher',
        'Eine Decke und ein wettergerechtes Heimfahr-Outfit',
        'Eine korrekt eingebaute Babyschale — ohne sie geht es meist nicht nach Hause',
      ]),
      callout(
        'care',
        'Eine Tasche für die Begleitperson',
        'Snacks, Wechselkleidung, Ladekabel und Bargeld. Begleitpersonen können oft nicht weg, und die Cafeteria hat nachts zu.',
      ),
    ],
    faq: [
      {
        question: 'Ab wann sollte die Kliniktasche gepackt sein?',
        answer:
          'Bis zur 36. Woche. Etwa jedes zehnte Baby kommt vor der 37. Woche, und früh zu packen kostet nichts.',
      },
      {
        question: 'Wie viele Taschen brauche ich?',
        answer:
          'Eine für die Geburt und eine für das Wochenbett ist die einfachste Aufteilung, dazu eine kleine für die Begleitperson. Manche Kliniken begrenzen, was in den Kreißsaal darf.',
      },
      {
        question: 'Was wird am häufigsten vergessen?',
        answer:
          'Ein langes Ladekabel, Snacks für die Begleitperson und bequeme Kleidung für den eigenen Heimweg.',
      },
    ],
    sources: [SOURCES.bzga],
    seo: {
      title: 'Kliniktasche Checkliste: Was du zur Geburt einpackst',
      description:
        'Vollständige Checkliste für die Kliniktasche: für die Geburt, für das Wochenbett und für dein Baby — mit dem richtigen Zeitpunkt zum Packen.',
      primaryKeyword: 'Kliniktasche Checkliste',
      secondaryKeywords: ['Kliniktasche packen', 'Was in die Kliniktasche'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'de',
    slug: 'schlafposition-in-der-schwangerschaft',
    categoryKey: 'health',
    title: 'Schlafposition in der Schwangerschaft: was wirklich hilft',
    excerpt:
      'Warum ab der 28. Woche zur Seitenlage geraten wird, wie sie bequem wird und was gegen die anderen Gründe fürs Wachliegen hilft.',
    heroImage: {
      src: '/images/articles/sleep.webp',
      alt: 'Weich beleuchtetes Schlafzimmer mit Kissen für die Seitenlage',
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
      'Der Schlaf wird genau dann kompliziert, wenn du ihn am dringendsten brauchst. Die gute Nachricht: Die Empfehlung ist einfacher, als sie klingt, und die meisten Beschwerden lassen sich mit ein paar gut platzierten Kissen lösen.',
    blocks: [
      h2('Warum die Position ab einem gewissen Punkt zählt'),
      p(
        'Ab etwa der 28. Woche kann das Gewicht der Gebärmutter auf die große Hohlvene drücken, die das Blut aus den Beinen zum Herzen zurückführt. Flach auf dem Rücken zu liegen verringert diesen Rückfluss — deshalb lautet die Empfehlung ab Woche 28, auf der Seite einzuschlafen.',
      ),
      p(
        'Welche Seite, ist zweitrangig. Die linke wird oft empfohlen, weil sie die Leber entlastet und den Kreislauf leicht verbessert. Entscheidend ist nur, nicht auf dem Rücken einzuschlafen.',
      ),
      callout(
        'info',
        'Auf dem Rücken aufzuwachen ist kein Problem',
        'Dein Körper wechselt nachts oft die Position. Untersucht wurde die Einschlafposition, weil du in ihr am längsten liegst.',
      ),
      h2('Die Seitenlage bequem machen'),
      ul([
        'Ein Kissen zwischen den Knien hält Hüfte und unteren Rücken in einer Linie.',
        'Ein Kissen oder gerolltes Handtuch im Rücken verhindert das Zurückrollen.',
        'Ein Kissen unter dem Bauch nimmt den Zug von den Mutterbändern.',
        'Ein leicht erhöhtes Kopfende hilft, wenn dich Sodbrennen weckt.',
      ]),
      cta('bubbi-inline'),
      h2('Der Rest der Nacht'),
      p(
        'Die Position ist nur die halbe Miete. Unterbrochener Schlaf hat meist drei Gründe: Harndrang, Sodbrennen und ein Kopf, der nicht abschaltet. Trink den Großteil tagsüber, iss in den letzten drei Stunden vor dem Schlafen nichts Großes und behandle die letzte halbe Stunde als Runterkommen statt als Bildschirmzeit.',
      ),
      p(
        'Kurze Nickerchen tagsüber sind besser als Durchhalten. Unterbrochene Nächte summieren sich, und im ',
        link('dritten Trimester', 'category:by-week'),
        ' brauchen die meisten sie.',
      ),
    ],
    faq: [
      {
        question: 'Auf welcher Seite soll ich in der Schwangerschaft schlafen?',
        answer:
          'Beide Seiten sind in Ordnung. Die linke wird oft empfohlen, weil sie den Kreislauf leicht verbessert. Wichtig ist ab Woche 28, auf der Seite statt auf dem Rücken einzuschlafen.',
      },
      {
        question: 'Was, wenn ich auf dem Rücken aufwache?',
        answer:
          'Dreh dich einfach auf die Seite und schlaf weiter. Die Empfehlung bezieht sich auf die Einschlafposition, nicht auf jede Position der Nacht.',
      },
      {
        question: 'Brauche ich ein Stillkissen zum Schlafen?',
        answer:
          'Nicht unbedingt. Zwei normale Kissen — eins zwischen den Knien, eins im Rücken — leisten fast dasselbe.',
      },
    ],
    sources: [SOURCES.bzga, SOURCES.who],
    seo: {
      title: 'Schlafposition Schwangerschaft: Seitenlage richtig nutzen',
      description:
        'Warum ab der 28. SSW die Seitenlage empfohlen wird, wie Kissen den Schlaf bequemer machen und was gegen Sodbrennen und unruhige Nächte hilft.',
      primaryKeyword: 'Schlafposition Schwangerschaft',
      secondaryKeywords: ['auf welcher Seite schlafen schwanger', 'Schlafen in der Schwangerschaft'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'de',
    slug: 'herzschlag-des-babys',
    categoryKey: 'baby',
    title: 'Der Herzschlag deines Babys: ab wann und was normal ist',
    excerpt:
      'Wann das Herz zu schlagen beginnt, welche Werte in welcher Woche normal sind und warum Hebammen Bewegungen für verlässlicher halten als Heim-Dopplers.',
    heroImage: {
      src: '/images/articles/heartbeat.webp',
      alt: 'Ultraschallbild auf einem Bildschirm in einer ruhig beleuchteten Praxis',
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
      'Für viele wird die Schwangerschaft mit dem ersten Herzschlag real. Er gehört auch zu den meistgesuchten und am häufigsten missverstandenen Themen — hier steht, was die Zahlen tatsächlich bedeuten.',
    blocks: [
      h2('Wann das Herz zu schlagen beginnt'),
      p(
        'Das Herz entsteht als einfaches Rohr und beginnt etwa in der 5. bis 6. Woche zu pulsieren. Im frühen Ultraschall sieht das eher nach Flimmern aus als nach Herzschlag. Ab Woche 6 ist es meist im vaginalen Ultraschall sichtbar, ab Woche 10 bis 12 lässt es sich oft mit einem Doppler hören.',
      ),
      h2('Was die Zahlen bedeuten'),
      p(
        'Das Herz eines Babys schlägt deutlich schneller als deines. Die Frequenz steigt in den ersten Wochen, erreicht um die 9. bis 10. Woche mit etwa 170 Schlägen pro Minute ihren Höhepunkt und pendelt sich danach auf 110 bis 160 ein.',
      ),
      ul([
        'Woche 6: etwa 100–120 Schläge pro Minute',
        'Woche 9–10: etwa 140–170, der schnellste Wert der Schwangerschaft',
        'Ab Woche 12: 110–160 und bleibt dort',
      ]),
      callout(
        'care',
        'Die Herzfrequenz verrät nicht das Geschlecht',
        'Die Idee, ein schnellerer Herzschlag bedeute ein Mädchen, wurde untersucht und hält nicht stand. Die Frequenz hängt von Aktivität und Schwangerschaftswoche ab, nicht vom Geschlecht.',
      ),
      h2('Doppler für zu Hause'),
      p(
        'Handgeräte werden viel verkauft, Hebammen raten aber davon ab, sich darauf zu verlassen. Der eigene Puls lässt sich leicht mit dem des Babys verwechseln, und ein beruhigendes Geräusch kann einen Anruf verzögern, der nötig gewesen wäre. Ab Woche 24 ist das Bewegungsmuster deines Babys das verlässlichere Signal.',
      ),
      callout(
        'warning',
        'Bewegungen zählen mehr als Geräusche',
        'Wenn dein Baby sich weniger bewegt oder das Muster sich ändert, melde dich sofort in der Klinik oder bei deiner Hebamme — Tag und Nacht, egal wie oft du schon angerufen hast.',
      ),
      cta('bubbi-inline'),
    
    ],
    faq: [
      {
        question: 'Ab wann hört man den Herzschlag des Babys?',
        answer:
          'Im vaginalen Ultraschall ist er meist ab Woche 6 sichtbar, mit dem Doppler bei der Vorsorge etwa ab Woche 10 bis 12 hörbar.',
      },
      {
        question: 'Welche Herzfrequenz ist normal?',
        answer:
          'Ab Woche 12 etwa 110 bis 160 Schläge pro Minute. Am schnellsten ist sie um Woche 9 bis 10 mit bis zu 170.',
      },
      {
        question: 'Sind Heim-Doppler sicher?',
        answer:
          'Sie gelten nicht als schädlich, aber Hebammen raten davon ab, sich darauf zu verlassen: Ein vermeintlicher Babyherzschlag kann der eigene Puls sein, und falsche Beruhigung verzögert die Abklärung.',
      },
    ],
    sources: [SOURCES.bzga, SOURCES.gba],
    seo: {
      title: 'Herzschlag Baby: ab wann hörbar und was normal ist',
      description:
        'Wann das Herz des Babys zu schlagen beginnt, normale Herzfrequenzen Woche für Woche und warum Kindsbewegungen wichtiger sind als ein Heim-Doppler.',
      primaryKeyword: 'Herzschlag Baby Schwangerschaft',
      secondaryKeywords: ['fetale Herzfrequenz', 'ab wann Herzschlag hörbar'],
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
    locale: 'de',
    slug: 'vorbereitung-auf-die-schwangerschaft',
    categoryKey: 'pregnancy',
    title: 'Vorbereitung auf die Schwangerschaft: die drei Monate davor',
    excerpt:
      'Welche Untersuchungen, Nährstoffe und Zykluskenntnisse vor dem ersten Versuch zählen — und wie lange es üblicherweise dauert.',
    heroImage: {
      src: '/images/articles/preparing.webp',
      alt: 'Kalender, ein Glas Wasser und eine Schale Obst auf einem Küchentisch',
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
      'Bei der Vorbereitung geht es weniger darum, alles richtig zu machen, als darum, ein paar Dinge früh genug zu regeln — beginnend mit Folsäure und dem Wissen, wann ungefähr dein Eisprung ist.',
    blocks: [
      h2('Drei Monate vor dem ersten Versuch'),
      p(
        'Das meiste, was einer Schwangerschaft hilft, passiert vorher. Eizellen reifen über etwa drei Monate heran — was du jetzt änderst, wirkt sich auf den Zyklus aus, in dem du empfängst.',
      ),
      ol([
        'Beginne mit täglich 400 µg Folsäure — sie schützt das Neuralrohr in den ersten Wochen, bevor die meisten von der Schwangerschaft wissen.',
        'Lass dich durchchecken: Blutdruck, Schilddrüse, Eisen, Rötelnschutz und alle Dauermedikamente.',
        'Verzichte auf Zigaretten und Alkohol und reduziere Koffein auf ein bis zwei Tassen täglich.',
        'Bring die Zahnvorsorge auf den aktuellen Stand; Zahnfleischentzündungen stehen mit Frühgeburten in Verbindung.',
      ]),
      cta('bubbi-inline'),
      h2('Den eigenen Zyklus verstehen'),
      p(
        'Das fruchtbare Fenster umfasst die fünf Tage vor dem Eisprung und den Eisprung selbst. Spermien überleben mehrere Tage, die Eizelle ist nur etwa 24 Stunden befruchtungsfähig. Ungefähr zu wissen, wann du den Eisprung hast, zählt mehr als perfektes Timing.',
      ),
      ul([
        'Der Zervixschleim wird in den Tagen davor klar und spinnbar.',
        'Die Basaltemperatur steigt nach dem Eisprung leicht an und bestätigt ihn.',
        'Ovulationstests zeigen den LH-Anstieg, meist 24 bis 36 Stunden vorher.',
      ]),
      callout(
        'info',
        'Wie lange es üblicherweise dauert',
        'Etwa 8 von 10 Paaren werden innerhalb eines Jahres ohne Verhütung schwanger. Ab 35 ist es sinnvoll, schon nach sechs Monaten Rat zu suchen statt nach zwölf.',
      ),
      h2('Der Teil, den niemand einplant'),
      p(
        'Der Kinderwunsch kann leise den Kalender und die Stimmung übernehmen. Legt vorher fest, wie viel Tracking dir wirklich hilft, sprecht ab, wie oft ihr darüber redet, und haltet mindestens einen Teil des Monats davon frei.',
      ),
    ],
    faq: [
      {
        question: 'Wann sollte ich mit Folsäure beginnen?',
        answer:
          'Mindestens einen Monat vorher, idealerweise drei. Das Neuralrohr schließt sich in den ersten Wochen, oft bevor ein Test positiv ist.',
      },
      {
        question: 'Wie lange dauert es, schwanger zu werden?',
        answer:
          'Etwa 8 von 10 Paaren gelingt es innerhalb eines Jahres. Such ab 35 nach sechs Monaten Rat, bei unregelmäßigen Zyklen auch früher.',
      },
      {
        question: 'Muss mein Partner etwas tun?',
        answer:
          'Ja. Spermien reifen etwa drei Monate. Rauchstopp, weniger Alkohol und Hitze zu vermeiden lohnt sich also zur selben Zeit.',
      },
    ],
    sources: [SOURCES.bzga, SOURCES.who],
    seo: {
      title: 'Vorbereitung auf die Schwangerschaft: Checkliste für 3 Monate',
      description:
        'Was vor dem Kinderwunsch wichtig ist: Folsäure, Vorsorgeuntersuchungen, Lebensstil und das Verstehen des eigenen fruchtbaren Fensters.',
      primaryKeyword: 'Vorbereitung Schwangerschaft',
      secondaryKeywords: ['Kinderwunsch Checkliste', 'schwanger werden vorbereiten'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
