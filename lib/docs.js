import fs from 'fs'
import path from 'path'

const DOCS_ROOT = path.join(process.cwd(), 'Spanforge-Core')

// Maps URL slug (joined with '/') → relative path inside Spanforge-Core
export const SLUG_MAP = {
  // ── Getting Started ────────────────────────────────────────────────────────
  '':                         'index.md',
  'quickstart':               'quickstart.md',
  'installation':             'installation.md',
  'configuration':            'configuration.md',
  'changelog':                'changelog.md',
  'contributing':             'contributing.md',
  'runbook':                  'runbook.md',
  'schema-versioning':        'schema-versioning.md',

  // ── CLI ────────────────────────────────────────────────────────────────────
  'cli':                      'cli.md',

  // ── Runtime Governance ─────────────────────────────────────────────────────
  'runtime-governance':             'runtime-governance.md',
  'runtime-governance-contracts':   'runtime-governance-contracts.md',
  'replay-simulation':              'replay-simulation.md',
  'evidence-export':                'evidence-export.md',
  'enterprise-integrations':        'enterprise-integrations.md',
  'competitor-comparison':          'competitor-comparison.md',
  'ga-release-notes':               'ga-release-notes.md',

  // ── User Guide ─────────────────────────────────────────────────────────────
  'guide/events':             'user_guide/events.md',
  'guide/tracing':            'user_guide/tracing.md',
  'guide/signing':            'user_guide/signing.md',
  'guide/redaction':          'user_guide/redaction.md',
  'guide/compliance':         'user_guide/compliance.md',
  'guide/export':             'user_guide/export.md',
  'guide/governance':         'user_guide/governance.md',
  'guide/migration':          'user_guide/migration.md',
  'guide/debugging':          'user_guide/debugging.md',
  'guide/metrics':            'user_guide/metrics.md',
  'guide/cache':              'user_guide/cache.md',
  'guide/linting':            'user_guide/linting.md',
  'guide/audit':              'user_guide/audit.md',
  'guide/alert':              'user_guide/alert.md',
  'guide/gate':               'user_guide/gate.md',
  'guide/rag':                'user_guide/rag.md',
  'guide/feedback':           'user_guide/feedback.md',
  'guide/in-memory-state':    'user_guide/in_memory_state.md',
  'guide/custom-exporters':   'user_guide/custom_exporters.md',

  // ── API Reference ──────────────────────────────────────────────────────────
  'api/index':                'api/index.md',
  'api/event':                'api/event.md',
  'api/types':                'api/types.md',
  'api/signing':              'api/signing.md',
  'api/redact':               'api/redact.md',
  'api/pii':                  'api/pii.md',
  'api/compliance':           'api/compliance.md',
  'api/export':               'api/export.md',
  'api/stream':               'api/stream.md',
  'api/validate':             'api/validate.md',
  'api/normalizer':           'api/normalizer.md',
  'api/migrate':              'api/migrate.md',
  'api/consumer':             'api/consumer.md',
  'api/governance':           'api/governance.md',
  'api/deprecations':         'api/deprecations.md',
  'api/integrations':         'api/integrations.md',
  'api/trace':                'api/trace.md',
  'api/debug':                'api/debug.md',
  'api/metrics':              'api/metrics.md',
  'api/store':                'api/store.md',
  'api/hooks':                'api/hooks.md',
  'api/testing':              'api/testing.md',
  'api/testing-mocks':        'api/testing_mocks.md',
  'api/auto':                 'api/auto.md',
  'api/ulid':                 'api/ulid.md',
  'api/exceptions':           'api/exceptions.md',
  'api/models':               'api/models.md',
  'api/cache':                'api/cache.md',
  'api/lint':                 'api/lint.md',
  'api/eval':                 'api/eval.md',
  'api/config':               'api/config.md',
  'api/http':                 'api/http.md',
  'api/io':                   'api/io.md',
  'api/plugins':              'api/plugins.md',
  'api/schema':               'api/schema.md',
  'api/regression':           'api/regression.md',
  'api/stats':                'api/stats.md',
  'api/secrets':              'api/secrets.md',
  'api/audit':                'api/audit.md',
  'api/cec':                  'api/cec.md',
  'api/observe':              'api/observe.md',
  'api/gate':                 'api/gate.md',
  'api/trust':                'api/trust.md',
  'api/pipelines':            'api/pipelines.md',
  'api/enterprise':           'api/enterprise.md',
  'api/identity':             'api/identity.md',
  'api/alert':                'api/alert.md',
  'api/drift':                'api/drift.md',
  'api/rag':                  'api/rag.md',
  'api/feedback':             'api/feedback.md',
  'api/sdk-reference':        'api/sdk-reference.md',
  'api/explain':              'api/explain.md',
  'api/lineage':              'api/lineage.md',
  'api/operator':             'api/operator.md',
  'api/policy':               'api/policy.md',
  'api/rbac':                 'api/rbac.md',
  'api/scope':                'api/scope.md',

  // ── Standard & Architecture ────────────────────────────────────────────────
  'rfc/rfc-0001':             'rfc/rfc-0001.md',
  'adr':                      'adr/adr-index.md',
  'adr/adr-001':              'adr/ADR-001-immutable-audit-trail.md',
  'adr/adr-002':              'adr/ADR-002-singleton-service-clients.md',
  'adr/adr-003':              'adr/ADR-003-schema-versioning-strategy.md',
  'adr/adr-004':              'adr/ADR-004-local-first-architecture.md',
  'adr/adr-005':              'adr/ADR-005-sandbox-mode.md',
  'adr/adr-006':              'adr/ADR-006-rag-tracing.md',
  'adr/adr-007':              'adr/ADR-007-user-feedback.md',
  'adr/adr-008':              'adr/ADR-008-sso-scim-oidc.md',

  // ── Integrations ───────────────────────────────────────────────────────────
  'integrations/crewai':      'integrations/crewai.md',
  'integrations/halluccheck': 'integrations/halluccheck.md',
}

export function getDocContent(slugArr) {
  const key = (slugArr || []).join('/')
  const relPath = SLUG_MAP[key]
  if (!relPath) return null
  const fullPath = path.join(DOCS_ROOT, relPath)
  try {
    return fs.readFileSync(fullPath, 'utf8')
  } catch {
    return null
  }
}

export function getAllDocSlugs() {
  return Object.keys(SLUG_MAP).map(key => ({
    slug: key === '' ? [] : key.split('/'),
  }))
}

/**
 * Rewrites .md internal links in Spanforge-Core docs to /docs/ routes.
 * Handles relative paths (../) and user_guide/* → guide/* mapping.
 */
export function mdLinkToDocsRoute(href) {
  if (!href) return href
  if (href.startsWith('#') || href.startsWith('http') || href.startsWith('//')) return href

  const hashIdx = href.indexOf('#')
  const anchor = hashIdx >= 0 ? href.slice(hashIdx) : ''
  let link = hashIdx >= 0 ? href.slice(0, hashIdx) : href

  // Strip leading ./ and ../
  link = link.replace(/^(\.\.\/|\.\/)+/, '')

  // Remove .md extension
  link = link.replace(/\.md$/, '')

  // user_guide/* → guide/* (underscore to hyphen in filename)
  if (link.startsWith('user_guide/')) {
    link = 'guide/' + link.slice('user_guide/'.length).replace(/_/g, '-')
  }

  // adr/ADR-NNN-description → adr/adr-NNN
  link = link.replace(/^adr\/ADR-(\d{3})[^/]*$/, (_, n) => `adr/adr-${n}`)
  link = link.replace(/^adr\/adr-index$/, 'adr')

  // testing_mocks → testing-mocks
  link = link.replace(/^api\/testing_mocks$/, 'api/testing-mocks')

  // index pages
  if (link === 'index' || link === '') return '/docs'
  if (link.endsWith('/index')) link = link.slice(0, -6)

  return '/docs/' + link + anchor
}
