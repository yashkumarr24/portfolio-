const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

function isImage(filePath) {
  return /\.(jpg|jpeg|png)$/i.test(filePath);
}

async function walk(dir, out) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, out);
    } else if (isImage(full)) {
      out.push(full);
    }
  }
}

async function convertAll() {
  const root = path.join(__dirname, '..', 'public', 'images');
  if (!fs.existsSync(root)) {
    console.log('No public/images directory found.');
    return;
  }
  const files = [];
  await walk(root, files);
  if (!files.length) {
    console.log('No images to convert.');
    return;
  }
  console.log(`Converting ${files.length} images to WebP...`);
  const results = await Promise.allSettled(
    files.map(async (input) => {
      const output = input.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      await sharp(input).webp({ quality: 80 }).toFile(output);
      return path.basename(output);
    })
  );
  const ok = results.filter(r => r.status === 'fulfilled').length;
  const fail = results.length - ok;
  console.log(`Done. Success: ${ok}, Failed: ${fail}`);
}

convertAll().catch((err) => {
  console.error('Conversion failed:', err);
  process.exit(1);
});


