/**
 * 無料公開ユニット（誰でも本文・クイズ・メディアまで閲覧可）
 * それ以外は Medvance塾生見放題・質問し放題。
 * お試しは少数に絞る。
 */
export const FREE_UNIT_IDS = new Set<string>([
  "ME-M1-01", // 数学I・入口（動画・PDFあり）
  "ME-EN-01", // 英語・入口
  "ME-PH-01", // 物理・入口
  "ME-CH-01", // 化学・入口
  "ME-BI-01", // 生物・入口
  "ME-IV-01", // 面接・入口
  "ME-ES-01", // 小論文・入口
  "ME-JA-01", // 共通テスト国語・入口
  "ME-SO-01", // 共通テスト社会・入口
  "ME-IF-01", // 共通テスト情報・入口
  "ADV-M1-06", // 発展・お試し1本
  "ME-M1-04", // 数学I・展開公式（動画・PDFあり）
  "ME-PH-02", // 物理・位置/変位/速度/加速度（動画・PDFあり）
  "ME-PH-03", // 物理・等速直線運動と等加速度直線運動（動画・PDFあり）
]);

export function isFreeUnit(unitId: string): boolean {
  if (FREE_UNIT_IDS.has(unitId)) return true;
  const parentId = unitId.replace(/-P\d+$/, "");
  return parentId !== unitId && FREE_UNIT_IDS.has(parentId);
}
