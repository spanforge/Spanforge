import Link from 'next/link'
import JourneyStrip from '@/components/JourneyStrip'
import AuditTerminal from '@/components/AuditTerminal'
import NewsletterSignup from '@/components/NewsletterSignup'
import styles from './page.module.css'

export const metadata = {
  title: 'SpanForge — Audit-Ready AI, in Minutes',
  description:
    'Turn every AI decision into tamper-proof evidence and ship to regulators today. SpanForge gives every AI action a signed record, enforces policy before risky output lands, and generates auditor-ready evidence bundles.',
}

const TRUST_SIGNALS = [
  { value: '5 min', label: 'Time to first instrumented trace' },
  { value: '11', label: 'SDK services in one surface area' },
  { value: '6', label: 'Enforcement gates across the delivery path' },
  { value: '7 yrs', label: 'Retention-ready evidence chain support' },
]

const SOCIAL_PROOF = [
  {
    quote: 'SpanForge gave our compliance team the audit trail they needed without slowing down the engineering team at all.',
    author: 'Head of AI Governance',
    org: 'Global Financial Services Firm',
  },
]

const CLIENT_LOGOS = [
  { name: 'Global Financial Services Firm', abbr: 'GFS' },
  { name: 'Digital Health Platform', abbr: 'DHP' },
  { name: 'Enterprise InsurTech', abbr: 'EIT' },
  { name: 'RegTech Provider', abbr: 'RTP' },
  { name: 'AI Governance Team', abbr: 'AGT' },
]

const TESTIMONIAL = {
  quote: 'SpanForge gave our compliance team the audit trail they needed without slowing down engineering at all. We handed the evidence bundle directly to regulators.',
  role: 'Head of AI Governance',
  org: 'Global Financial Services Firm',
}

const TRUST_LOGOS = [
  { label: 'EU AI Act', abbr: 'EU AI Act' },
  { label: 'GDPR', abbr: 'GDPR' },
  { label: 'HIPAA', abbr: 'HIPAA' },
  { label: 'SOC 2', abbr: 'SOC 2' },
  { label: 'ISO 42001', abbr: 'ISO 42001' },
  { label: 'NIST AI RMF', abbr: 'NIST AI RMF' },
]

const PLATFORM_PILLARS = [
  {
    title: 'Instrument every model interaction',
    body: 'Trace prompts, outputs, latency, token cost, retrieval behavior, and human review events in one event model built for agentic systems.',
    href: '/docs/api/observe',
    cta: 'Explore sf_observe',
  },
  {
    title: 'Enforce policy before risk lands',
    body: 'Block secrets, redact sensitive data, catch drift, and route low-confidence decisions to humans before records are persisted.',
    href: '/docs/api/pii',
    cta: 'Explore sf_pii & sf_secrets',
  },
  {
    title: 'Prove compliance with evidence',
    body: 'Generate signed bundles with framework mappings, chain verification, and auditor-friendly artifacts without manual spreadsheet work.',
    href: '/docs/api/cec',
    cta: 'Explore sf_cec',
  },
]

const SDK_SERVICES = [
  { name: 'sf_identity', desc: 'Keys, JWT, magic links, SAML, SCIM, OIDC PKCE, session delegation, and brute-force lockout controls.', tags: [{ label: 'security', cls: 'tagSec' }], href: '/tools/sdk-sf-identity' },
  { name: 'sf_pii', desc: 'Sensitive-data detection and redaction pipelines across GDPR, HIPAA, CCPA, DPDP, and PIPL-aligned policies.', tags: [{ label: 'compliance', cls: 'tagComp' }], href: '/tools/sdk-sf-pii' },
  { name: 'sf_secrets', desc: 'Pattern and entropy-based secret scanning with SARIF output, vault migration hints, and policy-driven blocking.', tags: [{ label: 'security', cls: 'tagSec' }], href: '/tools/sdk-sf-secrets' },
  { name: 'sf_audit', desc: 'Tamper-evident HMAC-SHA256 audit chains with WORM storage patterns, retention support, and chain verification.', tags: [{ label: 'compliance', cls: 'tagComp' }], href: '/tools/sdk-sf-audit' },
  { name: 'sf_observe', desc: 'OpenTelemetry-aligned tracing with exporter support for Datadog, Grafana, Splunk, Elastic, and OTLP backends.', tags: [{ label: 'ops', cls: 'tagOps' }], href: '/tools/sdk-sf-observe' },
  { name: 'sf_alert', desc: 'Alert routing for Slack, Teams, PagerDuty, OpsGenie, and signed webhook automation with deduplication.', tags: [{ label: 'ops', cls: 'tagOps' }], href: '/tools/sdk-sf-alert' },
  { name: 'sf_gate', desc: 'A governance pipeline that turns policy into release criteria across code review, testing, provenance, and compliance checks.', tags: [{ label: 'devops', cls: 'tagDev' }], href: '/tools/sdk-sf-gate' },
  { name: 'sf_cec', desc: 'Evidence bundles with clause mapping, attestations, and exportable artifacts for audits and enterprise reviews.', tags: [{ label: 'compliance', cls: 'tagComp' }], href: '/tools/sdk-sf-cec' },
  { name: 'sf_trust', desc: 'A configurable T.R.U.S.T. scorecard spanning transparency, reliability, user trust, security, and traceability.', tags: [{ label: 'governance', cls: 'tagGov' }], featured: true, href: '/tools/sdk-sf-trust' },
  { name: 'sf_rag', desc: 'RAG tracing with retrieval scoring, grounding metrics, and auto-instrumentation for LlamaIndex and LangChain.', tags: [{ label: 'ops', cls: 'tagOps' }], href: '/tools/sdk-sf-rag' },
  { name: 'sf_feedback', desc: 'Structured feedback collection — NPS, CSAT, thumbs, Likert — linked to T.R.U.S.T. dimensions and audit records.', tags: [{ label: 'governance', cls: 'tagGov' }], href: '/tools/sdk-sf-feedback' },
]

const CATCHES = [
  {
    severity: 'danger',
    tag: 'Blocked secret exposure',
    mono: 'sk_live_4xK9mR2p8vB3nQ...',
    desc: 'A live Stripe key appeared in model output and was blocked before persistence, audit insertion, or downstream storage.',
    attr: 'Entropy score: 5.1 bits/char  |  Confidence: 0.97',
  },
  {
    severity: 'warn',
    tag: 'PII redaction applied',
    mono: 'user@company.com -> [REDACTED:email]',
    desc: 'Email content was detected in a response and rewritten before the event entered the evidence chain.',
    attr: 'GDPR Article 5(1)(f) aligned  |  Metadata recorded',
  },
  {
    severity: 'warn',
    tag: 'Behavioral drift escalated',
    mono: 'drift_score: 0.31 (threshold: 0.20)',
    desc: 'A distribution shift crossed the policy threshold, triggered an incident workflow, and paused the affected agent.',
    attr: '3.1 sigma from baseline  |  PagerDuty fired in 847ms',
  },
]

const COMPLIANCE = [
  { framework: 'EU AI Act', articles: 'Risk management, data governance, record-keeping, transparency, human oversight, and accuracy monitoring.', sdk: 'sf_gate / sf_audit / sf_cec' },
  { framework: 'GDPR', articles: 'Data minimization, right to erasure, records of processing, and processor accountability support.', sdk: 'sf_pii / sf_audit / sf_cec' },
  { framework: 'HIPAA', articles: 'Safe Harbor redaction patterns, access logging, and audit trail support for regulated workloads.', sdk: 'sf_pii / sf_audit / sf_identity' },
  { framework: 'SOC 2', articles: 'Logical access, system operations monitoring, and risk mitigation controls tied to evidence artifacts.', sdk: 'sf_audit / sf_gate / sf_cec' },
  { framework: 'ISO 42001', articles: 'Risk assessment, impact assessment, monitoring, and continuous improvement controls for AI systems.', sdk: 'sf_cec / sf_trust' },
  { framework: 'NIST AI RMF', articles: 'Govern, map, measure, and manage workflows backed by telemetry, policy, and trace evidence.', sdk: 'sf_gate / sf_cec / sf_trust' },
]

export default function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <div className={styles.eyebrowRow}>
                <span className={styles.badge}>General Availability</span>
                <span className={styles.heroMeta}>SpanForge SDK v1.0.1</span>
              </div>
              <h1 id="hero-heading" className={styles.heroH1}>
                Turn every AI decision into tamper-proof evidence.
              </h1>
              <p className={styles.heroPersona}>For AI product teams and compliance officers in regulated industries &mdash; regulator-ready evidence in minutes.</p>
              <p className={styles.heroSub}>
                SpanForge instruments every AI action, enforces policy before risk lands, and generates signed audit bundles your compliance team hands directly to regulators.
              </p>
              <div className={styles.ctaRow}>
                <Link href="/spanforgecore/sdk" className="btn-primary">Start Your First Audit</Link>
              </div>
              <div className={styles.trustGrid}>
                {TRUST_SIGNALS.map((item) => (
                  <div key={item.label} className={styles.trustCard}>
                    <span className={styles.trustValue}>{item.value}</span>
                    <span className={styles.trustLabel}>{item.label}</span>
                  </div>
                ))}
              </div>
              <blockquote className={styles.heroInlineTestimonial}>
                <p className={styles.heroTestimonialQuote}>&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
                <footer className={styles.heroTestimonialAttrib}>{TESTIMONIAL.role} &middot; {TESTIMONIAL.org}</footer>
              </blockquote>
            </div>

            <div className={styles.heroPanel}>
              <div className={styles.panelIntro}>
                <span className={styles.panelKicker}>Launch path</span>
                <h2>From install to regulator-ready evidence in five steps.</h2>
                <p>
                  Start locally, layer in policy enforcement, and graduate to production observability
                  without replacing your model runtime or introducing a heavy platform dependency.
                </p>
              </div>

              <div className={styles.codeCard} aria-label="SpanForge code example">
                <div className={styles.codeHeader}>
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                  <span className={styles.codeDot} />
                  <span className={styles.codeTitle}>quickstart.py</span>
                </div>
                <div className={styles.codeBody}>
                  <span><span className={styles.tMuted}>$</span> <span className={styles.tStrong}>pip install spanforge</span></span>
                  <span className={styles.tSpacer} />
                  <span><span className={styles.tKey}>from</span> <span className={styles.tText}>spanforge.sdk</span> <span className={styles.tKey}>import</span> <span className={styles.tText}>sf_audit, sf_pii, sf_secrets</span></span>
                  <span><span className={styles.tTag}>@spanforge.trace</span></span>
                  <span><span className={styles.tKey}>def</span> <span className={styles.tText}>score_output</span><span className={styles.tMuted}>(</span><span className={styles.tText}>text</span><span className={styles.tMuted}>):</span></span>
                  <span><span className={styles.tText}>    sf_pii.scan(text)</span> <span className={styles.tComment}># redact before persistence</span></span>
                  <span><span className={styles.tText}>    sf_secrets.scan(text)</span> <span className={styles.tComment}># block accidental key leaks</span></span>
                  <span><span className={styles.tText}>    result = run_model(text)</span></span>
                  <span><span className={styles.tText}>    sf_audit.append(result, </span><span className={styles.tString}>"policy.score.v1"</span><span className={styles.tText}>)</span></span>
                  <span><span className={styles.tKey}>    return</span> <span className={styles.tText}>result</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.clientLogoSection} aria-label="Trusted by leading AI teams">
        <div className="container">
          <p className={styles.clientLogoLabel}>Trusted by leading AI teams &mdash; <Link href="/resources" className={styles.clientLogoLink}>read their stories</Link></p>
          <div className={styles.logoStrip}>
            {CLIENT_LOGOS.map((co) => (
              <span key={co.abbr} className={styles.logoChip}>{co.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.socialProofSection} aria-label="Trusted by compliance-first teams">
        <div className="container">
          <p className={styles.socialProofLabel}>Built to support the standards your auditors require</p>
          <div className={styles.frameworkLogos}>
            {TRUST_LOGOS.map((item) => (
              <span key={item.abbr} className={styles.frameworkBadge}>{item.label}</span>
            ))}
          </div>
          <p className={styles.frameworkFootnote}>
            <Link href="/docs/compliance" className={styles.frameworkFootnoteLink}>View evidence schema &amp; framework mappings →</Link>
          </p>
        </div>
      </section>

      <section className={styles.whySection} aria-labelledby="why-heading">
        <div className="container">
          <p className={styles.whySectionLabel} id="why-heading">Why SpanForge?</p>
          <div className={styles.whyGrid}>
            <div className={styles.whyPoint}>
              <strong className={styles.whyPointLabel}>Regulatory risk is live</strong>
              <p className={styles.whyPointText}>EU AI Act enforcement began August 2025. HIPAA and GDPR apply to every AI system handling personal data. Compliance is no longer optional.</p>
            </div>
            <div className={styles.whyPoint}>
              <strong className={styles.whyPointLabel}>Auditors want evidence chains</strong>
              <p className={styles.whyPointText}>Regulators expect machine-readable records with framework mappings — not screenshots and manually assembled spreadsheets.</p>
            </div>
            <div className={styles.whyPoint}>
              <strong className={styles.whyPointLabel}>Prevention costs less</strong>
              <p className={styles.whyPointText}>Retrofitting compliance after a model is in production costs far more in engineering time and remediation resources than instrumenting from day one.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founderSection} aria-label="Founder credibility">
        <div className="container">
          <div className={styles.founderBanner}>
            <div className={styles.founderQuoteMark} aria-hidden="true">&ldquo;</div>
            <div className={styles.founderContent}>
              <p className={styles.founderStatement}>
                After years leading enterprise AI programs, I kept seeing the same gap: teams could build capable AI, but couldn&rsquo;t prove it was safe, compliant, or auditable. SpanForge closes that gap — at the SDK layer, before production.
              </p>
              <p className={styles.founderAttrib}>Founder, SpanForge &middot; Enterprise AI program leader</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whoSection} aria-labelledby="who-heading">
        <div className="container">
          <h2 id="who-heading" className={styles.whoHeading}>Who is this for?</h2>
          <div className={styles.whoGrid}>
            <Link href="/spanforgecore/sdk" className={styles.whoCard}>
              <span className={styles.whoIcon} aria-hidden="true">&#x1F9F0;</span>
              <strong className={styles.whoTitle}>Developers</strong>
              <p className={styles.whoDesc}>Instrument, enforce, and audit AI actions from a single SDK surface. Zero required dependencies.</p>
              <span className={styles.whoLink}>Explore the SDK →</span>
            </Link>
            <Link href="/advisory" className={styles.whoCard}>
              <span className={styles.whoIcon} aria-hidden="true">&#x1F4CB;</span>
              <strong className={styles.whoTitle}>Compliance Teams</strong>
              <p className={styles.whoDesc}>Get auditor-ready evidence bundles mapped to EU AI Act, GDPR, HIPAA, SOC 2, and more.</p>
              <span className={styles.whoLink}>Explore Advisory →</span>
            </Link>
            <Link href="/contact" className={styles.whoCard}>
              <span className={styles.whoIcon} aria-hidden="true">&#x1F3DB;&#xFE0F;</span>
              <strong className={styles.whoTitle}>Enterprise Leaders</strong>
              <p className={styles.whoDesc}>Governed AI deployment with architecture reviews, evidence walkthroughs, and deployment planning.</p>
              <span className={styles.whoLink}>Talk to us →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection} aria-labelledby="pillars-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Platform overview</span>
            <h2 id="pillars-heading" className={styles.secH}>A cleaner path from experimentation to accountable production.</h2>
            <p className={styles.secSh}>
              Instrument every AI action, enforce policy automatically, and generate evidence your auditors
              can verify — all from a single SDK surface with zero required dependencies.
            </p>
          </div>
          <div className={styles.pillarsGrid}>
            {PLATFORM_PILLARS.map((pillar, index) => (
              <article key={pillar.title} className={styles.pillarCard}>
                <span className={styles.pillarIndex}>0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
                <Link href={pillar.href} className={styles.pillarLink}>{pillar.cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.journeySection} aria-labelledby="journey-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Developer workflow</span>
            <h2 id="journey-heading" className={styles.secH}>From install to regulator-ready in five deliberate steps.</h2>
            <p className={styles.secSh}>
              No enterprise ceremony required. Start with <code className={styles.inlineCode}>pip install spanforge</code>,
              then move from instrumentation to signed evidence on a single progression.
            </p>
          </div>
          <JourneyStrip />
        </div>
      </section>

      <section className={styles.auditSection} aria-labelledby="audit-heading">
        <div className="container">
          <div className={styles.auditLayout}>
            <div className={styles.auditCopy}>
              <span className={styles.sectionLabel}>Live evidence chain</span>
              <h2 id="audit-heading" className={styles.secH}>Every LLM call, policy event, and review decision can be signed.</h2>
              <p className={styles.secSh}>
                SpanForge turns AI operations into a traceable ledger of actions. That means better incident response,
                cleaner reviews with compliance stakeholders, and fewer blind spots when a model starts behaving differently in production.
              </p>
              <div className={styles.auditNotes}>
                <div>
                  <strong>Why it matters</strong>
                  <p>Operations teams need proof, not screenshots and institutional memory.</p>
                </div>
                <div>
                  <strong>What changes</strong>
                  <p>Telemetry, redaction, secrets policy, and human escalation live in the same chain of record.</p>
                </div>
              </div>
            </div>
            <AuditTerminal />
          </div>
        </div>
      </section>

      <section className={styles.sdkSection} aria-labelledby="sdk-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>SDK surface</span>
            <h2 id="sdk-heading" className={styles.secH}>Core services designed to feel like one product, not a patchwork of utilities.</h2>
            <p className={styles.secSh}>
              Eleven services covering observability, redaction, secrets, audit chains, compliance evidence,
              identity, alerting, gate pipelines, and trust scoring — all from <code className={styles.inlineCode}>pip install spanforge</code>.
            </p>
          </div>
          <div className={styles.sdkGridCompact}>
            {SDK_SERVICES.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className={`${styles.sdkCardCompact} ${service.featured ? styles.sdkCardFeatured : ''}`}
              >
                <div className={styles.sdkCardTop}>
                  <p className={styles.sdkName}>{service.name}</p>
                  <div className={styles.sdkPills}>
                    {service.tags.map((tag) => (
                      <span key={tag.label} className={`${styles.pill} ${styles[tag.cls]}`}>{tag.label}</span>
                    ))}
                  </div>
                </div>
                <p className={styles.sdkDesc}>{service.desc}</p>
                <span className={styles.sdkCardArrow} aria-hidden="true">View docs →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.catchesSection} aria-labelledby="catches-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Risk detection</span>
            <h2 id="catches-heading" className={styles.secH}>Examples of the kinds of failures the platform is meant to intercept.</h2>
            <p className={styles.secSh}>
              SpanForge intercepts real failure modes before they reach storage, downstream systems, or your
              audit record — with full context preserved for incident response.
            </p>
          </div>
          <div className={styles.catchGrid}>
            {CATCHES.map((item) => (
              <article key={item.tag} className={`${styles.catchCard} ${item.severity === 'danger' ? styles.catchDanger : styles.catchWarn}`}>
                <p className={`${styles.catchTag} ${item.severity === 'danger' ? styles.catchTagD : styles.catchTagW}`}>{item.tag}</p>
                <span className={styles.catchMono}>{item.mono}</span>
                <p className={styles.catchDesc}>{item.desc}</p>
                <p className={styles.catchAttr}>{item.attr}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.compSection} aria-labelledby="comp-heading">
        <div className="container">
          <div className={styles.sectionIntro}>
            <span className={styles.sectionLabel}>Framework coverage</span>
            <h2 id="comp-heading" className={styles.secH}>Built for regulated AI programs, security reviews, and enterprise buying conversations.</h2>
            <p className={styles.secSh}>
              Map your AI operations to article-level obligations across six regulatory frameworks.
              Signed evidence packages ready for auditor hand-off — no manual spreadsheet work.
            </p>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.compTable}>
              <thead>
                <tr>
                  <th>Framework</th>
                  <th>Coverage focus</th>
                  <th>Relevant SDK surface</th>
                </tr>
              </thead>
              <tbody>
                {COMPLIANCE.map((row) => (
                  <tr key={row.framework}>
                    <td className={styles.compFw}>{row.framework}</td>
                    <td>{row.articles}</td>
                    <td className={styles.compSdk}>{row.sdk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.compCta}>
            <code className={styles.compCode}>sf_cec.build_bundle(project_id, date_range, frameworks=[&quot;eu_ai_act&quot;, &quot;iso_42001&quot;, &quot;soc2&quot;])</code>
            <p>
              Generate a signed evidence bundle with chain proof, framework mappings, and attestation artifacts.
              <Link href="/spanforgecore/sdk" className={styles.compCtaLink}> View the SDK documentation.</Link>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.newsletterSection} aria-labelledby="newsletter-heading">
        <div className="container">
          <NewsletterSignup />
        </div>
      </section>

      <section className={styles.dualCtaSection} aria-labelledby="cta-heading">
        <div className="container">
          <div className={styles.dualCta}>
            <div className={`${styles.ctaBox} ${styles.ctaBoxDev}`}>
              <p className={styles.ctaTrackLabel}>For developers</p>
              <h3 className={styles.ctaBoxH3}>Start with the product surface, not a sales process.</h3>
              <p className={styles.ctaBoxP}>
                Install the SDK, instrument your first AI action, and validate the compliance workflow on a real system — before you involve procurement.
              </p>
              <Link href="/spanforgecore/sdk" className={styles.ctaInstallBtn}>Open the quickstart</Link>
            </div>
            <div className={`${styles.ctaBox} ${styles.ctaBoxEnt}`}>
              <p className={styles.ctaTrackLabel}>For enterprise teams</p>
              <h3 className={styles.ctaBoxH3}>Bring security, platform, and compliance into the same conversation.</h3>
              <p className={styles.ctaBoxP}>
                For regulated rollouts, use the contact flow for architecture reviews, evidence-chain walkthroughs,
                and deployment planning across internal governance requirements.
              </p>
              <Link href="/contact" className={styles.ctaBriefBtn}>Request a briefing</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
