"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import RelatedColumns from "@/components/RelatedColumns";

type Language = "ja" | "en" | "zh" | "ko";

const translations: Record<Language, {
  heroEyebrow: string;
  heroTitle: string;
  heroTitleSub: string;
  heroSub: string;
  heroCTA1: string;
  heroCTA2: string;
  statsHeading: string;
  statsSub: string;
  stats: Array<{ label: string; value: string; body: string }>;
  challengesHeading: string;
  challenges: Array<{ title: string; body: string }>;
  compareHeading: string;
  compareColLabel: string;
  compareColJa: string;
  compareColEn: string;
  compareRows: Array<{ label: string; ja: string; en: string }>;
  programHeading: string;
  programSub: string;
  programSteps: Array<{ step: string; title: string; body: string }>;
  tutorHeading: string;
  tutorSub: string;
  supportItems: string[];
  fitCheckHeading: string;
  fitCheckSub: string;
  mismatchItems: string[];
  faqHeading: string;
  faqs: Array<{ q: string; a: string }>;
  ctaHeading: string;
  ctaSub: string;
  ctaBtn: string;
  langLabel: string;
}> = {
  ja: {
    heroEyebrow: "Bilingual Medical School Prep Program",
    heroTitle: "日本の医学部へ、世界から挑む。",
    heroTitleSub: "Dual-Language Medical Admissions Support",
    heroSub: "日本語と英語の両対応で、日本の医学部合格を徹底サポート。EJU数学・理数科目の徹底指導、留学生向け特別選抜、国際医療福祉大学（IUHW）などの英語・IB枠対策まで、現役医学部生のバイリンガル講師が完全マンツーマンで指導します。",
    heroCTA1: "グローバル個別相談を申し込む (Free Consultation)",
    heroCTA2: "料金と指導システム (Pricing & System)",
    statsHeading: "日本語・英語両対応の徹底した医学部個別カリキュラム",
    statsSub: "日本の医学部は最難関ですが、正しい入試ルートの選択と、海外生の強みを活かした受験戦略により道が開けます。私たちは以下の3つの柱で受験生を支援します。",
    stats: [
      {
        label: "Bilingual Lecture",
        value: "日本語×英語ハイブリッド",
        body: "完全日本語での指導だけでなく、英語ベースでの講義、記述・用語解説に対応。習得度に合わせて言語比率を調整可能です。",
      },
      {
        label: "Core Science & Math",
        value: "医学部受験科目の徹底指導",
        body: "EJUの理数科目（数学コース2、物理、化学、生物）から、一般受験に必要な数III、高難度理科まで網羅的にカバーします。",
      },
      {
        label: "Global Admissions",
        value: "英語・IB枠受験に対応",
        body: "国際医療福祉大学（IUHW）などの英語枠受験や、SAT・ACT・国際バカロレア（IB）を利用した出願・エッセイ対策を行います。",
      },
    ],
    challengesHeading: "外国人受験生が直面する3つの大きな壁",
    challenges: [
      {
        title: "日本語の医学・理数専門用語がわからない",
        body: "概念は理解していても、「力学的エネルギー」や「電気陰性度」といった漢字の用語が障壁になります。英語と並行して日本語表現を紐付けることで解消します。",
      },
      {
        title: "日本の医学部受験情報の不足と複雑さ",
        body: "外国人特別入試、EJU利用、一般受験などルートが多岐にわたり、必要なJLPTの級数や志望校選定の難易度が高くなっています。海外生に最適な受験計画を構築します。",
      },
      {
        title: "出題範囲やカリキュラムの違い",
        body: "母国（IBやA-Level等）のカリキュラムと日本の高校理科・数学の範囲にはギャップがあります。EJU数学コース2や理数系の抜け漏れをピンポイントで埋めます。",
      },
    ],
    compareHeading: "留学生向け医学部受験ルートの比較",
    compareColLabel: "項目 (Category)",
    compareColJa: "日本語受験ルート (EJU・留学生特別枠)",
    compareColEn: "英語・IB受験ルート (IUHW・特別推薦など)",
    compareRows: [
      { label: "主な対象校", ja: "東京大、京都大、大阪大、名古屋大などの国公立医学部、一部私立", en: "国際医療福祉大学（IUHW）、その他AO・国際バカロレア（IB）利用枠設置校" },
      { label: "必要試験 (Exams)", ja: "日本留学試験（EJU：日本語、数学コース2、理科2科目）、大学別2次試験", en: "SAT / ACT、国際バカロレア（IB）スコア、TOEFL / IELTS、小論文" },
      { label: "語学力基準", ja: "JLPT N1相当の高い日本語記述・面接力、英語（TOEFL等提出）", en: "英語力（TOEFL iBT 90〜100+推奨）、入学時の日本語力は不問の場合あり" },
      { label: "指導での対応言語", ja: "英語での概念理解からスタートし、日本語記述へ段階的移行", en: "完全英語指導、または英語・日本語ハイブリッド指導" }
    ],
    programHeading: "合格を掴み取るための4つのアプローチ",
    programSub: "単なる語学支援にとどまらず、最難関レベルの理数科目の指導と出願戦略を統合したカリキュラムを構築します。",
    programSteps: [
      {
        step: "01",
        title: "ハイブリッド授業 (Bilingual Lecturing)",
        body: "英語と日本語を柔軟に切り替えながら概念理解を深め、最終的な日本語での答案記述・面接力を養います。",
      },
      {
        step: "02",
        title: "理数科目の徹底個別指導 (Science & Math Mastery)",
        body: "医学部受験に直結する数学、物理、化学、生物を徹底解説。基礎問題から難関レベルの演習まで伴走します。",
      },
      {
        step: "03",
        title: "出願校の最適化・戦略選定 (Route Optimization)",
        body: "EJU利用、私費留学生特別入試、英語/IB利用枠から、現在の言語力や理数実績に応じて最も合格可能性の高い大学を選定します。",
      },
      {
        step: "04",
        title: "志望理由書＆面接対策 (Essay & Interview Prep)",
        body: "日本語での小論文・面接に加え、英語出願に必要なEssay（志望理由書）やMMI（英語面接）の指導もカバーします。",
      },
    ],
    tutorHeading: "世界トップの医学部生バイリンガル講師が伴走",
    tutorSub: "Medvanceでは、自らも難関医学部受験を突破した東京大、慶應大、国際医療福祉大などの現役医学部生のバイリンガル講師が直接指導します。日本語での記述答案の添削から、英語での口頭試問、面接練習まで高いレベルで対応可能です。",
    supportItems: [
      "英語と日本語を自由に使って質問・講義できる現役医学部生のマンツーマン指導",
      "日本留学試験（EJU）理科（物化生）および数学コース2の専用カリキュラム設計",
      "英語で受験・進学できる医学部（国際医療福祉大など）のSAT/ACT/IB対策",
      "海外在住の受験生にも完全対応した、時差調整によるオンライン指導体制",
      "出願資格や募集要項（ビザ、資金証明、推薦状）の解釈とご家庭への共有",
      "日本の医師国家試験（日本語）を見据えた、長期的な日本語医学用語の学習支援",
    ],
    fitCheckHeading: "お申し込みに際しての重要条件",
    fitCheckSub: "限られた指導枠を最大限に活かし確実に合格を目指すため、以下の条件にご同意いただけるご家庭を優先しております。",
    mismatchItems: [
      "医師国家試験が日本語で行われることを理解せず、一切日本語を学ぶ意欲がない",
      "日本の医学部受験の難易度を考慮せず、理数科目の基礎的な自学自習を行わない",
      "海外からの渡航スケジュールやビザ等の出願要件の確認をすべて塾任せにする",
      "模擬試験の結果や、母国のGPA（成績評価）などの客観的データを共有したくない",
    ],
    faqHeading: "よくあるご質問 (FAQ)",
    faqs: [
      {
        q: "日本の医学部受験にはどれくらいの日本語力が必要ですか？",
        a: "EJU利用や留学生特別入試でも、基本的には日本語能力試験（JLPT）でN1レベル、またはそれに準ずる極めて高度な読解・面接力が求められます。Medvanceでは、学習開始の初期段階では英語を交えてスピード重視で理数・数学の概念を教え、同時に試験に向けて日本語の専門記述や面接に対応できるように段階的に日本語の使用比率を上げていきます。",
      },
      {
        q: "英語だけで受験・卒業できる日本の医学部はありますか？",
        a: "国際医療福祉大学（IUHW）医学部には留学生専用の英語枠（英語での講義・実習）が設けられており、書類選考や面接、講義も基本的に英語で行われます。ただし、高学年での臨床実習や日本の医師免許を取得する「医師国家試験」は日本語で行われるため、進学後には日本語の学習が必須となります。当プログラムではIUHWの英語枠受験対策（SAT/IB、Essay、英語面接）にも完全対応しています。",
      },
      {
        q: "海外（日本国外）に住んでいますが、指導を受けられますか？",
        a: "はい、世界中どこからでもオンラインで受講いただけます。これまでも時差を考慮して指導時間を個別に設定し、ビデオ通話ツールとホワイトボード共有アプリを使って日本国内と同様の双方向個別指導を提供しています。",
      },
      {
        q: "日本の医学部受験に必要な理数科目の実力が不安です。",
        a: "日本の医学部（特に国公立や難関私立）は理数科目（数学、化学、物理、生物）の要求水準が非常に高いため、当塾では1対1で一人ひとりのカリキュラムを作成し徹底指導します。海外の高校のカリキュラムで未履修になっている日本の範囲（数学IIIの複素数平面や微積分など）を抽出し、短期間で集中補強します。",
      },
    ],
    ctaHeading: "合格に向けたグローバル個別戦略面談を実施します",
    ctaSub: "現在の日本語・英語の習得レベル、理数科目の学習進度、志望校などをうかがい、最適な受験ルートとパーソナライズされた指導スケジュールを提案します。",
    ctaBtn: "無料合格戦略面談を予約する (Book Free Strategy Meeting)",
    langLabel: "表示言語の切り替え / Select Language / 切换语言 / 언어 선택:",
  },
  en: {
    heroEyebrow: "Bilingual Medical School Prep Program",
    heroTitle: "Study Medicine in Japan. Aim High from Anywhere in the World.",
    heroTitleSub: "Dual-Language Medical Admissions Support",
    heroSub: "Complete support for Japanese medical school admissions with bilingual tuition in English and Japanese. Intensive 1-on-1 coaching for EJU Science/Math, international student special quotas, and English-medium tracks like International University of Health and Welfare (IUHW) Medicine.",
    heroCTA1: "Book Free Strategy Meeting",
    heroCTA2: "Pricing & System",
    statsHeading: "Hybrid Bilingual Tutoring tailored for Japanese Medical Schools",
    statsSub: "Japanese medical exams are highly competitive. We empower international students to succeed by selecting the optimal admission routes and leveraging their unique global backgrounds.",
    stats: [
      { label: "Bilingual Lectures", value: "Hybrid Japanese & English", body: "We support lectures and textbook explanations in both English and Japanese, customizing the language ratio based on your proficiency." },
      { label: "Core Sciences & Math", value: "Rigorous Subject Coaching", body: "We cover EJU Science & Math (Mathematics Course 2, Physics, Chemistry, Biology) and all subjects required for standard general admissions." },
      { label: "Global Admissions", value: "Special Selection Support", body: "We help prepare for English-track admissions (such as IUHW Medicine), SAT/ACT, and International Baccalaureate (IB) portfolio requirements." }
    ],
    challengesHeading: "Three Major Challenges for International Candidates",
    challenges: [
      { title: "Difficulty of Japanese Medical Terminology", body: "Even if you understand the scientific concepts, technical terms written in Kanji can be a major barrier. We resolve this by linking Japanese terms with their English counterparts." },
      { title: "Lack of Information & Complex Admission Routes", body: "With multiple routes like EJU special selection, private school quotas, and general tests, choosing the right strategy is tough. We design the optimal roadmap." },
      { title: "Curriculum Differences in Math & Science", body: "There is often a gap between overseas high school curricula (e.g. IB, A-Levels) and Japanese high school exams. We focus on bridging those gaps." }
    ],
    compareHeading: "Comparison of International Medical Admission Routes",
    compareColLabel: "Category",
    compareColJa: "Japanese-taught Route (EJU / Special Selection)",
    compareColEn: "English-taught Route (IB / SAT / IUHW English Track)",
    compareRows: [
      { label: "Target Schools", ja: "National medical schools (Tokyo, Kyoto, Osaka, etc.) & select private universities", en: "International University of Health and Welfare (IUHW) and other universities with IB/AO slots" },
      { label: "Required Exams", ja: "EJU (Japanese, Mathematics Course 2, 2 Sciences), university secondary exams", en: "SAT / ACT, IB (International Baccalaureate), TOEFL / IELTS, Essays" },
      { label: "Language Level", ja: "Highly advanced Japanese (JLPT N1 level equivalent), English (TOEFL score)", en: "High English proficiency (TOEFL iBT 90-100+ recommended), Japanese not required at entry" },
      { label: "Instruction Language", ja: "English explanation initially, transitioning to Japanese technical writing", en: "Fully English instruction, or hybrid English/Japanese instruction" }
    ],
    programHeading: "4 Key Approaches to Guide You to Success",
    programSub: "Beyond language assistance, we integrate rigorous subject coaching with strategic application portfolio design.",
    programSteps: [
      { step: "01", title: "Bilingual Hybrid Lectures", body: "We switch flexibly between English and Japanese to deepen concept comprehension, eventually building output skills for Japanese exams." },
      { step: "02", title: "Core Science & Math Mastery", body: "Rigorous explanation of mathematics, physics, chemistry, and biology required for medical schools. We guide you from basics to advanced levels." },
      { step: "03", title: "Route & Target Optimization", body: "We select the highest-probability universities based on your current math/science level and language proficiencies." },
      { step: "04", title: "Essay & Interview Coaching", body: "We cover Japanese essays and interview prep, as well as English Statements of Purpose (Essays) and MMI (Multiple Mini Interview) format practice." }
    ],
    tutorHeading: "Direct Mentorship by Bilingual Medical Students",
    tutorSub: "At Medvance, you study under bilingual tutors who are current medical students at top universities (Univ of Tokyo, Keio Univ, IUHW, etc.) and have successfully navigated these competitive exams.",
    supportItems: [
      "One-on-one custom tutoring with bilingual medical student mentors",
      "Specialized curriculum for EJU Math Course 2 and Sciences (Physics/Chemistry/Biology)",
      "SAT/ACT/IB prep for English-taught medical tracks (e.g., IUHW Medicine)",
      "Flexible online schedules adjusting to various time zones for students abroad",
      "Guidance on complex visa requirements, financial proof, and recommendation letters",
      "Long-term medical vocabulary support aiming for the Japanese National Medical License"
    ],
    fitCheckHeading: "Key Requirements for Enrollment",
    fitCheckSub: "To ensure maximum quality and commitment, we prioritize candidates who meet the following guidelines:",
    mismatchItems: [
      "Unwilling to learn Japanese at all (the national license exam is only in Japanese)",
      "Unwilling to do self-study for basic science and math concepts",
      "Leaving all visa, travel logistics, and formal documentation entirely to the tutoring school",
      "Unwilling to share academic transcripts, EJU mock scores, or GPA data"
    ],
    faqHeading: "Frequently Asked Questions (FAQ)",
    faqs: [
      { q: "How much Japanese proficiency do I need at the beginning?", a: "For EJU and Special Selection, you ultimately need JLPT N1 level or equivalent. We start with English explanations and gradually increase the ratio of Japanese as your skills improve." },
      { q: "Are there medical schools where I can study entirely in English?", a: "Yes, IUHW Medicine has an English-track curriculum where lectures and clinical training are conducted in English. However, high-grade clinical practice and the national license exam require Japanese, so you must study Japanese after entering." },
      { q: "I live outside Japan. Can I take the lectures online?", a: "Yes. We conduct real-time online classes adjusting to various time zones, utilizing digital boards and video tools." },
      { q: "I am worried about my math and science level.", a: "Our tutors design a customized plan to bridge the gaps between your home country's curriculum and the Japanese medical school requirements, focusing on missing topics like Math III." }
    ],
    ctaHeading: "Schedule a Global Strategy Meeting",
    ctaSub: "We assess your current language level, science/math background, and target schools to construct a personalized path.",
    ctaBtn: "Book Free Strategy Meeting",
    langLabel: "Select Language / 表示言語の切り替え / 切换语言 / 언어 선택:",
  },
  zh: {
    heroEyebrow: "双语日本医学部备考项目",
    heroTitle: "从世界任何地方，挑战日本医学部之巅。",
    heroTitleSub: "Dual-Language Medical Admissions Support",
    heroSub: "通过英语和日语的双语混合授课，我们提供针对日本医学部入学考试的数学、理科、论文和面试的一对一深度辅导。EJU留考理数科目、留学生特别选拔、以及国际医疗福祉大学（IUHW）医学部英语通道等対策全面覆盖。",
    heroCTA1: "预约免费合格战略面谈",
    heroCTA2: "学费与授课系统",
    statsHeading: "专为日本医学部设计的双语混合辅导",
    statsSub: "日本医学部竞争极度激烈。我们通过帮助留学生选择最佳的报考通道并发挥其全球化背景优势，助力他们取得成功。",
    stats: [
      { label: "双语授课", value: "日语×英语混合教学", body: "支持全日语教学，也支持英语基础上的讲义和专业术语解析。可根据您的熟练度调整语言比例。" },
      { label: "理数强化", value: "理数科目彻底辅导", body: "全面覆盖留考（EJU）理数科目（数学2、物理、化学、生物）以及一般入学考试所需的所有科目。" },
      { label: "全球化招生", value: "支持英语及IB申请", body: "针对国际医疗福祉大学（IUHW）等医学部的英语通道，以及SAT/ACT、国际文凭（IB）材料进行专项辅导。" }
    ],
    challengesHeading: "留学生报考面临的三大壁垒",
    challenges: [
      { title: "日语医学及理数专业词汇的难关", body: "即使理解科学概念，汉字专业术语（如“力学的エネルギー”）也是一道障碍。我们通过英语和日语对照解析来消除这一壁垒。" },
      { title: "信息匮乏与报考通道的复杂性", body: "包含EJU留考特殊选拔、私立医学部特定配额、共通测试等多种通道，选校和规划极其复杂。我们为您制定最佳路线图。" },
      { title: "海外与日本高中理数课程的差异", body: "海外课程（如IB、A-Level）与日本高考大纲存在差异。我们精准找出未学范围（如数学III的微积分）并进行强力补充。" }
    ],
    compareHeading: "留学生日本医学部报考通道对比",
    compareColLabel: "项目",
    compareColJa: "日语报考通道 (EJU / 留学生特别选拔)",
    compareColEn: "英语及IB报考通道 (IB / SAT / IUHW 英语项目)",
    compareRows: [
      { label: "主要目标院校", ja: "东京大学、京都大学、大阪大学等国公立大学及部分私立大学", en: "国际医疗福祉大学（IUHW）及其他设有IB或AO名额的大学" },
      { label: "所需考试", ja: "日本留学考试（EJU：日语、数学2、理科2科）以及大学二次考试", en: "SAT / ACT、国际文凭（IB）成绩、TOEFL / IELTS、小论文" },
      { label: "语言能力标准", ja: "极高的日语能力（相当于JLPT N1水平），英语（TOEFL等成绩）", en: "高水平英语能力（推荐TOEFL iBT 90-100+），入学时不要求日语" },
      { label: "辅导对应语言", ja: "初期以英语讲解概念，逐步过渡到日语专业术语的写作", en: "全英语教学，或英语与日语双语教学" }
    ],
    programHeading: "助您走向成功的4大核心举措",
    programSub: "我们不仅提供语言支持，还把高难度的理数科目指导与出战学校的文书规划深度结合。",
    programSteps: [
      { step: "01", title: "双语混合授课", body: "在英语和日语之间灵活切换，加深对概念的理解，最终培养出对应日语考试的答题与面试能力。" },
      { step: "02", title: "理数科目彻底辅导", body: "深度解析医学部考试中的数学、物理、化学和生物。从基础知识到高难度真题演练全程伴走。" },
      { step: "03", title: "出考选校策略优化", body: "根据您目前的理数基础和语言水平，筛选并锁定合格概率最高的医学部目标院校。" },
      { step: "04", title: "文书与面试强化", body: "除了日语小论文和面试外，还针对英语通道的Essay（志望理由书）和MMI（多站式面试）进行针对性演练。" }
    ],
    tutorHeading: "顶尖医学部双语导师直接带教",
    tutorSub: "在Medvance，由来自东京大学、庆应义塾大学、国际医疗福祉大学等顶级学府的现役医学部留学生或双语导师为您提供1对1针对性带教。",
    supportItems: [
      "由顶尖医学部在校生导师提供1对1专属双语教学",
      "针对EJU留考数学2和理科（物理/化学/生物）的定制教学大纲",
      "针对英语医学部通道（如IUHW医学部）的SAT/ACT/IB备考指导",
      "为身在海外的学子提供贴心的时差在线教学系统",
      "解读复杂的签证申请、资金证明及推荐信要求",
      "面向未来的日本医师国家考试，提供长期的日语医学词汇积累支持"
    ],
    fitCheckHeading: "报名重要前置条件",
    fitCheckSub: "为确保教学质量和学习成效，我们优先招收符合以下条件的学生：",
    mismatchItems: [
      "完全没有学习日语的意愿（日本医师国家考试仅以日语进行）",
      "不愿在课后自主进行理数基础公式与概念的练习",
      "将签证、机票等所有旅行及行政手续完全推卸给辅导学校",
      "拒绝提供成绩单、留考模考成绩或GPA等客观评估数据"
    ],
    faqHeading: "常见问题解答 (FAQ)",
    faqs: [
      { q: "入学时需要达到什么样的日语水平？", a: "报考EJU通道或特别选拔，最终需要达到JLPT N1或同等水平。我们会先用英语讲授核心理数概念，并随着您日语能力的提升逐步增加日语授课的比例。" },
      { q: "有可以完全用英语学习并毕业的日本医学部吗？", a: "有的。国际医疗福祉大学（IUHW）医学部设有英文班，授课和实习主要用英语进行。但高年级的临床实习和日本医师执照考试必须使用日语，因此入学后必须学习日语。我们提供IUHW英语通道的全套备考指导。" },
      { q: "我住在海外，可以参加辅导吗？", a: "可以。我们为全球各地的学生提供在线双向授课，利用数字白板和高清视频工具，根据您的时差合理安排上课时间。" },
      { q: "我对自己的理数水平不太有信心。", a: "我们的导师会针对您母国的课程体系（如中国高考、IB等）与日本医学部大纲进行对比，找出数学III（如微积分）等未学板块，帮您在短时间内迅速攻克。" }
    ],
    ctaHeading: "开启您的全球医学部合格规划",
    ctaSub: "我们将根据您当前的语言水平、理科基础和志望校，为您定制一条专属的医学部合格路线。",
    ctaBtn: "预约免费合格战略面谈",
    langLabel: "切换语言 / Select Language / 表示言語の切り替え / 언어 선택:",
  },
  ko: {
    heroEyebrow: "이중 언어 일본 의대 입학 대비 프로그램",
    heroTitle: "전 세계 어디서나, 일본 의과대학 합격을 향해 도전하십시오.",
    heroTitleSub: "Dual-Language Medical Admissions Support",
    heroSub: "일본어와 영어 하이브리드 개별 지도를 통해 일본 의과대학 시험에 필요한 수학, 과학, 에세이 및 면접을 1대1로 집중 케어합니다. EJU 시험 대비, 유学生 특별 전형, 국제의료복지대학(IUHW) 영어 전형 완벽 대응.",
    heroCTA1: "무료 합격 전략 면담 예약",
    heroCTA2: "학비 및 지도 시스템",
    statsHeading: "일본 의대에 맞춘 이중 언어 하이브리드 개별 지도",
    statsSub: "일본 의과대학 입시는 매우 치열합니다. 유학생에게 가장 유리한 전형을 선택하고 글로벌 배경을 강점으로 바꿀 수 있는 전략을 설계합니다.",
    stats: [
      { label: "이중 언어 수업", value: "일본어×영어 하이브리드", body: "완전 일본어 수업은 물론, 영어 기반 강의 및 용어 해설을 지원합니다. 학생의 실력에 맞춰 언어 비율을 조절할 수 있습니다." },
      { label: "수학 및 과학 집중", value: "의대 필수 과학·수학 완벽 지도", body: "EJU 수학 코스 2와 이과 과목(물리, 화학, 생물)부터 일반 본고사 대비 수학 III까지 완벽히 마스터하도록 지도합니다." },
      { label: "글로벌 전형", value: "영어 및 IB 전형 완벽 대응", body: "국제의료복지대학(IUHW) 의대 등 영어 전형 대비, SAT·ACT·IB(국제 바칼로레아) 에세이 및 포트폴리오를 맞춤형으로 준비합니다." }
    ],
    challengesHeading: "외국인 수험생이 직면하는 3가지 장벽",
    challenges: [
      { title: "일본어 의학 및 이과 전문 용어의 벽", body: "개념은 알고 있어도 '역학적 에너지'나 '전기음성도' 같은 한자 용어가 걸림돌이 됩니다. 영어 개념과 매칭하여 자연스럽게 익히도록 돕습니다." },
      { title: "정보 부족과 복잡한 일본 의대 전형", body: "EJU 이용 유학생 특별 전형, 사립 의대 특별 전형, 공통 테스트 등 루트가 다양하여 학교 선택이 어렵습니다. 합격률이 가장 높은 로드맵을 설계합니다." },
      { title: "교육과정 차이로 인한 공백", body: "해외 교육과정(IB, A-Level 등)과 일본 고교 교육과정 사이에 격차가 존재합니다. EJU 수학 코스 2나 과학의 누락된 범위를 꼼꼼하게 채웁니다." }
    ],
    compareHeading: "유학생 일본 의대 전형 비교",
    compareColLabel: "항목",
    compareColJa: "일본어 시험 전형 (EJU / 유학생 특별 전형)",
    compareColEn: "영어 및 IB 시험 전형 (IB / SAT / IUHW 영어 전형)",
    compareRows: [
      { label: "대상 대학", ja: "도쿄대, 교토대, 오사카대 등 주요 국공립 의대 및 일부 사립 의대", en: "국제의료복지대학(IUHW) 및 기타 IB/AO 전형 실시 대학" },
      { label: "필수 시험", ja: "일본유학시험(EJU: 일본어, 수학 코스 2, 이과 2과목), 대학별 본고사", en: "SAT / ACT, IB(국제 바칼로레아) 점수, TOEFL / IELTS, 소논문" },
      { label: "어학 기준", ja: "높은 일본어 능력(JLPT N1 이상 권장), 영어(TOEFL 등 제출)", en: "영어 능력(TOEFL iBT 90~100+ 권장), 입학 시 일본어 불문" },
      { label: "수업 진행 언어", ja: "초기에는 영어로 개념을 학습하고, 점진적으로 일본어 기술을 강화", en: "완전 영어 수업 또는 영어·일본어 하이브리드 수업" }
    ],
    programHeading: "합격을 위한 4가지 핵심 어프로치",
    programSub: "단순히 언어 지원에 그치지 않고 최첨단 이과 실력 향상과 포트폴리오 작성을 체계적으로 통합합니다.",
    programSteps: [
      { step: "01", title: "하이브리드 이중 언어 수업", body: "영어와 일본어를 자유롭게 오가며 개념을 깊이 이해하고, 시험에서 요구하는 일본어 답안 작성 및 면접 능력을 키웁니다." },
      { step: "02", title: "의대 필수 이과·수학 지도", body: "의대 시험에 필요한 수학, 물리, 화학, 생물을 철저하게 지도합니다. 기본 공식부터 고난도 본고사 실전 문제까지 다룹니다." },
      { step: "03", title: "지원 대학 최적화 전략", body: "학생의 현재 수학·과학 실력과 언어 능력에 기반하여 가장 합격 가능성이 높은 의과대학을 매칭합니다." },
      { step: "04", title: "에세이 및 면접 대비", body: "일본어 소논문 및 면접뿐만 아니라, 영어 전형 지원에 필수적인 SOP(에세이)와 MMI(다면 미니 면접)까지 완벽 대응합니다." }
    ],
    tutorHeading: "명문 의대생 바이린갈 강사의 밀착 마스터링",
    tutorSub: "도쿄대, 게이오대, 국제의료복지대 등 일본 최고 의과대학에 재학 중이며, 이중 언어 소통이 가능한 최우수 의대생 강사진이 1대1로 직접 가르칩니다.",
    supportItems: [
      "최우수 의과대학생 멘토의 1대1 맞춤형 이중 언어 과외 지도",
      "EJU 수학 코스 2 및 이과 과목(물리/화학/생물) 맞춤형 커리큘럼",
      "영어 의대 전형(IUHW 등)을 위한 SAT/ACT/IB 준비 지원",
      "해외 거주 학생들을 위한 시차 조절 및 실시간 온라인 수업 지원",
      "비자, 재정 증명서, 추천서 등 까다로운 행정 및 서류 가이드",
      "일본 의사국가시험을 대비한 장기적인 일본어 의학 용어 훈련"
    ],
    fitCheckHeading: "지원 시 필수 요건",
    fitCheckSub: "확실한 성과와 집중도를 위해 아래 조건을 충족하는 학생들을 우선 선발합니다.",
    mismatchItems: [
      "일본어 학습에 대한 의지가 전혀 없는 경우 (일본 의사 면허 시험은 일본어로만 실시됨)",
      "수업 외에 자기주도 학습으로 이과 기본 개념을 복습하지 않는 경우",
      "비자 및 출국 관련 일체의 개인 일정을 전적으로 학원에 일임하려는 경우",
      "성적 증명서나 모의고사 성적 등 객관적인 평가 지표를 제공하지 않는 경우"
    ],
    faqHeading: "자주 묻는 질문 (FAQ)",
    faqs: [
      { q: "입학 시 필요한 일본어 수준은 어느 정도인가요?", a: "EJU 전형이나 특별 선발의 경우, 궁극적으로 JLPT N1 수준 또는 이에 준하는 의사소통 능력이 요구됩니다. 초기에는 영어로 개념을 먼저 가르치며, 단계적으로 일본어 사용 비율을 늘려갑니다." },
      { q: "영어로만 배우고 졸업할 수 있는 일본 의대가 있나요?", a: "네, 국제의료복지대학(IUHW) 의대에는 영어를 기본 언어로 수업과 실습을 진행하는 유학생 전형이 있습니다. 단, 병원 임상실습과 의사국가시험은 일본어로 치러지므로 입학 후 일본어 학습은 필수적입니다." },
      { q: "해외에 살고 있는데 수업을 들을 수 있나요?", a: "네, 시차를 반영하여 온라인 1대1 양방향 화상 수업을 진행합니다. 태블릿 공유 시스템을 사용해 대면 수업과 같은 퀄리티를 보장합니다." },
      { q: "이과(수학/과학) 실력이 부족한데 의대 준비가 가능할까요?", a: "네. 해외 고교 과정에서 배우지 않은 수학 III(미적분 등) 영역을 정밀하게 진단하여, 개인 맞춤형으로 빠르게 공백을 메워드립니다." }
    ],
    ctaHeading: "글로벌 의대 합격 전략 면담 신청",
    ctaSub: "학생의 현재 언어 능력, 이과 실력, 목표 대학을 종합적으로 분석해 최적의 합격 패스를 제시해 드립니다.",
    ctaBtn: "무료 합격 전략 면담 예약",
    langLabel: "언어 선택 / Select Language / 表示言語の切り替え / 切换语言:",
  }
};

export default function InternationalClient() {
  const searchParams = useSearchParams();
  const [lang, setLang] = useState<Language>("ja");

  useEffect(() => {
    const queryLang = searchParams.get("lang") as Language;
    if (queryLang && ["ja", "en", "zh", "ko"].includes(queryLang)) {
      setLang(queryLang);
    } else {
      if (typeof navigator !== "undefined") {
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("zh")) setLang("zh");
        else if (browserLang.startsWith("ko")) setLang("ko");
        else if (browserLang.startsWith("en")) setLang("en");
      }
    }
  }, [searchParams]);

  const t = translations[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Floating/Top Sticky Language Switcher */}
      <div className="sticky top-24 z-40 bg-white/80 backdrop-blur-md border-b border-[#e5e1d8] py-3 px-4 transition-all duration-300">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-bold text-[#0c1a33] flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-[#c9922a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.313 1.565-.75 3.125-1.311 4.606m-3.488.012a14.49 14.49 0 002.548 3.51" />
            </svg>
            <span>{t.langLabel}</span>
          </p>
          <div className="flex flex-wrap gap-1.5">
            {(["ja", "en", "zh", "ko"] as Language[]).map((l) => {
              const label = {
                ja: "日本語 (JP)",
                en: "English (EN)",
                zh: "简体中文 (ZH)",
                ko: "한국어 (KO)",
              }[l];
              return (
                <button
                  key={l}
                  id={`lang-btn-${l}`}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    lang === l
                      ? "bg-[#c9922a] border-[#c9922a] text-white shadow-sm"
                      : "bg-white border-[#e5e1d8] text-[#5f6b7a] hover:bg-[#f7f5f0] hover:text-[#0c1a33]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ backgroundColor: "#0c1a33" }} className="px-4 py-20 md:py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c9922a_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="mx-auto max-w-4xl text-center relative z-10">
          <span className="mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#c9922a]" style={{ backgroundColor: "rgba(201,146,42,0.15)", border: "1px solid rgba(201,146,42,0.3)" }}>
            {t.heroEyebrow}
          </span>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {t.heroTitle}<br />
            <span className="text-lg md:text-xl font-light text-slate-300 block mt-2">{t.heroTitleSub}</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-sm md:text-base leading-relaxed text-slate-300">
            {t.heroSub}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?from=international-hero"
              id="hero-cta-contact"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: "#c9922a" }}
            >
              {t.heroCTA1}
            </Link>
            <Link
              href="/pricing?from=international-hero"
              id="hero-cta-pricing"
              className="inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              style={{ border: "1px solid rgba(255,255,255,0.28)" }}
            >
              {t.heroCTA2}
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Stats Section */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Key Strengths
            </p>
            <h2 className="text-2xl font-bold leading-snug md:text-3xl text-[#0c1a33]" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.statsHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5f6b7a]">
              {t.statsSub}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.stats.map((item) => (
              <div key={item.label} className="h-full rounded-xl bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1" style={{ border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-xs font-bold tracking-wider text-[#c9922a] uppercase">{item.label}</p>
                <p className="mb-4 text-lg md:text-xl font-bold text-[#0c1a33]" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  {item.value}
                </p>
                <p className="text-sm leading-relaxed text-[#5f6b7a]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Target Challenges
            </p>
            <h2 className="text-2xl font-bold md:text-3xl text-[#0c1a33]" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.challengesHeading}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.challenges.map((item) => (
              <div key={item.title} className="rounded-xl p-7 transition-all duration-300 hover:shadow-md" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-base font-bold text-[#0c1a33]">{item.title}</p>
                <p className="text-sm leading-relaxed text-[#5f6b7a]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Admissions Routes Comparison Table */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Comparison Matrix
            </p>
            <h2 className="text-2xl font-bold text-[#0c1a33]" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.compareHeading}
            </h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-[#e5e1d8] bg-white shadow-sm">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr style={{ backgroundColor: "#0c1a33" }} className="text-white">
                  <th className="p-4 font-bold border-b border-[#e5e1d8]">{t.compareColLabel}</th>
                  <th className="p-4 font-bold border-b border-[#e5e1d8]">{t.compareColJa}</th>
                  <th className="p-4 font-bold border-b border-[#e5e1d8]">{t.compareColEn}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e1d8] text-[#3d3d3d]">
                {t.compareRows.map((row) => (
                  <tr key={row.label}>
                    <td className="p-4 font-bold bg-[#f7f5f0] text-[#0c1a33] w-1/4">{row.label}</td>
                    <td className="p-4">{row.ja}</td>
                    <td className="p-4">{row.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Program / Steps Section */}
      <section className="px-4 py-16 text-white" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Program Framework
            </p>
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.programHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {t.programSub}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {t.programSteps.map((item) => (
              <div key={item.step} className="h-full rounded-xl p-6 transition-all duration-300 hover:bg-slate-800" style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="mb-4 text-lg font-bold" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>{item.step}</p>
                <p className="mb-3 text-base font-bold text-white">{item.title}</p>
                <p className="text-sm leading-relaxed text-slate-300">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Coaching System & Image */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Tutoring System
            </p>
            <h2 className="mb-5 text-2xl font-bold leading-snug text-[#0c1a33] md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.tutorHeading}
            </h2>
            <p className="text-sm leading-relaxed text-[#5f6b7a] mb-6">
              {t.tutorSub}
            </p>

            <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#e5e1d8] group">
              <div className="absolute inset-0 bg-[#c9922a]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
              <img
                src="/images/generated/international_medical_student.png"
                alt="日本の医学部を目指す外国人留学生とバイリンガル講師が笑顔で理科や数学を学習している様子"
                className="w-full h-auto object-cover max-h-[320px] transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.supportItems.map((item) => (
              <div key={item} className="flex min-h-[96px] gap-3 rounded-xl p-5" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ backgroundColor: "#c9922a" }} />
                <p className="text-sm font-semibold leading-relaxed text-[#0c1a33]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit Check */}
      <section className="px-4 py-16" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
              Fit Check
            </p>
            <h2 className="text-2xl font-bold leading-snug text-[#0c1a33] md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
              {t.fitCheckHeading}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5f6b7a]">
              {t.fitCheckSub}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {t.mismatchItems.map((item, index) => (
              <div key={item} className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm" style={{ border: "1px solid #e5e1d8" }}>
                <span className="mt-0.5 text-base font-bold" style={{ color: "#c9922a" }}>{String(index + 1).padStart(2, "0")}</span>
                <p className="text-sm leading-relaxed text-[#3d3d3d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold text-center text-[#0c1a33]" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {t.faqHeading}
          </h2>
          <div className="space-y-5">
            {t.faqs.map((item) => (
              <div key={item.q} className="rounded-xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="mb-3 text-sm font-bold text-[#0c1a33] flex items-start gap-2">
                  <span style={{ color: "#c9922a" }}>Q.</span>
                  <span>{item.q}</span>
                </p>
                <p className="text-sm leading-relaxed text-[#5f6b7a] pl-5 border-l-2 border-[#c9922a]/40">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedColumns hub="for/international" heading="留学生におすすめの関連受験情報" subheading="医学部の志望校の決め方、理数科目の勉強順序、面接小論文の基礎などを解説しています。" />

      {/* Final CTA Section */}
      <section className="px-4 py-20" style={{ backgroundColor: "#0c1a33" }}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-bold tracking-widest uppercase" style={{ color: "#c9922a" }}>
            Global Strategy Meeting
          </p>
          <h2 className="mb-5 text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-noto-serif)" }}>
            {t.ctaHeading}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-300">
            {t.ctaSub}
          </p>
          <Link
            href="/contact?from=international-final"
            id="final-cta-btn"
            className="inline-flex items-center justify-center rounded-lg px-10 py-4.5 text-sm font-bold text-white transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#c9922a" }}
          >
            {t.ctaBtn}
          </Link>
        </div>
      </section>
    </div>
  );
}
