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

      {/* How it is operationalised */}
      <section className={styles.contentSection} aria-labelledby="ops-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Operationalisation</span>
          <h2 id="ops-heading" className={styles.sectionH2}>
            Embedded across three platform phases
          </h2>
          <p className={styles.summaryPara}>
            The T.R.U.S.T. Framework is not applied at the end of delivery — it is embedded
            as technical controls across the Design, Govern, and Scale phases.
          </p>
          <p className={styles.summaryPara}>
            <strong>Design phase (CostGuard™)</strong> — cost accountability is embedded via
            the Cost Readiness dimension of the Gate Readiness Score™. Responsible owners must
            understand and document the financial implications of architecture decisions before
            any resource is committed.
          </p>
          <p className={styles.summaryPara}>
            <strong>Govern phase</strong> — compliance mapping (including EU AI Act risk
            categorisation), live risk registers, governance maturity assessment, and board-level
            reporting packs, all structured around the five T.R.U.S.T. dimensions.
          </p>
          <p className={styles.summaryPara}>
            <strong>Scale phase (AgentOBS™)</strong> — technical enforcement of Traceability
            (immutable audit trail), User Rights (consent boundary monitoring), and Safety
            Guardrails (automated playbooks) in production. Neither Traceability nor cost
            accountability is left to human process alone.
          </p>
        </div>
      </section>

      {/* Certification */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="cert-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">SpanForge certification</span>
          <h2 id="cert-heading" className={styles.sectionH2}>
            What SpanForge-certified means
          </h2>
          <div className={styles.thresholdBox}>
            <p className={styles.thresholdText}>
              A SpanForge-certified AI system has completed the full five-phase lifecycle,
              passed all six Build gates, satisfied every T.R.U.S.T. dimension in the Govern
              phase, and has AgentOBS active in production. Certification is self-attested by
              the named Gate Authority sponsor, supported by the complete audit trail of gate
              records, risk registers, and incident playbooks.
            </p>
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
