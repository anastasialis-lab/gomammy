/**
 * A phrase book turns the language-independent week facts into natural prose in
 * one language. Every value is authored copy, not a translation of the English
 * file, so each locale reads like it was written for its own audience.
 */
export interface WeekPhrasebook {
  /** URL slug for a single week page, e.g. `week-{n}`. Localised. */
  slugTemplate: string;
  /** `{n}` = week number. */
  seoTitle: string;
  /** `{n}` = week, `{size}` = size phrase. */
  seoDescription: string;
  /** Lead paragraph. `{n}`, `{size}`, `{trimester}`. */
  intro: string;
  /** Trimester name in the grammatical form the intro sentence needs. */
  trimesterInline: [string, string, string];
  /** Lead paragraph for weeks 1–3, when there is no embryo yet. `{n}`. */
  introEarly: string;
  /** "What to expect" paragraph, one per trimester. `{n}`, `{left}` weeks to go. */
  expect: [string, string, string];
  /** Size comparison in a form that fits after "size of": `a poppy seed`. */
  sizes: Record<string, string>;
  development: Record<string, string>;
  body: Record<string, string>;
  symptoms: Record<string, string>;
  tips: Record<string, string>;
  /** Optional highlight banner for landmark weeks. */
  milestones: Record<string, string>;
  /** FAQ templates. `{n}`, `{size}`, `{length}`, `{weight}`, `{months}`. */
  faq: { question: string; answer: string }[];
  /** Label for the months answer, e.g. `about {months} months`. */
  monthsLabel: string;
}
