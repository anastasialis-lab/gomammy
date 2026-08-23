import Image from 'next/image';
import Link from 'next/link';
import type { ImageAsset } from '@/lib/content/types';

export type CardData = {
  href: string;
  title: string;
  excerpt?: string;
  eyebrow?: string;
  image?: ImageAsset;
  meta?: string;
};

export function ArticleCard({
  card,
  priority = false,
  size = 'default',
}: {
  card: CardData;
  priority?: boolean;
  size?: 'default' | 'wide';
}) {
  const wide = size === 'wide';

  return (
    <article className="group h-full">
      <Link href={card.href} className="flex h-full flex-col">
        {card.image ? (
          <div
            className={`relative w-full overflow-hidden rounded-lg bg-ivory-deep ${
              wide ? 'aspect-[16/9]' : 'aspect-[4/3]'
            }`}
          >
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              priority={priority}
              sizes={wide ? '(min-width: 1024px) 720px, 100vw' : '(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw'}
              className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col pt-4">
          {card.eyebrow ? <span className="eyebrow">{card.eyebrow}</span> : null}
          <h3
            className={`mt-1.5 font-serif tracking-tight ${wide ? 'text-2xl md:text-3xl' : 'text-xl'}`}
          >
            <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
              {card.title}
            </span>
          </h3>
          {card.excerpt ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{card.excerpt}</p>
          ) : null}
          {card.meta ? <p className="mt-3 text-xs text-muted">{card.meta}</p> : null}
        </div>
      </Link>
    </article>
  );
}
