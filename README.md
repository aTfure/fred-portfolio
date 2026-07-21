# Fred Onyango — Portfolio

A clean, fast, **static** personal portfolio.

No frameworks. No build step. No backend.  
Just HTML + CSS + a tiny bit of vanilla JavaScript.

**Live:** https://atfure.github.io/fred-portfolio/

## Why static?

Because simpler is better.  
(See the “Why Static Sites Are Awesome” section on the site.)

## Local preview

Open `index.html` in any browser, or run a local server:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

### GitHub Pages (this repo)

1. Push to `main` on GitHub.
2. Settings → Pages → Source: Deploy from a branch → `main` / `/ (root)`.
3. Site is served at `https://atfure.github.io/fred-portfolio/`.

Every push to `main` updates the site after Pages rebuilds.

### Cloudflare Pages (optional)

1. Connect this GitHub repository in [Cloudflare Pages](https://pages.cloudflare.com).
2. Build settings: leave empty (no build command).
3. Deploy. You can point a custom domain here later.

## Customisation

| What | Where |
|------|--------|
| Photo | Replace `fred.jpg` |
| Colours | CSS variables at the top of `styles.css` |
| Content | `index.html` |
| Favicon | `favicon.svg` |

That’s it.
