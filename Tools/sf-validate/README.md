# sf-validate

[![CI](https://github.com/veerarag1973/sf-validate/actions/workflows/ci.yml/badge.svg)](https://github.com/veerarag1973/sf-validate/actions)
[![PyPI](https://img.shields.io/pypi/v/sf-validate)](https://pypi.org/project/sf-validate/)
[![Python](https://img.shields.io/pypi/pyversions/sf-validate)](https://pypi.org/project/sf-validate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A compliance gate for [SPANFORGE](https://spanforge.io) RFC-0001 JSONL audit-log streams.

`sf-validate` combines **per-event JSON schema validation** and **HMAC chain verification** into a single auditable pass — something that spanforge's individual `validate` and `audit verify` commands do not provide as a unified, CI-friendly operation.

---

## Installation

```bash
pip install sf-validate

# Or via pipx for an isolated CLI install:
pipx install sf-validate
```

Python 3.11+ required. Single runtime dependency: `spanforge==2.0.2`.

---

## Quick Start

```bash
# Validate a local audit log
sf-validate --input audit.jsonl

# Add HMAC chain verification
sf-validate --input audit.jsonl --key "$SPANFORGE_SIGNING_KEY"

# Read the key from a file (safer — never exposed in process listings)
sf-validate --input audit.jsonl --key-file .signing-key

# Validate a glob across many files
sf-validate --input 'logs/**/*.jsonl' --key-file .signing-key

# Pipe from stdin
cat audit.jsonl | sf-validate --input -
```

Sample output:

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 3
Events       : 1204
Schema errors: 0
Chain check  : skipped (no signing key)
Duration     : 14.2 ms

Result       : PASS
```

---

## CLI Reference

```
sf-validate --input PATTERN [options]
```

### Input / Output

| Flag | Description |
|------|-------------|
| `--input PATTERN` | Path, glob (`logs/**/*.jsonl`), comma-separated list, or `-` for stdin. **Required.** |
| `--output FILE` | Write the formatted report to FILE in addition to stdout. |
| `--format FORMAT` | Output format: `text` (default), `json`, `github`, `junit`, `sarif`. |

### Signing / Chain

| Flag | Description |
|------|-------------|
| `--key SECRET` | HMAC signing key. Prefer `$SPANFORGE_SIGNING_KEY` or `--key-file`. |
| `--key-file PATH` | Read signing key from PATH (one line). Never appears in process listings. |
| `--key-map PAIRS` | Key-rotation map: `EVT01:newkey,EVT02:newerkey`. |
| `--require-chain` | Exit 2 if no signing key is available. |
| `--no-chain` | Skip HMAC chain verification entirely. |
| `--per-file-chain` | Treat each matched file as an independent chain (log-rotated files). |
| `--strict` | Treat a skipped chain check (no key available) as a failure (exit 1). |

### Schema / Parsing

| Flag | Description |
|------|-------------|
| `--no-schema` | Skip per-event JSON schema validation. |
| `--skip-parse-errors` | Treat malformed JSONL lines as errors instead of aborting. |
| `--max-errors N` | Stop after N total errors (parse + schema). |
| `--event-type TYPES` | Comma-separated event types to validate (others are counted only). |

### Performance

| Flag | Description |
|------|-------------|
| `--workers N` | Parallel file-reading threads (default: auto, up to 4). |

### Output Control

| Flag | Description |
|------|-------------|
| `-v` / `--verbose` | Show the expanded list of matched files before the report. |
| `-q` / `--quiet` | Print only a one-line PASS/FAIL summary. |
| `--no-color` | Disable ANSI color output. Respects `NO_COLOR` and `SF_VALIDATE_NO_COLOR`. |

### Watch Mode

| Flag | Description |
|------|-------------|
| `--watch` | Re-validate whenever matched files change (Ctrl+C to stop). |
| `--watch-interval S` | Polling interval in seconds for `--watch` (default: 1.0). |

### Exit codes

| Code | Meaning |
|------|---------|
| `0` | All checks passed. |
| `1` | Validation failures (schema errors, chain tampered/gapped). |
| `2` | Configuration error (missing key, no files found, bad `--key-file`). |

---

## Output Formats

### `text` (default)

Human-readable terminal output with optional ANSI color (auto-detected from TTY).

### `json`

Machine-readable JSON. Pipe to `jq` for filtering:

```bash
sf-validate --input audit.jsonl --format json | jq '.schema_errors'
```

### `github`

GitHub Actions `::error::` / `::notice::` workflow commands. Errors appear as
inline annotations on pull requests.

```yaml
- name: Validate audit log
  run: sf-validate --input audit.jsonl --format github
```

### `junit`

JUnit XML compatible with Jenkins, GitLab CI, Azure DevOps, and most CI dashboards.

### `sarif`

[SARIF 2.1.0](https://sarifweb.azurewebsites.net/) — the standard format for
static analysis tools. Upload to GitHub Code Scanning for inline PR annotations:

```yaml
- name: Validate and upload SARIF
  run: sf-validate --input audit.jsonl --format sarif --output results.sarif || true
- uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
```

---

## CI Integration

### GitHub Actions

```yaml
name: Audit Log Compliance
on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.11"
      - run: pip install sf-validate

      - name: Validate (inline PR annotations)
        run: sf-validate --input 'audit-*.jsonl' --key-file .signing-key --format github

      - name: Upload SARIF (Code Scanning)
        if: always()
        run: sf-validate --input 'audit-*.jsonl' --format sarif --output sf-validate.sarif || true
      - uses: github/codeql-action/upload-sarif@v3
        if: always()
        with:
          sarif_file: sf-validate.sarif
```

### GitLab CI

```yaml
validate-audit-log:
  image: python:3.11
  script:
    - pip install sf-validate
    - sf-validate --input audit-*.jsonl --format junit --output report.xml
  artifacts:
    reports:
      junit: report.xml
```

### Jenkins

```groovy
sh 'pip install sf-validate'
sh 'sf-validate --input audit-*.jsonl --format junit --output junit-report.xml'
junit 'junit-report.xml'
```

---

## Pre-commit Integration

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/veerarag1973/sf-validate
    rev: v1.0.0
    hooks:
      - id: sf-validate
        args: [--input, 'audit-*.jsonl', --format, github]
        # Optional: add --key-file .signing-key for chain verification
```

---

## Config File

Place defaults in `pyproject.toml` or a standalone `.sf-validate.toml` anywhere in the
directory tree. CLI flags always override config file values.

```toml
# pyproject.toml
[tool.sf-validate]
format           = "text"
strict           = true
max-errors       = 100
workers          = 4
```

Or standalone `.sf-validate.toml` in the project root:

```toml
format        = "github"
strict        = true
require-chain = true
```

Supported config keys:

| Key | Type | CLI equivalent |
|-----|------|----------------|
| `format` | string | `--format` |
| `no-color` | bool | `--no-color` |
| `strict` | bool | `--strict` |
| `require-chain` | bool | `--require-chain` |
| `validate-schema` | bool | inverse of `--no-schema` |
| `verify-hmac` | bool | inverse of `--no-chain` |
| `skip-parse-errors` | bool | `--skip-parse-errors` |
| `max-errors` | int | `--max-errors` |
| `workers` | int | `--workers` |
| `event-type` | list or string | `--event-type` |
| `key-map` | string | `--key-map` |
| `output` | string | `--output` |

---

## Stdin Support

```bash
# Pipe a JSONL stream directly
cat audit.jsonl | sf-validate --input -

# Fetch and validate in one step
curl https://logs.example.com/audit.jsonl | sf-validate --input - --key-file .key
```

---

## Watch Mode

Automatically re-validates whenever matched files change:

```bash
sf-validate --input 'audit-*.jsonl' --key-file .signing-key --watch

# Adjust polling sensitivity
sf-validate --input audit.jsonl --watch --watch-interval 0.5
```

---

## Python API

```python
from sf_validate import validate_stream, format_report, ValidateOptions

options = ValidateOptions(
    org_secret="my-signing-key",
    validate_schema=True,
    verify_hmac=True,
    strict=True,
    workers=4,
)

report = validate_stream("audit-*.jsonl", options)
print(format_report(report, fmt="text"))  # color auto-detected

if not report.passed:
    print(f"Errors: {len(report.schema_errors)} schema, "
          f"{len(report.parse_errors)} parse")
    raise SystemExit(1)
```

---

## Development

```bash
git clone https://github.com/veerarag1973/sf-validate
cd sf-validate
pip install -e ".[dev]"
pytest
```

---

## License

MIT — see [LICENSE](LICENSE).


Standalone compliance gate for [SPANFORGE](https://github.com/veerarag1973/spanforge) RFC-0001 JSONL event streams.

Requires **spanforge 2.0.2** and re-uses all of its signing/validation infrastructure. The only new logic in this package is the **combined single-pass gate** (schema + HMAC + chain gaps in one command) and CI-friendly output formats.

---

## What it does

| Check | spanforge API reused |
|---|---|
| Per-event JSON schema validation (RFC-0001) | `spanforge.validate_event()` |
| HMAC-SHA256 signature verification | `spanforge.verify_chain()` |
| Chain gap detection (`prev_id` linkage) | `spanforge.verify_chain()` → `ChainVerificationResult.gaps` |
| JSONL deserialization | `spanforge.Event.from_json()` |

**New in sf-validate** (not a single combined operation in spanforge):

- `validate_stream()` — one call that runs all three checks and returns a unified `ValidationReport`
- `--format github` — GitHub Actions `::error::` / `::notice::` annotations
- `--format json` — machine-readable JSON report for downstream tooling
- `--require-chain` — hard-fail if no signing key is available
- `--skip-parse-errors` — collect bad lines instead of aborting

---

## Installation

```bash
pip install sf-validate
```

Requires Python ≥ 3.11 and `spanforge==2.0.2` (pinned as a mandatory dependency).

---

## CLI

```
sf-validate --input PATTERN [options]
```

| Flag | Description |
|---|---|
| `--input PATTERN` | Path, glob, or comma-separated list of JSONL files |
| `--key SECRET` | HMAC signing key (default: `$SPANFORGE_SIGNING_KEY`) |
| `--require-chain` | Exit 2 if no signing key is available |
| `--no-schema` | Skip per-event JSON schema validation |
| `--no-chain` | Skip HMAC chain verification |
| `--skip-parse-errors` | Collect bad lines instead of aborting |
| `--format text\|json\|github` | Output format (default: `text`) |
| `--version` | Print version and exit |

### Exit codes

| Code | Meaning |
|---|---|
| `0` | All checks passed |
| `1` | Validation failures (schema errors, tampered events, chain gaps) |
| `2` | Configuration / usage error (no files found, missing key with `--require-chain`) |

---

## Examples

```bash
# Basic schema + chain check
sf-validate --input audit.jsonl --key "$SPANFORGE_SIGNING_KEY"

# Glob over rotated log files
sf-validate --input "logs/audit-*.jsonl" --key "$SPANFORGE_SIGNING_KEY"

# CI: GitHub Actions annotations
sf-validate --input audit.jsonl --key "$KEY" --format github

# Schema only (no signing key needed)
sf-validate --input audit.jsonl --no-chain

# Machine-readable output
sf-validate --input audit.jsonl --key "$KEY" --format json | jq .passed
```

### GitHub Actions

```yaml
- name: Validate SPANFORGE audit log
  run: sf-validate --input audit.jsonl --key "${{ secrets.SPANFORGE_KEY }}" --format github
  env:
    SPANFORGE_SIGNING_KEY: ${{ secrets.SPANFORGE_KEY }}
```

---

## Python API

```python
from sf_validate import validate_stream, format_report, ValidateOptions

report = validate_stream(
    "audit-*.jsonl",
    ValidateOptions(org_secret="my-key"),
)

if not report.passed:
    print(format_report(report, fmt="json"))
    raise SystemExit(1)
```

---

## Project structure

```
src/sf_validate/
  __init__.py      — public API exports
  _validator.py    — validate_stream(), ValidationReport, ValidateOptions
  _report.py       — format_report() for text / json / github formats
  _cli.py          — sf-validate entry point
tests/
  test_validator.py
  test_cli.py
  test_report.py
```

