import Link from 'next/link'
import { trustDimensions } from '@/lib/phases-data'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'T.R.U.S.T. Framework — SpanForge',
  description:
    'Five dimensions of responsible AI deployment — operationalised as technical controls across every phase of the SpanForge lifecycle.',
}

export default function TrustPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>T.R.U.S.T. Framework</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Governance layer</span>
          <h1 className={styles.trustHeroH1}>The T.R.U.S.T. Framework</h1>
          <p className={styles.trustHeroSub}>
            Every SpanForge-certified AI system satisfies five dimensions of responsible
            deployment. The T.R.U.S.T. Framework converts AI ethics from a slide deck
            into technical controls, compliance documentation, and audit-ready evidence.
          </p>
        </div>
      </section>

      {/* Five dimensions */}
      <section className={styles.trustDimensions} aria-labelledby="trust-dims-heading">
        <div className="container">
          <span className="eyebrow">The five dimensions</span>
          <div className={styles.dimensionList}>
            {trustDimensions.map((d) => (
              <div key={d.word} className={styles.dimensionRow}>
                <span className={styles.dimensionLetter}>{d.letter}</span>
                <div>
                  <p className={styles.dimensionWord}>{d.word}</p>
                  <p className={styles.dimensionDesc}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.trustCta}>
        <div className={`container ${styles.trustCtaInner}`}>
          <h2 className={styles.trustCtaH2}>See it operationalised.</h2>
          <p className={styles.trustCtaSub}>
            The T.R.U.S.T. Framework is embedded in the Govern phase — with EU AI Act
            compliance mapping, risk registers, and board-ready reporting.
          </p>
          <Link href="/platform/govern" className="btn-primary">
            Explore the Govern Phase →
          </Link>
        </div>
      </section>
    </>
  )
}
