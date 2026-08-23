import Link from 'next/link';
import type { ReactNode } from 'react';

export function Section({
  title,
  action,
  children,
  className = '',
}: {
  title?: string;
  action?: { label: string; href: string };
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-page py-14 md:py-20 ${className}`}>
      {title ? (
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl md:text-3xl">{title}</h2>
          {action ? (
            <Link href={action.href} className="link-underline shrink-0 text-sm text-muted hover:text-ink">
              {action.label}
            </Link>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
