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
    'inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-medium transition-colors';
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
        <svg width="15" height="18" viewBox="0 0 15 18" aria-hidden fill="currentColor">
          <path d="M12.3 9.5c0-2 1.6-3 1.7-3-.9-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7C4.2 4.9 3 5.7 2.3 7c-1.3 2.3-.3 5.7 1 7.5.6.9 1.4 1.9 2.4 1.9.9 0 1.3-.6 2.4-.6s1.4.6 2.4.6 1.7-.9 2.3-1.8c.7-1 1-2 1-2.1 0 0-2-.8-2-3zM10.4 3.6c.5-.6.9-1.5.8-2.4-.8 0-1.7.5-2.2 1.2-.5.6-.9 1.5-.8 2.4.8.1 1.7-.5 2.2-1.2z" />
        </svg>
        {appStoreLabel}
      </a>

      <a
        href={withCampaign(googlePlayUrl, { campaign, content, medium })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => onClick('google_play')}
        className={`${base} ${skin}`}
      >
        <svg width="16" height="18" viewBox="0 0 16 18" aria-hidden fill="currentColor">
          <path d="M1.3.6C1.1.8 1 1.1 1 1.6v14.8c0 .5.1.8.3 1l.1.1 8.3-8.3v-.2L1.4.5l-.1.1zM12.6 6.2l-2.5-1.4-2 2 2 2 2.5-1.4c.7-.4.7-1 0-1.2zM9.6 5.5L1.9.7l7.7 7.7 2-2-2-.9zM1.9 17.3l7.7-4.4-2-2-7.7 7.7c.2.1.4.1.7-.3l1.3-1z" />
        </svg>
        {googlePlayLabel}
      </a>
    </div>
  );
}
