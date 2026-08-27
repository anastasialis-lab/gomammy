import type { Locale } from "@/lib/i18n/config";

/* ------------------------------------------------------------------ */
/* Shared primitives                                                   */
/* ------------------------------------------------------------------ */

export interface ImageAsset {
  /** Absolute path under /public, or a full CDN URL when served from Sanity. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Short credit line rendered under the image when present. */
  credit?: string;
}

export interface SeoFields {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: ImageAsset;
  /** Overrides the computed canonical. Use only for syndicated/duplicated pages. */
  canonicalOverride?: string;
  noindex?: boolean;
  primaryKeyword?: string;
  secondaryKeywords?: string[];
}

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: ImageAsset;
  url?: string;
}

export interface Source {
  label: string;
  publisher: string;
  url: string;
  /** ISO date the source was last checked by the editorial team. */
  checkedAt?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/* ------------------------------------------------------------------ */
/* Article body blocks                                                 */
/* ------------------------------------------------------------------ */

export type InlineMark = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  href?: string;
};

export type Block =
  | { type: "heading"; level: 2 | 3; text: string; id: string }
  | { type: "paragraph"; content: InlineMark[] }
  | { type: "list"; style: "bullet" | "number"; items: InlineMark[][] }
  | { type: "quote"; text: string; attribution?: string }
  | {
      type: "callout";
      tone: "info" | "care" | "warning";
      title?: string;
      text: string;
    }
  | { type: "image"; image: ImageAsset }
  | { type: "cta"; ctaId: string };

/* ------------------------------------------------------------------ */
/* CTA / promo blocks                                                  */
/* ------------------------------------------------------------------ */

export type CtaKind =
  | "app-ios"
  | "app-android"
  | "app-both"
  | "banner"
  | "text"
  | "related-article"
  | "product";

export type CtaPlacement =
  | "after-intro"
  | "mid-article"
  | "after-content"
  | "before-faq"
  | "end"
  | "sidebar";

export interface CtaBlock {
  id: string;
  locale: Locale;
  kind: CtaKind;
  /** Analytics label — becomes `cta_id` on `app_cta_view` / `app_cta_click`. */
  trackingId: string;
  eyebrow?: string;
  title: string;
  body?: string;
  buttonLabel?: string;
  /** Small print under the buttons — safety notices, pricing, availability. */
  note?: string;
  /** Internal path (locale-relative) or absolute URL for banner/text/product CTAs. */
  href?: string;
  /** Links the CTA to an app so store buttons and campaign params can be built. */
  appId?: string;
  image?: ImageAsset;
}

/** Placement rules resolved per article; the CMS controls the order. */
export interface CtaSlot {
  placement: CtaPlacement;
  ctaId: string;
}

/* ------------------------------------------------------------------ */
/* Taxonomy                                                            */
/* ------------------------------------------------------------------ */

/** Stable identity shared by all language versions of the same entity. */
export type TranslationKey = string;

export interface Category {
  translationKey: TranslationKey;
  locale: Locale;
  /** Localised, lowercase, hyphenated. First URL segment after the locale. */
  slug: string;
  title: string;
  /** Short label used in the main navigation. */
  navLabel: string;
  heroTitle: string;
  heroIntro: string;
  description: string;
  seo: SeoFields;
  order: number;
  /** Marks the category whose children are the 40 pregnancy-week pages. */
  isWeekIndex?: boolean;
  featuredImage?: ImageAsset;
}

export interface Tag {
  translationKey: TranslationKey;
  locale: Locale;
  slug: string;
  title: string;
}

/* ------------------------------------------------------------------ */
/* Articles                                                            */
/* ------------------------------------------------------------------ */

export type ArticleStatus = "draft" | "scheduled" | "published";

export interface Article {
  translationKey: TranslationKey;
  locale: Locale;
  slug: string;
  categoryKey: TranslationKey;
  title: string;
  /** H1 when it needs to differ from the SEO title. */
  heading?: string;
  excerpt: string;
  heroImage: ImageAsset;
  authorId: string;
  reviewerId?: string;
  publishedAt: string;
  updatedAt: string;
  status: ArticleStatus;
  tagKeys: TranslationKey[];
  intro: string;
  blocks: Block[];
  faq: FaqItem[];
  sources: Source[];
  seo: SeoFields;
  ctas: CtaSlot[];
  /** Manual internal links; automatic ones are derived from category + tags. */
  relatedKeys: TranslationKey[];
  featured?: boolean;
}

/* ------------------------------------------------------------------ */
/* Pregnancy weeks                                                     */
/* ------------------------------------------------------------------ */

/**
 * Language-independent facts for one week. Everything a reader sees is rendered
 * from these tokens through the per-locale phrase book, so each language reads
 * naturally instead of being a machine translation of English.
 */
export interface WeekFacts {
  week: number;
  trimester: 1 | 2 | 3;
  /** Phrase-book key for the size comparison, e.g. `poppy_seed`. */
  sizeKey: string;
  /** Crown-rump length up to week 20, then crown-heel. Null before week 5. */
  lengthCm: number | null;
  weightG: number | null;
  developmentKeys: string[];
  bodyKeys: string[];
  symptomKeys: string[];
  tipKeys: string[];
  milestoneKey?: string;
  /** Shared generated size-comparison image stored in Sanity. */
  image?: ImageAsset;
}

export interface WeekPage {
  locale: Locale;
  week: number;
  slug: string;
  title: string;
  intro: string;
  facts: WeekFacts;
  sizeLabel: string;
  /** Localised landmark callout for selected weeks. */
  milestone?: string;
  development: string[];
  body: string[];
  symptoms: string[];
  tips: string[];
  expect: string;
  faq: FaqItem[];
  seo: SeoFields;
}

/* ------------------------------------------------------------------ */
/* Apps                                                                */
/* ------------------------------------------------------------------ */

export interface AppProduct {
  translationKey: TranslationKey;
  locale: Locale;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: ImageAsset;
  screenshots: ImageAsset[];
  features: { title: string; body: string }[];
  appStoreUrl: string;
  googlePlayUrl: string;
  /** Used as `utm_campaign` on every outbound store link. */
  campaign: string;
  /**
   * Regulatory notice shown wherever the app is promoted. Required for
   * anything pregnancy-adjacent that is not a certified medical device.
   */
  disclaimer?: string;
  relatedArticleKeys: TranslationKey[];
  seo: SeoFields;
}

/* ------------------------------------------------------------------ */
/* Site settings                                                       */
/* ------------------------------------------------------------------ */

export interface LegalPage {
  translationKey: TranslationKey;
  locale: Locale;
  slug: string;
  title: string;
  updatedAt: string;
  blocks: Block[];
  seo: SeoFields;
}

export interface SiteSettings {
  locale: Locale;
  siteName: string;
  siteDescription: string;
  organizationName: string;
  logo: ImageAsset;
  social: string[];
}
