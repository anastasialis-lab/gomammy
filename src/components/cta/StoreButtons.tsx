'use client';

import { track, withCampaign } from '@/lib/analytics/events';

type Props = {
  appStoreUrl: string;
  googlePlayUrl: string;
  campaign: string;
  /** Becomes `utm_content` — the exact page the click came from. */
  content: string;
  appId: string;
  ctaId?: string;
  appStoreLabel: string;
  googlePlayLabel: string;
  tone?: 'dark' | 'light';
};

function AppleIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.06 7.31c1.35-.07 2.29.74 3.08.74.76 0 2.16-.91 3.64-.78 1.56.13 2.73.74 3.51 1.86-3.22 1.93-2.45 6.18.5 7.37-.59 1.5-1.36 2.98-2.74 3.78ZM12.03 7.25C11.88 5.02 13.69 3.18 15.77 3c.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" aria-hidden>
      <path fill="#00d6b4" d="M3.5 2.4C3.2 2.8 3 3.4 3 4.2v15.6c0 .8.2 1.4.5 1.8L13.8 12 3.5 2.4Z" />
      <path fill="#70d44b" d="m4.3 2.1 12.3 6.9-2.8 3L4.3 2.1Z" />
      <path fill="#4b8df8" d="m4.3 21.9 9.5-9.9 2.8 3-12.3 6.9Z" />
      <path fill="#ffb43b" d="m16.6 9 3.9 2.2c.7.4.7 1.2 0 1.6L16.6 15l-2.8-3 2.8-3Z" />
    </svg>
  );
}

/**
 * Store buttons are the conversion point of the whole funnel, so every click
 * is both tagged with campaign parameters (attribution inside the store) and
 * reported to GA4 (attribution inside the site).
 *
 * These are styled buttons, not Apple/Google badge artwork: swap in the
 * official badges before launch to comply with each store's brand guidelines.
 */
export function StoreButtons({
  appStoreUrl,
  googlePlayUrl,
  campaign,
  content,
  appId,
  ctaId,
  appStoreLabel,
  googlePlayLabel,
  tone = 'dark',
}: Props) {
  // Articles and week pages are editorial placements; everything else (the
  // apps section, the homepage) is site navigation. GA4 and the stores both
  // read this, so the distinction has to be made once, here.
  const medium =
    content.startsWith('article_') || content.startsWith('week_') ? 'article' : 'site';

  const base =
    'inline-flex items-center justify-center gap-3 whitespace-nowrap rounded-full px-5 py-3 text-sm font-medium transition-colors max-sm:w-full';
  const skin =
    tone === 'dark'
      ? 'bg-ink text-ivory hover:bg-rose-700'
      : 'bg-card text-ink border border-line hover:border-ink';

  const onClick = (store: 'app_store' | 'google_play') => {
    track(store === 'app_store' ? 'app_store_click' : 'google_play_click', {
      app_id: appId,
      cta_id: ctaId ?? '',
      cta_location: content,
      campaign,
      medium,
    });
    track('app_cta_click', { app_id: appId, cta_id: ctaId ?? '', cta_location: content });
  };

  return (
    <div className="flex flex-wrap gap-2.5">
      <a
        href={withCampaign(appStoreUrl, { campaign, content, medium })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onClick('app_store')}
        className={`${base} ${skin}`}
      >
        <AppleIcon />
        {appStoreLabel}
      </a>

      <a
        href={withCampaign(googlePlayUrl, { campaign, content, medium })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onClick('google_play')}
        className={`${base} ${skin}`}
      >
        <GooglePlayIcon />
        {googlePlayLabel}
      </a>
    </div>
  );
}
