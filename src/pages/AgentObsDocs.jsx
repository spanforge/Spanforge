import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

// ── Static markdown imports (Vite ?raw) ──
import readmeMd from '../../AgentOBS/README.md?raw'
import quickstartMd from '../../AgentOBS/docs/quickstart.md?raw'
import installationMd from '../../AgentOBS/docs/installation.md?raw'
import changelogMd from '../../AgentOBS/docs/changelog.md?raw'
import cliMd from '../../AgentOBS/docs/cli.md?raw'
import contributingMd from '../../AgentOBS/docs/contributing.md?raw'

// User Guide
import ugIndexMd from '../../AgentOBS/docs/user_guide/index.md?raw'
import ugEventsMd from '../../AgentOBS/docs/user_guide/events.md?raw'
import ugSigningMd from '../../AgentOBS/docs/user_guide/signing.md?raw'
import ugRedactionMd from '../../AgentOBS/docs/user_guide/redaction.md?raw'
import ugComplianceMd from '../../AgentOBS/docs/user_guide/compliance.md?raw'
import ugExportMd from '../../AgentOBS/docs/user_guide/export.md?raw'
import ugGovernanceMd from '../../AgentOBS/docs/user_guide/governance.md?raw'
import ugMigrationMd from '../../AgentOBS/docs/user_guide/migration.md?raw'
import ugTracingMd from '../../AgentOBS/docs/user_guide/tracing.md?raw'
import ugDebuggingMd from '../../AgentOBS/docs/user_guide/debugging.md?raw'
import ugMetricsMd from '../../AgentOBS/docs/user_guide/metrics.md?raw'
import ugCustomExportersMd from '../../AgentOBS/docs/user_guide/custom_exporters.md?raw'

// API Reference
import apiIndexMd from '../../AgentOBS/docs/api/index.md?raw'
import apiEventMd from '../../AgentOBS/docs/api/event.md?raw'
import apiTypesMd from '../../AgentOBS/docs/api/types.md?raw'
import apiSigningMd from '../../AgentOBS/docs/api/signing.md?raw'
import apiRedactMd from '../../AgentOBS/docs/api/redact.md?raw'
import apiComplianceMd from '../../AgentOBS/docs/api/compliance.md?raw'
import apiExportMd from '../../AgentOBS/docs/api/export.md?raw'
import apiStreamMd from '../../AgentOBS/docs/api/stream.md?raw'
import apiValidateMd from '../../AgentOBS/docs/api/validate.md?raw'
import apiMigrateMd from '../../AgentOBS/docs/api/migrate.md?raw'
import apiConsumerMd from '../../AgentOBS/docs/api/consumer.md?raw'
import apiGovernanceMd from '../../AgentOBS/docs/api/governance.md?raw'
import apiDeprecationsMd from '../../AgentOBS/docs/api/deprecations.md?raw'
import apiIntegrationsMd from '../../AgentOBS/docs/api/integrations.md?raw'
import apiUlidMd from '../../AgentOBS/docs/api/ulid.md?raw'
import apiExceptionsMd from '../../AgentOBS/docs/api/exceptions.md?raw'
import apiModelsMd from '../../AgentOBS/docs/api/models.md?raw'
import apiDebugMd from '../../AgentOBS/docs/api/debug.md?raw'
import apiHooksMd from '../../AgentOBS/docs/api/hooks.md?raw'
import apiMetricsMd from '../../AgentOBS/docs/api/metrics.md?raw'
import apiStoreMd from '../../AgentOBS/docs/api/store.md?raw'
import apiTraceMd from '../../AgentOBS/docs/api/trace.md?raw'

// Namespace Catalogue
import nsIndexMd from '../../AgentOBS/docs/namespaces/index.md?raw'
import nsTraceMd from '../../AgentOBS/docs/namespaces/trace.md?raw'
import nsCostMd from '../../AgentOBS/docs/namespaces/cost.md?raw'
import nsCacheMd from '../../AgentOBS/docs/namespaces/cache.md?raw'
import nsDiffMd from '../../AgentOBS/docs/namespaces/diff.md?raw'
import nsEvalMd from '../../AgentOBS/docs/namespaces/eval.md?raw'
import nsFenceMd from '../../AgentOBS/docs/namespaces/fence.md?raw'
import nsGuardMd from '../../AgentOBS/docs/namespaces/guard.md?raw'
import nsPromptMd from '../../AgentOBS/docs/namespaces/prompt.md?raw'
import nsRedactMd from '../../AgentOBS/docs/namespaces/redact_ns.md?raw'
import nsTemplateMd from '../../AgentOBS/docs/namespaces/template.md?raw'
import nsAuditMd from '../../AgentOBS/docs/namespaces/audit.md?raw'

// Schema
import schemaMd from '../../AgentOBS/docs/schema/README.md?raw'

const DOC_MAP = {
  'overview': { content: readmeMd, source: 'README.md' },
  'quickstart': { content: quickstartMd, source: 'quickstart.md' },
  'installation': { content: installationMd, source: 'installation.md' },
  'changelog': { content: changelogMd, source: 'changelog.md' },
  'cli': { content: cliMd, source: 'cli.md' },
  'contributing': { content: contributingMd, source: 'contributing.md' },
  // User Guide
  'user-guide-index': { content: ugIndexMd, source: 'user_guide/index.md' },
  'user-guide-events': { content: ugEventsMd, source: 'user_guide/events.md' },
  'user-guide-signing': { content: ugSigningMd, source: 'user_guide/signing.md' },
  'user-guide-redaction': { content: ugRedactionMd, source: 'user_guide/redaction.md' },
  'user-guide-compliance': { content: ugComplianceMd, source: 'user_guide/compliance.md' },
  'user-guide-export': { content: ugExportMd, source: 'user_guide/export.md' },
  'user-guide-governance': { content: ugGovernanceMd, source: 'user_guide/governance.md' },
  'user-guide-migration': { content: ugMigrationMd, source: 'user_guide/migration.md' },
  'user-guide-tracing': { content: ugTracingMd, source: 'user_guide/tracing.md' },
  'user-guide-debugging': { content: ugDebuggingMd, source: 'user_guide/debugging.md' },
  'user-guide-metrics': { content: ugMetricsMd, source: 'user_guide/metrics.md' },
  'user-guide-custom-exporters': { content: ugCustomExportersMd, source: 'user_guide/custom_exporters.md' },
  // API Reference
  'api-index': { content: apiIndexMd, source: 'api/index.md' },
  'api-event': { content: apiEventMd, source: 'api/event.md' },
  'api-types': { content: apiTypesMd, source: 'api/types.md' },
  'api-signing': { content: apiSigningMd, source: 'api/signing.md' },
  'api-redact': { content: apiRedactMd, source: 'api/redact.md' },
  'api-compliance': { content: apiComplianceMd, source: 'api/compliance.md' },
  'api-export': { content: apiExportMd, source: 'api/export.md' },
  'api-stream': { content: apiStreamMd, source: 'api/stream.md' },
  'api-validate': { content: apiValidateMd, source: 'api/validate.md' },
  'api-migrate': { content: apiMigrateMd, source: 'api/migrate.md' },
  'api-consumer': { content: apiConsumerMd, source: 'api/consumer.md' },
  'api-governance': { content: apiGovernanceMd, source: 'api/governance.md' },
  'api-deprecations': { content: apiDeprecationsMd, source: 'api/deprecations.md' },
  'api-integrations': { content: apiIntegrationsMd, source: 'api/integrations.md' },
  'api-ulid': { content: apiUlidMd, source: 'api/ulid.md' },
  'api-exceptions': { content: apiExceptionsMd, source: 'api/exceptions.md' },
  'api-models': { content: apiModelsMd, source: 'api/models.md' },
  'api-debug': { content: apiDebugMd, source: 'api/debug.md' },
  'api-hooks': { content: apiHooksMd, source: 'api/hooks.md' },
  'api-metrics': { content: apiMetricsMd, source: 'api/metrics.md' },
  'api-store': { content: apiStoreMd, source: 'api/store.md' },
  'api-trace': { content: apiTraceMd, source: 'api/trace.md' },
  // Namespace Catalogue
  'ns-index': { content: nsIndexMd, source: 'namespaces/index.md' },
  'ns-trace': { content: nsTraceMd, source: 'namespaces/trace.md' },
  'ns-cost': { content: nsCostMd, source: 'namespaces/cost.md' },
  'ns-cache': { content: nsCacheMd, source: 'namespaces/cache.md' },
  'ns-diff': { content: nsDiffMd, source: 'namespaces/diff.md' },
  'ns-eval': { content: nsEvalMd, source: 'namespaces/eval.md' },
  'ns-fence': { content: nsFenceMd, source: 'namespaces/fence.md' },
  'ns-guard': { content: nsGuardMd, source: 'namespaces/guard.md' },
  'ns-prompt': { content: nsPromptMd, source: 'namespaces/prompt.md' },
  'ns-redact': { content: nsRedactMd, source: 'namespaces/redact_ns.md' },
  'ns-template': { content: nsTemplateMd, source: 'namespaces/template.md' },
  'ns-audit': { content: nsAuditMd, source: 'namespaces/audit.md' },
  // Schema
  'schema': { content: schemaMd, source: 'schema/README.md' },
}

const SOURCE_TO_PAGE = Object.entries(DOC_MAP).reduce((acc, [page, doc]) => {
  acc[doc.source] = page
  return acc
}, {
  // Alias docs landing to existing overview page.
  'index.md': 'overview',
})

function normalizePath(path) {
  const parts = path.split('/').filter(Boolean)
  const out = []
  for (const p of parts) {
    if (p === '.') continue
    if (p === '..') {
      if (out.length) out.pop()
      continue
    }
    out.push(p)
  }
  return out.join('/')
}

function resolveRelativePath(fromFile, relativePath) {
  const fromParts = fromFile.split('/').filter(Boolean)
  const fromDir = fromParts.slice(0, -1).join('/')
  const base = fromDir ? `${fromDir}/${relativePath}` : relativePath
  return normalizePath(base)
}

const AGENTOBS_GITHUB_BASE = 'https://github.com/veerarag1973/agentobs/blob/main'

const SIDEBAR = [
  {
    title: null,
    items: [{ path: 'overview', label: 'Overview' }]
  },
  {
    title: 'Getting Started',
    items: [
      { path: 'quickstart', label: 'Quickstart' },
      { path: 'installation', label: 'Installation' },
    ]
  },
  {
    title: 'User Guide',
    items: [
      { path: 'user-guide-index', label: 'Overview' },
      { path: 'user-guide-events', label: 'Events' },
      { path: 'user-guide-signing', label: 'HMAC Signing' },
      { path: 'user-guide-redaction', label: 'PII Redaction' },
      { path: 'user-guide-compliance', label: 'Compliance' },
      { path: 'user-guide-export', label: 'Export Backends' },
      { path: 'user-guide-governance', label: 'Governance' },
      { path: 'user-guide-migration', label: 'Migration Guide' },
      { path: 'user-guide-tracing', label: 'Tracing' },
      { path: 'user-guide-debugging', label: 'Debugging' },
      { path: 'user-guide-metrics', label: 'Metrics' },
      { path: 'user-guide-custom-exporters', label: 'Custom Exporters' },
    ]
  },
  {
    title: 'API Reference',
    items: [
      { path: 'api-index', label: 'Overview' },
      { path: 'api-event', label: 'event' },
      { path: 'api-types', label: 'types' },
      { path: 'api-signing', label: 'signing' },
      { path: 'api-redact', label: 'redact' },
      { path: 'api-compliance', label: 'compliance' },
      { path: 'api-export', label: 'export' },
      { path: 'api-stream', label: 'stream' },
      { path: 'api-validate', label: 'validate' },
      { path: 'api-migrate', label: 'migrate' },
      { path: 'api-consumer', label: 'consumer' },
      { path: 'api-governance', label: 'governance' },
      { path: 'api-deprecations', label: 'deprecations' },
      { path: 'api-integrations', label: 'integrations' },
      { path: 'api-ulid', label: 'ulid' },
      { path: 'api-exceptions', label: 'exceptions' },
      { path: 'api-models', label: 'models' },
      { path: 'api-debug', label: 'debug' },
      { path: 'api-hooks', label: '_hooks' },
      { path: 'api-metrics', label: 'metrics' },
      { path: 'api-store', label: '_store' },
      { path: 'api-trace', label: '_trace' },
    ]
  },
  {
    title: 'Namespace Catalogue',
    items: [
      { path: 'ns-index', label: 'Overview' },
      { path: 'ns-trace', label: 'llm.trace.*' },
      { path: 'ns-cost', label: 'llm.cost.*' },
      { path: 'ns-cache', label: 'llm.cache.*' },
      { path: 'ns-eval', label: 'llm.eval.*' },
      { path: 'ns-guard', label: 'llm.guard.*' },
      { path: 'ns-fence', label: 'llm.fence.*' },
      { path: 'ns-prompt', label: 'llm.prompt.*' },
      { path: 'ns-redact', label: 'llm.redact.*' },
      { path: 'ns-diff', label: 'llm.diff.*' },
      { path: 'ns-template', label: 'llm.template.*' },
      { path: 'ns-audit', label: 'llm.audit.*' },
    ]
  },
  {
    title: 'Schema',
    items: [
      { path: 'schema', label: 'JSON Schema' },
    ]
  },
  {
    title: 'CLI',
    items: [
      { path: 'cli', label: 'CLI Reference' },
    ]
  },
  {
    title: 'Development',
    items: [
      { path: 'contributing', label: 'Contributing' },
      { path: 'changelog', label: 'Changelog' },
    ]
  },
]

export default function AgentObsDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'quickstart'

  const currentDoc = DOC_MAP[currentPage]
  const content = currentDoc?.content
  const pageLabel = SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Docs'
  usePageTitle(`${pageLabel} · AgentOBS Docs · Spanforge`)

  const resolveDocLink = (href) => {
    if (!href || !currentDoc?.source) return href
    if (href.startsWith('#')) return href
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return href
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return href

    const [rawPath, hash] = href.split('#')
    const hashSuffix = hash ? `#${hash}` : ''

    if (!rawPath) return hashSuffix || href

    let normalized = rawPath.startsWith('/')
      ? normalizePath(rawPath)
      : resolveRelativePath(currentDoc.source, rawPath)

    if (normalized.startsWith('docs/')) {
      normalized = normalized.slice(5)
    }

    if (normalized.endsWith('RFC-0001-AGENTOBS.md')) {
      return '/standard/spec'
    }

    const page = SOURCE_TO_PAGE[normalized]
    if (page) {
      return `/sdk/docs/${page}${hashSuffix}`
    }

    if (normalized.endsWith('.md') || normalized.endsWith('.json')) {
      return `${AGENTOBS_GITHUB_BASE}/${normalized}${hashSuffix}`
    }

    return href
  }

  if (!content) {
    return <Navigate to="/sdk/docs/quickstart" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/sdk/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} resolveLink={resolveDocLink} />
      </DocLayout>
      <Footer />
    </div>
  )
}
