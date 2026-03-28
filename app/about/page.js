import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'About SpanForge',
  description:
    'SpanForge is being built to close the gap between an enterprise AI prototype and a governed, auditable, production system. Who we are and why we are building this.',
}

const VALUES = [
  {
    title: 'Build in the open.',
    desc: 'The standards are public. The roadmap is public. The reasoning is visible. Enterprise AI needs more transparency, not less.',
  },
  {
    title: 'Opinionated by design.',
    desc: 'SpanForge has a clear position on how enterprise AI should be built. We would rather be useful and direct than vague and universally palatable.',
  },
  {
    title: 'Production is the point.',
    desc: 'A model in a notebook is not AI. We build for the organisations shipping to real users in regulated environments, not for the demo.',
  },
  {
    title: 'Standards before shortcuts.',
    desc: 'Every T.R.U.S.T. dimension exists because we have seen what happens when it is ignored. The standards are not overhead — they are the foundation.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">About SpanForge</span>
          <h1 className={styles.h1}>
            Decide. Build. Trust.
          </h1>
          <p className={styles.heroSub}>
            SpanForge was built because too many enterprise AI projects fail after the
            prototype. Not because the AI was wrong — because the organisation, the
            process, and the tooling were not ready for production.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission} aria-labelledby="mission-heading">
        <div className={`container ${styles.missionInner}`}>
          <h2 id="mission-heading" className={styles.missionH2}>
            The problem we are solving.
          </h2>
          <div className={styles.missionGrid}>
            <div>
              <p className={styles.missionCopy}>
                85% of enterprise AI projects fail to deliver on their intended objectives
                (Gartner). Not because the models don&rsquo;t work. Because the surrounding
                system — the governance, the observability, the standards, the process — is absent.
              </p>
              <p className={styles.missionCopy}>
              SpanForge is the AI lifecycle platform for enterprise teams — from deciding
              whether to build, to running confidently in production. It covers all five
              phases: Discover, Design, Build, Govern, and Scale.
              </p>
            </div>
            <div>
              <p className={styles.missionCopy}>
                We build for the team that has spent three months on a proof of concept
                and is now asking the hard questions: How do we govern this? How do we
                audit it? How do we know when it drifts? What happens when it fails?
              </p>
              <p className={styles.missionCopy}>
                SpanForge answers those questions — with a methodology proven across
                regulated industries, and tooling that is production-grade by default.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.values} aria-labelledby="values-heading">
        <div className="container">
          <span className="eyebrow">How we work</span>
          <h2 id="values-heading" className={styles.valuesH2}>
            Four principles. Non-negotiable.
          </h2>
          <div className={styles.valuesGrid}>
            {VALUES.map(v => (
              <div key={v.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we are building */}
      <section className={styles.building} aria-labelledby="building-heading">
        <div className="container">
          <span className="eyebrow">The roadmap</span>
          <h2 id="building-heading" className={styles.buildingH2}>
            What is in the platform.
          </h2>
          <div className={styles.buildingGrid}>
            {[
              { label: 'Standards & Specifications', detail: 'RFC-level document templates and standards across every phase', count: '40+' },
              { label: 'Web Applications',           detail: 'Interactive tools across the Discover and Govern phases', count: '20+' },
              { label: 'CLI Tools',                  detail: 'Build and Scale phase automation tools', count: '20+' },
              { label: 'Frameworks',                 detail: 'T.R.U.S.T., SpanForge Build Standards, and more', count: '5+' },
              { label: 'AgentOBS',                   detail: 'Production observability for autonomous AI agents', count: '1' },
              { label: 'CI/CD Pipeline Templates',   detail: 'Six-stage pipeline integrated into your build process', count: '6' },
            ].map(item => (
              <div key={item.label} className={styles.buildingCard}>
                <span className={styles.buildingCount}>{item.count}</span>
                <h3 className={styles.buildingLabel}>{item.label}</h3>
                <p className={styles.buildingDetail}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="contact-heading">
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow">The platform</span>
          <h2 id="contact-heading" className={styles.ctaH2}>
            From first question to production.
          </h2>
          <p className={styles.ctaSub}>
            SpanForge covers all five phases of the AI lifecycle — Discover, Design,
            Build, Govern, and Scale. Every tool, framework, and standard maps to one
            phase of the journey.
          </p>
          <Link href="/platform" className="btn-primary">
            Explore the Platform →
          </Link>
        </div>
      </section>
    </>
  )
}
