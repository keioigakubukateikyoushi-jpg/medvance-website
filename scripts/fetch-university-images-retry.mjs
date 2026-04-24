import fs from "node:fs/promises";
import path from "node:path";

const TMP_DIR = path.resolve(".tmp-university-images");

const RETRIES = [
  { slug: "keio", title: "慶應義塾大学病院" },
  { slug: "nihon", title: "日本大学医学部附属板橋病院" },
  { slug: "tokai", title: "東海大学医学部付属病院" },
  { slug: "kindai", title: "近畿大学病院" },
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
  if (!res.ok) throw new Error(`API ${res.status}`);
  const j = await res.json();
  const p = j?.query?.pages?.[0];
  if (!p?.thumbnail?.source) return null;
  return { url: p.thumbnail.source, width: p.thumbnail.width, height: p.thumbnail.height };
}

async function dl(url, file) {
  const res = await fetch(url, {
    headers: { "User-Agent": "medvance-image-fetcher/1.0" },
  });
  if (!res.ok) throw new Error(`dl ${res.status}`);
  await fs.writeFile(file, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  await fs.mkdir(TMP_DIR, { recursive: true });
  for (const u of RETRIES) {
    process.stdout.write(`${u.slug} (${u.title}) ... `);
    try {
      const img = await fetchPageImage(u.title);
      if (!img) { console.log("no image"); continue; }
      const ext = path.extname(new URL(img.url).pathname).toLowerCase() || ".jpg";
      const f = path.join(TMP_DIR, `${u.slug}${ext}`);
      await dl(img.url, f);
      console.log(`ok (${img.width}x${img.height})`);
    } catch (e) {
      console.log(`error: ${e.message}`);
    }
    await new Promise((r) => setTimeout(r, 250));
  }
}
main();
