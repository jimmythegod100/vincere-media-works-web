# Custom domain: vinceremediaworks.com

**Audit date:** 2026-07-24 (Mac valak)

## Live status (public DNS)

| Check | Result |
|-------|--------|
| Verisign WHOIS | **No match** — not in `.com` registry yet |
| `dig @8.8.8.8 vinceremediaworks.com` | **NXDOMAIN** |
| `dig @1.1.1.1 www` | **NXDOMAIN** |
| `curl https://vinceremediaworks.com` | **Cannot resolve host** |
| GitHub Pages (github.io) | **200 OK** — site built |

If Cloudflare dashboard shows green checks but public DNS is still NXDOMAIN, the usual causes are: registration still processing, nameservers not updated at the registrar, or the zone was added in Cloudflare before the domain was actually registered.

## Checklist

### DONE

- [x] Static site deployed on GitHub Pages (`jimmythegod100/vincere-media-works-web`, branch `main`)
- [x] FormSubmit → `vinceremediaworks@gmail.com`
- [x] `CNAME` file in repo root (`vinceremediaworks.com`)
- [x] Canonical URLs, sitemap, robots.txt updated to custom domain
- [x] `privacy.html` already references `vinceremediaworks.com`

### STILL NEEDED (blocking custom domain)

1. **Confirm domain registration completed** — Verisign must show the domain registered (not “No match”). Re-check: `whois -h whois.verisign-grs.com vinceremediaworks.com`
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
