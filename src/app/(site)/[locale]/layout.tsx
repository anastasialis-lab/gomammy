import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Fraunces, Manrope, Playfair_Display } from "next/font/google";
import "../../globals.css";

import { LOCALES, LOCALE_TAGS, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { listCategories, APPS_SLUG, siteSettings } from "@/lib/content/source";
import { routes } from "@/lib/routes";
import { siteUrl } from "@/lib/seo/site";
import { Header, type NavItem } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieBanner } from "@/components/consent/CookieBanner";
import { AnalyticsLoader } from "@/components/analytics/AnalyticsLoader";
import { ConsentModeDefaults } from "@/components/analytics/ConsentModeDefaults";
import { LEGAL_KEYS, getLegalPage } from "@/content/data/legal";

/**
 * Two font pairs, chosen per locale.
 *
 * Fraunces carries the brand's editorial voice but ships no Cyrillic, so
 * Ukrainian would silently fall back to a system serif. Playfair Display has a
 * Cyrillic cut in the same high-contrast serif register, and Manrope is loaded
 * with the Cyrillic subset only where it is actually needed — Latin readers
 * never download those glyphs.
 */
const displayLatin = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  // Variable font: the whole optical range in one file, no weight list.
  axes: ["SOFT", "WONK"],
});

const displayCyrillic = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-display",
  display: "swap",
});

const bodyLatin = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const bodyCyrillic = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

/** Locales written in Cyrillic need the fonts that actually contain the glyphs. */
const CYRILLIC_LOCALES: readonly Locale[] = ["uk"];

function fontsFor(locale: Locale): string {
  return CYRILLIC_LOCALES.includes(locale)
    ? `${displayCyrillic.variable} ${bodyCyrillic.variable}`
    : `${displayLatin.variable} ${bodyLatin.variable}`;
}

export const viewport: Viewport = {
  themeColor: "#faf8f5",
  colorScheme: "light",
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const settings = siteSettings(locale);

  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: `${settings.siteName} — ${settings.siteDescription}`,
      template: `%s | ${settings.siteName}`,
    },
    description: settings.siteDescription,
    applicationName: settings.siteName,
    icons: {
      // Versioned PNG/ICO assets prevent browsers from retaining an older
      // favicon, while the larger image keeps bookmarks and home screens crisp.
      icon: [
        { url: "/favicon.ico?v=4", sizes: "any" },
        { url: "/icon-32.png?v=4", sizes: "32x32", type: "image/png" },
        { url: "/favicon-192.png?v=4", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        {
          url: "/apple-touch-icon.png?v=4",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    formatDetection: { telephone: false },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const dict = getDictionary(locale);
  const categories = listCategories(locale);

  const nav: NavItem[] = [
    ...categories.map((category) => ({
      label: category.navLabel,
      href: routes.category(locale, category),
    })),
    { label: dict.nav.blog, href: routes.blog(locale) },
    { label: dict.nav.apps, href: `/${locale}/${APPS_SLUG[locale]}` },
  ];

  const footerExplore: NavItem[] = [
    ...categories.slice(0, 4).map((category) => ({
      label: category.title,
      href: routes.category(locale, category),
    })),
    { label: dict.nav.blog, href: routes.blog(locale) },
    { label: dict.nav.apps, href: `/${locale}/${APPS_SLUG[locale]}` },
    { label: dict.actions.search, href: routes.search(locale) },
  ];

  const legalLabels: Record<(typeof LEGAL_KEYS)[number], string> = {
    about: dict.footer.about,
    editorial: dict.footer.editorialPolicy,
    privacy: dict.footer.privacy,
    cookies: dict.footer.cookiePolicy,
    terms: dict.footer.terms,
  };

  const footerLegal: NavItem[] = LEGAL_KEYS.map((key) => ({
    label: legalLabels[key],
    href: `/${locale}/${getLegalPage(locale, key).slug}`,
  }));

  return (
    <html lang={LOCALE_TAGS[locale]} className={fontsFor(locale)}>
      <head>
        <ConsentModeDefaults />
      </head>
      <body className="min-h-dvh antialiased">
        <ConsentProvider>
          <Header locale={locale} dict={dict} items={nav} />
          <main id="main">{children}</main>
          <Footer
            locale={locale}
            dict={dict}
            explore={footerExplore}
            legal={footerLegal}
          />
          <CookieBanner
            dict={dict}
            locale={locale}
            privacyHref={`/${locale}/${getLegalPage(locale, "privacy").slug}`}
          />
          <AnalyticsLoader />
        </ConsentProvider>
      </body>
    </html>
  );
}
