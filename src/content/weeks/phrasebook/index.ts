import type { Locale } from '@/lib/i18n/config';
import type { WeekPhrasebook } from './types';
import { enWeeks } from './en';
import { deWeeks } from './de';
import { itWeeks } from './it';
import { esWeeks } from './es';
import { ptWeeks } from './pt';
import { frWeeks } from './fr';
import { ukWeeks } from './uk';

export const WEEK_PHRASEBOOKS: Record<Locale, WeekPhrasebook> = {
  en: enWeeks,
  de: deWeeks,
  it: itWeeks,
  es: esWeeks,
  pt: ptWeeks,
  fr: frWeeks,
  uk: ukWeeks,
};

export type { WeekPhrasebook };
