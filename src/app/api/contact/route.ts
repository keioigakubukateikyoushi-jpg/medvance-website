import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, status, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "必須項目が未入力です" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const manualUrl = "https://medvance-edu.com/download";

  try {
    // 管理者への通知
    await transporter.sendMail({
      from: `"Medvance お問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【Medvance】無料相談申し込み：${name} 様`,
      html: `
<h2>Medvance 無料相談申し込み</h2>
<table border="0" cellpadding="8" style="border-collapse:collapse;">
  <tr><td style="font-weight:bold;color:#142b57;">お名前</td><td>${name}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">メールアドレス</td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">電話番号</td><td>${phone || "未入力"}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">現在の状況</td><td>${status || "未選択"}</td></tr>
</table>
<br>
<p style="font-weight:bold;color:#142b57;">ご相談内容</p>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:4px;">${message}</p>
      `,
    });

    // ユーザーへの自動返信（マニュアル付き）
    await transporter.sendMail({
      from: `"Medvance 医学部受験専門塾" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "【Medvance】無料相談のお申し込みを受け付けました",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;color:#3d3d3d;max-width:600px;margin:0 auto;padding:20px;">

  <div style="background:#0c1a33;padding:32px 24px;text-align:center;border-radius:8px 8px 0 0;">
    <p style="color:#c9922a;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Medvance</p>
    <h1 style="color:#ffffff;font-size:20px;margin:0;">無料相談のお申し込みを受け付けました</h1>
  </div>

  <div style="border:1px solid #e5e1d8;border-top:none;padding:32px 24px;border-radius:0 0 8px 8px;">
    <p style="font-size:15px;">${name} 様</p>
    <p style="font-size:14px;line-height:1.8;">
      無料相談のお申し込みありがとうございます。<br>
      2営業日以内に、担当者よりメールでご連絡いたします。
    </p>

    <div style="background:#f7f5f0;border:1px solid #e5e1d8;border-radius:8px;padding:20px;margin:24px 0;">
      <p style="font-size:12px;color:#c9922a;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">次のステップ</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">01 — 担当者からメールでご連絡します（2営業日以内）</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">02 — 日程調整の後、ZoomまたはGoogle Meetで30分の無料相談</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">03 — 相談内容をもとに、合格プランをご提案します</p>
    </div>

    <hr style="border:none;border-top:1px solid #e5e1d8;margin:24px 0;">

    <p style="font-size:13px;font-weight:bold;color:#0c1a33;margin-bottom:8px;">📘 医学部受験戦略マニュアル（無料）</p>
    <p style="font-size:13px;color:#6b7280;line-height:1.8;margin-bottom:16px;">
      相談前に読んでおくと、より具体的なお話ができます。<br>
      以下からご覧ください。
    </p>
    <div style="text-align:center;margin:16px 0;">
      <a href="${manualUrl}" style="background:#c9922a;color:#ffffff;font-weight:bold;font-size:14px;padding:14px 36px;border-radius:8px;text-decoration:none;display:inline-block;">
        マニュアルを読む →
      </a>
      <p style="color:#9ca3af;font-size:11px;margin-top:8px;">${manualUrl}</p>
    </div>

    <hr style="border:none;border-top:1px solid #e5e1d8;margin:24px 0;">

    <p style="font-size:13px;color:#3d3d3d;margin-top:24px;">
      Medvance 医学部受験専門塾<br>
      <a href="https://medvance-edu.com" style="color:#c9922a;">https://medvance-edu.com</a>
    </p>
  </div>

</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
  }
}
