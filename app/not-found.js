import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section
      style={{
        padding: '160px 0 120px',
        background: 'var(--dark)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <span className="eyebrow">404</span>
        <h1
          style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 900,
            color: 'var(--white)',
            lineHeight: 1.1,
            marginTop: '0.75rem',
            marginBottom: '1.25rem',
          }}
        >
          Page not found.
        </h1>
        <p
          style={{
            fontSize: '1.05rem',
            color: 'var(--muted)',
            lineHeight: 1.7,
            maxWidth: '480px',
            marginBottom: '2.5rem',
          }}
        >
          The page you are looking for does not exist or has been moved. If you
          followed a link here, it may be outdated.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/spanforgecore" className="btn-ghost">Explore the platform</Link>
        </div>
      </div>
    </section>
  )
}
