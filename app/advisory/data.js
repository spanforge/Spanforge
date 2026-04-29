export const FAILURE_FUNNEL = [
  {
    stage: 'Gate 1 — Scoping',
    lost: '30–40%',
    cause: 'No written problem statement. Sponsor uncommitted. Data access unconfirmed.',
  },
  {
    stage: 'Gate 2 — Proof of Concept',
    lost: '20–30%',
    cause: 'No accuracy standard. No holdout set. No risk register reviewed.',
  },
  {
    stage: 'Gate 3 — Pilot',
    lost: '15–25%',
    cause: 'No KPI baseline. No production environment for validation. Compliance unaddressed.',
  },
  {
    stage: 'Gate 4 — Limited Release',
    lost: '5–10%',
    cause: 'Low adoption. Escalation failures. Operational overhead underestimated.',
  },
  {
    stage: 'Full Production',
    lost: null,
    reach: '20–35%',
    cause: 'Only this fraction of initiatives reach governed production. Industry baseline is under 20%.',
    isLast: true,
  },
]

export const TRUST_DIMENSIONS = [
  {
    letter: 'T',
    name: 'Transparency',
    body: 'Decision drivers visualised in business-readable terms. Explainability coverage tracked as a production metric.',
  },
  {
    letter: 'R',
    name: 'Responsibility',
    body: 'Named human owner at every gate. Budget-accountable sponsor required. Cost visibility mandatory at Design.',
  },
  {
    letter: 'U',
    name: 'User Rights',
    body: 'Consent, transparency, and recourse enforced technically. GDPR right-to-erasure built into the audit chain.',
  },
  {
    letter: 'S',
    name: 'Safety Guardrails',
    body: 'Six-gate CI/CD pipeline. Hallucination scoring. Behaviour testing. Automated response playbooks.',
  },
  {
    letter: 'T',
    name: 'Traceability',
    body: 'HMAC-signed audit trail. Every decision, tool call, and human review cryptographically recorded.',
  },
]

export const LIFECYCLE_STAGES = [
  {
    number: '01',
    name: 'Discover',
    title: 'Frame the system, the risk, and the operating reality.',
    body: 'Map the use case, decision boundaries, data handling, and delivery constraints before teams hard-code risk into the product. Gate Readiness Score™ computed before any implementation work begins.',
    gate: 'Gate 1 — Scoping Review',
    gateCondition: 'Signed problem statement · Confirmed data access · Defined KPIs · Business case with cost envelope',
  },
  {
    number: '02',
    name: 'Design',
    title: 'Translate intent into an implementable control model.',
    body: 'Define workflows, human oversight, policy checkpoints, and evidence requirements so production architecture reflects compliance from the start. CostGuard™ cost estimate required before architecture is approved.',
    gate: 'Gate 2 — Proof of Concept',
    gateCondition: 'Architecture documented · Data strategy validated · Security review complete · Technical feasibility on representative data',
  },
  {
    number: '03',
    name: 'Build',
    title: 'Ship the operational path, not just the prototype.',
    body: 'Every artefact passes six sequential CI/CD gates — security, quality, behaviour, performance, governance, deploy — before production. Nothing ships with any gate uncleared.',
    gate: 'Gate 3 — Pilot',
    gateCondition: 'All six gates green · KPI targets in controlled production · Compliance sign-off · HITL audit logs reviewed',
  },
  {
    number: '04',
    name: 'Govern',
    title: 'Enforce policy where production systems usually fail.',
    body: 'Turn controls into runtime behaviour with policy enforcement, traceability, and signed records instead of after-the-fact documentation.',
    gate: 'Gate 4 — Limited Release',
    gateCondition: 'T.R.U.S.T. Framework mapped · Compliance Evidence Chain generated · EU AI Act classification complete · Incident playbook assigned',
    highlight: 'Powered by SpanForge SDK',
    bullets: [
      'Policy enforcement before risky output lands',
      'Audit logs with tamper-evident traceability',
      'Evidence-ready records for internal and external review',
    ],
  },
  {
    number: '05',
    name: 'Scale',
    title: 'Operationalize what can survive security, compliance, and growth.',
    body: 'SpanForge active across all 10 RFC-0001 namespaces. Behavioural baselines established. Drift detection configured. CostGuard™ feedback loop activated. On-call owner named.',
    gate: 'Gate 5 — Full Production',
    gateCondition: 'SpanForge active · Behavioural baseline set · Drift thresholds configured · Playbooks tested · On-call owner named',
  },
]

export const ENGAGEMENTS = [
  {
    slug: 'assessment',
    eyebrow: 'Stage 01-02',
    title: 'Assessment',
    summary: 'Pressure-test the idea, risk posture, and production path before implementation work begins.',
    cta: 'View assessment',
    outcomes: [
      'Use-case and risk framing',
      'Gate Readiness Score™ across six dimensions',
      'EU AI Act risk categorisation',
      'T.R.U.S.T. compliance gap analysis',
      'Architecture and rollout recommendations',
    ],
  },
  {
    slug: 'implementation',
    eyebrow: 'Stage 02-04',
    title: 'Implementation',
    summary: 'Design and build the compliance-aware system path with SpanForge embedded where enforcement matters.',
    cta: 'View implementation',
    outcomes: [
      'Workflow and control design',
      'SpanForge SDK integration planning',
      'Six-gate CI/CD pipeline configuration',
      'Compliance Evidence Chain (sf-cec) generation',
      'Production-readiness execution support',
    ],
  },
  {
    slug: 'production-enablement',
    eyebrow: 'Stage 04-05',
    title: 'Production Enablement',
    summary: 'Carry the system into governed operation with evidence, release discipline, and operating clarity.',
    cta: 'View enablement',
    outcomes: [
      'Governance and release gates',
      'Behavioural baselining across RFC-0001 namespaces',
      'Drift detection threshold configuration',
      'Audit and evidence workflows',
      'Incident playbook activation and handoff',
    ],
  },
]

export const DOCTRINE = [
  {
    label: 'Evidence over momentum',
    body: 'No initiative advances because it has been running long or people believe in it. Evidence — and only evidence — advances an initiative.',
  },
  {
    label: 'Governance is architecture',
    body: 'AI governance is not compliance bolted onto delivery. It is a design decision made at the architecture stage and enforced technically in production. If it is not in the code, it is not real.',
  },
  {
    label: 'Ambiguity compounds',
    body: 'The longer an AI initiative operates without defined success criteria, the more expensive it becomes to define them later. Clarity at Gate 1 is worth more than optimism at Month 12.',
  },
]

export const DETAIL_PAGES = {
  assessment: {
    title: 'Assessment',
    description: 'Validate whether an AI initiative has a credible path from idea to compliant production with SpanForge.',
    hero: 'Assess the path before you commit to the build.',
    intro:
      'Assessment is the entry point for teams that know the prototype is not the hard part. The work here is to define the system boundary, locate the real compliance and governance risks, and decide what must be true before implementation begins.',
    focus: 'This is not generic strategy work. It is the first step in making SpanForge relevant to a real operating environment.',
    stages: ['Discover', 'Design'],
    included: [
      'AI use-case and decision-flow review',
      'Gate Readiness Score™ computed across six dimensions',
      'Pilot Risk Index™ initial scoring',
      'EU AI Act risk categorisation (minimal / limited / high / unacceptable)',
      'T.R.U.S.T. compliance gap analysis',
      'Data, policy, and evidence requirement mapping',
      'Lifecycle gap analysis from prototype to production',
      'Recommended SpanForge integration points',
    ],
    outcomes: [
      'A clearer production posture with Gate 1 evidence package',
      'EU AI Act risk classification and required controls identified',
      'A shortlist of control priorities tied to T.R.U.S.T. dimensions',
      'A practical implementation sequence tied to SpanForge',
    ],
  },
  implementation: {
    title: 'Implementation',
    description: 'Design and implement the control path that moves AI systems toward compliant production with SpanForge.',
    hero: 'Build the system path that production actually requires.',
    intro:
      'Implementation turns architecture, workflows, and control intent into a delivery plan. The objective is not a slide deck. It is an implementable route where policy, oversight, and evidence become part of the operating system.',
    focus: 'SpanForge shows up here as infrastructure, not decoration. The product belongs inside the workflow where traceability and enforcement have to hold.',
    stages: ['Design', 'Build', 'Govern'],
    included: [
      'Workflow and control design across the lifecycle',
      'SpanForge SDK integration planning for enforcement and auditability',
      'Six-gate CI/CD pipeline configuration (security → quality → behaviour → performance → governance → deploy)',
      'Compliance Evidence Chain (sf-cec) generation and auditor hand-off setup',
      'Human review, escalation, and release-gate definition',
      'T.R.U.S.T. Framework mapping across all five dimensions',
      'Technical implementation guidance for production readiness',
    ],
    outcomes: [
      'An implementation blueprint grounded in controls',
      'Six CI/CD gates configured and passing',
      'A clearer route to signed evidence and traceability',
      'A production path that keeps the product at the center',
    ],
  },
  'production-enablement': {
    title: 'Production Enablement',
    description: 'Operationalize governance, evidence, and scale for AI systems running with SpanForge.',
    hero: 'Take the governed system into real operation.',
    intro:
      'Production Enablement is for teams that have moved past architecture debates and need the system to operate under scrutiny. The focus shifts to release discipline, evidence generation, operating cadence, and long-term accountability.',
    focus: 'This is where SpanForge becomes visible as proof infrastructure: policy events, audit trails, and production evidence that teams can actually use.',
    stages: ['Govern', 'Scale'],
    included: [
      'Behavioural baselining across all 10 RFC-0001 observability namespaces',
      'Drift detection threshold configuration (Z-score and KL-divergence per metric)',
      'Consent boundary enforcement and violation response',
      'Governance workflow and evidence operating model',
      'Release and production-readiness criteria per Gate 4 and Gate 5',
      'Audit-support and traceability workflows',
      'Incident playbook activation and tested handoff',
      'Scale-up planning for broader team adoption',
    ],
    outcomes: [
      'SpanForge active with all 10 namespaces emitting',
      'Behavioural baseline established and drift thresholds configured',
      'A more durable operating model with named on-call owner',
      'Cleaner proof for security and compliance stakeholders',
      'A repeatable path to scale SpanForge-backed systems',
    ],
  },
}
