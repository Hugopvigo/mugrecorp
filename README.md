<div align="center">

<img src="public/images/logo.png" alt="MugreCorp" width="120" />

# MugreCorp

**Computación distribuida. Ecológica. Sin data centers.**

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)
[![Deploy on GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?logo=githubpages&logoColor=white)](https://pages.github.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br />

<p align="max-width: 600px">
  <em>Mini PCs en hogares por toda España forman una red de computación descentralizada, eficiente y respetuosa con el planeta. La nube que vive en casas, no en centros de datos.</em>
</p>

<br />

[`🌐 Sitio Web`](https://hugopvigo.github.io/mugrecorp) · [`📦 MugreCloud`](https://hugopvigo.github.io/mugrecorp/mugrecloud) · [`🔗 Mugrenetes`](https://hugopvigo.github.io/mugrecorp/mugrenetes) · [`🎯 VibeConf`](https://hugopvigo.github.io/mugrecorp/vibeconf)

</div>

---

## ✨ Características

- 🌑 **Dark-first design** — Estilo Apple/Stripe/Vercel: negro, espaciado generoso, tipografía grande, gradients sutiles
- 🎬 **NetworkCanvas** — Hero animado con partículas conectadas tipo constelación (React island)
- 📊 **CO2 Counter** — Contadores animados con intersection observer para métricas de sostenibilidad
- 🔄 **Scroll Reveal** — Animaciones fade-in + slide-up al entrar en viewport
- 🪟 **Glassmorphism** — Navbar con backdrop-blur y bordes translúcidos
- 📱 **100% Responsive** — Mobile-first, menú hamburguesa, breakpoints optimizados
- 🌍 **Bilingüe** — ES (por defecto) + EN, toggle en navbar, URLs localizadas
- ⚡ **Ultrarrápido** — SSG con Astro, zero JS por defecto, React islands solo donde se necesita
- 🖼️ **Imágenes optimizadas** — WebP, compresión smart, lazy loading nativo
- ♿ **Accesible** — Semantic HTML, ARIA labels, focus states

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| ![Astro](https://img.shields.io/badge/Astro-6-FF5D01?logo=astro&logoColor=white) | Framework SSG — HTML puro, zero JS por defecto |
| ![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black) | Interactive islands — NetworkCanvas, CO2Counter, ScrollReveal, ContactForm |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white) | Utility-first CSS — responsive, dark theme, custom design system |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?logo=framer&logoColor=white) | Animaciones avanzadas (disponible para futuras interacciones) |
| ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white) | Tipado estricto end-to-end |
| ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deploy-222?logo=githubpages&logoColor=white) | Deploy & CDN via GitHub Actions |

## 📂 Estructura del Proyecto

```
mugrecorp-web/
├── 📁 public/
│   ├── 📁 images/          → Imágenes optimizadas (WebP)
│   └── �favicon.ico
├── 📁 src/
│   ├── 📁 components/
│   │   ├── Navbar.astro         → Navegación con glassmorphism
│   │   ├── Footer.astro         → Footer con links y EU Inc logo
│   │   ├── NetworkCanvas.tsx    → 🎬 Hero animado (React island)
│   │   ├── CO2Counter.tsx       → 📊 Contadores animados (React island)
│   │   ├── ScrollReveal.tsx     → 🔄 Scroll animations (React island)
│   │   └── ContactForm.tsx      → 📬 Formulario contacto (React island)
│   ├── 📁 layouts/
│   │   └── BaseLayout.astro     → Layout base con Inter font
│   ├── 📁 i18n/
│   │   ├── es.json              → Traducciones español
│   │   ├── en.json              → Traducciones inglés
│   │   └── utils.ts             → Utilidades i18n (t(), getLocalizedPath())
│   ├── 📁 pages/
│   │   ├── index.astro          → 🏠 Landing
│   │   ├── mugrecloud.astro     → ☁️ Producto MugreCloud
│   │   ├── mugrenetes.astro     → 🔗 Producto Mugrenetes
│   │   ├── vibeconf.astro       → 🎯 Evento VibeConf
│   │   ├── quienes-somos.astro  → 👥 About
│   │   ├── privacidad.astro     → 🔒 Privacidad
│   │   ├── terminos.astro       → 📜 Términos
│   │   ├── contacto.astro       → 📬 Contacto
│   │   └── 📁 en/               → Versiones EN de todas las páginas
│   └── 📁 styles/
│       └── global.css           → Tailwind + custom utilities
├── 📄 astro.config.mjs
├── 📄 tailwind.config.mjs
├── 📄 tsconfig.json
├── 📄 Plan.md                   → Plan de desarrollo completo
└── 📄 AGENTS.md                 → Instrucciones para agentes IA
```

## 🚀 Inicio Rápido

```bash
# Clonar el repo
git clone https://github.com/Hugopvigo/mugrecorp.git
cd mugrecorp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## 🌍 i18n

| Idioma | URL | Ejemplo |
|---|---|---|
| 🇪🇸 Español (default) | `/` | `/mugrecloud` |
| 🇬🇧 English | `/en/` | `/en/mugrecloud` |

Toggle de idioma en el navbar. Todos los textos centralizados en `src/i18n/es.json` y `src/i18n/en.json`.

## 🎨 Design System

| Token | Valor |
|---|---|
| Background | `#000`, `#0A0A0A`, `#111` |
| Text | `#FFFFFF`, `#A1A1AA`, `#71717A` |
| Accent | `#10B981` (emerald-500) |
| Font | Inter (Google Fonts) |
| Cards | `rgba(255,255,255,0.05)` + `border rgba(255,255,255,0.1)` |
| Style | Apple/Stripe/Vercel — dark, spacious, subtle gradients |

## 📦 Páginas

| Página | ES | EN | Descripción |
|---|---|---|---|
| Landing | `/` | `/en/` | Hero animado, cómo funciona, productos, sostenibilidad, comunidad |
| MugreCloud | `/mugrecloud` | `/en/mugrecloud` | Hosting, Render, IA, Storage — arquitectura distribuida |
| Mugrenetes | `/mugrenetes` | `/en/mugrenetes` | Red de nodos, resiliencia, gamificación |
| VibeConf | `/vibeconf` | `/en/vibeconf` | Evento IA & tecnología distribuida |
| Quiénes Somos | `/quienes-somos` | `/en/quienes-somos` | Misión, visión, valores, oficinas |
| Privacidad | `/privacidad` | `/en/privacidad` | Política de privacidad |
| Términos | `/terminos` | `/en/terminos` | Términos de uso |
| Contacto | `/contacto` | `/en/contacto` | Formulario + info |

## 🏗️ Arquitectura

```
┌─────────────────────────────────────────────┐
│                  Astro SSG                   │
│           (HTML puro, zero JS)               │
├─────────────────────────────────────────────┤
│  React Islands (solo donde se necesita)     │
│  ┌──────────────┐ ┌──────────┐ ┌──────────┐│
│  │NetworkCanvas │ │CO2Counter│ │ScrollRvl ││
│  │  (hero)      │ │ (metric) │ │(anim)    ││
│  └──────────────┘ └──────────┘ └──────────┘│
├─────────────────────────────────────────────┤
│            Tailwind CSS 4                    │
│      (utility-first, dark theme)            │
└─────────────────────────────────────────────┘
```

## 🤝 Contribuir

1. Fork del repo
2. Crea tu branch (`git checkout -b feature/mi-feature`)
3. Commit tus cambios (`git commit -m 'Add mi feature'`)
4. Push al branch (`git push origin feature/mi-feature`)
5. Abre un Pull Request

## 📄 Licencia

&copy; 2026 MugreCorp EU Inc. Todos los derechos reservados.

---

<div align="center">

**[hugopvigo.github.io/mugrecorp](https://hugopvigo.github.io/mugrecorp)** · Hecho con ☕ y 🖥️ en España

</div>
