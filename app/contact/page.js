import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Contact — SpanForge',
  description:
    'Request a briefing, book a strategy conversation, or reach out to the SpanForge team about enterprise AI delivery, the SpanForge Platform, or the T.R.U.S.T. Framework.',,
}

const ENGAGEMENT_PATHS = [
  {
    eyebrow: 'Advisory',
    title: 'Request a briefing',
    desc: 'A structured 60-minute conversation for enterprise teams evaluating AI lifecycle governance, production readiness, or the T.R.U.S.T. Framework. No pitch. Focused on your context.',
    cta: 'Request via LinkedIn',
    href: 'https://www.linkedin.com/in/spanforge',
    external: true,
    accent: 'var(--discover)',
  },
  {
    eyebrow: 'General',
    title: 'Get in touch',
    desc: 'Partnerships, research collaboration, press and media enquiries, or general questions about the platform. We read every message and respond to organisations within two business days.',
    cta: 'Send an email',
    href: 'mailto:sriram@getspanforge.com',
    external: true,
    accent: 'var(--build)',
  },
]

const WHAT_TO_EXPECT = [
  {
    num: '01',
    title: 'We read every message.',
    desc: 'No automated responses. Every inbound enquiry from an enterprise organisation is read and considered by the team.',
  },
  {
    num: '02',
    title: 'We respond in two business days.',
    desc: 'For briefing and demo requests, we will confirm availability and a proposed agenda within 48 hours.',
  },
  {
    num: '03',
    title: 'No unsolicited follow-up.',
    desc: 'If a conversation doesn\'t progress to an engagement, we will not add you to a mailing list or send unsolicited outreach.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Contact SpanForge</span>
          <h1 className={styles.h1}>
            Start a conversation.
          </h1>
          <p className={styles.heroSub}>
            Whether you are assessing AI lifecycle governance, evaluating SpanForge for
            production agents, or have a question about the platform — we want to hear
            from you.
          </p>
        </div>
      </section>

      {/* Engagement paths */}
      <section className={styles.paths} aria-labelledby="paths-heading">
        <div className="container">
          <span className="eyebrow">How to engage</span>
          <h2 id="paths-heading" className={styles.sectionH2}>
            Choose the right conversation.
          </h2>
          <div className={styles.pathsGrid}>
            {ENGAGEMENT_PATHS.map(path => (
              <div key={path.title} className={styles.pathCard}>
                <span
                  className={styles.pathEyebrow}
                  style={{ color: path.accent }}
                >
                  {path.eyebrow}
                </span>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathDesc}>{path.desc}</p>
                <a
                  href={path.href}
                  className={styles.pathCta}
                  style={{ '--accent': path.accent }}
                  {...(path.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {path.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className={styles.expect} aria-labelledby="expect-heading">
        <div className="container">
          <span className="eyebrow">Our commitment</span>
          <h2 id="expect-heading" className={styles.sectionH2}>
            What to expect.
          </h2>
          <div className={styles.expectGrid}>
            {WHAT_TO_EXPECT.map(item => (
              <div key={item.num} className={styles.expectItem}>
                <span className={styles.expectNum}>{item.num}</span>
                <h3 className={styles.expectTitle}>{item.title}</h3>
                <p className={styles.expectDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct contact strip */}
      <section className={styles.directStrip}>
        <div className={`container ${styles.directInner}`}>
          <div>
            <p className={styles.directLabel}>Direct email</p>
            <a href="mailto:sriram@getspanforge.com" className={styles.directEmail}>
              sriram@getspanforge.com
            </a>
          </div>
          <div className={styles.directDivider} aria-hidden="true" />
          <div>
            <p className={styles.directLabel}>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/spanforge"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directSocial}
            >
              linkedin.com/in/spanforge ↗
            </a>
          </div>
          <div className={styles.directDivider} aria-hidden="true" />
          <div>
            <p className={styles.directLabel}>Press &amp; media</p>
            <a href="mailto:sriram@getspanforge.com" className={styles.directEmail}>
              sriram@getspanforge.com
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow">Start here</span>
          <h2 id="cta-heading" className={styles.ctaH2}>
            Not sure where to start?
          </h2>
          <p className={styles.ctaSub}>
            The Discover phase is designed exactly for that moment. It gives you a
            structured framework for evaluating whether an AI initiative is worth
            building — before you commit budget or engineering time.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/platform/discover" className="btn-primary">Explore the Discover phase →</Link>
            <Link href="/platform" className="btn-ghost">See the full platform →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
