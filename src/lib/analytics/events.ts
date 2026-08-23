/**
 * GA4 event layer.
 *
 * Nothing is sent until the reader accepts analytics cookies: `gtag` is only
 * defined once the loader has injected it. Calls made before that are dropped
 * on purpose rather than queued, so a rejected consent never leaks a hit.
 */

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | 'article_view'
  | 'article_scroll_50'
  | 'article_scroll_90'
  | 'week_view'
  | 'app_cta_view'
  | 'app_cta_click'
  | 'app_store_click'
  | 'google_play_click'
  | 'related_article_click'
  | 'outbound_click'
  | 'language_switch'
  | 'site_search'
  | 'toc_click';

export function track(event: AnalyticsEvent, params: GtagParams = {}): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const clean = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== ''),
  );
  window.gtag('event', event, clean);
}

/** Fired on every client-side route change once analytics consent exists. */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: title ?? document.title,
  });
}

export type CampaignSource = {
  campaign: string;
  /** Where the click happened — `week_20`, `article_hospital-bag-checklist`. */
  content: string;
  medium?: string;
};

/** Provider token from App Store Connect, if the account uses one. */
const APPLE_PROVIDER_TOKEN = process.env.NEXT_PUBLIC_APPLE_PROVIDER_TOKEN ?? '';

/**
 * Tags a store URL so an install can be traced back to the page that produced
 * it. The two stores read completely different parameters:
 *
 * - Google Play reads `utm_*` and surfaces them in Play Console acquisition
 *   reports.
 * - Apple ignores `utm_*` entirely. App Store Connect → App Analytics reads
 *   the campaign token `ct` (40 characters max), optionally paired with the
 *   provider token `pt`.
 *
 * Sending the wrong one is the usual reason iOS acquisition looks like it comes
 * from nowhere.
 */
export function withCampaign(url: string, source: CampaignSource): string {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.endsWith('apple.com')) {
      parsed.searchParams.set('ct', source.content.slice(0, 40));
      if (APPLE_PROVIDER_TOKEN) parsed.searchParams.set('pt', APPLE_PROVIDER_TOKEN);
      parsed.searchParams.set('mt', '8');
      return parsed.toString();
    }

    parsed.searchParams.set('utm_source', 'website');
    parsed.searchParams.set('utm_medium', source.medium ?? 'article');
    parsed.searchParams.set('utm_campaign', source.campaign);
    parsed.searchParams.set('utm_content', source.content);
    return parsed.toString();
  } catch {
    return url;
  }
}
