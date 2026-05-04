# Portfolio Redirection Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redirect all traffic from the old portfolio to Google (placeholder for new portfolio).

**Architecture:** Static HTML redirection using meta-refresh and JavaScript fallback in `index.html` and `404.html`.

**Tech Stack:** HTML, JavaScript.

---

### Task 1: Update index.html

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add redirection logic to index.html**

Add the meta tag and script fallback to the `<head>` section of `index.html`.

```html
<<<<
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Giovani de Oliveira</title>
====
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Giovani de Oliveira</title>

    <meta http-equiv="refresh" content="0; url=https://www.google.com" />
    <script type="text/javascript">
      window.location.href = "https://www.google.com"
    </script>
>>>>
```

- [ ] **Step 2: Commit changes**

```bash
git add index.html
git commit -m "feat: add redirection to index.html"
```

---

### Task 2: Update 404.html

**Files:**
- Modify: `404.html`

- [ ] **Step 1: Update redirection logic in 404.html**

Update the existing `404.html` redirection to point to Google.

```html
<<<<
    <title>Page Not Found</title>
    <meta http-equiv="refresh" content="0; url=/portfolio" />
    <script type="text/javascript">
      setTimeout(function () {
        window.location.href = '/portfolio'
      }, 0)
    </script>
====
    <title>Page Not Found</title>
    <meta http-equiv="refresh" content="0; url=https://www.google.com" />
    <script type="text/javascript">
      setTimeout(function () {
        window.location.href = 'https://www.google.com'
      }, 0)
    </script>
>>>>
```

- [ ] **Step 2: Commit changes**

```bash
git add 404.html
git commit -m "feat: update redirection in 404.html"
```

---

### Task 3: Final Verification

- [ ] **Step 1: Verify files content**

Ensure both files contain the correct redirect URL.

- [ ] **Step 2: Final commit for documentation**

```bash
git add docs/superpowers/specs/2026-05-04-portfolio-redirection-design.md docs/superpowers/plans/2026-05-04-portfolio-redirection.md
git commit -m "docs: add redirection spec and plan"
```
