import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Learn — SpanForge Learning Hub',
  description:
    'Structured learning paths for AI observability, compliance engineering, cryptographic audit chains, and enterprise SDK architecture — built from the SpanForge-Core codebase.',
}

const COURSES = [
  {
    id: 'the-spanforge-book',
    href: '/learn/the-spanforge-book',
    status: 'available',
    label: 'Book',
    track: 'core',
    title: 'The SpanForge Book',
    description:
      'A complete, structured curriculum built from the SpanForge-Core codebase. 47 chapters across 8 parts — from the core event model through cryptographic audit chains, PII compliance, and enterprise SDK patterns.',
    meta: ['8 parts', '47 chapters', '~120 hrs'],
  },
  {
    id: 'security-engineering',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'security',
    title: 'Security Engineering for AI Systems',
    description:
      'A focused track on cryptographic primitives, HMAC chains, JWT authentication, TOTP, secrets scanning, and SSRF protection — grounded in real stdlib-only implementations.',
    meta: ['10 chapters', '~18 hrs'],
  },
  {
    id: 'compliance-practitioner',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'compliance',
    title: 'AI Compliance Practitioner',
    description:
      'EU AI Act, NIST AI RMF, ISO/IEC 42001, SOC 2 Type II, and GDPR — mapped to engineering controls with signed evidence bundles and T.R.U.S.T. scorecard methodology.',
    meta: ['10 chapters', '~16 hrs'],
  },
  {
    id: 'observability-sre',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'ops',
    title: 'Observability for LLM Systems',
    description:
      'OpenTelemetry, export backends, cost tracking, drift detection, and alert routing — the practical SRE and DevOps track for teams running AI in production.',
    meta: ['10 chapters', '~16 hrs'],
  },
  {
    id: 'sdk-architecture',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'advanced',
    title: 'SDK Architecture Patterns',
    description:
      'Circuit breakers, sliding window rate limiters, plugin systems, auto-instrumentation, and zero-dependency design — transferable patterns for any production SDK.',
    meta: ['12 chapters', '~18 hrs'],
  },
  {
    id: 'runtime-governance',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'advanced',
    title: 'Runtime Governance for AI Agents',
    description:
      'The runtime control-plane story: versioned policy bundles, signed policy decisions, agent scope enforcement, RBAC authorization, explainability records, and decision lineage — coordinated through sf_policy. Covers replay, simulation, and false-positive calibration loops for production governance.',
    meta: ['10 chapters', '~16 hrs'],
  },
  {
    id: 'rag-tracing',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'ops',
    title: 'RAG Tracing & Grounding',
    description:
      'End-to-end tracing for Retrieval-Augmented Generation pipelines: session lifecycle, retrieval scoring, grounding evidence, source-level provenance, and privacy controls — grounded in the sf_rag module. No raw query text or document content is ever stored.',
    meta: ['8 chapters', '~12 hrs'],
  },
  {
    id: 'ai-evaluation',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'testing',
    title: 'AI Evaluation & Quality Gates',
    description:
      'The complete evaluation stack: attaching quality scores to spans, batch runners, regression detection, HallucCheck pipeline integrations (score, bias, monitor, risk, benchmark), the 6-gate CI/CD pipeline, and the T.R.U.S.T. scorecard as a release quality signal.',
    meta: ['10 chapters', '~14 hrs'],
  },
  {
    id: 'enterprise-deployment',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'advanced',
    title: 'Enterprise AI Deployment',
    description:
      'Production deployment patterns for regulated environments: multi-tenancy with project isolation, data residency enforcement (EU/US/APAC/India), AES-256-GCM encryption at rest, envelope KMS, mTLS, FIPS 140-2 mode, air-gap offline deployment, Kubernetes/Helm, and reference architecture selection.',
    meta: ['8 chapters', '~14 hrs'],
  },
  {
    id: 'privacy-engineering',
    href: '#',
    status: 'coming-soon',
    label: 'Course',
    track: 'compliance',
    title: 'Privacy Engineering for AI',
    description:
      'PII detection from regex to Presidio NLP to hybrid approaches, the five-tier sensitivity model, redaction policy design, consent boundary enforcement, GDPR tombstone erasure, differential privacy with Laplace noise, and regulation-specific patterns for GDPR, CCPA, HIPAA, and India\'s DPDP Act.',
    meta: ['8 chapters', '~12 hrs'],
  },
]

const TRACK_META = {
  core:       { label: 'Core',       className: 'trackCore' },
  security:   { label: 'Security',   className: 'trackSecurity' },
  compliance: { label: 'Compliance', className: 'trackCompliance' },
  ops:        { label: 'Ops',        className: 'trackOps' },
  advanced:   { label: 'Advanced',   className: 'trackAdvanced' },
  testing:    { label: 'Testing',    className: 'trackTesting' },
}

function CourseCard({ course }) {
  const track = TRACK_META[course.track] || TRACK_META.core
  const isAvailable = course.status === 'available'

  const inner = (
    <div className={`${styles.card} ${isAvailable ? styles.cardAvailable : styles.cardSoon}`}>
      <div className={styles.cardTop}>
        <div className={styles.cardBadges}>
          <span className={`${styles.trackPill} ${styles[track.className]}`}>{track.label}</span>
          <span className={styles.typePill}>{course.label}</span>
        </div>
        {!isAvailable && (
          <span className={styles.comingSoon}>Coming soon</span>
        )}
      </div>

      <h2 className={styles.cardTitle}>{course.title}</h2>
      <p className={styles.cardDesc}>{course.description}</p>

      <div className={styles.cardFooter}>
        <div className={styles.metaRow}>
          {course.meta.map((m, i) => (
            <span key={i} className={styles.metaItem}>{m}</span>
          ))}
        </div>
        {isAvailable && (
          <span className={styles.cta}>
            View curriculum
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </div>
  )

  if (isAvailable) {
    return <Link href={course.href} className={styles.cardLink}>{inner}</Link>
  }
  return <div className={styles.cardLink}>{inner}</div>
}

export default function LearnPage() {
  return (
    <main id="main-content" className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.eyebrow}>SpanForge Learning Hub</p>
          <h1 className={styles.title}>Learn</h1>
          <p className={styles.subtitle}>
            Structured courses and books built from the SpanForge&#8209;Core codebase. Every chapter maps to real
            implementation code — no toy examples, no hand-waving.
          </p>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className={styles.courses}>
        <div className="container">
          <div className={styles.grid}>
            {COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
