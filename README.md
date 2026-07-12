# Vincere Media Works — Website

Static portfolio and services site for **Vincere Media Works**, hosted on GitHub Pages.

**Live URL:** https://jimmythegod100.github.io/vincere-media-works-web/

## Stack

- Static HTML / CSS / JavaScript
- [FormSubmit](https://formsubmit.co) contact form
- GitHub Pages (branch `main`, root `/`)

## Local preview

```bash
cd vincere-media-works-web
python3 -m http.server 8080
# open http://localhost:8080
```

## Config

Edit `js/site-config.js` to add Calendly, social links, or payment URLs.

## Contact form

First submission activates FormSubmit at the configured inbox. Redirect after submit: `request-received.html` (legacy `thanks.html` redirects there).

## Assets

| File | Use |
|------|-----|
| `images/logo-light.png` | Light-background logo |
| `images/logo-dark-bg.png` | Dark hero & footer |
| `images/icon.png` | Nav, favicon, watermarks |
| `images/og-image.png` | Social share preview |
