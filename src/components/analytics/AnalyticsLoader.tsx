"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { GA_MEASUREMENT_ID, trackPageView } from "@/lib/analytics/events";
import { useConsent } from "@/components/consent/ConsentProvider";

/**
 * Loads GA4 only after the reader accepts analytics cookies, so no request
 * reaches Google before consent. Consent Mode signals are still sent, which
 * keeps GA's modelling correct once consent arrives and lets marketing storage
 * be granted or denied independently.
 */
export function AnalyticsLoader() {
  const { consent } = useConsent();
  const analyticsGranted = consent?.analytics === true;
  const marketingGranted = consent?.marketing === true;

  useEffect(() => {
    if (!analyticsGranted || typeof window.gtag !== "function") return;
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: marketingGranted ? "granted" : "denied",
      ad_user_data: marketingGranted ? "granted" : "denied",
      ad_personalization: marketingGranted ? "granted" : "denied",
    });
  }, [analyticsGranted, marketingGranted]);

  if (!GA_MEASUREMENT_ID || !analyticsGranted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('js', new Date());
          gtag('consent', 'update', {
            analytics_storage: 'granted',
            ad_storage: '${marketingGranted ? "granted" : "denied"}',
            ad_user_data: '${marketingGranted ? "granted" : "denied"}',
            ad_personalization: '${marketingGranted ? "granted" : "denied"}'
          });
          gtag('config', '${GA_MEASUREMENT_ID}', {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <PageViews enabled={analyticsGranted} />
      </Suspense>
    </>
  );
}

/** GA4's automatic page_view is off, so SPA navigations are reported here. */
function PageViews({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!enabled) return;
    const query = searchParams.toString();
    trackPageView(query ? `${pathname}?${query}` : pathname);
  }, [enabled, pathname, searchParams]);

  return null;
}
