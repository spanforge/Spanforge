# Configuration

sf-validate reads default option values from a configuration file so you do not
have to repeat flags on every invocation.

---

## Config file locations

sf-validate looks for configuration in order, **stopping at the first file
found** — once a match is located, no further files are searched and no values
are merged from other locations.

1. **`.sf-validate.toml`** — standalone project config. The top-level table
   maps directly to option names.
2. **`pyproject.toml`** — `[tool.sf-validate]` section.
3. **`~/.config/sf-validate/config.toml`** — user-level fallback.

The search starts from the **current working directory** and walks up toward the
filesystem root. This means you can have a project-level config in the repo root
that is automatically found from any subdirectory.

---

## Precedence

```
CLI flag  >  config file  >  $SPANFORGE_SIGNING_KEY env var  >  built-in default
```

CLI flags always win. The config file sets defaults for when a flag is not
provided on the command line.

---

## `pyproject.toml`

```toml
[tool.sf-validate]
format            = "text"        # "text" | "json" | "github" | "junit" | "sarif"
no-color          = false
strict            = false
require-chain     = false
validate-schema   = true          # false = --no-schema
verify-hmac       = true          # false = --no-chain
skip-parse-errors = false
max-errors        = 100           # omit for no limit
workers           = 4             # omit for auto (min(file_count, 4))
event-type        = []            # list of event_type strings
key-map           = ""            # "EVT-rot001:secret1,EVT-rot002:secret2"
output            = ""            # path to write report file
```

---

## `.sf-validate.toml`

Identical key names, but without the `[tool.sf-validate]` section header:

```toml
format            = "json"
no-color          = true
require-chain     = true
skip-parse-errors = true
max-errors        = 50
workers           = 8
output            = "reports/validation.json"
```

This file takes priority over `pyproject.toml` when both exist in the same
directory.

---

## `~/.config/sf-validate/config.toml`

User-level defaults applied across all projects. Same format as
`.sf-validate.toml`.

```toml
no-color = true      # disable color globally on this machine
format   = "text"
```

---

## Key reference

| Config key | CLI equivalent | Type | Default |
|------------|----------------|------|---------|
| `format` | `--format` | string | `"text"` |
| `no-color` | `--no-color` | bool | `false` |
| `strict` | `--strict` | bool | `false` |
| `require-chain` | `--require-chain` | bool | `false` |
| `validate-schema` | *(inverted: `--no-schema`)* | bool | `true` |
| `verify-hmac` | *(inverted: `--no-chain`)* | bool | `true` |
| `skip-parse-errors` | `--skip-parse-errors` | bool | `false` |
| `max-errors` | `--max-errors` | int | *(unlimited)* |
| `workers` | `--workers` | int | `auto` |
| `event-type` | `--event-type` | list of strings | `[]` (all) |
| `key-map` | `--key-map` | string | `""` |
| `output` | `--output` | string | `""` |

!!! note
    `--input`, `--key`, `--key-file`, `--per-file-chain`, `--watch`, and
    `--watch-interval` are **not** configurable via the config file — they must
    be provided on the command line. All other flags including `key-map` can be
    set in the config file.

---

## Examples

### Team default: JSON output with strict chain

`pyproject.toml` in the repository root:

```toml
[tool.sf-validate]
format        = "json"
require-chain = true
workers       = 4
output        = "test-reports/sf-validate.json"
```

Then in CI you only need:

```bash
sf-validate --input 'logs/**/*.jsonl' --key-file .signing-key
# format, workers, output are read from pyproject.toml
```

### Large-scale log validation

`.sf-validate.toml`:

```toml
skip-parse-errors = true
max-errors        = 25
workers           = 16
format            = "json"
output            = "validate-report.json"
```

### Developer workstation

`~/.config/sf-validate/config.toml`:

```toml
# Prefer plain text with no color (terminal doesn't support it)
no-color = true
format   = "text"
```
