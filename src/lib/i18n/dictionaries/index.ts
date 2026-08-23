import type { Locale } from '../config';
import type { Dictionary } from './types';
import { en } from './en';
import { de } from './de';
import { it } from './it';
import { es } from './es';
import { pt } from './pt';
import { fr } from './fr';
import { uk } from './uk';

const dictionaries: Record<Locale, Dictionary> = { en, de, it, es, pt, fr, uk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Replaces `{n}` (and any other `{key}`) placeholders in a dictionary string. */
export function t(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) =>
    key in values ? String(values[key]) : match,
  );
}

export type { Dictionary };
