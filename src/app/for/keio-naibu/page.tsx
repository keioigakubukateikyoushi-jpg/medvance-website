import ForPageSchemas from "@/components/ForPageSchemas";
import Link from "next/link";
import TutorProfiles from "@/components/TutorProfiles";
import LineButton from "@/components/LineButton";
import KeioNaibuSimulator from "@/components/KeioNaibuSimulator";

export const metadata = {
  title: "慶應医学部への内部進学対策｜系列校特化の評定向上＆推薦選考指導 | Medvance",
  description:
    "【慶應内部進学・医学部推薦特化】義塾高校（塾高）・女子高・志木・SFC高等部から限られた慶應医学部への内部推薦枠を勝ち取るための完全個別指導。学校ごとの出題傾向に同調した定期試験・評定対策と、医学部推薦会議で高評価を得る面接・志望動機書指導。",
  keywords: [
    "慶應 内部進学 医学部",
    "塾高 医学部 推薦",
    "慶應志木 医学部 推薦",
    "慶應女子 医学部 推薦",
    "慶應SFC 医学部 推薦",
    "慶應 評定 上げる",
    "慶應内部推薦 家庭教師"
  ],
  alternates: {
    canonical: "/for/keio-naibu",
  },
};

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const CREAM = "#f7f5f0";

const keioAffiliateSpecifics = [
  {
    school: "慶應義塾高校（塾高）",
    slots: "約740名中「上位約22名」",
    difficulty: "極めて過酷な順位争い",
    strategy: "数学・理科（物理・化学・生物）の学内平均点が低く、難問が出題されるため、学校独自のプリント・授業内容を完璧に再現できる対策が必須。高1からの全評定（GPA）の積み上げが命運を分けます。"
  },
  {
    school: "慶應義塾志木高校",
    slots: "約250名中「上位約5名」",
    difficulty: "枠が非常に狭い超少数精鋭枠",
    strategy: "自主性を重んじる校風の裏返しとして、提出物や課題論文、自由記述式テストの採点基準が非常に厳しいのが特徴。独自カリキュラムで進む英語・数学の学内順位を常にトップグループに維持する必要があります。"
  },
  {
    school: "慶應義塾女子高校",
    slots: "約200名中「上位約5名」",
    difficulty: "最難関女子校のトップ層争い",
    strategy: "全国トップクラスの秀才が集まる中、評定平均8.5〜9.0以上が実質的な推薦基準になります。定期テストの記述量が多く、小テストの積み重ねも評価対象。理系科目の評定アップと、早期の志望動機構築が合否を分けます。"
  },
  {
    school: "慶應湘南藤沢高等部（SFC）",
    slots: "約240名中「上位約5名」",
    difficulty: "独自性の高い複合評価",
    strategy: "単なるペーパーテストの成績だけでなく、プレゼンテーション課題、卒業研究、英語によるレポート提出などの比重が大きいです。高いGPA維持に加え、SFC特有の自主研究科目を医学部志望の文脈で構築する指導を行います。"
  }
];

const evaluationPillars = [
  {
    title: "1. 系列校ごとの「独自カリキュラム試験」完全同調",
    body: "慶應の附属校は検定教科書をほとんど使わず、教員オリジナルのプリントや大学教養レベルの専門書を使用します。Medvanceでは、各学校で実際にその授業を受け、医学部枠を勝ち取った現役慶應医学部生が、授業ノート・過去の出題傾向から「定期試験で高得点を取るためのポイント」を的確に伝授します。"
  },
  {
    title: "2. 1点の隙も許さない「15分計画×脳科学復習モデル」",
    body: "全科目の合算GPAが推薦基準になるため、得意科目だけを伸ばしても医学部推薦は勝ち取れません。Medvanceは週次の指導外の時間も徹底管理。「15分単位の計画表」と忘却曲線を制御する「脳科学復習アプローチ」を組み合わせ、苦手科目の抜け漏れを防ぎ、確実に全科目の評定を底上げします。"
  },
  {
    title: "3. 「独自データベース×AI」による定着率の見える化",
    body: "日々の小テスト結果や単語・公式の定着レベルを、生徒一人ひとりに構築された「専用学習データベース」に蓄積。独自の分析AIが『長期記憶化された知識』と『短期記憶のままの知識』を色分け可視化し、保護者様へリアルタイムに共有。塾からの『順調です』という曖昧な言葉を一切排除します。"
  },
  {
    title: "4. 医学部推薦会議をクリアする「小論文・志望理由・面接」",
    body: "評定基準をクリアした後に待ち受けるのが、学内の医学部推薦面接と志望理由書の選考です。「なぜ医師を志すのか」「慶應医学部でどのような研究をしたいのか」を、推薦会議で最高評価が得られる水準まで、担当の慶應医学生講師が何度も添削・模擬面接を重ねて磨き上げます。"
  }
];

const curriculumDetails = [
  {
    subject: "数学（解析・幾何）",
    focus: "学内プリントと高難度記述の再現",
    details: "各校とも進度が非常に早く、高2までに高校数学の全範囲を終了します。定期試験では誘導なしの記述難問が多いため、部分点をかき集める論理記述力と計算ミスを排除する解法チェックシステムを指導します。"
  },
  {
    subject: "化学・物理・生物",
    focus: "大学レベルの内容を含む専門問題",
    details: "高校の枠を超えた大学一般教養のレジュメから出題されることも稀ではありません。原理原則から本質的に理解させ、ただの暗記ではなく『記述式テストで加点される論理展開』が書けるようにサポートします。"
  },
  {
    subject: "英語（リーディング・文法）",
    focus: "膨大な読解量と精読力の両立",
    details: "洋書やハイレベルな英文記事が授業教材になることが多く、文法から構文まで高度な読解スキルが試されます。単語テストなどの小さな加点要素も漏らさず回収し、常に評定8以上をキープするための読解スピードを養成します。"
  },
  {
    subject: "小論文・推薦願書",
    focus: "学内選考を通過する唯一無二の自己アピール",
    details: "慶應医学部への推薦には、志望動機書（推薦願書）の完成度が直結します。部活動や学校行事での取り組みを『医学部進学後にどう活かすか』という論理的なシナリオに落とし込み、説得力ある小論文が書けるよう一から指導します。"
  }
];

const steps = [
  {
    step: "STEP 01",
    title: "無料合格戦略診断（現状分析）",
    body: "現在の評定平均、学年順位、各科目の定期試験結果、学校での学習姿勢を詳細にヒアリング。医学部推薦枠のボーダーラインとのギャップを数字で可視化します。"
  },
  {
    step: "STEP 02",
    title: "オーダーメイドカリキュラム設計",
    body: "所属する系列校（塾高・志木・女子・SFC）の授業進度とシラバスに合わせ、定期試験で何点取れば目標評定に到達するか、逆算した週間指導スケジュールを設計します。"
  },
  {
    step: "STEP 03",
    title: "1対1の同調指導 ＆ 15分タスク管理",
    body: "現役の慶應医学生講師が、授業プリントや過去の傾向に完全同調した指導を行います。指導日以外も15分単位の学習計画と脳科学復習メソッドで自習の質を支配します。"
  },
  {
    step: "STEP 04",
    title: "定期試験前の集中ブースト",
    body: "試験の2〜3週間前から指導頻度を上げ、試験範囲に完全に的を絞った総復習と演習を実施。苦手分野をすべて潰し切り、最高のコンディションで本番へ臨ませます。"
  },
  {
    step: "STEP 05",
    title: "志望理由書・学内面接の最終仕上げ",
    body: "高3の推薦選考期に向け、志望動機の言語化・小論文対策・模擬面接を重ね、推薦会議を自信を持って突破できるクオリティに仕上げます。"
  }
];

const faqs = [
  {
    q: "慶應医学部への内部推薦を勝ち取るための最低評定はいくつですか？",
    a: "学校や年度によって多少前後しますが、塾高では10点満点中8.5以上（できれば9.0以上）、志木・女子高・SFCでも評定平均（GPA）で上位数％以内を維持し続ける必要があります。主要3教科（英・数・理）で極めて高い評定を収めることはもちろん、副教科での取りこぼしを防ぐ全方位的対策が必須です。"
  },
  {
    q: "学校独自の教材やプリントばかりで市販教材が使えません。対応可能ですか？",
    a: "はい、Medvanceの最大の強みです。指導を担当するのは同じ系列校の出身または同等以上のカリキュラムを突破した現役慶應医学部生です。学校で配られるプリント、ノート、授業レジュメに完全同調した指導を行うため、市販の予備校教材には載っていない『学校独自の試験のツボ』をピンポイントで解説できます。"
  },
  {
    q: "部活が非常に忙しく、勉強時間の確保が難しいです。",
    a: "Medvanceでは、忙しい生徒のために『15分単位のタスク管理』を実施しています。隙間時間（通学時間や部活前後の15分）に何をすべきかを脳科学的な復習タイミングと連動させてタスク化するため、ダラダラ勉強する時間を排除し、短い時間で最大の記憶定着効率を実現します。"
  },
  {
    q: "万が一、内部推薦の基準に届かなかった場合のサポートはありますか？",
    a: "はい、もちろんございます。Medvanceでは、内部進学評定を全力で追いながらも、万が一の推薦漏れに備えて他私立医学部（慈恵・順天堂・日本医大など）や国公立医学部の一般受験対策を同時並行で実施する「内部・外部ダブル対策コース」をご用意しています。そちらの選択肢も踏まえ、早期にセーフティネットを張る指導を行います。"
  }
];

export default function KeioNaibuRevampedPage() {
  return (
    <>
      <ForPageSchemas slug="keio-naibu" />
      <div className="min-h-screen bg-white">
        {/* ── HERO SECTION ───────────────────────────── */}
        <section style={{ backgroundColor: NAVY }} className="relative py-28 px-4 text-white overflow-hidden">
          {/* Radial Glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c9922a]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span 
              className="inline-block text-[10px] font-black tracking-[0.35em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#c9922a]/30"
              style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.08)" }}
            >
              Keio Medical Internal Promotion Program
            </span>
            
            <h1 
              className="text-3xl md:text-5xl lg:text-[3.5rem] font-black mb-8 leading-tight tracking-wide"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              慶應系列校から<br className="sm:hidden" />
              <span style={{ color: GOLD }}>医学部内部推薦</span>を勝ち取る<br />
              完全特化型評定突破システム
            </h1>
            
            <div className="w-20 h-1 bg-[#c9922a] mx-auto mb-8"></div>
            
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-slate-300 font-medium mb-12">
              塾高（上位22名）、志木、女子、SFC。限られた最難関推薦枠争いを制する。<br className="hidden md:block" />
              授業プリントに完全同調する「現役慶應医学生指導」×「15分計画×脳科学復習」×「独自データベース」
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact?from=keio-naibu-hero"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
                style={{ backgroundColor: GOLD }}
              >
                医学部推薦合格戦略診断（80分）を申し込む
              </Link>
              <LineButton label="LINEで相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
            </div>
          </div>
        </section>

        {/* ── KEY PERFORMANCE STATS ───────────────────────────── */}
        <section className="bg-slate-50 border-b border-slate-200 py-12 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "全員", label: "現役慶應医学生講師" },
              { num: "完全同調", label: "学校プリント・過去の傾向解析" },
              { num: "リアルタイム", label: "定着率データベース保護者共有" },
              { num: "一気通貫", label: "学科＋面接・志望動機対策" }
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
                <p className="text-xl md:text-2xl font-black mb-1" style={{ color: GOLD, fontFamily: "var(--font-noto-serif)" }}>{stat.num}</p>
                <p className="text-xs text-slate-600 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERACTIVE SIMULATOR ───────────────────────────── */}
        <section className="py-16 px-4 bg-slate-100 border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <KeioNaibuSimulator />
          </div>
        </section>

        {/* ── AFFILIATES SECTION ───────────────────────────── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                School Target Board
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                慶應各系列校における医学部推薦の壁と突破戦略
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto">
                学校ごとに異なる推薦選考基準・カリキュラム進度に対応。現役慶應医学生だから提供できる最短突破ルート。
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {keioAffiliateSpecifics.map((spec, i) => (
                <div 
                  key={i} 
                  className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-extrabold text-lg text-slate-900" style={{ fontFamily: "var(--font-noto-serif)" }}>
                        {spec.school}
                      </h3>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-md text-amber-800 bg-amber-500/10">
                        {spec.slots}
                      </span>
                    </div>
                    <p className="text-xs font-black text-rose-600 mb-3">
                      ■ {spec.difficulty}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {spec.strategy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4 PILLARS OF MEDVANCE ADVANTAGE ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Medvance Core Systems
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                他の個別指導・家庭教師サービスと異なる「医学部内部進学」4つの柱
              </h2>
              <p className="text-sm text-slate-500">
                単なる学生のマッチングではなく、指導を高度にシステム化し、結果を必然にします
              </p>
            </div>

            <div className="space-y-8">
              {evaluationPillars.map((pillar, i) => (
                <div 
                  key={i} 
                  className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <span className="text-xs font-black tracking-wider uppercase" style={{ color: GOLD }}>
                    Pillar {i + 1}
                  </span>
                  <h3 className="font-extrabold text-lg text-slate-900 mt-1 mb-3" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                    {pillar.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-[#c9922a] mb-4"></div>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SUBJECT-SPECIFIC GUIDE ───────────────────────────── */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Subject Master Class
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                慶應医学部推薦に必要な「主要科目の完全攻略」
              </h2>
              <p className="text-sm text-slate-500">
                各系列校の独自シラバスを徹底分析した加点ポイント
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {curriculumDetails.map((curr, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="font-extrabold text-base mb-2 text-slate-900" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                      ■ {curr.subject}
                    </h3>
                    <p className="text-xs font-bold mb-3 text-slate-400">
                      対策テーマ：{curr.focus}
                    </p>
                    <p className="text-xs leading-relaxed text-slate-500">
                      {curr.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FLOW TO INTERNAL SUCCESS ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                Study Flow
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                合格に向けたステップと指導開始の流れ
              </h2>
            </div>

            <div className="relative border-l border-slate-300 pl-8 space-y-12">
              {steps.map((item, i) => (
                <div key={i} className="relative">
                  {/* Dot */}
                  <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white border-2 border-white shadow-sm" style={{ backgroundColor: NAVY }}>
                    {i + 1}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: GOLD }}>
                    {item.step}
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900 mb-2" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TUTOR PROFILES ───────────────────────────── */}
        <TutorProfiles />

        {/* ── HIGH QUALITY JAPANESE REALISTIC PHOTO (Tier 4) ── */}
        <section className="bg-white px-4 py-12">
          <div className="mx-auto max-w-3xl relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-[0_20px_50px_rgba(12,26,51,0.12)] border border-white/40 ring-1 ring-[#c9922a]/10 group">
            <div className="absolute inset-0 bg-amber-100/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500 z-10" />
            <img 
              src="/images/generated/japanese_keio_medical_campus_walkway.png" 
              alt="慶應義塾大学キャンパス前でスマートに勉学に励む慶應医学部生・附属校生" 
              className="w-full h-auto object-cover max-h-[420px] transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </section>

        {/* ── FAQ ACCORDION ───────────────────────────── */}
        <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
                FAQ
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                慶應医学部内部推薦に関するよくある質問
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xs transition-shadow duration-300"
                >
                  <summary
                    className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm select-none list-none text-slate-900 bg-white"
                  >
                    <span>Q. {faq.q}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 flex-shrink-0 ml-4 text-[#c9922a]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5 pt-1 text-xs md:text-sm leading-relaxed text-slate-500 bg-slate-50/50 border-t border-slate-100">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CALL TO ACTION ───────────────────────────── */}
        <section style={{ backgroundColor: NAVY }} className="py-24 px-4 text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0c1a33] to-[#0c1a33] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#c9922a] uppercase mb-4">
              Save Your Keio Medical Seat
            </span>
            <h2
              className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              医学部推薦枠の確定に向けて、<br className="hidden md:block" />
              今学期の評定ギャップを埋める戦略をご提案します
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-300 max-w-2xl mx-auto">
              塾高・志木・女子・SFCの現在の評定平均、得意・不得意科目から逆算して、次の試験で何点必要か、現役の慶應医学生アドバイザーがその場でお答えします。強引な勧誘等は一切ございません。
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact?from=keio-naibu-cta"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
                style={{ backgroundColor: GOLD }}
              >
                医学部推薦合格戦略診断（80分）を申し込む
              </Link>
              <LineButton label="LINEで相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
            </div>

            <p className="text-[10px] mt-4 text-slate-400">
              ※保護者様のみ、あるいは親子ご同席での参加も大歓迎です。オンラインまたは対面にて全国からご相談可能です。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
