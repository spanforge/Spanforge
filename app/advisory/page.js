import Link from 'next/link'
import { ENGAGEMENTS, FAILURE_FUNNEL, LIFECYCLE_STAGES, TRUST_DIMENSIONS, DOCTRINE } from './data'
import styles from './page.module.css'

export const metadata = {
  title: 'Advisory',
  description:
    'SpanForge Advisory: the structured path from AI prototype to governed production — using the Exit Gate System™, T.R.U.S.T. Framework, and platform enforcement for EU AI Act, GDPR, and SOC 2 readiness.',
}

export default function AdvisoryPage() {
  return (
    <>
      {/* ── Urgency Banner ── */}
      <div className={styles.urgencyBanner}>
        <span className={styles.urgencyDot} aria-hidden="true" />
        EU AI Act high-risk system enforcement begins August 2026. Conformity assessments, technical documentation, and human oversight requirements must be in place before that date.{' '}
        <Link href="/contact" className={styles.urgencyLink}>Start your assessment →</Link>
      </div>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">SpanForge Advisory</span>
              <h1 className={styles.h1}>Move from AI prototypes to compliant production systems.</h1>
              <p className={styles.heroSub}>
                A structured path to design, build, and govern AI — using the Exit Gate System™ and T.R.U.S.T. Framework with SpanForge enforcement embedded where it matters.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary">Start your compliance assessment</Link>
                <Link href="/spanforgecore/sdk" className="btn-ghost">Explore the SDK</Link>
              </div>
            </div>

            <div className={styles.heroPanel}>
              <p className={styles.panelLabel}>Advisory exists to get teams into the product correctly.</p>
              <div className={styles.panelList}>
                <div className={styles.panelItem}>
                  <span>Platform</span>
                  <p>SpanForge remains the core system for instrumentation, enforcement, and proof.</p>
                </div>
                <div className={styles.panelItem}>
                  <span>Advisory</span>
                  <p>The operating path that helps teams implement SpanForge in real environments.</p>
                </div>
                <div className={styles.panelItem}>
                  <span>Outcome</span>
                  <p>One narrative: not services beside the product, but a route into compliant production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Gap ── */}
      <section className={styles.gapSection} aria-labelledby="gap-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">The gap</span>
            <h2 id="gap-heading" className={styles.sectionTitle}>AI tools are easy to build. Production systems are where most teams fail.</h2>
            <p className={styles.sectionText}>
              Approximately 40% of companies abandoned the majority of their AI initiatives in 2025 — more than double the rate from the year before. AI incidents rose ~50% year-over-year between 2022 and 2024. The cause is not AI technology. It is a delivery discipline problem.
            </p>
          </div>

          <div className={styles.gapGrid}>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>01</span>
              <h3>Prototype speed hides operating risk.</h3>
              <p>Teams can ship a convincing demo before they have a credible answer for oversight, traceability, or data handling. The gap only becomes visible when someone asks for evidence.</p>
            </article>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>02</span>
              <h3>Compliance failure is usually structural.</h3>
              <p>Most issues are not about model quality alone. They come from missing controls, weak records, and unclear release discipline — gaps that precede any technical test.</p>
            </article>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>03</span>
              <h3>Evidence requirements arrive after systems are built.</h3>
              <p>Retrofitting governance into a live system is far more expensive than designing it in from the start. Compliance cannot be bolted on after the architecture is committed.</p>
            </article>
          </div>

          {/* ── Failure Funnel ── */}
          <div className={styles.funnelBlock} aria-label="AI initiative failure funnel">
            <p className={styles.funnelHeading}>Where AI initiatives are lost — the Exit Gate System™ failure pattern</p>
            <div className={styles.funnelList}>
              {FAILURE_FUNNEL.map((row) => (
                <div key={row.stage} className={`${styles.funnelRow} ${row.isLast ? styles.funnelRowLast : ''}`}>
                  <div className={styles.funnelStage}>{row.stage}</div>
                  <div className={styles.funnelBar}>
                    {row.isLast ? (
                      <span className={styles.funnelReach}>
                        Only <strong>{row.reach}</strong> reach governed production
                      </span>
                    ) : (
                      <span className={styles.funnelLost}>
                        Lost: <strong>{row.lost}</strong>
                      </span>
                    )}
                  </div>
                  <div className={styles.funnelCause}>{row.cause}</div>
                </div>
              ))}
            </div>
            <p className={styles.funnelNote}>
              Industry baseline: fewer than 20% of Gate 1 scoping projects reach Full Production within 18 months. SpanForge target: 30–50%.
            </p>
          </div>
        </div>
      </section>

      {/* ── T.R.U.S.T. Framework ── */}
      <section className={styles.trustSection} aria-labelledby="trust-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">The governance standard</span>
            <h2 id="trust-heading" className={styles.sectionTitle}>The T.R.U.S.T. Framework™</h2>
            <p className={styles.sectionText}>
              Every SpanForge engagement is governed by T.R.U.S.T. — five dimensions that convert AI ethics from policy documents into technical controls, compliance documentation, and audit-ready evidence. Applied to every system, on every engagement, without exception.
            </p>
          </div>

          <div className={styles.trustGrid}>
            {TRUST_DIMENSIONS.map((dim) => (
              <article key={dim.name} className={styles.trustCard}>
                <div className={styles.trustLetter}>{dim.letter}</div>
                <div>
                  <h3 className={styles.trustName}>{dim.name}</h3>
                  <p className={styles.trustBody}>{dim.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.trustNote}>
            <p>T.R.U.S.T. maps directly to EU AI Act Articles 13–14, GDPR Articles 13–22, SOC 2, HIPAA, ISO 42001, and NIST AI RMF. SpanForge is the platform implementation — providing RFC-0001 namespaces, SDK, CI/CD gate pipeline, and Compliance Evidence Chain.</p>
          </div>
        </div>
      </section>

      {/* ── Exit Gate System™ / Lifecycle ── */}
      <section className={styles.lifecycleSection} aria-labelledby="lifecycle-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">The Exit Gate System™</span>
            <h2 id="lifecycle-heading" className={styles.sectionTitle}>Five stages. Five gates. Every advancement on evidence.</h2>
            <p className={styles.sectionText}>
              The Exit Gate System™ replaces momentum-driven piloting with a formal, evidence-led lifecycle. Every stage has defined exit criteria. Every gate produces one of three decisions — Advance, Conditional Advance, or Return. No initiative advances because people believe in it.
            </p>
          </div>

          <div className={styles.stageList}>
            {LIFECYCLE_STAGES.map((stage) => (
              <article key={stage.number} className={`${styles.stageCard} ${stage.highlight ? styles.stageCardFeatured : ''}`}>
                <div className={styles.stageTop}>
                  <span className={styles.stageNumber}>{stage.number}</span>
                  <div>
                    <p className={styles.stageName}>{stage.name}</p>
                    <h3>{stage.title}</h3>
                  </div>
                </div>
                <p className={styles.stageBody}>{stage.body}</p>
                {stage.gate ? (
                  <div className={styles.gateBlock}>
                    <p className={styles.gateLabel}>{stage.gate}</p>
                    <p className={styles.gateCondition}>{stage.gateCondition}</p>
                  </div>
                ) : null}
                {stage.highlight ? (
                  <div className={styles.powerBlock}>
                    <p className={styles.powerTitle}>{stage.highlight}</p>
                    <div className={styles.powerGrid}>
                      {stage.bullets.map((bullet) => (
                        <span key={bullet} className={styles.powerPill}>{bullet}</span>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Engagement Paths ── */}
      <section className={styles.engagementSection} aria-labelledby="engagement-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">Engagement paths</span>
            <h2 id="engagement-heading" className={styles.sectionTitle}>Choose the stage you are in, not a generic consulting package.</h2>
            <p className={styles.sectionText}>
              Advisory is organised around the Exit Gate System™ so the engagement model stays tied to production outcomes. Each path has defined deliverables and a clear route into SpanForge.
            </p>
          </div>

          <div className={styles.engagementGrid}>
            {ENGAGEMENTS.map((item) => (
              <article key={item.slug} className={styles.engagementCard}>
                <p className={styles.engagementEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className={styles.engagementSummary}>{item.summary}</p>
                <ul className={styles.outcomeList}>
                  {item.outcomes.map((outcome) => (
                    <li key={outcome} className={styles.outcomePill}>{outcome}</li>
                  ))}
                </ul>
                <Link href={`/advisory/${item.slug}`} className={styles.cardLink}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ICP Qualifier ── */}
      <section className={styles.icpSection} aria-labelledby="icp-heading">
        <div className="container">
          <div className={styles.icpGrid}>
            <div>
              <span className="eyebrow">Right for you if</span>
              <h2 id="icp-heading" className={styles.icpTitle}>Advisory is built for teams shipping AI to production.</h2>
              <ul className={styles.icpList}>
                <li>Enterprise teams deploying autonomous agents to production environments</li>
                <li>Organisations needing audit trails for regulated data — GDPR, HIPAA, SOC 2</li>
                <li>Teams with cross-functional accountability across product, engineering, compliance, and legal</li>
                <li>Systems where failure could affect customers, privacy, or your compliance posture</li>
                <li>Organisations facing EU AI Act high-risk classification with enforcement arriving August 2026</li>
              </ul>
            </div>
            <div className={styles.icpNot}>
              <p className={styles.icpNotLabel}>Advisory is not right if</p>
              <ul className={styles.icpNotList}>
                <li>You are exploring AI at pre-product stage with no production ambitions yet</li>
                <li>Your work is pure R&D — learning objectives, not deployment</li>
                <li>There is no executive sponsor with budget accountability</li>
              </ul>
              <p className={styles.icpNotNote}>
                If an initiative could cause material disruption in production, affects customers or regulated data, or requires significant cross-functional coordination — it belongs inside this system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Doctrine ── */}
      <section className={styles.doctrineSection} aria-labelledby="doctrine-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">How we work</span>
            <h2 id="doctrine-heading" className={styles.sectionTitle}>Non-negotiable principles.</h2>
          </div>
          <div className={styles.doctrineGrid}>
            {DOCTRINE.map((item) => (
              <article key={item.label} className={styles.doctrineCard}>
                <h3 className={styles.doctrineLabel}>{item.label}</h3>
                <p className={styles.doctrineBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="eyebrow">Start here</span>
            <h2 id="cta-heading" className={styles.ctaTitle}>Map your path to compliant production before August 2026.</h2>
            <p className={styles.ctaText}>
              Start with an Assessment. Know your Gate 1 posture, your EU AI Act risk classification, and your T.R.U.S.T. compliance gaps before you commit budget to build.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">Request a compliance assessment</Link>
              <Link href="/docs" className="btn-ghost">Read the docs</Link>
              <Link href="/" className={styles.ctaHomeLink}>SpanForge home</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
