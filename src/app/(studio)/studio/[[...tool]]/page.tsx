import type { Metadata, Viewport } from 'next';

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export const metadata: Metadata = {
  title: 'HelloMommy CMS',
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  interactiveWidget: 'resizes-content',
};

export default async function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div className="container-page py-24">
        <h1 className="text-3xl">CMS not connected yet</h1>
        <p className="mt-4 max-w-measure text-muted">
          Create a project at sanity.io, then set{' '}
          <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code> and <code>NEXT_PUBLIC_SANITY_DATASET</code> in
          your environment and reload this page. Until then the site runs on the seed content in{' '}
          <code>src/content</code>.
        </p>
      </div>
    );
  }

  const [{ NextStudio }, { default: config }] = await Promise.all([
    import('next-sanity/studio'),
    import('../../../../../sanity.config'),
  ]);

  return <NextStudio config={config} />;
}
