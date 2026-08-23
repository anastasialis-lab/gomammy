'use client';

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import {
  CONSENT_COOKIE,
  CONSENT_EVENT,
  DENIED_ALL,
  denyAll,
  grantAll,
  parseConsent,
  writeConsent,
  type ConsentState,
} from '@/lib/analytics/consent';

type ConsentContextValue = {
  /** null until the cookie has been read on the client. */
  consent: ConsentState | null;
  /** True when the reader has never answered — the banner is shown. */
  needsChoice: boolean;
  isOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  acceptAll: () => void;
  rejectAll: () => void;
  save: (partial: Pick<ConsentState, 'analytics' | 'marketing' | 'preferences'>) => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

/**
 * The consent cookie is external state, so it is read through
 * `useSyncExternalStore` rather than synced into state from an effect. That
 * keeps the server render (no cookie) and the client render consistent, and
 * means any tab-local change dispatched on CONSENT_EVENT updates every
 * subscriber at once.
 */
function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

function rawCookie(): string {
  const match = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
  return match ? match.slice(CONSENT_COOKIE.length + 1) : '';
}

/** Server render has no cookie; `null` marks "not decided yet on the client". */
function serverCookie(): null {
  return null;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const raw = useSyncExternalStore(subscribe, rawCookie, serverCookie);
  const [isOpen, setIsOpen] = useState(false);

  const consent = useMemo(() => (raw ? parseConsent(raw) : null), [raw]);
  const hydrated = raw !== null;

  const commit = useCallback((next: ConsentState) => {
    writeConsent(next);
    setIsOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      needsChoice: hydrated && consent === null,
      isOpen,
      openPreferences: () => setIsOpen(true),
      closePreferences: () => setIsOpen(false),
      acceptAll: () => commit(grantAll()),
      rejectAll: () => commit(denyAll()),
      save: (partial) =>
        commit({
          ...DENIED_ALL,
          ...partial,
          necessary: true,
          updatedAt: new Date().toISOString(),
        }),
    }),
    [commit, consent, hydrated, isOpen],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useConsent must be used inside ConsentProvider');
  return context;
}
