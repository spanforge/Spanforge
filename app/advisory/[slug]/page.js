import Link from 'next/link'
import { notFound } from 'next/navigation'
import { DETAIL_PAGES } from '../data'
import styles from './page.module.css'

export function generateStaticParams() {
  return Object.keys(DETAIL_PAGES).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const page = DETAIL_PAGES[params.slug]

  if (!page) {
    return {}
  }

  return {
    title: `${page.title} Advisory`,
    description: page.description,
  }
}

export default function AdvisoryDetailPage({ params }) {
  const page = DETAIL_PAGES[params.slug]

  if (!page) {
    notFound()
  }

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">Advisory / {page.title}</span>
          <h1 className={styles.h1}>{page.hero}</h1>
          <p className={styles.heroSub}>{page.intro}</p>
          <p className={styles.heroFocus}>{page.focus}</p>
        </div>
      </section>

      <section className={styles.mainSection} aria-labelledby="included-heading">
        <div className={`container ${styles.mainGrid}`}>
          <div className={styles.contentCard}>
            <span className="eyebrow">What is included</span>
            <h2 id="included-heading" className={styles.sectionTitle}>Structured around the lifecycle, not detached service lines.</h2>
            <div className={styles.listGrid}>
              {page.included.map((item) => (
                <div key={item} className={styles.listItem}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.sideCard}>
            <p className={styles.sideLabel}>Lifecycle stages</p>
            <div className={styles.stagePills}>
              {page.stages.map((stage) => (
                <span key={stage} className={styles.stagePill}>{stage}</span>
              ))}
            </div>
            <p className={styles.sideCopy}>
              Each engagement is designed to move teams toward governed adoption of SpanForge, not to create a parallel advisory track.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.outcomesSection} aria-labelledby="outcomes-heading">
        <div className="container">
          <span className="eyebrow">Expected outcomes</span>
          <h2 id="outcomes-heading" className={styles.sectionTitle}>What this engagement should change.</h2>
          <div className={styles.outcomeGrid}>
            {page.outcomes.map((item, index) => (
              <article key={item} className={styles.outcomeCard}>
                <span className={styles.outcomeNumber}>0{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.ctaCard}>
            <span className="eyebrow">Next step</span>
            <h2 id="cta-heading" className={styles.sectionTitle}>Bring the conversation back to the platform.</h2>
            <p className={styles.ctaText}>
              The objective is not advisory for its own sake. The objective is a production system with controls, enforcement, and evidence powered by SpanForge.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn-primary">Request a briefing</Link>
              <Link href="/advisory" className="btn-ghost">Back to advisory</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
