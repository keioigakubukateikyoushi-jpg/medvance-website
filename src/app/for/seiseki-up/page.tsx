import ForPageSchemas from "@/components/ForPageSchemas";
import { forPageMeta } from "@/lib/forPageMeta";
import Link from "next/link";
import RelatedColumns from "@/components/RelatedColumns";
import type { Metadata } from "next";


const subjects = [
  { name: "英語", point: "文法・語彙・長文読解・英作文。学校ごとの試験形式に合わせて重点分野を調整。" },
  { name: "数学", point: "計算力から証明・記述まで。学校の教科書・問題集に沿って基礎→応用の順で定着させる。" },
  { name: "理科（物理・化学・生物）", point: "暗記と理解のバランスが重要。実験レポート対策・計算問題の解き方まで丁寧に指導。" },
  { name: "国語", point: "現代文・古文・漢文を学校教材に合わせて対策。記述問題の書き方も指導。" },
  { name: "社会（歴史・地理・公民）", point: "暗記の効率化と論述問題の対策。定期試験の出題パターンを把握して得点に直結させる。" },
];

const reasons = [
  {
    num: "01",
    title: "現役慶應医学部生が指導",
    body: "指導するのは全員、慶應義塾大学医学部の現役在籍生。全科目で高い学力を持ち、中学・高校レベルの学習指導に豊富な経験があります。",
  },
  {
    num: "02",
    title: "完全1対1・完全オーダーメイド",
    body: "集団授業や映像授業と違い、生徒の理解度・つまずき・試験範囲に合わせてリアルタイムで指導内容を調整。「わかったつもり」をなくします。",
  },
  {
    num: "03",
    title: "定期試験前の集中対策",
    body: "試験2〜3週間前から指導頻度を上げ、出題範囲に絞ったピンポイント対策を実施。「どこを重点的にやるか」を先輩目線でアドバイスします。",
  },
  {
    num: "04",
    title: "全国どこからでもオンラインで受講",
    body: "Zoomを使った完全オンライン指導のため、通塾の必要がありません。部活・習い事との両立もしやすく、移動時間ゼロで授業を受けられます。",
  },
];

export const metadata: Metadata = {
  title: "学校の成績を上げたい中学生・高校生へ｜定期テスト対策・内申点向上 | Medvance",
  description:
    "定期テスト対策・内申点向上・推薦入試準備を個別指導でサポート。現役慶應医学部生が1対1で全科目に対応。中学生・高校生向け完全オンライン家庭教師。",
  keywords: [
    "学校の成績 上げる 家庭教師",
    "定期テスト対策 個別指導",
    "内申点 上げる 家庭教師",
    "中学生 成績 上げる",
    "高校生 定期試験 家庭教師",
  ],
  alternates: {
    canonical: "/for/seiseki-up",
  },
};

export default function SeisekiUpPage() {
  return (
    <>
      <ForPageSchemas slug="seiseki-up" />
      <div className="min-h-screen bg-white">

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>成績向上・定期テスト対策</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            学校の成績を<br />確実に上げる
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            定期テスト対策・内申点向上・推薦入試準備まで<br />現役慶應医学部生が完全1対1でサポート
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
              href="/pricing"
              className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              料金を確認する
            </Link>
          </div>
        </div>
      </div>

      {/* WHO IS THIS FOR */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center" style={{ color: "#0c1a33" }}>こんな方に選ばれています</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "定期テストで思うように点が取れない",
              "内申点を上げて推薦入試・AO入試に備えたい",
              "苦手科目が足を引っ張って評定平均が上がらない",
              "部活や習い事で忙しく、効率よく勉強したい",
              "学校の授業についていけない科目がある",
              "高校・大学の進路選択肢を広げたい",
              "慶應附属校・他の附属校で評定管理をしたい",
              "医学部・難関大を将来的に目指している",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 px-5 py-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <span className="flex-shrink-0 text-base" style={{ color: "#c9922a" }}>✓</span>
                <p className="text-sm" style={{ color: "#3d3d3d" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが選ばれる理由
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            大手塾・映像授業との決定的な違い
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {reasons.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBJECTS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            対応科目
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            主要5科目すべてに対応。苦手1科目からでも受講可能
          </p>
          <div className="space-y-4">
            {subjects.map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-20 text-center">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white" style={{ backgroundColor: "#0c1a33" }}>{item.name}</span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            指導の進め方
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>無料相談から指導開始まで最短1週間</p>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "無料相談（30分）", body: "現在の成績・苦手科目・目標（内申点・定期テストの点数・推薦入試など）をヒアリング。最適な指導プランをご提案します。" },
              { step: "STEP 2", title: "指導プラン確定", body: "科目・週の頻度・料金を確認して契約。定期テストの日程・学校のカリキュラムに合わせてスケジュールを設計します。" },
              { step: "STEP 3", title: "指導開始・毎週フォロー", body: "Zoomを使った完全1対1のオンライン指導スタート。毎回の授業後に進捗・次回予定を共有し、保護者への報告も行います。" },
              { step: "STEP 4", title: "テスト前に集中対策", body: "定期テストの2〜3週間前から指導頻度を上げ、出題範囲の重点対策を実施。着実に点数・評定を上げていきます。" },
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

      {/* PRICING */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            料金の目安
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            1科目からOK。契約縛りなし、無料相談後にプランをご提案
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                plan: "テスト前集中プラン",
                freq: "月4〜6回",
                price: "月額 ¥38,000〜",
                desc: "定期テスト前の2〜3週間に集中指導。点数を確実に底上げします。",
              },
              {
                plan: "定期継続プラン",
                freq: "月8〜10回",
                price: "月額 ¥76,000〜",
                desc: "毎週継続指導で年間を通じた評定・成績の安定向上を目指します。",
                highlight: true,
              },
              {
                plan: "複数科目強化プラン",
                freq: "月12回〜",
                price: "月額 ¥110,000〜",
                desc: "2〜3科目を並行して指導。内申点全体の底上げを狙います。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{
                  backgroundColor: item.highlight ? "#0c1a33" : "white",
                  border: item.highlight ? "none" : "1px solid #e5e1d8",
                }}
              >
                <p className="text-xs font-semibold mb-2" style={{ color: "#c9922a" }}>{item.plan}</p>
                <p className="font-bold text-xl mb-1" style={{ color: item.highlight ? "#fff" : "#0c1a33" }}>{item.price}</p>
                <p className="text-xs mb-3" style={{ color: item.highlight ? "rgba(255,255,255,0.6)" : "#6b7280" }}>{item.freq}</p>
                <p className="text-sm leading-relaxed" style={{ color: item.highlight ? "rgba(255,255,255,0.75)" : "#6b7280" }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-center mt-6" style={{ color: "#9ca3af" }}>
            ※ 上記は目安です。学年・科目数・目標によって最適なプランをご提案します。
          </p>
        </div>
      </div>

      {/* RELATED */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 text-center" style={{ color: "#0c1a33" }}>関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { href: "/column/seiseki-kateikyoushi", title: "学校の成績を上げるための家庭教師の選び方", label: "成績向上" },
              { href: "/column/teiki-test-kateikyoushi", title: "定期テスト対策に家庭教師が最も効果的な理由", label: "定期テスト" },
              { href: "/column/juku-erabi", title: "医学部受験の塾・予備校の選び方", label: "塾選び" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid #e5e1d8" }}>
                <span className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{article.label}</span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>{article.title}</p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>記事を読む →</p>
              </Link>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4">
            {(forPageMeta["seiseki-up"].faq ?? []).map((faq, i) => (
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
            学校の成績向上は<br />Medvanceにお任せください
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            現在の成績・苦手科目・目標をお聞かせいただければ、<br />最適な指導プランを無料でご提案します。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-xl font-bold text-white text-base hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談を申し込む
          </Link>
          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.4)" }}>
            相談後の勧誘は一切ありません
          </p>
        </div>
      </div>
    </div>
    </>
  );
}