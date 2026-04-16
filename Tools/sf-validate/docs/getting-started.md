# Getting Started

This guide walks you from zero to running your first validation in under five minutes.

---

## Prerequisites

- Python **3.11** or later
- An existing SPANFORGE JSONL audit log (or see [Creating a sample log](#sample-log) below)

---

## Installation

### Standard install (recommended)

```bash
pip install sf-validate
```

### Isolated CLI install via pipx

Keeps sf-validate's dependencies separate from your project's environment:

```bash
pipx install sf-validate
```

### With watchdog support (faster `--watch` mode)

The built-in watch mode uses mtime polling by default. Install the `watch` extra
to enable kernel-level file system events (inotify on Linux, FSEvents on macOS,
ReadDirectoryChanges on Windows) for near-instant detection:

```bash
pip install "sf-validate[watch]"
```

### Development install (from source)

```bash
git clone https://github.com/veerarag1973/sf-validate
cd sf-validate
pip install -e ".[dev]"
```

### Verify the install

```bash
sf-validate --version
# sf-validate 1.0.0  (spanforge 2.0.2)
```

---

## Your First Validation

### 1. Schema-only validation (no signing key needed)

```bash
sf-validate --input audit.jsonl
```

This validates every event in `audit.jsonl` against the SPANFORGE RFC-0001 JSON schema.
Chain verification is skipped because no signing key was provided.

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 42
Schema errors: 0
Chain check  : skipped (no signing key)
Duration     : 3.1 ms

Result       : PASS
```

Exit code is `0` (pass) or `1` (validation errors found).

### 2. Full validation with HMAC chain verification

```bash
sf-validate --input audit.jsonl --key "$SPANFORGE_SIGNING_KEY"
```

Or, more securely, read the key from a file so it never appears in shell history
or process listings:

```bash
sf-validate --input audit.jsonl --key-file .signing-key
```

Expected output when the chain is intact:

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 42
Schema errors: 0
Tampered     : 0
Gaps         : 0
Duration     : 5.2 ms

Result       : PASS
```

### 3. Validate multiple files with a glob

```bash
sf-validate --input 'logs/**/*.jsonl' --key-file .signing-key
```

Use quotes around glob patterns to prevent the shell from expanding them before
sf-validate sees them. sf-validate expands globs internally with `**` support.

### 4. Pipe from stdin

```bash
cat audit.jsonl | sf-validate --input -
# or
curl https://logs.example.com/audit.jsonl | sf-validate --input - --key-file .key
```

---

## Understanding the Output

### Text format (default)

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)  ← tool / schema headers
Files        : 3                                        ← matched file count
Events       : 1 204                                    ← total parsed events
Parse errors : 2                                        ← JSONL deserialization failures
  audit-02.jsonl:47  <error message>
Schema errors: 5                                        ← RFC-0001 violations
  audit-01.jsonl:line 12  [EVT-abc]  payload: ...
Tampered     : 0                                        ← chain tamper count
Gaps         : 1                                        ← missing prev_id links
Duration     : 14.2 ms

Result       : FAIL                                     ← overall pass/fail
```

When ANSI color is enabled (auto-detected from TTY), errors are highlighted in red/yellow
and the final result is green (PASS) or red (FAIL).

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | All checks passed |
| `1` | Validation failures (schema errors, chain tampered/gapped, parse errors) |
| `2` | Configuration error (missing key with `--require-chain`, file not found, bad `--key-file`) |

---

## Common Patterns

### Fail if no signing key is supplied

In secure pipelines you may want the validation step to hard-fail when no
key is available rather than silently skipping the chain check:

```bash
sf-validate --input audit.jsonl --key-file .signing-key --require-chain
```

### Continue past bad lines

By default, a single malformed JSONL line aborts the entire validation. Use
`--skip-parse-errors` to collect bad lines as parse errors and keep going:

```bash
sf-validate --input audit.jsonl --skip-parse-errors
```

### Validate only specific event types

```bash
sf-validate --input audit.jsonl --event-type "llm.trace.span.completed,llm.audit.chain.rotated"
```

Other event types are still counted in `total_events` but are not schema-validated
or chain-verified.

### Get a one-line summary (for scripts)

```bash
sf-validate --input audit.jsonl --key-file .key -q
# PASS  342 events  1 files
```

### Persist the report to a file

```bash
sf-validate --input audit.jsonl --format json --output report.json
```

The file is always written without ANSI color codes, even if stdout has color enabled.

---

## Creating a Sample Log {#sample-log}

If you don't have an existing audit log, you can create one using spanforge directly:

```python
from pathlib import Path
from spanforge import Event, sign
from spanforge.types import EventType
import json

KEY = "my-test-signing-key"
events = []
prev = None

for i in range(10):
    e = sign(
        Event(event_type=EventType.TRACE_SPAN_COMPLETED, source="my-app@1.0.0",
              payload={"step": i, "status": "ok"}),
        org_secret=KEY,
        prev_event=prev,
    )
    events.append(e)
    prev = e

Path("sample.jsonl").write_text("\n".join(e.to_json() for e in events))
print(f"Wrote {len(events)} signed events to sample.jsonl")
```

Then validate it:

```bash
sf-validate --input sample.jsonl --key "my-test-signing-key"
```

---

## Next Steps

- [CLI Reference](cli-reference.md) — every flag explained
- [Output Formats](output-formats.md) — json, github, junit, sarif
- [CI Integration](ci-integration.md) — GitHub Actions, GitLab CI, Jenkins
- [Configuration](configuration.md) — set defaults in `pyproject.toml`
