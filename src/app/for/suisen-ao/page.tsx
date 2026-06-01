import ForPageSchemas from "@/components/ForPageSchemas";
import { forPageMeta } from "@/lib/forPageMeta";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


const supportTypes = [
  {
    title: "志望理由書・自己推薦書の作成・添削",
    body: "「なぜこの大学・学部か」「自分は何がしたいか」を論理的に言語化するプロセスを一緒に進めます。書き始めから最終仕上げまで複数回の添削で完成させます。",
  },
  {
    title: "面接対策（模擬面接・フィードバック）",
    body: "よく聞かれる質問への回答準備、深掘り質問への対応、話し方・姿勢まで実践的な模擬面接を実施。1回ごとに具体的なフィードバックを行います。",
  },
  {
    title: "小論文の構成・添削",
    body: "テーマ設定から構成の作り方、説得力のある文章の書き方まで指導。提出課題の添削と書き直しを繰り返すことで、本番で使える「型」を習得します。",
  },
  {
    title: "活動実績・課外活動の整理",
    body: "部活・ボランティア・研究・留学など、自分の経験を「入試で使える形」に整理します。エピソードの選び方・伝え方を一緒に考えます。",
  },
];

const targetExams = [
  "慶應義塾大学 AO入試（法・経済・商・理工・SFC・医など）",
  "早稲田大学 総合型選抜（政経・国際教養・法・理工など）",
  "上智大学 TEAP利用型・公募推薦",
  "東京大学 推薦入試",
  "国公立大学 学校推薦型選抜・総合型選抜",
  "医学部 推薦入試・AO入試（私立・国公立）",
  "その他私立大学 AO・公募推薦入試",
];

export const metadata: Metadata = {
  title: "推薦・AO入試対策（志望理由書・面接・小論文）｜現役医学部生が指導 | Medvance",
  description:
    "推薦・総合型選抜（AO）入試の志望理由書・面接・小論文を完全1対1で指導。医学部受験を勝ち抜いた現役医学部生が、書類作成から模擬面接・添削まで徹底サポート。全国オンライン対応。",
  keywords: [
    "推薦入試 面接対策 家庭教師",
    "AO入試 志望理由書 添削",
    "総合型選抜 対策 個別指導",
    "推薦 小論文 対策",
    "AO入試 家庭教師",
  ],
  alternates: {
    canonical: "/for/suisen-ao",
  },
};

export default function SuisenAoPage() {
  return (
    <>
      <ForPageSchemas slug="suisen-ao" />
      <div className="min-h-screen bg-white">

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>推薦・総合型選抜（AO）入試対策</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            推薦・AO入試を<br />突破する
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            志望理由書・面接・小論文を現役医学部生が<br />完全1対1で指導。全国オンライン対応。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#c9922a" }}
            >
              無料相談を申し込む
            </Link>
            <Link
              href="/services/interview"
              className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              面接・小論文対策を見る
            </Link>
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <h2 className="text-lg font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              慶應医学部生が推薦・AO対策に強い理由
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の入試には面接・小論文が課されており、Medvanceの講師は全員その対策を徹底的に行った経験者です。「なぜ医師を目指すのか」「あなた自身の強みは何か」という問いに、自分の言葉で答えるプロセスを自ら経験しています。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              この経験は、推薦・AO入試の準備にそのまま生きます。志望理由書の作り方・面接での深掘り対応・小論文の構成力——これらは医学部入試で身につけたスキルと重なります。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医療系以外の学部（法・経済・理工・教育・文系など）の推薦・AO入試にも対応しています。まずは無料相談でご相談ください。
            </p>
          </div>
        </div>
      </div>

      {/* SUPPORT TYPES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            指導内容
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>書類・面接・小論文・活動実績まで一貫サポート</p>
          <div className="grid md:grid-cols-2 gap-6">
            {supportTypes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#c9922a" }}>
                    {i + 1}
                  </span>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.title}</p>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Section (Mock Interview Practice) */}
      <div className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 bg-white group">
            <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <Image
              src="/images/generated/japanese_medical_interview_practice.png"
              alt="面接対策で面接官からの質問に論理的かつ説得力を持って答える練習風景"
              width={1600}
              height={1066}
              className="w-full h-auto object-cover max-h-[450px] transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="p-6 text-center bg-white border-t border-slate-100 relative z-20">
              <h3 className="font-bold text-lg mb-2" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                現役医学部生の面接官と対峙する、超実践的な模擬面接演習
              </h3>
              <p className="text-sm leading-relaxed max-w-2xl mx-auto" style={{ color: "#5f6b7a" }}>
                書類選考を通過した受験生に課される「面接・小論文」。Medvanceでは、本番さながらの姿勢や話し方、受け答えの論理構成から視線にいたるまで、合格実績のあるプロ視点で徹底的にフィードバックを重ねます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TARGET EXAMS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            対応している入試・学部
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>医療系以外も幅広く対応</p>
          <div className="space-y-3">
            {targetExams.map((exam, i) => (
              <div key={i} className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <span className="flex-shrink-0 font-bold" style={{ color: "#c9922a" }}>✓</span>
                <p className="text-sm" style={{ color: "#3d3d3d" }}>{exam}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOW */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            推薦・AO対策の進め方
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>書類締め切り・面接日程から逆算して設計</p>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "無料相談・スケジュール設計", body: "志望校・入試方式・締め切り日程を確認し、準備スケジュールを逆算して設計します。何から始めるべきかを明確にします。" },
              { step: "STEP 2", title: "自己分析・軸の言語化", body: "「なぜその大学・学部か」「自分の強みは何か」「将来何をしたいか」を深掘りします。ここが志望理由書・面接の根幹になります。" },
              { step: "STEP 3", title: "志望理由書・書類の作成", body: "自己分析をもとに志望理由書・自己推薦書を作成。複数回の添削と書き直しで完成度を高めます。" },
              { step: "STEP 4", title: "模擬面接・小論文演習", body: "想定質問への回答練習・深掘り対応・小論文の時間内作成まで実践的に練習。本番を想定した場を繰り返し設けます。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0">
                  <span className="inline-block text-xs font-bold px-2 py-1 rounded-full" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{item.step}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4">
            {(forPageMeta["suisen-ao"].faq ?? []).map((faq, i) => (
              <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white" style={{ color: "#0c1a33" }}>
                  <span>Q. {faq.q}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4" style={{ color: "#c9922a" }}><path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 pt-1 text-sm leading-relaxed" style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>無料相談受付中</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            推薦・AO入試の準備を<br />今すぐ始める
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            志望校・入試方式・締め切り日程をお聞かせいただければ、<br />必要な対策と開始タイミングをご提案します。
          </p>
          <Link href="/contact" className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity" style={{ backgroundColor: "#c9922a" }}>
            無料相談を申し込む
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>相談後の勧誘は一切ありません</p>
        </div>
      </div>
    </div>
    </>
  );
}
