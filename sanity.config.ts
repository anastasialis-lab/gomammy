'use client';

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { LOCALES, LOCALE_NAMES } from './src/lib/i18n/config';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2026-01-01';

export default defineConfig({
  name: 'gomammy',
  title: 'GoMammy CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      // Editors think in languages first, so the desk is grouped that way.
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Articles by language')
              .child(
                S.list()
                  .title('Language')
                  .items(
                    LOCALES.map((locale) =>
                      S.listItem()
                        .title(LOCALE_NAMES[locale])
                        .id(locale)
                        .child(
                          S.documentList()
                            .title(`Articles — ${LOCALE_NAMES[locale]}`)
                            .filter('_type == "article" && locale == $locale')
                            .params({ locale }),
                        ),
                    ),
                  ),
              ),
            S.divider(),
            S.documentTypeListItem('category').title('Categories'),
            S.documentTypeListItem('tag').title('Tags'),
            S.documentTypeListItem('author').title('Authors & reviewers'),
            S.documentTypeListItem('appProduct').title('Apps'),
            S.documentTypeListItem('ctaBlock').title('Promo blocks'),
            S.documentTypeListItem('weekOverride').title('Week overrides'),
            S.documentTypeListItem('legalPage').title('Legal pages'),
            S.divider(),
            S.documentTypeListItem('siteSettings').title('Site settings'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
