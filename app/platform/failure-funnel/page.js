import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Failure Funnel™ — SpanForge',
  description:
    'Illustrative representation of where AI initiatives are typically lost across the lifecycle, based on publicly reported adoption data from S&P Global Market Intelligence (2025).',
}

const stats = [
  {
    num: '42%',
    label: 'of companies abandoned most AI initiatives in 2025',
    source: 'S&P Global Market Intelligence, 2025 — up from 17% in 2024',
  },
  {
    num: '46%',
    label: 'of AI proof-of-concepts scrapped before reaching production',
    source: 'S&P Global Market Intelligence, 2025',
  },
  {
    num: '~2/3',
    label: 'of organisations have not yet begun scaling AI across the enterprise',
    source: 'McKinsey State of AI, 2025 — survey of 1,993 organisations',
  },
  {
    num: '30%+',
    label: 'of generative AI projects predicted to be abandoned after proof of concept',
    source: 'Gartner, July 2024',
  },
  {
    num: '39%',
    label: 'of organisations report any enterprise-level AI business impact',
    source: 'McKinsey State of AI, 2025',
  },
]

const funnelStages = [
  { gate: 'Start', label: 'Initiatives Started', isEnd: false },
  { gate: 'Gate 1', label: 'Survive Scoping', isEnd: false },
  { gate: 'Gate 2', label: 'Pass Proof of Concept', isEnd: false },
  { gate: 'Gate 3', label: 'Validated Pilot', isEnd: false },
  { gate: 'Gate 4', label: 'Limited Release', isEnd: false },
  { gate: '→', label: 'Full Production', isEnd: true },
]

const accelerants = [
  {
    title: 'Capability inflation',
    desc: 'Model releases have been so rapid that organisations chronically restart pilots to incorporate the "latest" version, resetting the maturity clock each time.',
  },
  {
    title: 'Governance vacuum',
    desc: 'Most enterprises bolted AI onto governance frameworks designed for deterministic software. Gartner (2025) found that 63% of organisations do not have or are unsure they have the right data management and governance practices to support AI — creating unresolvable approval loops and decision gaps.',
  },
  {
    title: 'Talent dilution',
    desc: 'As demand for AI practitioners surged, methodology rigour has not kept pace with tool proliferation.',
  },
  {
    title: 'Expectation misalignment',
    desc: 'Executive sponsors hold timelines disconnected from enterprise integration realities. When reality diverges, projects are cancelled rather than recalibrated.',
  },
]

export default function FailureFunnelPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Failure Funnel™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Research</span>
          <h1 className={styles.frameworkHeroH1}>SpanForge Failure Funnel™</h1>
          <p className={styles.frameworkHeroSub}>
            An illustrative representation of where AI initiatives are typically lost
            across the lifecycle. Based on publicly reported adoption data from S&P Global Market
            Intelligence (2025). Specific drop-off rates at each stage are illustrative.
          </p>
        </div>
      </section>

      {/* Key statistics */}
      <section className={styles.contentSection} aria-labelledby="stats-heading">
        <div className={`container ${styles.contentInner}`} style={{ maxWidth: '960px' }}>
          <span className="eyebrow">The evidence</span>
          <h2 id="stats-heading" className={styles.sectionH2}>
            Five numbers that define the crisis
          </h2>
          <div className={styles.statsGrid}>
            {stats.map((s) => (
              <div key={s.num} className={styles.statCard}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statSource}>{s.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funnel stages */}
      <section className={styles.funnelSection} aria-labelledby="funnel-heading">
        <div className="container">
          <span className="eyebrow">Drop-off by stage</span>
          <h2 id="funnel-heading" className={styles.sectionH2}>
            Where initiatives are lost
          </h2>
          <p className={styles.sectionSub}>
            Most are lost before technical limitations are ever tested. The S&P Global data shows
            that on average, organisations scrapped 46% of their AI proof-of-concepts before
            reaching production. Cost, data privacy, and security risks were cited as top obstacles.
          </p>
          <div className={styles.funnelList} role="list">
            {funnelStages.map((stage) => (
              <div
                key={stage.label}
                className={`${styles.funnelItem} ${stage.isEnd ? styles.funnelEndItem : ''}`}
                role="listitem"
              >
                <span className={stage.isEnd ? styles.funnelEndLabel : styles.funnelGate}>
                  {stage.gate}
                </span>
                <span className={stage.isEnd ? styles.funnelEndLabel : styles.funnelLabel}>
                  {stage.label}
                </span>
              </div>
            ))}
          </div>
          <p className={styles.sourceNote}>
            Illustrative representation based on publicly reported adoption data from S&P Global
            Market Intelligence (2025). Specific drop-off rates at each stage are illustrative.
            The funnel maps to the five stages of the SpanForge Exit Gate System™.
          </p>
        </div>
      </section>

      {/* What the data shows */}
      <section className={styles.contentSection} aria-labelledby="data-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Analysis</span>
          <h2 id="data-heading" className={styles.sectionH2}>What the data actually shows</h2>
          <p className={styles.summaryPara}>
            The S&P Global Market Intelligence survey of 1,006 enterprises covers sophisticated
            organisations with dedicated AI budgets, data science teams, and executive mandates.
            Approximately 42% reported abandoning the majority of their AI initiatives in 2025 —
            up from 17% in 2024. The doubling of the abandonment rate in a single year is not a
            trend — it is a structural collapse.
          </p>
          <p className={styles.summaryPara}>
            The McKinsey State of AI 2025 survey of 1,993 organisations across 105 countries
            reinforces this from a different angle: only 39% report any EBIT impact at the
            enterprise level. Widespread adoption has not translated into widespread delivery.
          </p>
          <p className={styles.summaryPara}>
            Initiatives in unstructured exploration phases — proof-of-concept work without
            defined success criteria — account for a disproportionate share of casualties.
            This pattern is consistent with the governance gaps identified across the sources
            cited in this analysis.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;AI is not failing in the lab — it is failing at the handoff to reality.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Four accelerants */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="accelerants-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Root causes</span>
          <h2 id="accelerants-heading" className={styles.sectionH2}>
            The four accelerants
          </h2>
          <p className={styles.sectionSub}>
            Four structural conditions explain why the abandonment rate is accelerating rather
            than declining as AI tooling matures.
          </p>
          <div className={styles.accelList}>
            {accelerants.map((item) => (
              <div key={item.title} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{item.title}</p>
                  <p className={styles.accelDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className={styles.contentSection} aria-labelledby="sources-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Sources</span>
          <h2 id="sources-heading" className={styles.sectionH2}>References</h2>
          <p className={styles.sourceNote}>
            S&P Global Market Intelligence. (2025). <em>Voice of the Enterprise: AI &amp; Machine
            Learning, Use Cases 2025.</em> Survey of 1,006 midlevel and senior IT and
            line-of-business professionals across North America and Europe, conducted
            October–November 2024.
            <br /><br />
            Gartner, Inc. (2024, July). <em>Gartner Predicts 30% of Generative AI Projects Will Be
            Abandoned After Proof of Concept By End of 2025.</em> Gartner Data &amp; Analytics Summit,
            Sydney.
            <br /><br />
            Gartner, Inc. (2025, February). <em>Lack of AI-Ready Data Puts AI Projects at Risk.</em>
            <br /><br />
            McKinsey &amp; Company. (2025). <em>The State of AI in 2025: Agents, Innovation, and
            Transformation.</em> Survey of 1,993 participants across 105 nations, conducted
            June–July 2025.
          </p>
        </div>
      </section>

      {/* Related */}
      <nav className={styles.phaseNav} aria-label="Framework navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          <Link href="/platform/cost-model" className={styles.phaseNavLink}>
            <span className={styles.phaseNavDir}>← Related framework</span>
            <span className={styles.phaseNavLabel}>Cost Model™</span>
            <span className={styles.phaseNavTag}>The true cost of pilot purgatory</span>
          </Link>
          <Link href="/platform/exit-gate-system" className={`${styles.phaseNavLink} ${styles.phaseNavRight}`}>
            <span className={styles.phaseNavDir}>The solution →</span>
            <span className={styles.phaseNavLabel}>Exit Gate System™</span>
            <span className={styles.phaseNavTag}>A structured path to production</span>
          </Link>
        </div>
      </nav>
    </>
  )
}
