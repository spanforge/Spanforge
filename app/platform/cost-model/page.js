import Link from 'next/link'
import styles from '@/components/phasePage.module.css'

export const metadata = {
  title: 'Cost Model™ — SpanForge',
  description:
    'The true cost of pilot purgatory extends far beyond what appears on a budget report. Most AI programme cost is invisible — and therefore unmanaged. The SpanForge Cost Model™ maps both visible and hidden cost categories.',
}

const visibleCosts = [
  { label: 'Compute & Infrastructure', measure: 'Typically measurable' },
  { label: 'Vendor Licences', measure: 'Typically measurable' },
  { label: 'Contractor & Staff Fees', measure: 'Typically measurable' },
]

const hiddenCosts = [
  {
    label: 'Deferred Business Value',
    measure: 'Rarely measured — often largest',
    desc: 'Every month a pilot spends in purgatory is a month the business value it was designed to capture is not being realised. A 12-month delay on a customer-facing initiative targeting a 15% reduction in service handling time compounds losses far beyond the direct programme cost.',
  },
  {
    label: 'Credibility Rebuild Investment',
    measure: 'Rarely measured',
    desc: 'When AI pilots fail visibly and repeatedly, investment appetite contracts. AI becomes politically associated with broken promises rather than competitive advantage. Rebuilding sponsor confidence after a series of high-profile failures takes time and organisational effort that is rarely budgeted for. The cost is real, even if it does not appear on a balance sheet.',
  },
  {
    label: 'Competitive Displacement',
    measure: 'Rarely measured — compounds over time',
    desc: 'Competitors who have solved the delivery problem are compounding production-system value while others cycle through abandoned pilots. Closing the resulting gap becomes more expensive with each passing cycle.',
  },
  {
    label: 'Internal Staff Opportunity Cost',
    measure: 'Rarely measured',
    desc: 'Senior engineers and data scientists assigned to failing pilots are not available for initiatives that could ship. The cost is not the salary — it is the foregone value of work that did not happen.',
  },
]

export default function CostModelPage() {
  return (
    <>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>← Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>Cost Model™</span>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">SpanForge Framework</span>
          <h1 className={styles.frameworkHeroH1}>SpanForge Cost Model™</h1>
          <p className={styles.frameworkHeroSub}>
            The true cost of pilot purgatory extends far beyond what appears on a budget report.
            Organisations typically account for only the direct costs of abandoned pilots — compute,
            vendor fees, and contractor hours. These visible costs represent only a fraction of
            the total impact.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.contentSection} aria-labelledby="intro-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">The hidden majority</span>
          <h2 id="intro-heading" className={styles.sectionH2}>
            Most AI programme cost is invisible
          </h2>
          <p className={styles.summaryPara}>
            The direct costs of an abandoned AI pilot — compute, vendor licences, contractor fees,
            and internal staff time — are rarely trivial. For mid-market organisations these costs
            are measured in hundreds of thousands of dollars; for enterprise-scale programmes, in
            millions. But direct costs are only part of the picture.
          </p>
          <p className={styles.summaryPara}>
            The larger burden sits below the surface, rarely appearing on a budget report.
            This invisibility is precisely why it keeps compounding: what does not appear on a
            financial statement does not get managed.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;Most AI programme cost is invisible on financial statements. That invisibility
              is why it keeps compounding.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* The Cost Model */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="model-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">SpanForge Cost Model™</span>
          <h2 id="model-heading" className={styles.sectionH2}>
            Visible costs vs. hidden costs
          </h2>
          <p className={styles.sectionSub}>
            The SpanForge Cost Model™ separates what appears on a budget from what actually
            determines the outcome of an AI programme. Cost categories are illustrative, drawn
            from publicly available industry benchmarks.
          </p>

          <div className={styles.costBlock}>
            {/* Visible */}
            <div className={styles.costBlockHeader}>
              <span className={styles.costBlockHeaderLabel}>▲ Visible costs — what appears on the budget</span>
            </div>
            {visibleCosts.map((item) => (
              <div key={item.label} className={styles.costItem}>
                <span className={styles.costItemLabel}>{item.label}</span>
                <span className={styles.costItemMeasure}>{item.measure}</span>
              </div>
            ))}
            {/* Divider */}
            <div className={styles.costDivider}>
              <span className={styles.costDividerLabel}>Budget visibility line ·····················</span>
            </div>
            {/* Hidden header */}
            <div className={styles.costBlockHeader} style={{ borderTop: 'none' }}>
              <span className={styles.costBlockHeaderLabel}>▼ Hidden costs — what actually sinks the programme</span>
            </div>
            {hiddenCosts.map((item) => (
              <div key={item.label} className={styles.costItem}>
                <span className={styles.costItemLabel}>{item.label}</span>
                <span className={styles.costItemMeasure}>{item.measure}</span>
              </div>
            ))}
          </div>
          <p className={styles.sourceNote}>
            Cost categories and ranges are illustrative, drawn from publicly available industry
            benchmarks. Estimates; individual results will vary.
          </p>
        </div>
      </section>

      {/* Four categories in detail */}
      <section className={styles.contentSection} aria-labelledby="detail-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Hidden cost detail</span>
          <h2 id="detail-heading" className={styles.sectionH2}>
            The four hidden cost categories
          </h2>
          <div className={styles.accelList}>
            {hiddenCosts.map((item) => (
              <div key={item.label} className={styles.accelItem}>
                <div>
                  <p className={styles.accelTitle}>{item.label}</p>
                  <p className={styles.accelDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sunk cost note */}
      <section
        className={styles.gateSection}
        style={{ background: 'var(--charcoal)' }}
        aria-labelledby="sunk-heading"
      >
        <div className={`container ${styles.gateInner}`}>
          <span className="eyebrow">Important distinction</span>
          <h2 id="sunk-heading" className={styles.sectionH2}>
            Sunk cost is not the primary risk
          </h2>
          <p className={styles.summaryPara}>
            Sunk cost is not the primary risk of a failed pilot. The primary risk is the
            credibility damage that makes the next initiative harder to fund, staff, and deliver.
            Each failed pilot erodes appetite for the next, reduces tolerance for ambiguity, and
            increases political resistance to AI investment.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;The majority of AI programme cost is invisible — and therefore unmanaged.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CostGuard connection */}
      <section className={styles.contentSection} aria-labelledby="costintel-heading">
        <div className={`container ${styles.contentInner}`}>
          <span className="eyebrow">Prevention, not diagnosis</span>
          <h2 id="costintel-heading" className={styles.sectionH2}>
            Cost Intelligence Layer — cost governed at Design time and in production
          </h2>
          <p className={styles.summaryPara}>
            The Cost Model™ diagnoses the cost of failure after the fact. The Cost Intelligence
            Layer prevents avoidable cost by making infrastructure and model spend visible at the
            Design phase — before any commitment is made — and tracks runtime token consumption
            continuously in production via the SpanForge llm.cost.* namespace.
          </p>
          <p className={styles.summaryPara}>
            Where the Cost Model™ explains what went wrong, the Cost Intelligence Layer removes
            the conditions that allow it to go wrong in the first place. Design-time scenario
            comparisons feed directly into the Gate Readiness Score™ Cost Readiness dimension.
            Runtime cost attribution by actor, team, and session ensures the financial accountability
            the T.R.U.S.T. Responsibility dimension requires.
          </p>
          <div className={styles.insightBox}>
            <p className={styles.insightText}>
              &ldquo;Cost is a design decision and a compliance signal — not a report. Infrastructure
              cost ungoverned at Design time cannot be governed at all. Token cost unattributed in
              production cannot be audited at all.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <nav className={styles.phaseNav} aria-label="Framework navigation">
        <div className={`container ${styles.phaseNavInner}`}>
          <Link href="/platform/failure-funnel" className={styles.phaseNavLink}>
            <span className={styles.phaseNavDir}>← Related framework</span>
            <span className={styles.phaseNavLabel}>Failure Funnel™</span>
            <span className={styles.phaseNavTag}>Where AI initiatives are lost</span>
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
