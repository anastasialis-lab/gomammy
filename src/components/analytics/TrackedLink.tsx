'use client';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { track, type AnalyticsEvent } from '@/lib/analytics/events';

type Props = {
  href: string;
  event: AnalyticsEvent;
  params?: Record<string, string | number>;
  children: ReactNode;
  className?: string;
  /** Store links and other outbound URLs open in a new tab. */
  external?: boolean;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export function TrackedLink({
  href,
  event,
  params = {},
  children,
  className,
  external,
  ...rest
}: Props) {
  const onClick = () => track(event, params);

  if (external) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
