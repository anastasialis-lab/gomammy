import type { SchemaTypeDefinition } from 'sanity';
import { articleBody, callout, ctaEmbed, faqItem, seoFields, sourceRef } from './objects';
import {
  appProduct,
  article,
  author,
  category,
  ctaBlock,
  legalPage,
  siteSettings,
  tag,
  weekOverride,
} from './documents';

export const schemaTypes: SchemaTypeDefinition[] = [
  // Objects
  seoFields,
  faqItem,
  sourceRef,
  callout,
  ctaEmbed,
  articleBody,
  // Documents
  siteSettings,
  category,
  tag,
  author,
  article,
  appProduct,
  ctaBlock,
  legalPage,
  weekOverride,
];
