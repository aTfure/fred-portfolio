# Fredrick Onyango — Portfolio

Clean product-style portfolio (Tihada-inspired UI). Content aligned to `resume.pdf`.

**Live:** https://atfure.github.io/fred-portfolio/

**Design:** white canvas, Inter, black/white hierarchy, pill nav, inverted headline highlights, skyline hero — adapted from product landing reference (`image.jpg`).

## What’s on the page (hiring order)

1. **Hero** — open to data eng  
2. **Selected work** — flagships (ICD case study, clearance tooling, merchandiser, files manager) + collapsed ALX proof  
3. **Experience** — dated roles + metrics from the resume  
4. **Pitch video** — Drive embed + open link  
5. **Writing** — Medium  
6. **Hire me** — want / bring / strongest  
7. **Contact** — email first, optional form  

No profile photo. Resume is the same facts as the site.

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy

GitHub Pages: branch `main`, folder `/ (root)`.  
Push to `main` → https://atfure.github.io/fred-portfolio/

### Custom domain (optional)

1. Buy a domain (e.g. `fredonyango.com`).
2. Add a file `CNAME` in this repo with one line: your domain.
3. GitHub → Settings → Pages → Custom domain → same name → enable HTTPS.
4. At the DNS host:
   - **Apex:** A records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www:** CNAME → `atfure.github.io`

### Analytics (optional)

No tracker ships by default (privacy-first). To add later:

- [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (beacon snippet), or  
- [Plausible](https://plausible.io) / [GoatCounter](https://www.goatcounter.com)

Add the snippet before `</body>` once you have a site ID.

### Pitch video

- Embed + link: Drive file `1a8alJgBMbla3kEZjtqen4SwKdKCxjQXs`
- Sharing must be **Anyone with the link → Viewer**
- For bulletproof playback: upload **YouTube unlisted** or commit a compressed `pitch.mp4`

### Featured repos (README hygiene)

For recruiters clicking GitHub links, each featured public repo should have:

- One-paragraph problem statement  
- Stack list  
- How to run (if applicable)  
- Optional screenshot / GIF  

Priority: `Import_Clearance_Tracking`, `Merchandiser_Route-Plan`, `alx-files_manager`.

## Files

| File | Role |
|------|------|
| `index.html` | Content |
| `styles.css` | Brutalist UI |
| `script.js` | Nav + year |
| `resume.pdf` | Downloadable CV (source of truth for dates/metrics) |
| `og-image.png` / `.svg` | Social share card (1200×630) |
| `favicon.svg` | Tab icon |

## Source links

- Resume Drive original: https://drive.google.com/file/d/1LIJvXnCHaPIbt1azkl50pxV0GwpKaFpy/view  
- Pitch video: https://drive.google.com/file/d/1a8alJgBMbla3kEZjtqen4SwKdKCxjQXs/view?usp=sharing  
- Contact form: [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeUQqWkFvrxgrjy0MZDvTdsVZmcM9_Cwfdc_nREhpdkriddrQ/viewform)
