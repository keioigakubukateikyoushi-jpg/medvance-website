import { NextResponse } from "next/server";
import {
  memberCookieOptions,
  signMemberToken,
  validateAccessCode,
} from "@/lib/academy/access";

export async function POST(req: Request) {
  let code = "";
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    const body = (await req.json()) as { code?: string };
    code = body.code || "";
  } else {
    const form = await req.formData();
    code = String(form.get("code") || "");
  }

  if (!validateAccessCode(code)) {
    return NextResponse.json(
      { ok: false, error: "アクセスコードが正しくありません。在籍・有料プランの方向けコードをご確認ください。" },
      { status: 401 },
    );
  }

  const token = signMemberToken(code.trim());
  const res = NextResponse.json({ ok: true });
  const opts = memberCookieOptions(token);
  res.cookies.set(opts);
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true });
  res.cookies.set({
    name: "mv_academy_member",
    value: "",
    path: "/",
    maxAge: 0,
  });
  return res;
}
