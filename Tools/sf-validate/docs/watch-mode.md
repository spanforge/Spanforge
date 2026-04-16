# Watch Mode

Watch mode re-validates your log files automatically whenever they change.
It is ideal for local development workflows where a service is writing events
and you want immediate feedback on schema/chain correctness.

---

## Basic usage

```bash
sf-validate --input audit.jsonl --key-file .signing-key --watch
```

sf-validate validates the file once immediately, then re-validates every time
the file is modified. Press **Ctrl+C** to stop.

---

## How it works

sf-validate supports two backends for detecting file changes:

### Polling (default)

When `watchdog` is **not installed**, sf-validate polls the file system every
`--watch-interval` seconds (default: 1.0) for modification-time changes.

This works everywhere but is slightly less responsive and uses a small amount
of CPU proportional to the interval.

### Watchdog (kernel event–driven)

When `watchdog` is installed, sf-validate uses the operating-system's native
file-change notification API:

| OS | Mechanism |
|----|-----------|
| Linux | `inotify` |
| macOS | `FSEvents` |
| Windows | `ReadDirectoryChangesW` |

This is zero-CPU when files are not changing and responds in milliseconds.

### Installing watchdog

```bash
pip install "sf-validate[watch]"
```

or

```bash
pip install watchdog>=4
```

sf-validate automatically uses watchdog when it is importable. No flags are
required — detection is transparent.

---

## Watch interval

```bash
sf-validate --input audit.jsonl --watch --watch-interval 2.5
```

Controls the polling interval in seconds (default: `1.0`). Only relevant when
watchdog is **not** installed. When watchdog is active, file changes are
detected immediately regardless of this setting.

---

## Watching multiple files

Use a glob pattern:

```bash
sf-validate --input 'logs/**/*.jsonl' --watch
```

All matched files are re-validated whenever any of them changes. New files
matching the glob that appear after watch starts are **not** automatically
picked up — restart sf-validate to include them.

---

## Combining watch with other flags

Watch mode respects all other flags:

```bash
# Quiet watch with chain verification
sf-validate --input 'logs/*.jsonl' --key-file .signing-key --watch -q

# Watch with per-file chain and skip parse errors
sf-validate --input 'logs/*.jsonl' \
  --key-file .signing-key \
  --per-file-chain \
  --skip-parse-errors \
  --watch

# Write each validation result to a JSON file
sf-validate --input audit.jsonl \
  --format json \
  --output latest-result.json \
  --watch
```

---

## Limitations

- `--watch` cannot be combined with `--input -` (stdin).
- Watchdog detects changes to **existing** files only. Files created after watch
  starts require a restart.
- On network file systems (NFS, SMB), kernel events may not be delivered reliably;
  polling may be more reliable in those environments.

---

## Example output (quiet watch)

```
PASS  342 events  1 files
... waiting for changes (Ctrl+C to stop) ...
FAIL  343 events  1 files  [1 schema error]
... waiting for changes (Ctrl+C to stop) ...
PASS  344 events  1 files
... waiting for changes (Ctrl+C to stop) ...
^C
```
