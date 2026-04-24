import fs from "node:fs/promises";
import path from "node:path";

const TMP = path.resolve(".tmp-national-images");

const UNIS = [
  ["hirosaki", ["弘前大学医学部", "弘前大学"]],
  ["tohoku", ["東北大学病院", "東北大学"]],
  ["akita", ["秋田大学医学部附属病院", "秋田大学"]],
  ["gunma", ["群馬大学医学部附属病院", "群馬大学"]],
  ["chiba", ["千葉大学医学部附属病院", "千葉大学"]],
  ["tokyo", ["東京大学医学部附属病院", "東京大学"]],
  ["toyama", ["富山大学附属病院", "富山大学"]],
  ["kanazawa", ["金沢大学附属病院", "金沢大学"]],
  ["fukui", ["福井大学医学部附属病院", "福井大学"]],
  ["yamanashi", ["山梨大学医学部附属病院", "山梨大学"]],
  ["shinshu", ["信州大学医学部附属病院", "信州大学"]],
  ["gifu", ["岐阜大学医学部附属病院", "岐阜大学"]],
  ["hamamatsu-medical", ["浜松医科大学"]],
  ["nagoya", ["名古屋大学医学部附属病院", "名古屋大学"]],
  ["mie", ["三重大学医学部附属病院", "三重大学"]],
  ["shiga-medical", ["滋賀医科大学"]],
  ["kyoto", ["京都大学医学部附属病院", "京都大学"]],
  ["osaka", ["大阪大学医学部附属病院", "大阪大学"]],
  ["kobe", ["神戸大学医学部附属病院", "神戸大学"]],
  ["tottori", ["鳥取大学医学部附属病院", "鳥取大学"]],
  ["shimane", ["島根大学医学部附属病院", "島根大学"]],
  ["okayama", ["岡山大学病院", "岡山大学"]],
  ["hiroshima", ["広島大学病院", "広島大学"]],
  ["yamaguchi", ["山口大学医学部附属病院", "山口大学"]],
  ["tokushima", ["徳島大学病院", "徳島大学"]],
  ["kagawa", ["香川大学医学部附属病院", "香川大学"]],
  ["ehime", ["愛媛大学医学部附属病院", "愛媛大学"]],
  ["kochi", ["高知大学医学部附属病院", "高知大学"]],
  ["saga", ["佐賀大学医学部附属病院", "佐賀大学"]],
  ["nagasaki", ["長崎大学病院", "長崎大学"]],
  ["kumamoto", ["熊本大学病院", "熊本大学"]],
  ["miyazaki", ["宮崎大学医学部附属病院", "宮崎大学"]],
  ["kagoshima", ["鹿児島大学病院", "鹿児島大学"]],
  ["ndmc", ["防衛医科大学校"]],
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
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 medvance-bot/1.0 (https://medvance-edu.com; keioigakubukateikyoushi@gmail.com)" } });
  if (!res.ok) return null;
  const j = await res.json();
  const t = j?.query?.pages?.[0]?.thumbnail;
  if (!t?.source) return null;
  return t;
}

async function dl(url, file, retries = 3) {
  for (let i = 0; i < retries; i++) {
    const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 medvance-bot/1.0 (https://medvance-edu.com; keioigakubukateikyoushi@gmail.com)" } });
    if (res.ok) {
      await fs.writeFile(file, Buffer.from(await res.arrayBuffer()));
      return;
    }
    if (res.status === 429) {
      await new Promise(r => setTimeout(r, 3000 * (i + 1)));
      continue;
    }
    throw new Error(`${res.status}`);
  }
  throw new Error(`429 after ${retries} retries`);
}

async function main() {
  await fs.mkdir(TMP, { recursive: true });
  let ok = 0, fail = 0;
  for (const [slug, titles] of UNIS) {
    // スキップ: 既にダウンロード済み
    try {
      const existing = await fs.readdir(TMP);
      if (existing.some(f => f.startsWith(slug + "."))) {
        console.log(`${slug} ... already have`);
        ok++; continue;
      }
    } catch {}

    process.stdout.write(`${slug} ... `);
    let found = null;
    for (const t of titles) {
      try {
        const img = await fetchPageImage(t);
        if (img?.source) { found = { ...img, via: t }; break; }
      } catch {}
      await new Promise(r => setTimeout(r, 500));
    }
    if (!found) { console.log("no image"); fail++; continue; }
    try {
      const ext = path.extname(new URL(found.source).pathname).toLowerCase() || ".jpg";
      const fp = path.join(TMP, slug + ext);
      await dl(found.source, fp);
      console.log(`ok via "${found.via}" (${found.width}x${found.height})`);
      ok++;
    } catch (e) {
      console.log(`dl error: ${e.message}`); fail++;
    }
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log(`\n== ${ok}/${ok+fail} ==`);
}
main();
