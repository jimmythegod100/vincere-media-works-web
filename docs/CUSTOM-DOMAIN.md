# Custom domain: vinceremediaworks.com

**Status (2026-07-24):** `vinceremediaworks.com` returns **NXDOMAIN** — the domain is **not registered** (Verisign WHOIS: "No match"). This is not a GitHub Pages or DNS-record misconfiguration; the name must be purchased first.

**Working site today:** https://jimmythegod100.github.io/vincere-media-works-web/

## After you register the domain

### 1. GitHub Pages — apex + www (recommended DNS at registrar)

| Type | Host | Value |
|------|------|-------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |
| **CNAME** | `www` | `jimmythegod100.github.io` |

GitHub may also accept a single apex **ALIAS/ANAME** to `jimmythegod100.github.io` if your registrar supports it (Cloudflare CNAME flattening works).

### 2. Enable custom domain in GitHub

```bash
# After DNS is live (can take up to 24–48h for new registration)
gh api -X POST repos/jimmythegod100/vincere-media-works-web/pages \
  -f cname='vinceremediaworks.com' \
  -f build_type=legacy \
  -f source[branch]=main \
  -f source[path]=/
```

Or: repo **Settings → Pages → Custom domain** → `vinceremediaworks.com` → enforce HTTPS.

Optional repo file (only after domain resolves):

```
vinceremediaworks.com
```

Save as `CNAME` at repo root and push to `main`.

### 3. Verify

```bash
dig +short vinceremediaworks.com A
dig +short www.vinceremediaworks.com CNAME
curl -sI https://vinceremediaworks.com/ | head -5
```

Expected: A records → GitHub Pages IPs; HTTPS 200 with site content.

## Cloudflare alternative

If the domain is on Cloudflare:

1. Add site → use Cloudflare nameservers at registrar.
2. DNS only (grey cloud) for `@` A records above, or CNAME `www` → `jimmythegod100.github.io`.
3. SSL/TLS → Full (strict) after GitHub issues certificate.

## Registrar purchase (manual)

No registrar API credentials were found on this Mac. To register:

- Search: [Namecheap domain search](https://www.namecheap.com/domains/registration/results/?domain=vinceremediaworks.com)
- Or Google Domains / Porkbun / Cloudflare Registrar

AppleScript helper opens search in Chrome:

```bash
osascript ~/.organized/scripts/ui-automation/open-vinceremediaworks-domain-search.applescript
```

## Site copy note

`privacy.html` links to `https://vinceremediaworks.com/` — update is automatic once DNS works; until then the GitHub URL in README is canonical.
