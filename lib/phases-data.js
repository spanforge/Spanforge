export const phases = [
  {
    num: '01',
    id: 'discover',
    label: 'DISCOVER',
    colorVar: '--discover',
    tag: 'Is AI right for this?',
    tagline: 'Compliance begins before the first line of code.',
    summary: [
      'Most AI compliance failures are seeded before a single line of code is written. Teams pick solutions before validating problems, skip data governance audits, and start building before anyone has defined what regulatory obligations apply.',
      'The Discover phase establishes the compliance baseline: AI readiness assessment, regulatory obligation mapping (EU AI Act risk classification, GDPR applicability, data sovereignty requirements), use case prioritisation, data governance audit, and ROI modelling — all before architecture decisions are made.',
    ],
    gate: 'Nothing progresses to Design without: a signed-off Problem Statement Canvas, a validated compliance readiness score, applicable regulatory frameworks identified, and a confirmed business case.',
  },
  {
    num: '02',
    id: 'design',
    label: 'DESIGN',
    colorVar: '--design',
    tag: 'What should we build?',
    tagline: 'Architecture decisions made with compliance evidence.',
    summary: [
      'The Design phase translates a validated problem into a concrete, compliance-ready technical architecture. Model selection with risk classification, data strategy with governance obligations documented, infrastructure decisions with consent flows mapped — everything defined before writing production code.',
      'The Cost Intelligence Layer closes the cost visibility gap: infrastructure cost estimates are produced before any resource is committed, and runtime token cost tracking is incorporated via the SpanForge cost namespace. Capability, compliance posture, and cost — all governed at decision time.',
    ],
    gate: 'Nothing progresses to Build without: architecture documented with compliance obligations mapped, data strategy validated, security reviewed, team capacity confirmed, and a cost intelligence estimate produced with scenario comparison documented.',
  },
  {
    num: '03',
    id: 'build',
    label: 'BUILD',
    colorVar: '--build',
    tag: 'Build it to the standard.',
    tagline: 'Compliance-first CI/CD. No shortcuts.',
    summary: [
      'The Build phase is where compliance becomes code. Six mandatory CI/CD gates enforce security, quality, behaviour, performance, governance, and deployment readiness — in that order. All instrumented with RFC-0001 SpanForge event emission from the first commit.',
      'Every tool composes against the SpanForge schema. PII redaction, consent enforcement, HMAC audit chain initialisation, and prompt injection resistance are verified gates — not post-deployment checks. Nothing ships without all six going green.',
    ],
    gate: 'Nothing ships without all six CI/CD gates passing — security, quality, behaviour, performance, governance, and deploy checks all green. SpanForge instrumentation confirmed. Audit chain initialised.',
  },
  {
    num: '04',
    id: 'govern',
    label: 'GOVERN',
    colorVar: '--govern',
    tag: 'Make it accountable.',
    tagline: 'T.R.U.S.T. Framework. Regulatory evidence.',
    summary: [
      'The Govern phase converts the T.R.U.S.T. Framework from policy into audit-ready evidence. Compliance mapping against EU AI Act, GDPR, SOC 2, ISO 42001, and NIST AI RMF — automatically generated from SpanForge event streams via the ComplianceMappingEngine.',
      'Risk registers, governance maturity assessment, explainability records, consent audit trails, model registry attestations, and board-level reporting packs — all structured around the five T.R.U.S.T. dimensions and ready for regulatory scrutiny. Evidence packages are HMAC-signed for tamper-evidence.',
    ],
    gate: 'Nothing goes to production without: T.R.U.S.T. Framework mapped against applicable regulatory frameworks, compliance evidence package generated and signed, incident playbook assigned, and named accountable owner documented.',
  },
  {
    num: '05',
    id: 'scale',
    label: 'SCALE',
    colorVar: '--scale',
    tag: 'Prove compliance in production.',
    tagline: 'RFC-0001. Immutable audit trails. Live.',
    summary: [
      'The Scale phase is where compliance is continuously demonstrated — not just claimed. The SpanForge Platform connects to deployed AI agents via OpenTelemetry and the RFC-0001 SpanForge standard, recording every LLM call, tool invocation, consent event, guard block, and cost record as a cryptographically signed, tamper-evident receipt.',
      'Behavioural drift detection, PII boundary enforcement, consent violation alerting, HMAC audit chain verification, and cross-provider token cost attribution — running continuously before regulators, auditors, or incident reports find the problem first.',
    ],
    gate: 'SpanForge active before the first production request. RFC-0001 event emission confirmed. HMAC audit chain live. Behavioural baseline established. Drift monitoring configured. On-call owner named and playbooks tested.',
  },
]

export const trustDimensions = [
  { letter: 'T', word: 'Transparency',      desc: 'Customers, regulators, and employees understand how AI affects them. AI behaviour is made intelligible to all affected parties — not just technical teams.' },
  { letter: 'R', word: 'Responsibility',    desc: 'A named human is accountable for every AI system. AI cannot be deployed without a designated owner who carries accountability for its behaviour in production. Responsibility extends to cost: the Cost Intelligence Layer makes infrastructure spend visible at Design time and measures actual token costs in production via the SpanForge llm.cost.* namespace — ensuring accountable owners understand the financial implications before committing to them.' },
  { letter: 'U', word: 'User Rights',       desc: 'Consent, transparency, and recourse for every individual AI affects. Users have the right to understand how AI decisions affect them and to seek redress where required.' },
  { letter: 'S', word: 'Safety Guardrails', desc: 'Technical constraints embedded in architecture, not just policy. Safety mechanisms are built into the system — not left as aspirational guidance or documents.' },
  { letter: 'T', word: 'Traceability',      desc: 'Every AI decision must be traceable to its source data, model version, and configuration state. Full audit trail. No black boxes. Every decision is logged with an immutable, timestamped, cryptographically signed record — ready for regulators, auditors, and post-incident review.' },
]

export const pipelineStages = [
  {
    label: 'SECURITY',
    tools: [],
    note: 'No exposed keys. No PII in prompts or training data.',
  },
  {
    label: 'QUALITY',
    tools: [],
    note: 'Prompts valid. Token budgets respected. Config correct.',
  },
  {
    label: 'BEHAVIOUR',
    tools: [],
    note: 'Behaviour tests pass. No regressions. Hallucination score acceptable.',
  },
  {
    label: 'PERFORMANCE',
    tools: [],
    note: 'Within latency SLA. Handles expected load.',
  },
  {
    label: 'GOVERNANCE',
    tools: [],
    note: 'Consent respected. Output policies enforced. Injection-resistant.',
  },
  {
    label: 'DEPLOY',
    tools: [],
    note: 'Live monitoring. Drift detection running. Incident playbooks in place.',
    isDeploy: true,
  },
]
