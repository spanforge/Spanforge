# sf-validate

[![CI](https://github.com/veerarag1973/sf-validate/actions/workflows/ci.yml/badge.svg)](https://github.com/veerarag1973/sf-validate/actions)
[![PyPI](https://img.shields.io/pypi/v/sf-validate)](https://pypi.org/project/sf-validate/)
[![Python](https://img.shields.io/pypi/pyversions/sf-validate)](https://pypi.org/project/sf-validate/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**sf-validate** is a compliance gate for [SPANFORGE](https://spanforge.io) RFC-0001 JSONL audit-log streams. It combines **per-event JSON schema validation** and **HMAC chain verification** into a single auditable pass — something that spanforge's individual `validate` and `audit verify` commands do not provide as a unified, CI-friendly operation.

---

## Why sf-validate?

SPANFORGE provides two separate tools:

- `spanforge validate` — validates events against the RFC-0001 JSON schema
- `spanforge audit verify` — verifies the HMAC chain and gap detection

Neither runs both checks in a single pass, and neither produces CI-native output formats.

**sf-validate** bridges that gap:

| Feature | spanforge CLI | sf-validate |
|---|---|---|
| Per-event schema validation | ✓ | ✓ |
| HMAC chain verification | ✓ | ✓ |
| Single combined pass | ✗ | ✓ |
| GitHub Actions annotations | ✗ | ✓ |
| SARIF 2.1.0 (Code Scanning) | ✗ | ✓ |
| JUnit XML (CI dashboards) | ✗ | ✓ |
| Machine-readable JSON | ✗ | ✓ |
| Config file (pyproject.toml) | ✗ | ✓ |
| Watch mode | ✗ | ✓ |
| Shell completions | ✗ | ✓ |
| Parallel file processing | ✗ | ✓ |

---

## Quick Example

```bash
# Validate schema + verify HMAC chain in one command
sf-validate --input audit.jsonl --key "$SPANFORGE_SIGNING_KEY"
```

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 342
Schema errors: 0
Tampered     : 0
Gaps         : 0
Duration     : 8.4 ms

Result       : PASS
```

Exit code `0` on success, `1` on validation failure, `2` on configuration error.

---

## At a Glance

```
docs/
├── getting-started.md    Installation, quick start, first validation
├── cli-reference.md      Complete flag reference and exit codes
├── output-formats.md     text · json · github · junit · sarif
├── configuration.md      Config file (pyproject.toml / .sf-validate.toml)
├── ci-integration.md     GitHub Actions, GitLab CI, Jenkins, Azure DevOps
├── pre-commit.md         Git pre-commit hook setup
├── watch-mode.md         Auto re-validate on file change
├── shell-completions.md  bash / zsh / fish completions
├── python-api.md         Python library reference
└── architecture.md       How sf-validate works internally
```

---

## Installation

```bash
pip install sf-validate
```

See [Getting Started](getting-started.md) for full installation options.

---

## Requirements

- Python **3.11** or later
- `spanforge==2.0.2` (installed automatically)
