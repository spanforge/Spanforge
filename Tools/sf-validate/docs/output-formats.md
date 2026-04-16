# Output Formats

sf-validate supports five output formats, selectable via `--format FORMAT`.

---

## `text` (default)

Human-readable, colour-coded terminal output. Ideal for interactive use and
CI logs where readability matters.

!!! note "Conditional fields"
    Several fields only appear when relevant:

    - **`Chain check : skipped`** — shown when no signing key is supplied and no
      chain check was performed.  The `Tampered`, `Gaps`, `First tampered event`,
      and `Duration` lines are **not** shown in this case.
    - **`Tampered`, `Gaps`, `First tampered event`** — shown only when a chain
      check ran (i.e. a signing key was provided via `--key`, `--key-file`, or
      `SPANFORGE_SIGNING_KEY`).
    - **`Parse errors`** and **`Schema errors`** detail blocks — only shown when
      there are errors to report.
    - **`Duration`** — shown only when a chain check ran.

### Passing example (no signing key)

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 342
Schema errors: 0
Chain check  : skipped (no signing key)

Result       : PASS
```

### Passing example (with chain verification)

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 342
Schema errors: 0
Tampered     : 0
Gaps         : 0
Duration     : 183.4 ms

Result       : PASS
```

### Failing example

```
sf-validate  (spanforge schema 2.0 / RFC-0001-STRICT)
Files        : 1
Events       : 342
Parse errors : 1
  audit.jsonl:12  Deserialization failed: Expecting ',' delimiter
Schema errors: 1
  audit.jsonl:line 27  [EVT-abc123]  session_id: 'session_id' is a required property
Tampered     : 1
Gaps         : 0
First tampered event: EVT-def456
Duration     : 301.7 ms

Result       : FAIL
```

### Color control

Color is automatically disabled when stdout is not a terminal. You can also
disable it explicitly:

- `--no-color` CLI flag
- `NO_COLOR=1` environment variable (follows https://no-color.org/)
- `SF_VALIDATE_NO_COLOR=1` environment variable

---

## `json`

Machine-readable JSON. Suitable for further processing by scripts or other tools.

```bash
sf-validate --input audit.jsonl --format json | jq .passed
```

### Example output (passing)

```json
{
  "sf_validate_version": "1.0.0",
  "schema_version": "2.0",
  "conformance_profile": "RFC-0001-STRICT",
  "files": ["audit.jsonl"],
  "total_events": 342,
  "passed": true,
  "duration_ms": 183.4,
  "parse_errors": [],
  "schema_errors": [],
  "chain": {
    "valid": true,
    "tampered_count": 0,
    "first_tampered": null,
    "gaps": [],
    "tombstone_count": 0,
    "tombstone_event_ids": []
  },
  "per_file_chains": {}
}
```

### Example output (with errors)

```json
{
  "sf_validate_version": "1.0.0",
  "schema_version": "2.0",
  "conformance_profile": "RFC-0001-STRICT",
  "files": ["audit.jsonl"],
  "total_events": 342,
  "passed": false,
  "duration_ms": 301.7,
  "parse_errors": [
    {
      "lineno": 12,
      "filename": "audit.jsonl",
      "reason": "Deserialization failed: Expecting ',' delimiter"
    }
  ],
  "schema_errors": [
    {
      "lineno": 27,
      "filename": "audit.jsonl",
      "event_id": "EVT-abc123",
      "field": "session_id",
      "message": "'session_id' is a required property"
    }
  ],
  "chain": {
    "valid": false,
    "tampered_count": 1,
    "first_tampered": "EVT-def456",
    "gaps": [],
    "tombstone_count": 0,
    "tombstone_event_ids": []
  },
  "per_file_chains": {}
}
```

### Top-level field reference

| Field | Type | Description |
|-------|------|-------------|
| `sf_validate_version` | `str` | sf-validate version |
| `schema_version` | `str` | spanforge schema version (e.g. `"2.0"`) |
| `conformance_profile` | `str` | Conformance profile (e.g. `"RFC-0001-STRICT"`) |
| `files` | `array` of `str` | File paths processed (expanded from glob) |
| `total_events` | `int` | Total number of successfully parsed events |
| `passed` | `bool` | `true` if all checks passed |
| `duration_ms` | `float` \| `null` | Wall-clock validation time in ms |
| `parse_errors` | array | Lines that failed to deserialize |
| `parse_errors[].lineno` | `int` | 1-based line number |
| `parse_errors[].filename` | `str` | Source file path |
| `parse_errors[].reason` | `str` | Deserialization error message |
| `schema_errors` | array | Per-event RFC-0001 schema violations |
| `schema_errors[].lineno` | `int` | 1-based line number |
| `schema_errors[].filename` | `str` | Source file path |
| `schema_errors[].event_id` | `str` \| `null` | Event `event_id` field |
| `schema_errors[].field` | `str` | Dotted JSON path to the failing field |
| `schema_errors[].message` | `str` | Human-readable reason |
| `chain` | object \| `null` | HMAC chain result (`null` when no key was supplied) |
| `chain.valid` | `bool` | `true` if chain is intact |
| `chain.tampered_count` | `int` | Number of tampered events |
| `chain.first_tampered` | `str` \| `null` | `event_id` of first tampered event |
| `chain.gaps` | `array` of `str` | `event_id`s where sequence gaps were detected |
| `per_file_chains` | object | Per-file chain results when `--per-file-chain` is used |

---

## `github`

Emits GitHub Actions [workflow commands](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions)
that are rendered inline on the **Files changed** tab of pull requests.

```bash
sf-validate --input audit.jsonl --format github
```

### Example output

```
::error file=audit.jsonl,line=12::Parse error: Deserialization failed: Expecting ',' delimiter
::error file=audit.jsonl,line=27::Schema [EVT-abc123] session_id: 'session_id' is a required property
::error ::Chain tampered — first tampered event_id: EVT-def456 (total tampered: 1)
::error ::sf-validate FAIL — parse_errors=1, schema_errors=1, chain_valid=False
```

When validation passes:

```
::notice ::sf-validate PASS — 342 events, RFC-0001-STRICT
```

### Usage in GitHub Actions

```yaml
- name: Validate SPANFORGE logs
  run: sf-validate --input 'logs/**/*.jsonl' --key-file .signing-key --format github
```

The `file=` and `line=` annotations appear directly on the file diff in pull
request reviews.

> **Note:** The `github` format does not respect `--quiet`. It always emits
> one annotation per error.

---

## `junit`

JUnit-compatible XML. Most CI systems (GitHub Actions, Jenkins, GitLab CI,
Azure DevOps) can display JUnit XML as a test report.

```bash
sf-validate --input audit.jsonl --format junit --output junit-report.xml
```

### Example output (with errors)

Each error is represented as a separate `<testcase>` with a `<failure>` child.
When all checks pass, one `<testcase name="compliance:summary">` is emitted with
no failure child.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="sf-validate" tests="2" failures="2" errors="0" time="0.301">
  <testcase name="parse:audit.jsonl:12" classname="sf_validate">
    <failure type="ParseError" message="Deserialization failed: Expecting ',' delimiter">filename=audit.jsonl lineno=12 reason=Deserialization failed: Expecting ',' delimiter</failure>
  </testcase>
  <testcase name="schema:audit.jsonl:27" classname="sf_validate">
    <failure type="SchemaError" message="session_id: 'session_id' is a required property">filename=audit.jsonl lineno=27 event_id=EVT-abc123 field=session_id message='session_id' is a required property</failure>
  </testcase>
</testsuite>
```

### Example output (passing)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<testsuite name="sf-validate" tests="1" failures="0" errors="0" time="0.183">
  <testcase name="compliance:summary" classname="sf_validate" />
</testsuite>
```

### Uploading to GitHub Actions

```yaml
- name: Validate SPANFORGE logs
  run: sf-validate --input 'logs/**/*.jsonl' --format junit --output test-results.xml

- name: Publish test results
  uses: EnricoMi/publish-unit-test-result-action@v2
  if: always()
  with:
    files: test-results.xml
```

---

## `sarif`

[SARIF 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)
(Static Analysis Results Interchange Format). Use this when you want rich
GitHub Code Scanning integration with persistent rule-based annotations.

```bash
sf-validate --input audit.jsonl --format sarif --output results.sarif
```

### SARIF rule IDs

| Rule ID | Name | Description |
|---------|------|-------------|
| `SF0001` | `ParseError` | JSONL deserialization failure |
| `SF0002` | `SchemaError` | RFC-0001 JSON schema violation |
| `SF0003` | `ChainError` | HMAC chain integrity failure |

### Example output

```json
{
  "$schema": "https://json.schemastore.org/sarif-2.1.0.json",
  "version": "2.1.0",
  "runs": [
    {
      "tool": {
        "driver": {
          "name": "sf-validate",
          "version": "1.0.0",
          "rules": [
            {
              "id": "SF0001",
              "name": "ParseError",
              "shortDescription": {"text": "JSONL deserialization failure"}
            },
            {
              "id": "SF0002",
              "name": "SchemaError",
              "shortDescription": {"text": "RFC-0001 JSON schema violation"}
            },
            {
              "id": "SF0003",
              "name": "ChainError",
              "shortDescription": {"text": "HMAC chain integrity failure"}
            }
          ]
        }
      },
      "results": [
        {
          "ruleId": "SF0002",
          "message": {"text": "'session_id' is a required property"},
          "locations": [
            {
              "physicalLocation": {
                "artifactLocation": {"uri": "audit.jsonl"},
                "region": {"startLine": 27}
              }
            }
          ]
        }
      ]
    }
  ]
}
```

### Uploading to GitHub Code Scanning

```yaml
- name: Validate SPANFORGE logs
  run: sf-validate --input 'logs/**/*.jsonl' --format sarif --output results.sarif
  continue-on-error: true

- name: Upload SARIF
  uses: github/codeql-action/upload-sarif@v3
  with:
    sarif_file: results.sarif
```

SARIF results appear on the **Security → Code scanning alerts** tab of your
repository, with file/line annotations visible on pull requests.

---

## Choosing a format

| Scenario | Recommended format |
|----------|-------------------|
| Local development | `text` (default) |
| Script / automation | `json` |
| GitHub PR inline annotations | `github` |
| Jenkins / GitLab / Azure DevOps test report | `junit` |
| GitHub Code Scanning persistent alerts | `sarif` |
