import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNationalUniversityBySlug, nationalUniversityArticles, type NationalUniversityEntry } from "../data";

function buildFeatures(entry: NationalUniversityEntry) {
  const common = [
    {
      title: "大学別に必要な得点の作り方を整理する",
      body: `${entry.name}では、共通テストと二次のどちらで差をつけるかを先に決めておくと学習効率が上がります。`,
    },
    {
      title: "英数理の完成度を同じ温度感で上げる",
      body: "医学部受験では一科目の突出よりも、苦手を作らず総合点でまとめる設計が重要です。",
    },
    {
      title: "面接や志望理由は大学理解とセットで準備する",
      body: `${entry.name}を選ぶ理由、将来像、地域医療や研究への考え方を言語化しておくと本番でぶれにくくなります。`,
    },
  ];

  if (entry.category === "旧帝大") {
    common[0].body = `${entry.name}は難関大水準の答案精度が求められやすく、二次で戦える力を早めに作ることが重要です。`;
    common[1].body = "難問に触れる前に標準問題を完答できる状態を作り、そこから記述力を伸ばす設計が有効です。";
  }

  if (entry.category === "単科医科大学") {
    common[2].body = `${entry.name}では医学部適性や医師志望の一貫性も見られやすいため、人物面の準備も早めに始めたいところです。`;
  }

  if (entry.category === "防衛医科大学校") {
    common[0].body = "防衛医科大学校は一般的な医学部とは進学後の環境が大きく異なるため、制度理解と志望理由の整理が特に重要です。";
    common[1].body = "学力勝負であることは同じですが、規律ある環境に適応できるかまで含めて準備したい進路です。";
    common[2].body = "医師としての使命感、自衛隊医官という進路への納得感、生活面の理解を言葉にできる状態を目指します。";
  }

  return common;
}

function buildStrategies(entry: NationalUniversityEntry) {
  return [
    {
      step: "01",
      title: "共通テストと二次の配点バランスを確認する",
      body: `${entry.name}は${entry.summary} まずは配点と必要得点を見て、どの科目で取りこぼせないかを明確にします。`,
    },
    {
      step: "02",
      title: "数学と理科は典型問題を完答できる状態まで固める",
      body: "医学部受験では標準問題を落とさないことが合否に直結します。難問対策は基礎完成のあとで十分です。",
    },
    {
      step: "03",
      title: "英語は長文読解と記述の精度を同時に上げる",
      body: "国立医学部では英語の安定感が総合点に直結します。読解速度と論理的な答案づくりを並行して進めます。",
    },
    {
      step: "04",
      title: "志望理由・面接対策は大学理解とセットで仕上げる",
      body: `${entry.area}で学ぶ意味、${entry.name}を選ぶ理由、将来像を自分の言葉で話せる状態を目指します。`,
    },
  ];
}

function buildFaqs(entry: NationalUniversityEntry) {
  return [
    {
      q: `${entry.name}では共通テストと二次のどちらを重視すべきですか？`,
      a: "まずは配点を確認したうえで、今の学力とのギャップが大きい側から優先順位をつけるのがおすすめです。どちらか一方だけではなく、全体の総合点を上げる設計が必要です。",
    },
    {
      q: `${entry.name}の対策はいつから始めるべきですか？`,
      a: "高2までに英数理の基礎を固め、高3で実戦演習に移れる形が理想です。浪人生や再受験生は、春の段階で年間計画を決めておくと走りやすくなります。",
    },
    {
      q: `${entry.name}に向いている受験生はどんなタイプですか？`,
      a: entry.fit,
    },
    {
      q: "面接や志望理由はどこまで準備すべきですか？",
      a: "大学の特色、学びたいこと、将来の医師像をつなげて話せる状態まで準備するのが理想です。学力対策と並行して少しずつ言語化を進めておくと本番で安定します。",
    },
  ];
}

export async function generateStaticParams() {
  return nationalUniversityArticles.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getNationalUniversityBySlug(slug);

  if (!entry) {
    return {};
  }

  return {
    title: `${entry.name}の入試対策ガイド | Medvance`,
    description: `${entry.name}の入試対策ガイド。大学の特徴、学習戦略、面接準備、合格までの進め方をMedvanceが整理します。`,
  };
}

export default async function NationalUniversityArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getNationalUniversityBySlug(slug);

  if (!entry) {
    notFound();
  }

  const features = buildFeatures(entry);
  const strategies = buildStrategies(entry);
  const faqs = buildFaqs(entry);

  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            National University Guide
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {entry.name}の入試対策ガイド
          </h1>
          <p className="text-base max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.68)" }}>
            {entry.summary}
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4">
          {[
            { label: "エリア", value: entry.region },
            { label: "立地", value: entry.area },
            { label: "区分", value: entry.category },
            { label: "キャンパス", value: entry.campus },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white p-5" style={{ border: "1px solid #e5e1d8" }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "#c9922a" }}>
                {item.label}
              </p>
              <p className="text-sm font-semibold leading-relaxed" style={{ color: "#0c1a33" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            {entry.name}を目指すうえで押さえたいポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>
                  {item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格までの進め方
          </h2>
          <div className="space-y-4">
            {strategies.map((item) => (
              <div key={item.step} className="rounded-2xl bg-white p-6" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                    {item.step}
                  </div>
                  <div>
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                      {item.title}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>
                  Q. {item.q}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  A. {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            Free Consultation
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            {entry.name}に向けた学習設計を一緒に整理できます
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.68)" }}>
            現在地、志望校、残り期間に合わせて、共通テストと二次の比重、面接準備、苦手科目の優先順位まで一緒に整理します。
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談・お問い合わせ
            </Link>
            <Link
              href="/universities/national"
              className="inline-block px-8 py-4 font-bold text-base rounded-lg text-center hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              国公立一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
