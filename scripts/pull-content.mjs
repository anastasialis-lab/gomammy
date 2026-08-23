#!/usr/bin/env node
/**
 * Pulls published content out of Sanity and writes it into
 * `src/content/generated/index.ts`, which the site imports statically.
 *
 * Run it in CI before `next build`. With no Sanity project configured it exits
 * cleanly and leaves the committed seed content in place, so a missing token
 * can never blank the site.
 */
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(here, '../src/content/generated/index.ts');

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-01-01';

if (!projectId) {
  console.log('[content:pull] No NEXT_PUBLIC_SANITY_PROJECT_ID — keeping seed content.');
  process.exit(0);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = imageUrlBuilder({ projectId, dataset });

const {
  CATEGORIES_QUERY,
  CTAS_QUERY,
  APPS_QUERY,
  ARTICLES_QUERY,
  LEGAL_QUERY,
} = await import('../src/sanity/queries.ts').catch(async () => {
  // The queries file is TypeScript; when run without a loader, read it as text.
  const { readFileSync } = await import('node:fs');
  const source = readFileSync(resolve(here, '../src/sanity/queries.ts'), 'utf8');
  const exported = {};
  for (const match of source.matchAll(/export const (\w+) = `([\s\S]*?)`;/g)) {
    exported[match[1]] = match[2];
  }
  return exported;
});

/** Keep in sync with src/content/data/articles/helpers.ts. */
const TRANSLITERATE = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh',
  з: 'z', и: 'y', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n',
  о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
  ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'iu', я: 'ia',
  ы: 'y', э: 'e', ъ: '', ё: 'e',
};

function slugifyHeading(text) {
  const slug = [...text.toLowerCase()]
    .map((char) => TRANSLITERATE[char] ?? char)
    .join('')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

  if (slug) return slug;
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return `section-${Math.abs(hash).toString(36)}`;
}

function image(node, fallbackAlt = '') {
  if (!node) return undefined;
  const src = node.ref
    ? builder.image(node.ref).width(1600).fit('max').auto('format').url()
    : node.url;
  return {
    src,
    alt: node.alt ?? fallbackAlt,
    width: node.width ?? 1600,
    height: node.height ?? 900,
    credit: node.credit ?? undefined,
  };
}

function inline(children = [], markDefs = []) {
  return children.map((child) => {
    const marks = child.marks ?? [];
    const link = marks
      .map((mark) => markDefs.find((def) => def._key === mark))
      .find((def) => def && def._type === 'link');
    return {
      text: child.text ?? '',
      bold: marks.includes('strong') || undefined,
      italic: marks.includes('em') || undefined,
      href: link?.href,
    };
  });
}

/** Portable Text → the site's own Block union. */
function toBlocks(portable = []) {
  const blocks = [];
  let list = null;

  const flush = () => {
    if (list) blocks.push(list);
    list = null;
  };

  for (const node of portable) {
    if (node._type === 'block') {
      if (node.listItem) {
        const style = node.listItem === 'number' ? 'number' : 'bullet';
        if (!list || list.style !== style) {
          flush();
          list = { type: 'list', style, items: [] };
        }
        list.items.push(inline(node.children, node.markDefs));
        continue;
      }
      flush();

      const text = (node.children ?? []).map((child) => child.text ?? '').join('');
      if (node.style === 'h2' || node.style === 'h3') {
        blocks.push({
          type: 'heading',
          level: node.style === 'h2' ? 2 : 3,
          text,
          id: slugifyHeading(text),
        });
      } else if (node.style === 'blockquote') {
        blocks.push({ type: 'quote', text });
      } else {
        blocks.push({ type: 'paragraph', content: inline(node.children, node.markDefs) });
      }
      continue;
    }

    flush();
    if (node._type === 'callout') {
      blocks.push({
        type: 'callout',
        tone: node.tone ?? 'info',
        title: node.title,
        text: node.text ?? '',
      });
    } else if (node._type === 'ctaEmbed' && node.ctaId) {
      blocks.push({ type: 'cta', ctaId: node.ctaId });
    } else if (node._type === 'image') {
      const asset = image(node);
      if (asset) blocks.push({ type: 'image', image: asset });
    }
  }

  flush();
  return blocks;
}

function groupByLocale(rows, map) {
  const grouped = {};
  for (const row of rows) {
    if (!row.locale) continue;
    (grouped[row.locale] ??= []).push(map(row));
  }
  return grouped;
}

const [categories, ctas, apps, articles, legal] = await Promise.all([
  client.fetch(CATEGORIES_QUERY),
  client.fetch(CTAS_QUERY),
  client.fetch(APPS_QUERY),
  client.fetch(ARTICLES_QUERY),
  client.fetch(LEGAL_QUERY),
]);

const payload = {
  generatedAt: new Date().toISOString(),
  categories: groupByLocale(categories, (row) => ({
    ...row,
    navLabel: row.navLabel ?? row.title,
    order: row.order ?? 0,
    featuredImage: image(row.featuredImage, row.title),
    seo: { ...row.seo, ogImage: image(row.seo?.ogImage) },
  })),
  ctas: groupByLocale(ctas, (row) => ({ ...row, image: image(row.image) })),
  apps: groupByLocale(apps, (row) => ({
    ...row,
    icon: image(row.icon, row.name),
    screenshots: (row.screenshots ?? []).map((shot) => image(shot, row.name)),
    features: row.features ?? [],
    relatedArticleKeys: [],
    seo: { ...row.seo, ogImage: image(row.seo?.ogImage) },
  })),
  articles: groupByLocale(articles, (row) => ({
    ...row,
    tagKeys: row.tagKeys ?? [],
    heroImage: image(row.heroImage, row.title),
    publishedAt: (row.publishedAt ?? '').slice(0, 10),
    updatedAt: (row.updatedAt ?? row.publishedAt ?? '').slice(0, 10),
    blocks: toBlocks(row.body),
    body: undefined,
    faq: row.faq ?? [],
    sources: row.sources ?? [],
    ctas: (row.ctas ?? []).filter((entry) => entry.ctaId),
    relatedKeys: row.relatedKeys ?? [],
    seo: { ...row.seo, ogImage: image(row.seo?.ogImage) },
  })),
  legal: groupByLocale(legal, (row) => ({
    ...row,
    updatedAt: (row.updatedAt ?? '').slice(0, 10),
    blocks: toBlocks(row.body),
    body: undefined,
    seo: { ...row.seo, ogImage: image(row.seo?.ogImage) },
  })),
};

const header = `import type { Locale } from '@/lib/i18n/config';
import type { AppProduct, Article, Category, CtaBlock, LegalPage } from '@/lib/content/types';

/**
 * GENERATED FILE — do not edit by hand.
 * Written by \`npm run content:pull\` from the Sanity dataset "${dataset}".
 */
export type GeneratedContent = {
  generatedAt: string;
  articles: Partial<Record<Locale, Article[]>>;
  categories: Partial<Record<Locale, Category[]>>;
  ctas: Partial<Record<Locale, CtaBlock[]>>;
  apps: Partial<Record<Locale, AppProduct[]>>;
  legal: Partial<Record<Locale, LegalPage[]>>;
};

export const GENERATED: GeneratedContent = ${JSON.stringify(payload, null, 2)} as unknown as GeneratedContent;

export function generatedFor<K extends keyof Omit<GeneratedContent, 'generatedAt'>>(
  kind: K,
  locale: Locale,
): NonNullable<GeneratedContent[K][Locale]> | null {
  const bucket = GENERATED[kind][locale];
  return bucket && bucket.length > 0
    ? (bucket as NonNullable<GeneratedContent[K][Locale]>)
    : null;
}
`;

writeFileSync(OUT, header);

const counts = Object.entries(payload)
  .filter(([key]) => key !== 'generatedAt')
  .map(([key, value]) => `${key}: ${Object.values(value).flat().length}`)
  .join(', ');
console.log(`[content:pull] Wrote ${OUT} (${counts})`);
