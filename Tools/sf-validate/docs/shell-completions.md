# Shell Completions

sf-validate can generate completion scripts for Bash, Zsh, and Fish so that
flags and values are tab-completed in your terminal.

---

## Generating a completion script

```bash
sf-validate --generate-completion bash   # or zsh / fish
```

This prints the script to stdout and exits immediately (no validation is run).

---

## Bash

### One-time (current session only)

```bash
eval "$(sf-validate --generate-completion bash)"
```

### Persistent

Add to `~/.bashrc` or `~/.bash_profile`:

```bash
# sf-validate shell completion
eval "$(sf-validate --generate-completion bash)"
```

Then reload:

```bash
source ~/.bashrc
```

---

## Zsh

### One-time (current session only)

```zsh
eval "$(sf-validate --generate-completion zsh)"
```

### Persistent

Add to `~/.zshrc`:

```zsh
# sf-validate shell completion
eval "$(sf-validate --generate-completion zsh)"
```

Then reload:

```zsh
source ~/.zshrc
```

> **Note:** If completion is not working, ensure `compinit` is called somewhere
in your `~/.zshrc` (it is included in many standard Zsh configs):
>
> ```zsh
> autoload -U compinit && compinit
> ```

---

## Fish

### One-time (current session only)

```fish
sf-validate --generate-completion fish | source
```

### Persistent (recommended)

Save the script to Fish's completions directory:

```fish
sf-validate --generate-completion fish > ~/.config/fish/completions/sf-validate.fish
```

Fish automatically loads scripts from this directory for every new session —
no `source` needed.

---

## What is completed

The completion scripts provide tab completion for:

- All flags (e.g. `--form<Tab>` → `--format`)
- `--format` values: `text`, `json`, `github`, `junit`, `sarif`
- `--generate-completion` values: `bash`, `zsh`, `fish`
- File path arguments for `--input`, `--key-file`, and `--output`

---

## Updating completions

When you upgrade sf-validate, regenerate the completion script to pick up any
new flags:

```bash
# bash / zsh — re-run eval or update ~/.bashrc
eval "$(sf-validate --generate-completion bash)"

# fish — overwrite the completions file
sf-validate --generate-completion fish > ~/.config/fish/completions/sf-validate.fish
```
