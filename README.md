# Fred Onyango — Portfolio

Static personal portfolio (brutalist one-pager).

**Design refs:** [Brutalist Websites — One Page Love](https://onepagelove.com/brutalist-websites)  
**Content source:** [Google Sites portfolio](https://sites.google.com/view/fredonyango-portfolio/)

No frameworks. No build step. No backend.  
HTML + CSS + a little vanilla JavaScript. No profile photo.

**Live:** https://atfure.github.io/fred-portfolio/

## What was migrated

| Google Sites page | Now on this site |
|-------------------|------------------|
| About / Who I am | Hero + About (AGL, Reduzer) |
| Pitch video | `#pitch` (Drive embed) |
| Portfolio projects | Merchandiser, CBC education, ICD data eng + engineering projects |
| Hire Me | `#hire` + `resume.pdf` |
| Contact Me | Email, phone, socials, Google Form embed |

**Contact email:** ochieng.fredonyango@gmail.com

## Local preview

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy (GitHub Pages)

Already enabled for this repo: branch `main`, folder `/ (root)`.

Push to `main` → site updates at  
https://atfure.github.io/fred-portfolio/

### Custom domain (optional)

If you own a domain (e.g. `fredonyango.com`):

1. Add a `CNAME` file in this repo with the domain name.
2. In GitHub → Settings → Pages → Custom domain, enter the same name.
3. At your DNS host, point:
   - **Apex:** A records to GitHub Pages IPs `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **www:** CNAME to `atfure.github.io`

You still need the **domain name** itself; an email address alone cannot be used as GitHub Pages DNS.

## Customisation

| What | Where |
|------|--------|
| Photo | `fred.jpg` |
| Resume | `resume.pdf` |
| Colours | CSS variables in `styles.css` |
| Content | `index.html` |

## Source of truth links

- Resume (Drive original): https://drive.google.com/file/d/1LIJvXnCHaPIbt1azkl50pxV0GwpKaFpy/view  
- Pitch video: https://drive.google.com/file/d/1a8alJgBMbla3kEZjtqen4SwKdKCxjQX/view  
- Contact form: [Google Form](https://docs.google.com/forms/d/e/1FAIpQLSeUQqWkFvrxgrjy0MZDvTdsVZmcM9_Cwfdc_nREhpdkriddrQ/viewform)
