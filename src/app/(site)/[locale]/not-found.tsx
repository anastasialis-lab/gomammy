import Link from 'next/link';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { LinkButton } from '@/components/ui/Button';
import { routes } from '@/lib/routes';
import { BRAND } from '@/content/data/site';

/**
 * Rendered for any unmatched path under a locale. It cannot read params, so it
 * falls back to the default language — the links still lead somewhere useful.
 */
export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <div className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-[2rem] md:text-[2.75rem]">{dict.common.notFoundTitle}</h1>
      <p className="mt-4 max-w-md text-muted">{dict.common.notFoundBody}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <LinkButton href={`/${DEFAULT_LOCALE}`}>{dict.common.backHome}</LinkButton>
        <LinkButton href={routes.search(DEFAULT_LOCALE)} variant="secondary">
          {dict.actions.search}
        </LinkButton>
      </div>
      <p className="mt-10 text-sm text-muted">
        <Link href={`/${DEFAULT_LOCALE}`} className="link-underline">
          {BRAND.name}
        </Link>
      </p>
    </div>
  );
}
