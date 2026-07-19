# Your Portfolio Site

A simple, self-contained portfolio website: profile section with photo,
bio, and a roadmap/progression timeline. Plain HTML/CSS/JS — no build
step, no dependencies to install.

## Open it

Unzip the folder, then just double-click `index.html` (or open it in
VS Code and use the "Live Server" extension for auto-reload).

## Where to edit things

- **Your name, role, bio** — `index.html`, inside the `<header class="hero">`
  section near the top.
- **Your photo** — click the photo frame in the browser to preview any
  image instantly. To make it permanent, replace
  `images/profile-placeholder.svg` with your own image (keep the same
  filename), or change the `src` on `#profileImg` in `index.html` to
  point at your new file.
- **Roadmap entries** — `index.html`, inside `<ol class="timeline">`.
  Each milestone is one `<li class="entry" data-status="...">` block.
  Copy/paste one to add more. `data-status` can be `done`, `active`,
  or `planned` — it controls the color and label.
- **Contact links** — bottom of `index.html`, inside `<footer class="contact">`.
- **Colors/fonts** — `css/style.css`, the `:root` block at the top.

## File structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── images/profile-placeholder.svg
└── README.md
```

## Link

- https://adrianbayotas-portfolio.netlify.app
