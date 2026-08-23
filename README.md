# HelloMommy

A multilingual, SEO-first content site for expectant mothers, built to funnel
organic search traffic into the brand's mobile apps.

```
Google → article / week page → engagement → CTA → App Store / Google Play
```

Seven languages (EN, DE, IT, ES, PT, FR, UK), a page for every week of
pregnancy, an editorial article system, a CMS, and analytics wired end to end.

---

## Quick start

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs with no external services configured: content comes from the
typed seed data in `src/content`, and analytics stays off until a GA4 ID is set.

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build` | Pull CMS content, then build (439 static pages) |
| `npm run build:seed` | Build without touching the CMS |
| `npm run content:pull` | Refresh `src/content/generated` from Sanity |
| `npm run lint` / `npm run typecheck` | ESLint / TypeScript |

## URL architecture

Every page has one indexable URL per language, with a localised slug:

```
/en/pregnancy-by-week/week-20
/de/schwangerschaftswochen/woche-20
/fr/grossesse-semaine-par-semaine/semaine-20
/uk/vahitnist-po-tyzhniakh/tyzhden-20
```

- `/` redirects to the reader's `Accept-Language` match (307), other
  locale-less paths redirect permanently (308). Language is never swapped on an
  existing locale URL — Google must see one stable URL per language.
- All content routing goes through `resolveRoute()` in `src/lib/routes.ts`, so
  slugs live in the content layer and no route file hard-codes English.
- `alternatesFor()` produces the hreflang cluster used by both `<head>` and the
  sitemap, including `x-default`. Languages without a translation are omitted
  rather than pointed at a 404.

## Content model

| Source | Where |
| --- | --- |
| Categories, tags, authors, apps, CTAs, legal pages | `src/content/data` |
| Articles, per language | `src/content/data/articles/{locale}.ts` |
| Week 1–40 facts (language-independent) | `src/content/weeks/facts.ts` |
| Week phrasing, per language | `src/content/weeks/phrasebook/{locale}.ts` |
| Anything published in the CMS | `src/content/generated` (generated) |

### Why the week pages work the way they do

The 280 week pages (40 × 7) are composed from two layers: reviewed medical
facts that exist once, and a phrase book per language holding ~275 authored
sentences. A week page is assembled from the facts using that language's own
phrasing, so every locale reads natively instead of being a translation of an
English master — and a medical correction is made in one place for all seven
languages.

Measurements go through `Intl.NumberFormat` with unit styles, so Ukrainian
renders "25,6 см" and English "25.6 cm" from the same number.

Heading anchors are transliterated (`slugifyHeading` in
`src/content/data/articles/helpers.ts`, mirrored in the pull script), so
Ukrainian headings get real anchor ids instead of collapsing to empty strings.
Adding another non-Latin script means extending that map.

### Articles

Each language version of an article is written independently — its own slug,
SEO title, sources and body. `translationKey` is what links them together for
hreflang, so a language can be published on its own schedule.

## CMS

The Sanity Studio is embedded at `/studio` (its own root layout, `noindex`).
Schemas live in `src/sanity/schemas`.

1. Create a project at sanity.io, put the ID in `NEXT_PUBLIC_SANITY_PROJECT_ID`.
2. Open `/studio` and add content. Documents carry a `locale` and a
   `translationKey`; matching keys across languages become hreflang siblings.
3. `npm run content:pull` writes everything published into
   `src/content/generated/index.ts`, which the site imports statically.
4. Deploy on a Sanity webhook to publish.

Content is pulled at build time rather than fetched per request so every page
stays static HTML — that is what keeps LCP low on the mobile traffic this site
is built for. Anything not yet in the CMS falls back to the committed seed
content, so a failed pull can never blank the site.

An editor can set, per article: SEO title, meta description, slug, H1, OG
fields, canonical override, noindex, primary and secondary keywords, image alt
text, FAQ, sources, internal links, related articles and CTA placements.

## Analytics

GA4 with Consent Mode v2. **No request reaches Google before consent** — the
tag is injected only once the reader accepts analytics cookies, while the
denied-by-default consent signals are set in `<head>` before anything else runs.

Custom events (`src/lib/analytics/events.ts`):

`article_view` · `article_scroll_50` · `article_scroll_90` · `week_view` ·
`app_cta_view` · `app_cta_click` · `app_store_click` · `google_play_click` ·
`related_article_click` · `outbound_click` · `language_switch` ·
`site_search` · `toc_click`

Every store link is tagged so an install can be traced to the page that
produced it — and each store is tagged the way that store actually reads:

```
Play  …?utm_source=website&utm_medium=article&utm_campaign=bubbi&utm_content=week_20
Apple …?ct=week_20&mt=8
```

Apple ignores `utm_*` entirely; App Store Connect reads the campaign token
`ct` (40 chars max), optionally paired with a provider token in
`NEXT_PUBLIC_APPLE_PROVIDER_TOKEN`. Sending UTM to Apple is the usual reason
iOS acquisition looks like it came from nowhere.

Together with the GA4 events this gives the full funnel per article:
impressions → CTA views → store clicks → installs.

**Setup guide:** [`docs/setup-uk.md`](docs/setup-uk.md) — deploying, GA4,
Search Console and store attribution, step by step (Ukrainian).

## Cookies and privacy

Four categories (necessary, analytics, marketing, preferences), accept /
reject-non-essential / per-category, changeable at any time from the footer.
The choice is stored in a first-party `gm_consent` cookie for six months with
the timestamp GDPR requires.

## SEO checklist

- Per-page title, meta description, canonical, OG and Twitter tags
- hreflang cluster + `x-default` on every page, in `<head>` and the sitemap
- `sitemap.xml` generated from the content layer (390 indexable URLs)
- `robots.txt`; non-production environments are `noindex` automatically
- JSON-LD: `Organization`, `WebSite` (with `SearchAction`), `BreadcrumbList`,
  `Article`, `FAQPage`, `SoftwareApplication`
- Generated Open Graph images at `/og` — every page shares with its own title

## Design

Tokens are defined once in `src/app/globals.css` under `@theme`, which is what
generates the Tailwind utilities used throughout (`bg-ivory`, `text-muted`,
`border-line`, `bg-rose-600`, …). Ivory ground, dusty-rose accent, muted sage
secondary, all self-hosted by `next/font`.

Fonts are chosen per locale in the layout: Fraunces + Manrope for the Latin
languages, and Playfair Display + Manrope (Cyrillic subset) for Ukrainian,
because Fraunces has no Cyrillic cut. Latin readers never download Cyrillic
glyphs.

## Known gaps before launch

- **Article and category imagery** is generated SVG placeholder art. Replace
  with commissioned lifestyle photography. The Bubbi app icon and screenshots
  are real, pulled from the App Store listing.
- **Store buttons** are styled, not the official Apple/Google badge artwork —
  swap them before launch to comply with each store's brand guidelines.
- **Legal pages** are authored in English only; the other six languages show a
  localised notice and are `noindex` until a lawyer-reviewed translation is
  added. Do not machine-translate a privacy policy.
- **Authors and reviewers** are institutional placeholders. Health content
  needs named, real people before launch — this is what Google evaluates as
  E-E-A-T on medical topics.
- Search is client-side over a ~61-document index per language; swap for
  semantic search once the article count justifies it.
