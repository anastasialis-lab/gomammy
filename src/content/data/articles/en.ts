import type { Article } from '@/lib/content/types';
import { b, callout, cta, h2, link, ol, p, ul } from './helpers';

const SOURCES = {
  nhs: {
    label: 'Pregnancy — signs, symptoms and antenatal care',
    publisher: 'NHS',
    url: 'https://www.nhs.uk/pregnancy/',
    checkedAt: '2026-08-01',
  },
  who: {
    label: 'WHO recommendations on antenatal care for a positive pregnancy experience',
    publisher: 'World Health Organization',
    url: 'https://www.who.int/publications/i/item/9789241549912',
    checkedAt: '2026-08-01',
  },
  acog: {
    label: 'Pregnancy resources for patients',
    publisher: 'American College of Obstetricians and Gynecologists',
    url: 'https://www.acog.org/womens-health/pregnancy',
    checkedAt: '2026-08-01',
  },
};

const earlySignsBlocks = [
  h2('The signs that show up first'),
  p(
    'Most early pregnancy symptoms come from one hormone: hCG, which the developing placenta starts producing after implantation. Levels roughly double every two to three days, which is why the first fortnight can feel like nothing at all, and then like everything at once.',
  ),
  ul([
    [b('A missed period. '), { text: 'Still the most reliable early sign if your cycle is usually regular.' }],
    [b('Tender, heavier breasts. '), { text: 'Often the very first change women notice, sometimes before the test.' }],
    [b('Tiredness. '), { text: 'Not ordinary tiredness — a heaviness that arrives even after a full night’s sleep.' }],
    [b('Nausea. '), { text: 'It can start around week 5 or 6, and rarely limits itself to mornings.' }],
    [b('Needing the toilet more often. '), { text: 'Blood flow to the kidneys rises early in pregnancy.' }],
    [b('A sharper sense of smell. '), { text: 'Coffee, cooking oil and perfume are the usual first casualties.' }],
  ]),
  cta('bubbi-inline'),
  h2('When to take a test'),
  p(
    'Home tests measure hCG in urine. From the day your period is due, a test is highly accurate. Testing earlier can work, but a negative result at that point does not rule pregnancy out — the hormone may simply be too low to detect.',
  ),
  ol([
    'Use the first urine of the day, when hCG is most concentrated.',
    'Check the expiry date and follow the timing on the leaflet exactly.',
    'If the result is negative and your period does not arrive, test again in three days.',
  ]),
  callout(
    'info',
    'A faint line is still a line',
    'Any second line, however pale, means hCG was detected. Repeat the test in 48 hours if you want to see the line get stronger.',
  ),
  h2('What to do after a positive test'),
  p(
    'There is no rush to see anyone in the first days, but two things are worth doing straight away: start a prenatal vitamin containing 400 µg of folic acid, and stop alcohol and smoking. Then book your first antenatal appointment — in most countries it takes place between weeks 8 and 12.',
  ),
  p(
    'If you know the first day of your last period, you already have what you need to work out your due date and follow your ',
    link('pregnancy week by week', 'category:by-week'),
    '.',
  ),
  callout(
    'warning',
    'Call your doctor sooner if',
    'You have heavy bleeding, severe or one-sided pain, shoulder-tip pain or feel faint. These need to be checked the same day.',
  ),
];

const hospitalBagBlocks = [
  h2('When to pack'),
  p(
    'Have the bag ready by week 36. Babies rarely arrive on schedule, and packing while you can still think clearly is easier than packing during early contractions. Keep it by the door, and keep a short list of the last-minute items — phone, charger, glasses — taped to the top.',
  ),
  h2('For labour'),
  ul([
    'Your maternity notes, ID and any hospital paperwork',
    'A loose, comfortable top or nightdress you do not mind ruining',
    'Slippers or flip-flops, plus warm socks — feet get cold in labour',
    'Lip balm, hair ties and a water bottle with a straw',
    'Snacks that survive a long night, and coins or a card for the machines',
    'Your birth plan, printed, and a phone charger with a long cable',
  ]),
  cta('bubbi-inline'),
  h2('For after the birth'),
  ul([
    'Two or three nursing bras and breast pads',
    'Maternity pads — more than you think, and no tampons',
    'Comfortable high-waisted underwear, several pairs',
    'Loose clothes to come home in: nothing you wore before pregnancy',
    'Toiletries, a towel, and anything that makes a strange room feel yours',
  ]),
  h2('For your baby'),
  ul([
    'Bodysuits and sleepsuits in newborn and 0–3 month sizes',
    'A hat, scratch mitts and a cardigan or jacket',
    'Nappies and cotton wool or water wipes',
    'A blanket, and a going-home outfit suited to the weather',
    'A correctly fitted car seat — most hospitals will not discharge you without one',
  ]),
  callout(
    'care',
    'One bag for your partner',
    'Snacks, a change of clothes, a phone charger and cash. Partners are often the ones who cannot leave, and hospital cafés close.',
  ),
];

const sleepBlocks = [
  h2('Why position starts to matter'),
  p(
    'From around 28 weeks, the weight of the uterus can press on the large vein that returns blood from your legs to your heart. Lying flat on your back reduces that flow, which is why guidance from week 28 onwards is to go to sleep on your side.',
  ),
  p(
    'Either side is fine. The left is often recommended because it takes pressure off the liver and can slightly improve circulation, but the important part is simply not settling to sleep on your back.',
  ),
  callout(
    'info',
    'Waking up on your back is not a problem',
    'Your body changes position many times a night. What the research looks at is the position you fall asleep in, because that is where you spend the longest.',
  ),
  h2('Making side sleeping comfortable'),
  ul([
    'A pillow between your knees keeps hips and lower back aligned.',
    'A pillow or rolled towel behind your back stops you rolling flat.',
    'A pillow under the bump takes the pull off the round ligaments.',
    'Raising the head of the bed slightly helps if heartburn wakes you.',
  ]),
  cta('bubbi-inline'),
  h2('The rest of the night'),
  p(
    'Position is only half of it. Broken sleep in pregnancy usually has three causes: needing the toilet, heartburn and a mind that will not switch off. Drink most of your water earlier in the day, avoid large meals in the last three hours before bed, and treat the last half hour as a wind-down rather than a screen.',
  ),
  p(
    'Short daytime naps are worth taking rather than fighting. Broken nights accumulate, and by the ',
    link('third trimester', 'category:by-week'),
    ' most people need them.',
  ),
];

const heartbeatBlocks = [
  h2('When the heart starts beating'),
  p(
    'The heart begins as a simple tube that starts to pulse around week 5 or 6. On an early scan it looks like a flicker rather than a heartbeat. By week 6 it is usually visible on a transvaginal ultrasound, and by weeks 10 to 12 a handheld doppler can often pick it up.',
  ),
  h2('What the numbers mean'),
  p(
    'A baby’s heart rate is much faster than an adult’s. It rises through the first weeks, peaks around weeks 9 to 10 at roughly 170 beats per minute, then settles for the rest of pregnancy into a normal range of about 110 to 160.',
  ),
  ul([
    'Week 6: around 100–120 beats per minute',
    'Weeks 9–10: around 140–170, the fastest it will be',
    'From week 12: settles into 110–160 and stays there',
  ]),
  callout(
    'care',
    'The heart rate does not tell you the sex',
    'The idea that a faster heartbeat means a girl has been tested and does not hold up. Heart rate reflects activity and gestational age, not sex.',
  ),
  h2('Home dopplers'),
  p(
    'Handheld dopplers are widely sold, but midwives generally advise against relying on them. It is easy to pick up your own pulse and mistake it for your baby’s, and a reassuring sound can delay a call that should have been made. From week 24 onwards, your baby’s pattern of movement is the more reliable signal.',
  ),
  callout(
    'warning',
    'Trust movement over sound',
    'If your baby is moving less than usual, or the pattern changes, contact your midwife or maternity unit straight away — day or night, however many times you have called before.',
  ),
  cta('bubbi-inline'),

];

const preparingBlocks = [
  h2('Three months before you start trying'),
  p(
    'Most of what helps a pregnancy happens before it begins. Eggs mature over roughly three months, so changes you make now affect the cycle you conceive in.',
  ),
  ol([
    'Start 400 µg of folic acid daily — it protects the neural tube in the first weeks, before most people know they are pregnant.',
    'Have a check-up: blood pressure, thyroid, iron, rubella immunity, and a review of any regular medication.',
    'Stop smoking and alcohol, and bring caffeine down to about one or two cups a day.',
    'Bring dental care up to date; gum disease is linked to preterm birth.',
  ]),
  cta('bubbi-inline'),
  h2('Understanding your cycle'),
  p(
    'The fertile window is the five days before ovulation and the day of ovulation itself. Sperm can survive several days; the egg can only be fertilised for about 24 hours. Knowing roughly when you ovulate matters more than timing anything perfectly.',
  ),
  ul([
    'Cervical mucus becomes clear and stretchy in the days before ovulation.',
    'Basal body temperature rises slightly after ovulation, confirming it happened.',
    'Ovulation tests detect the LH surge, usually 24 to 36 hours before release.',
  ]),
  callout(
    'info',
    'How long it usually takes',
    'About 8 in 10 couples conceive within a year of trying without contraception. If you are over 35, it is reasonable to ask for advice after six months rather than twelve.',
  ),
  h2('The part nobody plans for'),
  p(
    'Trying to conceive can quietly take over a calendar and a mood. Decide in advance how much tracking is useful to you, agree with your partner how often you will talk about it, and keep at least one part of the month free of it.',
  ),
];

export const enArticles: Article[] = [
  {
    translationKey: 'early-signs-of-pregnancy',
    locale: 'en',
    slug: 'early-signs-of-pregnancy',
    categoryKey: 'symptoms',
    title: 'Early signs of pregnancy: what to look for and when',
    excerpt:
      'The symptoms that show up first, when a test becomes reliable, and what is worth doing in the days after a positive result.',
    heroImage: {
      src: '/images/articles/early-signs.svg',
      alt: 'A calm morning scene with a cup of tea and a pregnancy test on a table',
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
      'Early pregnancy rarely announces itself clearly. Some women notice a change within days of implantation; others feel completely normal until well past a missed period. Both are common, and neither says anything about how the pregnancy is going.',
    blocks: earlySignsBlocks,
    faq: [
      {
        question: 'How early can pregnancy symptoms start?',
        answer:
          'Some women notice tender breasts or fatigue from around week 4, shortly after implantation. Many notice nothing until week 6 or later, and some have almost no symptoms at all.',
      },
      {
        question: 'Can you be pregnant and get a negative test?',
        answer:
          'Yes, if you test too early. hCG doubles every two to three days, so a test taken before your period is due may not detect it. Retest in three days if your period does not arrive.',
      },
      {
        question: 'Is spotting in early pregnancy normal?',
        answer:
          'Light spotting around the time your period was due can be implantation bleeding and is common. Heavy bleeding, or bleeding with pain, needs to be checked the same day.',
      },
    ],
    sources: [SOURCES.nhs, SOURCES.acog],
    seo: {
      title: 'Early Signs of Pregnancy: Symptoms, Timing and Testing',
      description:
        'The earliest pregnancy symptoms, when they usually start, when a home test becomes reliable and what to do after a positive result.',
      primaryKeyword: 'early signs of pregnancy',
      secondaryKeywords: ['first pregnancy symptoms', 'when to take a pregnancy test'],
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
    locale: 'en',
    slug: 'hospital-bag-checklist',
    categoryKey: 'birth',
    title: 'Hospital bag checklist: what to pack and when',
    excerpt:
      'A practical list for labour, for after the birth and for your baby — packed by week 36, so it is one less thing to think about.',
    heroImage: {
      src: '/images/articles/hospital-bag.svg',
      alt: 'A packed hospital bag with folded baby clothes beside it',
      width: 1600,
      height: 900,
    },
    authorId: 'editorial',
    publishedAt: '2026-05-30',
    updatedAt: '2026-08-14',
    status: 'published',
    tagKeys: ['third-trimester', 'preparation'],
    intro:
      'A hospital bag is not about being ready for everything. It is about removing decisions from a day when you will not want to make any. Pack it once, well, and leave it by the door.',
    blocks: hospitalBagBlocks,
    faq: [
      {
        question: 'When should I pack my hospital bag?',
        answer:
          'By week 36. Around one baby in ten arrives before 37 weeks, and packing early costs nothing.',
      },
      {
        question: 'How many bags do I need?',
        answer:
          'One for labour and one for after the birth is the easiest split, plus a small bag for your partner. Some hospitals limit what you can bring into the delivery room.',
      },
      {
        question: 'What do people most often forget?',
        answer:
          'A long phone charger, snacks for the person supporting you, and comfortable going-home clothes for yourself.',
      },
    ],
    sources: [SOURCES.nhs],
    seo: {
      title: 'Hospital Bag Checklist for Labour, Recovery and Baby',
      description:
        'Everything worth packing for the hospital — for labour, for the days after birth and for your newborn — with the timing that makes it easy.',
      primaryKeyword: 'hospital bag checklist',
      secondaryKeywords: ['what to pack for hospital', 'maternity bag list'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['sleeping-positions-in-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
  {
    translationKey: 'sleeping-positions-in-pregnancy',
    locale: 'en',
    slug: 'sleeping-positions-in-pregnancy',
    categoryKey: 'health',
    title: 'Sleeping positions in pregnancy: what actually helps',
    excerpt:
      'Why side sleeping is recommended from week 28, how to make it comfortable, and what to do about the other reasons you wake up.',
    heroImage: {
      src: '/images/articles/sleep.svg',
      alt: 'A softly lit bedroom with pillows arranged for side sleeping',
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
      'Sleep in pregnancy gets complicated exactly when you need it most. The good news is that the advice is simpler than it sounds, and most of the discomfort responds to a few well-placed pillows.',
    blocks: sleepBlocks,
    faq: [
      {
        question: 'Which side is best to sleep on when pregnant?',
        answer:
          'Either side is fine. The left is often suggested because it slightly improves circulation, but the key point is going to sleep on your side rather than your back from week 28.',
      },
      {
        question: 'What if I wake up on my back?',
        answer:
          'Simply turn onto your side and go back to sleep. Guidance is about the position you fall asleep in, not every position during the night.',
      },
      {
        question: 'Do I need a pregnancy pillow?',
        answer:
          'Not necessarily. Two ordinary pillows — one between the knees, one behind the back — do most of the same work.',
      },
    ],
    sources: [SOURCES.nhs, SOURCES.who],
    seo: {
      title: 'Best Sleeping Positions in Pregnancy (and Why)',
      description:
        'Why side sleeping is advised from 28 weeks, how to set up pillows for comfort, and practical fixes for heartburn and broken nights.',
      primaryKeyword: 'sleeping positions in pregnancy',
      secondaryKeywords: ['best side to sleep on pregnant', 'pregnancy sleep tips'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['hospital-bag-checklist', 'early-signs-of-pregnancy'],
  },
  {
    translationKey: 'baby-heartbeat-in-pregnancy',
    locale: 'en',
    slug: 'baby-heartbeat-in-pregnancy',
    categoryKey: 'baby',
    title: 'Your baby’s heartbeat: when it starts and what is normal',
    excerpt:
      'When the heart begins to beat, what a normal rate looks like week by week, and why midwives prefer movement over home dopplers.',
    heroImage: {
      src: '/images/articles/heartbeat.svg',
      alt: 'An ultrasound image on a screen in a softly lit consulting room',
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
      'For many people the heartbeat is the moment pregnancy becomes real. It is also one of the most searched and most misunderstood parts of it — here is what the numbers actually mean.',
    blocks: heartbeatBlocks,
    faq: [
      {
        question: 'When can you hear the baby’s heartbeat?',
        answer:
          'It is usually visible on a transvaginal ultrasound from around week 6, and audible with a doppler at antenatal appointments from about week 10 to 12.',
      },
      {
        question: 'What is a normal fetal heart rate?',
        answer:
          'From week 12 onwards, roughly 110 to 160 beats per minute. It is fastest around weeks 9 to 10, when it can reach about 170.',
      },
      {
        question: 'Are home dopplers safe?',
        answer:
          'They are not known to be harmful, but midwives advise against relying on them: a sound you believe is your baby’s can be your own pulse, and false reassurance delays care.',
      },
    ],
    sources: [SOURCES.nhs, SOURCES.acog],
    seo: {
      title: 'Baby’s Heartbeat in Pregnancy: When It Starts and Normal Rates',
      description:
        'When your baby’s heart starts beating, normal heart rates week by week, what the numbers mean and why movement matters more than home dopplers.',
      primaryKeyword: 'baby heartbeat in pregnancy',
      secondaryKeywords: ['fetal heart rate', 'when can you hear the heartbeat'],
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
    locale: 'en',
    slug: 'preparing-for-pregnancy',
    categoryKey: 'pregnancy',
    title: 'Preparing for pregnancy: what to do in the three months before',
    excerpt:
      'The health checks, supplements and cycle knowledge that matter before you start trying — and how long conceiving usually takes.',
    heroImage: {
      src: '/images/articles/preparing.svg',
      alt: 'A calendar, a glass of water and a bowl of fruit on a kitchen table',
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
      'Preparing for pregnancy is less about doing everything right and more about getting a few things in place early — starting with folic acid, and with knowing roughly when you ovulate.',
    blocks: preparingBlocks,
    faq: [
      {
        question: 'How long before trying should I start folic acid?',
        answer:
          'At least one month before, and ideally three. The neural tube closes in the first weeks of pregnancy, often before a test is positive.',
      },
      {
        question: 'How long does it usually take to conceive?',
        answer:
          'Around 8 in 10 couples conceive within a year. Ask for advice after six months if you are over 35, or sooner if your cycles are irregular.',
      },
      {
        question: 'Does my partner need to do anything?',
        answer:
          'Yes. Sperm take around three months to mature, so stopping smoking, reducing alcohol and avoiding heat exposure are worth starting at the same time.',
      },
    ],
    sources: [SOURCES.nhs, SOURCES.who],
    seo: {
      title: 'Preparing for Pregnancy: A Three-Month Checklist',
      description:
        'What to do before trying to conceive: folic acid, health checks, lifestyle changes and understanding your fertile window.',
      primaryKeyword: 'preparing for pregnancy',
      secondaryKeywords: ['preconception checklist', 'trying to conceive'],
    },
    ctas: [
      { placement: 'after-intro', ctaId: 'weeks-banner' },
      { placement: 'sidebar', ctaId: 'bubbi-sidebar' },
    ],
    relatedKeys: ['early-signs-of-pregnancy', 'baby-heartbeat-in-pregnancy'],
  },
];
