# MugreCorp Web — Plan de Desarrollo

## Resumen del Proyecto

Web corporativa para **MugreCorp Inc**, startup de infraestructura distribuida/verde. Mini PCs Intel N100 en hogares por España formando una red de computación descentralizada. Servicios: hosting, render, IA, almacenamiento. Modelo: pago por uso. Diferencial: ecológico, sin data centers, comunidad de anfitriones gamificada.

## Stack Tecnológico

- **Astro 5** — SSG, ultrarrápido, islands interactivos
- **React 19** — Para componentes interactivos (islands)
- **Tailwind CSS 4** — Utility-first, responsive
- **Framer Motion** — Animaciones (scroll reveal, hero, transiciones)
- **Lucide Icons** — Iconos consistentes y modernos
- **i18n** — ES/EN con toggle en navbar (astro-i18n-aut o custom)
- **Vercel** — Deploy con CI/CD automático

## Paleta de Diseño

- **Fondo principal**: `#000000`, `#0A0A0A`, `#111111`
- **Gradientes**: Sutiles (gris oscuro → azul muy oscuro, gris → verde muy oscuro). Elegante, corporativo, nada matrix/neón
- **Acento verde**: `#10B981` (emerald suave, usado con moderación)
- **Texto**: Blanco `#FFFFFF`, gris claro `#A1A1AA`, gris medio `#71717A`
- **Tipografía**: Inter (Google Fonts) — limpia, profesional, tech
- **Estilo**: Apple/Stripe/Vercel — oscuro, espaciado generoso, tipografía grande, gradients sutiles

## Estructura de Páginas

```
/                    → Landing principal (ES por defecto)
/en/                 → Landing principal (EN)
/mugrecloud          → Producto: MugreCloud
/mugrenetes          → Producto: Mugrenetes
/vibeconf            → Evento VibeConf AI 2025
/quienes-somos       → About / Quiénes somos
/privacidad          → Política de privacidad
/terminos            → Términos de uso
/contacto            → Formulario de contacto
```

## Estructura de Archivos

```
mugrecorp-web/
├── public/
│   ├── images/
│   │   ├── logo.png              (MugreCorpLogoBlack.png optimizado)
│   │   ├── logo-eu-inc.png       (MugreCorpEUinc_logo.png optimizado)
│   │   ├── mugrecloud-logo.png   (MugreCloud_Logo.png optimizado)
│   │   ├── datacenter.webp       (MugreCloudDataCenter.png → webp)
│   │   ├── mugrecloud2.webp      (MugreCloud2.jpg → webp)
│   │   ├── mugrenetes.webp       (Mugrenetes.jpg → webp)
│   │   ├── mugrenetes2.webp      (Mugrenetes2.jpg → webp)
│   │   ├── vibeconf.webp         (MugreCorpVibeconf.png → webp)
│   │   ├── solar.webp            (MugreCorpSolar.jpg → webp)
│   │   ├── new-office.webp       (new_office optimizado)
│   │   └── old-office.webp       (old_office.png optimizado)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── NetworkCanvas.tsx       (React island: partículas conectadas)
│   │   ├── HowItWorks.astro
│   │   ├── ProductsGrid.astro
│   │   ├── SustainabilitySection.astro
│   │   ├── CO2Counter.tsx          (React island: contador animado)
│   │   ├── CommunitySection.astro
│   │   ├── ScrollReveal.tsx        (React island: animaciones scroll)
│   │   ├── LanguageToggle.astro
│   │   └── ContactForm.tsx         (React island)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── i18n/
│   │   ├── es.json
│   │   ├── en.json
│   │   └── utils.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── mugrecloud.astro
│   │   ├── mugrenetes.astro
│   │   ├── vibeconf.astro
│   │   ├── quienes-somos.astro
│   │   ├── privacidad.astro
│   │   ├── terminos.astro
│   │   └── contacto.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
└── vercel.json
```

## Detalle por Página

### 1. Landing (`/`)
- **Hero**: NetworkCanvas (partículas conectadas tipo constelación, sutil, elegante) + imagen datacenter de fondo. Título grande, subtítulo, 2 CTAs
- **Cómo funciona**: 3 pasos (1. Anfitriones alojan nodos → 2. La red procesa → 3. Tú consumes)
- **Productos**: Cards MugreCloud + Mugrenetes
- **Sostenibilidad**: CO2Counter animado + imagen solar
- **Comunidad**: Gamificación (ranking, logros, badges)
- **CTA final**: Únete a la red / Empieza a usar MugreCloud

### 2. MugreCloud (`/mugrecloud`)
- Hero con MugreCloud logo + datacenter image
- Servicios: Hosting, Render, IA, Storage — cards
- Arquitectura: Infografía de cómo funciona
- CTA: Empieza gratis

### 3. Mugrenetes (`/mugrenetes`)
- Hero con Mugrenetes images
- Red distribuida explicada: nodos, topología, resiliencia
- Dashboard mockup estilizado
- CTA: Conviértete en anfitrión

### 4. VibeConf (`/vibeconf`)
- Hero con MugreCorpVibeconf.png
- Info del evento, speakers, agenda
- CTA: Registro

### 5. Quiénes Somos (`/quienes-somos`)
- Misión, visión, valores
- Oficinas: new-office y old-office
- Logo EU Inc
- Imagen solar

### 6. Legales (`/privacidad`, `/terminos`)
- Texto legal limpio, minimal
- Logo EU Inc en footer

### 7. Contacto (`/contacto`)
- Formulario simple (nombre, email, mensaje)
- Info de contacto

## Efectos Visuales

1. **Network graph** en hero — partículas blancas/grises sutiles conectadas
2. **Scroll reveal** — fade + slide-up al entrar en viewport
3. **Contador incremental** animado (nodos activos, CO2 ahorrado)
4. **Gradient borders** en cards (border-image con gradiente sutil)
5. **Hover scale** en cards de productos
6. **Smooth scroll** entre secciones
7. **Glassmorphism** sutil en navbar (backdrop-blur)

## i18n

- Default: ES en `/`, EN en `/en/...`
- Todos los textos en JSONs (`es.json`, `en.json`)
- Toggle en navbar con banderas/etiquetas
- URLs con prefijo de idioma

## Optimización de Imágenes

- Conversión a WebP donde sea posible
- Compresión con calidad 80
- Max width 1200px para hero images
- Lazy loading nativo
- srcset con múltiples tamaños via Astro Image component

## Deploy

- Vercel con Astro adapter
- Build command: `npm run build`
- Output: `dist/`
- Dominio ya existente, configurar en Vercel

## Orden de Implementación

1. Setup proyecto (Astro + Tailwind + React + i18n)
2. Optimizar y copiar imágenes a public/
3. Layout base + Navbar + Footer
4. Landing page (hero, secciones, animaciones)
5. Páginas de producto (MugreCloud, Mugrenetes)
6. VibeConf
7. Quiénes somos
8. Legales + Contacto
9. i18n completo (ES/EN)
10. Deploy en Vercel
