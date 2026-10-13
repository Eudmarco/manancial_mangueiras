import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  // Domínio próprio no GitHub Pages: base na raiz.
  base: '/',
  // Sem fallback de SPA: caminhos inexistentes dão 404, como no GitHub Pages.
  appType: 'mpa',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  // O código continua escrito em React; o preset troca `react`/`react-dom` por `preact/compat`
  // no bundle (~3x menos JavaScript para baixar e hidratar).
  plugins: [preact()],
  resolve: {
    alias: [
      { find: /^react-dom\/client$/, replacement: 'preact/compat/client' },
      { find: /^react-dom\/server$/, replacement: 'preact/compat/server' },
    ],
  },
  // No build SSR, empacota os ícones para que também usem o alias do Preact (e não o React real).
  ssr: {
    noExternal: ['@heroicons/react'],
  },
});
