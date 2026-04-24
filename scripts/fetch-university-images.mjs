// Wikimedia経由で大学画像を取得する。
// 使い方: node scripts/fetch-university-images.mjs
import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = path.resolve("public/images/universities");
const TMP_DIR = path.resolve(".tmp-university-images");

// 各大学のWikipedia日本語記事タイトル
// 医学部ページが貧弱な場合は大学本体のページを使う（写真の質を優先）
const UNIVERSITIES = [
  { slug: "keio", title: "慶應義塾大学医学部" },
  { slug: "jikei", title: "東京慈恵会医科大学" },
  { slug: "juntendo", title: "順天堂大学" },
  { slug: "showa", title: "昭和医科大学" },
  { slug: "nihon", title: "日本大学医学部" },
  { slug: "nippon-medical", title: "日本医科大学" },
  { slug: "toho", title: "東邦大学" },
  { slug: "kyorin", title: "杏林大学" },
  { slug: "kitasato", title: "北里大学" },
  { slug: "tokai", title: "東海大学医学部" },
  { slug: "kindai", title: "近畿大学医学部" },
  { slug: "osaka-ika", title: "大阪医科薬科大学" },
  { slug: "kansai-ika", title: "関西医科大学" },
  { slug: "fukuoka", title: "福岡大学" },
  { slug: "teikyo", title: "帝京大学" },
  { slug: "tohoku-ika", title: "東北医科薬科大学" },
  { slug: "fujita", title: "藤田医科大学" },
  { slug: "aichi-ika", title: "愛知医科大学" },
  { slug: "hyogo", title: "兵庫医科大学" },
  { slug: "kawasaki-ika", title: "川崎医科大学" },
  { slug: "kurume", title: "久留米大学" },
  { slug: "iwate", title: "岩手医科大学" },
  { slug: "dokkyo", title: "獨協医科大学" },
  { slug: "joshi-ika", title: "東京女子医科大学" },
  { slug: "kanazawa-ika", title: "金沢医科大学" },
  { slug: "iuhw", title: "国際医療福祉大学" },
  { slug: "saitama-ika", title: "埼玉医科大学" },
  { slug: "marianna", title: "聖マリアンナ医科大学" },
  { slug: "tokyo-ika", title: "東京医科大学" },
];

async function fetchPageImage(title) {
  const url = new URL("https://ja.wikipedia.org/w/api.php");
  url.search = new URLSearchParams({
    action: "query",
    titles: title,
    prop: "pageimages",
    format: "json",
    pithumbsize: "1600",
    formatversion: "2",
  }).toString();

  const res = await fetch(url, {
    headers: { "User-Agent": "medvance-image-fetcher/1.0 (contact: keioigakubukateikyoushi@gmail.com)" },
  });
  if (!res.ok) throw new Error(`Wikipedia API ${res.status}`);
  const json = await res.json();
  const page = json?.query?.pages?.[0];
  if (!page?.thumbnail?.source) return null;
  return {
    url: page.thumbnail.source,
    width: page.thumbnail.width,
    height: page.thumbnail.height,
  };
}

async function downloadToFile(url, filePath) {
  const res = await fetch(url, {
    headers: { "User-Agent": "medvance-image-fetcher/1.0 (contact: keioigakubukateikyoushi@gmail.com)" },
  });
  if (!res.ok) throw new Error(`Download ${res.status}: ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(filePath, buf);
  return buf.length;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(TMP_DIR, { recursive: true });

  const results = [];
  for (const uni of UNIVERSITIES) {
    process.stdout.write(`${uni.slug} (${uni.title}) ... `);
    try {
      const img = await fetchPageImage(uni.title);
      if (!img) {
        console.log("no image");
        results.push({ slug: uni.slug, ok: false, reason: "no image" });
        continue;
      }
      const ext = path.extname(new URL(img.url).pathname).toLowerCase() || ".jpg";
      const tmpPath = path.join(TMP_DIR, `${uni.slug}${ext}`);
      const size = await downloadToFile(img.url, tmpPath);
      console.log(`ok (${(size / 1024).toFixed(0)}KB, ${img.width}x${img.height})`);
      results.push({ slug: uni.slug, ok: true, tmp: tmpPath, srcUrl: img.url });
    } catch (e) {
      console.log(`error: ${e.message}`);
      results.push({ slug: uni.slug, ok: false, reason: e.message });
    }
    await new Promise((r) => setTimeout(r, 250));
  }

  await fs.writeFile(
    path.join(TMP_DIR, "_results.json"),
    JSON.stringify(results, null, 2),
  );
  console.log("\n== done ==");
  console.log(`ok: ${results.filter((r) => r.ok).length} / ${results.length}`);
  console.log(`see ${TMP_DIR}/_results.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
