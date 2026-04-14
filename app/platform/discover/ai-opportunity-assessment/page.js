import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'AI Opportunity Assessment v1.0 — Discover — SpanForge',
  description:
    'The SpanForge AI Opportunity & Problem Qualification Assessment. A two-phase, 12-dimension governance artefact for qualifying AI initiatives before the first line of code is written.',
  openGraph: {
    title: 'SpanForge AI Opportunity & Problem Qualification Assessment v1.0',
    description:
      'A two-phase, 12-dimension governance artefact for qualifying AI initiatives before the first line of code is written.',
    type: 'article',
    siteName: 'SpanForge',
  },
}

const PHASE1_DIMENSIONS = [
  {
    id: 'D0',
    title: 'Problem Statement Quality',
    weight: '15%',
    time: '10 min',
    desc: 'Evaluates whether the initiative is built on a clear, agreed, and bounded problem definition. The most common cause of Gate 1 failure is the wrong problem defined — it is cheaper to find it here than at Gate 3.',
    blocker: true,
  },
  {
    id: 'D1',
    title: 'Automation Potential',
    weight: '15%',
    time: '10 min',
    desc: 'Assesses whether the problem is structurally suited to AI. Repetition, rule-legibility, data density, and blast-radius tolerance are scored before any architecture decisions are made.',
    blocker: false,
  },
  {
    id: 'D2',
    title: 'Data Availability',
    weight: '15%',
    time: '10 min',
    desc: 'Confirms whether the data required to train, fine-tune, or run the AI system exists, is accessible, and meets volume requirements. Scores above 1 require documented evidence.',
    blocker: false,
  },
  {
    id: 'D3',
    title: 'Data Risk & Fitness for AI',
    weight: '10%',
    time: '10 min',
    desc: 'Assesses data quality, labelling, recency, and governance fitness. Good data availability does not mean it is safe or suitable to train on — this dimension separates those two questions.',
    blocker: false,
  },
  {
    id: 'D4',
    title: 'Business Value & ROI',
    weight: '15%',
    time: '15 min',
    desc: 'Validates that a credible, measurable business case exists. Vague productivity benefits and CEO announcements are scored at 0. Evidence requires a named KPI baseline and a quantified delta.',
    blocker: false,
  },
  {
    id: 'D5',
    title: 'Regulatory & Ethical Risk',
    weight: '15%',
    time: '10 min',
    desc: 'Maps applicable regulatory obligations: EU AI Act risk classification, GDPR data processing requirements, sector-specific constraints. Compliance and legal must score this dimension.',
    blocker: true,
  },
  {
    id: 'D6',
    title: 'Human Oversight',
    weight: '15%',
    time: '10 min',
    desc: 'Confirms that human control checkpoints are defined, that an accountable owner exists, and that the system cannot operate without appropriate oversight mechanisms in place.',
    blocker: true,
  },
]

const PHASE2_DIMENSIONS = [
  {
    id: 'D7',
    title: 'Technical Infrastructure Readiness',
    desc: 'Confirms that the deployment environment, compute, integration points, and MLOps toolchain can support production AI.',
  },
  {
    id: 'D8',
    title: 'Skills & Team Capacity',
    desc: 'Assesses whether the team has the AI/ML engineering, domain expertise, and governance capacity to deliver and own the system.',
  },
  {
    id: 'D9',
    title: 'Organisational Change Readiness',
    desc: 'Evaluates whether affected business units are prepared to change workflows, own AI outputs, and absorb operational responsibility.',
  },
  {
    id: 'D10',
    title: 'Security & Access Control',
    desc: 'Reviews credential management, prompt injection exposure, PII handling posture, and model access governance before design begins.',
  },
  {
    id: 'D11',
    title: 'Cost & Budget Confidence',
    desc: 'Validates that infrastructure cost estimates, token budgets, and ongoing operational costs are understood and have named budget accountability.',
  },
]

const ROLES = [
  { role: 'Assessment Lead', req: 'Mandatory — full session', note: 'Facilitates, documents scores and evidence' },
  { role: 'Gate Authority / Executive Sponsor', req: 'Mandatory — full session', note: 'Non-negotiable precondition; makes binding gate decisions' },
  { role: 'Business Domain Expert', req: 'Mandatory — full session', note: 'Scores automation potential, human oversight, and value hypothesis' },
  { role: 'AI / Technical Lead', req: 'Mandatory — full session', note: 'Scores data, infrastructure, and skills dimensions' },
  { role: 'Compliance / Legal', req: 'Highly recommended — D4 & D5', note: 'Scores regulatory and T.R.U.S.T.™ dimensions' },
  { role: 'Data Steward / Owner', req: 'Recommended — D2 & D3', note: 'Confirms data access, quality, and governance status' },
]

const SESSION_FORMATS = [
  {
    format: 'Single session',
    people: '4–6 people',
    time: '90–120 min',
    when: 'First-time assessment; all stakeholders available simultaneously',
  },
  {
    format: 'Two sessions',
    people: '4–6 people',
    time: '2 × 60 min',
    when: 'Phase 1 first; Phase 2 after data and governance review',
  },
  {
    format: 'Async + review',
    people: '4–6 people',
    time: '2–3 days',
    when: 'Participants pre-score individually; Lead consolidates; 45-min alignment review',
  },
]

const PDF_URL  = '/downloads/Discover/SpanForge-AI-Opportunity-Assessment-v1.0.pdf'
const DOCX_URL = '/downloads/Discover/SpanForge-AI-Opportunity-Assessment-v1.0.docx'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'SpanForge AI Opportunity & Problem Qualification Assessment v1.0',
  description:
    'A two-phase, 12-dimension governance artefact for qualifying AI initiatives before the first line of code is written. Aligned to the SpanForge Discover Framework.',
  version: '1.0',
  datePublished: '2026-04-01',
  author: {
    '@type': 'Organization',
    name: 'SpanForge',
    url: 'https://www.getspanforge.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'SpanForge',
    url: 'https://www.getspanforge.com',
  },
  encodingFormat: ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.getspanforge.com/platform/discover/ai-opportunity-assessment',
  },
}

export default function AIOpportunityAssessmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className="container">
          <Link href="/platform" className={styles.breadcrumbLink}>Platform</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <Link href="/platform/discover" className={styles.breadcrumbLink}>Discover</Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>AI Opportunity Assessment</span>
        </div>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroBadges}>
            <span className={styles.phaseBadge}>Discover Phase · Gate 1 Pre-Qualification</span>
            <span className={styles.typeBadge}>Governance Artefact</span>
            <span className={styles.versionBadge}>v1.0 · Discover Phase</span>
          </div>

          <h1 className={styles.h1}>
            AI Opportunity &amp; Problem<br />Qualification Assessment
          </h1>

          <p className={styles.heroSub}>
            A two-phase, 12-dimension structured assessment for qualifying AI initiatives
            before architecture decisions are made. Designed for teams who need to prove the problem is real before committing to a solution.
          </p>

          <div className={styles.heroDownloads}>
            <a
              href={PDF_URL}
              download="SpanForge-AI-Opportunity-Assessment-v1.0.pdf"
              className={styles.downloadBtnPrimary}
              aria-label="Download AI Opportunity Assessment as PDF"
            >
              <span className={styles.downloadIcon} aria-hidden="true">↓</span>
              <span>
                <span className={styles.downloadBtnLabel}>Download PDF</span>
                <span className={styles.downloadBtnMeta}>Free · No sign-in required</span>
              </span>
            </a>
            <a
              href={DOCX_URL}
              download="SpanForge-AI-Opportunity-Assessment-v1.0.docx"
              className={styles.downloadBtnSecondary}
              aria-label="Download AI Opportunity Assessment as Word document"
            >
              <span className={styles.downloadIcon} aria-hidden="true">↓</span>
              <span>
                <span className={styles.downloadBtnLabel}>Download DOCX</span>
                <span className={styles.downloadBtnMeta}>Editable · Word / Google Docs</span>
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* What it is */}
      <section className={styles.section} aria-labelledby="what-heading">
        <div className={`container ${styles.sectionInner}`}>
          <span className="eyebrow">What this assessment does</span>
          <h2 id="what-heading" className={styles.h2}>
            Gate the decision before spending the budget.
          </h2>
          <div className={styles.whatGrid}>
            <p className={styles.bodyText}>
              Most AI compliance failures are seeded before a single line of code is written. Teams
              select solutions before validating problems, skip data governance audits, and start
              building before anyone has defined what success — or failure — looks like.
            </p>
            <p className={styles.bodyText}>
              This assessment is the SpanForge Gate 1 instrument. It structures the conversation
              that should happen before design begins: a scored, evidence-backed qualification of
              whether an AI initiative is technically viable, commercially justified, and compliant
              by design. Scores above 1 require documented evidence. Disagreements are recorded
              as governance signal, not averaged away.
            </p>
          </div>

          <div className={styles.scoringBox}>
            <span className={styles.scoringLabel}>Scoring scale — 0 to 3</span>
            <div className={styles.scoringGrid}>
              {[
                { score: '0', label: 'Not Present', note: 'No evidence required — state the reason for absence' },
                { score: '1', label: 'Minimal / Early Stage', note: 'Describe current state; no formal evidence required' },
                { score: '2', label: 'Developing / Partial', note: 'Evidence required — document what exists, what is missing, and the source' },
                { score: '3', label: 'Strong / Well-Established', note: 'Evidence required — provide specific, verifiable proof with named source and date' },
              ].map(s => (
                <div key={s.score} className={styles.scoringItem}>
                  <span className={styles.scoringNum}>{s.score}</span>
                  <div>
                    <span className={styles.scoringItemLabel}>{s.label}</span>
                    <p className={styles.scoringItemNote}>{s.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Phase 1 dimensions */}
      <section className={styles.sectionAlt} aria-labelledby="phase1-heading">
        <div className={`container ${styles.sectionInner}`}>
          <div className={styles.phaseHeader}>
            <div>
              <span className="eyebrow">Phase 1 · Qualify</span>
              <h2 id="phase1-heading" className={styles.h2}>
                Is this worth solving with AI?
              </h2>
              <p className={styles.phaseSub}>
                7 dimensions · Gate threshold: score ≥ 45 to advance to Phase 2 · ~85 minutes
              </p>
            </div>
            <div className={styles.gateThreshold}>
              <span className={styles.gateNum}>45</span>
              <span className={styles.gateNumLabel}>minimum score<br />to proceed</span>
            </div>
          </div>

          <div className={styles.dimensionList}>
            {PHASE1_DIMENSIONS.map((d) => (
              <div key={d.id} className={styles.dimensionItem}>
                <div className={styles.dimensionMeta}>
                  <span className={styles.dimensionId}>{d.id}</span>
                  <div className={styles.dimensionStats}>
                    <span className={styles.dimensionStat}>{d.weight}</span>
                    <span className={styles.dimensionStat}>{d.time}</span>
                    {d.blocker && (
                      <span className={styles.blockerBadge}>Blocker</span>
                    )}
                  </div>
                </div>
                <div className={styles.dimensionContent}>
                  <h3 className={styles.dimensionTitle}>{d.title}</h3>
                  <p className={styles.dimensionDesc}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 2 dimensions */}
      <section className={styles.section} aria-labelledby="phase2-heading">
        <div className={`container ${styles.sectionInner}`}>
          <div className={styles.phaseHeader}>
            <div>
              <span className="eyebrow">Phase 2 · Readiness</span>
              <h2 id="phase2-heading" className={styles.h2}>
                Are you ready to build it?
              </h2>
              <p className={styles.phaseSub}>
                5 dimensions · Conditional on Phase 1 score ≥ 45 · ~35 minutes
              </p>
            </div>
            <div className={`${styles.gateThreshold} ${styles.gateThresholdConditional}`}>
              <span className={styles.gateNum}>≥45</span>
              <span className={styles.gateNumLabel}>Phase 1 required<br />to unlock</span>
            </div>
          </div>

          <div className={styles.dimensionListCompact}>
            {PHASE2_DIMENSIONS.map((d) => (
              <div key={d.id} className={styles.dimensionItemCompact}>
                <span className={styles.dimensionId}>{d.id}</span>
                <div>
                  <h3 className={styles.dimensionTitleCompact}>{d.title}</h3>
                  <p className={styles.dimensionDesc}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs this */}
      <section className={styles.sectionAlt} aria-labelledby="who-heading">
        <div className={`container ${styles.sectionInner}`}>
          <span className="eyebrow">Who needs this</span>
          <h2 id="who-heading" className={styles.h2}>Required attendees & roles</h2>
          <p className={styles.phaseSub}>
            SpanForge non-negotiable: a named Gate Authority with budget accountability must be
            identified before this assessment begins. Without one, any gate decision produced is
            advisory only and cannot be enforced.
          </p>

          <div className={styles.rolesTable}>
            {ROLES.map((r) => (
              <div key={r.role} className={styles.roleRow}>
                <div className={styles.roleName}>{r.role}</div>
                <div className={styles.roleReq}>{r.req}</div>
                <div className={styles.roleNote}>{r.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session formats */}
      <section className={styles.section} aria-labelledby="format-heading">
        <div className={`container ${styles.sectionInner}`}>
          <span className="eyebrow">How to run it</span>
          <h2 id="format-heading" className={styles.h2}>Three ways to run this assessment</h2>

          <div className={styles.formatsGrid}>
            {SESSION_FORMATS.map((f) => (
              <div key={f.format} className={styles.formatCard}>
                <h3 className={styles.formatTitle}>{f.format}</h3>
                <div className={styles.formatStats}>
                  <span className={styles.formatStat}>{f.people}</span>
                  <span className={styles.formatStat}>{f.time}</span>
                </div>
                <p className={styles.formatWhen}>{f.when}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download section */}
      <section className={styles.downloadSection} aria-labelledby="download-heading">
        <div className={`container ${styles.downloadInner}`}>
          <div className={styles.downloadLeft}>
            <span className="eyebrow">Free download</span>
            <h2 id="download-heading" className={styles.downloadH2}>
              Get the assessment artefact
            </h2>
            <p className={styles.downloadSub}>
              Available as a PDF for print and review, and as an editable DOCX for
              running live sessions and recording scored evidence directly in the document.
              No sign-in required.
            </p>

            <div className={styles.downloadFormats}>
              <a
                href={PDF_URL}
                download="SpanForge-AI-Opportunity-Assessment-v1.0.pdf"
                className={styles.formatDownloadCard}
                aria-label="Download as PDF"
              >
                <div className={styles.fmtIcon}>PDF</div>
                <div>
                  <div className={styles.fmtTitle}>PDF</div>
                  <div className={styles.fmtNote}>Print-ready · Review &amp; distribution</div>
                </div>
                <span className={styles.fmtArrow}>↓</span>
              </a>

              <a
                href={DOCX_URL}
                download="SpanForge-AI-Opportunity-Assessment-v1.0.docx"
                className={styles.formatDownloadCard}
                aria-label="Download as Word document"
              >
                <div className={`${styles.fmtIcon} ${styles.fmtIconDocx}`}>DOC</div>
                <div>
                  <div className={styles.fmtTitle}>DOCX</div>
                  <div className={styles.fmtNote}>Editable · Word &amp; Google Docs</div>
                </div>
                <span className={styles.fmtArrow}>↓</span>
              </a>
            </div>
          </div>

          <div className={styles.downloadRight}>
            <div className={styles.documentCard}>
              <div className={styles.documentCardHeader}>
                <span className={styles.documentCardEyebrow}>SpanForge</span>
                <span className={styles.documentCardType}>Governance Artefact</span>
              </div>
              <div className={styles.documentCardTitle}>
                AI Opportunity &amp; Problem Qualification Assessment
              </div>
              <div className={styles.documentCardMeta}>
                <span>Version 1.0</span>
                <span>·</span>
                <span>Discover Phase</span>
              </div>
              <div className={styles.documentCardDivider} />
              <ul className={styles.documentCardList}>
                <li>Phase 1: 7 qualification dimensions</li>
                <li>Phase 2: 5 readiness dimensions</li>
                <li>Gate threshold: Phase 1 score ≥ 45</li>
                <li>Scoring scale: 0–3 with evidence rules</li>
                <li>Session guide &amp; facilitator notes</li>
                <li>Role requirements &amp; time budgets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Page navigation */}
      <nav className={styles.pageNav} aria-label="Page navigation">
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/platform/discover" className={styles.pageNavLink}>
            ← Back to Discover Phase
          </Link>
          <Link href="/platform/design" className={styles.pageNavLink}>
            Next: Design Phase →
          </Link>
        </div>
      </nav>
    </>
  )
}
