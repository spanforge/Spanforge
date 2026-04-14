# spanforge-validate

**Reference validation CLI and Python SDK for the [spanforge](https://github.com/veerarag1973/SpanForgeValidate) event standard.**

[![CI](https://github.com/veerarag1973/SpanForgeValidate/actions/workflows/tests.yml/badge.svg)](https://github.com/veerarag1973/SpanForgeValidate/actions)

---

## Overview

`spanforge-validate` validates **JSON or JSONL event streams** against the spanforge schema.
It can be used as a **CLI tool** for CI pipelines or as a **Python library** for programmatic validation.

If an event stream passes validation, it is considered **spanforge compliant**.

---

## Installation

```bash
pip install spanforge-validate
```

For development:

```bash
git clone https://github.com/veerarag1973/SpanForgeValidate.git
cd SpanForgeValidate
pip install -e ".[dev]"
```

---

## Quick Start — CLI

```bash
# Validate a JSONL stream
spanforge-validate events.jsonl

# Validate a JSON array
spanforge-validate events.json

# JSON output for CI / downstream scripts
spanforge-validate events.jsonl --json

# Read from STDIN
cat events.jsonl | spanforge-validate

# OpenTelemetry compatibility: accept camelCase field names
spanforge-validate events.jsonl --otel

# Pin to a specific schema version
spanforge-validate events.jsonl --schema-version 0.1

# Cryptographic HMAC-SHA256 signature verification
spanforge-validate events.jsonl --key-file signing.key

# Export the spanforge event JSON Schema (Draft 2020-12)
spanforge-validate --export-schema > spanforge-schema.json
```

---

## Quick Start — Python SDK

```python
from spanforge_validate.validator.engine import validate_event, validate_stream
from spanforge_validate.validator.input_parser import iter_events
from spanforge_validate.validator.context import ValidationContext

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

# Validate a JSONL file
result = validate_stream(iter_events("events.jsonl"))
print(f"{result.valid}/{result.events_checked} valid")

# OTel mode + HMAC key
ctx = ValidationContext(otel_mode=True, key_bytes=open("signing.key", "rb").read().rstrip())
result = validate_stream(iter_events("events.jsonl"), ctx)
```

---

## Exit Codes

| Code | Meaning                          |
|------|----------------------------------|
| 0    | All events valid                 |
| 1    | Validation errors present        |
| 2    | Input parse or configuration error |
| 3    | Internal validator error         |

---

## Documentation

| Document | Description |
|----------|-------------|
| [docs/tutorial.md](docs/tutorial.md) | Step-by-step CLI and SDK tutorial |
| [docs/sdk.md](docs/sdk.md) | Full Python SDK API reference |
| [docs/errors.md](docs/errors.md) | Error code reference |
| [docs/ci.md](docs/ci.md) | CI integration guide (GitHub Actions, GitLab, CircleCI) |
| [docs/performance.md](docs/performance.md) | Benchmark results and performance notes |
| [SpanForgeValidatespec.md](SpanForgeValidatespec.md) | Full specification |

---

## Running Tests

```bash
pytest
```

Targets ≥95% coverage. Current: **100%** across 639 tests.

---

## Status

`v1.0.0` — Fully implemented. All validation features complete including OTel compatibility,
HMAC-SHA256 signature verification, JSON Schema export, and schema version negotiation.
