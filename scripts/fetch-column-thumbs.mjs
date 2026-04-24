// Wikimedia Commons検索APIから画像を取得する。
import fs from "node:fs/promises";
import path from "node:path";

const OUT = path.resolve(".tmp-column-thumbs");

const QUERIES = [
  { slug: "study", q: "student studying desk books" },
  { slug: "interview", q: "job interview handshake" },
  { slug: "books", q: "stack of textbooks library" },
  { slug: "medical", q: "stethoscope white coat medical" },
  { slug: "money", q: "Japanese yen coins banknotes" },
  { slug: "calendar", q: "calendar planner schedule" },
  { slug: "online", q: "laptop video call learning" },
  { slug: "writing", q: "person writing notebook pen" },
  { slug: "teacher", q: "teacher classroom blackboard" },
  { slug: "exam", q: "exam paper pencil test" },
];

async function searchImageTitle(query) {
  // ファイル名検索（namespace=6）
  const searchUrl = new URL("https://commons.wikimedia.org/w/api.php");
  searchUrl.search = new URLSearchParams({
    action: "query",
    list: "search",
    srsearch: query + " filetype:bitmap",
    srnamespace: "6",
    srlimit: "5",
    format: "json",
    formatversion: "2",
  }).toString();
  const res = await fetch(searchUrl, { headers: { "User-Agent": "medvance/1.0" } });
  const j = await res.json();
  const results = j?.query?.search ?? [];
  if (!results.length) return null;
  // 最初の結果を使う
  return results[0].title; // "File:..."
}

async function getImageInfo(fileTitle) {
  const url = new URL("https://commons.wikimedia.org/w/api.php");
  url.search = new URLSearchParams({
    action: "query",
    titles: fileTitle,
    prop: "imageinfo",
    iiprop: "url|size",
    iiurlwidth: "1600",
    format: "json",
    formatversion: "2",
  }).toString();
  const res = await fetch(url, { headers: { "User-Agent": "medvance/1.0" } });
  const j = await res.json();
  const page = j?.query?.pages?.[0];
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  return info.thumburl || info.url;
}

async function dl(url, file) {
  const res = await fetch(url, { headers: { "User-Agent": "medvance/1.0" } });
  if (!res.ok) throw new Error(`${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await fs.writeFile(file, buf);
  return buf.length;
}

async function main() {
  await fs.mkdir(OUT, { recursive: true });
  for (const q of QUERIES) {
    process.stdout.write(`${q.slug} (${q.q}) ... `);
    try {
      const title = await searchImageTitle(q.q);
      if (!title) { console.log("no results"); continue; }
      const imgUrl = await getImageInfo(title);
      if (!imgUrl) { console.log("no url"); continue; }
      const ext = path.extname(new URL(imgUrl).pathname).toLowerCase() || ".jpg";
      const p = path.join(OUT, `${q.slug}${ext}`);
      const s = await dl(imgUrl, p);
      console.log(`ok ${title.slice(0, 40)}... (${(s / 1024).toFixed(0)}KB)`);
    } catch (e) {
      console.log(`error: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 400));
  }
}
main();
