# Conductor Website

Static website for [Conductor](https://github.com/thealxlabs/conductor) — the AI integration hub by TheAlxLabs.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub import

1. Push this folder to a GitHub repo (can be `thealxlabs/conductor-website` or a `docs` branch)
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Framework: **Other** · Output Directory: `.` (root)
4. Click Deploy

## Setting up `docs.yourdomain.aip` (or any subdomain)

1. Vercel dashboard → your project → **Settings → Domains** → Add `docs.yourdomain.aip`
2. Vercel gives you a CNAME value (e.g. `cname.vercel-dns.com`)
3. In your DNS provider, add:

| Type | Name | Value |
|------|------|-------|
| CNAME | docs | cname.vercel-dns.com |

SSL is auto-provisioned. Usually live within 5 minutes on Cloudflare, up to 24h elsewhere.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Entire site — all pages in one file |
| `vercel.json` | Routing config for Vercel static hosting |
| `LICENSE` | Apache 2.0 |
| `README.md` | This file |

## Updating

All pages are sections inside `index.html`. Edit and push — Vercel redeploys automatically.

The Changelog page fetches live from `github.com/thealxlabs/conductor/releases` on every visit. No manual updates needed.
