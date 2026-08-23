'use client';

import { useId } from 'react';
import type { Block } from '@/lib/content/types';
import { track } from '@/lib/analytics/events';

export function TableOfContents({ blocks, title }: { blocks: Block[]; title: string }) {
  // The article renders one table of contents for mobile and one in the
  // sidebar, so the label id has to be unique per instance.
  const titleId = useId();
  const headings = blocks.filter(
    (block): block is Extract<Block, { type: 'heading' }> =>
      block.type === 'heading' && block.level === 2,
  );

  if (headings.length < 2) return null;

  return (
    <nav aria-labelledby={titleId} className="rounded-lg border border-line-soft bg-card p-5">
      <h2 id={titleId} className="text-xs font-semibold uppercase tracking-wider text-muted">
        {title}
      </h2>
      <ol className="mt-3 grid gap-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={() => track('toc_click', { anchor: heading.id })}
              className="link-underline text-ink-soft hover:text-ink"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
