import type { Locale } from '@/lib/i18n/config';
import type { Tag } from '@/lib/content/types';

export const TAG_KEYS = [
  'first-trimester',
  'second-trimester',
  'third-trimester',
  'symptoms',
  'preparation',
  'nutrition',
  'sleep',
  'baby-development',
] as const;

export type TagKey = (typeof TAG_KEYS)[number];

const copy: Record<Locale, Record<TagKey, { slug: string; title: string }>> = {
  en: {
    'first-trimester': { slug: 'first-trimester', title: 'First trimester' },
    'second-trimester': { slug: 'second-trimester', title: 'Second trimester' },
    'third-trimester': { slug: 'third-trimester', title: 'Third trimester' },
    symptoms: { slug: 'symptoms', title: 'Symptoms' },
    preparation: { slug: 'preparation', title: 'Preparation' },
    nutrition: { slug: 'nutrition', title: 'Nutrition' },
    sleep: { slug: 'sleep', title: 'Sleep' },
    'baby-development': { slug: 'baby-development', title: 'Baby development' },
  },
  de: {
    'first-trimester': { slug: 'erstes-trimester', title: 'Erstes Trimester' },
    'second-trimester': { slug: 'zweites-trimester', title: 'Zweites Trimester' },
    'third-trimester': { slug: 'drittes-trimester', title: 'Drittes Trimester' },
    symptoms: { slug: 'anzeichen', title: 'Anzeichen' },
    preparation: { slug: 'vorbereitung', title: 'Vorbereitung' },
    nutrition: { slug: 'ernaehrung', title: 'Ernährung' },
    sleep: { slug: 'schlaf', title: 'Schlaf' },
    'baby-development': { slug: 'entwicklung', title: 'Entwicklung' },
  },
  it: {
    'first-trimester': { slug: 'primo-trimestre', title: 'Primo trimestre' },
    'second-trimester': { slug: 'secondo-trimestre', title: 'Secondo trimestre' },
    'third-trimester': { slug: 'terzo-trimestre', title: 'Terzo trimestre' },
    symptoms: { slug: 'sintomi', title: 'Sintomi' },
    preparation: { slug: 'preparazione', title: 'Preparazione' },
    nutrition: { slug: 'alimentazione', title: 'Alimentazione' },
    sleep: { slug: 'sonno', title: 'Sonno' },
    'baby-development': { slug: 'sviluppo', title: 'Sviluppo' },
  },
  es: {
    'first-trimester': { slug: 'primer-trimestre', title: 'Primer trimestre' },
    'second-trimester': { slug: 'segundo-trimestre', title: 'Segundo trimestre' },
    'third-trimester': { slug: 'tercer-trimestre', title: 'Tercer trimestre' },
    symptoms: { slug: 'sintomas', title: 'Síntomas' },
    preparation: { slug: 'preparacion', title: 'Preparación' },
    nutrition: { slug: 'alimentacion', title: 'Alimentación' },
    sleep: { slug: 'sueno', title: 'Sueño' },
    'baby-development': { slug: 'desarrollo', title: 'Desarrollo' },
  },
  pt: {
    'first-trimester': { slug: 'primeiro-trimestre', title: 'Primeiro trimestre' },
    'second-trimester': { slug: 'segundo-trimestre', title: 'Segundo trimestre' },
    'third-trimester': { slug: 'terceiro-trimestre', title: 'Terceiro trimestre' },
    symptoms: { slug: 'sintomas', title: 'Sintomas' },
    preparation: { slug: 'preparacao', title: 'Preparação' },
    nutrition: { slug: 'alimentacao', title: 'Alimentação' },
    sleep: { slug: 'sono', title: 'Sono' },
    'baby-development': { slug: 'desenvolvimento', title: 'Desenvolvimento' },
  },
  fr: {
    'first-trimester': { slug: 'premier-trimestre', title: 'Premier trimestre' },
    'second-trimester': { slug: 'deuxieme-trimestre', title: 'Deuxième trimestre' },
    'third-trimester': { slug: 'troisieme-trimestre', title: 'Troisième trimestre' },
    symptoms: { slug: 'symptomes', title: 'Symptômes' },
    preparation: { slug: 'preparation', title: 'Préparation' },
    nutrition: { slug: 'alimentation', title: 'Alimentation' },
    sleep: { slug: 'sommeil', title: 'Sommeil' },
    'baby-development': { slug: 'developpement', title: 'Développement' },
  },
  uk: {
    'first-trimester': { slug: 'pershyi-trymestr', title: 'Перший триместр' },
    'second-trimester': { slug: 'druhyi-trymestr', title: 'Другий триместр' },
    'third-trimester': { slug: 'tretii-trymestr', title: 'Третій триместр' },
    symptoms: { slug: 'symptomy', title: 'Симптоми' },
    preparation: { slug: 'pidhotovka', title: 'Підготовка' },
    nutrition: { slug: 'kharchuvannia', title: 'Харчування' },
    sleep: { slug: 'son', title: 'Сон' },
    'baby-development': { slug: 'rozvytok', title: 'Розвиток дитини' },
  },
};

export function getTags(locale: Locale): Tag[] {
  return TAG_KEYS.map((key) => ({
    translationKey: key,
    locale,
    slug: copy[locale][key].slug,
    title: copy[locale][key].title,
  }));
}

export function getTag(locale: Locale, key: string): Tag | undefined {
  return getTags(locale).find((tag) => tag.translationKey === key);
}
