import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Pilot Risk Index™ — SpanForge',
  description:
    'A five-failure-mode taxonomy mapped to each gate in the SpanForge Exit Gate System™. Each gate is designed to prevent one specific failure mode drawn from the governance, data, and lifecycle gaps identified in industry research.',
}

const riskIndex = [
  {
    gate: 'Gate 1 — Scoping',
    failureMode: 'Wrong problem defined',
    prevention:
      'Forces a written, signed problem statement before any technical work begins. An initiative cannot advance to Proof of Concept without a documented problem definition, confirmed data access, and a sponsor commitment letter.',
  },
  {
    gate: 'Gate 2 — PoC',
    failureMode: 'Technical infeasibility undetected',
    prevention:
      'Requires demonstrated accuracy on representative data before pilot investment. The gate ensures teams are not advancing on the basis of synthetic or curated data that does not reflect production conditions.',
  },
  {
    gate: 'Gate 3 — Pilot',
    failureMode: 'No measurable business value',
    prevention:
      'Mandates KPI validation in a real operating environment, not a sandbox. Business value must be evidenced in production conditions, with KPI targets achieved and operational integration confirmed.',
  },
  {
    gate: 'Gate 4 — Limited Release',
    failureMode: 'No user adoption',
    prevention:
      'Requires measured adoption rates and SLA compliance from actual users before full deployment. Validation occurs with real users, not internal testers, and a defined support model must be in place.',
  },
  {
    gate: 'Gate 5 — Production',
    failureMode: 'No scalability or governance',
    prevention:
      'Confirms runbooks, monitoring, and owner accountability before removing programme controls. The system cannot move to unmonitored operation at scale without a live monitoring configuration, an approved runbook, and documented ownership.',
  },
]

export default function PilotRiskIndexPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Pilot Risk Index™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Framework</span>
          <h1 className={styles.frameworkHeroH1}>SpanForge Pilot Risk Index™</h1>
          <p className={styles.frameworkHeroSub}>
            A five-failure-mode taxonomy mapped to each gate in the SpanForge Exit Gate System™.
            Each gate is designed to prevent one specific failure mode drawn from the governance,
            data, and lifecycle gaps consistently identified across S&P Global Market Intelligence,
            Gartner, and McKinsey research.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className={styles.contentSection} aria-labelledby="what-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">What it is</span>
          <h2 id="what-heading" className={styles.sectionH2}>
            One failure mode. One gate. Five gates total.
          </h2>
          <p className={styles.summaryPara}>
            The SpanForge Pilot Risk Index™ is a five-failure-mode taxonomy. Each failure mode
            corresponds to one gate in the SpanForge Exit Gate System™. The design logic is that
            each gate, if applied correctly, prevents a specific and well-documented failure pattern
            from surviving to the next stage.
          </p>
          <p className={styles.summaryPara}>
            The five failure modes are drawn from the governance, data, and lifecycle gaps
            consistently identified in S&P Global Market Intelligence (2025), Gartner (2024, 2025),
            and McKinsey &amp; Company (2025). They are not theoretical — they represent the actual
            conditions under which the research shows enterprise AI pilots are abandoned.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;The SpanForge Pilot Risk Index™ is a five-failure-mode taxonomy mapped to
              each gate. Designed to address the governance and lifecycle gaps identified in the
              sources cited in this paper.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The five failure modes — full table */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="table-heading"
      >
        <div className={`container ${styles.gateInner}`} style={{ maxWidth: '960px' }}>
          <span className="eyebrow">Five-gate taxonomy</span>
          <h2 id="table-heading" className={styles.sectionH2}>
            What each gate prevents
          </h2>
          <p className={styles.sectionSub}>
            Each row represents a gate in the Exit Gate System™, the failure mode that gate is
            designed to prevent, and the mechanism by which it prevents it.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Gate</th>
                  <th>Failure Mode Prevented</th>
                  <th>How the Gate Prevents It</th>
                </tr>
              </thead>
              <tbody>
                {riskIndex.map((row) => (
                  <tr key={row.gate}>
                    <td>{row.gate}</td>
                    <td><strong>{row.failureMode}</strong></td>
                    <td>{row.prevention}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.sourceNote}>
            Failure mode taxonomy based on patterns identified across S&P Global Market
            Intelligence (2025), Gartner (2024, 2025), and McKinsey &amp; Company (2025).
            Gate-to-failure-mode mapping: SpanForge analysis.
          </p>
        </div>
      </section>

      {/* Detail by gate */}
      <section className={styles.contentSection} aria-labelledby="detail-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Gate-by-gate detail</span>
          <h2 id="detail-heading" className={styles.sectionH2}>
            Each gate in detail
          </h2>
          <div className={styles.accelList}>
            {riskIndex.map((row) => (
              <div key={row.gate} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{row.gate} — prevents: {row.failureMode}</p>
                  <p className={styles.accelDesc}>{row.prevention}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relationship to other frameworks */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="rel-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">How it is used</span>
          <h2 id="rel-heading" className={styles.sectionH2}>
            Used alongside the Gate Readiness Score™
          </h2>
          <p className={styles.summaryPara}>
            In the SpanForge 4-Week AI Portfolio Diagnostic, a Gate Readiness Score™ and a
            Pilot Risk Index™ assessment are produced for every active initiative in the
            portfolio. The Gate Readiness Score™ identifies how close each initiative is to
            meeting the evidence threshold for its current gate; the Pilot Risk Index™ identifies
            which failure mode the initiative is most exposed to if it advances without meeting
            that threshold.
          </p>
          <p className={styles.summaryPara}>
            Together, the two instruments give programme leadership and the Gate Authority a
            structured picture of where each initiative stands and what specifically will happen
            if it advances prematurely.
          </p>
        </div>
      </section>

      {/* Research base */}
      <section className={styles.contentSection} aria-labelledby="research-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Evidence base</span>
          <h2 id="research-heading" className={styles.sectionH2}>
            Grounded in published research
          </h2>
          <p className={styles.summaryPara}>
            The five failure modes in the SpanForge Pilot Risk Index™ are not hypothetical.
            They are derived from the governance, data, and lifecycle gaps that three major
            research surveys identify as the dominant causes of enterprise AI pilot failure.
          </p>
          <p className={styles.summaryPara}>
            Gartner (2024) found that fewer than one in five pilot-phase projects had written,
            agreed success criteria before development commenced — the condition Gate 1 directly
            addresses. Gartner (2025) found that 63% of organisations do not have or are unsure
            they have the right data management practices to support AI — the condition Gate 2
            addresses. The S&P Global data showing 46% of proof-of-concepts are scrapped before
            production reflects the combined effect of the failure modes Gates 3, 4, and 5 are
            designed to prevent.
          </p>
          <p className={styles.sourceNote}>
            S&P Global Market Intelligence. (2025). <em>Voice of the Enterprise: AI &amp; Machine
            Learning, Use Cases 2025.</em>
            <br />
            Gartner, Inc. (2024). <em>Gartner Predicts 30% of Generative AI Projects Will Be
            Abandoned After Proof of Concept By End of 2025.</em>
            <br />
            Gartner, Inc. (2025). <em>Lack of AI-Ready Data Puts AI Projects at Risk.</em>
            <br />
            McKinsey &amp; Company. (2025). <em>The State of AI in 2025.</em>
          </p>
        </div>
      </section>

      {/* Related */}
      <nav className={styles.phaseNav} aria-label="Framework navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          <Link href="/platform/gate-readiness-score" className={styles.phaseNavLink}>
            <span className={styles.phaseNavDir}>← Related framework</span>
            <span className={styles.phaseNavLabel}>Gate Readiness Score™</span>
            <span className={styles.phaseNavTag}>The evidence threshold at every gate</span>
          </Link>
          <Link href="/platform/exit-gate-system" className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
            <span className={styles.phaseNavDir}>Parent framework →</span>
            <span className={styles.phaseNavLabel}>Exit Gate System™</span>
            <span className={styles.phaseNavTag}>The lifecycle the index maps to</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
