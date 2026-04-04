import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Exit Gate System™ — SpanForge',
  description:
    'A formal, evidence-based lifecycle that replaces ambiguity with clarity at every stage of enterprise AI delivery. Defined stages, explicit transition criteria, and non-negotiable gate conditions.',
}

const stages = [
  {
    num: '01',
    name: 'Scoping',
    objective: 'Define problem, value hypothesis, and data prerequisites',
    gate: 'Signed problem statement; confirmed data access; sponsor commitment letter',
  },
  {
    num: '02',
    name: 'Proof of Concept',
    objective: 'Validate technical feasibility with representative data',
    gate: 'Baseline accuracy met on holdout set; risk register reviewed; PoC report approved',
  },
  {
    num: '03',
    name: 'Pilot',
    objective: 'Validate business value in a controlled production environment',
    gate: 'KPI targets achieved; operational integration confirmed; compliance sign-off obtained',
  },
  {
    num: '04',
    name: 'Limited Release',
    objective: 'Confirm scalability and adoption with real users',
    gate: 'Adoption rate thresholds met; SLA compliance demonstrated; support model defined',
  },
  {
    num: '05',
    name: 'Full Production',
    objective: 'Operate at scale with monitoring and governance',
    gate: 'Runbook approved; monitoring live; owner accountabilities documented',
  },
]

const decisions = [
  {
    label: 'Advance',
    desc: 'All conditions satisfied. The initiative moves to the next stage on a confirmed schedule.',
  },
  {
    label: 'Conditional Advance',
    desc: 'Conditions substantially met with time-bounded remediation commitments. Advances conditionally with a defined review trigger.',
  },
  {
    label: 'Return',
    desc: 'Conditions not met. Returns to the current stage for a defined remediation period. This is not failure — it is the gate working as designed.',
  },
]

const outOfScope = [
  {
    title: 'Low-risk internal automation',
    desc: 'Scripted workflows and rules-based tools with limited blast radius do not require five-stage governance. A lightweight two-gate model is appropriate.',
  },
  {
    title: 'Experimental R&D and horizon-scanning',
    desc: 'Exploratory research where the objective is learning rather than deployment should not be constrained by production-readiness gates. Apply time and budget boundaries instead.',
  },
  {
    title: 'Internal prototypes and technical spikes',
    desc: 'Short-duration technical investigations (typically under six weeks) to answer a specific feasibility question are inputs to the Gate 1 scoping decision, not pilot programmes.',
  },
]

const commitments = [
  {
    num: '01',
    title: 'Retroactive Baseline Assessment',
    desc: 'Map every active initiative against the system\'s stage definitions. In most cases this produces a clarifying shock: initiatives described as "nearly ready for production" are often revealed to be at Stage 01 or early Stage 02 in practice. The assessment must include business representatives, not only technical staff.',
  },
  {
    num: '02',
    title: 'Gate Authority Designation',
    desc: 'Each initiative must have a named Gate Authority before entering the lifecycle model. This must include a business representative with budget accountability — not a delegate. Without this, gate decisions become advisory rather than binding.',
  },
  {
    num: '03',
    title: 'Evidence-First Culture',
    desc: 'The most important change is cultural: replacing progress narratives with evidence artefacts. The shift requires explicit endorsement from executive sponsors and consistent reinforcement from programme leadership.',
  },
]

export default function ExitGateSystemPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Exit Gate System™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Framework</span>
          <h1 className={styles.frameworkHeroH1}>SpanForge Exit Gate System™</h1>
          <p className={styles.frameworkHeroSub}>
            A formal, evidence-based lifecycle that addresses the root cause of pilot purgatory.
            Defined stages. Explicit transition criteria. Non-negotiable gate conditions.
            Every advancement decision made on evidence; every closure decision documented.
          </p>
        </div>
      </section>

      {/* What it solves */}
      <section className={styles.contentSection} aria-labelledby="problem-heading">
        <div className={`container ${styles.contentInner}`}>
          <h2 id="problem-heading" className={styles.sectionH2}>The problem it solves</h2>
          <p className={styles.summaryPara}>
            The fundamental failure of enterprise AI delivery is the absence of a shared, explicit
            contract between the AI team and the business about what conditions must be satisfied —
            and verified — before a pilot advances to the next stage. Without this contract,
            advancement decisions are political rather than evidential. Projects drift indefinitely,
            consuming budget and producing nothing of lasting value.
          </p>
          <p className={styles.summaryPara}>
            The SpanForge Exit Gate System™ resolves ambiguity at scheduled, mandatory intervals.
            It replaces informal iteration with a structured lifecycle: five stages, each with a
            defined objective and an explicit set of exit gate conditions that must be evidenced
            before a Gate Authority can approve advancement.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;Every advancement decision should be made on evidence. Every closure decision
              should be documented. Neither should ever be made by momentum alone.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Five-stage lifecycle */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="stages-heading"
      >
        <div className={`container ${styles.gateInner}`} style={{ maxWidth: '960px' }}>
          <span className="eyebrow">Five-stage lifecycle</span>
          <h2 id="stages-heading" className={styles.sectionH2}>
            From scoping to full production
          </h2>
          <p className={styles.sectionSub}>
            Each stage has a defined objective. Each gate requires documented evidence before
            advancement. Returning an initiative is a designed outcome, not a failure.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Name</th>
                  <th>Objective</th>
                  <th>Exit Gate Condition</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((s) => (
                  <tr key={s.num}>
                    <td>{s.num}</td>
                    <td><strong>{s.name}</strong></td>
                    <td>{s.objective}</td>
                    <td>{s.gate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Decision framework */}
      <section className={styles.contentSection} aria-labelledby="decision-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Gate outcomes</span>
          <h2 id="decision-heading" className={styles.sectionH2}>
            The decision framework at each gate
          </h2>
          <p className={styles.sectionSub}>
            A gate review produces one of three outcomes. Only one advances the initiative.
          </p>
          <div className={styles.decisionGrid}>
            {decisions.map((d) => (
              <div key={d.label} className={styles.decisionCard}>
                <span className={styles.decisionLabel}>{d.label}</span>
                <p className={styles.decisionDesc}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture layer */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="arch-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Governance &amp; controls layer</span>
          <h2 id="arch-heading" className={styles.sectionH2}>
            Controls embedded at every gate
          </h2>
          <p className={styles.sectionSub}>
            Two governance controls operate across the entire lifecycle.
          </p>
          <div className={styles.gateBox}>
            <span className={styles.gateEyebrow}>Gate Readiness Score™</span>
            <p className={styles.gateText}>
              A structured 0–100 evidence threshold. A score below 70 triggers an automatic
              remediation plan; no gate review is scheduled until the threshold is met.
            </p>
          </div>
          <div className={styles.gateBox} style={{ marginTop: '1rem' }}>
            <span className={styles.gateEyebrow}>Gate Authority</span>
            <p className={styles.gateText}>
              A cross-functional panel required at every gate. A budget-accountable business
              sponsor is mandatory — not a delegate. Without this, gate decisions revert to
              consensus and the gate becomes a formality.
            </p>
          </div>
          <div className={styles.gateBox} style={{ marginTop: '1rem' }}>
            <span className={styles.gateEyebrow}>Audit Trail</span>
            <p className={styles.gateText}>
              Signed evidence artefacts are produced at every gate for compliance and regression
              tracking. Undocumented return decisions create ambiguity about what the team must
              produce and eliminate the audit trail that makes progress legible.
            </p>
          </div>
        </div>
      </section>

      {/* Scope — when NOT to apply */}
      <section className={styles.contentSection} aria-labelledby="scope-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Scope</span>
          <h2 id="scope-heading" className={styles.sectionH2}>
            When the Exit Gate System™ should not be applied
          </h2>
          <p className={styles.summaryPara}>
            The SpanForge Exit Gate System™ is designed for AI initiatives with material business
            impact, production integration requirements, and meaningful stakeholder accountability.
            Three categories fall outside its intended scope:
          </p>
          <div className={styles.accelList}>
            {outOfScope.map((item) => (
              <div key={item.title} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{item.title}</p>
                  <p className={styles.accelDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.insightBox} style={{ marginTop: '2rem' }}>
            <p className={styles.insightText}>
              If an initiative could cause material disruption if it fails in production, affects
              customers or regulated data, or requires significant cross-functional coordination
              to operate, it belongs inside the SpanForge Exit Gate System™.
            </p>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="impl-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Implementation</span>
          <h2 id="impl-heading" className={styles.sectionH2}>
            Three foundational commitments
          </h2>
          <p className={styles.sectionSub}>
            Adopting the SpanForge Exit Gate System™ requires three commitments, applied
            consistently. They are designed to directly address the governance gaps that the
            research identifies as the primary causes of enterprise AI pilot failure.
          </p>
          <div className={styles.stepList}>
            {commitments.map((c) => (
              <div key={c.num} className={styles.stepItem}>
                <span className={styles.stepNum}>{c.num}</span>
                <div>
                  <p className={styles.stepTitle}>{c.title}</p>
                  <p className={styles.stepDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-day roadmap */}
      <section className={styles.contentSection} aria-labelledby="roadmap-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Recommended roadmap</span>
          <h2 id="roadmap-heading" className={styles.sectionH2}>90-day adoption roadmap</h2>
          <div className={styles.stepList}>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>1–15</span>
              <div>
                <p className={styles.stepTitle}>Portfolio audit</p>
                <p className={styles.stepDesc}>
                  Stage map and Gate Readiness Score™ produced for each active initiative.
                </p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>16–30</span>
              <div>
                <p className={styles.stepTitle}>Gate authority designation</p>
                <p className={styles.stepDesc}>
                  Gate Authority designated for all initiatives. Gate plans drafted with evidence
                  requirements and target review dates.
                </p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>31–60</span>
              <div>
                <p className={styles.stepTitle}>First gate reviews</p>
                <p className={styles.stepDesc}>
                  First gate reviews for initiatives within 60 days of a natural stage transition.
                </p>
              </div>
            </div>
            <div className={styles.stepItem}>
              <span className={styles.stepNum}>61–90</span>
              <div>
                <p className={styles.stepTitle}>Portfolio rationalisation</p>
                <p className={styles.stepDesc}>
                  Formal closure of initiatives that cannot meet current gate conditions within a
                  defined remediation period.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <nav className={styles.phaseNav} aria-label="Framework navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          <Link href="/platform/failure-funnel" className={styles.phaseNavLink}>
            <span className={styles.phaseNavDir}>← Related framework</span>
            <span className={styles.phaseNavLabel}>Failure Funnel™</span>
            <span className={styles.phaseNavTag}>Where AI initiatives are lost</span>
          </Link>
          <Link href="/platform/gate-readiness-score" className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
            <span className={styles.phaseNavDir}>Related framework →</span>
            <span className={styles.phaseNavLabel}>Gate Readiness Score™</span>
            <span className={styles.phaseNavTag}>The evidence threshold at every gate</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
