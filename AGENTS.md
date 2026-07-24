# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **pure static website** (HTML/CSS/vanilla JS) for "Vincere Media Works", deployed via GitHub Pages. There is no build step, no bundler, no test suite, no linter, and no package manager for the core site.

### Running the site
Serve the repo root with any static file server, then open the URL:

```bash
python3 -m http.server 8080   # from repo root, then open http://localhost:8080
```

This is the only "service" needed. There are no dependencies to install for the site, so the startup update script is effectively a no-op.

### Non-obvious caveats
- All runtime config lives in `js/site-config.js` (email, phone, FormSubmit endpoint, optional Calendly/GA4/payment/social links). Optional integrations stay disabled unless their values are set there.
- The contact form (`#lead-form`) posts to the live FormSubmit endpoint (`formsubmit.co`). **Submitting it sends a real email** to `vinceremediaworks@gmail.com` and, on the first-ever submission, triggers a FormSubmit activation email. When testing, fill the form but avoid clicking submit unless you intend a real send.
- `cv/` contains a standalone resume page plus an optional Puppeteer script (`cv/export-pdf.js`) that renders it to PDF. Its `package.json` is git-ignored; install ad hoc only if you need the PDF: `cd cv && npm install puppeteer && node export-pdf.js` (Puppeteer needs `--no-sandbox`, already set in the script).
- There are no automated tests/lint/build to run. "Testing" means serving the site and manually verifying pages render, nav works, the portfolio filter toggles cards, and the form accepts input.
