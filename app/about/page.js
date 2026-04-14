import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'About SpanForge',
  description:
    'SpanForge is being built to close the gap between an AI prototype and a governed, auditable, production system. Who we are and why we are building this.',
}

const VALUES = [
  {
    title: 'Build in the open.',
    desc: 'The standards are public. The roadmap is public. The reasoning is visible. AI needs more transparency, not less.',
  },
  {
    title: 'Opinionated by design.',
    desc: 'SpanForge has a clear position on how AI should be built. We would rather be useful and direct than vague and universally palatable.',
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
            SpanForge was built because too many AI projects fail after the
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
                Approximately 42% of companies abandoned the majority of their AI initiatives
                in 2025 — more than double the 17% recorded the year prior (S&P Global Market
                Intelligence, 1,000+ enterprises). Not because the models don&rsquo;t work.
                Because the surrounding system — the governance, the observability, the standards,
                the process — is absent.
              </p>
              <p className={styles.missionCopy}>
              SpanForge is the AI lifecycle platform for every team — from deciding
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
                SpanForge answers those questions — with a structured lifecycle, governance
                controls, and production compliance built for AI delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What SpanForge IS and IS NOT */}
      <section className={styles.isIsNot} aria-labelledby="isnot-heading">
        <div className="container">
          <span className="eyebrow">Clarity of purpose</span>
          <h2 id="isnot-heading" className={styles.missionH2}>
            What SpanForge is — and is not.
          </h2>
          <p className={styles.missionCopy} style={{ maxWidth: '640px', marginBottom: '2rem' }}>
            Confusion about what SpanForge does — and does not do — is a risk to adoption.
            This table clarifies the position explicitly.
          </p>
          <div className={styles.isNotGrid}>
            <div className={styles.isNotCol}>
              <p className={styles.isNotColHead}>SpanForge IS</p>
              {[
                'An AI delivery lifecycle platform',
                'A governance and compliance framework engine',
                'A production compliance platform (SpanForge)',
                'A structured gate-based delivery system',
                'An agent behaviour monitoring product',
                'A risk and audit documentation system',
                'A decision-time cost intelligence layer for infrastructure spend and runtime token cost attribution',
                'A suite of standalone open-source CI/CD executables for individual T.R.U.S.T. gate checks (spanforge-secrets, spanforge-behaviour, spanforge-policy, spanforge-redteam)',
              ].map(item => (
                <p key={item} className={styles.isNotItem}>
                  <span className={styles.isNotCheck} aria-hidden="true">✓</span> {item}
                </p>
              ))}
            </div>
            <div className={styles.isNotCol}>
              <p className={styles.isNotColHead}>SpanForge IS NOT</p>
              {[
                'An MLOps platform (no model serving infrastructure)',
                'A model provider or AI model builder',
                'A cloud infrastructure platform',
                'A project management tool',
                'An agent framework or orchestration engine',
                'A replacement for legal or compliance teams',
                'A replacement for cloud billing dashboards or FinOps reporting tools',
                'A replacement for existing CI/CD tooling — the standalone executables extend it, not replace it',
              ].map(item => (
                <p key={item} className={styles.isNotItem}>
                  <span className={styles.isNotCross} aria-hidden="true">✕</span> {item}
                </p>
              ))}
            </div>
          </div>
          <p className={styles.missionCopy} style={{ maxWidth: '640px', marginTop: '2rem' }}>
            SpanForge sits above infrastructure and models, and owns the lifecycle, governance,
            and compliance layers. Teams use their existing infrastructure and models —
            SpanForge governs how AI systems are built, validated, and run on top of them.
          </p>
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

      {/* How to engage SpanForge */}
      <section className={styles.building} aria-labelledby="engage-heading">
        <div className="container">
          <span className="eyebrow">Working with SpanForge</span>
          <h2 id="engage-heading" className={styles.buildingH2}>
            Three ways to engage.
          </h2>
          <div className={styles.buildingGrid}>
            {[
              {
                label: 'Self-serve platform',
                detail: 'Access the full five-phase lifecycle — Discover, Design, Build, Govern, Scale — through standards, tools, and frameworks you can adopt immediately.',
                count: '01',
              },
              {
                label: 'SpanForge Platform + Cost Intelligence Layer',
                detail: 'Deploy SpanForge for production compliance — baseline behaviour, detect drift, enforce consent boundaries, and maintain an immutable HMAC-signed audit trail via RFC-0001 SpanForge. The Cost Intelligence Layer provides design-time infrastructure cost estimation and runtime token cost tracking with full attribution across all providers.',
                count: '02',
              },
              {
                label: 'Advisory engagement',
                detail: 'Work directly with SpanForge to assess your AI delivery posture, identify governance gaps, and build the foundations for governed production systems.',
                count: '03',
              },
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
          <span className="eyebrow">Get in touch</span>
          <h2 id="contact-heading" className={styles.ctaH2}>
            Ready to make your AI production-ready?
          </h2>
          <p className={styles.ctaSub}>
            Whether you are starting from scratch or rescuing a project that never made it past
            the prototype — SpanForge has the methodology, the tooling, and the experience.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary">
              Request a Briefing →
            </Link>
            <Link href="/platform" className="btn-ghost">
              Explore the Platform →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
