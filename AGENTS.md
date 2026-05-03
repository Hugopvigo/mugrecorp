# AGENTS.md — MugreCorp Web Build Instructions

## Project Overview

MugreCorp Inc is a green/distributed infrastructure startup. Mini PCs (Intel N100) hosted in homes across Spain form a decentralized computing network. Services: hosting, rendering, AI processing, storage. Pay-per-use model. Differentiator: eco-friendly, no traditional data centers, gamified host community.

**See `Plan.md` for the full development plan.**

## Tech Stack

- **Astro 5** (SSG) + **React 19** (interactive islands) + **Tailwind CSS 4**
- **Framer Motion** for animations
- **Lucide Icons** for iconography
- **i18n**: ES (default on `/`) + EN (on `/en/`) via custom utility
- **Deploy**: Vercel

## Design System

### Colors
- Background: `#000`, `#0A0A0A`, `#111`
- Text: `#FFFFFF`, `#A1A1AA` (zinc-400), `#71717A` (zinc-500)
- Accent: `#10B981` (emerald-500) — use sparingly
- Gradients: subtle dark-to-darker (never matrix/neon style)
- Cards: `rgba(255,255,255,0.05)` with subtle border `rgba(255,255,255,0.1)`

### Typography
- Font: **Inter** (Google Fonts)
- Headings: bold, large (text-5xl to text-7xl on hero)
- Body: text-base to text-lg, zinc-400 color

### Style
- Apple/Stripe/Vercel aesthetic — dark, generous spacing, large type, subtle gradients
- No neon, no matrix green, no over-the-top effects
- Professional + startup feel

### Components Pattern
- `.astro` files for static sections
- `.tsx` files (React islands) ONLY for interactive components: NetworkCanvas, CO2Counter, ScrollReveal, ContactForm
- Use `client:visible` or `client:load` directives for React islands

## File Structure

```
mugrecorp-web/
├── public/images/    → All optimized images (WebP preferred)
├── src/components/   → All reusable components
├── src/layouts/      → BaseLayout.astro
├── src/i18n/         → es.json, en.json, utils.ts
├── src/pages/        → All route pages
├── src/styles/       → global.css
```

## Key Image Mappings

| Original File | Web Path | Used In |
|---|---|---|
| MugreCorpLogoBlack.png | `/images/logo.png` | Navbar, Footer, all pages |
| favicon.ico | `/favicon.ico` | Browser tab |
| MugreCorpEUinc_logo.png | `/images/logo-eu-inc.png` | Legal pages, footer |
| MugreCloud_Logo.png | `/images/mugrecloud-logo.png` | MugreCloud page |
| MugreCloudDataCenter.png | `/images/datacenter.webp` | Home hero, MugreCloud page |
| MugreCloud2.jpg | `/images/mugrecloud2.webp` | MugreCloud page |
| Mugrenetes.jpg | `/images/mugrenetes.webp` | Mugrenetes page |
| Mugrenetes2.jpg | `/images/mugrenetes2.webp` | Mugrenetes page |
| MugreCorpVibeconf.png | `/images/vibeconf.webp` | VibeConf page |
| MugreCorpSolar.jpg | `/images/solar.webp` | Sustainability section, About |
| new_office.* | `/images/new-office.webp` | About page |
| old_office.png | `/images/old-office.webp` | About page |

## i18n System

- Translations stored in `src/i18n/es.json` and `src/i18n/en.json`
- Utility function `t(key, lang)` to get translations
- `getLangFromUrl()` to detect language from URL path
- Default language: ES (no prefix). EN: `/en/` prefix
- Language toggle in navbar

## Build & Dev Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Current Progress

- [x] Plan.md and AGENTS.md written
- [x] Project setup (Astro 6 + Tailwind 4 + React 19)
- [x] Images optimized and copied (WebP, max 1200px)
- [x] Base layout + Navbar + Footer (glassmorphism navbar, responsive mobile menu)
- [x] Landing page (hero with NetworkCanvas, how it works, products, sustainability counters, community, CTA)
- [x] MugreCloud page (hero, services grid, architecture section, CTA)
- [x] Mugrenetes page (hero, what is, resilience, gamification, CTA)
- [x] VibeConf page (hero, event details, registration CTA)
- [x] Quiénes Somos page (mission/vision, values, solar image, offices)
- [x] Legal pages (privacidad, términos with EU Inc logo)
- [x] Contacto page (form + contact info)
- [x] i18n complete (ES on /, EN on /en/, language toggle in navbar)
- [ ] Deploy to Vercel (needs `npm install @astrojs/vercel` and config update for adapter)

## Important Notes

- Always run `npm run build` after changes to verify no build errors
- Use Astro's `<Image />` component for optimized images with srcset
- React islands should use `client:visible` for below-fold components
- All pages must be 100% responsive (mobile-first with Tailwind)
- No external API calls needed — static site
- Forms can use Formspree or similar service (no backend needed)
