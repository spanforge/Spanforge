# Architecture

This page describes how sf-validate is structured internally and how it
delegates to spanforge.

---

## Overview

sf-validate is a **thin orchestration layer** on top of the
[spanforge](https://pypi.org/project/spanforge/) library. All cryptographic
chain verification and RFC-0001 schema validation logic lives in spanforge;
sf-validate adds:

- A **combined single-pass gate** (schema + chain in one command)
- **Parallel file reading** for glob workloads
- Five **output formatters** (text, JSON, GitHub, JUnit, SARIF)
- A **config file system** (auto-discovery, pyproject.toml, user config)
- A **watch mode** (polling + optional watchdog kernel events)
- **Shell completions** (bash, zsh, fish)
- A fully typed **Python API** (py.typed, mypy --strict clean)

---

## Module map

```
src/sf_validate/
├── __init__.py          Public API surface  (validate_stream, format_report, …)
├── _validator.py        Core validation logic, data classes (ValidateOptions, ValidationReport, …)
├── _report.py           Output formatters (text, json, github, junit, sarif)
├── _config.py           Config file auto-discovery and loading
├── _cli.py              CLI entry point, watch mode, shell completions
├── _color.py            ANSI colour helpers (respects NO_COLOR)
├── _version.py          Package version constant
└── py.typed             PEP 561 marker (mypy / pyright stub support)
```

### `_validator.py`

The heart of sf-validate. Responsibilities:

1. **Pattern expansion** (`_collect_files`) — glob → sorted file list.
2. **Parallel file reading** (`ThreadPoolExecutor`) — reads events into
   `(lineno, Event)` tuples. Each file gets its own thread up to `workers`.
3. **Schema validation** (`spanforge.validate_event`) — validates each event
   against the RFC-0001 JSON schema.
4. **Chain verification** (`spanforge.verify_chain`) — HMAC-SHA256 over the
   sequential event list, detecting tampering and gaps.
5. **`passed` synthesis** — aggregates parse errors, schema errors, and chain
   result into a single `bool`.

### `_report.py`

Five formatter functions, one per output format. Each takes a `ValidationReport`
and returns a `str`. The `format_report()` public function dispatches to the
correct formatter.

### `_config.py`

Walks from `cwd` upward looking for `.sf-validate.toml` then `pyproject.toml`,
falling back to `~/.config/sf-validate/config.toml`. Uses the stdlib `tomllib`
(Python 3.11+).

### `_cli.py`

- Builds an `argparse.ArgumentParser` with all flags.
- Resolves signing key from `--key`, `--key-file`, or `SPANFORGE_SIGNING_KEY`.
- Merges config file defaults with CLI flags (CLI wins).
- Dispatches to `validate_stream()`, then `format_report()`.
- Implements watch mode (`_watch_loop`) with polling and optional watchdog.
- Pre-argv scan for `--generate-completion` (must run before argparse sees the
  required `--input` flag).

---

## Two-pass design

Despite being called a "single-pass gate", validation actually has two internal
phases:

```
Phase 1 — Parallel file reading
  ┌──────────────────────────────────────────────────┐
  │  Thread 1: read file A → list[(lineno, Event)]   │
  │  Thread 2: read file B → list[(lineno, Event)]   │
  │  Thread N: read file N → list[(lineno, Event)]   │
  └──────────────────────────────────────────────────┘
           │  (results merged in sorted file order)
           ▼
Phase 2 — Sequential schema + chain validation
  ┌──────────────────────────────────────────────────┐
  │  for each event (in order):                       │
  │    – spanforge.validate_event(event) → SchemaError│
  │    – accumulate events for chain               │
  │  spanforge.verify_chain(events, key) → ChainResult│
  └──────────────────────────────────────────────────┘
```

File reading is parallelised because I/O is the bottleneck for many small files.
Schema validation and chain verification must remain sequential because:

- Schema errors reference ordered line numbers.
- HMAC chain verification is inherently order-dependent (each event's hash
  includes the previous event's signature).

---

## spanforge delegation

sf-validate delegates to spanforge for:

| Responsibility | spanforge API |
|---------------|---------------|
| Event deserialization | `DeserializationError` → caught as `ParseError` |
| Per-event schema validation | `spanforge.validate_event()` → `SchemaValidationError` |
| HMAC chain verification | `spanforge.verify_chain()` → `ChainVerificationResult` |
| Key rotation support | `spanforge.verify_chain(key_map=...)` |
| Multi-tenant key resolution | `spanforge.verify_chain(key_resolver=...)` |
| Schema version constant | `spanforge.SCHEMA_VERSION` |
| Conformance profile | `spanforge.CONFORMANCE_PROFILE` |

sf-validate does **not** reimplement any cryptographic logic. All signing and
schema constants come directly from spanforge.

---

## SARIF rule IDs

| Rule ID | Name | Trigger |
|---------|------|---------|
| `SF0001` | `ParseError` | A JSONL line failed to deserialize |
| `SF0002` | `SchemaError` | An event failed RFC-0001 schema validation |
| `SF0003` | `ChainError` | HMAC chain tampering or gap detected |

---

## Data flow summary

```
user: sf-validate --input 'logs/*.jsonl' --key-file .key

  _cli.py
    │ parse flags + merge config
    │ resolve signing key
    ▼
  _validator.validate_stream("logs/*.jsonl", ValidateOptions(...))
    │ expand glob → [file1, file2, …]
    │ ThreadPoolExecutor → read each file → list[(lineno, Event)]
    │ merge in sorted-file order
    │ for each event: spanforge.validate_event() → collect SchemaError
    │ spanforge.verify_chain(all_events, key) → ChainVerificationResult
    │ synthesize ValidationReport.passed
    ▼
  ValidationReport
    │
  _report.format_report(report, fmt="text", color=True)
    │
  stdout   (+ optional --output file, always no-color)
```

---

## Dependency tree

```
sf-validate 1.0.0
├── spanforge>=2.0.2        (required, vendored schema + crypto logic)
└── watchdog>=4             (optional, install with sf-validate[watch])
```

Development dependencies (not installed by end users):

```
pytest>=8, pytest-cov
mypy>=1.10
ruff
```
