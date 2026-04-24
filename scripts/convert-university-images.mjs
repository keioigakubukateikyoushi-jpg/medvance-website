import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const TMP = path.resolve(".tmp-university-images");
const OUT = path.resolve("public/images/universities");

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  const entries = await fs.readdir(TMP);
  const imgs = entries.filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f));
  for (const f of imgs) {
    const slug = path.parse(f).name;
    const input = path.join(TMP, f);
    const output = path.join(OUT, `${slug}.webp`);
    try {
      await sharp(input)
        .resize({ width: 1600, height: 900, fit: "cover", position: "attention" })
        .webp({ quality: 82 })
        .toFile(output);
      const stat = await fs.stat(output);
      console.log(`${slug}.webp  ${(stat.size / 1024).toFixed(0)}KB`);
    } catch (e) {
      console.error(`${slug} failed: ${e.message}`);
    }
  }
}

main();
