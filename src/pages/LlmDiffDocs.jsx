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
  'overview': readmeMd,
  'getting-started': gettingStartedMd,
  'cli-reference': cliReferenceMd,
  'api': apiMd,
  'schema-events': schemaEventsMd,
  'configuration': configurationMd,
  'providers': providersMd,
  'html-reports': htmlReportsMd,
  'ci-cd': ciCdMd,
  'tutorials/README': tutorialsReadmeMd,
  'tutorials/00-introduction': tut00Md,
  'tutorials/01-first-comparison': tut01Md,
  'tutorials/02-semantic-scoring': tut02Md,
  'tutorials/03-prompt-engineering': tut03Md,
  'tutorials/04-batch-evaluation': tut04Md,
  'tutorials/05-ci-cd-regression-gate': tut05Md,
  'tutorials/06-llm-as-a-judge': tut06Md,
  'tutorials/07-multi-model-comparison': tut07Md,
  'tutorials/08-cost-tracking': tut08Md,
  'tutorials/09-json-struct-diff': tut09Md,
  'tutorials/10-python-api': tut10Md,
  'tutorials/11-schema-events': tut11Md,
}

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

  const content = DOC_MAP[currentPage]
  const pageLabel = SIDEBAR.flatMap(s => s.items).find(i => i.path === currentPage)?.label || 'Docs'
  usePageTitle(`${pageLabel} · llm-diff Docs · Spanforge`)

  if (!content) {
    return <Navigate to="/llm-diff/docs/getting-started" replace />
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <DocLayout basePath="/llm-diff/docs" sidebar={SIDEBAR}>
        <MarkdownRenderer content={content} />
      </DocLayout>
      <Footer />
    </div>
  )
}
