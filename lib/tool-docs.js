import fs from 'fs'
import path from 'path'

/**
 * TOOL_REGISTRY maps public tool slugs to their metadata and documentation manifest.
 */
export const TOOL_REGISTRY = {
  'spanforge-secrets': {
    dir: 'Tools/Spanforge-Secrets',
    name: 'spanforge-secrets',
    tagline:
      'CI Gate 01 for the Spanforge compliance pipeline. Scans prompt files and training data for PII (10 entity types) and exposed API keys (5 platforms). Exits 1 if violations are found.',
    installCmd: 'pip install spanforge-secrets spanforge',
    type: 'python',
    phase: 'build',
    docs: [
      { slug: 'installation', title: 'Installation' },
      { slug: 'quickstart', title: 'Quickstart' },
      { slug: 'tutorial', title: 'Tutorial' },
      { slug: 'cli-reference', title: 'CLI Reference' },
      { slug: 'api-reference', title: 'API Reference' },
      { slug: 'entity-types', title: 'Entity Types' },
      { slug: 'ci-integration', title: 'CI Integration' },
      { slug: 'verify-chain', title: 'Verify Chain' },
      { slug: 'ignore-patterns', title: 'Ignore Patterns' },
      { slug: 'contributing', title: 'Contributing' },
      { slug: 'changelog', title: 'Changelog' },
    ],
  },
  'sf-validate': {
    dir: 'Tools/sf-validate',
    name: 'sf-validate',
    tagline:
      'Unified compliance gate for SPANFORGE RFC-0001 JSONL audit-log streams. Combines per-event JSON schema validation with HMAC chain verification in a single CI-native pass with exit codes, GitHub Actions annotations, SARIF, and JUnit XML output.',
    installCmd: 'pip install sf-validate',
    getStartedSlug: 'getting-started',
    type: 'python',
    phase: 'build',
    docs: [
      { slug: 'getting-started', title: 'Getting Started' },
      { slug: 'cli-reference', title: 'CLI Reference' },
      { slug: 'configuration', title: 'Configuration' },
      { slug: 'output-formats', title: 'Output Formats' },
      { slug: 'ci-integration', title: 'CI Integration' },
      { slug: 'pre-commit', title: 'Pre-commit Hook' },
      { slug: 'watch-mode', title: 'Watch Mode' },
      { slug: 'python-api', title: 'Python API' },
      { slug: 'shell-completions', title: 'Shell Completions' },
      { slug: 'architecture', title: 'Architecture' },
    ],
  },
}

function resolveDocPath(tool, docSlug) {
  return path.join(process.cwd(), tool.dir, 'docs', `${docSlug}.md`)
}

function generateFallbackDoc(tool, docMeta) {
  const startCommand = tool.installCmd
  const introBySlug = {
    'getting-started': `Use \`${tool.name}\` as the first validation step after generating or exporting an event stream. The goal is fast confidence: install it, point it at your logs, and wire it into CI before policy exceptions turn into operational debt.`,
    installation: `Install \`${tool.name}\` into the same environment that builds or validates your AI delivery pipeline. Keep the command surface local-first so developers can reproduce CI behavior without a separate platform dependency.`,
    quickstart: `This quickstart gets \`${tool.name}\` running with the minimum possible setup so teams can validate the workflow before deep integration.`,
    'cli-reference': `The CLI is designed for direct use in local development and CI. Each command should produce machine-readable output and a predictable exit code so it can sit inside a governed delivery pipeline.`,
    configuration: `Configuration controls how \`${tool.name}\` behaves across environments. Keep defaults safe, make CI behavior explicit, and document overrides where teams will actually look for them.`,
    'output-formats': `Operational tooling only works when results can be consumed by humans and automation. \`${tool.name}\` should expose formats suited to local debugging, CI annotations, and archival evidence.`,
    'ci-integration': `Integrate \`${tool.name}\` early in the delivery path so issues surface before code reaches regulated or customer-facing environments.`,
    'pre-commit': `A pre-commit hook is appropriate when you want fast local feedback before changes are pushed to CI.`,
    'watch-mode': `Watch mode is useful for rapid iteration on prompts, schemas, and event envelopes while keeping the feedback loop local.`,
    'python-api': `Use the Python API when you need to embed \`${tool.name}\` inside a larger compliance or release orchestration workflow.`,
    'shell-completions': `Shell completions matter on frequently used tooling because they reduce command errors and make the interface easier to discover.`,
    architecture: `The architecture section explains how \`${tool.name}\` fits inside the broader SpanForge system and why its responsibilities remain intentionally narrow.`,
    tutorial: `The tutorial version expands on the quickstart and shows how \`${tool.name}\` fits into a realistic adoption path.`,
    'api-reference': `The API reference focuses on the stable interfaces you can call from automation or internal tooling.`,
    'entity-types': `Entity coverage should be explicit, predictable, and explainable so teams know what the scanner can and cannot detect.`,
    'verify-chain': `Chain verification is useful when you need to prove that audit evidence has not been altered after capture.`,
    'ignore-patterns': `Ignore patterns should be narrowly scoped and reviewed regularly so teams do not accidentally suppress real issues.`,
    contributing: `Contribution guidance should make it easy to improve the tool without compromising the predictability of its output or release behavior.`,
    changelog: `A changelog should help teams evaluate upgrade risk quickly, especially when the tool participates in governance or release gates.`,
  }

  const exampleBySlug = {
    'getting-started': `${tool.name} sample-events.jsonl`,
    installation: startCommand,
    quickstart: `${tool.name} sample-events.jsonl`,
    'cli-reference': `${tool.name} --help`,
    configuration: `${tool.name} sample-events.jsonl --config ./${tool.name}.toml`,
    'output-formats': `${tool.name} sample-events.jsonl --format sarif`,
    'ci-integration': `${tool.name} sample-events.jsonl --format junit`,
    'pre-commit': `${tool.name} sample-events.jsonl`,
    'watch-mode': `${tool.name} sample-events.jsonl --watch`,
    'python-api': `from ${tool.name.replace(/-/g, '_')} import run`,
    'shell-completions': `${tool.name} --generate-completion bash`,
    architecture: `${tool.name} sample-events.jsonl --explain`,
    tutorial: `${tool.name} sample-events.jsonl`,
    'api-reference': `from ${tool.name.replace(/-/g, '_')} import run`,
    'entity-types': `${tool.name} fixtures/`,
    'verify-chain': `${tool.name} production-events.jsonl --verify-chain`,
    'ignore-patterns': `${tool.name} fixtures/ --ignore-file .${tool.name}.ignore`,
    contributing: `npm run build`,
    changelog: `${tool.name} --version`,
  }

  const intro = introBySlug[docMeta.slug] || `This page documents ${tool.name} and keeps the route functional even when a hand-authored markdown file has not been added yet.`
  const example = exampleBySlug[docMeta.slug] || tool.installCmd

  return `# ${docMeta.title}

${intro}

## Current status

This page is currently served from a generated fallback so the published documentation route remains usable. It provides the core context teams need while source markdown is being finalized.

## Recommended workflow

1. Install the tool in the same environment where your build or validation steps run.
2. Execute it locally against representative inputs before wiring it into CI.
3. Promote the exact same command shape into automation so local and pipeline behavior stay aligned.

## Example

\`\`\`bash
${example}
\`\`\`

## Where this fits

\`${tool.name}\` belongs to the **${tool.phase}** phase of the SpanForge system. It should feel consistent with the rest of the platform: clear purpose, deterministic outputs, and documentation that helps teams move from experiment to governed production.`
}

export function getAllToolDocParams() {
  return Object.entries(TOOL_REGISTRY).flatMap(([toolSlug, tool]) =>
    tool.docs.map((doc) => ({ toolSlug, docSlug: doc.slug }))
  )
}

export function getAllToolSlugs() {
  return Object.keys(TOOL_REGISTRY)
}

export function getToolMeta(toolSlug) {
  return TOOL_REGISTRY[toolSlug] ?? null
}

export function getToolReadme(toolSlug) {
  const tool = TOOL_REGISTRY[toolSlug]
  if (!tool) return null
  const filePath = path.join(process.cwd(), tool.dir, 'README.md')
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf8')
}

export function getDoc(toolSlug, docSlug) {
  const tool = TOOL_REGISTRY[toolSlug]
  if (!tool) return null

  const docMeta = tool.docs.find((doc) => doc.slug === docSlug)
  if (!docMeta) return null

  const filePath = resolveDocPath(tool, docSlug)
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8')
    return { ...docMeta, content }
  }

  return {
    ...docMeta,
    content: generateFallbackDoc(tool, docMeta),
  }
}
