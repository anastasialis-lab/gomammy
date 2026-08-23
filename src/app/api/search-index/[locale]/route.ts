import { NextResponse } from 'next/server';
import { LOCALES, isLocale } from '@/lib/i18n/config';
import { buildSearchIndex } from '@/lib/search-index';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return NextResponse.json({ error: 'Unknown locale' }, { status: 404 });
  }

  return NextResponse.json(buildSearchIndex(locale), {
    headers: {
      // The index only changes when content is republished.
      'Cache-Control': 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
