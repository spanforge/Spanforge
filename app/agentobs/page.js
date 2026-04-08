import Link from 'next/link'
import TerminalMock from '@/components/TerminalMock'
import styles from './page.module.css'

export const metadata = {
  title: 'AgentOBS — Production Observability for AI Agents',
  description:
    'AgentOBS instruments your autonomous AI agents, establishes behavioural baselines, detects drift, enforces consent boundaries, and triggers automated response playbooks.',
}

const FEATURES = [
  {
    num: '01',
    title: 'Behavioural baselining',
    desc: 'Instrument your agent at first deployment. Every subsequent run is automatically compared against established baselines — output distributions, confidence scores, token patterns, and decision frequencies.',
  },
  {
    num: '02',
    title: 'Drift detection',
    desc: 'Statistical drift detection using configurable thresholds. When outputs start deviating from baseline, AgentOBS alerts before users notice. Z-score and KL-divergence metrics out of the box.',
  },
  {
    num: '03',
    title: 'Consent boundary enforcement',
    desc: 'Define exactly which data fields and sources your agent is permitted to access. AgentOBS monitors every decision for consent violations and escalates immediately when boundaries are breached.',
  },
  {
    num: '04',
    title: 'Automated response playbooks',
    desc: 'Pre-define runbooks for every alert type — pause the agent, escalate to a named responder, reroute to a fallback model, or log for later review. Playbooks execute in milliseconds.',
  },
  {
    num: '05',
    title: 'Human-in-the-loop hooks',
    desc: 'Low-confidence decisions are automatically queued for human approval before any output reaches users or downstream systems. Configurable confidence thresholds per decision type.',
  },
  {
    num: '06',
    title: 'Immutable audit trail',
    desc: 'Every decision, alert, playbook execution, and human review is logged with an immutable, timestamped record. Export-ready for regulators, auditors, and post-incident reviews.',
  },
]

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Instrument',
    desc: 'Add the AgentOBS SDK to your agent. One function call per decision point.',
  },
  {
    step: '02',
    title: 'Baseline',
    desc: 'Run your agent in staging. AgentOBS establishes the behavioural baseline automatically.',
  },
  {
    step: '03',
    title: 'Deploy',
    desc: 'Ship to production with confidence. AgentOBS monitors every decision in real time.',
  },
  {
    step: '04',
    title: 'Respond',
    desc: 'Alerts trigger playbooks. Humans are looped in exactly when needed — no more, no less.',
  },
]

export default function AgentObsPage() {
  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className="eyebrow">AgentOBS by SpanForge</span>
          <h1 className={styles.h1}>
            You can&rsquo;t govern what<br />
            <span className={styles.redAccent}>you can&rsquo;t see.</span>
          </h1>
          <p className={styles.heroSub}>
            AgentOBS is production observability for autonomous AI agents. Baseline
            behaviour, detect drift, enforce consent, and respond automatically —
            before regulators, users, or incident reports find the problem first.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/tools" className="btn-primary">
              Explore the Tools →
            </Link>
            <Link href="#how-it-works" className="btn-ghost">
              How it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Terminal demo */}
      <section className={styles.terminalSection} aria-label="AgentOBS live demo">
        <div className={`container ${styles.terminalInner}`}>
          <div className={styles.terminalLeft}>
            <h2 className={styles.terminalH2}>
              See it in action.
            </h2>
            <p className={styles.terminalCopy}>
              Three scenarios. Three ways AgentOBS catches what your monitoring
              dashboards miss. Switch between tabs to explore — consent violations,
              behavioural drift, and confidence breaches.
            </p>
            <p className={styles.terminalNote}>
              These are representative examples. Real output varies by agent configuration
              and playbook definitions.
            </p>
          </div>
          <div className={styles.terminalRight}>
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className={styles.features} aria-labelledby="features-heading">
        <div className="container">
          <span className="eyebrow">Capabilities</span>
          <h2 id="features-heading" className={styles.featuresH2}>
            Everything production AI needs.
          </h2>
          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <div key={f.num} className={styles.featureCard}>
                <span className={styles.featureNum}>{f.num}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className={styles.howItWorks}
        aria-labelledby="hiw-heading"
      >
        <div className="container">
          <span className="eyebrow">Integration</span>
          <h2 id="hiw-heading" className={styles.hiwH2}>
            Up and running in an afternoon.
          </h2>
          <div className={styles.hiwSteps}>
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className={styles.hiwStep}>
                <div className={styles.hiwStepNum}>{step.step}</div>
                {i < HOW_IT_WORKS.length - 1 && (
                  <div className={styles.hiwConnector} aria-hidden="true" />
                )}
                <h3 className={styles.hiwStepTitle}>{step.title}</h3>
                <p className={styles.hiwStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className={styles.useCases} aria-labelledby="usecases-heading">
        <div className="container">
          <span className="eyebrow">Who it&rsquo;s for</span>
          <h2 id="usecases-heading" className={styles.useCasesH2}>
            Built for regulated, high-stakes AI.
          </h2>
          <div className={styles.useCasesGrid}>
            {[
              { label: 'Financial services', desc: 'Credit decisions, fraud detection, customer communication agents, AML monitoring.' },
              { label: 'Healthcare', desc: 'Clinical decision support, triage routing, patient-facing assistants, prior authorisation agents.' },
              { label: 'Legal & compliance', desc: 'Contract analysis, regulatory monitoring, compliance automation, document review agents.' },
              { label: 'Enterprise operations', desc: 'Procurement automation, HR decision support, internal knowledge agents, IT service automation.' },
            ].map(uc => (
              <div key={uc.label} className={styles.useCaseCard}>
                <h3 className={styles.useCaseLabel}>{uc.label}</h3>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem */}
      <section className={styles.ecosystem} aria-labelledby="ecosystem-heading">
        <div className="container">
          <span className="eyebrow">Ecosystem</span>
          <h2 id="ecosystem-heading" className={styles.ecosystemH2}>
            The complete AgentOBS stack.
          </h2>
          <p className={styles.ecosystemSub}>
            From the open standard to the production SDK and developer tooling —
            every layer of the observability stack is documented and ready to use.
          </p>
          <div className={styles.ecosystemGrid}>
            {[
              {
                label: 'Open Standard',
                title: 'RFC-0001 AGENTOBS',
                desc: 'The schema specification at the core of the ecosystem. Defines the event envelope, 10 observability namespaces, HMAC audit chains, and conformance profiles.',
                href: '/agentobs/standard',
                cta: 'Read the standard →',
              },
              {
                label: 'Python SDK',
                title: 'agentobs',
                desc: 'The reference implementation. pip-installable, zero required dependencies, covers all 10 namespaces with quickstart, integrations, and a CLI.',
                href: '/agentobs/sdk',
                cta: 'Explore the SDK →',
              },
              {
                label: 'Developer Tool',
                title: 'AgentOBSDebug',
                desc: 'Inspect, replay, and visualise AgentOBS traces. Timeline views, span trees, tool-call analysis, cost attribution, and trace diffing.',
                href: '/agentobs/debug',
                cta: 'Explore AgentOBSDebug →',
              },
              {
                label: 'Compliance Tool',
                title: 'AgentOBSValidate',
                desc: 'Reference validation CLI and Python SDK. Validate JSON/JSONL event streams against the AGENTOBS schema, verify HMAC chains, and integrate with CI pipelines.',
                href: '/agentobs/validate',
                cta: 'Explore AgentOBSValidate →',
              },
            ].map(item => (
              <Link key={item.href} href={item.href} className={styles.ecoCard}>
                <span className={styles.ecoLabel}>{item.label}</span>
                <h3 className={styles.ecoTitle}>{item.title}</h3>
                <p className={styles.ecoDesc}>{item.desc}</p>
                <span className={styles.ecoCta}>{item.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={`container ${styles.ctaInner}`}>
          <span className="eyebrow">AgentOBS</span>
          <h2 id="cta-heading" className={styles.ctaH2}>
            Know what your AI is doing. Always.
          </h2>
          <p className={styles.ctaSub}>
            AgentOBS is SpanForge's production observability layer for autonomous AI
            agents. Instrument, baseline, and govern your agents from day one.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/agentobs/sdk" className="btn-primary">Get started with the SDK →</Link>
            <Link href="/agentobs/standard" className="btn-ghost">Read the standard →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
