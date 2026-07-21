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
]);

export function isFreeUnit(unitId: string): boolean {
  return FREE_UNIT_IDS.has(unitId);
}
