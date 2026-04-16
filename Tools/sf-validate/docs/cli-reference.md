# CLI Reference

Complete reference for the `sf-validate` command-line interface.

## Synopsis

```
sf-validate --input PATTERN [options]
```

`--input` is the only required flag. All other flags are optional and can be
persisted in a [config file](configuration.md) so you don't have to repeat them.

---

## Flags

### `--input PATTERN`

**Required.** One of:

- A plain file path: `audit.jsonl`
- A glob pattern: `'logs/**/*.jsonl'` (quote to prevent shell expansion)
- A comma-separated list: `'audit-01.jsonl,audit-02.jsonl'`
- `-` to read from **stdin**: `cat audit.jsonl | sf-validate --input -`

All matched files are processed in sorted order. Non-matching globs produce a
configuration error (exit code 2).

---

### Signing / Chain flags

#### `--key SECRET`

HMAC signing key for chain verification. When omitted, chain verification is
skipped (unless `--require-chain` is set).

> **Security warning:** The key value is visible in process listings (`ps aux`)
> and shell history. Prefer `$SPANFORGE_SIGNING_KEY` (environment variable) or
> `--key-file` for production use.

#### `--key-file PATH`

Read the HMAC signing key from `PATH` (one line; trailing whitespace stripped).
This is the recommended way to supply a key because the secret is never exposed
in process listings or shell history.

```bash
echo "my-signing-key" > .signing-key
chmod 600 .signing-key
sf-validate --input audit.jsonl --key-file .signing-key
```

Key resolution order (highest priority first):

1. `--key-file`
2. `--key`
3. `$SPANFORGE_SIGNING_KEY` environment variable

#### `--require-chain`

Exit with code `2` if no signing key is available from any source. Use this in
secure pipelines to ensure chain verification is never silently skipped.

```bash
sf-validate --input audit.jsonl --require-chain
# error: --require-chain is set but no signing key was provided.
```

#### `--no-chain`

Skip HMAC chain verification entirely. Only schema validation is performed.
Useful for environments where events are not signed.

#### `--key-map PAIRS`

Comma-separated `EVENT_ID:SECRET` pairs for key-rotation scenarios. When a
rotation event is encountered, sf-validate switches to the new key for
subsequent chain verification.

```bash
sf-validate --input audit.jsonl \
  --key "$OLD_KEY" \
  --key-map "EVT-rotation-001:$NEW_KEY"
```

#### `--per-file-chain`

Treat each matched file as an independent HMAC chain rather than concatenating
all events into a single chain. Required when validating log-rotated files where
each file was sealed with its own chain.

```bash
sf-validate --input 'logs/audit-*.jsonl' --key-file .key --per-file-chain
```

Per-file chain results are reported individually. The overall `passed` flag is
`true` only if every file's chain is valid.

#### `--strict`

When no signing key is available and `--require-chain` is not set, the chain
check is normally skipped silently. With `--strict`, a skipped chain check is
treated as a failure (exit code 1) rather than a silent skip.

Has no effect when `--no-chain` is set.

---

### Schema / Parsing flags

#### `--no-schema`

Skip per-event JSON schema validation. Only chain verification is performed.

#### `--skip-parse-errors`

By default, a single malformed JSONL line immediately aborts validation with an
exception. With `--skip-parse-errors`, bad lines are collected as parse errors
in the report and validation continues to the end of the file.

```bash
sf-validate --input audit.jsonl --skip-parse-errors
# Parse errors : 3
#   audit.jsonl:12  Deserialization failed: ...
```

#### `--max-errors N`

Stop collecting errors and return early once `N` total errors (parse + schema)
have been found. Useful for very large log files where you only need to know
that errors exist, not enumerate all of them.

```bash
sf-validate --input huge-audit.jsonl --skip-parse-errors --max-errors 10
```

#### `--event-type TYPES`

Comma-separated list of event type strings to validate. Events with other types
are counted in `total_events` but are not schema-validated or chain-verified.

```bash
sf-validate --input audit.jsonl \
  --event-type "llm.trace.span.completed,llm.audit.chain.rotated"
```

---

### Output flags

#### `--format FORMAT`

Output format. Choices: `text` (default), `json`, `github`, `junit`, `sarif`.

See [Output Formats](output-formats.md) for full details and examples.

#### `--output FILE`

Write the formatted report to `FILE` in addition to stdout. The file is always
written without ANSI color codes, even if stdout has color enabled.

```bash
sf-validate --input audit.jsonl --format json --output report.json
```

#### `-v` / `--verbose`

Print the expanded list of matched files before the report. Useful when using
globs to confirm which files are being validated.

```
Matched 4 file(s):
  logs/audit-2026-04-13.jsonl
  logs/audit-2026-04-14.jsonl
  logs/audit-2026-04-15.jsonl
  logs/audit-2026-04-16.jsonl

sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
...
```

#### `-q` / `--quiet`

Print only a single-line PASS/FAIL summary. All error details are suppressed.
Useful in scripts that only care about the exit code and a brief status.

```bash
sf-validate --input audit.jsonl --key-file .key -q
# PASS  342 events  1 files
```

#### `--no-color`

Disable ANSI color codes in `text` format output.

Also respected via environment variables (no flag needed):

- `NO_COLOR` — standard convention (https://no-color.org/)
- `SF_VALIDATE_NO_COLOR` — sf-validate-specific override

Color is automatically disabled when stdout is not a terminal (e.g. piped or redirected).

---

### Performance flags

#### `--workers N`

Number of parallel file-reading threads for glob workloads. Default is `auto`:

- 1 thread for a single file
- `min(file_count, 4)` threads for multiple files

Set higher when validating very large numbers of files:

```bash
sf-validate --input 'archive/**/*.jsonl' --workers 8
```

Note: Only file reading is parallelised. Schema validation and chain verification
remain sequential because they depend on event ordering.

---

### Watch mode flags

#### `--watch`

Re-validate whenever matched files change. Polls for file modifications.
Press `Ctrl+C` to stop.

Cannot be combined with `--input -` (stdin).

See [Watch Mode](watch-mode.md) for full details.

#### `--watch-interval SECONDS`

Polling interval in seconds for `--watch` mode. Default: `1.0`.

Only relevant when `watchdog` is not installed (polling fallback). When watchdog
is available (install with `pip install "sf-validate[watch]"`), file changes are
detected via kernel events regardless of this setting.

---

### Utility flags

#### `--version`

Print the sf-validate version and the bundled spanforge version, then exit.

```bash
sf-validate --version
# sf-validate 1.0.0  (spanforge 2.0.2)
```

#### `--generate-completion SHELL`

Print a shell completion script for `bash`, `zsh`, or `fish` to stdout and exit.

```bash
# bash
eval "$(sf-validate --generate-completion bash)"

# zsh
eval "$(sf-validate --generate-completion zsh)"

# fish
sf-validate --generate-completion fish | source
```

See [Shell Completions](shell-completions.md) for persistent setup instructions.

---

## Exit Codes

| Code | Meaning |
|------|---------|
| `0` | All checks passed (schema valid, chain intact, no parse errors) |
| `1` | Validation failures: schema errors, chain tampered/gapped, or parse errors |
| `2` | Configuration error: missing required key, file not found, bad `--key-file`, conflicting flags |

---

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SPANFORGE_SIGNING_KEY` | HMAC signing key (lowest priority after `--key-file` and `--key`) |
| `NO_COLOR` | Disable ANSI color output (any non-empty value) |
| `SF_VALIDATE_NO_COLOR` | Disable ANSI color output (sf-validate-specific) |

---

## Flag Precedence

When the same option is set in multiple places, the order of precedence
(highest wins) is:

1. CLI flag
2. Config file (`pyproject.toml` `[tool.sf-validate]` or `.sf-validate.toml`)
3. Environment variable (for `SPANFORGE_SIGNING_KEY`)
4. Built-in default
