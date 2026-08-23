import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  sanidad: {
    label: 'Embarazo, parto y puerperio: información para mujeres',
    publisher: 'Ministerio de Sanidad',
    url: 'https://www.sanidad.gob.es/organizacion/sns/planCalidadSNS/embarazoParto.htm',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'Recomendaciones de la OMS sobre atención prenatal',
    publisher: 'Organización Mundial de la Salud',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  sego: {
    label: 'Información para pacientes en obstetricia',
    publisher: 'Sociedad Española de Ginecología y Obstetricia',
    url: 'https://sego.es/mujeres/',
    checkedAt: '2026-08-01',
  },
};

export const esArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'es',
    slug: 'primeros-sintomas-de-embarazo',
    categoryKey: 'symptoms',
    title: 'Primeros síntomas de embarazo: cuáles son y cuándo aparecen',
    excerpt:
      'Las señales que llegan primero, cuándo el test es fiable y qué merece la pena hacer en los días siguientes a un positivo.',
    heroImage: {
      src: '/images/articles/early-signs.webp',
      alt: 'Mañana tranquila con una taza de té y un test de embarazo sobre la mesa',
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
      'El embarazo casi nunca se anuncia con claridad. Algunas mujeres notan un cambio a los pocos días de la implantación; otras se encuentran perfectamente hasta mucho después de la falta. Las dos cosas son frecuentes, y ninguna dice nada sobre cómo va el embarazo.',
    blocks: [
      h2('Las señales que aparecen primero'),
      p(
        'Casi todos los síntomas iniciales vienen de una hormona: la hCG, que produce la placenta en formación tras la implantación. Sus niveles se duplican cada dos o tres días, y por eso las primeras dos semanas parecen no traer nada y luego llega todo a la vez.',
      ),
      ul([
        [b('Falta de la regla. '), { text: 'Con ciclos regulares sigue siendo la señal temprana más fiable.' }],
        [b('Pechos sensibles y más pesados. '), { text: 'A menudo el primer cambio, a veces antes del test.' }],
        [b('Cansancio. '), { text: 'No el cansancio normal, sino una pesadez que sigue ahí tras dormir toda la noche.' }],
        [b('Náuseas. '), { text: 'Suelen empezar en la semana 5 o 6 y rara vez se limitan a la mañana.' }],
        [b('Más ganas de ir al baño. '), { text: 'El riego sanguíneo a los riñones aumenta muy pronto.' }],
        [b('Olfato más fino. '), { text: 'El café, el aceite de cocinar y los perfumes son las primeras víctimas.' }],
      ]),
      cta('bubbi-inline'),
      h2('Cuándo hacerse el test'),
      p(
        'Los test caseros miden hCG en la orina. Desde el día en que te tocaría la regla el resultado es muy fiable. Hacerlo antes puede funcionar, pero un negativo en ese momento no descarta el embarazo: la hormona puede estar aún demasiado baja.',
      ),
      ol([
        'Usa la primera orina de la mañana, cuando la hCG está más concentrada.',
        'Comprueba la caducidad y respeta con exactitud los tiempos del prospecto.',
        'Si sale negativo y la regla no llega, repítelo a los tres días.',
      ]),
      callout(
        'info',
        'Una línea tenue también es una línea',
        'Cualquier segunda línea, por pálida que sea, significa que se ha detectado hCG. Repite el test a las 48 horas si quieres verla más marcada.',
      ),
      h2('Qué hacer después de un positivo'),
      p(
        'En los primeros días no hay prisa por ver a nadie, pero dos cosas conviene hacerlas ya: empezar un suplemento prenatal con 400 µg de ácido fólico y dejar el alcohol y el tabaco. Después, pide tu primera consulta: en la mayoría de los casos se hace entre las semanas 8 y 12.',
      ),
      p(
        'Si sabes el primer día de tu última regla ya tienes lo necesario para calcular la fecha probable de parto y seguir tu ',
        link('embarazo semana a semana', 'category:by-week'),
        '.',
      ),
      callout(
        'warning',
        'Consulta antes si',
        'tienes sangrado abundante, dolor intenso o en un solo lado, dolor en el hombro o sensación de desmayo. Son situaciones para valorar el mismo día.',
      ),
    ],
    faq: [
      {
        question: '¿Cuándo empiezan los síntomas del embarazo?',
        answer:
          'Algunas mujeres notan los pechos sensibles o cansancio desde la semana 4, poco después de la implantación. Muchas no notan nada hasta la semana 6 o más tarde, y algunas apenas tienen síntomas.',
      },
      {
        question: '¿Puede salir negativo estando embarazada?',
        answer:
          'Sí, si te lo haces demasiado pronto. La hCG se duplica cada dos o tres días, así que antes de la falta puede no detectarse. Repite a los tres días.',
      },
      {
        question: '¿Es normal manchar al principio del embarazo?',
        answer:
          'Un manchado leve alrededor de la fecha esperada de la regla puede ser sangrado de implantación y es frecuente. Un sangrado abundante o con dolor hay que valorarlo el mismo día.',
      },
    ],
    sources: [SOURCES.sanidad, SOURCES.sego],
    seo: {
      title: 'Primeros síntomas de embarazo y cuándo hacer el test',
      description:
        'Los síntomas más tempranos del embarazo, cuándo suelen aparecer, desde cuándo el test es fiable y qué hacer tras un positivo.',
      primaryKeyword: 'primeros síntomas de embarazo',
      secondaryKeywords: ['síntomas embarazo primera semana', 'cuándo hacerse el test de embarazo'],
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
    locale: 'es',
    slug: 'bolsa-del-hospital-que-llevar',
    categoryKey: 'birth',
    title: 'Bolsa del hospital: qué llevar y cuándo prepararla',
    excerpt:
      'Una lista práctica para el parto, para los días después y para tu bebé — lista antes de la semana 36.',
    heroImage: {
      src: '/images/articles/hospital-bag.webp',
      alt: 'Bolsa preparada para el hospital con ropita de bebé doblada al lado',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'La bolsa del hospital no va de estar preparada para todo. Va de quitar decisiones de un día en el que no querrás tomar ninguna. Prepárala bien una vez y déjala junto a la puerta.',
    blocks: [
      h2('Cuándo prepararla'),
      p(
        'Tenla lista antes de la semana 36. Los bebés respetan poco el calendario, y hacer la bolsa con calma es mucho más fácil que hacerla entre contracciones. Déjala en la entrada y pega encima una nota con lo de última hora: móvil, cargador, gafas.',
      ),
      h2('Para el parto'),
      ul([
        'Documentación, tarjeta sanitaria y cartilla del embarazo',
        'Una camiseta o camisón amplio y cómodo que no te importe estropear',
        'Zapatillas o chanclas y calcetines: en el parto los pies se enfrían',
        'Cacao de labios, gomas para el pelo y una botella de agua',
        'Algo de comer para una noche larga y monedas o tarjeta para las máquinas',
        'El plan de parto impreso y un cargador con cable largo',
      ]),
      cta('bubbi-inline'),
      h2('Para después del parto'),
      ul([
        'Dos o tres sujetadores de lactancia y discos absorbentes',
        'Compresas de posparto — más de las que crees, nada de tampones',
        'Braguitas cómodas de talle alto, varias',
        'Ropa holgada para volver a casa: nada de antes del embarazo',
        'Neceser, toalla y lo que haga tuya una habitación ajena',
      ]),
      h2('Para tu bebé'),
      ul([
        'Bodies y pijamas en talla recién nacido y 0–3 meses',
        'Gorrito, manoplas y una chaquetita',
        'Pañales y algodón o toallitas de agua',
        'Una mantita y un conjunto para volver a casa según el tiempo',
        'La silla de coche bien instalada: en muchos hospitales no dan el alta sin ella',
      ]),
      callout(
        'care',
        'Una bolsa para quien te acompaña',
        'Comida, una muda, cargador y algo de efectivo. Quien acompaña muchas veces no puede salir, y la cafetería cierra.',
      ),
    ],
    faq: [
      {
        question: '¿Cuándo hay que preparar la bolsa del hospital?',
        answer:
          'Antes de la semana 36. Aproximadamente uno de cada diez bebés nace antes de la 37, y adelantarse no cuesta nada.',
      },
      {
        question: '¿Cuántas bolsas necesito?',
        answer:
          'Una para el parto y otra para el posparto es el reparto más práctico, más una pequeña para tu acompañante. Algunos hospitales limitan lo que se puede entrar al paritorio.',
      },
      {
        question: '¿Qué se olvida más a menudo?',
        answer:
          'Un cargador con cable largo, comida para quien te acompaña y ropa cómoda para ti a la vuelta.',
      },
    ],
    sources: [SOURCES.sanidad],
    seo: {
      title: 'Bolsa del hospital: lista completa de qué llevar al parto',
      description:
        'Qué meter en la bolsa del hospital para el parto, para el posparto y para el recién nacido, y cuándo conviene tenerla lista.',
      primaryKeyword: 'bolsa del hospital',
      secondaryKeywords: ['qué llevar al hospital para el parto', 'maleta hospital embarazo'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'es',
    slug: 'como-dormir-en-el-embarazo',
    categoryKey: 'health',
    title: 'Cómo dormir en el embarazo: las posturas que de verdad ayudan',
    excerpt:
      'Por qué desde la semana 28 se recomienda dormir de lado, cómo hacerlo cómodo y qué hacer con los otros motivos que te desvelan.',
    heroImage: {
      src: '/images/articles/sleep.webp',
      alt: 'Dormitorio con luz suave y almohadas colocadas para dormir de lado',
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
      'El sueño se complica justo cuando más falta te hace. La buena noticia es que la recomendación es más simple de lo que parece, y casi todas las molestias se arreglan con un par de almohadas bien puestas.',
    blocks: [
      h2('Por qué la postura empieza a importar'),
      p(
        'Desde alrededor de la semana 28, el peso del útero puede presionar la gran vena que devuelve la sangre de las piernas al corazón. Estar tumbada boca arriba reduce ese retorno, y por eso a partir de esa semana se recomienda dormirse de lado.',
      ),
      p(
        'Cualquiera de los dos lados vale. El izquierdo suele recomendarse porque descarga el hígado y mejora un poco la circulación, pero lo importante es sencillamente no quedarse dormida boca arriba.',
      ),
      callout(
        'info',
        'Despertarte boca arriba no es un problema',
        'El cuerpo cambia de postura muchas veces cada noche. Lo que se ha estudiado es la postura en la que te duermes, porque es la que más dura.',
      ),
      h2('Hacer cómodo dormir de lado'),
      ul([
        'Una almohada entre las rodillas alinea caderas y zona lumbar.',
        'Una almohada o toalla enrollada detrás de la espalda evita que te gires boca arriba.',
        'Una almohada bajo la barriga quita tensión de los ligamentos.',
        'Elevar un poco el cabecero ayuda si te despierta el ardor.',
      ]),
      cta('bubbi-inline'),
      h2('El resto de la noche'),
      p(
        'La postura es solo la mitad. El sueño roto en el embarazo suele tener tres causas: el baño, el reflujo y una cabeza que no se apaga. Bebe sobre todo en la primera parte del día, evita cenas copiosas en las tres horas previas y usa la última media hora para bajar el ritmo, no para mirar una pantalla.',
      ),
      p(
        'Las siestas cortas hay que tomarlas, no pelearlas. Las noches rotas se acumulan y en el ',
        link('tercer trimestre', 'category:by-week'),
        ' casi todo el mundo las necesita.',
      ),
    ],
    faq: [
      {
        question: '¿De qué lado es mejor dormir estando embarazada?',
        answer:
          'Los dos lados sirven. El izquierdo se sugiere a menudo porque mejora ligeramente la circulación, pero lo esencial es dormirse de lado y no boca arriba a partir de la semana 28.',
      },
      {
        question: '¿Y si me despierto boca arriba?',
        answer:
          'Gírate de lado y sigue durmiendo. La recomendación se refiere a la postura en la que te duermes, no a cada postura de la noche.',
      },
      {
        question: '¿Necesito una almohada de embarazo?',
        answer:
          'No necesariamente. Dos almohadas normales —una entre las rodillas y otra en la espalda— hacen casi el mismo trabajo.',
      },
    ],
    sources: [SOURCES.sanidad, SOURCES.who],
    seo: {
      title: 'Cómo dormir en el embarazo: posturas y consejos',
      description:
        'Por qué desde la semana 28 se recomienda dormir de lado, cómo colocar las almohadas y qué hacer con el ardor y las noches rotas.',
      primaryKeyword: 'cómo dormir en el embarazo',
      secondaryKeywords: ['postura para dormir embarazada', 'dormir de lado embarazo'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'es',
    slug: 'latido-del-bebe-en-el-embarazo',
    categoryKey: 'baby',
    title: 'El latido de tu bebé: cuándo empieza y qué es normal',
    excerpt:
      'Cuándo empieza a latir el corazón, qué frecuencias son normales semana a semana y por qué las matronas prefieren los movimientos al doppler casero.',
    heroImage: {
      src: '/images/articles/heartbeat.webp',
      alt: 'Imagen de ecografía en una pantalla en una consulta con luz suave',
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
      'Para muchas mujeres el latido es el momento en el que el embarazo se vuelve real. También es uno de los temas más buscados y peor entendidos: esto es lo que dicen realmente esos números.',
    blocks: [
      h2('Cuándo empieza a latir el corazón'),
      p(
        'El corazón empieza siendo un tubo sencillo que comienza a latir alrededor de la semana 5 o 6. En una ecografía temprana parece más un parpadeo que un latido. Desde la semana 6 suele verse en la ecografía transvaginal, y entre las semanas 10 y 12 un doppler suele captarlo.',
      ),
      h2('Qué significan los números'),
      p(
        'El corazón de un bebé late mucho más rápido que el de un adulto. La frecuencia sube en las primeras semanas, alcanza su máximo hacia las semanas 9 y 10 con unos 170 latidos por minuto y luego se estabiliza el resto del embarazo entre 110 y 160.',
      ),
      ul([
        'Semana 6: unos 100–120 latidos por minuto',
        'Semanas 9–10: unos 140–170, lo más rápido de todo el embarazo',
        'Desde la semana 12: se asienta entre 110 y 160 y ahí se queda',
      ]),
      callout(
        'care',
        'La frecuencia no indica el sexo',
        'La idea de que un latido más rápido significa niña se ha estudiado y no se sostiene. La frecuencia refleja la actividad y la edad gestacional, no el sexo.',
      ),
      h2('Los doppler caseros'),
      p(
        'Se venden por todas partes, pero las matronas desaconsejan depender de ellos. Es fácil captar tu propio pulso y confundirlo con el del bebé, y un sonido tranquilizador puede retrasar una llamada que hacía falta. A partir de la semana 24, el patrón de movimientos es la señal más fiable.',
      ),
      callout(
        'warning',
        'Fíate del movimiento antes que del sonido',
        'Si tu bebé se mueve menos de lo habitual o cambia su patrón, contacta de inmediato con tu matrona o el hospital — de día o de noche, y por muchas veces que hayas llamado antes.',
      ),
      cta('bubbi-inline'),
    
    ],
    faq: [
      {
        question: '¿Cuándo se escucha el latido del bebé?',
        answer:
          'Suele verse en la ecografía transvaginal desde la semana 6 y oírse con doppler en las consultas desde la semana 10 a 12.',
      },
      {
        question: '¿Cuál es la frecuencia cardíaca normal?',
        answer:
          'Desde la semana 12, entre 110 y 160 latidos por minuto. Es más rápida hacia las semanas 9 y 10, cuando llega a unos 170.',
      },
      {
        question: '¿Son seguros los doppler caseros?',
        answer:
          'No se consideran dañinos, pero las matronas desaconsejan confiar en ellos: el sonido que crees de tu bebé puede ser tu propio pulso, y una falsa tranquilidad retrasa la consulta.',
      },
    ],
    sources: [SOURCES.sanidad, SOURCES.sego],
    seo: {
      title: 'Latido del bebé: cuándo se escucha y frecuencias normales',
      description:
        'Cuándo empieza a latir el corazón del bebé, las frecuencias normales semana a semana y por qué los movimientos importan más que un doppler casero.',
      primaryKeyword: 'latido del bebé embarazo',
      secondaryKeywords: ['frecuencia cardíaca fetal', 'cuándo se escucha el latido'],
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
    locale: 'es',
    slug: 'preparar-el-embarazo',
    categoryKey: 'pregnancy',
    title: 'Preparar el embarazo: qué hacer en los tres meses previos',
    excerpt:
      'Revisiones, suplementos y conocimiento de tu ciclo antes de empezar a buscar — y cuánto suele tardar el embarazo en llegar.',
    heroImage: {
      src: '/images/articles/preparing.webp',
      alt: 'Un calendario, un vaso de agua y un bol de fruta en la mesa de la cocina',
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
      'Preparar el embarazo no va de hacerlo todo perfecto, sino de dejar unas pocas cosas resueltas a tiempo: empezando por el ácido fólico y por saber más o menos cuándo ovulas.',
    blocks: [
      h2('Tres meses antes de empezar a buscar'),
      p(
        'Casi todo lo que ayuda a un embarazo ocurre antes de que empiece. Los óvulos maduran a lo largo de unos tres meses, así que lo que cambies ahora afecta al ciclo en el que concibas.',
      ),
      ol([
        'Empieza con 400 µg de ácido fólico al día: protege el tubo neural en las primeras semanas, cuando casi nadie sabe todavía que está embarazada.',
        'Hazte una revisión: tensión, tiroides, hierro, inmunidad frente a la rubeola y repaso de la medicación habitual.',
        'Deja el tabaco y el alcohol y reduce la cafeína a una o dos tazas al día.',
        'Pon al día la salud dental: la enfermedad de las encías se asocia al parto prematuro.',
      ]),
      cta('bubbi-inline'),
      h2('Entender tu ciclo'),
      p(
        'La ventana fértil son los cinco días previos a la ovulación y el propio día de la ovulación. Los espermatozoides sobreviven varios días; el óvulo solo puede fecundarse durante unas 24 horas. Saber aproximadamente cuándo ovulas importa más que cronometrarlo todo.',
      ),
      ul([
        'El moco cervical se vuelve transparente y elástico en los días previos.',
        'La temperatura basal sube ligeramente después de ovular, y lo confirma.',
        'Los test de ovulación detectan el pico de LH, normalmente 24 a 36 horas antes.',
      ]),
      callout(
        'info',
        'Cuánto suele tardar',
        'Alrededor de 8 de cada 10 parejas conciben en un año sin anticoncepción. A partir de los 35 es razonable pedir consejo a los seis meses en lugar de a los doce.',
      ),
      h2('La parte que nadie planifica'),
      p(
        'Buscar un embarazo puede ocupar en silencio el calendario y el ánimo. Decide de antemano cuánto seguimiento te resulta útil, acordad con qué frecuencia hablar del tema y deja al menos una parte del mes libre de todo esto.',
      ),
    ],
    faq: [
      {
        question: '¿Cuándo empezar con el ácido fólico?',
        answer:
          'Al menos un mes antes, e idealmente tres. El tubo neural se cierra en las primeras semanas, a menudo antes de que el test dé positivo.',
      },
      {
        question: '¿Cuánto se tarda en quedarse embarazada?',
        answer:
          'Unas 8 de cada 10 parejas lo consiguen en un año. Pide consejo a los seis meses si tienes más de 35, o antes si tus ciclos son irregulares.',
      },
      {
        question: '¿Mi pareja tiene que hacer algo?',
        answer:
          'Sí. Los espermatozoides tardan unos tres meses en madurar, así que dejar de fumar, reducir el alcohol y evitar el calor conviene empezarlo a la vez.',
      },
    ],
    sources: [SOURCES.sanidad, SOURCES.who],
    seo: {
      title: 'Preparar el embarazo: checklist de tres meses',
      description:
        'Qué hacer antes de buscar el embarazo: ácido fólico, revisiones médicas, hábitos y cómo identificar tu ventana fértil.',
      primaryKeyword: 'preparar el embarazo',
      secondaryKeywords: ['checklist preconcepcional', 'buscar embarazo'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
