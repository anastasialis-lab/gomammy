import { defineField, defineType } from 'sanity';
import { LOCALES, LOCALE_NAMES } from '@/lib/i18n/config';

const localeOptions = LOCALES.map((locale) => ({
  title: `${LOCALE_NAMES[locale]} (${locale})`,
  value: locale,
}));

/**
 * One document per language, tied together by `translationKey`.
 *
 * This is deliberate: it keeps every field — including the slug, the SEO title
 * and the body — genuinely per-language instead of forcing translators into a
 * field-level mirror of the English text, and it lets a language be published
 * on its own schedule.
 */
const localeField = defineField({
  name: 'locale',
  title: 'Language',
  type: 'string',
  options: { list: localeOptions, layout: 'dropdown' },
  validation: (rule) => rule.required(),
});

const translationKeyField = defineField({
  name: 'translationKey',
  title: 'Translation key',
  type: 'string',
  description:
    'Identical across all languages of the same page. This is what links translations together for hreflang.',
  validation: (rule) => rule.required(),
});

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    localeField,
    translationKeyField,
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 60 },
      description: 'Lowercase, words separated by hyphens. Localised.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'navLabel', title: 'Navigation label', type: 'string' }),
    defineField({ name: 'heroTitle', type: 'string' }),
    defineField({ name: 'heroIntro', type: 'text', rows: 3 }),
    defineField({ name: 'description', type: 'text', rows: 2 }),
    defineField({ name: 'featuredImage', type: 'image' }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
    defineField({
      name: 'isWeekIndex',
      title: 'Is the pregnancy-by-week index',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'title', subtitle: 'locale' } },
});

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  fields: [
    localeField,
    translationKeyField,
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
  ],
  preview: { select: { title: 'title', subtitle: 'locale' } },
});

export const author = defineType({
  name: 'author',
  title: 'Author / reviewer',
  type: 'document',
  fields: [
    localeField,
    defineField({ name: 'authorId', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'role',
      type: 'string',
      description: 'Shown on the article, e.g. “Midwife, RM” or “Editorial team”.',
    }),
    defineField({ name: 'bio', type: 'text', rows: 3 }),
    defineField({ name: 'avatar', type: 'image' }),
    defineField({ name: 'url', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role' } },
});

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Promo block',
  type: 'document',
  description: 'Reusable CTA and advertising blocks placed inside articles.',
  fields: [
    localeField,
    defineField({ name: 'ctaId', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'kind',
      type: 'string',
      options: {
        list: [
          { title: 'App — both stores', value: 'app-both' },
          { title: 'App — iOS only', value: 'app-ios' },
          { title: 'App — Android only', value: 'app-android' },
          { title: 'Banner', value: 'banner' },
          { title: 'Text promo', value: 'text' },
          { title: 'Recommended article', value: 'related-article' },
          { title: 'Recommended product', value: 'product' },
        ],
      },
      initialValue: 'app-both',
    }),
    defineField({
      name: 'trackingId',
      type: 'string',
      description: 'Reported to GA4 as cta_id. Use lowercase with underscores.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'eyebrow', type: 'string' }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'body', type: 'text', rows: 2 }),
    defineField({ name: 'buttonLabel', type: 'string' }),
    defineField({
      name: 'href',
      type: 'string',
      description: 'For banner/text blocks: URL or shorthand such as category:by-week.',
    }),
    defineField({ name: 'app', type: 'reference', to: [{ type: 'appProduct' }] }),
    defineField({ name: 'image', type: 'image' }),
  ],
  preview: { select: { title: 'title', subtitle: 'locale' } },
});

export const appProduct = defineType({
  name: 'appProduct',
  title: 'App',
  type: 'document',
  fields: [
    localeField,
    translationKeyField,
    defineField({ name: 'slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'name', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', type: 'image' }),
    defineField({ name: 'screenshots', type: 'array', of: [{ type: 'image' }] }),
    defineField({
      name: 'features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'body', type: 'text', rows: 2 },
          ],
        },
      ],
    }),
    defineField({ name: 'appStoreUrl', type: 'url' }),
    defineField({ name: 'googlePlayUrl', type: 'url' }),
    defineField({
      name: 'campaign',
      type: 'string',
      description: 'utm_campaign value for every store link pointing at this app.',
    }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'name', subtitle: 'locale' } },
});

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    localeField,
    translationKeyField,
    defineField({
      name: 'status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Scheduled', value: 'scheduled' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 70 },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({
      name: 'heading',
      title: 'H1 (if different from the title)',
      type: 'string',
    }),
    defineField({ name: 'excerpt', type: 'text', rows: 2, validation: (rule) => rule.required() }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'tags', type: 'array', of: [{ type: 'reference', to: [{ type: 'tag' }] }] }),
    defineField({
      name: 'heroImage',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', validation: (rule) => rule.required() }],
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'author', type: 'reference', to: [{ type: 'author' }] }),
    defineField({ name: 'reviewer', type: 'reference', to: [{ type: 'author' }] }),
    defineField({
      name: 'publishedAt',
      title: 'Publication date',
      type: 'datetime',
      description: 'A future date with status “Scheduled” publishes at the next build after it.',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'updatedAt', title: 'Last updated', type: 'datetime' }),
    defineField({ name: 'body', type: 'articleBody' }),
    defineField({ name: 'faq', type: 'array', of: [{ type: 'faqItem' }] }),
    defineField({ name: 'sources', type: 'array', of: [{ type: 'sourceRef' }] }),
    defineField({
      name: 'ctas',
      title: 'Promo placements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'placement',
              type: 'string',
              options: {
                list: [
                  'after-intro',
                  'mid-article',
                  'after-content',
                  'before-faq',
                  'end',
                  'sidebar',
                ],
              },
            },
            { name: 'cta', type: 'reference', to: [{ type: 'ctaBlock' }] },
          ],
          preview: { select: { title: 'placement', subtitle: 'cta.title' } },
        },
      ],
    }),
    defineField({
      name: 'related',
      title: 'Related articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    }),
    defineField({ name: 'featured', type: 'boolean', initialValue: false }),
    defineField({ name: 'seo', type: 'seo', validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'locale', media: 'heroImage' } },
});

export const legalPage = defineType({
  name: 'legalPage',
  title: 'Legal / company page',
  type: 'document',
  fields: [
    localeField,
    translationKeyField,
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'updatedAt', type: 'date' }),
    defineField({ name: 'body', type: 'articleBody' }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'title', subtitle: 'locale' } },
});

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    localeField,
    defineField({ name: 'siteName', type: 'string' }),
    defineField({ name: 'siteDescription', type: 'text', rows: 2 }),
    defineField({ name: 'logo', type: 'image' }),
    defineField({ name: 'social', type: 'array', of: [{ type: 'url' }] }),
  ],
  preview: { select: { title: 'siteName', subtitle: 'locale' } },
});

/**
 * Optional per-week editorial overrides. The 40 week pages are generated from
 * reviewed data, so the CMS only needs to override what an editor wants to say
 * differently — not re-enter every week by hand.
 */
export const weekOverride = defineType({
  name: 'weekOverride',
  title: 'Week page override',
  type: 'document',
  fields: [
    localeField,
    defineField({
      name: 'week',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(40),
    }),
    defineField({ name: 'intro', type: 'text', rows: 4 }),
    defineField({ name: 'extraBody', title: 'Extra section', type: 'articleBody' }),
    defineField({ name: 'faq', type: 'array', of: [{ type: 'faqItem' }] }),
    defineField({ name: 'seo', type: 'seo' }),
  ],
  preview: { select: { title: 'week', subtitle: 'locale' } },
});
