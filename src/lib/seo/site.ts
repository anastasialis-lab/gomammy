import { BRAND } from '@/content/data/site';

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL per environment — canonicals and
 * hreflang must be absolute and must never point at a preview deployment.
 */
export function siteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : undefined) ??
    BRAND.fallbackUrl;
  return raw.replace(/\/$/, '');
}

export function absoluteUrl(path: string): string {
  return `${siteUrl()}${path.startsWith('/') ? path : `/${path}`}`;
}

/** Preview and staging deployments must never be indexed. */
export function isIndexable(): boolean {
  if (process.env.NEXT_PUBLIC_ALLOW_INDEXING === 'true') return true;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') return false;
  return process.env.NODE_ENV === 'production';
}
