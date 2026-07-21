import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";
import { isFreeUnit } from "./freeUnits";

export const ACADEMY_COOKIE = "mv_academy_member";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days

function secret(): string {
  return (
    process.env.ACADEMY_ACCESS_SECRET ||
    process.env.ACADEMY_MEMBER_SECRET ||
    "medvance-academy-dev-secret-change-me"
  );
}

/** 在籍・コーチング含む有料プラン向けコード（カンマ区切り）。本番は env で上書き。 */
export function memberCodes(): string[] {
  const raw =
    process.env.ACADEMY_MEMBER_CODES ||
    // 開発・デモ用（本番デプロイ前に必ず env で差し替え）
    "MEDVANCE-DEMO-MEMBER,MV-COACHING-ACCESS";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

export function signMemberToken(code: string): string {
  const body = `member:${code}`;
  const sig = createHmac("sha256", secret()).update(body).digest("hex");
  return `${Buffer.from(body).toString("base64url")}.${sig}`;
}

export function verifyMemberToken(token: string | undefined): boolean {
  if (!token) return false;
  const [b64, sig] = token.split(".");
  if (!b64 || !sig) return false;
  let body: string;
  try {
    body = Buffer.from(b64, "base64url").toString("utf8");
  } catch {
    return false;
  }
  if (!body.startsWith("member:")) return false;
  const code = body.slice("member:".length);
  if (!memberCodes().includes(code)) return false;
  const expected = createHmac("sha256", secret()).update(body).digest("hex");
  try {
    return timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function validateAccessCode(code: string): boolean {
  const normalized = code.trim();
  return memberCodes().includes(normalized);
}

export async function isAcademyMember(): Promise<boolean> {
  const jar = await cookies();
  return verifyMemberToken(jar.get(ACADEMY_COOKIE)?.value);
}

export function canViewUnit(unitId: string, isMember: boolean): boolean {
  return isMember || isFreeUnit(unitId);
}

export function memberCookieOptions(token: string) {
  return {
    name: ACADEMY_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  };
}
