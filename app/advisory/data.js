export const LIFECYCLE_STAGES = [
  {
    number: '01',
    name: 'Discover',
    title: 'Frame the system, the risk, and the operating reality.',
    body: 'Map the use case, decision boundaries, data handling, and delivery constraints before teams hard-code risk into the product.',
  },
  {
    number: '02',
    name: 'Design',
    title: 'Translate intent into an implementable control model.',
    body: 'Define workflows, human oversight, policy checkpoints, and evidence requirements so production architecture reflects compliance from the start.',
  },
  {
    number: '03',
    name: 'Build',
    title: 'Ship the operational path, not just the prototype.',
    body: 'Move from proof-of-concept patterns to deployable systems with clear ownership, testability, and release discipline.',
  },
  {
    number: '04',
    name: 'Govern',
    title: 'Enforce policy where production systems usually fail.',
    body: 'Turn controls into runtime behavior with policy enforcement, traceability, and signed records instead of after-the-fact documentation.',
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
    body: 'Extend the system with cleaner controls, repeatable operating models, and production evidence that stands up as teams expand.',
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
      'Control and evidence gap analysis',
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
      'Integration planning around SpanForge',
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
      'Audit and evidence workflows',
      'Operational scale-up and handoff',
    ],
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
      'Data, policy, and evidence requirement mapping',
      'Lifecycle gap analysis from prototype to production',
      'Recommended SpanForge integration points',
    ],
    outcomes: [
      'A clearer production posture',
      'A shortlist of control priorities',
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
      'Human review, escalation, and release-gate definition',
      'Technical implementation guidance for production readiness',
    ],
    outcomes: [
      'An implementation blueprint grounded in controls',
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
      'Governance workflow and evidence operating model',
      'Release and production-readiness criteria',
      'Audit-support and traceability workflows',
      'Scale-up planning for broader team adoption',
    ],
    outcomes: [
      'A more durable operating model',
      'Cleaner proof for security and compliance stakeholders',
      'A repeatable path to scale SpanForge-backed systems',
    ],
  },
}
