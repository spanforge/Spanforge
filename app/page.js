import Link from 'next/link'
import TrustCard from '@/components/TrustCard'
import TerminalMock from '@/components/TerminalMock'
import PhaseRow from '@/components/PhaseRow'
import { phaseSummary } from '@/lib/tools-data'
import { phases, pipelineStages } from '@/lib/phases-data'
import styles from './page.module.css'

export const metadata = {
  title: 'SpanForge — The AI Compliance Platform',
  description:
    'SpanForge is the AI compliance platform for enterprise teams — structured around RFC-0001 SpanForge. Five phases, cryptographic audit trails, and regulatory evidence for EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF.',
}

const HERO_STATS = [
  { value: '5',    label: 'Compliance lifecycle phases'                      },
  { value: '102',  label: 'Tools & frameworks planned'             },
  { value: '6',    label: 'Mandatory Build phase CI/CD gates'      },
  { value: '15',   label: 'SpanForge namespaces — RFC-0001 standard' },
]

const PROBLEM_STATS = [
  { value: '42%',  label: 'of companies abandoned the majority of their AI initiatives in 2025 — up from 17% the prior year' },
  { value: '63%',  label: 'of organisations lack the right data management practices to support AI' },
  { value: '39%',  label: 'of organisations report any measurable enterprise AI business impact' },
]

const SPANFORGE_FEATURES = [
  {
    icon: '◈',
    title: 'Baseline everything',
    desc: 'Establish behavioural baselines at first deployment. Every subsequent run is measured against them.',
  },
  {
    icon: '⬡',
    title: 'Detect drift before users do',
    desc: 'Statistical drift detection across outputs, confidence scores, and token distributions.',
  },
  {
    icon: '⬤',
    title: 'Consent boundary enforcement',
    desc: 'Define what data your agent is permitted to access. SpanForge raises the alarm when boundaries are crossed.',
  },
  {
    icon: '◻',
    title: 'Automated playbooks',
    desc: 'Pre-defined response runbooks trigger on any alert — pause, escalate, reroute, or log.',
  },
  {
    icon: '◈',
    title: 'Human-in-the-loop hooks',
    desc: 'Low-confidence decisions get queued for human review before any output reaches a user.',
  },
  {
    icon: '⬡',
    title: 'Audit trail',
    desc: 'Immutable, timestamped logs of every decision. Ready for regulators, auditors, and post-incident reviews.',
  },
]

export default function Home() {
  return (
    <>
      {/* ─── 1. HERO ─────────────────────────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={`container ${styles.heroGrid}`}>
          {/* Left: copy */}
          <div className={styles.heroLeft}>
            <span className={`eyebrow ${styles.heroEyebrow}`}>
              <span className={styles.liveDot} aria-label="In Build" />
              SpanForge AI Compliance Platform · Live
            </span>
            <h1 id="hero-heading" className={styles.heroH1}>
              Ship AI<br />
              <em className={styles.heroItalic}>with</em>{' '}
              <span className={styles.heroRed}>Confidence.</span>
            </h1>

            <p className={styles.heroCopy}>
              SpanForge is the AI lifecycle platform for solo developers, startups, SMBs,
              and enterprises — from deciding whether to build, through architecture and
              engineering, to governance and scale. Every phase covered with the RFC-0001
              SpanForge standard, regulatory evidence generation, and cryptographic audit trails.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/contact" className="btn-primary">
                Request a Briefing →
              </Link>
              <Link href="/platform" className="btn-ghost">
                Explore the Platform →
              </Link>
              <Link href="/agentobs" className="btn-ghost">
                SpanForge Platform →
              </Link>
            </div>

            <p className={styles.heroTagline}>
              Comply. Prove. Scale.
            </p>
          </div>

          {/* Right: stats card */}
          <div className={styles.heroCard} aria-label="Platform at a glance">
            <p className={styles.heroCardEyebrow}>Platform at a glance</p>
            <div className={styles.heroStats}>
              {HERO_STATS.map(s => (
                <div key={s.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{s.value}</span>
                  <span className={styles.heroStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
            <div className={styles.heroCardDivider} />
            <p className={styles.heroCardPhaseLabel}>Five-phase lifecycle</p>
            <div className={styles.heroPhaseStrip}>
              {phases.map(p => (
                <span
                  key={p.id}
                  className={styles.heroPhasePill}
                  style={{ background: `var(${p.colorVar})`, color: '#FFFFFF' }}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. SPANFORGE PRODUCT CALLOUT STRIP ───────────────── */}
      <section className={styles.agentobsStrip} aria-label="SpanForge product announcement">
        <div className={`container ${styles.agentobsStripInner}`}>
          <div className={styles.agentobsStripLeft}>
            <span className={styles.agentobsTag}>In Build</span>
            <p className={styles.agentobsStripText}>
              <strong>SpanForge</strong> — Production compliance and governance for autonomous AI agents.
              Baseline. Detect. Enforce. Audit.
            </p>
          </div>
          <Link href="/agentobs" className={`btn-ghost ${styles.agentobsStripCta}`}>
            Explore SpanForge →
          </Link>
        </div>
      </section>

      {/* ─── 3. PROBLEM STRIP ───────────────────────────────── */}
      <section className={styles.problemStrip} aria-labelledby="problem-heading">
        <div className={`container ${styles.problemInner}`}>
          <span className="eyebrow">The enterprise AI problem</span>
          <h2 id="problem-heading" className={styles.problemH2}>
            Most enterprise AI never ships.
          </h2>
          <p className={styles.problemSub}>
            The gap between a working prototype and a governed, auditable, production system
            is where projects die. SpanForge closes that gap.
          </p>
          <div className={styles.problemStats}>
            {PROBLEM_STATS.map(s => (
              <div key={s.label} className={styles.problemStat}>
                <span className={styles.problemStatValue}>{s.value}</span>
                <p className={styles.problemStatLabel}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT IS SPANFORGE ──────────────────────────── */}
      <section className={styles.whatIs} aria-labelledby="whatis-heading">
        <div className={`container ${styles.whatIsGrid}`}>
          <div className={styles.whatIsLeft}>
            <span className="eyebrow">What is SpanForge?</span>
            <h2 id="whatis-heading" className={styles.whatIsH2}>
              The AI Lifecycle Platform<br />for enterprise teams.
            </h2>
            <p className={styles.whatIsCopy}>
              SpanForge is the AI compliance platform for enterprise teams — from deciding
              whether to build, to proving compliance in production. It covers all five
              phases: Discover, Design, Build, Govern, and Scale.
            </p>
            <p className={styles.whatIsCopy}>
              Built around the <strong>T.R.U.S.T. Framework</strong> — an open governance standard defining five dimensions
              every production AI system must satisfy: Transparency, Responsibility,
              User Rights, Safety Guardrails, and Traceability. SpanForge delivers production
              compliance at the Scale phase via the RFC-0001 SpanForge standard —
              cryptographic audit trails, regulatory evidence generation, and drift detection for
              EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF.
            </p>
            <Link href="/platform" className="btn-ghost" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
              Explore the five phases →
            </Link>
          </div>

          <div className={styles.whatIsRight}>
            <TrustCard />
          </div>
        </div>
      </section>

      {/* ─── 5. LIFECYCLE PHASES ────────────────────────────── */}
      <section className={styles.lifecycle} aria-labelledby="lifecycle-heading">
        <div className="container">
          <span className="eyebrow">Five-phase lifecycle</span>
          <h2 id="lifecycle-heading" className={styles.lifecycleH2}>
            Every phase. Every answer.
          </h2>
          <p className={styles.lifecycleSub}>
            A structured path from &ldquo;should we build this?&rdquo; to
            &ldquo;running safely at scale.&rdquo;
          </p>
          <div className={styles.phaseRows}>
            {phases.map(phase => (
              <PhaseRow key={phase.id} phase={phase} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. TOOLS PREVIEW ───────────────────────────────── */}
      <section className={styles.toolsPreview} aria-labelledby="tools-heading">
        <div className="container">
          <div className={styles.toolsPreviewHeader}>
            <div>
              <span className="eyebrow">Tools &amp; Frameworks</span>
              <h2 id="tools-heading" className={styles.toolsPreviewH2}>
                100+ tools across the lifecycle.
              </h2>
            </div>
            <Link href="/tools" className="btn-ghost">
              See full catalog →
            </Link>
          </div>

          <div className={styles.phaseTeaserGrid}>
            {Object.entries(phaseSummary).map(([phaseId, info]) => (
              <Link key={phaseId} href={`/platform/${phaseId}`} className={styles.phaseTeaserCard}>
                <span className={styles.phaseTeaserAccent} style={{ background: `var(--${phaseId})` }} aria-hidden="true" />
                <div className={styles.phaseTeaserTop}>
                  <span className={styles.phaseTeaserName} style={{ color: `var(--${phaseId})` }}>
                    {info.label}
                  </span>
                  <span className={styles.phaseTeaserCount}>{info.total}</span>
                </div>
                <p className={styles.phaseTeaserSub}>tools planned</p>
                <p className={styles.phaseTeaserTypes}>{info.types}</p>
              </Link>
            ))}
          </div>

          <div className={styles.toolsMore}>
            <p>
              <Link href="/tools" className={styles.toolsMoreLink}>
                See the full tools catalog →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ─── 7. CI/CD PIPELINE ──────────────────────────────── */}
      <section className={styles.pipeline} aria-labelledby="pipeline-heading">
        <div className="container">
          <span className="eyebrow">Build phase</span>
          <h2 id="pipeline-heading" className={styles.pipelineH2}>
            The SpanForge CI/CD pipeline.
          </h2>
          <p className={styles.pipelineSub}>
            Six mandatory gates. Every AI artefact runs the gauntlet before reaching production.
          </p>

          <div className={styles.pipelineTable} role="list">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className={styles.pipelineStage} role="listitem">
                <div className={styles.stageNum}>{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.stageContent}>
                  <p className={styles.stageLabel}>{stage.label}</p>
                  <p className={styles.stageNote}>{stage.note}</p>
                </div>
                <div className={styles.stageTools}>
                  {stage.tools.map(t => (
                    <span key={t} className={styles.stageTool}>{t}</span>
                  ))}
                </div>
                {i < pipelineStages.length - 1 && (
                  <div className={styles.stageConnector} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. SPANFORGE FEATURE SECTION ───────────────── */}
      <section className={styles.agentobsFeature} aria-labelledby="agentobs-heading">
        <div className={`container ${styles.agentobsFeatureGrid}`}>
          <div className={styles.agentobsLeft}>
            <span className="eyebrow">SpanForge Platform</span>
            <h2 id="agentobs-heading" className={styles.agentobsH2}>
              Compliance for AI agents<br />
              <span className={styles.agentobsRed}>that actually run in production.</span>
            </h2>
            <p className={styles.agentobsCopy}>
              You can&rsquo;t govern what you can&rsquo;t see. SpanForge instruments your
              autonomous agents, establishes behavioural baselines, and raises the alarm
              the moment something drifts, violates consent, or breaches a confidence
              threshold — before regulators, users, or incident reports find it first.
            </p>

            <div className={styles.agentobsFeatures}>
              {SPANFORGE_FEATURES.map(f => (
                <div key={f.title} className={styles.featureItem}>
                  <span className={styles.featureIcon} aria-hidden="true">{f.icon}</span>
                  <div>
                    <p className={styles.featureTitle}>{f.title}</p>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="/agentobs" className="btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
              Explore SpanForge Platform →
            </Link>
          </div>

          <div className={styles.agentobsRight}>
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* ─── 8b. STANDALONE EXECUTABLES ─────────────────── */}
      <section className={styles.execSection} aria-labelledby="exec-heading">
        <div className="container">
          <span className="eyebrow">Distribution precedes revenue</span>
          <h2 id="exec-heading" className={styles.execH2}>
            One command. One gate.<br />
            <span className={styles.execAccent}>No platform required.</span>
          </h2>
          <p className={styles.execSub}>
            Each standalone executable implements one T.R.U.S.T. gate check and drops into
            any CI/CD pipeline. Free, open-source, pip-installable or binary download.
            No account. No platform dependency. The fastest way to start building governed AI.
          </p>
          <div className={styles.execGrid}>
            {[
              { cmd: 'spanforge-secrets',   gate: 'Gate 01 — Security',    desc: 'Scans prompts and training data for exposed secrets, API keys, and non-compliant PII before they enter the pipeline.' },
              { cmd: 'spanforge-behaviour', gate: 'Gate 03 — Behaviour',   desc: 'Runs behaviour tests and hallucination scoring against your LLM. Catches regressions before they reach production.' },
              { cmd: 'spanforge-policy',    gate: 'Gate 05 — Governance',  desc: 'Validates consent, enforces output policies, and tests prompt injection resistance on any OpenAI-compatible endpoint.' },
              { cmd: 'spanforge-redteam',   gate: 'Adversarial Testing',   desc: 'Runs a known adversarial pattern library against your deployed AI system. Required for RAM-AI scores above 0.7.' },
            ].map(item => (
              <div key={item.cmd} className={styles.execCard}>
                <div className={styles.execCardTop}>
                  <span className={styles.execGateLabel}>{item.gate}</span>
                </div>
                <p className={styles.execCmd}>$ pip install {item.cmd}</p>
                <p className={styles.execDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.execNote}>
            Each executable produces structured JSON output that maps directly to the T.R.U.S.T. Evaluation Scorecard.
            The platform and certification are the destination. The executables are how you find it.
          </p>
        </div>
      </section>

      {/* ─── 9. CLOSING CTA ──────────────────────────────── */}
      <section className={styles.waitlistCta} aria-labelledby="cta-heading">
        <div className={`container ${styles.waitlistInner}`}>
          <span className="eyebrow">SpanForge — under active development</span>
          <h2 id="cta-heading" className={styles.waitlistH2}>
            Comply. Prove. Scale.
          </h2>
          <p className={styles.waitlistSub}>
            SpanForge is the AI compliance platform for enterprise teams. The SpanForge production
            compliance platform, RFC-0001 SpanForge standard, Cost Intelligence Layer, and
            standalone T.R.U.S.T. gate executables are all actively being built — sign up for
            early access or follow along as we ship.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/contact" className="btn-primary">Request a Briefing →</Link>
            <Link href="/platform" className="btn-ghost">Explore the Platform →</Link>
            <Link href="/agentobs" className="btn-ghost">SpanForge Platform →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
