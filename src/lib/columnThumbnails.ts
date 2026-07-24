// コラム記事のサムネイル画像マップ。
// 既に保有している大学校舎の実写を、コラム内容に合うように割り当てる。
// 外部ストック写真を使わず、Medvanceの「大学実写のある塾」という一貫ブランドを維持する。

type ThumbCategory =
  | "勉強法"
  | "受験戦略"
  | "受験情報"
  | "大学選び"
  | "入試対策"
  | "再受験"
  | "塾・指導";

// カテゴリのデフォルト。大学ごとに校舎の雰囲気が違うので、記事の内容軸で選ぶ。
const categoryDefaults: Record<ThumbCategory, string> = {
  勉強法: "/images/universities/keio.webp", // 最難関の象徴。勉強法は慶應医合格者の視点で書かれている。
  受験戦略: "/images/universities/juntendo.webp", // 順天堂本郷=戦略設計のイメージ。
  受験情報: "/images/universities/jikei.webp", // 慈恵の伝統的校舎。情報・制度の記事に合う。
  大学選び: "/images/universities/showa.webp", // 昭和医大=複数私立の代表格。
  入試対策: "/images/universities/nippon-medical.webp", // 日医=面接/小論文が重い学校の代表。
  再受験: "/images/universities/osaka-ika.webp", // 関西の老舗。再受験生も多い。
  "塾・指導": "/images/universities/toho.webp", // 東邦大。指導の記事に校舎実写を合わせる。
};

// slug個別マッピング。該当の大学を直接扱う記事は、その大学の写真を使うとCTRが上がる。
const slugOverrides: Record<string, string> = {
  // 慶應関連はすべて慶應の写真
  "keio-guide": "/images/universities/keio.webp",
  "keio-kateikyoushi": "/images/universities/keio.webp",
  "keio-naibu-kateikyoushi": "/images/universities/keio.webp",
  "keio-naibu-seiseki": "/images/universities/keio.webp",
  "keio-naibu-shikumi": "/images/universities/keio.webp",
  "keio-fuzoku-kateikyoushi": "/images/universities/keio.webp",
  // 私立比較記事
  "private-top5": "/images/universities/jikei.webp",
  "private-nyuushiyasui": "/images/universities/iwate.webp",
  "private-kakomon-years": "/images/universities/nippon-medical.webp",
  "shigaku-vs-kokuritsu": "/images/universities/jikei.webp",
  "gakuhi": "/images/universities/kindai.webp",
  // 国公立
  "national-kakomon-years": "/images/universities/juntendo.webp",
  // 面接・小論文・MMI
  "mensetu": "/images/universities/juntendo.webp",
  "mensetu-timing": "/images/universities/juntendo.webp",
  "mmi-taisaku": "/images/universities/nippon-medical.webp",
  "mmi-timing": "/images/universities/nippon-medical.webp",
  "shobun": "/images/universities/keio.webp",
  "shoronbun-taisaku": "/images/universities/keio.webp",
  "shoronbun-timing": "/images/universities/keio.webp",
  "shiboriyusho-writing": "/images/universities/jikei.webp",
  "mensetu-shoronbun-kateikyoushi": "/images/universities/keio.webp",
  // 科目別勉強法
  "english-study-method": "/images/universities/keio.webp",
  "math-study-method": "/images/universities/juntendo.webp",
  "chemistry-study-method": "/images/universities/showa.webp",
  "physics-study-method": "/images/universities/jikei.webp",
  "biology-study-method": "/images/universities/nippon-medical.webp",
  "study-method": "/images/universities/keio.webp",
  // ロードマップ/年間計画
  "roadmap": "/images/universities/juntendo.webp",
  "april-year-plan": "/images/universities/juntendo.webp",
  "new-high3-april-plan": "/images/universities/keio.webp",
  "ronin-april-plan": "/images/universities/osaka-ika.webp",
  // 時期系
  "juken-timing": "/images/universities/juntendo.webp",
  "kakomon-timing": "/images/universities/jikei.webp",
  "natsu-manikiai": "/images/universities/nippon-medical.webp",
  // 浪人・再受験
  "saijuken": "/images/universities/osaka-ika.webp",
  "nani-nuro": "/images/universities/osaka-ika.webp",
  "ronin-kateikyoushi": "/images/universities/osaka-ika.webp",
  // 塾・家庭教師
  "juku-erabi": "/images/universities/toho.webp",
  "support-juku-choice": "/images/universities/toho.webp",
  "medical-yobiko-cost": "/images/universities/kindai.webp",
  "ordermade-curriculum": "/images/universities/toho.webp",
  "kateikyoushi": "/images/universities/toho.webp",
  "igakubu-kateikyoushi-hikaku": "/images/universities/toho.webp",
  "igakubu-kateikyoushi-online": "/images/universities/toho.webp",
  "igakubu-kateikyoushi-ryokin": "/images/universities/kindai.webp",
  "igakubu-juku-osusume": "/images/universities/toho.webp",
  "dokugaku-genkai": "/images/universities/toho.webp",
  // 難関大・推薦
  "nangandai-kateikyoushi": "/images/universities/keio.webp",
  "suisen-ao-taisaku": "/images/universities/keio.webp",
  // 学校成績系
  "seiseki-kateikyoushi": "/images/universities/keio.webp",
  "teiki-test-kateikyoushi": "/images/universities/keio.webp",
  // その他
  "hensachi": "/images/universities/jikei.webp",
  "difference": "/images/universities/juntendo.webp",
  "moshi-katsuyo": "/images/universities/juntendo.webp",
  "junrejo-goukaku": "/images/universities/showa.webp",
  // 2026-07 追加コラム
  "academy-mihoudai": "/images/universities/toho.webp",
  "video-gakushu-katsuyo": "/images/universities/keio.webp",
  "igakubu-juken-susume": "/images/universities/juntendo.webp",
  "igakubu-genzai-kara": "/images/universities/juntendo.webp",
  "oya-igakubu-juken": "/images/universities/jikei.webp",
  "ishi-mezasu-riyuu": "/images/universities/nippon-medical.webp",
};

export function getColumnThumbnail(slug: string, category?: string): string | null {
  const override = slugOverrides[slug];
  if (override) return override;
  if (category && category in categoryDefaults) {
    return categoryDefaults[category as ThumbCategory];
  }
  return null;
}
