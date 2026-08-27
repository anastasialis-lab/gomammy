import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, isLocale, matchLocale } from '@/lib/i18n/config';

const PUBLIC_FILE = /\.[^/]+$/;

/**
 * Every public page lives under `/{locale}/…`. Requests without a locale are
 * redirected — permanently for the bare root so link equity consolidates, and
 * with the reader's `Accept-Language` preference honoured.
 *
 * Language is never switched implicitly on an existing locale URL: Google must
 * see one stable URL per language.
 */
export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname === '/og' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const [, first] = pathname.split('/');
  if (isLocale(first)) return NextResponse.next();

  const preferred = matchLocale(request.headers.get('accept-language'));
  const target = new URL(
    `/${preferred}${pathname === '/' ? '' : pathname}${search}`,
    request.url,
  );

  // A bare `/` always resolves to a language, so make that redirect cacheable.
  return NextResponse.redirect(target, pathname === '/' ? 307 : 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};

export const LOCALE_LIST = LOCALES;
export const FALLBACK_LOCALE = DEFAULT_LOCALE;
