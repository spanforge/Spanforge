import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'The SpanForge Book — Complete Learning Curriculum',
  description:
    '47 chapters across 8 parts covering AI observability, cryptographic audit chains, compliance engineering, and enterprise SDK architecture. ~120 hours of structured learning grounded in the SpanForge-Core codebase.',
}

const TRACKS = [
  { id: 'core', label: 'Core', description: 'Event model, tracing, exporters' },
  { id: 'security', label: 'Security', description: 'Cryptography, auth, secrets' },
  { id: 'compliance', label: 'Compliance', description: 'PII, regulations, evidence chains' },
  { id: 'ops', label: 'Ops', description: 'Observability, cost, drift, alerts' },
  { id: 'advanced', label: 'Advanced', description: 'SDK architecture, enterprise' },
  { id: 'testing', label: 'Testing', description: 'Testing, DX, toolchain' },
]

const STATS = [
  { value: '8', label: 'Parts' },
  { value: '47', label: 'Chapters' },
  { value: '~120 hrs', label: 'Estimated study time' },
  { value: '6', label: 'Concept tracks' },
]

const PARTS = [
  {
    number: 1,
    track: 'core',
    title: 'Foundations — how SpanForge works',
    description:
      'Everything in SpanForge rests on a small number of carefully designed primitives: the event envelope, the ULID, the tracer, and the batch exporter. Understanding these well means understanding every module that builds on them.',
    hours: '~12 hrs',
    chapters: [
      { id: '1.1', title: 'What is AI observability and why it matters', published: true },
      { id: '1.2', title: 'The RFC-0001 event envelope — schema, fields, versioning', published: true },
      { id: '1.3', title: 'ULID — lexicographically sortable IDs without coordination', published: true },
      { id: '1.4', title: 'The event type registry — 74 canonical types across 17 namespaces', published: true },
      { id: '1.5', title: 'Traces, spans, and the context propagation model', published: true },
      { id: '1.6', title: 'The tracer, the @trace decorator, and span lifecycle hooks', published: true },
      { id: '1.7', title: 'The batch exporter — buffering, backpressure, and circuit breaking', published: true },
      { id: '1.8', title: 'Sampling strategies — TraceIdRatio, ParentBased, AlwaysOn', published: true },
    ],
  },
  {
    number: 2,
    track: 'security',
    title: 'Security primitives — cryptography you can trust',
    description:
      'This part covers the cryptographic foundations of SpanForge — HMAC chains, key management, JWT authentication, TOTP, and secrets scanning. Every concept here is implemented in pure stdlib with no external cryptographic dependencies.',
    hours: '~18 hrs',
    chapters: [
      { id: '2.1', title: 'HMAC-SHA256 signing — how and why every event is signed', published: false },
      { id: '2.2', title: 'Tamper-evident audit chains — chain linkage, prev_id, and tombstones', published: false },
      { id: '2.3', title: 'Key rotation — rolling keys without breaking the chain', published: false },
      { id: '2.4', title: 'GDPR tombstone erasure — right to erasure in an immutable log', published: false },
      { id: '2.5', title: 'API key lifecycle — format, scoping, rotation, and revocation', published: false },
      { id: '2.6', title: 'JWT authentication — HS256 vs RS256, JWKS, and token introspection', published: false },
      { id: '2.7', title: 'TOTP / MFA — RFC 6238, backup codes, and brute-force lockout', published: false },
      { id: '2.8', title: 'Secrets scanning — 20 patterns, Shannon entropy, SARIF output', published: false },
      { id: '2.9', title: "Timing-safe comparisons and SecretStr — writing code that doesn't leak", published: false },
      { id: '2.10', title: 'SSRF protection — why IP allowlists alone are not enough', published: false },
    ],
  },
  {
    number: 3,
    track: 'compliance',
    title: 'Privacy & PII — compliance-by-design',
    description:
      'PII protection in production AI systems is not just about regex patterns. This part covers the full stack from detection through redaction, the five-level sensitivity model, multi-regulation compliance, and the consent boundary enforcement that ties it all together.',
    hours: '~14 hrs',
    chapters: [
      { id: '3.1', title: 'PII detection — regex vs. Presidio NLP vs. hybrid approaches', published: false },
      { id: '3.2', title: 'Sensitivity levels — from public to critical, and the 5-tier model', published: false },
      { id: '3.3', title: 'Redaction policies — flag, redact, block, and the audit trail they create', published: false },
      { id: '3.4', title: 'Luhn, Verhoeff, and SSN validation — structured PII verification', published: false },
      { id: '3.5', title: 'GDPR Article 17, CCPA DSAR, HIPAA Safe Harbor — regulation-specific patterns', published: false },
      { id: '3.6', title: 'India DPDP Act — patterns, consent enforcement, and data residency', published: false },
      { id: '3.7', title: 'Consent boundaries — granting, revoking, and emitting consent.violation events', published: false },
      { id: '3.8', title: 'Differential privacy — Laplace noise on numeric quasi-identifiers', published: false },
    ],
  },
  {
    number: 4,
    track: 'ops',
    title: 'Observability — making AI systems legible',
    description:
      'Observability for LLM systems requires more than standard APM. This part covers OpenTelemetry alignment, the full export backend stack, cost tracking, drift detection, and the alert routing system that makes all of it actionable.',
    hours: '~16 hrs',
    chapters: [
      { id: '4.1', title: 'OpenTelemetry alignment — OTel Semantic Conventions for GenAI v1.27+', published: false },
      { id: '4.2', title: 'W3C TraceContext and Baggage — propagating context across service boundaries', published: false },
      { id: '4.3', title: 'Export backends — OTLP, Datadog, Grafana Loki, Splunk, Elastic', published: false },
      { id: '4.4', title: 'WORM append-only storage — S3 Object Lock, GCS, Azure Immutable Blob', published: false },
      { id: '4.5', title: 'Cost tracking — per-model pricing, BudgetMonitor, and budget alerts', published: false },
      { id: '4.6', title: 'Drift detection — behavioural baselines, distribution stats, and alert thresholds', published: false },
      { id: '4.7', title: 'Alert routing — topic-based publish, dedup, escalation, and on-call integration', published: false },
      { id: '4.8', title: 'Metrics extraction — latency percentiles, p95, and aggregation from traces', published: false },
      { id: '4.9', title: 'The span processor pipeline — enrichment, redaction, and custom processors', published: false },
      { id: '4.10', title: 'Debug tooling — print_tree, visualize(), Gantt timelines, and the trace store', published: false },
    ],
  },
  {
    number: 5,
    track: 'compliance',
    title: 'Compliance engineering — from evidence to attestation',
    description:
      'This part bridges the gap between code and regulatory compliance. It covers the five major frameworks SpanForge maps to, the Compliance Evidence Chain that packages evidence for auditors, and the T.R.U.S.T. scorecard that makes compliance visible to non-technical stakeholders.',
    hours: '~16 hrs',
    chapters: [
      { id: '5.1', title: 'EU AI Act — Articles 9, 10, 12, 13, 14, 15 and what they require technically', published: false },
      { id: '5.2', title: 'NIST AI RMF — GOVERN, MAP, MEASURE, MANAGE as engineering controls', published: false },
      { id: '5.3', title: 'ISO/IEC 42001 and ISO 27001 — AI management systems and Annex A.12.4', published: false },
      { id: '5.4', title: 'SOC 2 Type II — CC6, CC7, CC9 and how audit logs satisfy them', published: false },
      { id: '5.5', title: 'The Compliance Evidence Chain — building a signed ZIP bundle auditors can verify', published: false },
      { id: '5.6', title: 'HMAC-signed PDF attestations — what goes in them and how they are verified', published: false },
      { id: '5.7', title: 'RFC 3161 trusted timestamps — cryptographic proof of existence for legal proceedings', published: false },
      { id: '5.8', title: 'GDPR Article 30 Records of Processing — auto-generating RoPA from audit metadata', published: false },
      { id: '5.9', title: 'The T.R.U.S.T. scorecard — Transparency, Reliability, UserTrust, Security, Traceability', published: false },
      { id: '5.10', title: 'Human-in-the-Loop — EU AI Act Article 14, HITL queues, SLA tracking, escalation', published: false },
    ],
  },
  {
    number: 6,
    track: 'advanced',
    title: 'SDK architecture — building services the right way',
    description:
      'This is the engineering education core of the curriculum. The patterns SpanForge uses — circuit breaker, sliding window rate limiter, zero-dependency design, namespace schemas, plugin discovery, auto-instrumentation — all transfer directly to any SDK or platform library.',
    hours: '~18 hrs',
    chapters: [
      { id: '6.1', title: 'The SFServiceClient base class — retry, circuit breaker, auth refresh, fallback', published: false },
      { id: '6.2', title: 'Circuit breaker pattern — failure thresholds, OPEN/CLOSED/HALF-OPEN states', published: false },
      { id: '6.3', title: 'Sliding window rate limiting — per-key counters without external dependencies', published: false },
      { id: '6.4', title: 'Local fallback architecture — graceful degradation when services are unreachable', published: false },
      { id: '6.5', title: 'Zero required dependencies — designing with stdlib-only constraints', published: false },
      { id: '6.6', title: 'The namespace schema system — 19 namespaces, dataclasses, and RFC-grounded design', published: false },
      { id: '6.7', title: 'The plugin system — entry-point discovery and third-party scorer registration', published: false },
      { id: '6.8', title: 'Auto-instrumentation — monkey-patching 8 providers without breaking their APIs', published: false },
      { id: '6.9', title: 'The prompt registry — versioning, A/B routing, and reproducible audit trails', published: false },
      { id: '6.10', title: 'Model registry — lifecycle tracking (active → deprecated → retired) with HMAC events', published: false },
      { id: '6.11', title: 'Schema migration — v1 → v2 event migration and the MD5 rehash pattern', published: false },
      { id: '6.12', title: 'The CI/CD gate pipeline — YAML-driven pass conditions, 6-gate architecture, SLSA', published: false },
    ],
  },
  {
    number: 7,
    track: 'advanced',
    title: 'Enterprise patterns — production at scale',
    description:
      "Enterprise deployments have requirements that don't appear in development environments: tenant isolation, data residency, encryption key management, air-gap deployment, and formal security review processes. This part covers all of them with concrete implementation patterns.",
    hours: '~14 hrs',
    chapters: [
      { id: '7.1', title: 'Multi-tenancy — project isolation, HMAC chain scoping, cross-project query guards', published: false },
      { id: '7.2', title: 'Data residency — EU, US, APAC, India routing and enforcement at the SDK layer', published: false },
      { id: '7.3', title: 'Encryption at rest — AES-256-GCM, envelope encryption, and cloud KMS integration', published: false },
      { id: '7.4', title: 'mTLS and FIPS 140-2 mode — certificate rotation and algorithm restriction', published: false },
      { id: '7.5', title: 'Air-gap deployment — offline mode, Docker Compose self-hosted stack, Helm chart', published: false },
      { id: '7.6', title: 'OWASP API Security Top 10 — each category as a code-level checklist', published: false },
      { id: '7.7', title: 'STRIDE threat modelling — applied to the 8 SpanForge service boundaries', published: false },
      { id: '7.8', title: 'Supply chain security — CycloneDX SBOM, Sigstore/cosign, SLSA provenance', published: false },
    ],
  },
  {
    number: 8,
    track: 'testing',
    title: 'Testing, DX, and shipping production SDKs',
    description:
      'The test suite and developer experience layer of SpanForge are as carefully designed as the production code. This part covers the testing patterns, toolchain configuration, and DX investments that make the SDK usable and verifiable by teams other than the one that built it.',
    hours: '~12 hrs',
    chapters: [
      { id: '8.1', title: 'Property-based testing with Hypothesis — strategies, settings, and invariant design', published: false },
      { id: '8.2', title: 'The conformance suite — portable JSON fixtures, clause IDs, and third-party verification', published: false },
      { id: '8.3', title: 'The mock layer — mock_all_services(), call recording, and test isolation', published: false },
      { id: '8.4', title: 'Sandbox mode and the doctor CLI — zero-network local development', published: false },
      { id: '8.5', title: 'Type stubs (.pyi) — writing stubs that make mypy strict and IDEs happy', published: false },
      { id: '8.6', title: 'Toolchain setup — ruff, mypy strict, bandit, pip-audit, pre-commit, hatchling', published: false },
      { id: '8.7', title: 'Writing SDK examples that actually teach — the production_multi_agent.py pattern', published: false },
    ],
  },
]

function ChapterRow({ chapter, track, partNumber }) {
  const chapterPath = `/learn/the-spanforge-book/part-${partNumber}/chapter-${chapter.id.replace('.', '-')}`

  if (chapter.published) {
    return (
      <Link href={chapterPath} className={`${styles.chapter} ${styles.chapterActive}`}>
        <span className={`${styles.chapterNum} ${styles[`track_${track}`]}`}>{chapter.id}</span>
        <span className={styles.chapterTitle}>{chapter.title}</span>
        <span className={`${styles.trackBadge} ${styles[`trackBadge_${track}`]}`}>{track}</span>
      </Link>
    )
  }

  return (
    <div className={`${styles.chapter} ${styles.chapterInactive}`} aria-disabled="true">
      <span className={`${styles.chapterNum} ${styles[`track_${track}`]}`}>{chapter.id}</span>
      <span className={styles.chapterTitle}>{chapter.title}</span>
      <span className={styles.comingSoon}>
        <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <rect x="3" y="7" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
        Upcoming
      </span>
    </div>
  )
}

export default function SpanForgeBookPage() {
  return (
    <main id="main-content" className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>SpanForge Learning Curriculum · April 2026</p>
          <h1 className={styles.title}>The SpanForge Book</h1>
          <p className={styles.subtitle}>
            A complete, structured curriculum built from the SpanForge&#8209;Core codebase. Every chapter maps directly
            to real implementation code — cryptographic audit chains, PII compliance, enterprise SDK patterns, and
            production observability for AI systems.
          </p>

          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <p className={styles.eyebrowBlue}>About this curriculum</p>
              <h2 className={styles.introHeading}>Built from a real codebase</h2>
              <p className={styles.introPara}>
                SpanForge&#8209;Core is a compliance-grade AI observability SDK that covers an unusually broad range of
                computer science and engineering concepts: cryptographic audit chains, distributed tracing, privacy
                regulation, compliance engineering, SDK architecture patterns, enterprise security, and production
                testing.
              </p>
              <p className={styles.introPara}>
                Built in 2 months with AI-assisted development, it represents a condensed reference implementation
                across all of these domains. This curriculum organises every concept in the codebase into 8 parts and
                47 chapters, structured to build understanding progressively — from the core event model through to
                enterprise deployment and supply chain security.
              </p>
              <p className={styles.introPara}>
                Each chapter includes specific learning points grounded in the actual SpanForge implementation.
                Parts 1 and 2 are prerequisites for all tracks — the event model and security primitives underpin
                every other module in the codebase.
              </p>
            </div>

            <div className={styles.tracksList}>
              <p className={styles.tracksLabel}>Six concept tracks</p>
              {TRACKS.map((t) => (
                <div key={t.id} className={styles.trackItem}>
                  <span className={`${styles.trackDot} ${styles[`trackDot_${t.id}`]}`} />
                  <div>
                    <span className={styles.trackName}>{t.label}</span>
                    <span className={styles.trackDesc}>{t.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Table of Contents ── */}
      <section className={styles.toc}>
        <div className="container">
          <div className={styles.tocHeader}>
            <p className={styles.eyebrowBlue}>Complete Table of Contents</p>
            <h2 className={styles.tocHeading}>47 chapters · 8 parts</h2>
            <p className={styles.tocNote}>
              Chapters are published progressively. Upcoming chapters are listed so you can see exactly what&#39;s
              coming.
            </p>
          </div>

          <div className={styles.parts}>
            {PARTS.map((part) => (
              <div key={part.number} className={styles.part}>
                {/* Part header */}
                <div className={`${styles.partHeader} ${styles[`partHeader_${part.track}`]}`}>
                  <div className={styles.partMeta}>
                    <span className={styles.partNum}>Part {part.number}</span>
                    <span className={`${styles.trackPill} ${styles[`trackPill_${part.track}`]}`}>{part.track}</span>
                  </div>
                  <h3 className={styles.partTitle}>{part.title}</h3>
                  <p className={styles.partDesc}>{part.description}</p>
                  <div className={styles.partFooter}>
                    <span className={styles.partStat}>{part.chapters.length} chapters</span>
                    <span className={styles.partStatDot}>·</span>
                    <span className={styles.partStat}>{part.hours} est.</span>
                  </div>
                </div>

                {/* Chapters */}
                <div className={styles.chapters}>
                  {part.chapters.map((chapter) => (
                    <ChapterRow
                      key={chapter.id}
                      chapter={chapter}
                      track={part.track}
                      partNumber={part.number}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className={styles.footerNote}>
        <div className="container">
          <p className={styles.footerText}>
            Based on SpanForge&#8209;Core v2.0.10 · 47 chapters · 8 parts · ~120 hours · 6 concept tracks
          </p>
        </div>
      </section>
    </main>
  )
}
