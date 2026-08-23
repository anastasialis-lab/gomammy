import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  ameli: {
    label: 'Grossesse : suivi et examens',
    publisher: 'Assurance Maladie',
    url: 'https://www.ameli.fr/assure/sante/themes/grossesse',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'Recommandations de l’OMS sur les soins prénatals',
    publisher: 'Organisation mondiale de la santé',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  sante: {
    label: 'Le suivi de la grossesse',
    publisher: 'Santé publique France',
    url: 'https://www.santepubliquefrance.fr/determinants-de-sante/sante-des-femmes',
    checkedAt: '2026-08-01',
  },
};

export const frArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'fr',
    slug: 'premiers-signes-de-grossesse',
    categoryKey: 'symptoms',
    title: 'Premiers signes de grossesse : lesquels et à quel moment',
    excerpt:
      'Les signes qui apparaissent en premier, à partir de quand un test est fiable et ce qui compte vraiment dans les jours suivant un test positif.',
    heroImage: {
      src: '/images/articles/early-signs.webp',
      alt: 'Matinée calme avec une tasse de thé et un test de grossesse sur la table',
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
      'Un début de grossesse s’annonce rarement clairement. Certaines femmes remarquent un changement quelques jours après la nidation, d’autres se sentent parfaitement normales bien après le retard. Les deux sont fréquents, et aucun des deux ne dit quoi que ce soit sur le déroulement de la grossesse.',
    blocks: [
      h2('Les signes qui arrivent en premier'),
      p(
        'La plupart des symptômes précoces viennent d’une hormone : l’hCG, produite par le placenta en formation après la nidation. Son taux double toutes les deux à trois jours — d’où l’impression que les deux premières semaines n’apportent rien, puis que tout arrive d’un coup.',
      ),
      ul([
        [b('Un retard de règles. '), { text: 'Avec des cycles réguliers, cela reste le signe précoce le plus fiable.' }],
        [b('Des seins tendus et plus lourds. '), { text: 'Souvent le tout premier changement, parfois avant le test.' }],
        [b('De la fatigue. '), { text: 'Pas la fatigue habituelle, mais une lourdeur qui persiste après une nuit complète.' }],
        [b('Des nausées. '), { text: 'Elles commencent souvent vers la 5e ou 6e semaine et se limitent rarement au matin.' }],
        [b('Des envies d’uriner plus fréquentes. '), { text: 'Les reins sont mieux irrigués dès le début de la grossesse.' }],
        [b('Un odorat plus fin. '), { text: 'Le café, l’huile de cuisson et les parfums sont les premières victimes.' }],
      ]),
      cta('bubbi-inline'),
      h2('Quand faire un test'),
      p(
        'Les tests urinaires mesurent l’hCG. À partir du jour où vos règles sont attendues, le résultat est très fiable. Tester plus tôt peut fonctionner, mais un résultat négatif à ce stade n’exclut pas une grossesse : l’hormone est peut-être encore trop faible.',
      ),
      ol([
        'Utilisez les premières urines du matin, quand l’hCG est la plus concentrée.',
        'Vérifiez la date de péremption et respectez précisément les temps indiqués dans la notice.',
        'Si le test est négatif et que les règles n’arrivent pas, refaites-le trois jours plus tard.',
      ]),
      callout(
        'info',
        'Une ligne pâle reste une ligne',
        'Toute seconde ligne, même très claire, signifie que de l’hCG a été détectée. Refaites le test 48 heures plus tard si vous voulez la voir se renforcer.',
      ),
      h2('Que faire après un test positif'),
      p(
        'Rien ne presse dans les premiers jours, mais deux choses valent la peine tout de suite : commencer une vitamine prénatale contenant 400 µg d’acide folique, et arrêter l’alcool et le tabac. Prenez ensuite votre première consultation — elle a lieu le plus souvent entre la 8e et la 12e semaine.',
      ),
      p(
        'Si vous connaissez le premier jour de vos dernières règles, vous avez déjà de quoi calculer votre terme et suivre votre ',
        link('grossesse semaine après semaine', 'category:by-week'),
        '.',
      ),
      callout(
        'warning',
        'Appelez plus tôt si',
        'vous avez des saignements abondants, une douleur intense ou d’un seul côté, une douleur à l’épaule ou des malaises. Cela doit être évalué le jour même.',
      ),
    ],
    faq: [
      {
        question: 'À partir de quand apparaissent les symptômes de grossesse ?',
        answer:
          'Certaines femmes remarquent des seins tendus ou de la fatigue dès la 4e semaine, juste après la nidation. Beaucoup ne ressentent rien avant la 6e semaine ou plus tard, et certaines n’ont presque aucun symptôme.',
      },
      {
        question: 'Un test peut-il être négatif alors que je suis enceinte ?',
        answer:
          'Oui, si vous testez trop tôt. L’hCG double toutes les deux à trois jours : avant la date prévue des règles, elle peut être indétectable. Refaites un test trois jours plus tard.',
      },
      {
        question: 'Des saignements légers en début de grossesse, est-ce normal ?',
        answer:
          'De légers saignements autour de la date attendue des règles peuvent correspondre à la nidation et sont fréquents. Des saignements abondants, ou accompagnés de douleurs, doivent être évalués le jour même.',
      },
    ],
    sources: [SOURCES.ameli, SOURCES.sante],
    seo: {
      title: 'Premiers signes de grossesse : symptômes et test',
      description:
        'Les symptômes les plus précoces de la grossesse, quand ils apparaissent, à partir de quand un test est fiable et quoi faire après un test positif.',
      primaryKeyword: 'premiers signes de grossesse',
      secondaryKeywords: ['symptômes de grossesse', 'quand faire un test de grossesse'],
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
    locale: 'fr',
    slug: 'valise-de-maternite-que-mettre',
    categoryKey: 'birth',
    title: 'Valise de maternité : quoi emporter et quand la préparer',
    excerpt:
      'Une liste concrète pour l’accouchement, pour les jours d’après et pour votre bébé — prête avant la 36e semaine.',
    heroImage: {
      src: '/images/articles/hospital-bag.webp',
      alt: 'Valise de maternité préparée avec des vêtements de bébé pliés à côté',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'La valise de maternité ne sert pas à être prête à tout. Elle sert à retirer des décisions d’une journée où vous n’aurez envie d’en prendre aucune. Préparez-la bien une fois, et laissez-la près de la porte.',
    blocks: [
      h2('Quand la préparer'),
      p(
        'Ayez-la prête avant la 36e semaine. Les bébés respectent peu le calendrier, et faire sa valise au calme est bien plus simple qu’entre deux contractions. Posez-la dans l’entrée et collez dessus une courte liste des dernières affaires : téléphone, chargeur, lunettes.',
      ),
      h2('Pour l’accouchement'),
      ul([
        'Carte Vitale, pièce d’identité et dossier de maternité',
        'Un haut ample ou une chemise de nuit confortable que vous ne craignez pas d’abîmer',
        'Chaussons ou tongs et chaussettes chaudes — les pieds refroidissent pendant le travail',
        'Baume à lèvres, élastiques à cheveux et une bouteille d’eau',
        'De quoi grignoter pour une longue nuit, et de la monnaie ou une carte pour les distributeurs',
        'Votre projet de naissance imprimé et un chargeur à câble long',
      ]),
      cta('bubbi-inline'),
      h2('Pour après la naissance'),
      ul([
        'Deux ou trois soutiens-gorge d’allaitement et des coussinets',
        'Des serviettes post-accouchement — plus que vous ne pensez, pas de tampons',
        'Des culottes confortables taille haute, plusieurs',
        'Des vêtements amples pour le retour : rien d’avant la grossesse',
        'Trousse de toilette, serviette, et ce qui rend une chambre inconnue plus familière',
      ]),
      h2('Pour votre bébé'),
      ul([
        'Bodies et pyjamas en taille naissance et 1 mois',
        'Un bonnet, des moufles anti-griffures et un gilet',
        'Des couches et du coton ou des lingettes à l’eau',
        'Une couverture et une tenue de retour adaptée à la saison',
        'Un siège auto correctement installé : beaucoup de maternités ne laissent pas sortir sans',
      ]),
      callout(
        'care',
        'Un sac pour la personne qui vous accompagne',
        'De quoi manger, un change, un chargeur et un peu d’argent. L’accompagnant ne peut souvent pas s’absenter, et la cafétéria ferme.',
      ),
    ],
    faq: [
      {
        question: 'Quand faut-il préparer la valise de maternité ?',
        answer:
          'Avant la 36e semaine. Environ un bébé sur dix naît avant 37 semaines, et s’y prendre tôt ne coûte rien.',
      },
      {
        question: 'Combien de sacs faut-il ?',
        answer:
          'Un pour l’accouchement et un pour les suites de couches est la répartition la plus pratique, plus un petit sac pour l’accompagnant. Certaines maternités limitent ce qui entre en salle de naissance.',
      },
      {
        question: 'Qu’oublie-t-on le plus souvent ?',
        answer:
          'Un chargeur à câble long, de quoi manger pour l’accompagnant, et des vêtements confortables pour votre propre retour.',
      },
    ],
    sources: [SOURCES.ameli],
    seo: {
      title: 'Valise de maternité : la liste complète à emporter',
      description:
        'Quoi mettre dans la valise de maternité pour l’accouchement, pour les suites de couches et pour le nouveau-né, et à quel moment la préparer.',
      primaryKeyword: 'valise de maternité',
      secondaryKeywords: ['que mettre dans la valise de maternité', 'liste maternité'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'fr',
    slug: 'comment-dormir-enceinte',
    categoryKey: 'health',
    title: 'Comment dormir enceinte : les positions qui aident vraiment',
    excerpt:
      'Pourquoi la position latérale est conseillée à partir de 28 semaines, comment la rendre confortable et que faire des autres raisons qui vous réveillent.',
    heroImage: {
      src: '/images/articles/sleep.webp',
      alt: 'Chambre à la lumière douce avec des oreillers disposés pour dormir sur le côté',
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
      'Le sommeil se complique exactement quand vous en avez le plus besoin. La bonne nouvelle : le conseil est plus simple qu’il n’y paraît, et l’essentiel de l’inconfort se règle avec quelques oreillers bien placés.',
    blocks: [
      h2('Pourquoi la position se met à compter'),
      p(
        'À partir de 28 semaines environ, le poids de l’utérus peut comprimer la grosse veine qui ramène le sang des jambes vers le cœur. Rester à plat sur le dos réduit ce retour : c’est pourquoi, dès cette semaine, il est conseillé de s’endormir sur le côté.',
      ),
      p(
        'Les deux côtés conviennent. Le gauche est souvent recommandé parce qu’il soulage le foie et améliore légèrement la circulation, mais l’essentiel est simplement de ne pas s’endormir sur le dos.',
      ),
      callout(
        'info',
        'Se réveiller sur le dos n’est pas un problème',
        'Le corps change de position de nombreuses fois par nuit. Ce qui a été étudié, c’est la position dans laquelle on s’endort, parce que c’est celle qui dure le plus longtemps.',
      ),
      h2('Rendre la position latérale confortable'),
      ul([
        'Un oreiller entre les genoux aligne le bassin et le bas du dos.',
        'Un oreiller ou une serviette roulée dans le dos évite de basculer à plat.',
        'Un oreiller sous le ventre soulage la tension des ligaments.',
        'Relever légèrement la tête du lit aide si les remontées acides vous réveillent.',
      ]),
      cta('bubbi-inline'),
      h2('Le reste de la nuit'),
      p(
        'La position ne fait que la moitié du travail. Un sommeil haché pendant la grossesse a en général trois causes : les allers-retours aux toilettes, les remontées acides et une tête qui ne s’éteint pas. Buvez surtout en première partie de journée, évitez les repas lourds dans les trois heures avant le coucher, et consacrez la dernière demi-heure à ralentir plutôt qu’à un écran.',
      ),
      p(
        'Les siestes courtes sont à prendre, pas à combattre. Les nuits hachées s’accumulent et, au ',
        link('troisième trimestre', 'category:by-week'),
        ', presque tout le monde en a besoin.',
      ),
    ],
    faq: [
      {
        question: 'Sur quel côté dormir enceinte ?',
        answer:
          'Les deux côtés conviennent. Le gauche est souvent suggéré car il améliore légèrement la circulation, mais l’essentiel est de s’endormir sur le côté plutôt que sur le dos à partir de 28 semaines.',
      },
      {
        question: 'Et si je me réveille sur le dos ?',
        answer:
          'Tournez-vous simplement sur le côté et rendormez-vous. Le conseil porte sur la position d’endormissement, pas sur chaque position de la nuit.',
      },
      {
        question: 'Faut-il un coussin de grossesse ?',
        answer:
          'Pas forcément. Deux oreillers ordinaires — un entre les genoux, un dans le dos — font presque le même travail.',
      },
    ],
    sources: [SOURCES.ameli, SOURCES.who],
    seo: {
      title: 'Comment dormir enceinte : positions et conseils pratiques',
      description:
        'Pourquoi dormir sur le côté est conseillé dès 28 semaines, comment placer les oreillers et que faire contre les remontées acides et les nuits hachées.',
      primaryKeyword: 'comment dormir enceinte',
      secondaryKeywords: ['position pour dormir enceinte', 'dormir sur le côté grossesse'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'fr',
    slug: 'battements-de-coeur-du-bebe',
    categoryKey: 'baby',
    title: 'Les battements de cœur de votre bébé : quand et ce qui est normal',
    excerpt:
      'Quand le cœur commence à battre, quelles fréquences sont normales semaine après semaine et pourquoi les sages-femmes préfèrent les mouvements au doppler à domicile.',
    heroImage: {
      src: '/images/articles/heartbeat.webp',
      alt: 'Image d’échographie sur un écran dans un cabinet à la lumière douce',
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
      'Pour beaucoup, c’est au premier battement de cœur que la grossesse devient réelle. C’est aussi l’un des sujets les plus recherchés et les plus mal compris : voici ce que les chiffres veulent vraiment dire.',
    blocks: [
      h2('Quand le cœur commence à battre'),
      p(
        'Le cœur commence comme un simple tube qui se met à battre vers la 5e ou 6e semaine. Sur une échographie précoce, cela ressemble davantage à un scintillement qu’à un battement. Dès la 6e semaine il est en général visible en échographie endovaginale, et entre 10 et 12 semaines un doppler parvient souvent à le capter.',
      ),
      h2('Ce que les chiffres signifient'),
      p(
        'Le cœur d’un bébé bat beaucoup plus vite que celui d’un adulte. La fréquence monte pendant les premières semaines, culmine vers 9 à 10 semaines autour de 170 battements par minute, puis se stabilise pour le reste de la grossesse entre 110 et 160.',
      ),
      ul([
        'Semaine 6 : environ 100 à 120 battements par minute',
        'Semaines 9–10 : environ 140 à 170, le maximum de toute la grossesse',
        'À partir de la semaine 12 : entre 110 et 160, et cela ne bouge plus',
      ]),
      callout(
        'care',
        'La fréquence ne révèle pas le sexe',
        'L’idée qu’un cœur plus rapide annonce une fille a été étudiée et ne tient pas. La fréquence dépend de l’activité et du terme, pas du sexe.',
      ),
      h2('Les dopplers à domicile'),
      p(
        'On en trouve partout, mais les sages-femmes déconseillent de s’y fier. Il est facile de capter son propre pouls et de le prendre pour celui du bébé, et un son rassurant peut retarder un appel qui aurait dû être passé. À partir de 24 semaines, le rythme des mouvements est le signal le plus fiable.',
      ),
      callout(
        'warning',
        'Fiez-vous aux mouvements plutôt qu’au son',
        'Si votre bébé bouge moins que d’habitude, ou si son rythme change, contactez immédiatement votre sage-femme ou la maternité — de jour comme de nuit, quel que soit le nombre d’appels déjà passés.',
      ),
      cta('bubbi-inline'),
    
    ],
    faq: [
      {
        question: 'Quand entend-on le cœur du bébé ?',
        answer:
          'Il est généralement visible en échographie endovaginale dès la 6e semaine, et audible au doppler lors des consultations vers 10 à 12 semaines.',
      },
      {
        question: 'Quelle est une fréquence cardiaque normale ?',
        answer:
          'À partir de 12 semaines, environ 110 à 160 battements par minute. Elle est la plus rapide vers 9 à 10 semaines, où elle peut atteindre 170.',
      },
      {
        question: 'Les dopplers à domicile sont-ils sûrs ?',
        answer:
          'Ils ne sont pas connus pour être nocifs, mais les sages-femmes déconseillent de s’y fier : le son que vous prenez pour celui du bébé peut être votre propre pouls, et une fausse réassurance retarde la prise en charge.',
      },
    ],
    sources: [SOURCES.ameli, SOURCES.sante],
    seo: {
      title: 'Battements de cœur du bébé : quand et fréquences normales',
      description:
        'Quand le cœur du bébé commence à battre, les fréquences normales semaine après semaine et pourquoi les mouvements comptent plus qu’un doppler à domicile.',
      primaryKeyword: 'battements de cœur bébé grossesse',
      secondaryKeywords: ['fréquence cardiaque fœtale', 'quand entend-on le cœur du bébé'],
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
    locale: 'fr',
    slug: 'preparer-une-grossesse',
    categoryKey: 'pregnancy',
    title: 'Préparer une grossesse : quoi faire dans les trois mois avant',
    excerpt:
      'Les examens, les compléments et la connaissance de votre cycle avant de commencer — et le temps que cela prend en général.',
    heroImage: {
      src: '/images/articles/preparing.webp',
      alt: 'Un calendrier, un verre d’eau et un bol de fruits sur une table de cuisine',
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
      'Préparer une grossesse, ce n’est pas tout faire parfaitement : c’est régler quelques points assez tôt — à commencer par l’acide folique et par savoir à peu près quand vous ovulez.',
    blocks: [
      h2('Trois mois avant de commencer'),
      p(
        'L’essentiel de ce qui aide une grossesse se joue avant qu’elle commence. Les ovocytes mûrissent sur environ trois mois : ce que vous changez maintenant concerne le cycle où vous concevrez.',
      ),
      ol([
        'Commencez 400 µg d’acide folique par jour : il protège le tube neural dans les premières semaines, avant que la plupart des femmes sachent qu’elles sont enceintes.',
        'Faites un bilan : tension, thyroïde, fer, immunité contre la rubéole, et revue de tout traitement au long cours.',
        'Arrêtez le tabac et l’alcool, et ramenez la caféine à une ou deux tasses par jour.',
        'Mettez à jour les soins dentaires : les maladies des gencives sont associées à la prématurité.',
      ]),
      cta('bubbi-inline'),
      h2('Comprendre son cycle'),
      p(
        'La fenêtre fertile, ce sont les cinq jours avant l’ovulation et le jour de l’ovulation lui-même. Les spermatozoïdes survivent plusieurs jours ; l’ovule n’est fécondable qu’environ 24 heures. Savoir à peu près quand vous ovulez compte plus qu’un timing parfait.',
      ),
      ul([
        'La glaire cervicale devient claire et filante dans les jours qui précèdent.',
        'La température basale monte légèrement après l’ovulation et la confirme.',
        'Les tests d’ovulation détectent le pic de LH, en général 24 à 36 heures avant.',
      ]),
      callout(
        'info',
        'Le temps que cela prend habituellement',
        'Environ 8 couples sur 10 conçoivent dans l’année sans contraception. Après 35 ans, il est raisonnable de demander un avis au bout de six mois plutôt que douze.',
      ),
      h2('La partie que personne n’anticipe'),
      p(
        'Un projet de bébé peut occuper discrètement le calendrier et l’humeur. Décidez à l’avance quel niveau de suivi vous est utile, convenez à quelle fréquence en parler, et gardez au moins une partie du mois libre de tout cela.',
      ),
    ],
    faq: [
      {
        question: 'Quand commencer l’acide folique ?',
        answer:
          'Au moins un mois avant, idéalement trois. Le tube neural se referme dans les premières semaines, souvent avant qu’un test soit positif.',
      },
      {
        question: 'Combien de temps faut-il pour concevoir ?',
        answer:
          'Environ 8 couples sur 10 y parviennent dans l’année. Demandez un avis après six mois si vous avez plus de 35 ans, ou plus tôt si vos cycles sont irréguliers.',
      },
      {
        question: 'Mon partenaire doit-il faire quelque chose ?',
        answer:
          'Oui. Les spermatozoïdes mettent environ trois mois à mûrir : arrêter de fumer, réduire l’alcool et éviter la chaleur sont à commencer en même temps.',
      },
    ],
    sources: [SOURCES.ameli, SOURCES.who],
    seo: {
      title: 'Préparer une grossesse : la check-list des trois mois',
      description:
        'Que faire avant d’essayer de concevoir : acide folique, bilans médicaux, hygiène de vie et repérage de la fenêtre fertile.',
      primaryKeyword: 'préparer une grossesse',
      secondaryKeywords: ['check-list préconception', 'essayer de concevoir'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
