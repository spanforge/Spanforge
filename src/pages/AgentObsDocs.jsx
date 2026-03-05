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
  'overview': readmeMd,
  'quickstart': quickstartMd,
  'installation': installationMd,
  'changelog': changelogMd,
  'cli': cliMd,
  'contributing': contributingMd,
  // User Guide
  'user-guide-index': ugIndexMd,
  'user-guide-events': ugEventsMd,
  'user-guide-signing': ugSigningMd,
  'user-guide-redaction': ugRedactionMd,
  'user-guide-compliance': ugComplianceMd,
  'user-guide-export': ugExportMd,
  'user-guide-governance': ugGovernanceMd,
  'user-guide-migration': ugMigrationMd,
  // API Reference
  'api-index': apiIndexMd,
  'api-event': apiEventMd,
  'api-types': apiTypesMd,
  'api-signing': apiSigningMd,
  'api-redact': apiRedactMd,
  'api-compliance': apiComplianceMd,
  'api-export': apiExportMd,
  'api-stream': apiStreamMd,
  'api-validate': apiValidateMd,
  'api-migrate': apiMigrateMd,
  'api-consumer': apiConsumerMd,
  'api-governance': apiGovernanceMd,
  'api-deprecations': apiDeprecationsMd,
  'api-integrations': apiIntegrationsMd,
  'api-ulid': apiUlidMd,
  'api-exceptions': apiExceptionsMd,
  'api-models': apiModelsMd,
  // Namespace Catalogue
  'ns-index': nsIndexMd,
  'ns-trace': nsTraceMd,
  'ns-cost': nsCostMd,
  'ns-cache': nsCacheMd,
  'ns-diff': nsDiffMd,
  'ns-eval': nsEvalMd,
  'ns-fence': nsFenceMd,
  'ns-guard': nsGuardMd,
  'ns-prompt': nsPromptMd,
  'ns-redact': nsRedactMd,
  'ns-template': nsTemplateMd,
  'ns-audit': nsAuditMd,
  // Schema
  'schema': schemaMd,
}

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

  const content = DOC_MAP[currentPage]
  const pageLabel = SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Docs'
  usePageTitle(`${pageLabel} · AgentOBS Docs · Spanforge`)

  if (!content) {
    return <Navigate to="/sdk/docs/quickstart" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/sdk/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} />
      </DocLayout>
      <Footer />
    </div>
  )
}
