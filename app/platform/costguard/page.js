import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'CostGuard™ — SpanForge',
  description:
    'CostGuard™ is SpanForge\'s Design-phase cost intelligence capability. Every architecture decision carries a cost estimate before any resource is committed — AWS live, GCP and Azure in development.',
}

const capabilities = [
  {
    num: '01',
    label: 'Pre-commitment cost prediction',
    desc: 'Infrastructure configuration or model selection produces a cost estimate before any resource is created. Cost is known at the decision point — not discovered on the first bill.',
  },
  {
    num: '02',
    label: 'Scenario comparison (3-way)',
    desc: 'Cheapest, balanced, and performance infrastructure architectures evaluated side by side at Design time. The team sees the trade-off curve before committing to a configuration.',
  },
  {
    num: '03',
    label: 'Optimisation recommendations',
    desc: 'Actionable cost-saving changes ranked by impact. Each recommendation is aligned to Gate Readiness Score™ Cost Readiness dimension evidence requirements.',
  },
  {
    num: '04',
    label: 'Continuous cost feedback loop',
    desc: 'Actual vs. predicted costs feed back into the Design phase, improving future estimate accuracy across the portfolio. Every initiative makes future estimates more reliable.',
  },
]

const roadmap = [
  {
    capability: 'AWS infrastructure cost estimation',
    status: 'Live',
    timeline: 'Available now',
    notes: 'EC2, RDS, S3, Lambda, EKS supported',
    isLive: true,
  },
  {
    capability: 'Terraform & YAML input parsing',
    status: 'Live',
    timeline: 'Available now',
    notes: 'HCL and infrastructure-as-code configs',
    isLive: true,
  },
  {
    capability: 'Scenario comparison (3-way)',
    status: 'Live',
    timeline: 'Available now',
    notes: 'Cheapest, balanced, performance profiles',
    isLive: true,
  },
  {
    capability: 'GCP infrastructure cost estimation',
    status: 'In development',
    timeline: 'Q3 2026',
    notes: 'Compute Engine, Cloud Run, BigQuery',
    isLive: false,
  },
  {
    capability: 'Azure infrastructure cost estimation',
    status: 'In development',
    timeline: 'Q4 2026',
    notes: 'Azure VMs, AKS, Azure SQL',
    isLive: false,
  },
  {
    capability: 'LLM / AI inference cost estimation',
    status: 'Roadmap',
    timeline: '2027',
    notes: 'OpenAI, Anthropic, Bedrock API costs',
    isLive: false,
  },
  {
    capability: 'CI/CD pipeline integration',
    status: 'Roadmap',
    timeline: '2027',
    notes: 'GitHub Actions, GitLab, Jenkins',
    isLive: false,
  },
  {
    capability: 'Portfolio cost dashboard',
    status: 'Roadmap',
    timeline: '2027',
    notes: 'Aggregate cost vs. estimate across all initiatives',
    isLive: false,
  },
]

export default function CostGuardPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>CostGuard™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Product — Design Phase</span>
          <h1 className={styles.frameworkHeroH1}>CostGuard™</h1>
          <p className={styles.frameworkHeroSub}>
            Decision-time cost intelligence. CostGuard™ ensures every architecture decision
            in the Design phase carries a cost estimate before any resource is committed.
            Capability and cost — both known before a single line of production code is written.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className={styles.contentSection} aria-labelledby="what-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">The problem it solves</span>
          <h2 id="what-heading" className={styles.sectionH2}>
            Cost is a design decision, not a report
          </h2>
          <p className={styles.summaryPara}>
            The Design phase governs which model to select and which infrastructure to deploy —
            but it has not previously governed the cost of those decisions at the moment
            they are made. CostGuard™ closes this gap. It is a pre-deployment cost intelligence
            tool built natively into the SpanForge Design phase.
          </p>
          <p className={styles.summaryPara}>
            CostGuard™ operates at the decision point — not after it. Just as the model
            readiness score tells teams what they can run, CostGuard™ tells them what it will
            cost to run it. The two outputs together constitute a complete Design phase decision
            brief: capability and cost, both known before a single line of production code
            is written.
          </p>
          <p className={styles.summaryPara}>
            CostGuard™ is the SpanForge answer to the question the market cannot currently
            answer at design time: <strong>what will this architecture cost before we build it?</strong>
          </p>
        </div>
      </section>

      {/* Core capabilities */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="capabilities-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Core capabilities</span>
          <h2 id="capabilities-heading" className={styles.sectionH2}>
            Four capabilities, one brief
          </h2>
          <p className={styles.sectionSub}>
            CostGuard™ produces a structured cost brief — a baseline estimate, three scenario
            comparisons, and a ranked list of optimisation actions — submitted as part of the
            Design Exit Gate evidence package.
          </p>
          <div className={styles.dimGrid}>
            {capabilities.map((c) => (
              <div key={c.num} className={styles.dimCard}>
                <p className={styles.dimCardNum}>{c.num}</p>
                <p className={styles.dimCardLabel}>{c.label}</p>
                <p className={styles.dimCardDesc}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it integrates */}
      <section className={styles.contentSection} aria-labelledby="integration-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Integration</span>
          <h2 id="integration-heading" className={styles.sectionH2}>
            How CostGuard™ integrates
          </h2>
          <p className={styles.summaryPara}>
            CostGuard™ accepts Terraform configurations, infrastructure YAML, and direct CLI inputs.
            It connects to live cloud pricing APIs — starting with AWS — to produce real-time
            estimates against the proposed architecture.
          </p>
          <p className={styles.summaryPara}>
            The output is a structured cost brief: a baseline estimate, three scenario comparisons
            (cheapest, balanced, performance), and a ranked list of optimisation actions. This
            brief is submitted as part of the Design Exit Gate evidence package and feeds directly
            into the Gate Readiness Score™ Cost Readiness dimension.
          </p>
          <div className={styles.accelList}>
            <div className={styles.accelItem}>
              <div>
                <p className={styles.accelTitle}>Gate Readiness Score™ — Cost Readiness</p>
                <p className={styles.accelDesc}>
                  CostGuard™ is the required evidence source for the sixth GRS dimension. No
                  Design Exit Gate evidence package is complete without a CostGuard™ cost brief
                  covering the selected infrastructure configuration with documented scenario
                  comparison.
                </p>
              </div>
            </div>
            <div className={styles.accelItem}>
              <div>
                <p className={styles.accelTitle}>Design Exit Gate condition</p>
                <p className={styles.accelDesc}>
                  Nothing progresses from Design to Build without: architecture documented, data
                  strategy validated, security reviewed, team capacity confirmed, and CostGuard™
                  cost estimate produced with scenario comparison documented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capability roadmap */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="roadmap-heading"
      >
        <div className={`container ${styles.gateInner}`} style={{ maxWidth: '900px' }}>
          <span className="eyebrow">As of April 2026</span>
          <h2 id="roadmap-heading" className={styles.sectionH2}>
            CostGuard™ capability roadmap
          </h2>
          <p className={styles.sectionSub}>
            Timelines reflect design intent and are subject to change. For specific integration
            requirements, contact{' '}
            <a href="mailto:advisory@getspanforge.com" style={{ color: 'var(--ember)' }}>
              advisory@getspanforge.com
            </a>{' '}
            to discuss roadmap priority.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Status</th>
                  <th>Timeline</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {roadmap.map((row) => (
                  <tr key={row.capability}>
                    <td>{row.capability}</td>
                    <td style={{ color: row.isLive ? 'var(--brand-green, #4ade80)' : 'inherit' }}>
                      {row.status}
                    </td>
                    <td>{row.timeline}</td>
                    <td>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scope statement */}
      <section className={styles.contentSection} aria-labelledby="scope-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Scope</span>
          <h2 id="scope-heading" className={styles.sectionH2}>
            What CostGuard™ is, and is not
          </h2>
          <p className={styles.summaryPara}>
            CostGuard™ is intended to inform Design phase decisions — not replace financial
            governance or cloud billing review processes. Cost estimates reflect design-time
            projections based on configuration inputs. Actual costs will vary based on usage
            patterns, pricing changes, and runtime behaviour.
          </p>
          <p className={styles.summaryPara}>
            CostGuard™ is a complement to the SpanForge Cost Model™, not a replacement for it.
            Where the Cost Model™ diagnoses the cost of failure after the fact, CostGuard™
            prevents avoidable cost by making infrastructure and model spend visible at the
            Design phase, before any commitment is made.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link href="/platform/cost-model" className="btn-ghost">
              Explore the Cost Model™ →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.trustCta}>
        <div className={`container ${styles.trustCtaInner}`}>
          <h2 className={styles.trustCtaH2}>Cost-aware from day one.</h2>
          <p className={styles.trustCtaSub}>
            Start in the Design phase — the only point where cost intelligence can prevent
            commitment, not just report on it.
          </p>
          <Link href="/platform/design" className="btn-primary">
            Explore the Design Phase →
          </Link>
        </div>
      </section>
    </>
  )
}
