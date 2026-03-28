import Link from 'next/link'
import { phases } from '@/lib/phases-data'
import PhasePageLayout from '@/components/PhasePageLayout'
import styles from '@/components/phasePage.module.css'

const phase = phases[4]
const prev  = phases[3]

export const metadata = {
  title: 'Scale — Platform — SpanForge',
  description: phase.tagline,
}

export default function ScalePage() {
  return (
    <PhasePageLayout phase={phase} prev={prev} next={null}>
      <section className={styles.agentCallout} aria-labelledby="agentobs-heading">
        <div className="container">
          <div className={styles.agentCard}>
            <div className={styles.agentCardText}>
              <span className={styles.agentCardLabel}>Already live</span>
              <p id="agentobs-heading" className={styles.agentCardTitle}>AgentOBS</p>
              <p className={styles.agentCardDesc}>
                The behavioural observability layer powering the Scale phase. Connect via
                OpenTelemetry and see what your agents actually do — not just whether
                they&apos;re up.
              </p>
            </div>
            <Link
              href="/agentobs"
              className="btn-primary"
              style={{ whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Explore AgentOBS →
            </Link>
          </div>
        </div>
      </section>
    </PhasePageLayout>
  )
}
