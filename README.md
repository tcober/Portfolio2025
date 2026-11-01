# thomascober.com

My personal site. It's one page, and my resume slides out in a panel.

Built with Nuxt 4 and Tailwind CSS, prerendered to static HTML, and hosted on Netlify.

## Run it

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Build it

```bash
npm run generate
```

This is what Netlify runs. The static site ends up in `dist/`.

## How it's put together

- `pages/index.vue`: the only page. `/resume` is the same page with the resume panel open, so the link can be shared and Back closes the panel.
- `components/HomeIntro.vue`: photo, name, intro and links.
- `components/SidePanel.vue`: the slide-out panel (focus, Escape to close, scroll lock).
- `components/ResumeContent.vue`: the resume itself, including its print layout.
- `assets/css/`: design tokens, the grid background and shared print rules.
