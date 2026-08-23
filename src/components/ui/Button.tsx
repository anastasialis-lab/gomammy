import Link from 'next/link';
import type { ReactNode } from 'react';

const styles = {
  primary:
    'bg-ink text-ivory hover:bg-rose-700 border border-transparent',
  secondary:
    'bg-card text-ink border border-line hover:border-ink',
  quiet: 'text-rose-700 border border-transparent hover:bg-rose-50',
} as const;

export type ButtonVariant = keyof typeof styles;

export function LinkButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export const buttonClass = (variant: ButtonVariant = 'primary') =>
  `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${styles[variant]}`;
