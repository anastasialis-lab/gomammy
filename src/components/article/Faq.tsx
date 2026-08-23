import type { FaqItem } from '@/lib/content/types';

export function Faq({ items, title }: { items: FaqItem[]; title: string }) {
  if (items.length === 0) return null;

  return (
    <section aria-labelledby="faq-title" className="mt-16">
      <h2 id="faq-title" className="text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-line-soft border-y border-line-soft">
        {items.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-lg">
              {item.question}
              <span
                aria-hidden
                className="mt-1 shrink-0 text-rose-600 transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-measure text-[0.98rem] leading-relaxed text-ink-soft">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
