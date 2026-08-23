import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  dgs: {
    label: 'Saúde na gravidez: informação para grávidas',
    publisher: 'Direção-Geral da Saúde',
    url: 'https://www.dgs.pt/paginas-de-sistema/saude-de-a-a-z/gravidez.aspx',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'Recomendações da OMS sobre cuidados pré-natais',
    publisher: 'Organização Mundial da Saúde',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  sns: {
    label: 'Gravidez e parto',
    publisher: 'SNS24',
    url: 'https://www.sns24.gov.pt/tema/gravidez/',
    checkedAt: '2026-08-01',
  },
};

export const ptArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'pt',
    slug: 'primeiros-sinais-de-gravidez',
    categoryKey: 'symptoms',
    title: 'Primeiros sinais de gravidez: quais são e quando aparecem',
    excerpt:
      'Os sinais que surgem primeiro, a partir de quando o teste é fiável e o que vale a pena fazer nos dias a seguir a um positivo.',
    heroImage: {
      src: '/images/articles/early-signs.webp',
      alt: 'Manhã calma com uma chávena de chá e um teste de gravidez em cima da mesa',
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
      'No início, a gravidez raramente se anuncia com clareza. Algumas mulheres notam uma mudança poucos dias depois da implantação; outras sentem-se perfeitamente normais muito depois do atraso. As duas coisas são comuns e nenhuma diz nada sobre como está a correr a gravidez.',
    blocks: [
      h2('Os sinais que aparecem primeiro'),
      p(
        'Quase todos os sintomas iniciais vêm de uma hormona: a hCG, produzida pela placenta em formação depois da implantação. Os valores duplicam a cada dois ou três dias — por isso as primeiras duas semanas parecem não trazer nada e depois chega tudo ao mesmo tempo.',
      ),
      ul([
        [b('Atraso da menstruação. '), { text: 'Com ciclos regulares continua a ser o sinal precoce mais fiável.' }],
        [b('Peito sensível e mais pesado. '), { text: 'Muitas vezes a primeira mudança, por vezes antes do teste.' }],
        [b('Cansaço. '), { text: 'Não o cansaço habitual, mas um peso que fica mesmo depois de uma noite inteira.' }],
        [b('Náuseas. '), { text: 'Costumam começar por volta da 5ª ou 6ª semana e raramente ficam pela manhã.' }],
        [b('Vontade de urinar mais vezes. '), { text: 'O fluxo de sangue para os rins aumenta muito cedo.' }],
        [b('Olfato mais apurado. '), { text: 'Café, óleo de cozinha e perfumes são as primeiras vítimas.' }],
      ]),
      cta('bubbi-inline'),
      h2('Quando fazer o teste'),
      p(
        'Os testes caseiros medem a hCG na urina. A partir do dia em que esperas a menstruação, o resultado é muito fiável. Fazer antes pode resultar, mas um negativo nessa altura não exclui gravidez: a hormona pode estar ainda demasiado baixa.',
      ),
      ol([
        'Usa a primeira urina da manhã, quando a hCG está mais concentrada.',
        'Verifica o prazo de validade e cumpre com rigor os tempos indicados no folheto.',
        'Se der negativo e a menstruação não vier, repete daqui a três dias.',
      ]),
      callout(
        'info',
        'Uma linha ténue também é uma linha',
        'Qualquer segunda linha, por mais fraca que seja, significa hCG detetada. Repete o teste 48 horas depois se quiseres vê-la mais nítida.',
      ),
      h2('O que fazer depois de um positivo'),
      p(
        'Nos primeiros dias não há pressa para consultas, mas duas coisas valem já: começar um suplemento pré-natal com 400 µg de ácido fólico e deixar o álcool e o tabaco. Depois marca a primeira consulta de vigilância — na maioria dos casos acontece entre as semanas 8 e 12.',
      ),
      p(
        'Se souberes o primeiro dia da última menstruação já tens o necessário para calcular a data provável do parto e acompanhar a tua ',
        link('gravidez semana a semana', 'category:by-week'),
        '.',
      ),
      callout(
        'warning',
        'Liga mais cedo se',
        'tiveres hemorragia abundante, dor forte ou só de um lado, dor no ombro ou sensação de desmaio. São situações para avaliar no próprio dia.',
      ),
    ],
    faq: [
      {
        question: 'Quando começam os sintomas de gravidez?',
        answer:
          'Algumas mulheres notam o peito sensível ou cansaço a partir da 4ª semana, logo após a implantação. Muitas não sentem nada até à 6ª semana ou mais tarde, e algumas quase não têm sintomas.',
      },
      {
        question: 'O teste pode dar negativo estando grávida?',
        answer:
          'Sim, se for feito demasiado cedo. A hCG duplica a cada dois ou três dias, por isso antes do atraso pode não ser detetada. Repete três dias depois.',
      },
      {
        question: 'Perdas ligeiras no início são normais?',
        answer:
          'Perdas leves na altura em que esperavas a menstruação podem ser hemorragia de implantação e são comuns. Hemorragia abundante ou com dor deve ser avaliada no próprio dia.',
      },
    ],
    sources: [SOURCES.dgs, SOURCES.sns],
    seo: {
      title: 'Primeiros sinais de gravidez e quando fazer o teste',
      description:
        'Os sintomas mais precoces da gravidez, quando aparecem, a partir de quando o teste é fiável e o que fazer depois de um resultado positivo.',
      primaryKeyword: 'primeiros sinais de gravidez',
      secondaryKeywords: ['sintomas de gravidez primeira semana', 'quando fazer teste de gravidez'],
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
    locale: 'pt',
    slug: 'mala-da-maternidade-o-que-levar',
    categoryKey: 'birth',
    title: 'Mala da maternidade: o que levar e quando preparar',
    excerpt:
      'Uma lista prática para o parto, para os dias a seguir e para o bebé — pronta até às 36 semanas.',
    heroImage: {
      src: '/images/articles/hospital-bag.webp',
      alt: 'Mala preparada para a maternidade com roupa de bebé dobrada ao lado',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'A mala da maternidade não serve para estares preparada para tudo. Serve para tirar decisões de um dia em que não vais querer tomar nenhuma. Prepara-a bem uma vez e deixa-a junto à porta.',
    blocks: [
      h2('Quando preparar'),
      p(
        'Tem a mala pronta até às 36 semanas. Os bebés cumprem pouco o calendário, e arrumar com calma é bem mais fácil do que arrumar entre contrações. Deixa-a à entrada e cola por cima uma nota com o que falta na hora: telemóvel, carregador, óculos.',
      ),
      h2('Para o parto'),
      ul([
        'Documentos, cartão de utente e boletim de saúde da grávida',
        'Uma camisola ou camisa de dormir larga e confortável que não te importes de estragar',
        'Chinelos e meias quentes — no trabalho de parto os pés arrefecem',
        'Protetor labial, elásticos para o cabelo e uma garrafa de água',
        'Comida para uma noite longa e moedas ou cartão para as máquinas',
        'O plano de parto impresso e um carregador com cabo comprido',
      ]),
      cta('bubbi-inline'),
      h2('Para depois do parto'),
      ul([
        'Dois ou três soutiens de amamentação e discos absorventes',
        'Pensos de pós-parto — mais do que imaginas, nada de tampões',
        'Cuecas confortáveis de cintura alta, vários pares',
        'Roupa larga para regressar a casa: nada de antes da gravidez',
        'Necessaire, toalha e tudo o que torne teu um quarto estranho',
      ]),
      h2('Para o teu bebé'),
      ul([
        'Bodies e babygrows em tamanho recém-nascido e 0–3 meses',
        'Gorro, luvas anti-arranhões e um casaquinho',
        'Fraldas e algodão ou toalhitas de água',
        'Uma mantinha e um conjunto para a ida a casa adequado ao tempo',
        'A cadeirinha do carro bem instalada: muitas maternidades não dão alta sem ela',
      ]),
      callout(
        'care',
        'Uma mala para quem te acompanha',
        'Comida, uma muda de roupa, carregador e algum dinheiro. Quem acompanha muitas vezes não pode sair, e o bar fecha.',
      ),
    ],
    faq: [
      {
        question: 'Quando devo preparar a mala da maternidade?',
        answer:
          'Até às 36 semanas. Cerca de um em cada dez bebés nasce antes das 37, e antecipar não custa nada.',
      },
      {
        question: 'Quantas malas preciso?',
        answer:
          'Uma para o parto e outra para o pós-parto é a divisão mais prática, mais uma pequena para quem te acompanha. Algumas maternidades limitam o que pode entrar na sala de partos.',
      },
      {
        question: 'O que é mais esquecido?',
        answer:
          'Um carregador com cabo comprido, comida para quem acompanha e roupa confortável para ti no regresso.',
      },
    ],
    sources: [SOURCES.sns],
    seo: {
      title: 'Mala da maternidade: lista completa do que levar',
      description:
        'O que levar para a maternidade no parto, no pós-parto e para o recém-nascido, com a altura certa para deixar tudo pronto.',
      primaryKeyword: 'mala da maternidade',
      secondaryKeywords: ['o que levar para a maternidade', 'lista mala maternidade'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'pt',
    slug: 'como-dormir-na-gravidez',
    categoryKey: 'health',
    title: 'Como dormir na gravidez: as posições que ajudam mesmo',
    excerpt:
      'Porque se recomenda dormir de lado a partir das 28 semanas, como tornar isso confortável e o que fazer aos outros motivos que te acordam.',
    heroImage: {
      src: '/images/articles/sleep.webp',
      alt: 'Quarto com luz suave e almofadas dispostas para dormir de lado',
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
      'O sono complica-se exatamente quando mais precisas dele. A boa notícia é que a recomendação é mais simples do que parece, e grande parte do desconforto resolve-se com duas almofadas bem colocadas.',
    blocks: [
      h2('Porque é que a posição passa a contar'),
      p(
        'A partir das 28 semanas, o peso do útero pode pressionar a grande veia que traz o sangue das pernas de volta ao coração. Ficar deitada de costas reduz esse retorno — por isso, a partir dessa semana, recomenda-se adormecer de lado.',
      ),
      p(
        'Qualquer dos lados serve. O esquerdo é muitas vezes sugerido porque alivia o fígado e melhora ligeiramente a circulação, mas o essencial é simplesmente não adormecer de barriga para cima.',
      ),
      callout(
        'info',
        'Acordar de costas não é problema',
        'O corpo muda de posição muitas vezes por noite. O que foi estudado é a posição em que adormeces, porque é a que dura mais tempo.',
      ),
      h2('Tornar confortável dormir de lado'),
      ul([
        'Uma almofada entre os joelhos alinha as ancas e a zona lombar.',
        'Uma almofada ou toalha enrolada atrás das costas evita que te vires de costas.',
        'Uma almofada por baixo da barriga alivia a tensão dos ligamentos.',
        'Elevar um pouco a cabeceira ajuda se a azia te acordar.',
      ]),
      cta('bubbi-inline'),
      h2('O resto da noite'),
      p(
        'A posição é só metade. O sono partido na gravidez costuma ter três causas: a casa de banho, o refluxo e uma cabeça que não desliga. Bebe sobretudo na primeira parte do dia, evita refeições pesadas nas três horas antes de deitar e usa a última meia hora para abrandar, não para olhar para um ecrã.',
      ),
      p(
        'As sestas curtas são para aproveitar, não para combater. As noites partidas acumulam-se e no ',
        link('terceiro trimestre', 'category:by-week'),
        ' quase toda a gente precisa delas.',
      ),
    ],
    faq: [
      {
        question: 'De que lado é melhor dormir na gravidez?',
        answer:
          'Os dois lados servem. O esquerdo é sugerido porque melhora ligeiramente a circulação, mas o essencial é adormecer de lado em vez de costas a partir das 28 semanas.',
      },
      {
        question: 'E se acordar de costas?',
        answer:
          'Vira-te de lado e volta a dormir. A recomendação refere-se à posição em que adormeces, não a todas as posições da noite.',
      },
      {
        question: 'Preciso de uma almofada de gravidez?',
        answer:
          'Não necessariamente. Duas almofadas normais — uma entre os joelhos e outra nas costas — fazem quase o mesmo trabalho.',
      },
    ],
    sources: [SOURCES.dgs, SOURCES.who],
    seo: {
      title: 'Como dormir na gravidez: posições e conselhos práticos',
      description:
        'Porque se recomenda dormir de lado às 28 semanas, como colocar as almofadas e o que fazer à azia e às noites interrompidas.',
      primaryKeyword: 'como dormir na gravidez',
      secondaryKeywords: ['posição para dormir grávida', 'dormir de lado gravidez'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'pt',
    slug: 'batimento-cardiaco-do-bebe',
    categoryKey: 'baby',
    title: 'Batimento cardíaco do bebé: quando começa e o que é normal',
    excerpt:
      'Quando o coração começa a bater, que frequências são normais semana a semana e porque as parteiras preferem os movimentos ao doppler caseiro.',
    heroImage: {
      src: '/images/articles/heartbeat.webp',
      alt: 'Imagem de ecografia num ecrã, num consultório com luz suave',
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
      'Para muitas mulheres o batimento é o momento em que a gravidez se torna real. É também um dos temas mais procurados e mais mal compreendidos: aqui fica o que os números dizem de facto.',
    blocks: [
      h2('Quando o coração começa a bater'),
      p(
        'O coração começa como um tubo simples que passa a pulsar por volta da 5ª ou 6ª semana. Numa ecografia precoce parece mais um tremular do que um batimento. A partir da 6ª semana é normalmente visível na ecografia transvaginal e, entre as 10 e as 12 semanas, um doppler consegue muitas vezes captá-lo.',
      ),
      h2('O que os números querem dizer'),
      p(
        'O coração de um bebé bate muito mais depressa do que o de um adulto. A frequência sobe nas primeiras semanas, atinge o máximo por volta das 9 a 10 semanas com cerca de 170 batimentos por minuto e depois estabiliza no resto da gravidez entre 110 e 160.',
      ),
      ul([
        'Semana 6: cerca de 100–120 batimentos por minuto',
        'Semanas 9–10: cerca de 140–170, o valor mais alto de toda a gravidez',
        'A partir da semana 12: fixa-se entre 110 e 160 e assim fica',
      ]),
      callout(
        'care',
        'A frequência não revela o sexo',
        'A ideia de que um batimento mais rápido significa uma menina já foi estudada e não se confirma. A frequência reflete a atividade e a idade gestacional, não o sexo.',
      ),
      h2('Dopplers caseiros'),
      p(
        'Vendem-se por todo o lado, mas as parteiras desaconselham depender deles. É fácil captar o próprio pulso e confundi-lo com o do bebé, e um som tranquilizador pode atrasar um telefonema que era necessário. A partir das 24 semanas, o padrão de movimentos é o sinal mais fiável.',
      ),
      callout(
        'warning',
        'Confia nos movimentos, não no som',
        'Se o teu bebé se mexer menos do que é habitual, ou se o padrão mudar, contacta já a parteira ou a maternidade — de dia ou de noite, por muitas vezes que já tenhas ligado.',
      ),
      cta('bubbi-inline'),
    
    ],
    faq: [
      {
        question: 'Quando se ouve o batimento do bebé?',
        answer:
          'Costuma ser visível na ecografia transvaginal a partir da 6ª semana e audível com doppler nas consultas por volta das 10 a 12 semanas.',
      },
      {
        question: 'Qual é a frequência cardíaca normal?',
        answer:
          'A partir das 12 semanas, cerca de 110 a 160 batimentos por minuto. É mais rápida às 9–10 semanas, quando chega a cerca de 170.',
      },
      {
        question: 'Os dopplers caseiros são seguros?',
        answer:
          'Não são considerados prejudiciais, mas as parteiras desaconselham confiar neles: o som que julgas ser do bebé pode ser o teu pulso, e uma falsa tranquilidade atrasa a avaliação.',
      },
    ],
    sources: [SOURCES.dgs, SOURCES.sns],
    seo: {
      title: 'Batimento cardíaco do bebé: quando se ouve e valores normais',
      description:
        'Quando o coração do bebé começa a bater, as frequências normais semana a semana e porque os movimentos contam mais do que um doppler caseiro.',
      primaryKeyword: 'batimento cardíaco do bebé',
      secondaryKeywords: ['frequência cardíaca fetal', 'quando se ouve o coração do bebé'],
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
    locale: 'pt',
    slug: 'preparar-a-gravidez',
    categoryKey: 'pregnancy',
    title: 'Preparar a gravidez: o que fazer nos três meses anteriores',
    excerpt:
      'Exames, suplementos e conhecimento do ciclo antes de começar a tentar — e quanto tempo costuma demorar a engravidar.',
    heroImage: {
      src: '/images/articles/preparing.webp',
      alt: 'Um calendário, um copo de água e uma taça de fruta na mesa da cozinha',
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
      'Preparar a gravidez não é fazer tudo na perfeição: é resolver a tempo umas quantas coisas, a começar pelo ácido fólico e por saber mais ou menos quando ovulas.',
    blocks: [
      h2('Três meses antes de começar a tentar'),
      p(
        'Grande parte do que ajuda uma gravidez acontece antes de ela começar. Os óvulos amadurecem ao longo de cerca de três meses, por isso o que mudares agora vai afetar o ciclo em que conceberes.',
      ),
      ol([
        'Começa 400 µg de ácido fólico por dia: protege o tubo neural nas primeiras semanas, quando a maioria ainda não sabe que está grávida.',
        'Faz uma avaliação: tensão arterial, tiroide, ferro, imunidade à rubéola e revisão da medicação habitual.',
        'Deixa o tabaco e o álcool e reduz a cafeína para uma ou duas chávenas por dia.',
        'Atualiza a saúde oral: a doença das gengivas está associada ao parto pré-termo.',
      ]),
      cta('bubbi-inline'),
      h2('Conhecer o teu ciclo'),
      p(
        'A janela fértil são os cinco dias antes da ovulação e o próprio dia da ovulação. Os espermatozoides sobrevivem vários dias; o óvulo só pode ser fecundado durante cerca de 24 horas. Saber aproximadamente quando ovulas conta mais do que qualquer cronometragem perfeita.',
      ),
      ul([
        'O muco cervical fica transparente e elástico nos dias anteriores.',
        'A temperatura basal sobe ligeiramente depois da ovulação, confirmando-a.',
        'Os testes de ovulação detetam o pico de LH, normalmente 24 a 36 horas antes.',
      ]),
      callout(
        'info',
        'Quanto tempo costuma demorar',
        'Cerca de 8 em cada 10 casais engravidam no espaço de um ano sem contraceção. A partir dos 35 anos faz sentido pedir aconselhamento ao fim de seis meses em vez de doze.',
      ),
      h2('A parte que ninguém planeia'),
      p(
        'Tentar engravidar pode ocupar em silêncio o calendário e o humor. Decide antes quanto registo te é mesmo útil, combinem com que frequência falam do assunto e deixa pelo menos uma parte do mês livre disto.',
      ),
    ],
    faq: [
      {
        question: 'Quando começar o ácido fólico?',
        answer:
          'Pelo menos um mês antes e, idealmente, três. O tubo neural fecha nas primeiras semanas, muitas vezes antes de o teste dar positivo.',
      },
      {
        question: 'Quanto tempo demora a engravidar?',
        answer:
          'Cerca de 8 em cada 10 casais conseguem no espaço de um ano. Procura aconselhamento ao fim de seis meses se tiveres mais de 35, ou antes se os ciclos forem irregulares.',
      },
      {
        question: 'O meu companheiro tem de fazer alguma coisa?',
        answer:
          'Sim. Os espermatozoides levam cerca de três meses a amadurecer, por isso deixar de fumar, reduzir o álcool e evitar o calor vale a pena começar ao mesmo tempo.',
      },
    ],
    sources: [SOURCES.dgs, SOURCES.who],
    seo: {
      title: 'Preparar a gravidez: checklist de três meses',
      description:
        'O que fazer antes de tentar engravidar: ácido fólico, exames, estilo de vida e como reconhecer a janela fértil.',
      primaryKeyword: 'preparar a gravidez',
      secondaryKeywords: ['checklist pré-concecional', 'tentar engravidar'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
