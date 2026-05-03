// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  site: 'https://hugopvigo.github.io',
  base: '/Mugrecorp',
  vite: {
    plugins: [tailwindcss()],
  },
});
