import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'SpanForge Debug — SpanForge',
  description:
    'Developer tools for inspecting, replaying, and visualising SpanForge traces. Timeline views, span trees, tool-call analysis, cost attribution, and trace diffing — via Python API and CLI.',
}

const API_FUNCTIONS = [
  {
    fn: 'replay(trace, stream)',
    desc: 'Step-by-step interactive replay of an agent run. Prints each span in chronological order.',
  },
  {
    fn: 'inspect_trace(trace, stream)',
    desc: 'Compact summary of a trace: span count, total cost, duration, model, and status breakdown.',
  },
  {
    fn: 'print_trace_tree(trace, stream)',
    desc: 'Renders the parent–child span hierarchy as an indented tree.',
  },
  {
    fn: 'timeline(trace, stream)',
    desc: 'ASCII timeline of span start/end across wall-clock time. Accepts from_ms / to_ms filters.',
  },
  {
    fn: 'show_tools(trace, stream)',
    desc: 'Lists every tool call in the trace with name, arguments, result, latency, and any errors.',
  },
  {
    fn: 'show_decisions(trace, stream)',
    desc: 'Decision-point summary: decision name, confidence score, outcome, and associated span.',
  },
  {
    fn: 'cost_summary(trace, stream)',
    desc: 'Token usage and USD cost totals across the trace, broken down by model.',
  },
  {
    fn: 'cost_attribution(trace, stream)',
    desc: 'Per-span cost and latency table with percentile breakdowns.',
  },
  {
    fn: 'batch_report(path)',
    desc: 'Summarises every trace in a JSONL file — counts, totals, error rates.',
  },
  {
    fn: 'diff_traces(trace_a, trace_b, stream)',
    desc: 'Side-by-side structural diff of two traces. Highlights added/removed/changed spans.',
  },
]

const CLI_COMMANDS = [
  { cmd: 'inspect',     args: 'events.jsonl --event-id <id>',   desc: 'Pretty-print a single event by event_id.' },
  { cmd: 'stats',       args: 'events.jsonl',                   desc: 'Print event-type counts, trace count, and time range.' },
  { cmd: 'report',      args: 'events.jsonl',                   desc: 'Generate a static HTML trace report.' },
  { cmd: 'serve',       args: 'events.jsonl [--port 8888]',     desc: 'Start a local HTTP trace viewer at /traces.' },
  { cmd: 'ui',          args: 'events.jsonl',                   desc: 'Open trace viewer in your browser.' },
  { cmd: 'audit-chain', args: 'events.jsonl [--key-file <k>]',  desc: 'Verify HMAC-SHA256 signing chain integrity.' },
  { cmd: 'scan',        args: 'events.jsonl',                   desc: 'Scan for PII using built-in regex detectors.' },
  { cmd: 'compliance',  args: 'events.jsonl [--framework <f>]', desc: 'Generate HMAC-signed compliance evidence packages.' },
]

export default function DebugPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/spanforgecore" className={styles.breadcrumbLink}>SpanForge Platform</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>SpanForge Debug</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>spanforge · Developer Tool · Generally Available</span>
          <h1 className={styles.h1}>
            See inside every agent run.
          </h1>
          <p className={styles.heroSub}>
            SpanForge Debug ships developer tools for inspecting, replaying, and
            visualising SpanForge traces. Span trees, execution timelines, tool-call
            analysis, cost attribution, and side-by-side trace diffs — via a Python
            API or a single CLI command.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/spanforgecore/sdk" className="btn-primary">SpanForge SDK →</Link>
            <Link href="/spanforgecore/validate" className="btn-ghost">Validate events →</Link>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Installation</span>
            <h2 className={styles.sectionH2}>Install in seconds.</h2>
            <p className={styles.sectionBody}>
              Requires Python ≥ 3.9 and{' '}
              <code className={styles.inlineCode}>spanforge &gt;= 1.0.8</code>.
            </p>
            <div className={styles.installBlock}>
              <span className={styles.installCmd}>
                <span>pip install</span> spanforge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart CLI */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Quickstart · CLI</span>
            <h2 className={styles.sectionH2}>Start from the terminal.</h2>
            <p className={styles.sectionBody}>
              All SpanForge Debug functionality is accessible from the{' '}
              <code className={styles.inlineCode}>spanforge</code> CLI. Point it
              at any JSONL file produced by the SpanForge SDK.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`TRACE="4bf92f3577b34da6a3ce929d0e0e4736"

# Inspect a single event by event_id
spanforge inspect events.jsonl --event-id $TRACE

# Print span counts and time range
spanforge stats events.jsonl

# Generate a static HTML trace report
spanforge report events.jsonl

# Start a local HTTP trace viewer at /traces
spanforge serve events.jsonl

# Open trace viewer in browser
spanforge ui events.jsonl`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* Quickstart API */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Quickstart · Python API</span>
            <h2 className={styles.sectionH2}>Or use it programmatically.</h2>
            <p className={styles.sectionBody}>
              Import <code className={styles.inlineCode}>spanforge.debug</code> and
              call the same functions from your test suite, notebooks, or automation
              scripts.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>python</span>
              </div>
              <pre className={styles.codeBlockBody}>{`from spanforge.debug import print_tree, summary, visualize
from spanforge._store import TraceStore

store = TraceStore.load("events.jsonl")
trace = store.get_trace("4bf92f3577b34da6a3ce929d0e0e4736")

# Print span hierarchy tree
print_tree(trace)

# Compact summary: span count, cost, duration, model, status
summary(trace)

# Open visual trace viewer
visualize(trace)`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* API reference */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">API Reference</span>
          <h2 className={styles.sectionH2}>All functions at a glance.</h2>
          <p className={styles.sectionBody} style={{ maxWidth: '680px' }}>
            Every function accepts a <code className={styles.inlineCode}>trace_id</code>{' '}
            string and a <code className={styles.inlineCode}>stream</code> (the output of{' '}
            <code className={styles.inlineCode}>load_events()</code>). Output format
            defaults to text; pass <code className={styles.inlineCode}>output_format=&quot;json&quot;</code>{' '}
            for machine-readable output.
          </p>
          <div className={styles.namespaceList}>
            {API_FUNCTIONS.map(f => (
              <div key={f.fn} className={styles.namespaceRow}>
                <span className={styles.namespaceKey}>{f.fn}</span>
                <span className={styles.namespaceDesc}>{f.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI reference */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <span className="eyebrow">CLI Reference</span>
          <h2 className={styles.sectionH2}>spanforge debug commands.</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr><th>Command</th><th>Arguments</th><th>Description</th></tr>
              </thead>
              <tbody>
                {CLI_COMMANDS.map(c => (
                  <tr key={c.cmd}>
                    <td>{c.cmd}</td>
                    <td style={{ fontFamily: 'var(--font-dm-mono)', fontSize: '0.78rem', color: 'var(--muted)' }}>{c.args}</td>
                    <td>{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <span className="eyebrow">Next steps</span>
          <h2 className={styles.ctaH2}>Confident events are compliant events.</h2>
          <p className={styles.ctaSub}>
            Use SpanForge Validate to enforce schema compliance in CI, catch drift at
            build time, and verify HMAC chains before shipping.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/spanforgecore/validate" className="btn-primary">SpanForge Validate →</Link>
            <Link href="/spanforgecore/sdk" className="btn-ghost">Back to the SDK →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/spanforgecore/sdk" className={styles.pageNavLink}>← Python SDK</Link>
          <Link href="/spanforgecore/validate" className={styles.pageNavLink}>SpanForge Validate →</Link>
        </div>
      </div>
    </>
  )
}
