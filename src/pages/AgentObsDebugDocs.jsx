import { useParams, Navigate } from 'react-router-dom'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import DocLayout from '../components/DocLayout.jsx'
import MarkdownRenderer from '../components/MarkdownRenderer.jsx'
import { usePageTitle } from '../hooks/usePageTitle.js'

import readmeMd from '../../AgentOBSDebug/README.md?raw'
import apiReferenceMd from '../../AgentOBSDebug/docs/api-reference.md?raw'
import tutorialIndexMd from '../../AgentOBSDebug/docs/tutorial/index.md?raw'

const DOC_MAP = {
  'overview': { content: readmeMd, source: 'README.md' },
  'python-api': { content: apiReferenceMd, source: 'docs/api-reference.md' },
  'api-reference': { content: apiReferenceMd, source: 'docs/api-reference.md' },
  'tutorial': { content: tutorialIndexMd, source: 'docs/tutorial/index.md' },
}

const SOURCE_TO_PAGE = {
  'README.md': 'overview',
  'docs/api-reference.md': 'python-api',
  'docs/tutorial/index.md': 'tutorial',
  'docs/README.md': 'overview',
}

function normalizePath(path) {
  const parts = path.split('/').filter(Boolean)
  const out = []

  for (const part of parts) {
    if (part === '.') continue
    if (part === '..') {
      if (out.length) out.pop()
      continue
    }
    out.push(part)
  }

  return out.join('/')
}

function resolveRelativePath(fromFile, relativePath) {
  const fromParts = fromFile.split('/').filter(Boolean)
  const fromDir = fromParts.slice(0, -1).join('/')
  const raw = fromDir ? `${fromDir}/${relativePath}` : relativePath
  return normalizePath(raw)
}

const AGENTOBSDEBUG_GITHUB_BASE = 'https://github.com/veerarag1973/agentobsdebug/blob/main'

const SIDEBAR = [
  {
    title: null,
    items: [{ path: 'overview', label: 'Overview' }],
  },
  {
    title: 'Documentation',
    items: [
      { path: 'python-api', label: 'Python API' },
      { path: 'tutorial', label: 'Tutorial' },
    ],
  },
]

export default function AgentObsDebugDocs() {
  const params = useParams()
  const currentPage = params['*'] || 'python-api'
  const currentDoc = DOC_MAP[currentPage]
  const content = currentDoc?.content

  const pageLabel = SIDEBAR.flatMap(section => section.items)
    .find(item => item.path === currentPage)?.label || 'Docs'

  usePageTitle(`${pageLabel} · AgentOBSDebug Docs · Spanforge`)

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
      return `/agentobs-debug/docs/${page}${hashSuffix}`
    }

    if (normalized.endsWith('.md') || normalized.endsWith('.json')) {
      return `${AGENTOBSDEBUG_GITHUB_BASE}/${normalized}${hashSuffix}`
    }

    return href
  }

  if (!content) {
    return <Navigate to="/agentobs-debug/docs/python-api" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/agentobs-debug/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} resolveLink={resolveDocLink} />
      </DocLayout>
      <Footer />
    </div>
  )
}
