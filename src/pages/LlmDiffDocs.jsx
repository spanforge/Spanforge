import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

// ── Static markdown imports (Vite ?raw) ──
import readmeMd from '../../llmdiff/README.md?raw'
import gettingStartedMd from '../../llmdiff/docs/getting-started.md?raw'
import cliReferenceMd from '../../llmdiff/docs/cli-reference.md?raw'
import apiMd from '../../llmdiff/docs/api.md?raw'
import schemaEventsMd from '../../llmdiff/docs/schema-events.md?raw'
import configurationMd from '../../llmdiff/docs/configuration.md?raw'
import providersMd from '../../llmdiff/docs/providers.md?raw'
import htmlReportsMd from '../../llmdiff/docs/html-reports.md?raw'
import ciCdMd from '../../llmdiff/docs/ci-cd.md?raw'
import tutorialsReadmeMd from '../../llmdiff/docs/tutorials/README.md?raw'
import tut00Md from '../../llmdiff/docs/tutorials/00-introduction.md?raw'
import tut01Md from '../../llmdiff/docs/tutorials/01-first-comparison.md?raw'
import tut02Md from '../../llmdiff/docs/tutorials/02-semantic-scoring.md?raw'
import tut03Md from '../../llmdiff/docs/tutorials/03-prompt-engineering.md?raw'
import tut04Md from '../../llmdiff/docs/tutorials/04-batch-evaluation.md?raw'
import tut05Md from '../../llmdiff/docs/tutorials/05-ci-cd-regression-gate.md?raw'
import tut06Md from '../../llmdiff/docs/tutorials/06-llm-as-a-judge.md?raw'
import tut07Md from '../../llmdiff/docs/tutorials/07-multi-model-comparison.md?raw'
import tut08Md from '../../llmdiff/docs/tutorials/08-cost-tracking.md?raw'
import tut09Md from '../../llmdiff/docs/tutorials/09-json-struct-diff.md?raw'
import tut10Md from '../../llmdiff/docs/tutorials/10-python-api.md?raw'
import tut11Md from '../../llmdiff/docs/tutorials/11-schema-events.md?raw'

const DOC_MAP = {
  'overview': { content: readmeMd, source: 'README.md' },
  'getting-started': { content: gettingStartedMd, source: 'docs/getting-started.md' },
  'cli-reference': { content: cliReferenceMd, source: 'docs/cli-reference.md' },
  'api': { content: apiMd, source: 'docs/api.md' },
  'schema-events': { content: schemaEventsMd, source: 'docs/schema-events.md' },
  'configuration': { content: configurationMd, source: 'docs/configuration.md' },
  'providers': { content: providersMd, source: 'docs/providers.md' },
  'html-reports': { content: htmlReportsMd, source: 'docs/html-reports.md' },
  'ci-cd': { content: ciCdMd, source: 'docs/ci-cd.md' },
  'tutorials/README': { content: tutorialsReadmeMd, source: 'docs/tutorials/README.md' },
  'tutorials/00-introduction': { content: tut00Md, source: 'docs/tutorials/00-introduction.md' },
  'tutorials/01-first-comparison': { content: tut01Md, source: 'docs/tutorials/01-first-comparison.md' },
  'tutorials/02-semantic-scoring': { content: tut02Md, source: 'docs/tutorials/02-semantic-scoring.md' },
  'tutorials/03-prompt-engineering': { content: tut03Md, source: 'docs/tutorials/03-prompt-engineering.md' },
  'tutorials/04-batch-evaluation': { content: tut04Md, source: 'docs/tutorials/04-batch-evaluation.md' },
  'tutorials/05-ci-cd-regression-gate': { content: tut05Md, source: 'docs/tutorials/05-ci-cd-regression-gate.md' },
  'tutorials/06-llm-as-a-judge': { content: tut06Md, source: 'docs/tutorials/06-llm-as-a-judge.md' },
  'tutorials/07-multi-model-comparison': { content: tut07Md, source: 'docs/tutorials/07-multi-model-comparison.md' },
  'tutorials/08-cost-tracking': { content: tut08Md, source: 'docs/tutorials/08-cost-tracking.md' },
  'tutorials/09-json-struct-diff': { content: tut09Md, source: 'docs/tutorials/09-json-struct-diff.md' },
  'tutorials/10-python-api': { content: tut10Md, source: 'docs/tutorials/10-python-api.md' },
  'tutorials/11-schema-events': { content: tut11Md, source: 'docs/tutorials/11-schema-events.md' },
}

const SOURCE_TO_PAGE = Object.entries(DOC_MAP).reduce((acc, [page, doc]) => {
  acc[doc.source] = page
  return acc
}, {
  'docs/README.md': 'overview',
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

const LLMDIFF_GITHUB_BASE = 'https://github.com/veerarag1973/llmdiff/blob/main'

const SIDEBAR = [
  {
    title: null,
    items: [
      { path: 'overview', label: 'Overview' },
    ]
  },
  {
    title: 'Core Docs',
    items: [
      { path: 'getting-started', label: 'Getting Started' },
      { path: 'cli-reference', label: 'CLI Reference' },
      { path: 'api', label: 'Python API' },
      { path: 'schema-events', label: 'Schema Events' },
      { path: 'configuration', label: 'Configuration' },
      { path: 'providers', label: 'Provider Setup' },
      { path: 'html-reports', label: 'HTML Reports' },
      { path: 'ci-cd', label: 'CI/CD Integration' },
    ]
  },
  {
    title: 'Tutorials',
    items: [
      { path: 'tutorials/README', label: 'Tutorials Overview' },
      { path: 'tutorials/00-introduction', label: '00 · Introduction' },
      { path: 'tutorials/01-first-comparison', label: '01 · First Comparison' },
      { path: 'tutorials/02-semantic-scoring', label: '02 · Semantic Scoring' },
      { path: 'tutorials/03-prompt-engineering', label: '03 · Prompt Engineering' },
      { path: 'tutorials/04-batch-evaluation', label: '04 · Batch Evaluation' },
      { path: 'tutorials/05-ci-cd-regression-gate', label: '05 · CI/CD Gate' },
      { path: 'tutorials/06-llm-as-a-judge', label: '06 · LLM-as-a-Judge' },
      { path: 'tutorials/07-multi-model-comparison', label: '07 · Multi-model' },
      { path: 'tutorials/08-cost-tracking', label: '08 · Cost Tracking' },
      { path: 'tutorials/09-json-struct-diff', label: '09 · JSON Struct Diff' },
      { path: 'tutorials/10-python-api', label: '10 · Python API' },
      { path: 'tutorials/11-schema-events', label: '11 · Schema Events' },
    ]
  }
]

export default function LlmDiffDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'getting-started'

  const currentDoc = DOC_MAP[currentPage]
  const content = currentDoc?.content
  const pageLabel = SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Docs'
  usePageTitle(`${pageLabel} · llm-diff Docs · Spanforge`)

  const resolveDocLink = (href) => {
    if (!href || !currentDoc?.source) return href
    if (href.startsWith('#')) return href
    if (href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//')) return href
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return href

    const [rawPath, hash] = href.split('#')
    const hashSuffix = hash ? `#${hash}` : ''

    if (!rawPath) return hashSuffix || href

    const normalized = rawPath.startsWith('/')
      ? normalizePath(rawPath)
      : resolveRelativePath(currentDoc.source, rawPath)

    const page = SOURCE_TO_PAGE[normalized]
    if (page) {
      return `/llm-diff/docs/${page}${hashSuffix}`
    }

    if (normalized.endsWith('.md') || normalized.endsWith('.json')) {
      return `${LLMDIFF_GITHUB_BASE}/${normalized}${hashSuffix}`
    }

    return href
  }

  if (!content) {
    return <Navigate to="/llm-diff/docs/getting-started" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/llm-diff/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} resolveLink={resolveDocLink} />
      </DocLayout>
      <Footer />
    </div>
  )
}
