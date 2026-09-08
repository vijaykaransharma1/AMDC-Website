// compress-hero.mjs
// Compresses all hero images to web-optimised JPEGs (max 1920px wide, ~85% quality)
// Run once: node compress-hero.mjs

import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { existsSync } from 'fs';

const SRC_DIR  = './public/images/amdc hero images';
const OUT_DIR  = './public/images/amdc hero images/optimised';
const MAX_W    = 1920;
const QUALITY  = 82;

await mkdir(OUT_DIR, { recursive: true });

const files = await readdir(SRC_DIR);
const images = files.filter(f => /\.(jpe?g|jpeg|png|heic|webp)$/i.test(f));

let saved = 0;

for (const file of images) {
  const src = path.join(SRC_DIR, file);
  // Output as .jpg always
  const outName = file.replace(/\.(jpe?g|jpeg|png|heic|webp)$/i, '.jpg');
  const out = path.join(OUT_DIR, outName);

  try {
    const info = await sharp(src)
      .resize({ width: MAX_W, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(out);

    console.log(`✅ ${file} → ${outName}  (${(info.size / 1024).toFixed(0)} KB)`);
    saved++;
  } catch (e) {
    console.warn(`⚠️  Skipped ${file}: ${e.message}`);
  }
}

console.log(`\nDone. ${saved}/${images.length} images optimised → ${OUT_DIR}`);
