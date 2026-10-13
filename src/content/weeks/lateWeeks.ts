import type { Locale } from '@/lib/i18n/config';
import type { WeekPage } from '@/lib/content/types';

// The CMS snapshot says movements "slow down" in the third trimester. NHS
// guidance says a baby's usual pattern should continue up to and during birth.
const expect: Record<Locale, (left: number) => string> = {
  en: (left) => `The last stretch can make sleep harder and appointments more frequent. There are about ${left} weeks to your due date. Your baby's usual movement pattern should continue up to and during labour. If movements become less frequent, stop or change, contact your midwife or maternity unit immediately; do not wait or check with a home listening app.`,
  de: (left) => `In der letzten Phase wird Schlaf oft schwieriger und die Termine werden häufiger. Bis zum errechneten Termin sind es noch etwa ${left} Wochen. Die gewohnten Bewegungen deines Babys sollten bis zur Geburt spürbar bleiben. Wenn sie weniger werden, aufhören oder sich verändern, kontaktiere sofort deine Hebamme oder die Geburtsklinik; warte nicht ab und prüfe es nicht mit einer Hör-App.`,
  it: (left) => `Nell’ultimo tratto il sonno può essere più difficile e i controlli più frequenti. Mancano circa ${left} settimane alla data presunta. I movimenti abituali del bambino dovrebbero continuare fino al parto. Se diminuiscono, si fermano o cambiano, contatta subito l’ostetrica o il punto nascita; non aspettare e non usare un’app di ascolto per controllare.`,
  es: (left) => `En la recta final puede costar más dormir y las citas son más frecuentes. Faltan aproximadamente ${left} semanas para la fecha probable. El patrón habitual de movimientos del bebé debe continuar hasta el parto. Si disminuyen, cesan o cambian, contacta de inmediato con tu matrona o maternidad; no esperes ni lo compruebes con una app de escucha.`,
  pt: (left) => `Na reta final pode ser mais difícil dormir e as consultas tornam-se mais frequentes. Faltam cerca de ${left} semanas para a data prevista. O padrão habitual de movimentos do bebé deve continuar até ao parto. Se diminuírem, pararem ou mudarem, contacta de imediato a parteira ou a maternidade; não esperes nem uses uma app de escuta para verificar.`,
  fr: (left) => `À l’approche du terme, le sommeil peut devenir plus difficile et les rendez-vous plus fréquents. Il reste environ ${left} semaines avant la date prévue. Les mouvements habituels de votre bébé doivent continuer jusqu’à l’accouchement. S’ils diminuent, cessent ou changent, contactez immédiatement votre sage-femme ou la maternité ; n’attendez pas et ne vérifiez pas avec une appli d’écoute.`,
  uk: (left) => `Наприкінці вагітності спати може бути важче, а візити до лікаря частішають. До орієнтовної дати пологів близько ${left} тижнів. Звичні рухи дитини мають відчуватися аж до пологів. Якщо вони послабшали, зникли або змінилися, негайно зв’яжіться з лікарем чи пологовим відділенням; не чекайте й не перевіряйте це застосунком для прослуховування.`,
};

export function clarifyLateWeek(page: WeekPage, locale: Locale): WeekPage {
  if (page.week < 27) return page;
  return { ...page, expect: expect[locale](40 - page.week) };
}
