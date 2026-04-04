export const phases = [
  {
    num: '01',
    id: 'discover',
    label: 'DISCOVER',
    colorVar: '--discover',
    tag: 'Is AI right for this?',
    tagline: 'Stop building the wrong thing.',
    summary: [
      'Most AI projects fail before a single line of code is written. Teams pick solutions before validating problems. They assume data exists before auditing it. They start building before anyone has defined what success looks like.',
      'The Discover phase exists to fix this. Problem qualification, AI readiness assessment, use case prioritisation, data readiness audit, stakeholder alignment, and ROI modelling — all before architecture decisions are made.',
    ],
    gate: 'Nothing progresses to Design without: a signed-off Problem Statement Canvas, a validated readiness score, and a confirmed business case.',
  },
  {
    num: '02',
    id: 'design',
    label: 'DESIGN',
    colorVar: '--design',
    tag: 'What should we build?',
    tagline: 'Architecture decisions made with evidence.',
    summary: [
      'The Design phase translates a validated problem into a concrete technical architecture. Model selection, data strategy, infrastructure decisions, and integration patterns — everything a team needs before writing production code.',
      'Includes tooling that benchmarks local LLM infrastructure and produces a model readiness score — so teams know exactly what they can run before committing to an architecture.',
    ],
    gate: 'Nothing progresses to Build without: architecture documented, data strategy validated, security reviewed, team capacity confirmed.'
  },
  {
    num: '03',
    id: 'build',
    label: 'BUILD',
    colorVar: '--build',
    tag: 'Build it properly.',
    tagline: 'Standards that ship.',
    summary: [
      'The Build phase is where SpanForge\'s engineering depth shows. A suite of CLI tools that integrate into CI/CD pipelines — covering prompt safety, quality validation, behaviour testing, security scanning, and policy enforcement.',
      'Every tool composes. Output from one gate feeds the next. Nothing ships without passing all gates in sequence.',
    ],
    gate: 'Nothing ships without all six CI/CD gates passing — security, quality, behaviour, performance, governance, and deploy checks all green.',
  },
  {
    num: '04',
    id: 'govern',
    label: 'GOVERN',
    colorVar: '--govern',
    tag: 'Make it accountable.',
    tagline: 'The T.R.U.S.T. Framework operationalised.',
    summary: [
      "The Govern phase operationalises the T.R.U.S.T. Framework — converting AI governance from policy documents into technical controls, compliance documentation, and audit-ready evidence.",
      'Compliance mapping, risk registers, governance maturity assessment, and board-level reporting — all structured around the T.R.U.S.T. Framework dimensions and ready for regulatory scrutiny.',
    ],
    gate: 'Nothing goes to production without: T.R.U.S.T. Framework mapped, compliance documentation complete, incident playbook assigned.',
  },
  {
    num: '05',
    id: 'scale',
    label: 'SCALE',
    colorVar: '--scale',
    tag: 'Run in production.',
    tagline: 'AgentOBS. Already live.',
    summary: [
      'AgentOBS is the Scale phase — the behavioural intelligence layer that connects to deployed AI agents via OpenTelemetry and watches what they actually do. Not just whether they are up, but whether they are behaving.',
      'An agent that silently drifts and makes thousands of slightly wrong decisions is far more dangerous than one that crashes visibly. You can fix a crash. You cannot fix what you cannot see.',
    ],
    gate: 'AgentOBS active before the first production request. Behavioural baseline established. Drift monitoring configured. On-call owner named.',
  },
]

export const trustDimensions = [
  { letter: 'T', word: 'Transparency',      desc: 'Customers, regulators, and employees understand how AI affects them. AI behaviour is made intelligible to all affected parties — not just technical teams.' },
  { letter: 'R', word: 'Responsibility',    desc: 'A named human is accountable for every AI system. AI cannot be deployed without a designated owner who carries accountability for its behaviour in production.' },
  { letter: 'U', word: 'User Rights',       desc: 'Consent, transparency, and recourse for every individual AI affects. Users have the right to understand how AI decisions affect them and to seek redress where required.' },
  { letter: 'S', word: 'Safety Guardrails', desc: 'Technical constraints embedded in architecture, not just policy. Safety mechanisms are built into the system — not left as aspirational guidance or documents.' },
  { letter: 'T', word: 'Traceability',      desc: 'Every agent action must be traceable. Full audit trail. No black boxes. Every decision is logged with an immutable, timestamped record — ready for regulators, auditors, and post-incident review.' },
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
