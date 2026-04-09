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
  { cmd: 'replay',      args: 'events.jsonl --trace <id>',      desc: 'Step-by-step replay of a single trace.' },
  { cmd: 'inspect',     args: 'events.jsonl --trace <id>',      desc: 'Print a trace summary.' },
  { cmd: 'tree',        args: 'events.jsonl --trace <id>',      desc: 'Print the span hierarchy tree.' },
  { cmd: 'timeline',    args: 'events.jsonl --trace <id>',      desc: 'Print the execution timeline.' },
  { cmd: 'tools',       args: 'events.jsonl --trace <id>',      desc: 'List all tool calls.' },
  { cmd: 'decisions',   args: 'events.jsonl --trace <id>',      desc: 'List all decision points.' },
  { cmd: 'cost',        args: 'events.jsonl --trace <id>',      desc: 'Print cost summary.' },
  { cmd: 'attribution', args: 'events.jsonl --trace <id>',      desc: 'Per-span cost/latency breakdown.' },
  { cmd: 'report',      args: 'events.jsonl',                   desc: 'Batch summary across all traces.' },
  { cmd: 'diff',        args: 'events.jsonl --trace-a --trace-b', desc: 'Diff two traces side-by-side.' },
]

export default function DebugPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/agentobs" className={styles.breadcrumbLink}>SpanForge Platform</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>SpanForge Debug</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>agentobs-debug · Developer Tool · In Development</span>
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
            <Link href="/agentobs/sdk" className="btn-primary">SpanForge SDK →</Link>
            <Link href="/agentobs/validate" className="btn-ghost">Validate events →</Link>
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
              Requires Python ≥ 3.10 and{' '}
              <code className={styles.inlineCode}>agentobs &gt;= 1.0.5</code>.
            </p>
            <div className={styles.installBlock}>
              <span className={styles.installCmd}>
                <span>pip install</span> agentobs-debug
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
              <code className={styles.inlineCode}>agentobs-debug</code> CLI. Point it
              at any JSONL file produced by the SpanForge SDK.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`TRACE="4bf92f3577b34da6a3ce929d0e0e4736"

# Step-by-step replay
agentobs-debug replay events.jsonl --trace $TRACE

# Span hierarchy tree
agentobs-debug tree events.jsonl --trace $TRACE

# Execution timeline
agentobs-debug timeline events.jsonl --trace $TRACE

# Per-span cost/latency breakdown
agentobs-debug attribution events.jsonl --trace $TRACE

# Diff two traces
agentobs-debug diff events.jsonl \\
  --trace-a $TRACE \\
  --trace-b aaaa0000000000000000000000000001`}</pre>
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
              Import <code className={styles.inlineCode}>agentobs_debug</code> and
              call the same functions from your test suite, notebooks, or automation
              scripts.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>python</span>
              </div>
              <pre className={styles.codeBlockBody}>{`import agentobs_debug as aod

stream = aod.load_events("events.jsonl")
trace  = "4bf92f3577b34da6a3ce929d0e0e4736"

# Single-trace inspection
aod.inspect_trace(trace, stream=stream)
aod.print_trace_tree(trace, stream=stream)
aod.timeline(trace, stream=stream)

# Cost analysis
aod.cost_summary(trace, stream=stream)
aod.cost_attribution(trace, stream=stream)

# Tool and decision analysis
aod.show_tools(trace, stream=stream)
aod.show_decisions(trace, stream=stream)

# Multi-trace
from agentobs_debug.report import batch_report
from agentobs_debug.diff import diff_traces

batch_report("events.jsonl")
diff_traces(trace, "other-trace-id", stream=stream)`}</pre>
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
          <h2 className={styles.sectionH2}>agentobs-debug commands.</h2>
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
            <Link href="/agentobs/validate" className="btn-primary">AgentOBSValidate →</Link>
            <Link href="/agentobs/sdk" className="btn-ghost">Back to the SDK →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/agentobs/sdk" className={styles.pageNavLink}>← Python SDK</Link>
          <Link href="/agentobs/validate" className={styles.pageNavLink}>AgentOBSValidate →</Link>
        </div>
      </div>
    </>
  )
}
