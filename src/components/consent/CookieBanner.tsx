'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import type { ConsentState } from '@/lib/analytics/consent';
import { useConsent } from './ConsentProvider';

type Props = {
  dict: Dictionary;
  locale: Locale;
  privacyHref: string;
};

type Choices = Pick<ConsentState, 'analytics' | 'marketing' | 'preferences'>;

const categories = ['analytics', 'marketing', 'preferences'] as const;

export function CookieBanner({ dict, privacyHref }: Props) {
  const { consent, needsChoice, isOpen, closePreferences, acceptAll, rejectAll, save } =
    useConsent();

  if (!needsChoice && !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal={isOpen ? 'true' : undefined}
      aria-labelledby="cookie-banner-title"
      className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5"
    >
      <div className="container-page">
        <div className="card-soft mx-auto max-w-3xl p-5 shadow-[0_12px_40px_-16px_rgba(36,35,33,0.28)] sm:p-6">
          <h2 id="cookie-banner-title" className="text-xl">
            {dict.cookies.title}
          </h2>
          <p className="mt-2 text-sm text-muted">{dict.cookies.body}</p>

          {isOpen ? (
            /* Mounted only while the panel is open, so its draft state starts
               from the reader's saved choices without syncing from an effect. */
            <PreferencesPanel
              key="preferences"
              dict={dict}
              initial={{
                analytics: consent?.analytics ?? false,
                marketing: consent?.marketing ?? false,
                preferences: consent?.preferences ?? false,
              }}
              onSave={save}
              onClose={closePreferences}
              onAcceptAll={acceptAll}
              onRejectAll={rejectAll}
              privacyHref={privacyHref}
            />
          ) : (
            <div className="mt-5 flex flex-wrap gap-2">
              <button type="button" onClick={acceptAll} className={primaryButton}>
                {dict.cookies.acceptAll}
              </button>
              <button type="button" onClick={rejectAll} className={secondaryButton}>
                {dict.cookies.rejectAll}
              </button>
              <CustomiseButton label={dict.cookies.customize} />
              <PrivacyLink href={privacyHref} label={dict.cookies.privacyLink} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const primaryButton =
  'rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-rose-700';
const secondaryButton =
  'rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink';

function PreferencesPanel({
  dict,
  initial,
  onSave,
  onClose,
  onAcceptAll,
  onRejectAll,
  privacyHref,
}: {
  dict: Dictionary;
  initial: Choices;
  onSave: (choices: Choices) => void;
  onClose: () => void;
  onAcceptAll: () => void;
  onRejectAll: () => void;
  privacyHref: string;
}) {
  const [draft, setDraft] = useState<Choices>(initial);

  const labels: Record<(typeof categories)[number], { title: string; body: string }> = {
    analytics: { title: dict.cookies.analytics, body: dict.cookies.analyticsDesc },
    marketing: { title: dict.cookies.marketing, body: dict.cookies.marketingDesc },
    preferences: { title: dict.cookies.preferences, body: dict.cookies.preferencesDesc },
  };

  return (
    <>
      <fieldset className="mt-5 space-y-3">
        <legend className="sr-only">{dict.cookies.title}</legend>

        <div className="flex items-start gap-3 rounded-md bg-ivory p-3">
          <span className="mt-0.5 text-xs font-semibold text-sage-700">
            {dict.cookies.alwaysOn}
          </span>
          <span className="text-sm">
            <span className="font-semibold">{dict.cookies.necessary}</span>
            <span className="block text-muted">{dict.cookies.necessaryDesc}</span>
          </span>
        </div>

        {categories.map((key) => (
          <label key={key} className="flex cursor-pointer items-start gap-3 rounded-md bg-ivory p-3">
            <input
              type="checkbox"
              className="mt-1 size-4 accent-rose-600"
              checked={draft[key]}
              onChange={(event) =>
                setDraft((current) => ({ ...current, [key]: event.target.checked }))
              }
            />
            <span className="text-sm">
              <span className="font-semibold">{labels[key].title}</span>
              <span className="block text-muted">{labels[key].body}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <div className="mt-5 flex flex-wrap gap-2">
        <button type="button" onClick={onAcceptAll} className={primaryButton}>
          {dict.cookies.acceptAll}
        </button>
        <button type="button" onClick={onRejectAll} className={secondaryButton}>
          {dict.cookies.rejectAll}
        </button>
        <button type="button" onClick={() => onSave(draft)} className={secondaryButton}>
          {dict.cookies.savePreferences}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full px-4 py-2.5 text-sm text-muted underline underline-offset-4"
        >
          {dict.actions.close}
        </button>
        <PrivacyLink href={privacyHref} label={dict.cookies.privacyLink} />
      </div>
    </>
  );
}

function PrivacyLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="self-center px-2 py-2.5 text-sm text-muted underline underline-offset-4"
    >
      {label}
    </Link>
  );
}

function CustomiseButton({ label }: { label: string }) {
  const { openPreferences } = useConsent();
  return (
    <button
      type="button"
      onClick={openPreferences}
      className="rounded-full px-4 py-2.5 text-sm font-medium text-muted underline underline-offset-4 hover:text-ink"
    >
      {label}
    </button>
  );
}

/** Footer entry point so a reader can change their mind later. */
export function CookieSettingsLink({ label }: { label: string }) {
  const { openPreferences } = useConsent();
  return (
    <button type="button" onClick={openPreferences} className="link-underline text-left">
      {label}
    </button>
  );
}
