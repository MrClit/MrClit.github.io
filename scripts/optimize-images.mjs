// Genera variantes optimizadas (AVIF/WebP/JPEG) de los avatares.
// Fuente: assets-src/ (originales de alta resolución, no desplegados).
// Salida: public/ (commiteada; el deploy solo sirve estas versiones).
//
// Uso: pnpm optimize:images
//
// Ejecutar manualmente cuando cambien los originales; CI solo corre `vite build`.

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { stat } from 'node:fs/promises';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'assets-src');
const OUT = join(__dirname, '..', 'public');

// Cada entrada genera 3 ficheros: <name>.avif, <name>.webp, <name>.jpeg
const targets = [
  {
    name: 'avatar-face',
    input: 'avatar-face.jpeg',
    // Mostrado a 128x128 (object-cover) → 2x para retina.
    resize: { width: 256, height: 256, fit: 'cover' },
  },
  {
    name: 'avatar',
    input: 'avatar.jpeg',
    // Mostrado a ~256-320px de alto (object-contain) → 2x para retina.
    resize: { height: 640, fit: 'inside', withoutEnlargement: true },
  },
];

const kb = (bytes) => `${(bytes / 1024).toFixed(1)} KB`;

async function size(path) {
  try {
    return kb((await stat(path)).size);
  } catch {
    return 'n/a';
  }
}

for (const t of targets) {
  const inputPath = join(SRC, t.input);
  const base = sharp(inputPath).resize(t.resize);

  const outputs = [
    { ext: 'avif', fn: (img) => img.avif({ quality: 50 }) },
    { ext: 'webp', fn: (img) => img.webp({ quality: 80 }) },
    { ext: 'jpeg', fn: (img) => img.jpeg({ quality: 80, mozjpeg: true }) },
  ];

  for (const { ext, fn } of outputs) {
    const outPath = join(OUT, `${t.name}.${ext}`);
    await fn(base.clone()).toFile(outPath);
    console.log(`✓ ${t.name}.${ext.padEnd(4)} → ${await size(outPath)}`);
  }
}

console.log('\nVariantes generadas en public/.');
