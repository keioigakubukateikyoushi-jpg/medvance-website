import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RecruitBody = {
  name?: string;
  email?: string;
  phone?: string;
  university?: string;
  grade?: string;
  subjects?: string;
  experience?: string;
  hoursPerWeek?: string;
  preferredFormat?: string;
  availableArea?: string;
  profilePublish?: string;
  teachingStyle?: string;
  motivation?: string;
};

function clean(value: unknown, max = 2000) {
  return String(value ?? "").trim().slice(0, max);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function tableRow(label: string, value: string) {
  return `<tr><td style="font-weight:bold;color:#142b57;padding:8px 16px 8px 0;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:8px 0;vertical-align:top;">${escapeHtml(value || "未入力")}</td></tr>`;
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as RecruitBody;

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 80);
  const university = clean(body.university, 300);
  const grade = clean(body.grade, 120);
  const subjects = clean(body.subjects, 300);
  const experience = clean(body.experience, 300);
  const hoursPerWeek = clean(body.hoursPerWeek, 120);
  const preferredFormat = clean(body.preferredFormat, 120);
  const availableArea = clean(body.availableArea, 300);
  const profilePublish = clean(body.profilePublish, 120);
  const teachingStyle = clean(body.teachingStyle, 2000);
  const motivation = clean(body.motivation, 3000);

  if (!name || !email || !university || !subjects || !motivation) {
    return NextResponse.json(
      { error: "氏名、メールアドレス、所属、担当可能科目、応募理由を入力してください。" },
      { status: 400 },
    );
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
      from: `"Medvance 講師応募" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `【Medvance】講師応募: ${name} 様`,
      html: `
<h2>Medvance 講師応募</h2>
<table border="0" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
  ${tableRow("氏名", name)}
  ${tableRow("メールアドレス", email)}
  ${tableRow("電話番号", phone)}
  ${tableRow("所属", university)}
  ${tableRow("学年・卒業区分", grade)}
  ${tableRow("担当可能科目", subjects)}
  ${tableRow("指導経験・受験経験", experience)}
  ${tableRow("週あたり稼働目安", hoursPerWeek)}
  ${tableRow("希望する指導形式", preferredFormat)}
  ${tableRow("対応可能エリア", availableArea)}
  ${tableRow("講師一覧への掲載希望", profilePublish)}
</table>
<h3 style="color:#142b57;">指導スタイル・得意な支援</h3>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:6px;">${escapeHtml(teachingStyle || "未入力")}</p>
<h3 style="color:#142b57;">応募理由・自己PR</h3>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:6px;">${escapeHtml(motivation)}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Medvance" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "【Medvance】講師応募を受け付けました",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;color:#3d3d3d;max-width:620px;margin:0 auto;padding:20px;">
  <div style="background:#0c1a33;padding:32px 24px;text-align:center;border-radius:8px 8px 0 0;">
    <p style="color:#c9922a;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Medvance</p>
    <h1 style="color:#ffffff;font-size:20px;margin:0;">講師応募を受け付けました</h1>
  </div>
  <div style="border:1px solid #e5e1d8;border-top:none;padding:32px 24px;border-radius:0 0 8px 8px;">
    <p style="font-size:15px;">${escapeHtml(name)} 様</p>
    <p style="font-size:14px;line-height:1.8;">
      Medvanceへの講師応募ありがとうございます。<br>
      内容を確認し、通常3営業日以内にメールでご連絡します。
    </p>
    <div style="background:#f7f5f0;border:1px solid #e5e1d8;border-radius:8px;padding:20px;margin:24px 0;">
      <p style="font-size:12px;color:#c9922a;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">選考の流れ</p>
      <p style="font-size:13px;margin:4px 0;">01 書類確認</p>
      <p style="font-size:13px;margin:4px 0;">02 オンライン面談</p>
      <p style="font-size:13px;margin:4px 0;">03 採用・登録・掲載準備</p>
    </div>
    <p style="font-size:13px;margin-top:24px;">
      Medvance<br>
      <a href="https://medvance-edu.com" style="color:#c9922a;">https://medvance-edu.com</a>
    </p>
  </div>
</body>
</html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Recruit mail error:", error);
    return NextResponse.json(
      { error: "メール送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 500 },
    );
  }
}
