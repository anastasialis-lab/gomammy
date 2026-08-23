import type { Block, InlineMark } from '@/lib/content/types';

/**
 * Cyrillic → Latin, following the Ukrainian national transliteration standard.
 *
 * Without this, `slugifyHeading` strips Cyrillic entirely and every Ukrainian
 * heading collapses to an empty anchor — which breaks the table of contents and
 * produces duplicate React keys.
 */
const TRANSLITERATE: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', є: 'ie', ж: 'zh',
  з: 'z', и: 'y', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm', н: 'n',
  о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh', ц: 'ts',
  ч: 'ch', ш: 'sh', щ: 'shch', ь: '', ю: 'iu', я: 'ia',
  // Tolerated for pasted text from other Cyrillic orthographies.
  ы: 'y', э: 'e', ъ: '', ё: 'e',
};

function transliterate(text: string): string {
  let out = '';
  for (const char of text) {
    out += TRANSLITERATE[char] ?? char;
  }
  return out;
}

/** Turns a heading into a stable anchor id used by the table of contents. */
export function slugifyHeading(text: string): string {
  const slug = transliterate(text.toLowerCase())
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);

  // A heading in a script we do not transliterate must still get a usable
  // anchor, so fall back to a short hash of the original text.
  if (slug) return slug;
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  return `section-${Math.abs(hash).toString(36)}`;
}

export function h2(text: string): Block {
  return { type: 'heading', level: 2, text, id: slugifyHeading(text) };
}

export function h3(text: string): Block {
  return { type: 'heading', level: 3, text, id: slugifyHeading(text) };
}

export function p(...content: (string | InlineMark)[]): Block {
  return {
    type: 'paragraph',
    content: content.map((item) => (typeof item === 'string' ? { text: item } : item)),
  };
}

export function b(text: string): InlineMark {
  return { text, bold: true };
}

/** Internal link. `href` is locale-relative, e.g. `pregnancy/week-20`. */
export function link(text: string, href: string): InlineMark {
  return { text, href };
}

export function ul(items: (string | InlineMark[])[]): Block {
  return {
    type: 'list',
    style: 'bullet',
    items: items.map((item) => (typeof item === 'string' ? [{ text: item }] : item)),
  };
}

export function ol(items: (string | InlineMark[])[]): Block {
  return {
    type: 'list',
    style: 'number',
    items: items.map((item) => (typeof item === 'string' ? [{ text: item }] : item)),
  };
}

export function callout(tone: 'info' | 'care' | 'warning', title: string, text: string): Block {
  return { type: 'callout', tone, title, text };
}

export function cta(ctaId: string): Block {
  return { type: 'cta', ctaId };
}

/** Rough reading time from the rendered text, at 200 words per minute. */
export function readingMinutes(blocks: Block[], extra = ''): number {
  const text = blocks
    .map((block) => {
      switch (block.type) {
        case 'heading':
          return block.text;
        case 'paragraph':
          return block.content.map((c) => c.text).join(' ');
        case 'list':
          return block.items.map((item) => item.map((c) => c.text).join(' ')).join(' ');
        case 'quote':
          return block.text;
        case 'callout':
          return `${block.title ?? ''} ${block.text}`;
        default:
          return '';
      }
    })
    .join(' ');
  const words = `${text} ${extra}`.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
