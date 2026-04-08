import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Gate Readiness Score™ — SpanForge',
  description:
    'A structured 0–100 evidence assessment produced before every gate review across six dimensions. A score below 70 triggers an automatic remediation plan; no gate review is scheduled until the threshold is met.',
}

const dimensions = [
  {
    num: '01',
    label: 'Technical Readiness',
    desc: 'The technical work required for this stage has been completed and verified. Accuracy, performance, and integration requirements are met and documented.',
  },
  {
    num: '02',
    label: 'Business Value Evidence',
    desc: 'Measurable business outcomes have been demonstrated — not asserted. KPIs are defined, baselined, and the initiative shows movement toward the target.',
  },
  {
    num: '03',
    label: 'Operational Integration',
    desc: 'The system has been integrated with operational processes, data pipelines, and support structures. The people and workflows that will run it are confirmed.',
  },
  {
    num: '04',
    label: 'Compliance Status',
    desc: 'Applicable regulatory and governance requirements have been identified, assessed, and either satisfied or formally risk-accepted with documented rationale.',
  },
  {
    num: '05',
    label: 'Stakeholder Alignment',
    desc: 'Business sponsor commitment, cross-functional sign-off, and end-user readiness are confirmed. Accountabilities are documented and agreed.',
  },
  {
    num: '06',
    label: 'Cost Readiness (CostGuard™)',
    desc: 'CostGuard™ cost estimate produced for the selected infrastructure configuration. Scenario comparison documented. Projected cost is within the approved business case envelope. Required for all initiatives that have completed the Design phase.',
  },
]

const functions = [
  {
    title: 'Team target before each review',
    desc: 'The Gate Readiness Score™ gives teams a clear, measurable target before each review, removing ambiguity about what "ready" means. Teams know exactly what evidence they need to produce and can self-assess against the threshold before requesting a gate review.',
  },
  {
    title: 'Structured brief for the Gate Authority',
    desc: 'The score gives the Gate Authority a structured evidence brief rather than a narrative presentation, making advancement decisions faster and more defensible. It replaces "are we ready?" with a scored, dimensional assessment.',
  },
]

const mistakes = [
  {
    title: 'Setting thresholds too low',
    desc: 'Teams presenting at reviews with scores below 70 typically have not produced the underlying evidence. The threshold is a filter, not a formality. Lowering it to accommodate unprepared teams defeats the purpose of the mechanism.',
  },
  {
    title: 'Skipping the score for trusted initiatives',
    desc: 'A Gate Authority that grants advancement based on relationship capital rather than a documented Gate Readiness Score™ breaks the evidential contract the system depends on.',
  },
  {
    title: 'Treating the score as a checklist',
    desc: 'The score is an evidence assessment, not a task tracker. Marking a dimension complete without the underlying artefact produces a score that does not reflect actual readiness.',
  },
]

export default function GateReadinessScorePage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Gate Readiness Score™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Framework</span>
          <h1 className={styles.frameworkHeroH1}>Gate Readiness Score™</h1>
          <p className={styles.frameworkHeroSub}>
            A structured 0–100 evidence assessment produced before every gate review in the
            SpanForge Exit Gate System™. Scored across six dimensions. A score below 70 triggers
            an automatic remediation plan; no gate review is scheduled until the threshold is met.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className={styles.contentSection} aria-labelledby="what-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">What it is</span>
          <h2 id="what-heading" className={styles.sectionH2}>
            An evidence threshold at every gate
          </h2>
          <p className={styles.summaryPara}>
            Before each gate review, the programme team produces a Gate Readiness Score™ — a
            structured 0–100 assessment across six dimensions: technical readiness, business
            value evidence, operational integration, compliance status, stakeholder alignment,
            and cost readiness (CostGuard™).
          </p>
          <p className={styles.summaryPara}>
            The score is an evidence assessment, not a task count. Each dimension is scored based
            on documented artefacts the team can present to the Gate Authority. A score below 70
            triggers an automatic remediation plan — no gate review is scheduled until the
            threshold is met. A dimension score below 50 is an automatic flag regardless of overall
            score — the Gate Authority must address it explicitly; no dimension can be averaged away.
          </p>
        </div>
      </section>

      {/* Threshold */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="threshold-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Threshold</span>
          <h2 id="threshold-heading" className={styles.sectionH2}>
            The 70-point threshold
          </h2>
          <div className={styles.thresholdBox}>
            <span className={styles.thresholdNum}>70</span>
            <p className={styles.thresholdText}>
              A Gate Readiness Score™ below 70 triggers an automatic remediation plan.
              No gate review is scheduled until the threshold is met. The threshold is a filter,
              not a formality — teams with scores below 70 typically have not produced the
              underlying evidence the Gate Authority needs to make an advancement decision.
            </p>
          </div>
        </div>
      </section>

      {/* Five dimensions */}
      <section className={styles.contentSection} aria-labelledby="dims-heading">
        <div className={`container ${styles.contentInner}`} style={{ maxWidth: '960px' }}>
          <span className="eyebrow">Assessment dimensions</span>
          <h2 id="dims-heading" className={styles.sectionH2}>
            Six dimensions of readiness
          </h2>
          <p className={styles.sectionSub}>
            Each dimension reflects a category of evidence the Gate Authority requires in order
            to make a defensible advancement decision.
          </p>
          <div className={styles.dimGrid}>
            {dimensions.map((d) => (
              <div key={d.num} className={styles.dimCard}>
                <p className={styles.dimCardNum}>{d.num}</p>
                <p className={styles.dimCardLabel}>{d.label}</p>
                <p className={styles.dimCardDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two functions */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="functions-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">How it is used</span>
          <h2 id="functions-heading" className={styles.sectionH2}>
            Two functions in one instrument
          </h2>
          <p className={styles.sectionSub}>
            The Gate Readiness Score™ serves two distinct functions across the lifecycle.
          </p>
          <div className={styles.accelList}>
            {functions.map((f) => (
              <div key={f.title} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{f.title}</p>
                  <p className={styles.accelDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className={styles.contentSection} aria-labelledby="mistakes-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Implementation guidance</span>
          <h2 id="mistakes-heading" className={styles.sectionH2}>
            Common implementation mistakes
          </h2>
          <div className={styles.accelList}>
            {mistakes.map((m) => (
              <div key={m.title} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{m.title}</p>
                  <p className={styles.accelDesc}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.insightBox} style={{ marginTop: '2rem' }}>
            <p className={styles.insightText}>
              &ldquo;A gate that every initiative passes is not a governance mechanism. It is a
              rubber stamp with extra steps. If your gate reviews never result in a Return
              decision, your evidence thresholds are too low.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* In the 90-day roadmap */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="roadmap-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">90-day adoption roadmap</span>
          <h2 id="roadmap-heading" className={styles.sectionH2}>
            First use in the portfolio audit
          </h2>
          <p className={styles.summaryPara}>
            In the recommended 90-day adoption roadmap for the SpanForge Exit Gate System™,
            the Gate Readiness Score™ is used in the first 15 days as the primary instrument for
            the portfolio baseline assessment. A score is produced for every active initiative.
            In most cases, initiatives believed to be &ldquo;nearly ready for production&rdquo; are
            revealed to be at Stage 01 or Stage 02. This is the clarifying function of the
            assessment.
          </p>
        </div>
      </section>

      {/* Related */}
      <nav className={styles.phaseNav} aria-label="Framework navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          <Link href="/platform/exit-gate-system" className={styles.phaseNavLink}>
            <span className={styles.phaseNavDir}>← Parent framework</span>
            <span className={styles.phaseNavLabel}>Exit Gate System™</span>
            <span className={styles.phaseNavTag}>The lifecycle the score operates within</span>
          </Link>
          <Link href="/platform/pilot-risk-index" className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
            <span className={styles.phaseNavDir}>Related framework →</span>
            <span className={styles.phaseNavLabel}>Pilot Risk Index™</span>
            <span className={styles.phaseNavTag}>Five failure modes mapped to each gate</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
