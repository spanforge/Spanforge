import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

// ── Static markdown imports (Vite ?raw) ──
import readmeMd from '../../llm-toolkit-schema/README.md?raw'
import quickstartMd from '../../llm-toolkit-schema/docs/quickstart.md?raw'
import installationMd from '../../llm-toolkit-schema/docs/installation.md?raw'
import changelogMd from '../../llm-toolkit-schema/docs/changelog.md?raw'

// User Guide
import ugIndexMd from '../../llm-toolkit-schema/docs/user_guide/index.md?raw'
import ugEventsMd from '../../llm-toolkit-schema/docs/user_guide/events.md?raw'
import ugSigningMd from '../../llm-toolkit-schema/docs/user_guide/signing.md?raw'
import ugRedactionMd from '../../llm-toolkit-schema/docs/user_guide/redaction.md?raw'
import ugComplianceMd from '../../llm-toolkit-schema/docs/user_guide/compliance.md?raw'
import ugExportMd from '../../llm-toolkit-schema/docs/user_guide/export.md?raw'
import ugGovernanceMd from '../../llm-toolkit-schema/docs/user_guide/governance.md?raw'
import ugMigrationMd from '../../llm-toolkit-schema/docs/user_guide/migration.md?raw'

// API Reference
import apiIndexMd from '../../llm-toolkit-schema/docs/api/index.md?raw'
import apiEventMd from '../../llm-toolkit-schema/docs/api/event.md?raw'
import apiTypesMd from '../../llm-toolkit-schema/docs/api/types.md?raw'
import apiSigningMd from '../../llm-toolkit-schema/docs/api/signing.md?raw'
import apiRedactMd from '../../llm-toolkit-schema/docs/api/redact.md?raw'
import apiComplianceMd from '../../llm-toolkit-schema/docs/api/compliance.md?raw'
import apiExportMd from '../../llm-toolkit-schema/docs/api/export.md?raw'
import apiStreamMd from '../../llm-toolkit-schema/docs/api/stream.md?raw'
import apiValidateMd from '../../llm-toolkit-schema/docs/api/validate.md?raw'
import apiMigrateMd from '../../llm-toolkit-schema/docs/api/migrate.md?raw'
import apiConsumerMd from '../../llm-toolkit-schema/docs/api/consumer.md?raw'
import apiGovernanceMd from '../../llm-toolkit-schema/docs/api/governance.md?raw'
import apiDeprecationsMd from '../../llm-toolkit-schema/docs/api/deprecations.md?raw'
import apiIntegrationsMd from '../../llm-toolkit-schema/docs/api/integrations.md?raw'
import apiUlidMd from '../../llm-toolkit-schema/docs/api/ulid.md?raw'
import apiExceptionsMd from '../../llm-toolkit-schema/docs/api/exceptions.md?raw'
import apiModelsMd from '../../llm-toolkit-schema/docs/api/models.md?raw'

const DOC_MAP = {
  'overview': readmeMd,
  'quickstart': quickstartMd,
  'installation': installationMd,
  'changelog': changelogMd,
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
}

const SIDEBAR = [
  {
    title: null,
    items: [
      { path: 'overview', label: 'Overview' },
    ]
  },
  {
    title: 'Getting Started',
    items: [
      { path: 'quickstart', label: 'Quick Start' },
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
    title: 'Release Notes',
    items: [
      { path: 'changelog', label: 'Changelog' },
    ]
  }
]

export default function SchemaDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'quickstart'

  const content = DOC_MAP[currentPage]
  const pageLabel = SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Docs'
  usePageTitle(`${pageLabel} · llm-toolkit-schema Docs · Spanforge`)

  if (!content) {
    return <Navigate to="/llm-toolkit-schema/docs/quickstart" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/llm-toolkit-schema/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} />
      </DocLayout>
      <Footer />
    </div>
  )
}
