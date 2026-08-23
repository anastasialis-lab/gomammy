import Image from 'next/image';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { CtaBlock } from '@/lib/content/types';
import { findApp } from '@/lib/content/source';
import { resolveHref } from '@/lib/routes';
import { ImpressionTracker } from '@/components/analytics/Trackers';
import { TrackedLink } from '@/components/analytics/TrackedLink';
import { StoreButtons } from './StoreButtons';

type Props = {
  cta: CtaBlock;
  locale: Locale;
  dict: Dictionary;
  /** Page identity used for `utm_content` and `cta_location`, e.g. `week_20`. */
  context: string;
  variant?: 'inline' | 'sidebar';
};

/**
 * One renderer for every promo type the CMS can place. Promo blocks are always
 * visually separated from editorial content — a labelled card, never a
 * paragraph pretending to be advice.
 */
export function CtaView({ cta, locale, dict, context, variant = 'inline' }: Props) {
  const app = cta.appId ? findApp(locale, cta.appId) : undefined;
  const sidebar = variant === 'sidebar';

  if (cta.kind === 'banner' || cta.kind === 'text' || cta.kind === 'related-article') {
    const href = resolveHref(locale, cta.href ?? '/');
    return (
      <aside
        className={`relative overflow-hidden rounded-lg border border-line-soft bg-sage-50 p-6 ${
          sidebar ? '' : 'my-10'
        }`}
      >
        <ImpressionTracker ctaId={cta.trackingId} location={context} />
        {cta.eyebrow ? <span className="eyebrow text-sage-700">{cta.eyebrow}</span> : null}
        <h3 className="mt-1.5 font-serif text-xl">{cta.title}</h3>
        {cta.body ? <p className="mt-2 text-sm text-muted">{cta.body}</p> : null}
        {cta.buttonLabel ? (
          <TrackedLink
            href={href}
            event="app_cta_click"
            params={{ cta_id: cta.trackingId, cta_location: context }}
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-sage-300 bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-sage-600"
          >
            {cta.buttonLabel}
            <span aria-hidden>→</span>
          </TrackedLink>
        ) : null}
        {cta.note ? <p className="mt-3 text-xs text-muted">{cta.note}</p> : null}
      </aside>
    );
  }

  return (
    <aside
      className={`relative overflow-hidden rounded-lg border border-rose-100 bg-rose-50 p-6 ${
        sidebar ? '' : 'my-10 md:p-8'
      }`}
    >
      <ImpressionTracker ctaId={cta.trackingId} appId={cta.appId} location={context} />

      <div className={sidebar ? '' : 'md:flex md:items-center md:gap-8'}>
        {app && !sidebar ? (
          <Image
            src={app.icon.src}
            alt=""
            width={88}
            height={88}
            className="mb-4 rounded-[1.4rem] shadow-[0_10px_30px_-14px_rgba(36,35,33,0.4)] md:mb-0"
          />
        ) : null}

        <div className="flex-1">
          {cta.eyebrow ? <span className="eyebrow">{cta.eyebrow}</span> : null}
          <h3 className={`mt-1.5 font-serif ${sidebar ? 'text-lg' : 'text-xl md:text-2xl'}`}>
            {cta.title}
          </h3>
          {cta.body ? <p className="mt-2 text-sm text-muted">{cta.body}</p> : null}

          {app ? (
            <div className="mt-5">
              <StoreButtons
                appStoreUrl={app.appStoreUrl}
                googlePlayUrl={app.googlePlayUrl}
                campaign={app.campaign}
                content={context}
                appId={app.translationKey}
                ctaId={cta.trackingId}
                appStoreLabel={dict.actions.appStore}
                googlePlayLabel={dict.actions.googlePlay}
              />
              {/* Safety notice travels with the promo, not just the app page. */}
              {cta.note ? <p className="mt-3 text-xs text-muted">{cta.note}</p> : null}
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
