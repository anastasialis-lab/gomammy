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
        // Internal search results and the CMS have no business in the index.
        disallow: ['/api/', '/studio', '/*/search', '/og'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/').replace(/\/$/, ''),
  };
}
