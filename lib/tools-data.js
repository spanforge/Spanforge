/**
 * SpanForge Tools Data
 *
 * STRATEGY: Only the 18 showcase tools below are publicly visible.
 * The full catalog (100+ artifacts) is locked behind the waitlist.
 * phaseSummary communicates platform breadth without revealing the full roadmap.
 */

export const showcaseTools = [
  // ── Discover ──────────────────────────────────────────────────────────────
  {
    id: 'ai-readiness-assessment',
    type: 'webapp',
    phase: 'discover',
    name: 'AI Readiness Assessment',
    description:
      'Scores org readiness across Strategy, Data, Infrastructure, Talent, Governance, and Culture. Outputs a radar chart and maturity report.',
  },
  {
    id: 'should-this-be-ai',
    type: 'webapp',
    phase: 'discover',
    name: 'Should This Be AI?',
    description:
      'Decision tree routing problems to the right solution: rules engine, RPA, ML, GenAI, agentic AI, or not AI at all.',
  },
  {
    id: 'ai-roi-calculator',
    type: 'webapp',
    phase: 'discover',
    name: 'AI ROI Calculator',
    description:
      'Models cost of problem, implementation cost, and expected gains. ROI across 6, 12, and 24-month horizons.',
  },
  {
    id: 'use-case-prioritisation',
    type: 'webapp',
    phase: 'discover',
    name: 'Use Case Prioritisation Matrix',
    description:
      'Multi-criteria scoring across impact, data readiness, feasibility, and strategic fit. Auto-plots a 2×2 and ranks candidates.',
  },
  {
    id: 'build-vs-buy',
    type: 'webapp',
    phase: 'discover',
    name: 'Build vs Buy vs Partner',
    description:
      'Weighted decision tool across strategic fit, TCO, time-to-value, and vendor risk. Outputs a recommended path with rationale.',
  },
  {
    id: 'problem-statement-canvas',
    type: 'doc',
    phase: 'discover',
    name: 'Problem Statement Canvas',
    description:
      'One-page fillable template: current state, pain, desired outcome, stakeholders, success definition, constraints, sign-off.',
  },

  // ── Design ────────────────────────────────────────────────────────────────
  {
    id: 'architecture-decision-wizard',
    type: 'webapp',
    phase: 'design',
    name: 'Architecture Decision Wizard',
    description:
      'Question-driven wizard that recommends an AI architecture. Generates a full Architecture Decision Record automatically.',
  },
  {
    id: 'sfbench',
    type: 'rust',
    phase: 'design',
    name: 'sfbench',
    description:
      'SpanForge Hardware Intelligence. Benchmarks local LLM hardware — GPU, VRAM, RAM. Tests Ollama and llama.cpp performance.',
  },

  // ── Build ─────────────────────────────────────────────────────────────────
  {
    id: 'sf-prompt-lint',
    type: 'rust',
    phase: 'build',
    name: 'sf-prompt-lint',
    description:
      'Static analyser for prompt templates. Detects injection vulnerabilities, missing variables, and conflicting instructions.',
  },
  {
    id: 'sf-tokens',
    type: 'rust',
    phase: 'build',
    name: 'sf-tokens',
    description:
      'Fast offline token counter for any model family. Files, directories, or stdin. Cost estimation before deployment.',
  },
  {
    id: 'sf-scan',
    type: 'rust',
    phase: 'build',
    name: 'sf-scan',
    description:
      'Scans prompts, training data, and pipeline outputs for PII, secrets, and sensitive patterns before they enter the pipeline.',
  },
  {
    id: 'sf-test',
    type: 'rust',
    phase: 'build',
    name: 'sf-test',
    description:
      'LLM behaviour test runner. Semantic match, regex, or JSON schema validation against any OpenAI-compatible API.',
  },
  {
    id: 'sf-policy',
    type: 'rust',
    phase: 'build',
    name: 'sf-policy',
    description:
      'Output policy enforcement sidecar. Sits between LLM and application. Blocks outputs that violate configurable policies.',
  },
  {
    id: 'sf-inject',
    type: 'rust',
    phase: 'build',
    name: 'sf-inject',
    description:
      'Prompt injection vulnerability scanner. Runs a known injection pattern library against your deployed AI system.',
  },
  {
    id: 'sf-consent',
    type: 'rust',
    phase: 'build',
    name: 'sf-consent',
    description:
      'Consent boundary checker. Verifies every data access against declared consent purposes. GDPR and DPDP aligned.',
  },
  {
    id: 'spanforge-build-standards',
    type: 'fw',
    phase: 'build',
    name: 'SpanForge Build Standards',
    description:
      'The definitive coding and architecture standards for AI systems. Covers API design, testing, security, and deployment.',
  },

  // ── Govern ────────────────────────────────────────────────────────────────
  {
    id: 'trust-framework',
    type: 'fw',
    phase: 'govern',
    name: 'T.R.U.S.T. Framework',
    description:
      'Traceability, Responsibility, User Rights, Safety Guardrails, Transparency — operationalised as technical controls.',
  },

  // ── Scale ─────────────────────────────────────────────────────────────────
  {
    id: 'sf-drift',
    type: 'rust',
    phase: 'scale',
    name: 'sf-drift',
    description:
      'Production drift detector. Monitors model output distributions over time. Alerts when significant deviation is detected.',
  },
]

/**
 * Per-phase summary used to tease the locked portion of the catalog.
 * lockedCount = total phase artifacts - showcase tools in that phase.
 */
export const phaseSummary = {
  discover: {
    label: 'Discover',
    total: 26,
    publicCount: 6,
    showcaseCount: 6,
    lockedCount: 20,
    types: 'Web apps · Assessment tools · Templates',
  },
  design: {
    label: 'Design',
    total: 13,
    publicCount: 2,
    showcaseCount: 2,
    lockedCount: 11,
    types: 'Web apps · Standards documents · CLI tools',
  },
  build: {
    label: 'Build',
    total: 32,
    publicCount: 7,
    showcaseCount: 7,
    lockedCount: 25,
    types: 'CLI tools · Frameworks · Document templates',
  },
  govern: {
    label: 'Govern',
    total: 20,
    publicCount: 1,
    showcaseCount: 1,
    lockedCount: 19,
    types: 'Web apps · Compliance docs · Frameworks',
  },
  scale: {
    label: 'Scale',
    total: 10,
    publicCount: 1,
    showcaseCount: 1,
    lockedCount: 9,
    types: 'CLI tools · AgentOBS platform · Playbooks',
  },
}

export const typeLabel = {
  webapp:  'Web App',
  rust:    'Rust CLI',
  doc:     'Document',
  fw:      'Framework',
  product: 'Product',
}

// Alias for named imports
export const TYPE_LABELS = typeLabel
