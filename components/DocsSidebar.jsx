'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useId, useState } from 'react'
import styles from './DocsSidebar.module.css'

const NAV = [
  {
    group: 'Getting Started',
    items: [
      { label: 'Overview', href: '/docs' },
      { label: 'Quickstart', href: '/docs/quickstart' },
      { label: 'Installation', href: '/docs/installation' },
      { label: 'Configuration', href: '/docs/configuration' },
    ],
  },
  {
    group: 'User Guide',
    items: [
      { label: 'Events', href: '/docs/guide/events' },
      { label: 'Tracing API', href: '/docs/guide/tracing' },
      { label: 'HMAC Signing & Audit Chains', href: '/docs/guide/signing' },
      { label: 'PII Redaction', href: '/docs/guide/redaction' },
      { label: 'Compliance & Regulatory', href: '/docs/guide/compliance' },
      { label: 'Export Backends', href: '/docs/guide/export' },
      { label: 'Governance & Consumers', href: '/docs/guide/governance' },
      { label: 'Migration Guide', href: '/docs/guide/migration' },
      { label: 'Debugging & Visualization', href: '/docs/guide/debugging' },
      { label: 'Metrics & Analytics', href: '/docs/guide/metrics' },
      { label: 'Semantic Cache', href: '/docs/guide/cache' },
      { label: 'Linting & Static Analysis', href: '/docs/guide/linting' },
      { label: 'Audit Service (sf-audit)', href: '/docs/guide/audit' },
      { label: 'Alert Routing (sf-alert)', href: '/docs/guide/alert' },
      { label: 'Gate Pipeline (sf-gate)', href: '/docs/guide/gate' },
      { label: 'RAG Tracing', href: '/docs/guide/rag' },
      { label: 'User Feedback', href: '/docs/guide/feedback' },
      { label: 'SSO & Identity', href: '/docs/api/identity' },
      { label: 'In-Memory State', href: '/docs/guide/in-memory-state' },
      { label: 'Custom Exporters', href: '/docs/guide/custom-exporters' },
    ],
  },
  {
    group: 'CLI Reference',
    items: [
      { label: 'CLI Commands', href: '/docs/cli' },
      { label: 'Runbook', href: '/docs/runbook' },
    ],
  },
  {
    group: 'API Reference',
    collapsible: true,
    items: [
      { label: 'Module Index', href: '/docs/api/index' },
      { label: 'event', href: '/docs/api/event' },
      { label: 'types', href: '/docs/api/types' },
      { label: 'signing', href: '/docs/api/signing' },
      { label: 'redact', href: '/docs/api/redact' },
      { label: 'pii', href: '/docs/api/pii' },
      { label: 'compliance', href: '/docs/api/compliance' },
      { label: 'export', href: '/docs/api/export' },
      { label: 'stream', href: '/docs/api/stream' },
      { label: 'validate', href: '/docs/api/validate' },
      { label: 'normalizer', href: '/docs/api/normalizer' },
      { label: 'migrate', href: '/docs/api/migrate' },
      { label: 'consumer', href: '/docs/api/consumer' },
      { label: 'governance', href: '/docs/api/governance' },
      { label: 'deprecations', href: '/docs/api/deprecations' },
      { label: 'integrations', href: '/docs/api/integrations' },
      { label: 'trace', href: '/docs/api/trace' },
      { label: 'debug', href: '/docs/api/debug' },
      { label: 'metrics', href: '/docs/api/metrics' },
      { label: 'store', href: '/docs/api/store' },
      { label: 'hooks', href: '/docs/api/hooks' },
      { label: 'testing', href: '/docs/api/testing' },
      { label: 'testing_mocks', href: '/docs/api/testing-mocks' },
      { label: 'auto', href: '/docs/api/auto' },
      { label: 'ulid', href: '/docs/api/ulid' },
      { label: 'exceptions', href: '/docs/api/exceptions' },
      { label: 'models', href: '/docs/api/models' },
      { label: 'cache', href: '/docs/api/cache' },
      { label: 'lint', href: '/docs/api/lint' },
      { label: 'eval', href: '/docs/api/eval' },
      { label: 'config', href: '/docs/api/config' },
      { label: 'http', href: '/docs/api/http' },
      { label: 'io', href: '/docs/api/io' },
      { label: 'plugins', href: '/docs/api/plugins' },
      { label: 'schema', href: '/docs/api/schema' },
      { label: 'regression', href: '/docs/api/regression' },
      { label: 'stats', href: '/docs/api/stats' },
      { label: 'secrets', href: '/docs/api/secrets' },
      { label: 'audit', href: '/docs/api/audit' },
      { label: 'cec', href: '/docs/api/cec' },
      { label: 'observe', href: '/docs/api/observe' },
      { label: 'gate', href: '/docs/api/gate' },
      { label: 'trust', href: '/docs/api/trust' },
      { label: 'pipelines', href: '/docs/api/pipelines' },
      { label: 'enterprise', href: '/docs/api/enterprise' },
      { label: 'identity', href: '/docs/api/identity' },
      { label: 'alert', href: '/docs/api/alert' },
      { label: 'drift', href: '/docs/api/drift' },
      { label: 'rag', href: '/docs/api/rag' },
      { label: 'feedback', href: '/docs/api/feedback' },
      { label: 'sdk-reference', href: '/docs/api/sdk-reference' },
    ],
  },
  {
    group: 'Standard & Architecture',
    items: [
      { label: 'RFC-0001', href: '/docs/rfc/rfc-0001' },
      { label: 'ADR Index', href: '/docs/adr' },
      { label: 'ADR-001 Immutable Audit Trail', href: '/docs/adr/adr-001' },
      { label: 'ADR-002 Singleton Clients', href: '/docs/adr/adr-002' },
      { label: 'ADR-003 Schema Versioning', href: '/docs/adr/adr-003' },
      { label: 'ADR-004 Local-First Arch', href: '/docs/adr/adr-004' },
      { label: 'ADR-005 Sandbox Mode', href: '/docs/adr/adr-005' },
      { label: 'ADR-006 RAG Tracing', href: '/docs/adr/adr-006' },
      { label: 'ADR-007 User Feedback', href: '/docs/adr/adr-007' },
      { label: 'ADR-008 SSO/SCIM/OIDC', href: '/docs/adr/adr-008' },
      { label: 'Schema Versioning', href: '/docs/schema-versioning' },
      { label: 'Changelog', href: '/docs/changelog' },
    ],
  },
  {
    group: 'Integrations',
    items: [
      { label: 'CrewAI', href: '/docs/integrations/crewai' },
      { label: 'HallucCheck', href: '/docs/integrations/halluccheck' },
    ],
  },
  {
    group: 'Contributing',
    items: [
      { label: 'Contributing Guide', href: '/docs/contributing' },
    ],
  },
]

const FLAT_ITEMS = NAV.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    group: section.group,
  }))
)

export default function DocsSidebar() {
  const pathname = usePathname()
  const [apiOpen, setApiOpen] = useState(() => pathname.startsWith('/docs/api'))
  const apiSectionId = useId()

  const isActive = (href) => pathname === href
  const activeItem = FLAT_ITEMS.find((item) => isActive(item.href))

  return (
    <>
      <div className={styles.mobileNav}>
        <label className={styles.mobileLabel} htmlFor="docs-nav-select">
          Documentation navigation
        </label>
        <select
          id="docs-nav-select"
          className={styles.mobileSelect}
          value={activeItem?.href || '/docs'}
          onChange={(event) => {
            window.location.href = event.target.value
          }}
          aria-label="Navigate documentation pages"
        >
          {NAV.map((section) => (
            <optgroup key={section.group} label={section.group}>
              {section.items.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.label}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <aside className={styles.sidebar} aria-label="Documentation navigation">
        <nav className={styles.nav}>
          {NAV.map((section) => {
            const isCollapsible = section.collapsible
            const isOpen = isCollapsible ? apiOpen : true
            const hasActive = section.items.some((item) => isActive(item.href))
            const sectionId = isCollapsible ? apiSectionId : undefined

            return (
              <div key={section.group} className={styles.section}>
                {isCollapsible ? (
                  <button
                    type="button"
                    className={`${styles.groupLabel} ${styles.groupToggle} ${hasActive ? styles.groupActive : ''}`}
                    onClick={() => setApiOpen((open) => !open)}
                    aria-expanded={isOpen}
                    aria-controls={sectionId}
                  >
                    {section.group}
                    <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`} aria-hidden="true">{'>'}</span>
                  </button>
                ) : (
                  <p className={`${styles.groupLabel} ${hasActive ? styles.groupActive : ''}`}>
                    {section.group}
                  </p>
                )}

                {isOpen && (
                  <ul id={sectionId} className={styles.list}>
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? 'page' : undefined}
                          className={`${styles.link} ${isActive(item.href) ? styles.active : ''}`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
