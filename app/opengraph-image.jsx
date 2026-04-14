import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SpanForge — The AI Lifecycle Platform'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0D1117',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        {/* Decorative grid lines */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(230,57,70,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(230,57,70,0.06) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        {/* Red accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '4px',
            height: '100%',
            background: '#E63946',
            display: 'flex',
          }}
        />

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '40px' }}>
          <span style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 900, fontFamily: 'serif' }}>
            Span
          </span>
          <span style={{ color: '#E63946', fontSize: '32px', fontWeight: 900, fontFamily: 'serif' }}>
            Forge
          </span>
          <span
            style={{
              color: '#64748B',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginLeft: '10px',
              fontFamily: 'monospace',
              alignSelf: 'center',
              marginTop: '6px',
            }}
          >
            AI LIFECYCLE PLATFORM
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: '#FFFFFF',
            fontSize: '64px',
            fontWeight: 900,
            lineHeight: 1.05,
            fontFamily: 'serif',
            marginBottom: '28px',
          }}
        >
          Where AI
          <br />
          <span style={{ color: '#E63946' }}>Goes to Production.</span>
        </div>

        {/* Sub-line */}
        <div
          style={{
            color: '#94A3B8',
            fontSize: '26px',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          Discover · Design · Build · Govern · Scale
        </div>

        {/* Domain */}
        <div
          style={{
            position: 'absolute',
            bottom: '44px',
            right: '80px',
            color: '#475569',
            fontSize: '16px',
            fontFamily: 'monospace',
            fontWeight: 400,
            display: 'flex',
          }}
        >
          getspanforge.com
        </div>
      </div>
    ),
    { ...size }
  )
}
