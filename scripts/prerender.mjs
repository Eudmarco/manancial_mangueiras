// Pós-build: injeta o HTML pré-renderizado, o CSS inline e o JSON-LD em dist/index.html,
// e gera llms.txt e sitemap.xml a partir de data/business.ts.
// Assim buscadores e robôs de IA que não executam JavaScript leem a página completa.
import { readFile, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const DIST = 'dist';
const SSR_DIR = 'dist-ssr';

const { render, buildJsonLd, buildLlmsTxt, buildSitemap } = await import(
    pathToFileURL(path.resolve(SSR_DIR, 'entry-server.js')).href
);

const indexPath = path.join(DIST, 'index.html');
let html = await readFile(indexPath, 'utf8');

// CSS gerado pelo Tailwind vai inline: elimina a única requisição que bloqueia a renderização.
const cssLink = /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/;
const cssMatch = html.match(cssLink);
if (!cssMatch) throw new Error('Folha de estilo do build não encontrada em dist/index.html');
const css = await readFile(path.join(DIST, cssMatch[1]), 'utf8');
html = html.replace(cssMatch[0], '');

const jsonLd = JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c');
const head = `<style>${css}</style>\n    <script type="application/ld+json">${jsonLd}</script>`;

if (!html.includes('<!--app-head-->') || !html.includes('<!--app-html-->')) {
    throw new Error('Marcadores <!--app-head--> / <!--app-html--> ausentes em index.html');
}
html = html.replace('<!--app-head-->', head).replace('<!--app-html-->', render());
await writeFile(indexPath, html);

await writeFile(path.join(DIST, 'llms.txt'), buildLlmsTxt());
await writeFile(path.join(DIST, 'sitemap.xml'), buildSitemap(new Date().toISOString().slice(0, 10)));

await rm(SSR_DIR, { recursive: true, force: true });
console.log(`Pré-renderizado: ${indexPath} (${(Buffer.byteLength(html) / 1024).toFixed(1)} KB), llms.txt, sitemap.xml`);
