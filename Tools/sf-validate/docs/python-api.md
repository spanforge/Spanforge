# Python API Reference

sf-validate exposes a public Python API for embedding validation into your own
tools, services, or test suites.

```python
import sf_validate
```

---

## `validate_stream()`

```python
def validate_stream(
    pattern: str,
    options: ValidateOptions | None = None,
) -> ValidationReport: ...
```

Run the combined schema + HMAC chain validation gate over one or more JSONL
files.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `pattern` | `str` | File path, glob, or comma-separated list. `-` reads from stdin. |
| `options` | `ValidateOptions \| None` | Configuration. Defaults to `ValidateOptions()` (schema only, no chain). |

**Returns:** [`ValidationReport`](#validationreport)

**Raises:**

- `FileNotFoundError` — a literal path in `pattern` does not exist.
- `RuntimeError` — `require_chain` is `True` but no signing key was supplied.

### Example

```python
from sf_validate import validate_stream, ValidateOptions

report = validate_stream(
    "logs/**/*.jsonl",
    ValidateOptions(
        org_secret="my-signing-key",
        require_chain=True,
        skip_parse_errors=True,
    ),
)

if not report.passed:
    for err in report.schema_errors:
        print(f"{err.filename}:{err.lineno}  {err.field}: {err.message}")
    for pe in report.parse_errors:
        print(f"{pe.filename}:{pe.lineno}  {pe.reason}")
```

---

## `format_report()`

```python
def format_report(
    report: ValidationReport,
    fmt: OutputFormat = "text",
    color: bool = False,
) -> str: ...
```

Convert a `ValidationReport` to a formatted string.

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| `report` | `ValidationReport` | The report to format. |
| `fmt` | `OutputFormat` | One of `"text"`, `"json"`, `"github"`, `"junit"`, `"sarif"`. Default: `"text"`. |
| `color` | `bool` | Enable ANSI colour in `text` format. Ignored for other formats. Default: `False`. |

**Returns:** `str` — the formatted report.

### Example

```python
from sf_validate import validate_stream, format_report

report = validate_stream("audit.jsonl")
print(format_report(report, fmt="json"))
```

---

## `load_config()`

```python
def load_config() -> dict[str, Any]: ...
```

Load sf-validate configuration from the nearest config file (`.sf-validate.toml`,
`pyproject.toml` `[tool.sf-validate]`, or `~/.config/sf-validate/config.toml`).

Returns an empty dict if no config file is found or the file cannot be parsed.

See [Configuration](configuration.md) for the full key reference.

### Example

```python
from sf_validate import load_config, ValidateOptions

cfg = load_config()
options = ValidateOptions(
    validate_schema=cfg.get("validate-schema", True),
    verify_hmac=cfg.get("verify-hmac", True),
    skip_parse_errors=cfg.get("skip-parse-errors", False),
    max_errors=cfg.get("max-errors"),
)
```

---

## `ValidateOptions`

Dataclass with all options for `validate_stream()`.

```python
@dataclass
class ValidateOptions:
    org_secret: str | None = None
    key_map: dict[str, str] | None = None
    key_resolver: KeyResolver | None = None
    require_chain: bool = False
    validate_schema: bool = True
    verify_hmac: bool = True
    per_file_chain: bool = False
    skip_parse_errors: bool = False
    max_errors: int | None = None
    event_type_filter: list[str] | None = None
    strict: bool = False
    workers: int | None = None
```

### Field reference

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `org_secret` | `str \| None` | `None` | HMAC signing key. When `None`, chain check is skipped unless `require_chain=True`. |
| `key_map` | `dict[str, str] \| None` | `None` | `{rotation_event_id: new_secret}` for key-rotation support. |
| `key_resolver` | `KeyResolver \| None` | `None` | spanforge `KeyResolver` for multi-tenant key resolution. |
| `require_chain` | `bool` | `False` | Treat missing signing key as an error. |
| `validate_schema` | `bool` | `True` | Run RFC-0001 per-event JSON schema validation. |
| `verify_hmac` | `bool` | `True` | Run HMAC chain verification. |
| `per_file_chain` | `bool` | `False` | Treat each file as an independent HMAC chain. |
| `skip_parse_errors` | `bool` | `False` | Collect bad JSONL lines as `ParseError` rather than aborting. |
| `max_errors` | `int \| None` | `None` | Stop after this many total errors (parse + schema). |
| `event_type_filter` | `list[str] \| None` | `None` | Validate only these event types (others are counted but not checked). |
| `strict` | `bool` | `False` | Treat a skipped chain check as a failure. |
| `workers` | `int \| None` | `None` | File-reading thread count. `None` = auto. |

---

## `ValidationReport`

Dataclass returned by `validate_stream()`.

```python
@dataclass
class ValidationReport:
    files: list[str]
    total_events: int
    parse_errors: list[ParseError]
    schema_errors: list[SchemaError]
    chain: ChainVerificationResult | None
    per_file_chains: dict[str, ChainVerificationResult]
    schema_version: str
    conformance_profile: str
    passed: bool
    duration_ms: float | None
```

### Field reference

| Field | Type | Description |
|-------|------|-------------|
| `files` | `list[str]` | Paths that were processed (expanded from glob). |
| `total_events` | `int` | Total number of successfully parsed events. |
| `parse_errors` | `list[ParseError]` | Lines that failed to deserialize. |
| `schema_errors` | `list[SchemaError]` | Per-event RFC-0001 schema violations. |
| `chain` | `ChainVerificationResult \| None` | Aggregate HMAC chain result. `None` when no key was available. |
| `per_file_chains` | `dict[str, ChainVerificationResult]` | Per-file chain results (populated when `per_file_chain=True`). |
| `schema_version` | `str` | spanforge schema version constant (e.g. `"2.0"`). |
| `conformance_profile` | `str` | spanforge conformance profile (e.g. `"RFC-0001-STRICT"`). |
| `passed` | `bool` | `True` only when all checks pass. |
| `duration_ms` | `float \| None` | Wall-clock validation time in milliseconds. |

---

## `SchemaError`

A single per-event schema validation failure.

```python
@dataclass(frozen=True)
class SchemaError:
    lineno: int
    event_id: str | None
    field: str
    message: str
    filename: str = ""
```

| Field | Type | Description |
|-------|------|-------------|
| `lineno` | `int` | 1-based line number in source JSONL. |
| `event_id` | `str \| None` | Event `event_id` field, or `None` if unavailable. |
| `field` | `str` | Dotted JSON path to the failing field. |
| `message` | `str` | Human-readable reason string. |
| `filename` | `str` | Path to the JSONL file. |

---

## `ParseError`

A JSONL line that could not be deserialized into an `Event`.

```python
@dataclass(frozen=True)
class ParseError:
    lineno: int
    reason: str
    filename: str
```

| Field | Type | Description |
|-------|------|-------------|
| `lineno` | `int` | 1-based line number in source JSONL. |
| `reason` | `str` | The underlying deserialization error message. |
| `filename` | `str` | Path to the file containing the bad line. |

---

## `OutputFormat`

Type alias for the supported output format strings:

```python
OutputFormat = Literal["text", "json", "github", "junit", "sarif"]
```

---

## Full example — validate and emit SARIF

```python
import sys
from sf_validate import validate_stream, format_report, ValidateOptions

options = ValidateOptions(
    org_secret="my-signing-key",
    require_chain=True,
    skip_parse_errors=True,
    workers=4,
)

report = validate_stream("logs/**/*.jsonl", options)

sarif_output = format_report(report, fmt="sarif")
with open("results.sarif", "w") as f:
    f.write(sarif_output)

if not report.passed:
    print(
        f"Validation failed: {len(report.schema_errors)} schema error(s), "
        f"{len(report.parse_errors)} parse error(s)",
        file=sys.stderr,
    )
    sys.exit(1)
```

---

## Type stubs

sf-validate ships a `py.typed` marker so mypy and pyright can type-check
code that imports from it without any special configuration.
