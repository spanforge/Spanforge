import Link from 'next/link'
import { phases } from '@/lib/phases-data'
import PhasePageLayout from '@/components/PhasePageLayout'
import styles from '@/components/phasePage.module.css'

const phase = phases[0]
const next  = phases[1]

export const metadata = {
  title: 'Discover — Platform — SpanForge',
  description: phase.tagline,
}

export default function DiscoverPage() {
  return (
    <PhasePageLayout phase={phase} prev={null} next={next}>
      {/* Phase tools & artefacts */}
      <section className={styles.pipelineSection} aria-labelledby="discover-tools-heading">
        <div className="container">
          <span className="eyebrow">Phase artefacts</span>
          <h2 id="discover-tools-heading" className={styles.pipelineH2}>
            Governance tools for this phase
          </h2>
          <p className={styles.pipelineSub}>
            Structured artefacts designed to produce Gate 1-ready evidence.
          </p>

          <div className={styles.pipelineList}>
            <div className={styles.pipelineItem}>
              <span className={styles.pipelineItemNum}>v1.0</span>
              <div>
                <p className={styles.pipelineItemLabel}>AI Opportunity &amp; Problem Qualification Assessment</p>
                <p className={styles.pipelineItemNote}>
                  Two-phase, 12-dimension structured assessment. Qualifies AI initiatives before architecture decisions are made.
                  Gate threshold: Phase 1 score ≥ 45 to advance.{' '}
                  <Link
                    href="/platform/discover/ai-opportunity-assessment"
                    style={{ color: 'var(--red)', textDecoration: 'underline' }}
                  >
                    View assessment →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PhasePageLayout>
  )
}
