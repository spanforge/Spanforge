import Link from 'next/link'
import { phases, trustDimensions } from '@/lib/phases-data'
import styles from './page.module.css'

export const metadata = {
  title: 'The Platform — SpanForge',
  description:
    'The SpanForge five-phase AI lifecycle platform. Discover, Design, Build, Govern, and Scale — with the T.R.U.S.T. Framework running through every phase.',
}

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">The Platform</span>
          <h1 className={styles.h1}>
            Five phases. One platform.<br />
            <span className={styles.redAccent}>Zero shortcuts.</span>
          </h1>
          <p className={styles.heroSub}>
            SpanForge structures the entire enterprise AI lifecycle — from the first
            question of &ldquo;should we build this?&rdquo; to running agents safely
            in production. Each phase has a clear entry condition, defined tools,
            and an auditable exit gate.
          </p>
          <p className={styles.heroTagline}>Decide. Build. Trust.</p>
        </div>
      </section>

      {/* Phase cards */}
      <section className={styles.phasesSection} aria-labelledby="phases-heading">
        <div className="container">
          <span className="eyebrow">Five-phase lifecycle</span>
          <h2 id="phases-heading" className={styles.sectionH2}>
            From first question to production.
          </h2>
          <div className={styles.phaseCards}>
            {phases.map((phase) => (
              <Link
                key={phase.id}
                href={`/platform/${phase.id}`}
                className={styles.phaseCard}
              >
                <div className={styles.phaseCardTop}>
                  <span
                    className={styles.phaseCardNum}
                    style={{ color: `var(${phase.colorVar})` }}
                  >
                    {phase.num}
                  </span>
                  <span
                    className={styles.phaseCardArrow}
                    aria-hidden="true"
                  >→</span>
                </div>
                <span
                  className={styles.phaseCardLabel}
                  style={{ color: `var(${phase.colorVar})` }}
                >
                  {phase.label}
                </span>
                <p className={styles.phaseCardTag}>{phase.tag}</p>
                <p className={styles.phaseCardTagline}>{phase.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* T.R.U.S.T. card */}
      <section className={styles.trustSection} aria-labelledby="trust-hub-heading">
        <div className="container">
          <div className={styles.trustCard}>
            <div className={styles.trustCardLeft}>
              <span className="eyebrow">Governance layer</span>
              <h2 id="trust-hub-heading" className={styles.trustH2}>
                The T.R.U.S.T. Framework
              </h2>
              <p className={styles.trustCopy}>
                Every SpanForge-certified AI system satisfies five dimensions of
                responsible deployment. The T.R.U.S.T. Framework is not a checklist —
                it is the lens through which every phase is evaluated.
              </p>
              <Link
                href="/platform/trust"
                className="btn-primary"
                style={{ marginTop: '1.5rem', display: 'inline-flex' }}
              >
                Explore the Framework →
              </Link>
            </div>
            <div className={styles.trustDimensions}>
              {trustDimensions.map((d) => (
                <div key={d.word} className={styles.trustRow}>
                  <span className={styles.trustLetter}>{d.letter}</span>
                  <div>
                    <p className={styles.trustWord}>{d.word}</p>
                    <p className={styles.trustDesc}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks section */}
      <section className={styles.frameworksSection} aria-labelledby="frameworks-heading">
        <div className="container">
          <span className="eyebrow">SpanForge frameworks</span>
          <h2 id="frameworks-heading" className={styles.sectionH2}>
            The analytical frameworks
          </h2>
          <div className={styles.frameworkCards}>
            <Link href="/platform/exit-gate-system" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Core system</span>
              <span className={styles.frameworkCardTitle}>Exit Gate System™</span>
              <p className={styles.frameworkCardDesc}>
                A five-stage, evidence-based lifecycle that replaces ambiguity with defined
                transition criteria at every stage of AI delivery.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/platform/failure-funnel" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Research</span>
              <span className={styles.frameworkCardTitle}>Failure Funnel™</span>
              <p className={styles.frameworkCardDesc}>
                Where enterprise AI initiatives are typically lost across the lifecycle, grounded
                in S&P Global, Gartner, and McKinsey research.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/platform/cost-model" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Economics</span>
              <span className={styles.frameworkCardTitle}>Cost Model™</span>
              <p className={styles.frameworkCardDesc}>
                The true cost of pilot purgatory — separating the visible costs on the budget
                from the hidden costs that compound below the surface.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/platform/gate-readiness-score" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Measurement</span>
              <span className={styles.frameworkCardTitle}>Gate Readiness Score™</span>
              <p className={styles.frameworkCardDesc}>
                A structured 0–100 evidence assessment across six dimensions. A score below 70
                blocks gate reviews until remediation is complete.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/platform/pilot-risk-index" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Risk</span>
              <span className={styles.frameworkCardTitle}>Pilot Risk Index™</span>
              <p className={styles.frameworkCardDesc}>
                A five-failure-mode taxonomy mapped to each gate. Each gate is designed to
                prevent one specific, documented failure pattern.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
            <Link href="/platform/costguard" className={styles.frameworkCard}>
              <span className={styles.frameworkCardLabel}>Product — Design Phase</span>
              <span className={styles.frameworkCardTitle}>CostGuard™</span>
              <p className={styles.frameworkCardDesc}>
                Decision-time cost intelligence. Every architecture decision carries a cost
                estimate before any resource is committed. Live for AWS; GCP and Azure in
                development.
              </p>
              <span className={styles.frameworkCardArrow} aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaH2}>Start with the right phase.</h2>
          <p className={styles.ctaSub}>
            Not sure where you are in the lifecycle? The Discover phase tells you.
          </p>
          <Link href="/platform/discover" className="btn-primary">
            Start with Discover →
          </Link>
        </div>
      </section>
    </>
  )
}

