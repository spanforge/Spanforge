import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'Training Data Compliance Standard v1.0 — SpanForge',
  description:
    'The SpanForge open standard for compliant AI training data. Covers PII detection (30+ types), redaction techniques, data lineage, bias analysis, and audit sign-off under EU AI Act, GDPR, DPDP, and CCPA.',
}

const REGULATIONS = [
  { code: 'EU AI Act', article: 'Article 10', detail: 'High-Risk Systems — training data quality, governance, bias checks' },
  { code: 'GDPR', article: 'Art. 5, 6, 13, 30', detail: 'Lawfulness, consent, records of processing activities' },
  { code: 'DPDP Act', article: 'India, 2023', detail: 'Digital Personal Data Protection — purpose limitation, consent' },
  { code: 'CCPA', article: 'California', detail: 'Consumer rights, opt-out, data minimization for ML training' },
]

const SECTIONS = [
  {
    num: '1',
    title: 'Framework Overview',
    summary: 'Scope of the standard — what training data is covered, what is excluded, and why compliance matters for regulators and practitioners.',
  },
  {
    num: '2',
    title: 'Training Data Compliance Checklist',
    summary: 'Five-phase checklist: pre-training data sourcing, data preparation, lineage documentation, bias analysis, and compliance review with sign-off.',
  },
  {
    num: '3',
    title: 'PII Detection Framework',
    summary: '30+ PII categories across identifiers, biometrics, location, financial, health, communication, work, behavioral, government, and demographic data — with detection patterns.',
  },
  {
    num: '4',
    title: 'Data Redaction & Anonymization',
    summary: 'Six redaction techniques (removal, hashing, generalization, differential privacy, synthetic replacement, tokenization) with verification requirements.',
  },
  {
    num: '5',
    title: 'Sensitive Data Categories',
    summary: 'GDPR Article 9 special categories, quasi-identifier risks, and data minimization principles for compliant model training.',
  },
  {
    num: '6',
    title: 'Data Lineage & Provenance',
    summary: 'Data origin metadata schema, transformation log format, and reproducibility requirements for audit-ready datasets.',
  },
  {
    num: '7',
    title: 'Compliance Checklist & Sign-Off',
    summary: 'Self-assessment form, section-by-section sign-off templates, and accountability guidance for compliance officers, legal, security, and model teams.',
  },
  {
    num: '8',
    title: 'Tools & Implementation',
    summary: 'SpanForge CLI commands for automated PII scanning, compliance reporting, and integration into CI/CD pipelines.',
  },
]

const PII_GROUPS = [
  { group: 'A', name: 'Identifiers', examples: 'Full name, email, phone, SSN, passport, driver license, national ID, tax ID' },
  { group: 'B', name: 'Biometric Data', examples: 'Facial recognition, fingerprints, iris scan, voice print, DNA, palm print' },
  { group: 'C', name: 'Location Data', examples: 'GPS coordinates, IP address, MAC address, WiFi SSID, geofence data' },
  { group: 'D', name: 'Financial Data', examples: 'Credit card, bank account, routing number, IBAN, cryptocurrency, PayPal' },
  { group: 'E', name: 'Health Data', examples: 'Medical record number, medication, diagnosis, lab results, fitness biometrics' },
  { group: 'F', name: 'Communication Data', examples: 'Email messages, chat, phone calls, SMS, Slack/Teams content' },
  { group: 'G', name: 'Work / Education', examples: 'Employee ID, job title, employer, school name, student ID, grades' },
  { group: 'H', name: 'Behavioral Data', examples: 'Shopping history, browsing history, social media activity, location history' },
  { group: 'I', name: 'Government / Legal', examples: 'Visa number, refugee status, criminal record, court records' },
  { group: 'J', name: 'Demographic Data', examples: 'Exact age, ZIP code, race/ethnicity, gender, religion, sexual orientation, union membership, political affiliation' },
]

const REDACTION_TECHNIQUES = [
  { num: '1', name: 'Complete Removal', use: 'Data not needed for training', risk: 'May lose context' },
  { num: '2', name: 'Hashing (One-Way)', use: 'Preserve uniqueness without identity', risk: 'Rainbow table attacks — salt required' },
  { num: '3', name: 'Generalization', use: 'Approximate values (age 30–40, ZIP 941**)', risk: 'Reduced model utility' },
  { num: '4', name: 'Differential Privacy', use: 'Mathematical privacy proof with noise', risk: 'Computational overhead' },
  { num: '5', name: 'Synthetic Replacement', use: 'Statistical clones of real data', risk: 'May miss rare edge cases' },
  { num: '6', name: 'Tokenization', use: 'Reversible token with encrypted lookup', risk: 'Lookup table must be protected' },
]

const CLI_EXAMPLE = `# Step 1: Scan dataset for PII
spanforge validate --dataset training_data.jsonl \\
  --dataset-scan \\
  --check-pii-field-names \\
  --check-pii-values \\
  --use-ml-model contextual_pii \\
  --manual-review-sample 100 \\
  --fail-on-violations \\
  --format json > pii_report.json

# Step 2: Check required fields
spanforge validate --dataset training_data.jsonl \\
  --required-fields employee_id,name,email \\
  --format text

# Step 3: Generate compliance report
spanforge compliance report training_data.jsonl \\
  --framework EU_AI_ACT \\
  --format pdf > compliance_report.pdf`

export default function TrainingDataComplianceStandardPage() {
  return (
    <>
      {/* ── Breadcrumb ───────────────────────────────────── */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/standards" className={styles.breadcrumbLink}>Standards</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>Training Data Compliance Standard</span>
        </div>
      </div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>TDCS-1.0 · Open Standard · RFC-pending</span>
          <h1 className={styles.h1}>Training Data Compliance Standard</h1>
          <p className={styles.heroSub}>
            The SpanForge framework for compliant AI training data. Defines what constitutes
            compliant training data under EU AI Act, GDPR, DPDP, and CCPA — with a 30+ PII
            detection framework, redaction standards, data lineage requirements, and
            audit-ready sign-off checklists.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/spanforgecore" className="btn-primary">SpanForge CLI</Link>
            <Link href="/contact" className="btn-ghost">Give feedback</Link>
          </div>

          {/* Metadata strip */}
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--rule)' }}>
            {[
              { label: 'Version', value: '1.0' },
              { label: 'Status', value: 'Open Standard (RFC-pending)' },
              { label: 'Effective Date', value: 'May 2, 2026' },
              { label: 'Last Updated', value: 'May 2, 2026' },
              { label: 'Target Audience', value: 'Data engineers, ML practitioners, compliance officers, auditors' },
            ].map((m) => (
              <div key={m.label}>
                <div style={{ fontSize: '0.68rem', fontFamily: 'var(--font-dm-mono)', color: 'var(--mid)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.2rem' }}>{m.label}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Executive Summary ────────────────────────────── */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Executive Summary</span>
            <h2 className={styles.sectionH2}>What this standard provides</h2>
            <p className={styles.sectionBody}>
              AI models trained on personal data can perpetuate biases, violate privacy regulations,
              and expose organisations to regulatory liability. High-risk decisions require transparent,
              auditable training data — yet no broadly adopted standard existed for what "compliant
              training data" means in practice.
            </p>
            <p className={styles.sectionBody}>
              This standard fills that gap. It is an open specification for data engineers, ML
              practitioners, compliance officers, and auditors — designed to be incrementally
              adoptable and regulator-facing.
            </p>

            <div className={styles.hubGrid} style={{ marginTop: '2rem' }}>
              {[
                { label: '30+', detail: 'PII data types in the detection framework' },
                { label: '6', detail: 'Redaction and anonymization techniques' },
                { label: '4', detail: 'Regulatory frameworks covered' },
                { label: '5', detail: 'Compliance checklist phases with sign-off' },
              ].map((s) => (
                <div key={s.label} className={styles.hubCard} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--accent)', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.label}</div>
                  <p className={styles.hubCardDesc} style={{ marginTop: '0.5rem' }}>{s.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulatory Coverage ──────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">Regulatory scope</span>
          <h2 className={styles.sectionH2}>Regulations covered</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px', marginBottom: '2rem' }}>
            This standard applies to training datasets used to train or fine-tune AI models that
            process personal data, are classified high-risk under EU AI Act, or are deployed in
            regulated jurisdictions.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Regulation</th>
                  <th>Article / Scope</th>
                  <th>Compliance area</th>
                </tr>
              </thead>
              <tbody>
                {REGULATIONS.map((r) => (
                  <tr key={r.code}>
                    <td><strong>{r.code}</strong></td>
                    <td><span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.82rem' }}>{r.article}</span></td>
                    <td>{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Document sections ────────────────────────────── */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">Document structure</span>
          <h2 className={styles.sectionH2}>Eight sections</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px', marginBottom: '2rem' }}>
            The standard is structured in eight sections covering the full compliance lifecycle —
            from data sourcing through audit sign-off.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)', borderRadius: '8px', overflow: 'hidden' }}>
            {SECTIONS.map((s) => (
              <div key={s.num} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem 1.5rem', background: 'var(--surface)', alignItems: 'flex-start' }}>
                <div style={{ minWidth: '2.5rem', height: '2.5rem', borderRadius: '50%', background: 'var(--accent-soft)', border: '1px solid rgba(18,102,241,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontFamily: 'var(--font-dm-mono)', color: 'var(--accent)', fontWeight: '600', flexShrink: 0 }}>{s.num}</div>
                <div>
                  <div style={{ fontWeight: '600', color: 'var(--white)', marginBottom: '0.3rem' }}>§{s.num} — {s.title}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: '1.65', margin: 0 }}>{s.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PII Detection Framework ──────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">§3 — PII Detection Framework</span>
          <h2 className={styles.sectionH2}>30+ PII categories across 10 groups</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '720px', marginBottom: '2rem' }}>
            The framework covers every major PII category in regulated jurisdictions. Detection combines
            regex patterns, ML model-based contextual analysis, and mandatory manual spot-checks —
            regex alone is insufficient.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Group</th>
                  <th>Category</th>
                  <th>Examples</th>
                </tr>
              </thead>
              <tbody>
                {PII_GROUPS.map((g) => (
                  <tr key={g.group}>
                    <td><span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>{g.group}</span></td>
                    <td><strong>{g.name}</strong></td>
                    <td style={{ fontSize: '0.85rem' }}>{g.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem 1.25rem', background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.2)', borderRadius: '6px' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.875rem', margin: 0, lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--white)' }}>⚠️ Context matters:</strong> Behavioral data that reveals protected characteristics (religion, sexual orientation, health, union membership, politics) is high-risk even after name removal. Quasi-identifier combinations (age + ZIP + job title) can re-identify individuals — k-anonymity k≥5 is required.
            </p>
          </div>
        </div>
      </section>

      {/* ── Redaction Techniques ─────────────────────────── */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">§4 — Data Redaction & Anonymization</span>
          <h2 className={styles.sectionH2}>Six redaction techniques</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px', marginBottom: '2rem' }}>
            Each technique carries different utility/privacy trade-offs. The standard requires
            redaction completeness verification in four mandatory steps — automated re-scan,
            manual validation, quasi-identifier check, and domain expert review.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Technique</th>
                  <th>Best use case</th>
                  <th>Key risk</th>
                </tr>
              </thead>
              <tbody>
                {REDACTION_TECHNIQUES.map((t) => (
                  <tr key={t.num}>
                    <td><span style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.8rem', color: 'var(--accent)' }}>{t.num}</span></td>
                    <td><strong>{t.name}</strong></td>
                    <td style={{ fontSize: '0.85rem' }}>{t.use}</td>
                    <td style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>{t.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CLI Integration ──────────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">§8 — Tools & Implementation</span>
          <h2 className={styles.sectionH2}>SpanForge CLI integration</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px', marginBottom: '1.5rem' }}>
            The SpanForge CLI provides a reference implementation of the scanning, reporting, and
            validation pipeline defined in this standard. Tool output is advisory — all critical
            findings require human review and stakeholder sign-off.
          </p>

          <div className={styles.codeBlock}>
            <div className={styles.codeBlockHeader}>
              <span className={styles.codeBlockLang}>bash</span>
            </div>
            <pre className={styles.codeBlockBody}>{CLI_EXAMPLE}</pre>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              { label: '✅ Detects', items: ['Obvious PII patterns (email, SSN, phone)', 'Field-name heuristics', '30+ detection categories', 'High-risk records flagged for review'] },
              { label: '❌ Cannot replace', items: ['Contextual / implicit PII judgement', 'Legal basis validity assessment', 'Domain expert manual review', 'Regulatory compliance determination'] },
            ].map((col) => (
              <div key={col.label} style={{ flex: '1', minWidth: '260px', padding: '1.25rem', background: 'var(--surface-2)', border: '1px solid var(--rule)', borderRadius: '8px' }}>
                <div style={{ fontWeight: '600', color: 'var(--white)', marginBottom: '0.75rem', fontSize: '0.9rem' }}>{col.label}</div>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--muted)', fontSize: '0.85rem', lineHeight: '1.9' }}>
                  {col.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance checklist phases ──────────────────── */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">§2 — Compliance checklist</span>
          <h2 className={styles.sectionH2}>Five-phase compliance lifecycle</h2>
          <div className={styles.hubGrid} style={{ marginTop: '2rem' }}>
            {[
              { phase: '2.1', label: 'Pre-Training', items: ['Data source documentation', 'Legal basis (GDPR Art. 6)', 'EU AI Act high-risk classification', 'Prohibited source verification'] },
              { phase: '2.2', label: 'Data Preparation', items: ['Automated PII scan (30+ patterns)', 'Manual spot-check (50–100 records)', 'PII remediation & redaction', 'Redaction completeness verification'] },
              { phase: '2.3', label: 'Data Lineage', items: ['Provenance metadata schema', 'Transformation log (every step)', 'Consent & legal basis records', 'Chain of custody documentation'] },
              { phase: '2.4', label: 'Bias Analysis', items: ['Demographic representation check', 'Class imbalance assessment', 'Fairness metrics (parity, odds, calibration)', 'Disparate impact (80% rule)'] },
              { phase: '2.5', label: 'Review & Sign-Off', items: ['Data owner sign-off', 'Compliance officer sign-off', 'Security review', 'Optional: third-party audit'] },
            ].map((p) => (
              <div key={p.phase} className={styles.hubCard}>
                <span className={styles.hubCardLabel}>Phase {p.phase}</span>
                <h3 className={styles.hubCardTitle} style={{ fontSize: '1.05rem', margin: '0.4rem 0 0.75rem' }}>{p.label}</h3>
                <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--muted)', fontSize: '0.83rem', lineHeight: '1.9' }}>
                  {p.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accountability note ──────────────────────────── */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Accountability</span>
            <h2 className={styles.sectionH2}>Sign-off does not eliminate liability</h2>
            <p className={styles.sectionBody}>
              Completing this standard's checklists documents that due diligence was performed.
              It does NOT guarantee regulatory compliance, absence of PII or bias, or protect
              signers from liability if issues emerge later. Signers remain responsible for accuracy
              of assessment, actual compliance with regulations, ongoing monitoring, and response
              to issues. Consult legal counsel for high-risk model classification under EU AI Act.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <Link href="/standards" className="btn-ghost">All standards</Link>
              <Link href="/spanforgecore" className="btn-primary">SpanForge CLI</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
