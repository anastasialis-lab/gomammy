@AGENTS.md

# HelloMommy

Multilingual SEO content site (Next.js 16 App Router, Tailwind 4, Sanity).
Read README.md first — the URL architecture and the two-layer week-page content
model are both non-obvious.

Rules that matter:
- Never hard-code a URL segment in a route file. All paths come from
  `src/lib/routes.ts`; slugs are localised content.
- Adding a UI string means adding it to all seven dictionaries — the
  `Dictionary` type in `src/lib/i18n/dictionaries/types.ts` enforces it.
- Adding a week fact token means adding its phrasing to all seven phrase books.
- Adding a locale in a non-Latin script means adding a font pair for it in
  `src/app/(site)/[locale]/layout.tsx`; Fraunces has no Cyrillic.
- Colours and spacing come from the `@theme` tokens in `src/app/globals.css`;
  use the generated utilities (`bg-ivory`, `text-muted`), not raw hex values.
- Analytics must never fire before consent.
