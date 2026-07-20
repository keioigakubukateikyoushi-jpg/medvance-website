import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MIN_FORM_RENDER_MS = 2000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function toText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return value.replace(/[&<>"']/g, (char) => entities[char]);
}

function valueOrFallback(value: unknown, fallback: string) {
  const text = toText(value);
  return text ? escapeHtml(text) : fallback;
}

function includesAny(value: unknown, terms: string[]) {
  const text = toText(value);
  return terms.some((term) => text.includes(term));
}

function getLeadRank({
  privateMedicalPlan,
  parentJoin,
  investmentReadiness,
  plannedPrivateSchools,
  paidDiagnosisReadiness,
}: {
  privateMedicalPlan: unknown;
  parentJoin: unknown;
  investmentReadiness: unknown;
  plannedPrivateSchools: unknown;
  paidDiagnosisReadiness: unknown;
}) {
  const applicantReady = includesAny(privateMedicalPlan, ["国公立", "私立", "併願", "本命"]);
  const parentReady = includesAny(parentJoin, ["同席"]);
  const highInvestment = includesAny(investmentReadiness, ["300万", "600万円", "600万"]);
  const multipleSchools = includesAny(plannedPrivateSchools, ["2〜4校", "5〜8校", "9校以上"]);
  const examPlanReady = multipleSchools || includesAny(privateMedicalPlan, ["国公立医学部が第一志望"]);
  const paidReady = includesAny(paidDiagnosisReadiness, ["有料", "内容次第"]);

  if (applicantReady && parentReady && highInvestment && examPlanReady && paidReady) {
    return "A: 優先対応";
  }

  if (
    includesAny(paidDiagnosisReadiness, ["無料相談だけ"]) ||
    includesAny(parentJoin, ["本人のみ"]) ||
    includesAny(privateMedicalPlan, ["まだ検討中"])
  ) {
    return "C: 要見極め";
  }

  return "B: 通常対応";
}

export async function POST(req: NextRequest) {
  const {
    name,
    email,
    phone,
    relationship,
    status,
    examHistory,
    thisYearIntent,
    privateMedicalPlan,
    currentPrepSchool,
    strategyNeed,
    plannedPrivateSchools,
    targetType,
    targetName,
    latestScore,
    studyHours,
    parentJoin,
    investmentReadiness,
    paidDiagnosisReadiness,
    message,
    source,
    website,
    renderedAt,
    // Attribution (anonymous journey — no PII)
    landingPath,
    landingUrl,
    referrer,
    lastPath,
    submitPath,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    gclid,
    firstTouchAt,
  } = await req.json();
  const nameText = toText(name);
  const emailText = toText(email);
  const websiteText = toText(website);

  // honeypot: ボットだけが埋める隠しフィールド。埋まっていたら 200 を返して送信したフリ
  if (websiteText) {
    return NextResponse.json({ success: true });
  }

  // 送信タイミングガード: フォーム表示から 2 秒未満の submit はボットとみなす
  if (typeof renderedAt === "number" && Date.now() - renderedAt < MIN_FORM_RENDER_MS) {
    return NextResponse.json({ success: true });
  }

  if (!nameText || !emailText) {
    return NextResponse.json({ error: "必須項目が未入力です" }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(emailText)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません" }, { status: 400 });
  }

  const subjectName = nameText.replace(/[\r\n]+/g, " ");
  const safeName = escapeHtml(nameText);
  const safeEmail = escapeHtml(emailText);
  const safePhone = valueOrFallback(phone, "未入力");
  const safeRelationship = valueOrFallback(relationship, "未選択");
  const safeStatus = valueOrFallback(status, "未選択");
  const safeExamHistory = valueOrFallback(examHistory, "未入力");
  const safeThisYearIntent = valueOrFallback(thisYearIntent, "未選択");
  const safePrivateMedicalPlan = valueOrFallback(privateMedicalPlan, "未選択");
  const safeCurrentPrepSchool = valueOrFallback(currentPrepSchool, "未選択");
  const safeStrategyNeed = valueOrFallback(strategyNeed, "未選択");
  const safePlannedPrivateSchools = valueOrFallback(plannedPrivateSchools, "未選択");
  const safeTarget = [targetType, targetName]
    .map(toText)
    .filter(Boolean)
    .map(escapeHtml)
    .join(" / ") || "未入力";
  const safeLatestScore = valueOrFallback(latestScore, "未入力");
  const safeStudyHours = valueOrFallback(studyHours, "未選択");
  const safeParentJoin = valueOrFallback(parentJoin, "未選択");
  const safeInvestmentReadiness = valueOrFallback(investmentReadiness, "未選択");
  const safePaidDiagnosisReadiness = valueOrFallback(paidDiagnosisReadiness, "未選択");
  const safeSource = valueOrFallback(source, "不明");
  const safeMessage = valueOrFallback(message, "未入力");
  const safeLandingPath = valueOrFallback(landingPath, "不明");
  const safeLandingUrl = valueOrFallback(landingUrl, "—");
  const safeReferrer = valueOrFallback(referrer, "なし");
  const safeLastPath = valueOrFallback(lastPath, "—");
  const safeSubmitPath = valueOrFallback(submitPath, "/contact");
  const safeUtmSource = valueOrFallback(utm_source, "—");
  const safeUtmMedium = valueOrFallback(utm_medium, "—");
  const safeUtmCampaign = valueOrFallback(utm_campaign, "—");
  const safeUtmContent = valueOrFallback(utm_content, "—");
  const safeUtmTerm = valueOrFallback(utm_term, "—");
  const safeGclid = toText(gclid) ? "あり" : "なし";
  const safeFirstTouchAt = valueOrFallback(firstTouchAt, "—");
  const safeLeadRank = escapeHtml(getLeadRank({
    privateMedicalPlan,
    parentJoin,
    investmentReadiness,
    plannedPrivateSchools,
    paidDiagnosisReadiness,
  }));

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
      replyTo: emailText,
      subject: `【Medvance】医学部 合格戦略診断：${subjectName} 様`,
      html: `
<h2>Medvance 医学部 合格戦略診断</h2>
<table border="0" cellpadding="8" style="border-collapse:collapse;">
  <tr><td style="font-weight:bold;color:#142b57;">リード判定</td><td>${safeLeadRank}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">お名前</td><td>${safeName}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">メールアドレス</td><td><a href="mailto:${safeEmail}">${safeEmail}</a></td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">電話番号</td><td>${safePhone}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">申込者</td><td>${safeRelationship}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">現在の状況</td><td>${safeStatus}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">前年度の受験結果</td><td>${safeExamHistory}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">今年で決める覚悟</td><td>${safeThisYearIntent}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">医学部の受験方針</td><td>${safePrivateMedicalPlan}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">現在の塾・予備校</td><td>${safeCurrentPrepSchool}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">困っていること</td><td>${safeStrategyNeed}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">志望校</td><td>${safeTarget}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">私立医学部の受験予定校数</td><td>${safePlannedPrivateSchools}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">直近の模試・偏差値</td><td>${safeLatestScore}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">週あたりの学習時間</td><td>${safeStudyHours}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">保護者同席</td><td>${safeParentJoin}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">指導投資イメージ</td><td>${safeInvestmentReadiness}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">診断への参加意思</td><td>${safePaidDiagnosisReadiness}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">流入元(申告)</td><td>${safeSource}</td></tr>
</table>
<br>
<p style="font-weight:bold;color:#142b57;">アクセス経路（自動・個人非特定）</p>
<table border="0" cellpadding="8" style="border-collapse:collapse;background:#f8fafc;width:100%;">
  <tr><td style="font-weight:bold;color:#142b57;">初回ランディング</td><td>${safeLandingPath}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">初回URL</td><td style="word-break:break-all;">${safeLandingUrl}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">送信ページ</td><td>${safeSubmitPath}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">最終閲覧ページ</td><td>${safeLastPath}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">リファラ</td><td style="word-break:break-all;">${safeReferrer}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">utm_source</td><td>${safeUtmSource}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">utm_medium</td><td>${safeUtmMedium}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">utm_campaign</td><td>${safeUtmCampaign}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">utm_content</td><td>${safeUtmContent}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">utm_term</td><td>${safeUtmTerm}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">Google広告(gclid)</td><td>${safeGclid}</td></tr>
  <tr><td style="font-weight:bold;color:#142b57;">初回接触時刻</td><td>${safeFirstTouchAt}</td></tr>
</table>
<br>
<p style="font-weight:bold;color:#142b57;">ご相談内容</p>
<p style="white-space:pre-wrap;background:#f5f5f5;padding:16px;border-radius:4px;">${safeMessage}</p>
      `,
    });

    // ユーザーへの自動返信（マニュアル付き）
    await transporter.sendMail({
      from: `"Medvance 医学部受験専門塾" <${process.env.GMAIL_USER}>`,
      to: emailText,
      subject: "【Medvance】医学部 合格戦略診断のお申し込みを受け付けました",
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="font-family:'Helvetica Neue',Arial,sans-serif;color:#3d3d3d;max-width:600px;margin:0 auto;padding:20px;">

  <div style="background:#0c1a33;padding:32px 24px;text-align:center;border-radius:8px 8px 0 0;">
    <p style="color:#c9922a;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 8px;">Medvance</p>
    <h1 style="color:#ffffff;font-size:20px;margin:0;">医学部 合格戦略診断のお申し込みを受け付けました</h1>
  </div>

  <div style="border:1px solid #e5e1d8;border-top:none;padding:32px 24px;border-radius:0 0 8px 8px;">
    <p style="font-size:15px;">${safeName} 様</p>
    <p style="font-size:14px;line-height:1.8;">
      医学部 合格戦略診断のお申し込みありがとうございます。<br>
      2営業日以内に、担当者より診断日程と事前共有資料についてメールでご連絡いたします。
    </p>

    <div style="background:#f7f5f0;border:1px solid #e5e1d8;border-radius:8px;padding:20px;margin:24px 0;">
      <p style="font-size:12px;color:#c9922a;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">次のステップ</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">01 — 担当者からメールでご連絡します（2営業日以内）</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">02 — 日程調整の後、ZoomまたはGoogle Meetで合格戦略診断</p>
      <p style="font-size:13px;color:#3d3d3d;margin:4px 0;">03 — 予備校利用、模試結果、受験校候補をもとに、科目・学習管理・出願方針を整理します</p>
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
