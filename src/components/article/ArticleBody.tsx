import Image from 'next/image';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Block, InlineMark } from '@/lib/content/types';
import { findCta } from '@/lib/content/source';
import { resolveHref } from '@/lib/routes';
import { CtaView } from '@/components/cta/CtaView';

const calloutTone = {
  info: 'border-sage-300 bg-sage-50',
  care: 'border-rose-200 bg-rose-50',
  warning: 'border-rose-400 bg-rose-50',
} as const;

function Inline({ marks, locale }: { marks: InlineMark[]; locale: Locale }) {
  return (
    <>
      {marks.map((mark, index) => {
        let node = <>{mark.text}</>;
        if (mark.bold) node = <strong>{node}</strong>;
        if (mark.italic) node = <em>{node}</em>;
        if (mark.href) {
          const href = resolveHref(locale, mark.href);
          const external = href.startsWith('http');
          node = external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {node}
            </a>
          ) : (
            <Link href={href}>{node}</Link>
          );
        }
        return <span key={index}>{node}</span>;
      })}
    </>
  );
}

export function ArticleBody({
  blocks,
  locale,
  dict,
  context,
}: {
  blocks: Block[];
  locale: Locale;
  dict: Dictionary;
  context: string;
}) {
  return (
    <div className="prose-editorial">
      {blocks.map((block, index) => {
        switch (block.type) {
          case 'heading': {
            const Tag = block.level === 2 ? 'h2' : 'h3';
            return (
              <Tag key={index} id={block.id} className="scroll-mt-28">
                {block.text}
              </Tag>
            );
          }
          case 'paragraph':
            return (
              <p key={index}>
                <Inline marks={block.content} locale={locale} />
              </p>
            );
          case 'list':
            return block.style === 'bullet' ? (
              <ul key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Inline marks={item} locale={locale} />
                  </li>
                ))}
              </ul>
            ) : (
              <ol key={index}>
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Inline marks={item} locale={locale} />
                  </li>
                ))}
              </ol>
            );
          case 'quote':
            return (
              <blockquote
                key={index}
                className="border-l-2 border-rose-200 pl-5 font-serif text-xl text-ink"
              >
                {block.text}
                {block.attribution ? (
                  <footer className="mt-2 font-sans text-sm text-muted">— {block.attribution}</footer>
                ) : null}
              </blockquote>
            );
          case 'callout':
            return (
              <aside
                key={index}
                className={`rounded-md border-l-2 p-5 ${calloutTone[block.tone]}`}
              >
                {block.title ? (
                  <p className="font-serif text-lg text-ink">{block.title}</p>
                ) : null}
                <p className="mt-1 text-[0.98rem]">{block.text}</p>
              </aside>
            );
          case 'image':
            return (
              <figure key={index}>
                <Image
                  src={block.image.src}
                  alt={block.image.alt}
                  width={block.image.width}
                  height={block.image.height}
                  sizes="(min-width: 768px) 704px, 100vw"
                  className="rounded-lg"
                />
                {block.image.credit ? (
                  <figcaption className="mt-2 text-xs text-muted">{block.image.credit}</figcaption>
                ) : null}
              </figure>
            );
          case 'cta': {
            const cta = findCta(locale, block.ctaId);
            if (!cta) return null;
            return (
              <CtaView key={index} cta={cta} locale={locale} dict={dict} context={context} />
            );
          }
          default:
            return null;
        }
      })}
    </div>
  );
}
