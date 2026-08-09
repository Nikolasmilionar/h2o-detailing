# Revive & Refine Detailing — Website

Single-page marketing site for Revive & Refine Detailing (Doncaster).
Built with React (via UMD + Babel standalone) and a custom design-system bundle.

## Running locally

The page loads its components with Babel-in-the-browser, so it must be served
over HTTP (opening `index.html` directly with `file://` will not work).

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Structure

- `index.html` — page shell + the App (renders the home page only)
- `Sections.jsx` — home page sections (hero, services, benefits, gallery, testimonials, newsletter)
- `Navbar.jsx`, `Footer.jsx` — navigation; links smooth-scroll to sections
- `Icons.jsx`, `Shared.jsx` — helpers
- `_ds_bundle.js`, `styles.css` — design system
- `assets/` — images and fonts

## Deploying to GitHub Pages

Enable Pages on the `main` branch (root). The site is fully static. rr
