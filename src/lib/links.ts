export const LINE_URL = "https://lin.ee/Wwn1jaL";
export const LINE_LABEL = "LINEで相談";

/** note アカウント（フッター等と共通） */
export const NOTE_PROFILE_URL = "https://note.com/igakubu_juken";

/**
 * 面接・MMI対策キットの note 記事 URL。
 * 公開後に具体URLへ差し替え（環境変数優先）。
 * 未設定時はプロフィールへフォールバック。
 */
export const NOTE_MENSETSU_KIT_URL =
  process.env.NEXT_PUBLIC_NOTE_MENSETSU_URL?.trim() || NOTE_PROFILE_URL;
