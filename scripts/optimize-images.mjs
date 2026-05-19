import sharp from "sharp";
import { stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");

// [input relative to public, output relative to public, maxWidth, quality, format]
const JOBS = [
  // OGP — Facebook/Twitter recommend 1200x630, <8MB but ideally <300KB
  { in: "images/original/og-image.png",  out: "og-image.png",  width: 1200, quality: 82, format: "png"  },

  // Hero/home images
  { in: "images/original/hero.png",      out: "images/hero.webp",   width: 1600, quality: 82, format: "webp" },
  { in: "images/original/about.png",     out: "images/about.webp",  width: 1400, quality: 82, format: "webp" },
  { in: "images/original/logo.png",      out: "images/logo.webp",   width: 512,  quality: 90, format: "webp" },
  { in: "images/original/logo.png",      out: "images/logo.png",    width: 512,  quality: 90, format: "png"  },
  { in: "images/original/note.png",      out: "images/note.webp",   width: 800,  quality: 82, format: "webp" },
  { in: "images/original/flow.jpg",      out: "images/flow.webp",   width: 1400, quality: 82, format: "webp" },

  // Column hero images
  { in: "images/original/generated/medical-yobiko-cost-hero.png",    out: "images/generated/medical-yobiko-cost-hero.webp",    width: 1600, quality: 80, format: "webp" },
  { in: "images/original/generated/national-guide-hero.png",         out: "images/generated/national-guide-hero.webp",         width: 1600, quality: 80, format: "webp" },
  { in: "images/original/generated/ordermade-curriculum-hero.png",   out: "images/generated/ordermade-curriculum-hero.webp",   width: 1600, quality: 80, format: "webp" },
  { in: "images/original/generated/support-juku-hero.png",           out: "images/generated/support-juku-hero.webp",           width: 1600, quality: 80, format: "webp" },
  { in: "images/original/generated/juku-comparison-infographic.png", out: "images/generated/juku-comparison-infographic.webp", width: 1400, quality: 82, format: "webp" },
  { in: "images/original/generated/ordermade-roadmap-infographic.png", out: "images/generated/ordermade-roadmap-infographic.webp", width: 1400, quality: 82, format: "webp" },
];

function fmtBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

async function run() {
  let totalBefore = 0;
  let totalAfter = 0;
  for (const job of JOBS) {
    const input = join(PUBLIC, job.in);
    const output = join(PUBLIC, job.out);
    try {
      const beforeStat = await stat(input);
      totalBefore += beforeStat.size;

      let pipeline = sharp(input).resize({
        width: job.width,
        withoutEnlargement: true,
        fit: "inside",
      });

      if (job.format === "webp") {
        pipeline = pipeline.webp({ quality: job.quality, effort: 6 });
      } else if (job.format === "avif") {
        pipeline = pipeline.avif({ quality: job.quality, effort: 6 });
      } else if (job.format === "png") {
        pipeline = pipeline.png({ compressionLevel: 9, palette: true });
      } else if (job.format === "jpg" || job.format === "jpeg") {
        pipeline = pipeline.jpeg({ quality: job.quality, mozjpeg: true });
      }

      await pipeline.toFile(output);
      const afterStat = await stat(output);
      totalAfter += afterStat.size;

      const reduction = ((1 - afterStat.size / beforeStat.size) * 100).toFixed(1);
      console.log(
        `OK  ${job.in.padEnd(65)} ${fmtBytes(beforeStat.size).padStart(10)} -> ${fmtBytes(afterStat.size).padStart(10)}  (-${reduction}%)`
      );
    } catch (err) {
      console.error(`FAIL ${job.in}: ${err.message}`);
    }
  }

  console.log("\n---");
  console.log(`TOTAL:  ${fmtBytes(totalBefore)}  ->  ${fmtBytes(totalAfter)}  (saved ${fmtBytes(totalBefore - totalAfter)})`);
}

run();
