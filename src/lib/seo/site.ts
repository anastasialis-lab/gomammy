import { BRAND } from '@/content/data/site';

/**
 * An environment variable that exists but is empty is the same as unset.
 * Hosting dashboards make it easy to create a variable and leave the value
 * blank, and `??` alone would happily pass that empty string through.
 */
function env(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

/**
 * Canonical origin. Set NEXT_PUBLIC_SITE_URL per environment — canonicals and
 * hreflang must be absolute and must never point at a preview deployment.
 *
 * A bad value falls back to the brand default rather than throwing: every page
 * builds `metadataBase` from this, so one malformed variable would otherwise
 * fail the entire production build.
 */
export function siteUrl(): string {
  const configured =
    env('NEXT_PUBLIC_SITE_URL') ??
    (process.env.VERCEL_ENV === 'production' && env('VERCEL_PROJECT_PRODUCTION_URL')
      ? `https://${env('VERCEL_PROJECT_PRODUCTION_URL')}`
      : undefined) ??
    BRAND.fallbackUrl;

  const normalised = configured.replace(/\/+$/, '');
  try {
    new URL(normalised);
    return normalised;
  } catch {
    return BRAND.fallbackUrl;
  }
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
