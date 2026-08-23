/** Structured data is inlined so crawlers see it in the initial HTML. */
export function JsonLd({ data }: { data: string }) {
  return (
    <script
      type="application/ld+json"
      // The payload comes from our own schema builders, never from user input.
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}
