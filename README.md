# Manancial Mangueiras e Conexões — landing page

Site: https://manancialmangueirasgo.com.br (GitHub Pages)

React (servido como Preact via `@preact/preset-vite`) + Vite + Tailwind 3. A página é **pré-renderizada no build**: o HTML publicado já traz todo o conteúdo, o CSS inline e o JSON-LD, para buscadores e robôs de IA que não executam JavaScript.

## Comandos

| Comando | O que faz |
|---|---|
| `npm install` | Instala as dependências (Node 20+) |
| `npm run dev` | Servidor local em http://localhost:3000 |
| `npm run build` | Build do cliente → build SSR → `scripts/prerender.mjs` (gera `dist/index.html`, `llms.txt` e `sitemap.xml`) |
| `npm run preview` | Serve o `dist/` em http://localhost:4173 (404 em caminhos inexistentes, como no GitHub Pages) |
| `npm run typecheck` | Checagem de tipos |
| `npm run optimize-media` | Regenera `public/img` e `public/media` a partir dos originais no Supabase (AVIF/WebP em vários tamanhos, vídeo comprimido) |
| `npm run deploy` | Build + publica `dist/` no branch `gh-pages` |

## Onde mudar cada coisa

- **Telefone, endereço, horário, produtos e FAQ:** somente em `data/business.ts`. Esse arquivo alimenta a página, o JSON-LD (`seo.ts`), o `llms.txt` e as ferramentas WebMCP (`webmcp.ts`).
- **Imagens novas:** adicionar o original no Supabase, incluir no `scripts/optimize-images.mjs` e rodar `npm run optimize-media`. O endpoint público do Supabase **ignora** `?w=&q=`, por isso as variantes são geradas localmente.
- **Cores da marca:** `tailwind.config.js`. Os tons foram escurecidos para contraste AA; mantenha ≥ 4,5:1 com texto branco.

## Navegação agêntica (WebMCP)

- Formulário "Solicitar orçamento" (`components/QuoteForm.tsx`) com anotações declarativas `toolname` / `tooldescription` / `toolparamdescription`. Ele monta a mensagem e abre o WhatsApp; o envio é sempre confirmado pelo usuário.
- Ferramentas somente leitura registradas em `webmcp.ts`: `obter_contato`, `obter_horario_funcionamento`, `obter_endereco_e_rotas`, `listar_produtos`, `perguntas_frequentes`.
- Para testar no Chrome: `chrome://flags/#enable-webmcp-testing`.

## Pendências de conteúdo (confirmar com o cliente)

Marcadas com `TODO(confirmar)` em `data/business.ts`:

- Link do Perfil da Empresa no Google, e-mail e ano de fundação (entram em `sameAs`/`email`/`foundingDate`).
- Área de atendimento além de Goiânia e região metropolitana.
- FAQ: montagem/prensagem sob medida, entrega, marcas trabalhadas.

## Fora do código

1. Google Search Console: verificar o domínio, enviar `sitemap.xml` e pedir indexação.
2. Bing Webmaster Tools + IndexNow e Bing Places (ChatGPT Search e Copilot usam o índice do Bing).
3. Perfil da Empresa no Google: categorias, produtos, fotos, posts e pedido de avaliações após a venda.
4. Apple Business Connect.
5. Nome, endereço e telefone idênticos em Instagram, Facebook, Google, Bing e diretórios, com link para o site.
