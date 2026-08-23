import { ImageResponse } from 'next/og';
import { isLocale } from '@/lib/i18n/config';

export const runtime = 'nodejs';
export const revalidate = 86400;

/**
 * Generated Open Graph image. Every page gets a share card carrying its own
 * title, without anyone having to design 300 images by hand.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get('title') ?? 'GoMammy').slice(0, 120);
  const eyebrow = searchParams.get('eyebrow')?.slice(0, 40) ?? '';
  const locale = searchParams.get('locale');

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #FAF8F5 0%, #F6E3DF 100%)',
          padding: 72,
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: '#BD8078',
              display: 'flex',
            }}
          />
          <div style={{ fontSize: 34, color: '#242321', letterSpacing: -0.5 }}>GoMammy</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 960 }}>
          {eyebrow ? (
            <div
              style={{
                fontSize: 24,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#85514A',
                marginBottom: 18,
                fontFamily: 'sans-serif',
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div style={{ fontSize: 68, lineHeight: 1.1, color: '#242321' }}>{title}</div>
        </div>

        <div
          style={{
            fontSize: 22,
            color: '#77736D',
            fontFamily: 'sans-serif',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <span>gomammy.com</span>
          <span>{isLocale(locale ?? '') ? (locale ?? '').toUpperCase() : ''}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
