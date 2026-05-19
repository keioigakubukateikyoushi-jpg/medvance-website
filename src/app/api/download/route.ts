import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, status } = await req.json();

  if (!name || !email || !status) {
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
      from: `"Medvance 資料請求" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【Medvance】資料請求：${name} 様`,
      html: `
<h2>医学部受験マニュアル 資料請求</h2>
<table border="0" cellpadding="8" style="border-collapse:collapse;">
  <tr><td style="font-weight:bold;color:#0c1a33;">お名前</td><td>${name}</td></tr>
  <tr><td style="font-weight:bold;color:#0c1a33;">メールアドレス</td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="font-weight:bold;color:#0c1a33;">現在の状況</td><td>${status}</td></tr>
</table>
      `,
    });

    // ユーザーへの自動返信
    await transporter.sendMail({
      from: `"Medvance 医学部受験専門塾" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "【Medvance】医学部受験マニュアルをお届けします",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;color:#3d3d3d;max-width:600px;margin:0 auto;padding:20px;">

  <div style="background:#0c1a33;padding:32px 24px;text-align:center;border-radius:8px 8px 0 0;">
    <p style="color:#c9922a;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Medvance</p>
    <h1 style="color:#ffffff;font-size:20px;margin:0;">医学部受験マニュアル</h1>
    <p style="color:rgba(255,255,255,0.65);font-size:13px;margin:8px 0 0;">科目別の進め方と年間スケジュール</p>
  </div>

  <div style="border:1px solid #e5e1d8;border-top:none;padding:32px 24px;border-radius:0 0 8px 8px;">
    <p style="font-size:15px;">${name} 様</p>
    <p style="font-size:14px;line-height:1.8;">
      この度は「医学部受験マニュアル」をご請求いただきありがとうございます。<br>
      以下のボタンからマニュアルをご覧いただけます。
    </p>

    <div style="text-align:center;margin:32px 0;">
      <a href="${manualUrl}" style="background:#c9922a;color:#ffffff;font-weight:bold;font-size:15px;padding:16px 40px;border-radius:8px;text-decoration:none;display:inline-block;">
        マニュアルを読む →
      </a>
      <p style="color:#9ca3af;font-size:11px;margin-top:12px;">
        ${manualUrl}
      </p>
    </div>

    <hr style="border:none;border-top:1px solid #e5e1d8;margin:24px 0;">

    <p style="font-size:13px;color:#6b7280;line-height:1.8;">
      マニュアルをお読みになった後、何かご不明な点や相談したいことがあれば、<br>
      お気軽に返信でご連絡ください。<br><br>
      また、フォーム・LINEでの無料相談も受け付けています。<br>
      <a href="https://medvance-edu.com/contact" style="color:#c9922a;">https://medvance-edu.com/contact</a>
    </p>

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
