import type { Locale } from '@/lib/i18n/config';
import type { WeekPage } from '@/lib/content/types';

// Keep editorial corrections outside the generated Sanity snapshot so a content
// pull cannot silently restore an inaccurate answer or the old generic copy.
const earlyHelp: Record<Locale, string> = {
  en: 'Pregnancy symptoms differ from person to person. Seek prompt medical advice for heavy bleeding, severe pain or fever. Contact your maternity care team if a symptom worries you.',
  de: 'Schwangerschaftsbeschwerden sind individuell. Hole bei starker Blutung, starken Schmerzen oder Fieber umgehend ärztlichen Rat ein. Wende dich bei Sorgen an deine Hebamme oder ärztliche Betreuung.',
  it: 'I sintomi della gravidanza variano da persona a persona. Chiedi subito un parere medico in caso di sanguinamento abbondante, dolore intenso o febbre. Contatta chi segue la gravidanza se qualcosa ti preoccupa.',
  es: 'Los síntomas del embarazo varían de una persona a otra. Busca atención médica sin demora si tienes sangrado abundante, dolor intenso o fiebre. Contacta con tu equipo de maternidad si algo te preocupa.',
  pt: 'Os sintomas da gravidez variam de pessoa para pessoa. Procura aconselhamento médico sem demora se tiveres hemorragia intensa, dor forte ou febre. Contacta a tua equipa de saúde materna se algo te preocupar.',
  fr: 'Les symptômes de grossesse varient d’une personne à l’autre. Demandez rapidement un avis médical en cas de saignement abondant, de douleur intense ou de fièvre. Contactez votre équipe de suivi si un symptôme vous inquiète.',
  uk: 'Симптоми вагітності у всіх різні. У разі сильної кровотечі, сильного болю чи гарячки без зволікання зверніться по медичну допомогу. Якщо щось турбує, зв’яжіться з лікарем або акушеркою.',
};

function correctEarlyFaq(page: WeekPage, locale: Locale): WeekPage {
  if (page.week < 4 || page.week > 15 || page.faq.length < 3) return page;
  const faq = [...page.faq];
  faq[2] = { ...faq[2], answer: earlyHelp[locale] };
  return { ...page, faq };
}

function enrichEnglishWeek(page: WeekPage): WeekPage {
  if (page.locale !== 'en') return page;

  if (page.week === 8) {
    return {
      ...page,
      intro: 'At 8 weeks pregnant, your baby is still tiny, while nausea, tiredness and breast tenderness may feel anything but small. This guide explains what is developing, which appointments may be coming up and when to ask for help.',
      development: [
        'Your baby is around 16 mm long from head to bottom, although ultrasound measurements vary.',
        'The placenta is developing and will take over more of the work of supporting your baby as pregnancy progresses.',
        'The arms and legs are growing; the hands and feet are beginning to form.',
      ],
      body: [
        'Hormonal changes can bring nausea, fatigue and tender breasts. Symptoms may come and go, and their intensity alone cannot confirm how a pregnancy is progressing.',
        'You may need to urinate more often and feel bloated even though your bump is not yet visible.',
      ],
      symptoms: [
        'Nausea or food aversions, sometimes at any time of day.',
        'Tiredness and sore breasts.',
        'Bloating and more frequent urination.',
      ],
      expect: 'If you have not arranged your first prenatal appointment, contact your local maternity care service. The timing of a dating scan and routine tests varies by country and care plan; ask what is recommended where you live.',
      tips: [
        'Ask your clinician about folic acid and any other supplements appropriate for you; do not change prescribed medicines without medical advice.',
        'Try small meals and regular fluids if nausea makes eating difficult. Ask for help if you cannot keep food or fluids down.',
        'Seek prompt medical advice for heavy bleeding, severe pain or fever rather than waiting for a routine appointment.',
      ],
      seo: {
        ...page.seo,
        title: '8 Weeks Pregnant: Baby Development, Symptoms & Appointments',
        description: 'At 8 weeks pregnant, learn about early development, common symptoms, first prenatal appointments and signs that need medical advice.',
      },
    };
  }

  if (page.week === 26) {
    return {
      ...page,
      intro: 'At 26 weeks pregnant, your baby is growing rapidly and you may notice a more familiar pattern of movements. Your changing balance, leg cramps or back discomfort can also make daily routines feel different.',
      development: [
        'Your baby is roughly 35.6 cm long from head to heel; measurements are estimates, not targets for an individual baby.',
        'The eyes are beginning to open, and your baby continues to practise breathing movements.',
        'As your baby grows, you may get to know their usual pattern of movements.',
      ],
      body: [
        'A growing bump can shift your centre of gravity and make balance less predictable.',
        'Tiredness, leg cramps and back discomfort may become more noticeable as you approach the third trimester.',
      ],
      symptoms: [
        'Leg cramps, especially at night.',
        'Backache or discomfort around the ribs.',
        'Tiredness and occasional breathlessness; new or severe breathlessness needs medical advice.',
      ],
      expect: 'There is no single normal number of kicks for every baby. Pay attention to your baby’s usual movements. If movements become less frequent, stop or change, contact your maternity team immediately, even at night. If you have not felt any movements by 24 weeks, tell your midwife or doctor.',
      tips: [
        'Ask your maternity team which routine checks and vaccinations apply in your location and care plan.',
        'Move carefully if your balance feels different, and discuss persistent pain or severe leg cramps with your clinician.',
        'Get urgent advice for a severe headache, vision changes or sudden swelling, rather than treating these as routine discomforts.',
      ],
      faq: [
        ...page.faq.slice(0, 2),
        {
          question: 'What if my baby moves less at 26 weeks?',
          answer: 'Call your midwife or maternity unit immediately if your baby moves less than usual, stops moving or their pattern changes. Do not wait until the next day or rely on a home Doppler or listening app for reassurance.',
        },
      ],
      seo: {
        ...page.seo,
        title: '26 Weeks Pregnant: Movement, Development & Symptoms',
        description: 'At 26 weeks pregnant, learn about baby movements, development, leg cramps and when a change in symptoms needs medical advice.',
      },
    };
  }

  if (page.week === 28) {
    return {
      ...page,
      intro: 'At 28 weeks pregnant, you are entering the third trimester. Your baby continues to grow, while sleep, back discomfort and heartburn may demand more attention. Your baby’s usual movement pattern still matters.',
      development: [
        'Your baby is roughly 37.6 cm long from head to heel; individual growth varies.',
        'The brain and lungs continue to mature throughout the third trimester.',
        'Your baby has periods of activity and rest, and you may recognise a usual pattern of movements.',
      ],
      body: [
        'As your bump grows, your back may work harder and sleep can become less comfortable.',
        'Heartburn and mild ankle swelling can occur, but sudden swelling needs prompt medical advice.',
      ],
      symptoms: [
        'Backache and difficulty finding a comfortable sleeping position.',
        'Heartburn or indigestion.',
        'Swollen ankles later in the day; sudden swelling of the face, hands or feet is not something to ignore.',
      ],
      tips: [
        'Ask your maternity team which blood tests, vaccines and other checks are due under your care plan.',
        'Keep noticing your baby’s usual movement pattern. Contact your maternity unit immediately if it changes or becomes less frequent.',
        'After 28 weeks, going to sleep on your side is recommended; if you wake on your back, simply turn onto your side.',
      ],
      faq: [
        ...page.faq.slice(0, 2),
        {
          question: 'Do baby movements slow down at 28 weeks?',
          answer: 'No. Your baby’s usual movement pattern should continue up to and during labour. If movements become less frequent, stop or change, contact your midwife or maternity unit immediately.',
        },
      ],
      seo: {
        ...page.seo,
        title: '28 Weeks Pregnant: Third Trimester & Baby Movements',
        description: 'At 28 weeks pregnant, understand third-trimester changes, baby movements, common symptoms and when to seek medical advice.',
      },
    };
  }

  return page;
}

export function enrichPriorityWeek(page: WeekPage, locale: Locale): WeekPage {
  return enrichEnglishWeek(correctEarlyFaq(page, locale));
}
