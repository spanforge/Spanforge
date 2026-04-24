import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'SpanForge | AI Compliance Infrastructure'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08111e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(18,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,102,241,0.08) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: '#1266f1',
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '40px' }}>
          <span style={{ color: '#ffffff', fontSize: '32px', fontWeight: 900, fontFamily: 'sans-serif' }}>
            Span
          </span>
          <span style={{ color: '#1266f1', fontSize: '32px', fontWeight: 900, fontFamily: 'sans-serif' }}>
            Forge
          </span>
          <span
            style={{
              color: '#94a3b8',
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
            AI COMPLIANCE INFRASTRUCTURE
          </span>
        </div>

        <div
          style={{
            color: '#ffffff',
            fontSize: '62px',
            fontWeight: 900,
            lineHeight: 1.02,
            fontFamily: 'sans-serif',
            marginBottom: '28px',
          }}
        >
          Instrument, enforce,
          <br />
          <span style={{ color: '#1266f1' }}>and prove AI compliance.</span>
        </div>

        <div
          style={{
            color: '#cbd5e1',
            fontSize: '24px',
            fontFamily: 'sans-serif',
            fontWeight: 400,
          }}
        >
          Audit chains. Policy controls. Evidence-ready workflows.
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '44px',
            right: '80px',
            color: '#64748b',
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
