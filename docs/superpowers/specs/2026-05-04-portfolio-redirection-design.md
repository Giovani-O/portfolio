# Design Spec: Portfolio Redirection

## Goal
Redirect all traffic from the old portfolio (this repository) to a new destination (initially Google, to be updated by the user).

## Architecture
We will use a static HTML-based redirection strategy. This is the most efficient method for a deprecated site, as it triggers before the React application bundle is loaded or executed.

## Changes

### 1. `index.html`
Update the `<head>` section to include a meta refresh tag and a JavaScript fallback for immediate redirection.

```html
<meta http-equiv="refresh" content="0; url=https://www.google.com" />
<script type="text/javascript">
  window.location.href = "https://www.google.com"
</script>
```

### 2. `404.html`
Update the existing redirection logic in `404.html` to point to the new destination instead of the internal `/portfolio` path.

```html
<meta http-equiv="refresh" content="0; url=https://www.google.com" />
<script type="text/javascript">
  setTimeout(function () {
    window.location.href = 'https://www.google.com'
  }, 0)
</script>
```

## Success Criteria
- Accessing the root URL redirects to Google.
- Accessing a non-existent path (triggering 404) redirects to Google.
- Redirection happens as fast as possible without waiting for React to load.
