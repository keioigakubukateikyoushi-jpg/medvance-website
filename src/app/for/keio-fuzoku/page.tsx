import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import type { Metadata } from "next";

const faqItems = [
  {
    q: "慶應附属校の定期試験対策は何年生から始めるべきですか？",
    a: "早ければ早いほど有利です。特に医学部への内部進学を目指す場合、中学（普通部・中等部）からの評定が積み重なります。高校1年生から始めるのが一般的ですが、中学生から始めると高校進学後の基礎力が大きく異なり、評定を安定させやすくなります。",
  },
  {
    q: "医学部以外の学部への進学もサポートしていますか？",
    a: "Medvanceは医学部受験・医学部内部進学に特化したサービスです。定期試験対策・評定向上については医学部以外の学部を目指す方も対応可能な場合がありますので、まずはご相談ください。",
  },
  {
    q: "オンラインで授業を受けられますか？",
    a: "はい、全国どこからでもオンラインで受講できます。Zoom等のビデオ通話を使用した完全1対1の指導です。慶應附属校の生徒は関東圏に集中していますが、地方在住のご家庭にも対応しています。",
  },
  {
    q: "どのくらいの期間で成績が上がりますか？",
    a: "生徒の現状・目標・指導頻度によって異なりますが、定期試験対策を継続することで1〜2学期以内に評定の改善が見られるケースが多いです。重要なのは単発対策ではなく、継続的な指導による習慣化です。",
  },
];


const supportedSchools = [
  "慶應義塾高校（男子校・東京）",
  "慶應義塾女子高校（女子校・東京）",
  "慶應義塾志木高校（男子校・埼玉）",
  "慶應義塾湘南藤沢高等部（SFC・男女）",
  "慶應義塾普通部（中学・男子・横浜）",
  "慶應義塾中等部（中学・男女・東京）",
];

const challenges = [
  {
    title: "独自カリキュラムへの対応",
    body: "慶應附属校の授業・試験は独自性が高く、一般的な参考書や予備校の授業では対策が難しい。学校内部を知る指導者でないと、的外れな対策になりがちです。",
  },
  {
    title: "評定の積み上げが難しい",
    body: "内部進学では学期ごとの評定が選考に使われます。1学期失敗しても取り戻せないため、最初からコンスタントに高い評定を維持する必要があります。",
  },
  {
    title: "苦手科目が足を引っ張る",
    body: "全科目の平均評定が求められるため、一部の得意科目だけ伸ばしても不十分。苦手科目の底上げなしに合格ラインには届きません。",
  },
  {
    title: "医学部進学に必要な準備が不明",
    body: "医学部は内部進学の中でも最難関。評定だけでなく、志望動機の整理・面接対策・推薦書類の準備など、やるべきことが多岐にわたります。",
  },
];

const whyMedvance = [
  {
    num: "01",
    title: "慶應附属校出身の医学部生が指導",
    body: "指導を担当するのは現役の慶應義塾大学医学部生。附属校のカリキュラム・定期試験の傾向・評定の仕組みを自分自身が経験しており、実践的なアドバイスが可能です。",
  },
  {
    num: "02",
    title: "試験前に集中指導で評定を確実に上げる",
    body: "定期試験の2〜3週間前から指導頻度を上げ、出題される可能性が高い範囲に絞った集中対策を実施。「何を優先するか」を経験者目線で整理します。",
  },
  {
    num: "03",
    title: "全科目対応で評定平均を底上げ",
    body: "英語・数学・理科・国語・社会まで、全科目の評定を管理。得意科目だけでなく苦手科目のフォローを行い、全体の評定平均を安定させます。",
  },
  {
    num: "04",
    title: "医学部内部進学の選考まで一貫サポート",
    body: "評定管理だけでなく、志望動機の整理・医療系の知識補強・面接練習まで対応。医学部内部進学に必要な準備を一貫してサポートします。",
  },
];

export const metadata: Metadata = {
  title: "慶應附属校生の成績向上・内部進学対策｜Medvance",
  description:
    "慶應附属校（義塾高校・女子高・志木・SFC・普通部・中等部）の定期試験対策・評定向上・医学部内部進学サポートはMedvanceへ。現役慶應医学部生が完全1対1で指導。全国オンライン対応。",
  keywords: [
    "慶應附属校 成績 上げる",
    "慶應附属校 定期試験 対策",
    "慶應 内部進学 対策",
    "慶應義塾高校 家庭教師",
    "慶應附属校 家庭教師 おすすめ",
  ],
  alternates: {
    canonical: "/for/keio-fuzoku",
  },
};

export default function KeioFuzokuPage() {
  return (
    <>
      <ForPageSchemas slug="keio-fuzoku" />
      <div className="min-h-screen bg-white">

      {/* HERO */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>慶應附属校生の方へ</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慶應附属校の成績向上<br />内部進学対策
          </h1>
          <p className="text-base md:text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            定期試験・評定管理・医学部内部進学まで<br />現役慶應医学部生が完全1対1でサポート
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
              href="/for/keio-naibu"
              className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              医学部内部進学対策を見る
            </Link>
          </div>
        </div>
      </div>

      {/* SUPPORTED SCHOOLS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center" style={{ color: "#0c1a33" }}>対応している附属校</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {supportedSchools.map((school, i) => (
              <div key={i} className="px-4 py-3 rounded-xl bg-white text-center text-xs font-medium" style={{ border: "1px solid #e5e1d8", color: "#3d3d3d" }}>
                {school}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慶應附属校生が直面する4つの課題
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            一般的な塾・家庭教師では解決しにくい構造的な問題
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>
                  <span style={{ color: "#c9922a" }}>課題{i + 1}. </span>{item.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY MEDVANCE */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            Medvanceが選ばれる4つの理由
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>
            慶應を知る人間が、慶應附属校生を指導する
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {whyMedvance.map((item) => (
              <div key={item.num} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-1" style={{ color: "#c9922a" }}>{item.num}</p>
                <p className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE FLOW */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            指導の流れ
          </h2>
          <p className="text-sm text-center mb-10" style={{ color: "#6b7280" }}>無料相談から指導開始まで最短1週間</p>
          <div className="space-y-4">
            {[
              { step: "STEP 1", title: "無料相談（30分）", body: "現在の成績・評定・目標（内部進学先の学部）をヒアリング。最適な指導プランをご提案します。" },
              { step: "STEP 2", title: "指導プラン確定", body: "科目・頻度・料金を確認して契約。定期試験の日程に合わせたスケジュールを設計します。" },
              { step: "STEP 3", title: "指導開始・週次管理", body: "完全1対1のオンライン授業スタート。毎回の授業後に進捗報告・次回予定を共有します。" },
              { step: "STEP 4", title: "定期試験前の集中対策", body: "試験2〜3週間前から頻度を上げ、出題範囲の重点対策を実施。評定の最大化を目指します。" },
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

      {/* RELATED COLUMNS */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-8 text-center" style={{ color: "#0c1a33" }}>関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { href: "/column/keio-naibu-shikumi", title: "慶應内部進学の仕組みを解説", label: "内部進学の仕組み" },
              { href: "/column/keio-naibu-seiseki", title: "慶應附属校の成績を上げる科目別対策", label: "成績対策" },
              { href: "/column/keio-fuzoku-kateikyoushi", title: "慶應附属校の家庭教師おすすめ比較", label: "家庭教師比較" },
            ].map((article) => (
              <Link key={article.href} href={article.href} className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow" style={{ border: "1px solid #e5e1d8" }}>
                <span className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3" style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}>{article.label}</span>
                <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>{article.title}</p>
                <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>記事を読む →</p>
              </Link>
            ))}
          </div>

        {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-3xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
            <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <img 
              src="/images/generated/japanese_student_keio_fuzoku.png" 
              alt="慶應附属校の制服を着て、目標の慶応医学部内部推薦獲得に向け笑顔で立つ日本の高校生" 
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </section>

          {/* FAQ */}
          <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>よくある質問</h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
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
            慶應附属校生の成績向上・内部進学は<br />Medvanceにお任せください
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            現在の成績・目標をお聞かせいただければ、最適な指導プランをご提案します。<br />無料相談は30分。まずはお気軽にご連絡ください。
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
