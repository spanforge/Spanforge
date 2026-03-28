import Link from 'next/link'
import TrustCard from '@/components/TrustCard'
import TerminalMock from '@/components/TerminalMock'
import PhaseRow from '@/components/PhaseRow'
import { phaseSummary } from '@/lib/tools-data'
import { phases, pipelineStages } from '@/lib/phases-data'
import styles from './page.module.css'

export const metadata = {
  title: 'SpanForge — Where Enterprise AI Goes to Production',
  description:
    'SpanForge is the AI lifecycle platform for enterprise teams — from deciding whether to build, to running confidently in production. Standards, frameworks, CLI tools, and AgentOBS observability across every phase.',
}

const HERO_STATS = [
  { value: '5',    label: 'Lifecycle phases'         },
  { value: '100+', label: 'Tools & frameworks'       },
  { value: '40+',  label: 'Standards & templates'    },
  { value: '1',    label: 'Production-ready platform' },
]

const PROBLEM_STATS = [
  { value: '85%',         label: 'of enterprise AI projects fail to deliver on intended objectives' },
  { value: '£0',          label: 'value delivered from a model that never ships'    },
  { value: '4 months',    label: 'average delay from build to first production run' },
]

const AGENTOBS_FEATURES = [
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
    desc: 'Define what data your agent is permitted to access. AgentOBS raises the alarm when boundaries are crossed.',
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
              <span className={styles.liveDot} aria-label="Live" />
              AI Lifecycle Platform — Live Today
            </span>

            <h1 id="hero-heading" className={styles.heroH1}>
              Where Enterprise AI<br />
              <em className={styles.heroItalic}>Goes to</em>{' '}
              <span className={styles.heroRed}>Production.</span>
            </h1>

            <p className={styles.heroCopy}>
              SpanForge is the AI lifecycle platform for enterprise teams — from deciding
              whether to build, through architecture and engineering, to governance and
              scale. Every phase covered with standards, frameworks, and battle-tested
              tools.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/platform" className="btn-primary">
                Explore the Platform →
              </Link>
              <Link href="/agentobs" className="btn-ghost">
                Learn about AgentOBS →
              </Link>
            </div>

            <p className={styles.heroTagline}>
              Decide. Build. Trust.
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
                  style={{ background: `var(${p.colorVar})`, color: 'var(--light)' }}
                >
                  {p.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. AGENTOBS CALLOUT STRIP ───────────────────────── */}
      <section className={styles.agentobsStrip} aria-label="AgentOBS announcement">
        <div className={`container ${styles.agentobsStripInner}`}>
          <div className={styles.agentobsStripLeft}>
            <span className={styles.agentobsTag}>New</span>
            <p className={styles.agentobsStripText}>
              <strong>AgentOBS</strong> — Production observability for autonomous AI agents.
              Baseline. Detect. Enforce.
            </p>
          </div>
          <Link href="/agentobs" className={`btn-ghost ${styles.agentobsStripCta}`}>
            Learn more →
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
              SpanForge is the AI lifecycle platform for enterprise teams — from deciding
              whether to build, to running confidently in production. It covers all five
              phases: Discover, Design, Build, Govern, and Scale.
            </p>
            <p className={styles.whatIsCopy}>
              Built around the <strong>T.R.U.S.T. Framework</strong> — five dimensions
              that every production AI system must satisfy: Transparency, Reliability,
              Understandability, Security, and Traceability.
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
                <p className={styles.phaseTeaserSub}>tools in catalog</p>
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

      {/* ─── 8. AGENTOBS FEATURE SECTION ───────────────────── */}
      <section className={styles.agentobsFeature} aria-labelledby="agentobs-heading">
        <div className={`container ${styles.agentobsFeatureGrid}`}>
          <div className={styles.agentobsLeft}>
            <span className="eyebrow">AgentOBS</span>
            <h2 id="agentobs-heading" className={styles.agentobsH2}>
              Observability for AI agents<br />
              <span className={styles.agentobsRed}>that actually run in production.</span>
            </h2>
            <p className={styles.agentobsCopy}>
              You can&rsquo;t govern what you can&rsquo;t see. AgentOBS instruments your
              autonomous agents, establishes behavioural baselines, and raises the alarm
              the moment something drifts, violates consent, or breaches a confidence
              threshold.
            </p>

            <div className={styles.agentobsFeatures}>
              {AGENTOBS_FEATURES.map(f => (
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
              Learn about AgentOBS →
            </Link>
          </div>

          <div className={styles.agentobsRight}>
            <TerminalMock />
          </div>
        </div>
      </section>

      {/* ─── 9. CLOSING CTA ──────────────────────────────── */}
      <section className={styles.waitlistCta} aria-labelledby="cta-heading">
        <div className={`container ${styles.waitlistInner}`}>
          <span className="eyebrow">SpanForge — Live Today</span>
          <h2 id="cta-heading" className={styles.waitlistH2}>
            Decide. Build. Trust.
          </h2>
          <p className={styles.waitlistSub}>
            SpanForge is the AI lifecycle platform for enterprise teams. The tools,
            frameworks, and standards that get AI to production — and keep it there.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link href="/platform" className="btn-primary">Explore the Platform →</Link>
            <Link href="/agentobs" className="btn-ghost">Learn about AgentOBS →</Link>
            <a
              href="https://www.linkedin.com/in/spanforge"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Follow on LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
