import type { MetadataRoute } from 'next';
import { absoluteUrl, isIndexable } from '@/lib/seo/site';

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable()) {
    return { rules: [{ userAgent: '*', disallow: '/' }] };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Internal search results and generated endpoints have no business in the index.
        disallow: ['/api/', '/*/search', '/og'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/').replace(/\/$/, ''),
  };
}
