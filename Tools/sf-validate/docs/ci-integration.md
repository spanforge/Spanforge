# CI Integration

sf-validate is designed to slot into any CI/CD pipeline. This page shows
ready-to-use configuration for the most common platforms.

---

## GitHub Actions

### Minimal check (text output, fail on errors)

```yaml
name: Validate SPANFORGE logs

on:
  push:
    branches: [main]
  pull_request:

jobs:
  validate-logs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Python
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"
          cache: pip

      - name: Install sf-validate
        run: pip install sf-validate

      - name: Validate SPANFORGE logs
        run: sf-validate --input 'logs/**/*.jsonl' --key-file .signing-key
        env:
          # Alternative: set the key as a repository secret
          SPANFORGE_SIGNING_KEY: ${{ secrets.SPANFORGE_SIGNING_KEY }}
```

### Inline PR annotations (github format)

```yaml
      - name: Validate SPANFORGE logs
        run: |
          sf-validate --input 'logs/**/*.jsonl' \
            --format github \
            --key-file .signing-key
```

Errors appear as red annotations directly on the Files Changed tab in pull
requests (no extra upload step required).

### SARIF upload to Code Scanning

```yaml
      - name: Validate SPANFORGE logs
        run: |
          sf-validate --input 'logs/**/*.jsonl' \
            --format sarif \
            --output results.sarif \
            --key-file .signing-key
        continue-on-error: true          # don't skip upload on failure

      - name: Upload SARIF results
        uses: github/codeql-action/upload-sarif@v3
        if: always()
        with:
          sarif_file: results.sarif
```

Results appear under **Security → Code scanning alerts** and persist across
commits, making it easy to track when issues were introduced and resolved.

### JUnit XML test report

```yaml
      - name: Validate SPANFORGE logs
        run: |
          sf-validate --input 'logs/**/*.jsonl' \
            --format junit \
            --output test-results/sf-validate.xml \
            --key-file .signing-key
        continue-on-error: true

      - name: Publish test results
        uses: EnricoMi/publish-unit-test-result-action@v2
        if: always()
        with:
          files: test-results/sf-validate.xml
```

---

## GitLab CI

```yaml
validate-logs:
  stage: test
  image: python:3.12-slim
  before_script:
    - pip install sf-validate
  script:
    - sf-validate --input 'logs/**/*.jsonl'
        --format junit
        --output junit-report.xml
        --key-file .signing-key
  artifacts:
    when: always
    reports:
      junit: junit-report.xml
  variables:
    SPANFORGE_SIGNING_KEY: $SPANFORGE_SIGNING_KEY  # set in GitLab CI/CD settings
```

JUnit artifacts are shown in the **Tests** tab of each pipeline run.

---

## Jenkins

```groovy
pipeline {
  agent any

  environment {
    SPANFORGE_KEY = credentials('spanforge-signing-key')  // Jenkins credentials
  }

  stages {
    stage('Validate SPANFORGE logs') {
      steps {
        sh '''
          pip install sf-validate
          sf-validate \
            --input "logs/**/*.jsonl" \
            --format junit \
            --output test-results.xml \
            --key "$SPANFORGE_KEY"
        '''
      }
    }
  }

  post {
    always {
      junit 'test-results.xml'
    }
  }
}
```

---

## Azure DevOps

```yaml
trigger:
  - main

pool:
  vmImage: ubuntu-latest

steps:
  - task: UsePythonVersion@0
    inputs:
      versionSpec: "3.12"

  - script: pip install sf-validate
    displayName: Install sf-validate

  - script: |
      sf-validate \
        --input "logs/**/*.jsonl" \
        --format junit \
        --output $(Build.ArtifactStagingDirectory)/sf-validate-results.xml
    displayName: Validate SPANFORGE logs
    env:
      SPANFORGE_SIGNING_KEY: $(SPANFORGE_SIGNING_KEY)  # pipeline variable

  - task: PublishTestResults@2
    displayName: Publish validation results
    condition: always()
    inputs:
      testResultsFormat: JUnit
      testResultsFiles: "$(Build.ArtifactStagingDirectory)/sf-validate-results.xml"
      testRunTitle: "SPANFORGE log validation"
```

---

## CircleCI

```yaml
version: 2.1

jobs:
  validate-logs:
    docker:
      - image: cimg/python:3.12
    steps:
      - checkout
      - run:
          name: Install sf-validate
          command: pip install sf-validate
      - run:
          name: Validate SPANFORGE logs
          command: |
            sf-validate \
              --input 'logs/**/*.jsonl' \
              --format junit \
              --output ~/test-results/sf-validate.xml \
              --key-file .signing-key
      - store_test_results:
          path: ~/test-results

workflows:
  main:
    jobs:
      - validate-logs
```

---

## Key management in CI

Never hardcode signing keys in YAML files. Use your platform's secret management:

| Platform | Where to store | How to consume |
|----------|---------------|----------------|
| GitHub Actions | Repository / org secrets | `${{ secrets.NAME }}` |
| GitLab CI | CI/CD Variables (masked) | `$VARIABLE_NAME` |
| Jenkins | Credentials store | `credentials('id')` |
| Azure DevOps | Pipeline variable (secret) | `$(VARIABLE_NAME)` |
| CircleCI | Project / org context | `$VARIABLE_NAME` |

The recommended approach is:

```bash
# Store key in CI secret, expose as env var, use --key-file
echo "$SPANFORGE_SIGNING_KEY" > /tmp/sf-key
chmod 600 /tmp/sf-key
sf-validate --input 'logs/**/*.jsonl' --key-file /tmp/sf-key
rm /tmp/sf-key
```

Or simply rely on the `SPANFORGE_SIGNING_KEY` environment variable directly —
sf-validate picks it up automatically without any extra flags.

---

## Enforcing signed logs

Add `--require-chain` to ensure validation fails if no signing key is available,
rather than silently skipping chain verification:

```bash
sf-validate --input 'logs/**/*.jsonl' --require-chain
# exit 2 if SPANFORGE_SIGNING_KEY is not set and no --key / --key-file given
```

This prevents false-positive PASS results in environments where the key was not
configured correctly.
