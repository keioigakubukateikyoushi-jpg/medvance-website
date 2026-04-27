import { execFileSync } from "node:child_process";
import path from "node:path";

const REPO_ROOT = process.cwd();

/**
 * 指定ファイル（リポジトリルートからの相対パス）の git 最終コミット日時を ISO 文字列で返す。
 * git 不在 / shallow clone / ファイル未追跡などのケースは null を返す。
 * Server-side / build-time でのみ使用すること（child_process を使うため）。
 */
export function getGitMtimeISO(relPath: string): string | null {
  try {
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", relPath],
      { cwd: REPO_ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    ).trim();
    return out || null;
  } catch {
    return null;
  }
}

export function getGitMtimeDate(relPath: string, fallback: string): Date {
  const iso = getGitMtimeISO(relPath);
  return new Date(iso ?? fallback);
}

/**
 * コラム slug から、対応する page.tsx の git 最終更新日を取得。
 */
export function getColumnMtimeISO(slug: string): string | null {
  return getGitMtimeISO(path.join("src", "app", "column", slug, "page.tsx"));
}
