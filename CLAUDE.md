# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run deploy   # Deploy to GitHub Pages (gh-pages)
```

## Architecture

Single-page React 19 + Vite app deployed to GitHub Pages at `/PortFolio/` (base path set in `vite.config.js`).

**Component hierarchy:**
```
App.jsx → Header + Home.jsx + Footer
          Home.jsx → Hero, About, Projects, Contact (sections)
```

Navigation is anchor-based (`#inicio`, `#sobre-mi`, `#proyectos`, `#contacto`) — no router.

## Styling

- Tailwind CSS 4 via Vite plugin (`@tailwindcss/vite`)
- Custom font: Ryver Sans (configured in `tailwind.config.js`)
- Dark theme: black backgrounds, lime-green accents (`#a3e635` / `lime-400`)
- Section backgrounds use `fondo.webp` / `fondo2.webp`
- Lime-green gradient dividers between sections (`max-w-7xl` container)

## Icons & Assets

- Icons: `lucide-react` and `react-icons`
- Images: WebP format in `public/` (PNG/OTF originals removed after migration)

## Key Notes

- Pure JSX/JavaScript — no TypeScript
- No test framework configured
- ESLint uses flat config (`eslint.config.js`)
- Content is in Spanish
