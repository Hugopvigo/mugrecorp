# MugreCorp Web — Pendientes

> Última actualización: 2026-05-03

---

## 🔴 Crítico (antes de launch)

- [ ] **Formulario de contacto no funciona** — `ContactForm.tsx` usa URL placeholder `https://formspree.io/f/placeholder`. Decidir servicio: Formspree, Google Forms endpoint, Formcarry, Netlify Forms, etc.
- [ ] **Favicon SVG es el de Astro por defecto** — `public/favicon.svg` tiene el logo de Astro, no el de MugreCorp. Reemplazar con SVG del logo MugreCorp.
- [ ] **Falta `site` en `astro.config.mjs`** — No hay `site: 'https://mugrecorp.com'`. Las URLs canónicas y hreflang usan un fallback hardcodeado en vez de `Astro.site`.
- [ ] **Falta `og:image` y `twitter:image`** — No hay imagen de preview para compartir en redes sociales. Crear `public/images/og-image.png` (1200×630px) y añadirla a BaseLayout.
- [ ] **ScrollReveal usa `client:load` en vez de `client:visible`** — ~122 instancias en todas las páginas hidratan React inmediatamente. Solo el hero (NetworkCanvas) debería usar `client:load`. Todo ScrollReveal below-the-fold debería ser `client:visible`.
- [ ] **Imágenes sin `loading="lazy"`** — Ningún `<img>` tiene lazy loading. Solo el hero debería cargar eager. El resto debería tener `loading="lazy"` + `decoding="async"`.
- [ ] **Bug en NetworkCanvas: scale se acumula en resize** — Cada `resize()` llama `ctx.scale()` sin resetear el transform. Después de varios resizes, el canvas se renderiza mal. Fix: `ctx.setTransform(1,0,0,1,0,0)` antes de re-aplicar scale.
- [ ] **VibeConf dice "2025"** — `es.json` y `en.json` tienen `vibeconf.hero_title: "VibeConf AI 2025"`. Actualizar a 2026.
- [ ] **Formulario sin feedback de error** — Si falla el envío, el usuario no ve ningún mensaje. Tampoco se resetean los campos tras éxito. Añadir mensajes visuales de success/error y reset.

---

## 🟡 Importante (post-launch, pero pronto)

- [ ] **URLs en inglés usan slugs en español** — `/en/contacto`, `/en/quienes-somos`, `/en/privacidad`, `/en/terminos`. Valorar si cambiar a `/en/contact`, `/en/about`, `/en/privacy`, `/en/terms`.
- [ ] **Imágenes PNG sin convertir a WebP** — `logo-eu-inc.png` (114 KB) y `mugrecloud-logo.png` (314 KB). Convertir a WebP para ahorrar peso.
- [ ] **`lucide-react` y `framer-motion` instalados pero NUNCA usados** — 0 imports en todo el codebase. Eliminar de `package.json` para reducir bundle o empezar a usarlos (reemplazar emojis y SVGs inline por Lucide icons; usar Framer Motion en ScrollReveal).
- [ ] **Emojis en la sección comunidad** — `🏆🎖️🎁📈` en `index.astro` son inconsistentes con el resto del sitio (que usa SVGs). Reemplazar con Lucide icons.
- [ ] **No hay `robots.txt`** — Crear `public/robots.txt`.
- [ ] **No hay sitemap** — Instalar `@astrojs/sitemap` y configurar en `astro.config.mjs`.
- [ ] **No hay `apple-touch-icon.png`** — Crear 180×180px para iOS bookmarks.
- [ ] **Descripciones meta duplicadas** — Todas las páginas usan la misma description por defecto. Cada página debería pasar su propia `description` prop a BaseLayout.
- [ ] **Navbar mobile sin animación** — El menú hamburguesa aparece/desaparece sin transición. Añadir slide-down animado.
- [ ] **Falta icono de "X" para cerrar menú mobile** — El botón hamburguesa no cambia visualmente al abrirse el menú.
- [ ] **ContactForm sin protección anti-spam** — Añadir honeypot field mínimo. Formspree tiene spam filtering integrado, pero un honeypot ayuda.
- [ ] **Links CTA engañosos** — "Empieza gratis" en MugreCloud solo scrollea a `#services`, no a un signup. VibeConf "Register" va a `/contacto`. Revisar UX de los CTAs.

---

## 🟢 Mejoras (nice to have)

- [ ] **Falta `<meta name="theme-color">`** — Debería ser `#000000` para browsers mobile.
- [ ] **Falta `<meta name="robots">`** — Añadir `index, follow` explícito.
- [ ] **Quitar `<meta name="generator">`** — Filtra info del framework. Opcional.
- [ ] **Skip-to-content link** — Añadir link "Saltar al contenido" para usuarios de teclado (accesibilidad).
- [ ] **`<main>` sin `id`** — Añadir `id="main-content"` para el skip link.
- [ ] **Canvas sin `aria-hidden="true"`** — NetworkCanvas es decorativo. Añadir atributo.
- [ ] **SVGs inline sin `aria-hidden="true"` ni `focusable="false"`** — Todos los iconos SVG decorativos deberían tener ambos atributos.
- [ ] **`<nav>` sin `aria-label`** — Añadir `aria-label="Navegación principal"` al nav.
- [ ] **Menu mobile sin atributos ARIA** — Falta `aria-expanded`, `aria-hidden` en el toggle.
- [ ] **CO2Counter sin `aria-live`** — Los contadores animados no se anuncian a screen readers.
- [ ] **Navbar CTA oculto en mobile** — `"Descubre MugreCloud"` tiene `hidden sm:inline-flex`. Considerar mostrar algo en mobile.
- [ ] **Resize listener en NetworkCanvas sin debounce** — Añadir debounce al resize handler.
- [ ] **Resize listener en NetworkCanvas no se limpia** — Añadir `removeEventListener` en el cleanup del useEffect.
- [ ] **Nodos del canvas no se reposicionan en resize** — Si la ventana crece, quedan espacios vacíos sin nodos.
- [ ] **Textos legales placeholder** — Privacidad y Términos son un solo párrafo cada uno. Necesitan texto legal real con GDPR/LOPDGDD, cookies policy, fechas de vigencia, etc.
- [ ] **Fecha de VibeConf hardcodeada como "Próximamente"** — Cuando haya fecha real, actualizar en ambos i18n JSONs.
- [ ] **Emails hardcodeados en i18n** — `hola@mugrecorp.com` y `privacy@mugrecorp.com` están dentro del texto de los JSONs. Si cambian, hay que editar a mano.
- [ ] **Contadores de sostenibilidad hardcodeados** — 47t CO2, 128 nodos, 73% ahorro, 56 hosts son fijos. Considerar source desde config/data file.
- [ ] **Version `0.0.1` en package.json** — Actualizar a versión semver real para producción.
- [ ] **Usar componente `<Image />` de Astro** — Actualmente todos los `<img>` son raw. `<Image />` genera srcset automático y optimización.
- [ ] **Google Fonts auto-hosted** — Considerar self-hostear Inter como WOFF2 para eliminar dependencia de CDN externo y mejorar rendimiento.
- [ ] **No hay PWA manifest** — `manifest.json` para instalabilidad en mobile.
- [ ] **Duplicación masiva de código ES/EN** — Las 8 páginas EN son copias de las ES. Considerar `[lang]` dynamic routes para reducir de 16 a 8 archivos.
- [ ] **i18n `t()` falla silenciosamente** — Si falta una key, muestra la key literal. Añadir warning en dev.
- [ ] **`TranslationKey` es `string`** — No da type safety. Podría derivarse del JSON como union type.
- [ ] **Import unused de favicon** — `import favicon from '../../public/favicon.ico'` en BaseLayout nunca se usa.
- [ ] **Mobile menu usa `<div>` con `<a>`** — Debería usar `<ul>/<li>` semántico como el footer.
- [ ] **Form placeholder sin atributo `placeholder`** — Los inputs del ContactForm tienen clases CSS de placeholder pero no el atributo HTML.

---

## 🚀 Deploy

- [ ] **Conectar repo en Vercel** — Ir a [vercel.com/new](https://vercel.com/new), importar `Hugopvigo/mugrecorp`. Framework: Astro. Build command: `npm run build`. Output: `dist/`. No necesita adapter (SSG puro).
- [ ] **Configurar dominio** — Apuntar `mugrecorp.com` a Vercel DNS.
- [ ] **Configurar `site` en `astro.config.mjs`** — `site: 'https://mugrecorp.com'` una vez el dominio esté activo.

---

## 📋 Notas

- **Formulario**: Opciones gratuitas — Formspree (50 submissions/mes gratis), Formcarry, Netlify Forms (si se migra), Google Apps Script webhook. Formspree es lo más simple.
- **Favicon SVG**: Necesita el archivo vectorial del logo MugreCorp. Mientras, el `.ico` funciona.
- **Imágenes OG**: Tamaño 1200×630px, fondo negro con logo y tagline.
