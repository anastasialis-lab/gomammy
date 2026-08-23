/**
 * Consent state shared by the banner, the preferences dialog and the analytics
 * loader. Stored in a first-party cookie so the server can read it too, and
 * mirrored to a custom event so every listener updates at once.
 */

export const CONSENT_COOKIE = 'gm_consent';
export const CONSENT_VERSION = 1;
export const CONSENT_EVENT = 'gm:consent-change';
/** Six months, the common maximum for a consent record under EU guidance. */
const MAX_AGE_SECONDS = 60 * 60 * 24 * 182;

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'preferences';

export type ConsentState = {
  version: number;
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  /** ISO timestamp — proof of when consent was given, required by GDPR. */
  updatedAt: string;
};

export const DENIED_ALL: ConsentState = {
  version: CONSENT_VERSION,
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
  updatedAt: '',
};

export function grantAll(): ConsentState {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
    updatedAt: new Date().toISOString(),
  };
}

export function denyAll(): ConsentState {
  return { ...DENIED_ALL, updatedAt: new Date().toISOString() };
}

export function parseConsent(raw: string | undefined | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      preferences: Boolean(parsed.preferences),
      updatedAt: typeof parsed.updatedAt === 'string' ? parsed.updatedAt : '',
    };
  } catch {
    return null;
  }
}

export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
  return parseConsent(match?.slice(CONSENT_COOKIE.length + 1));
}

export function writeConsent(state: ConsentState): void {
  if (typeof document === 'undefined') return;
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
}
