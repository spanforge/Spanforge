import Link from 'next/link'
import styles from '@/components/agentObsPage.module.css'

export const metadata = {
  title: 'SpanForge Validate — SpanForge',
  description:
    'Reference validation CLI and Python SDK for the SPANFORGE event standard. Validate JSON/JSONL event streams, verify HMAC chains, integrate with CI pipelines, and export the JSON Schema.',
}

const CLI_OPTIONS = [
  { flag: '<file>',                    desc: 'Validate a JSONL stream or JSON array file.' },
  { flag: '--json',                    desc: 'JSON output for CI systems and downstream scripts.' },
  { flag: 'cat file | spanforge validate', desc: 'Read from STDIN — pipe-friendly for CI step composition.' },
  { flag: '--otel',                    desc: 'OpenTelemetry compatibility mode — accept camelCase field names.' },
  { flag: '--schema-version <ver>',    desc: 'Pin validation to a specific schema version, e.g. --schema-version 0.1.' },
  { flag: '--key-file <path>',         desc: 'Cryptographic HMAC-SHA256 signature verification using a key file.' },
  { flag: '--export-schema',           desc: 'Export the spanforge event JSON Schema (Draft 2020-12) to stdout.' },
]

const EXIT_CODES = [
  { code: '0', meaning: 'All events passed validation. Safe to proceed.' },
  { code: '1', meaning: 'One or more events failed. Details printed to stdout.' },
  { code: '2', meaning: 'Input could not be parsed (malformed JSON or unreadable file).' },
]

export default function ValidatePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/spanforgecore" className={styles.breadcrumbLink}>SpanForge Platform</Link>
          <span className={styles.breadcrumbSep} aria-hidden="true">/</span>
          <span className={styles.breadcrumbCurrent}>SpanForge Validate</span>
        </div>
      </div>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.heroLabel}>spanforge validate · Compliance Tool · Generally Available</span>
          <h1 className={styles.h1}>
            Schema compliance. In CI.
          </h1>
          <p className={styles.heroSub}>
            SpanForge Validate is the reference validation CLI and Python SDK for the spanforge
            event standard. Validate JSON and JSONL event streams, verify HMAC signing
            chains, and catch non-compliance at build time — before it reaches production.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/spanforgecore/sdk" className="btn-primary">SpanForge SDK →</Link>
            <Link href="/spanforgecore/debug" className="btn-ghost">Debug tooling →</Link>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Installation</span>
            <h2 className={styles.sectionH2}>One command to install.</h2>
            <div className={styles.installBlock}>
              <span className={styles.installCmd}>
                <span>pip install</span> spanforge
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CLI quickstart */}
      <section className={styles.sectionDark}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Quickstart · CLI</span>
            <h2 className={styles.sectionH2}>Validate from the terminal.</h2>
            <p className={styles.sectionBody}>
              Point <code className={styles.inlineCode}>spanforge-validate</code> at any
              JSONL file produced by the SpanForge SDK. Pass a file path, pipe from stdin,
              or integrate it as a step in your CI workflow.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>bash</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# Validate a JSONL stream
spanforge validate events.jsonl

# Validate a JSON array
spanforge validate events.json

# JSON output for CI / downstream scripts
spanforge validate events.jsonl --json

# Read from STDIN
cat events.jsonl | spanforge validate

# OpenTelemetry compatibility: accept camelCase field names
spanforge validate events.jsonl --otel

# Pin to a specific schema version
spanforge validate events.jsonl --schema-version 0.1

# Cryptographic HMAC-SHA256 signature verification
spanforge validate events.jsonl --key-file signing.key

# Export the spanforge event JSON Schema (Draft 2020-12)
spanforge validate --export-schema > spanforge-schema.json`}</pre>
            </div>

            <h3 style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--light)', marginTop: '2.5rem', marginBottom: '0.75rem' }}>
              Exit codes
            </h3>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr><th>Code</th><th>Meaning</th></tr>
                </thead>
                <tbody>
                  {EXIT_CODES.map(e => (
                    <tr key={e.code}>
                      <td>{e.code}</td>
                      <td>{e.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Python SDK quickstart */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">Quickstart · Python API</span>
            <h2 className={styles.sectionH2}>Programmatic validation.</h2>
            <p className={styles.sectionBody}>
              Import <code className={styles.inlineCode}>spanforge_validate</code> to
              validate individual events or entire streams in your test suite, CI scripts,
              or monitoring pipelines.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>python</span>
              </div>
              <pre className={styles.codeBlockBody}>{`from spanforge.validate import validate_event, validate_stream
from spanforge.validate import iter_events
from spanforge.validate import ValidationContext

# Validate a single dict
result = validate_event(1, {
    "event_id": "01HZQSN7PQVR2K4M0BXJD3GSTA",
    "timestamp": "2026-03-06T10:00:00.000Z",
    "event_type": "agent.plan.created",
    "source": "spanforge@1.0.0",
    "trace_id": "4bf92f3577b34da6a3ce929d0e0e4736",
    "span_id": "00f067aa0ba902b7",
})
print(result.status)  # "pass"

# Validate a stream from a file
with open("events.jsonl") as f:
    for result in validate_stream(iter_events(f)):
        if result.status == "fail":
            print(f"Line {result.line}: {result.errors}")`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* CLI options */}
      <section className={styles.sectionDark}>
        <div className="container">
          <span className="eyebrow">CLI Reference</span>
          <h2 className={styles.sectionH2}>All options.</h2>
          <div className={styles.cliList}>
            {CLI_OPTIONS.map(o => (
              <div key={o.flag} className={styles.cliRow}>
                <span className={styles.cliCmd}>{o.flag}</span>
                <span className={styles.cliCmdDesc}>{o.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CI integration */}
      <section className={styles.sectionCharcoal}>
        <div className="container">
          <div className={styles.sectionInner}>
            <span className="eyebrow">CI Integration</span>
            <h2 className={styles.sectionH2}>Add to your pipeline in two lines.</h2>
            <p className={styles.sectionBody}>
              SpanForge Validate exits <code className={styles.inlineCode}>0</code> on
              success and <code className={styles.inlineCode}>1</code> on failure, making
              it a natural CI gate. Run it in any GitHub Actions, GitLab CI, or Jenkins
              pipeline step.
            </p>
            <div className={styles.codeBlock}>
              <div className={styles.codeBlockHeader}>
                <span className={styles.codeBlockLang}>yaml</span>
              </div>
              <pre className={styles.codeBlockBody}>{`# GitHub Actions example
- name: Validate spanforge events
  run: |
    pip install spanforge
    spanforge validate tests/fixtures/events.jsonl --json`}</pre>
            </div>
            <p className={styles.sectionBody} style={{ marginTop: '1.5rem' }}>
              Use <code className={styles.inlineCode}>--json</code> to get structured
              output for downstream processing, test-result reporting, or integration
              with your existing compliance pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <span className="eyebrow">The full stack</span>
          <h2 className={styles.ctaH2}>Standard. SDK. Debug. Validate.</h2>
          <p className={styles.ctaSub}>
            Every layer of the spanforge compliance stack is open, documented,
            and ready to instrument your production AI systems.
          </p>
          <div className={styles.ctaBtns}>
            <Link href="/standard" className="btn-primary">Read the standard →</Link>
            <Link href="/spanforgecore" className="btn-ghost">SpanForge overview →</Link>
          </div>
        </div>
      </section>

      {/* Page nav */}
      <div className={styles.pageNav}>
        <div className={`container ${styles.pageNavInner}`}>
          <Link href="/spanforgecore/debug" className={styles.pageNavLink}>← SpanForge Debug</Link>
          <Link href="/spanforgecore" className={styles.pageNavLink}>SpanForge overview →</Link>
        </div>
      </div>
    </>
  )
}
