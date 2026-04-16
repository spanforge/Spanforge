import fs from 'fs'
import path from 'path'

/**
 * TOOL_REGISTRY — maps public tool slug → filesystem location + doc manifest.
 *
 * To add a new tool:
 *   1. Create Tools/<Dir>/README.md
 *   2. Create Tools/<Dir>/docs/<slug>.md for each entry in docs[]
 *   3. Add an entry here
 *   4. Add the tool to lib/tools-data.js with hasPage: true
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
      { slug: 'installation',    title: 'Installation' },
      { slug: 'quickstart',      title: 'Quickstart' },
      { slug: 'tutorial',        title: 'Tutorial' },
      { slug: 'cli-reference',   title: 'CLI Reference' },
      { slug: 'api-reference',   title: 'API Reference' },
      { slug: 'entity-types',    title: 'Entity Types' },
      { slug: 'ci-integration',  title: 'CI Integration' },
      { slug: 'verify-chain',    title: 'Verify Chain' },
      { slug: 'ignore-patterns', title: 'Ignore Patterns' },
      { slug: 'contributing',    title: 'Contributing' },
      { slug: 'changelog',       title: 'Changelog' },
    ],
  },
  'sf-validate': {
    dir: 'Tools/sf-validate',
    name: 'sf-validate',
    tagline:
      'Unified compliance gate for SPANFORGE RFC-0001 JSONL audit-log streams. Combines per-event JSON schema validation with HMAC chain verification in a single CI-native pass — with exit codes, GitHub Actions annotations, SARIF, and JUnit XML output.',
    installCmd: 'pip install sf-validate',
    getStartedSlug: 'getting-started',
    type: 'python',
    phase: 'build',
    docs: [
      { slug: 'getting-started', title: 'Getting Started' },
      { slug: 'cli-reference',   title: 'CLI Reference' },
      { slug: 'configuration',   title: 'Configuration' },
      { slug: 'output-formats',  title: 'Output Formats' },
      { slug: 'ci-integration',  title: 'CI Integration' },
      { slug: 'pre-commit',      title: 'Pre-commit Hook' },
      { slug: 'watch-mode',      title: 'Watch Mode' },
      { slug: 'python-api',      title: 'Python API' },
      { slug: 'shell-completions', title: 'Shell Completions' },
      { slug: 'architecture',    title: 'Architecture' },
    ],
  },
  // ── Add future tools here ──────────────────────────────────────────────
  // 'tool-slug': {
  //   dir: 'Tools/Tool-Dir',
  //   name: 'tool-name',
  //   tagline: '...',
  //   installCmd: '...',
  //   type: 'python' | 'webapp' | 'fw' | 'doc' | 'product',
  //   phase: 'discover' | 'design' | 'build' | 'govern' | 'scale',
  //   docs: [{ slug: '...', title: '...' }],
  // },
}

/** Returns [{toolSlug, docSlug}] for generateStaticParams on the docs route. */
export function getAllToolDocParams() {
  return Object.entries(TOOL_REGISTRY).flatMap(([toolSlug, tool]) =>
    tool.docs.map(doc => ({ toolSlug, docSlug: doc.slug }))
  )
}

/** Returns all tool slugs that have published doc pages. */
export function getAllToolSlugs() {
  return Object.keys(TOOL_REGISTRY)
}

/** Returns registry metadata for a tool, or null. */
export function getToolMeta(toolSlug) {
  return TOOL_REGISTRY[toolSlug] ?? null
}

/** Reads Tools/<Dir>/README.md and returns its content, or null. */
export function getToolReadme(toolSlug) {
  const tool = TOOL_REGISTRY[toolSlug]
  if (!tool) return null
  const filePath = path.join(process.cwd(), tool.dir, 'README.md')
  if (!fs.existsSync(filePath)) return null
  return fs.readFileSync(filePath, 'utf8')
}

/** Reads Tools/<Dir>/docs/<docSlug>.md and returns {slug, title, content}, or null. */
export function getDoc(toolSlug, docSlug) {
  const tool = TOOL_REGISTRY[toolSlug]
  if (!tool) return null
  const docMeta = tool.docs.find(d => d.slug === docSlug)
  if (!docMeta) return null
  const filePath = path.join(process.cwd(), tool.dir, 'docs', `${docSlug}.md`)
  if (!fs.existsSync(filePath)) return null
  const content = fs.readFileSync(filePath, 'utf8')
  return { ...docMeta, content }
}
