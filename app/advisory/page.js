import Link from 'next/link'
import { ENGAGEMENTS, LIFECYCLE_STAGES } from './data'
import styles from './page.module.css'

export const metadata = {
  title: 'Advisory',
  description:
    'SpanForge Advisory helps teams move from AI idea to compliant production with a structured lifecycle anchored to the platform.',
}

export default function AdvisoryPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <span className="eyebrow">SpanForge Advisory</span>
              <h1 className={styles.h1}>Move from AI prototypes to compliant production systems.</h1>
              <p className={styles.heroSub}>
                A structured path to design, build, and govern AI with enforcement powered by SpanForge.
              </p>
              <p className={styles.heroAnchor}>
                From AI idea to compliant production, powered by SpanForge.
              </p>
              <div className={styles.heroActions}>
                <Link href="/contact" className="btn-primary">Start Your Journey</Link>
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

      <section className={styles.gapSection} aria-labelledby="gap-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">The gap</span>
            <h2 id="gap-heading" className={styles.sectionTitle}>AI tools are easy to build. Production systems are where most teams fail.</h2>
            <p className={styles.sectionText}>
              Models, prompts, and demos move quickly. Production systems do not. The harder problem is defining controls,
              handling evidence, integrating governance into delivery, and proving what happened when systems act in the real world.
            </p>
          </div>

          <div className={styles.gapGrid}>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>01</span>
              <h3>Prototype speed hides operating risk.</h3>
              <p>Teams can ship a convincing demo before they have a credible answer for oversight, traceability, or data handling.</p>
            </article>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>02</span>
              <h3>Compliance failure is usually structural.</h3>
              <p>Most issues are not about model quality alone. They come from missing controls, weak records, and unclear release discipline.</p>
            </article>
            <article className={styles.gapCard}>
              <span className={styles.gapIndex}>03</span>
              <h3>The product and the journey need to connect.</h3>
              <p>Advisory matters when it guides teams into a production system with SpanForge embedded at the right moment.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.lifecycleSection} aria-labelledby="lifecycle-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">Signature framework</span>
            <h2 id="lifecycle-heading" className={styles.sectionTitle}>The SpanForge AI Lifecycle</h2>
            <p className={styles.sectionText}>
              A five-stage production framework for teams moving from intent to governed operation.
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

      <section className={styles.engagementSection} aria-labelledby="engagement-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className="eyebrow">Engagement paths</span>
            <h2 id="engagement-heading" className={styles.sectionTitle}>Choose the stage you are in, not a generic consulting package.</h2>
            <p className={styles.sectionText}>
              Advisory is organized around the lifecycle so the engagement model stays tied to production outcomes and product adoption.
            </p>
          </div>

          <div className={styles.engagementGrid}>
            {ENGAGEMENTS.map((item) => (
              <article key={item.slug} className={styles.engagementCard}>
                <p className={styles.engagementEyebrow}>{item.eyebrow}</p>
                <h3>{item.title}</h3>
                <p className={styles.engagementSummary}>{item.summary}</p>
                <div className={styles.outcomeList}>
                  {item.outcomes.map((outcome) => (
                    <span key={outcome} className={styles.outcomePill}>{outcome}</span>
                  ))}
                </div>
                <Link href={`/advisory/${item.slug}`} className={styles.cardLink}>
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="eyebrow">Start here</span>
            <h2 id="cta-heading" className={styles.ctaTitle}>Start your AI compliance journey with SpanForge.</h2>
            <p className={styles.ctaText}>
              SpanForge is the platform. Advisory is how you get there.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="btn-primary">Request a briefing</Link>
              <Link href="/docs" className="btn-ghost">Read the docs</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
