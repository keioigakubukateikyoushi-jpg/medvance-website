// Medvance 3分医学部受験診断のスコアリング・推奨ロジック
// すべてのデータと判定はサーバ／クライアント双方から呼び出し可能

export type GradeKey =
  | "ko1"
  | "ko2"
  | "ko3"
  | "ronin1"
  | "roninPlus"
  | "saijuken";

export type TargetKey =
  | "kokuritsu-top"
  | "kokuritsu-mid"
  | "keio-med"
  | "shiritsu-top"
  | "shiritsu-mid"
  | "shiritsu-low"
  | "undecided";

export type HensachiKey =
  | "below45"
  | "45to50"
  | "50to55"
  | "55to60"
  | "60to65"
  | "65to70"
  | "above70";

export type CommonTestKey =
  | "below50"
  | "50to60"
  | "60to70"
  | "70to80"
  | "above80"
  | "notyet";

export type StudyHourKey = "lt10" | "h10to25" | "h25to40" | "h40to60" | "h60plus";

export type SubjectKey = "english" | "math" | "physics" | "chemistry" | "biology";

export type MentalKey = "daily" | "weekly" | "rare" | "none";

export type ParentKey = "supportive" | "moderate" | "distant" | "conflicted";

export interface DiagnosisInput {
  grade: GradeKey;
  target: TargetKey;
  hensachi: HensachiKey;
  commonTest: CommonTestKey;
  studyHours: StudyHourKey;
  weakSubjects: SubjectKey[];
  mental: MentalKey;
  parent: ParentKey;
}

export interface DiagnosisResult {
  score: number; // 0-100
  band: "順調" | "仕上げ次第" | "巻き返し可能" | "抜本的見直し必須";
  bandColor: string;
  bandSummary: string;
  remainingMonths: number;
  gapHensachi: number; // 志望校との偏差値差（プラス=不足）
  weeklyHoursTarget: number;
  recommendedPlan: {
    name: string;
    weekly: string;
    monthlyPriceJpy: number;
    description: string;
    addons: string[];
  };
  priorityActions: { title: string; body: string }[];
  riskFlags: string[];
  positiveSignals: string[];
}

// ── 表示用ラベル ─────────────────────────────────────
export const gradeLabels: Record<GradeKey, string> = {
  ko1: "高校1年生",
  ko2: "高校2年生",
  ko3: "高校3年生",
  ronin1: "浪人1年目",
  roninPlus: "浪人2年目以上",
  saijuken: "再受験生（社会人・大学生）",
};

export const targetLabels: Record<TargetKey, string> = {
  "kokuritsu-top": "国公立難関（東大・京大・阪大・東北・名大医など）",
  "kokuritsu-mid": "国公立中堅・地方国公立医学部",
  "keio-med": "慶應義塾大学医学部",
  "shiritsu-top": "私立最難関（慈恵・順天堂・日医・東医など）",
  "shiritsu-mid": "私立中堅（昭和・東邦・北里など）",
  "shiritsu-low": "私立下位・地方私立",
  undecided: "まだ決めていない／併願も含めて検討中",
};

export const hensachiLabels: Record<HensachiKey, string> = {
  below45: "〜44",
  "45to50": "45〜49",
  "50to55": "50〜54",
  "55to60": "55〜59",
  "60to65": "60〜64",
  "65to70": "65〜69",
  above70: "70〜",
};

export const commonTestLabels: Record<CommonTestKey, string> = {
  below50: "50%未満",
  "50to60": "50〜59%",
  "60to70": "60〜69%",
  "70to80": "70〜79%",
  above80: "80%以上",
  notyet: "まだ受けていない／対象外",
};

export const studyHourLabels: Record<StudyHourKey, string> = {
  lt10: "10時間未満",
  h10to25: "10〜25時間",
  h25to40: "25〜40時間",
  h40to60: "40〜60時間",
  h60plus: "60時間以上",
};

export const subjectLabels: Record<SubjectKey, string> = {
  english: "英語",
  math: "数学",
  physics: "物理",
  chemistry: "化学",
  biology: "生物",
};

export const mentalLabels: Record<MentalKey, string> = {
  daily: "ほぼ毎日感じる",
  weekly: "週に数回感じる",
  rare: "たまに感じる",
  none: "ほとんど感じない",
};

export const parentLabels: Record<ParentKey, string> = {
  supportive: "強く協力的・受験を一緒に考えてくれる",
  moderate: "見守ってくれているがあまり関与しない",
  distant: "距離を取っている／話す機会が少ない",
  conflicted: "意見がぶつかりやすい／関係に悩みがある",
};

// ── スコア計算 ──────────────────────────────────────

const hensachiNumber: Record<HensachiKey, number> = {
  below45: 42,
  "45to50": 47,
  "50to55": 52,
  "55to60": 57,
  "60to65": 62,
  "65to70": 67,
  above70: 72,
};

const targetHensachi: Record<TargetKey, number> = {
  "kokuritsu-top": 72,
  "kokuritsu-mid": 65,
  "keio-med": 72,
  "shiritsu-top": 68,
  "shiritsu-mid": 63,
  "shiritsu-low": 58,
  undecided: 63,
};

const studyHoursNumber: Record<StudyHourKey, number> = {
  lt10: 8,
  h10to25: 18,
  h25to40: 32,
  h40to60: 50,
  h60plus: 65,
};

// 高1: 入試まで約25ヶ月、高2: 13ヶ月、高3: 6ヶ月（春想定）、浪人: 9ヶ月
const remainingMonthsTable: Record<GradeKey, number> = {
  ko1: 25,
  ko2: 13,
  ko3: 6,
  ronin1: 9,
  roninPlus: 9,
  saijuken: 12,
};

// 学年別の必要週学習時間目安
const weeklyHoursTargetTable: Record<GradeKey, number> = {
  ko1: 18,
  ko2: 28,
  ko3: 50,
  ronin1: 60,
  roninPlus: 60,
  saijuken: 55,
};

export function computeDiagnosis(input: DiagnosisInput): DiagnosisResult {
  const remainingMonths = remainingMonthsTable[input.grade];
  const weeklyHoursTarget = weeklyHoursTargetTable[input.grade];
  const currentHensachi = hensachiNumber[input.hensachi];
  const requiredHensachi = targetHensachi[input.target];
  const gapHensachi = requiredHensachi - currentHensachi;
  const studyHours = studyHoursNumber[input.studyHours];

  let score = 60;

  // 偏差値ギャップ
  if (gapHensachi <= -3) score += 14;
  else if (gapHensachi <= 0) score += 8;
  else if (gapHensachi <= 4) score -= 5;
  else if (gapHensachi <= 8) score -= 14;
  else if (gapHensachi <= 12) score -= 22;
  else score -= 30;

  // 学習時間 vs 必要時間
  const ratio = studyHours / weeklyHoursTarget;
  if (ratio >= 1.1) score += 8;
  else if (ratio >= 0.9) score += 4;
  else if (ratio >= 0.7) score -= 4;
  else if (ratio >= 0.5) score -= 10;
  else score -= 16;

  // 残り期間（短いほど不利、ただし高3で偏差値十分なら問題なし）
  if (input.grade === "ko3" && gapHensachi > 5) score -= 8;
  if ((input.grade === "ronin1" || input.grade === "roninPlus") && gapHensachi > 5) score -= 6;
  if (input.grade === "ko1") score += 6; // 時間がある
  if (input.grade === "ko2") score += 3;

  // 共通テスト得点率（受けていない場合は無視）
  if (input.grade === "ko3" || input.grade === "ronin1" || input.grade === "roninPlus") {
    if (input.commonTest === "above80") score += 8;
    else if (input.commonTest === "70to80") score += 4;
    else if (input.commonTest === "60to70") score -= 2;
    else if (input.commonTest === "50to60") score -= 8;
    else if (input.commonTest === "below50") score -= 12;
  }

  // メンタル状態
  if (input.mental === "daily") score -= 12;
  else if (input.mental === "weekly") score -= 5;
  else if (input.mental === "rare") score += 3;
  else if (input.mental === "none") score += 5;

  // 苦手科目数（多いほど厳しい）
  if (input.weakSubjects.length >= 3) score -= 8;
  else if (input.weakSubjects.length === 2) score -= 4;
  else if (input.weakSubjects.length === 0) score += 4;

  // 保護者
  if (input.parent === "supportive") score += 4;
  else if (input.parent === "moderate") score += 1;
  else if (input.parent === "distant") score -= 3;
  else if (input.parent === "conflicted") score -= 6;

  // 浪人2年目以上は心理的負荷を反映
  if (input.grade === "roninPlus") score -= 4;

  // 多浪・再受験で志望校が国公立難関 or 慶應 → ハードモード補正
  if (
    (input.grade === "roninPlus" || input.grade === "saijuken") &&
    (input.target === "kokuritsu-top" || input.target === "keio-med")
  ) {
    score -= 4;
  }

  score = Math.max(2, Math.min(98, Math.round(score)));

  let band: DiagnosisResult["band"];
  let bandColor: string;
  let bandSummary: string;

  if (score >= 80) {
    band = "順調";
    bandColor = "#3a8a4a";
    bandSummary =
      "現状の積み上げを維持できれば、志望校合格は射程圏内です。仕上げの精度と直前期の戦略が鍵になります。";
  } else if (score >= 60) {
    band = "仕上げ次第";
    bandColor = "#c9922a";
    bandSummary =
      "戦略の組み方と残り期間の使い方次第で、合格可能性は大きく動きます。授業よりも『何をいつやるか』の整理が最優先です。";
  } else if (score >= 40) {
    band = "巻き返し可能";
    bandColor = "#d97706";
    bandSummary =
      "現状はギャップが大きいですが、志望校の絞り直しと学習配分の組み替えで巻き返せます。学習時間と方針の同時最適化が必要です。";
  } else {
    band = "抜本的見直し必須";
    bandColor = "#b14a3a";
    bandSummary =
      "学力・学習時間・メンタルのいずれかにボトルネックがあります。授業を増やすより前に、戦略・教材・受験校の選定から組み直しが必要です。";
  }

  // 推奨プラン
  let recommendedPlan: DiagnosisResult["recommendedPlan"];
  if (score >= 80) {
    recommendedPlan = {
      name: "Medvance Light",
      weekly: "週1回 + 月次コーチング",
      monthlyPriceJpy: 80000,
      description:
        "順調なので、授業よりも仕上げの精度を上げる伴走が中心になります。週1回の科目フォロー＋月次コーチングで充分です。",
      addons: ["志望校別の過去問添削（必要に応じて）", "面接・小論文の単発対策"],
    };
  } else if (score >= 60) {
    recommendedPlan = {
      name: "Medvance Core",
      weekly: "週2回 + 週次コーチング + 親伴走",
      monthlyPriceJpy: 140000,
      description:
        "戦略の組み直しと演習量の確保を両立しやすい構成です。週次コーチングで次の1週間のやることを固定します。",
      addons: ["保護者向け月次レポート", "志望校別過去問演習", "面接・小論文（年内入試あり）"],
    };
  } else if (score >= 40) {
    recommendedPlan = {
      name: "Medvance Core+",
      weekly: "週3回 + 週次コーチング + 親伴走",
      monthlyPriceJpy: 200000,
      description:
        "学習配分の組み替えと、足りない科目の集中投下が同時に必要です。週3回で苦手科目を優先的に解消します。",
      addons: [
        "保護者向け月次レポート + 月1Zoom面談",
        "Frontier 単科パック（MMI・小論・面接）",
        "学習時間ログの可視化",
      ],
    };
  } else {
    recommendedPlan = {
      name: "Medvance Keio / 集中コース",
      weekly: "週4〜5回 + 週次コーチング + 親伴走 + 戦略診断",
      monthlyPriceJpy: 260000,
      description:
        "授業・戦略・メンタルケアを一括で立て直すフェーズです。受験校の絞り直しと、学習計画の全面再設計から入ります。",
      addons: [
        "戦略リセット診断（初月）",
        "保護者向け月次レポート + 月1Zoom面談",
        "Frontier フルパッケージ（MMI・小論・推薦）",
        "メンタルケア面談（必要に応じて）",
      ],
    };
  }

  // 優先課題（最大3つ）
  const candidates: { weight: number; title: string; body: string }[] = [];

  if (gapHensachi >= 8) {
    candidates.push({
      weight: 100,
      title: "受験校レンジの再設計",
      body: `第一志望と現状の偏差値差が${gapHensachi}相当あります。第一志望は維持しつつ、合格可能性のある併願校を3〜5校加えて『受験校ポートフォリオ』を作り直す必要があります。`,
    });
  } else if (gapHensachi >= 4) {
    candidates.push({
      weight: 70,
      title: "苦手科目の優先解消",
      body: `偏差値差${gapHensachi}は、苦手科目1〜2科目の集中投下で十分埋まる範囲です。${
        input.weakSubjects.length > 0
          ? input.weakSubjects.map((s) => subjectLabels[s]).join("・") + "を最優先で固めます。"
          : "弱点の特定から始めます。"
      }`,
    });
  }

  if (ratio < 0.7) {
    candidates.push({
      weight: 90,
      title: "週あたり学習時間の底上げ",
      body: `現在の週${studyHours}時間は、${input.grade === "ko3" || input.grade === "ronin1" || input.grade === "roninPlus" ? "受験生水準" : "推奨水準"}の週${weeklyHoursTarget}時間に対して${Math.round(
        (1 - ratio) * 100,
      )}%不足しています。授業を増やすより先に、平日と休日の固定学習時間を作ることが先決です。`,
    });
  }

  if (input.mental === "daily" || input.mental === "weekly") {
    candidates.push({
      weight: 85,
      title: "『何をすべきか分からない』の解消",
      body: "毎週『今週やること』を1枚の紙に固定するだけで、学習効率は大きく変わります。週次コーチングで次の7日間のタスクを毎回確定させる運用に切り替えましょう。",
    });
  }

  if (
    (input.grade === "ko3" || input.grade === "ronin1" || input.grade === "roninPlus") &&
    (input.commonTest === "below50" || input.commonTest === "50to60")
  ) {
    candidates.push({
      weight: 80,
      title: "共通テスト演習の常態化",
      body: "共通テスト得点率が伸びないまま二次対策を進めると、本番で出願校を絞れません。週2回の共通テスト演習をルーティン化し、得点率を月単位で追います。",
    });
  }

  if (input.weakSubjects.includes("english")) {
    candidates.push({
      weight: 60,
      title: "英語：単語・長文を週単位で固定",
      body: "医学部の英語は単語・長文・速読の3点で決まります。市販単語帳を1冊『高速で4周』、長文は週3題ノルマ化、これだけで偏差値は3〜5動きます。",
    });
  }
  if (input.weakSubjects.includes("math")) {
    candidates.push({
      weight: 60,
      title: "数学：典型問題のラインナップ点検",
      body: "苦手と感じている人の9割は『典型問題のラインナップに穴がある』状態です。チャート式・1対1・標問のいずれか1冊を『見た瞬間方針が立つ』まで2週間で点検します。",
    });
  }
  if (input.weakSubjects.includes("physics") || input.weakSubjects.includes("chemistry")) {
    candidates.push({
      weight: 60,
      title: "理科：基礎網羅 → 過去問の早期着手",
      body: "理科は完成が遅い科目ほど合否を分けます。基礎の網羅を最短で終わらせ、志望校過去問の着手は秋を待たず夏前から始めます。",
    });
  }
  if (input.weakSubjects.includes("biology")) {
    candidates.push({
      weight: 50,
      title: "生物：知識の体系化と実験考察演習",
      body: "生物は『暗記』ではなく『体系』です。教科書 + リードα or セミナーで知識マップを作り直し、実験考察問題を週3題のペースで解きます。",
    });
  }

  if (input.parent === "distant" || input.parent === "conflicted") {
    candidates.push({
      weight: 70,
      title: "保護者との情報共有経路を作る",
      body: "受験期は親子関係のストレスが学習効率を直接下げます。月1の三者面談を仕組み化し、進捗・不安・費用を『話さなくても伝わる』状態にすることが最優先です。",
    });
  }

  if (input.grade === "roninPlus") {
    candidates.push({
      weight: 65,
      title: "戦略リセット：使う教材・受験校を一度ゼロベースで",
      body: "多浪生の最大の落とし穴は『過去のやり方を引きずること』です。教材・受験校・1日のルーティンを一度全部リセットし、現役合格者の標準形に揃えます。",
    });
  }

  if (input.grade === "ko1" || input.grade === "ko2") {
    candidates.push({
      weight: 55,
      title: "高1・高2のうちに英数の貯金を作る",
      body: "残り期間が長いことが最大の武器です。受験期に演習量を確保するために、高2終了までに英語・数学を『偏差値65安定』まで持っていくのが理想です。",
    });
  }

  // 上位3件を選択
  const priorityActions = candidates
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 3)
    .map(({ title, body }) => ({ title, body }));

  // リスクフラグとポジティブシグナル
  const riskFlags: string[] = [];
  const positiveSignals: string[] = [];

  if (gapHensachi >= 8) riskFlags.push(`志望校との偏差値差 ${gapHensachi}（要見直し）`);
  if (ratio < 0.5) riskFlags.push("学習時間が必要量の半分未満");
  if (input.mental === "daily") riskFlags.push("学習方針の不明瞭さがほぼ毎日");
  if (input.parent === "conflicted") riskFlags.push("保護者との関係に強いストレス");
  if (input.grade === "roninPlus" && input.target === "keio-med") riskFlags.push("多浪 × 慶應医：戦略リセット必須");

  if (gapHensachi <= 0) positiveSignals.push("志望校に対し偏差値が届いている");
  if (ratio >= 1.0) positiveSignals.push("学習時間は十分確保できている");
  if (input.mental === "none" || input.mental === "rare") positiveSignals.push("学習の方針が明確");
  if (input.parent === "supportive") positiveSignals.push("保護者のサポート体制あり");
  if (input.grade === "ko1" || input.grade === "ko2") positiveSignals.push("受験まで時間的余裕がある");

  return {
    score,
    band,
    bandColor,
    bandSummary,
    remainingMonths,
    gapHensachi,
    weeklyHoursTarget,
    recommendedPlan,
    priorityActions,
    riskFlags,
    positiveSignals,
  };
}
