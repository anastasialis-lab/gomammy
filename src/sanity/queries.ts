/**
 * GROQ used by `npm run content:pull`. Everything is projected into the shape
 * the site's own content types expect, so the mapping layer stays thin.
 */

const IMAGE = `{ "ref": asset._ref, "url": asset->url, alt, credit, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height }`;

const SEO = `{
  title, description, primaryKeyword, secondaryKeywords,
  ogTitle, ogDescription, "ogImage": ogImage${IMAGE},
  canonicalOverride, noindex
}`;

const BODY = `body[]{
  ...,
  _type == "ctaEmbed" => { "ctaId": cta->ctaId },
  _type == "image" => ${IMAGE},
  markDefs[]{...}
}`;

export const CATEGORIES_QUERY = `*[_type == "category"] | order(order asc) {
  locale, translationKey, "slug": slug.current, title, navLabel,
  heroTitle, heroIntro, description, order, isWeekIndex,
  "featuredImage": featuredImage${IMAGE},
  seo${SEO}
}`;

export const CTAS_QUERY = `*[_type == "ctaBlock"] {
  locale, "id": ctaId, kind, trackingId, eyebrow, title, body, buttonLabel, href,
  "appId": app->translationKey,
  "image": image${IMAGE}
}`;

export const APPS_QUERY = `*[_type == "appProduct"] {
  locale, translationKey, "slug": slug.current, name, tagline, description,
  "icon": icon${IMAGE},
  "screenshots": screenshots[]${IMAGE},
  features[]{ title, body },
  appStoreUrl, googlePlayUrl, campaign,
  seo${SEO}
}`;

export const ARTICLES_QUERY = `*[_type == "article" && status == "published"] | order(publishedAt desc) {
  locale, translationKey, "slug": slug.current, title, heading, excerpt, intro,
  "categoryKey": category->translationKey,
  "tagKeys": tags[]->translationKey,
  "heroImage": heroImage${IMAGE},
  "authorId": author->authorId,
  "reviewerId": reviewer->authorId,
  publishedAt, updatedAt, status, featured,
  ${BODY},
  faq[]{ question, answer },
  sources[]{ label, publisher, url, checkedAt },
  "ctas": ctas[]{ placement, "ctaId": cta->ctaId },
  "relatedKeys": related[]->translationKey,
  seo${SEO}
}`;

export const LEGAL_QUERY = `*[_type == "legalPage"] {
  locale, translationKey, "slug": slug.current, title, updatedAt,
  ${BODY},
  seo${SEO}
}`;
