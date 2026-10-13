// Gera as imagens e o vídeo otimizados em public/ a partir dos originais do Supabase.
// Executar uma vez (ou quando uma mídia mudar): `npm run optimize-media`.
// O endpoint /object/public/ do Supabase ignora ?w=&q=, por isso as variantes são geradas aqui.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import sharp from 'sharp';
import ffmpegPath from 'ffmpeg-static';

const run = promisify(execFile);
const BASE = 'https://kjunynajewbtxqojxbok.supabase.co/storage/v1/object/public/Fotos%20Manancial%20Mangueiras/';
const CACHE = '.cache/originals';
const IMG = 'public/img';
const MEDIA = 'public/media';

const download = async (file) => {
    const dest = path.join(CACHE, decodeURIComponent(file));
    try {
        await access(dest);
    } catch {
        const res = await fetch(BASE + file);
        if (!res.ok) throw new Error(`${res.status} ao baixar ${file}`);
        await writeFile(dest, Buffer.from(await res.arrayBuffer()));
    }
    return dest;
};

// Gera AVIF + WebP para cada largura; `square` recorta o centro (tiles da galeria usam object-cover quadrado).
const variants = async (src, name, widths, { square = false } = {}) => {
    for (const w of widths) {
        const base = sharp(src).resize(w, square ? w : undefined, { fit: 'cover', withoutEnlargement: true });
        await base.clone().avif({ quality: 50, effort: 6 }).toFile(path.join(IMG, `${name}-${w}.avif`));
        await base.clone().webp({ quality: 70, effort: 6 }).toFile(path.join(IMG, `${name}-${w}.webp`));
    }
};

await mkdir(CACHE, { recursive: true });
await mkdir(IMG, { recursive: true });
await mkdir(MEDIA, { recursive: true });

const hero = await download('Retroescavadeira.webp');
await variants(hero, 'hero', [480, 768, 1024]);
await sharp(hero).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 78, mozjpeg: true }).toFile(path.join(IMG, 'og.jpg'));

const gallery = {
    'conexoes-alta-pressao': 'diversas_conex_es_usadas_em_mangueiras_sob_uma%20(1).webp',
    'conexoes-pneumaticas': 'diversas_conex_es_usadas_em_mangueiras_sob_uma.webp',
    'estoque-mangueiras': 'estante_com_rolos_de_mangueira_de_alta.webp',
    'mangueira-alta-pressao': 'mangueiras_de_alta_press_o_automotivas%20(1).webp',
    'mangueira-quimicos': 'mangueiras_de_alta_press_o_automotivas%20(2).webp',
    'mangueiras-montadas': 'mangueiras_de_alta_press_o_automotivas.webp',
};
for (const [name, file] of Object.entries(gallery)) {
    await variants(await download(file), name, [400, 800], { square: true });
}

const poster = await download('Tipos%20de%20mangueiras.webp');
await sharp(poster).resize(640).webp({ quality: 65 }).toFile(path.join(IMG, 'video-poster.webp'));

const logo = await download('Manancial_20241023_144508_0000.png');
await variants(logo, 'logo', [144]);
await sharp(logo).resize(512).png({ compressionLevel: 9 }).toFile(path.join(IMG, 'logo-512.png'));
await sharp(logo).resize(192).png({ compressionLevel: 9 }).toFile('public/icon-192.png');
await sharp(logo).resize(512).png({ compressionLevel: 9 }).toFile('public/icon-512.png');
await sharp(logo).resize(32).png({ compressionLevel: 9 }).toFile('public/favicon-32.png');
await sharp(logo).resize(180).flatten({ background: '#ffffff' }).png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');

// Vídeo decorativo: 480p, sem áudio, MP4 (H.264). WebM VP9 ficou maior que o MP4 neste clipe, então não é gerado.
const video = await download('retro%20em%20movimento.mp4');
await run(ffmpegPath, ['-y', '-i', video, '-an', '-vf', 'scale=480:-2,fps=24', '-c:v', 'libx264', '-preset', 'slow', '-crf', '28', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', path.join(MEDIA, 'retro-em-movimento.mp4')]);

console.log('Mídia otimizada gerada em public/img e public/media.');
