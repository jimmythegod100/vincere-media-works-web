# Custom domain: vinceremediaworks.com

**Audit date:** 2026-07-24 (Mac valak)

## Status: NOT purchased (by design)

The purchased domain is **valleynotaryservices.com** (Valley Notary Services), not `vinceremediaworks.com`. Do **not** buy `vinceremediaworks.com` unless explicitly requested.

**Live Vince Remedia Works site:** https://jimmythegod100.github.io/vincere-media-works-web/

## Live status (public DNS)

| Check | Result |
|-------|--------|
| Verisign WHOIS | **No match** — not in `.com` registry |
| `dig @8.8.8.8 vinceremediaworks.com` | **NXDOMAIN** |
| `dig @1.1.1.1 www` | **NXDOMAIN** |
| `curl https://vinceremediaworks.com` | **Cannot resolve host** |
| GitHub Pages (github.io) | **200 OK** — site built, no custom domain configured |

## Checklist

### DONE

- [x] Static site deployed on GitHub Pages (`jimmythegod100/vincere-media-works-web`, branch `main`)
- [x] FormSubmit → `vinceremediaworks@gmail.com`
- [x] `CNAME` file in repo root (`vinceremediaworks.com`)
- [x] Canonical URLs, sitemap, robots.txt updated to custom domain
- [x] `privacy.html` already references `vinceremediaworks.com`

### STILL NEEDED (only if purchasing vinceremediaworks.com later)

1. **Purchase domain** — currently unregistered. Re-check: `whois -h whois.verisign-grs.com vinceremediaworks.com`
2. **Point nameservers to Cloudflare** at the registrar (two Cloudflare NS hostnames from the zone overview).
3. **Cloudflare DNS records** (DNS only / grey cloud for GitHub Pages):

   | Type | Name | Value |
   |------|------|-------|
   | **A** | `@` | `185.199.108.153` |
   | **A** | `@` | `185.199.109.153` |
   | **A** | `@` | `185.199.110.153` |
   | **A** | `@` | `185.199.111.153` |
   | **CNAME** | `www` | `jimmythegod100.github.io` |

   Alternative apex: CNAME `@` → `jimmythegod100.github.io` (Cloudflare flattening).

4. **GitHub Pages custom domain** — Settings → Pages → Custom domain → `vinceremediaworks.com` → Enforce HTTPS. Or:

   ```bash
   gh api -X PUT repos/jimmythegod100/vincere-media-works-web/pages \
     -f cname='vinceremediaworks.com' \
     -f https_enforced=true \
     -f build_type=legacy \
     -f 'source[branch]=main' \
     -f 'source[path]=/'
   ```

5. **Wait for DNS + TLS** — After NS propagate (minutes–48h), GitHub issues HTTPS cert (up to ~24h). Cloudflare SSL/TLS → **Full (strict)** if proxied.

6. **FormSubmit** — Submit the contact form once from `https://vinceremediaworks.com` to activate the new domain.

7. **Optional:** Cloudflare redirect rule `www` → apex (or set both in GitHub Pages).

### Verify when live

```bash
dig +short vinceremediaworks.com A
dig +short www.vinceremediaworks.com CNAME
curl -sI https://vinceremediaworks.com/ | head -8
```

Expected: A → GitHub Pages IPs (or Cloudflare proxy); HTTPS **200**; content matches the portfolio site.

## Fallback URL

Until DNS resolves: https://jimmythegod100.github.io/vincere-media-works-web/
