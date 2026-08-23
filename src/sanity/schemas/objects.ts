import { defineArrayMember, defineField, defineType } from 'sanity';

export const seoFields = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: false },
  fields: [
    defineField({
      name: 'title',
      title: 'SEO title',
      type: 'string',
      description: 'Shown in Google. Aim for 50–60 characters.',
      validation: (rule) => rule.required().max(70),
    }),
    defineField({
      name: 'description',
      title: 'Meta description',
      type: 'text',
      rows: 3,
      description: 'Aim for 140–160 characters.',
      validation: (rule) => rule.required().max(200),
    }),
    defineField({ name: 'primaryKeyword', title: 'Primary keyword', type: 'string' }),
    defineField({
      name: 'secondaryKeywords',
      title: 'Secondary keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({ name: 'ogTitle', title: 'Open Graph title', type: 'string' }),
    defineField({ name: 'ogDescription', title: 'Open Graph description', type: 'text', rows: 2 }),
    defineField({ name: 'ogImage', title: 'Open Graph image', type: 'image' }),
    defineField({
      name: 'canonicalOverride',
      title: 'Canonical URL override',
      type: 'url',
      description: 'Only for syndicated content. Leave empty in normal cases.',
    }),
    defineField({
      name: 'noindex',
      title: 'Exclude from search engines',
      type: 'boolean',
      initialValue: false,
    }),
  ],
});

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ item',
  type: 'object',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'answer', type: 'text', rows: 4, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'question' } },
});

export const sourceRef = defineType({
  name: 'sourceRef',
  title: 'Source',
  type: 'object',
  fields: [
    defineField({ name: 'label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'publisher', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'url', type: 'url', validation: (rule) => rule.required() }),
    defineField({ name: 'checkedAt', title: 'Last checked', type: 'date' }),
  ],
  preview: { select: { title: 'label', subtitle: 'publisher' } },
});

export const callout = defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'tone',
      type: 'string',
      options: {
        list: [
          { title: 'Info', value: 'info' },
          { title: 'Care', value: 'care' },
          { title: 'Warning', value: 'warning' },
        ],
        layout: 'radio',
      },
      initialValue: 'info',
    }),
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'text', type: 'text', rows: 3, validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'title', subtitle: 'text' } },
});

export const ctaEmbed = defineType({
  name: 'ctaEmbed',
  title: 'Promo block',
  type: 'object',
  fields: [
    defineField({
      name: 'cta',
      title: 'Which promo block',
      type: 'reference',
      to: [{ type: 'ctaBlock' }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: { select: { title: 'cta.title' } },
});

/** Long-form body: Portable Text plus the custom blocks editors can insert. */
export const articleBody = defineType({
  name: 'articleBody',
  title: 'Body',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Bold', value: 'strong' },
          { title: 'Italic', value: 'em' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'string',
                title: 'URL or internal reference',
                description:
                  'External URL, or an internal shorthand: category:by-week, week:20, app:pregnancy-tracker.',
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [
      { name: 'alt', type: 'string', title: 'Alt text', validation: (rule) => rule.required() },
      { name: 'credit', type: 'string', title: 'Credit' },
    ] }),
    defineArrayMember({ type: 'callout' }),
    defineArrayMember({ type: 'ctaEmbed' }),
  ],
});
