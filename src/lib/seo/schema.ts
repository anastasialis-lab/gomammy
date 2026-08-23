import type { Locale } from '@/lib/i18n/config';
import { LOCALE_TAGS } from '@/lib/i18n/config';
import type { AppProduct, Author, FaqItem, Source } from '@/lib/content/types';
import { BRAND } from '@/content/data/site';
import { absoluteUrl } from './site';

type JsonLdObject = Record<string, unknown>;

export function organizationSchema(): JsonLdObject {
  return {
    '@type': 'Organization',
    '@id': `${absoluteUrl('/')}#organization`,
    name: BRAND.legalName,
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/brand/logo.svg'),
    },
    sameAs: [...BRAND.social],
    email: BRAND.contactEmail,
  };
}

/**
 * WebSite markup on the homepage tells Google the preferred site name and
 * exposes the internal search endpoint.
 */
export function websiteSchema(locale: Locale, searchPath: string): JsonLdObject {
  return {
    '@type': 'WebSite',
    '@id': `${absoluteUrl('/')}#website`,
    name: BRAND.name,
    alternateName: 'HelloMommy pregnancy',
    url: absoluteUrl(`/${locale}`),
    inLanguage: LOCALE_TAGS[locale],
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl(searchPath)}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]): JsonLdObject {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function articleSchema(input: {
  locale: Locale;
  path: string;
  headline: string;
  description: string;
  image: string;
  publishedAt: string;
  updatedAt: string;
  author?: Author;
  reviewer?: Author;
  sources?: Source[];
  keywords?: string[];
  section?: string;
}): JsonLdObject {
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(input.path)}#article`,
    mainEntityOfPage: absoluteUrl(input.path),
    headline: input.headline,
    description: input.description,
    image: [input.image.startsWith('http') ? input.image : absoluteUrl(input.image)],
    inLanguage: LOCALE_TAGS[input.locale],
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    articleSection: input.section,
    keywords: input.keywords?.join(', '),
    author: input.author
      ? { '@type': 'Organization', name: BRAND.name, url: absoluteUrl('/') }
      : undefined,
    reviewedBy: input.reviewer
      ? { '@type': 'Organization', name: `${BRAND.name} — ${input.reviewer.role}` }
      : undefined,
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    citation: input.sources?.map((source) => ({
      '@type': 'CreativeWork',
      name: source.label,
      publisher: source.publisher,
      url: source.url,
    })),
  };
}

/**
 * FAQPage markup is only emitted where Google still supports rich results —
 * it is limited to authoritative health and government sites, so we mark up
 * the FAQ block for structure but expect no rich result on most pages.
 */
export function faqSchema(items: FaqItem[]): JsonLdObject | null {
  if (items.length === 0) return null;
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function softwareApplicationSchema(app: AppProduct, path: string): JsonLdObject {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${absoluteUrl(path)}#app`,
    name: app.name,
    description: app.description,
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    url: absoluteUrl(path),
    image: absoluteUrl(app.icon.src),
    publisher: { '@id': `${absoluteUrl('/')}#organization` },
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    installUrl: [app.appStoreUrl, app.googlePlayUrl],
  };
}

/** Wraps one or more nodes into a single @graph document. */
export function graph(nodes: (JsonLdObject | null | undefined)[]): string {
  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': nodes.filter(Boolean),
    },
    (_key, value) => (value === undefined ? undefined : value),
  );
}
