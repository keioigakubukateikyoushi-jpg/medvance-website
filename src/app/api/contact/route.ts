import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

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

  try {
    await transporter.sendMail({
      from: `"Medvance お問い合わせ" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【Medvance】お問い合わせ：${name} 様`,
      text: `
お名前：${name}
メールアドレス：${email}
電話番号：${phone || "未入力"}

【お問い合わせ内容】
${message}
      `.trim(),
      html: `
<h2>Medvance お問い合わせ</h2>
<table border="0" cellpadding="8" style="border-collapse:collapse;">
  <tr><td style="font-weight:bold;color:#142b57;">お名前</td><td>${name}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">メールアドレス</td><td><a href="mailto:${email}">${email}</a></td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">電話番号</td><td>${phone || "未入力"}</td></tr>
</table>
<br>
<p style="font-weight:bold;color:#142b57;">お問い合わせ内容</p>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:4px;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("メール送信エラー:", error);
    return NextResponse.json({ error: "メール送信に失敗しました" }, { status: 500 });
  }
}
