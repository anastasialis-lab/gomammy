import type { Metadata } from 'next';
import { DEFAULT_LOCALE, LOCALES, OG_LOCALES, type Locale } from '@/lib/i18n/config';
import type { Alternates } from '@/lib/routes';
import { absoluteUrl, isIndexable, siteUrl } from './site';
import { BRAND } from '@/content/data/site';

export type PageMetaInput = {
  locale: Locale;
  title: string;
  description: string;
  /** Locale-relative canonical path, e.g. `/en/pregnancy/week-20`. */
  path: string;
  alternates?: Alternates;
  /** Absolute or root-relative image; falls back to the generated OG image. */
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  canonicalOverride?: string;
};

/** Dynamic Open Graph image so every page shares with its own title. */
export function ogImageUrl(input: { title: string; eyebrow?: string; locale: Locale }): string {
  const params = new URLSearchParams({ title: input.title, locale: input.locale });
  if (input.eyebrow) params.set('eyebrow', input.eyebrow);
  return absoluteUrl(`/og?${params.toString()}`);
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const {
    locale,
    title,
    description,
    path,
    alternates,
    image,
    imageAlt,
    noindex,
    type = 'website',
    publishedTime,
    modifiedTime,
    canonicalOverride,
  } = input;

  const languages: Record<string, string> = {};
  if (alternates) {
    for (const code of LOCALES) {
      const target = alternates[code];
      if (target) languages[code] = absoluteUrl(target);
    }
    const fallback = alternates[DEFAULT_LOCALE] ?? Object.values(alternates)[0];
    if (fallback) languages['x-default'] = absoluteUrl(fallback);
  }

  // Social platforms do not render SVG, so vector art falls back to the
  // generated card rather than shipping a share image nobody can see.
  const usableImage = image && !image.toLowerCase().endsWith('.svg') ? image : undefined;
  const ogImage = usableImage
    ? usableImage.startsWith('http')
      ? usableImage
      : absoluteUrl(usableImage)
    : ogImageUrl({ title, locale });

  const indexable = isIndexable() && !noindex;

  return {
    metadataBase: new URL(siteUrl()),
    title,
    description,
    alternates: {
      canonical: canonicalOverride ?? absoluteUrl(path),
      languages: Object.keys(languages).length > 0 ? languages : undefined,
    },
    robots: indexable
      ? { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
      : { index: false, follow: false },
    openGraph: {
      type,
      siteName: BRAND.name,
      title,
      description,
      url: absoluteUrl(path),
      locale: OG_LOCALES[locale],
      alternateLocale: LOCALES.filter((code) => code !== locale).map((code) => OG_LOCALES[code]),
      images: [{ url: ogImage, width: 1200, height: 630, alt: imageAlt ?? title }],
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
