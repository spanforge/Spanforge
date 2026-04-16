# Pre-commit Integration

sf-validate ships a [pre-commit](https://pre-commit.com/) hook that validates
SPANFORGE JSONL logs before each commit.

---

## Setup

### 1. Install pre-commit

```bash
pip install pre-commit
```

### 2. Add the hook to `.pre-commit-config.yaml`

```yaml
repos:
  - repo: https://github.com/veerarag1973/sf-validate
    rev: v1.0.0
    hooks:
      - id: sf-validate
        args: ["--input", "audit-*.jsonl"]
```

!!! note
    You **must** supply `--input` via `args` — the hook does not receive staged
    file paths automatically.  Use any path, glob, or comma-separated pattern
    that matches your project's JSONL log files.

### 3. Install the hooks

```bash
pre-commit install
```

From now on, `git commit` will run sf-validate against any staged `.jsonl`
files automatically.

---

## Hook configuration

The hook runs with these defaults:

- **Schema validation**: enabled
- **Chain verification**: skipped (no key configured)
- **Parse errors**: abort immediately

You can pass additional args to change the defaults:

```yaml
repos:
  - repo: https://github.com/veerarag1973/sf-validate
    rev: v1.0.0
    hooks:
      - id: sf-validate
        args:
          - "--require-chain"
          - "--key-file=.signing-key"
          - "--skip-parse-errors"
          - "--format=text"
```

### Available `args`

All [CLI flags](cli-reference.md) are accepted as `args` entries. `--input`
must be included — specify the glob pattern for your log files.

---

## Signing keys in pre-commit

Because pre-commit runs in a clean subprocess, the best way to supply a signing
key is via a **tracked key file** or the **environment variable**.

### Option A — key file

```yaml
        args:
          - "--key-file=.signing-key"
```

`.signing-key` should be in `.gitignore` so it is not committed.

### Option B — environment variable

```bash
export SPANFORGE_SIGNING_KEY="my-secret"
git commit -m "..."
# sf-validate picks up SPANFORGE_SIGNING_KEY automatically
```

No additional args are needed — sf-validate checks the environment variable
before deciding whether a key is available.

---

## Running manually

Run the hook against all files (not just staged ones):

```bash
pre-commit run sf-validate --all-files
```

Run against specific files:

```bash
pre-commit run sf-validate --files logs/audit-2026-04-13.jsonl
```

---

## Skipping the hook

To commit without running the hook (e.g. during a hotfix):

```bash
git commit --no-verify -m "emergency hotfix"
```

Use sparingly. The `--require-chain` flag and CI checks provide a safety net for
commits that bypass the pre-commit hook.

---

## Hook definition

The hook is defined in `.pre-commit-hooks.yaml` at the root of the sf-validate
repository:

```yaml
- id: sf-validate
  name: SPANFORGE RFC-0001 compliance gate
  language: python
  types: [file]
  files: \.jsonl$
  entry: sf-validate
  pass_filenames: false
  args: []
```

`pass_filenames: false` means pre-commit does **not** pass staged file paths to
the command.  Instead, you supply `--input` with your glob pattern via the hook's
`args:` list in your `.pre-commit-config.yaml`.  The `files: \.jsonl$` filter
still controls which file changes *trigger* the hook, but the actual input is
always the `--input` glob you configure.
