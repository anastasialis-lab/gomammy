'use client';

import { useEffect, useRef } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics/events';

type ViewProps = {
  event: Extract<AnalyticsEvent, 'article_view' | 'week_view'>;
  params: Record<string, string | number>;
};

/** Fires once per mount — the entry event for the content funnel. */
export function ViewTracker({ event, params }: ViewProps) {
  const sent = useRef(false);
  useEffect(() => {
    if (sent.current) return;
    sent.current = true;
    track(event, params);
    // params is a fresh object each render; the ref guard is what prevents repeats.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}

/**
 * Reports 50% and 90% reading depth. Uses the document height rather than a
 * sentinel element so it stays accurate when images load late.
 */
export function ScrollDepthTracker({ params }: { params: Record<string, string | number> }) {
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    let ticking = false;

    const check = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = ((window.scrollY / scrollable) * 100) | 0;

      for (const threshold of [50, 90] as const) {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          track(threshold === 50 ? 'article_scroll_50' : 'article_scroll_90', params);
        }
      }
      if (fired.current.size === 2) window.removeEventListener('scroll', onScroll);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}

/**
 * Reports `app_cta_view` the first time a promo block is at least half visible,
 * which is what makes the CTA impression → click → store funnel measurable.
 */
export function ImpressionTracker({
  ctaId,
  appId,
  location,
}: {
  ctaId: string;
  appId?: string;
  location: string;
}) {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = anchor.current?.parentElement;
    if (!element || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          track('app_cta_view', { cta_id: ctaId, app_id: appId, cta_location: location });
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [appId, ctaId, location]);

  return <span ref={anchor} aria-hidden className="sr-only" />;
}
