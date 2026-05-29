import Link from "next/link";
import Image from "next/image";
import TutorProfiles from "@/components/TutorProfiles";
import LineButton from "@/components/LineButton";
import { buildBreadcrumbSchema } from "@/lib/seo";

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const TEXT_BODY = "#3d3d3d";
const CREAM = "#f7f5f0";

export const metadata = {
  title: "慶應医学部受験・内部推薦特化の家庭教師センター｜Medvance",
  description:
    "【慶應医学部 家庭教師】現役の慶應義塾大学医学部生による完全1対1個別指導。外部一般受験対策から、系列校（塾高・志木・女子・SFC・普通部等）の医学部内部推薦推薦枠を勝ち取るための定期試験・評定対策まで網羅。独自データベース×AI管理。",
  keywords: [
    "慶應医学部 家庭教師",
    "慶應医学部 内部推薦",
    "塾高 医学部 推薦",
    "慶應志木 医学部 推薦",
    "慶應女子 医学部 推薦",
    "慶應医学部受験 家庭教師",
    "慶應 系列校 特化 家庭教師",
    "keiomedicaltutor",
    "慶應医学部家庭教師センター"
  ],
  alternates: {
    canonical: "/keio-medical-tutor",
  },
};

const breadcrumbSchema = buildBreadcrumbSchema([
  { name: "ホーム", url: "/" },
  { name: "慶應医学部受験・内部推薦特化 家庭教師センター", url: "/keio-medical-tutor" },
]);

const dualPathways = [
  {
    title: "A. 外部一般受験コース",
    subtitle: "全国から最難関の1枠を奪い取る",
    desc: "偏差値70超えがひしめき合う一般入試。合格に必要なのは、学科（英・数・理）での圧倒的得点力と、学科並みの比重を持つ面接・小論文の一気通貫対策です。",
    points: [
      "英語：圧倒的超長文を時間内に処理する「パラグラフリーディング」",
      "数学：答えだけでなく部分点を最大化する「減点されない記述論理」",
      "理科：難問を瞬時に見分け、標準問題を取りこぼさない「取捨選択力」",
      "二次：慶應の求める理想の医師像を体現する「志望理由・小論文設計」"
    ],
    bg: "rgba(255, 255, 255, 0.95)"
  },
  {
    title: "B. 系列校・内部進学対策コース",
    subtitle: "限られた医学部推薦枠（評定上位）を死守する",
    desc: "塾高（約22名/740名）、志木（約5名）、女子（約5名）、SFC（約5名）など、系列校から医学部への推薦枠は極めて少数。学内GPA（評定平均）の「1点の差」が命運を分けます。",
    points: [
      "定期試験対策：各系列校のシラバス・出題傾向に完全同調した指導",
      "過去問データベース：各学校で実際に出題された過去問題の演習と分析",
      "レポート提出対策：女子高やSFC等で合否に直結する課題・論文指導",
      "志望理由書対策：学内推薦会議で高評価を得るための自己推薦文作成"
    ],
    bg: "rgba(255, 255, 255, 0.95)"
  }
];

const competitorCounterPoints = [
  {
    title: "① 単なる「マッチング」ではなく、全員が共通の合格メソッドを共有",
    body: "一般的な仲介サービスや家庭教師センターでは、講師をアサインした後は学生講師の「個人の経験や我流の指導」に完全にブラックボックス化されます。Medvanceでは、代表（現役慶應医学部生で医学部受験「全勝合格者」）が監修した、どのレベルからでも慶應医学部に合格するための体系化された再現性ある指導メソッドを全講師が共有・実践しています。"
  },
  {
    title: "② 授業外の23時間を支配する「15分単位の計画表」と「脳科学復習モデル」",
    body: "週に数時間だけ宿題を出して終わりにする旧来の家庭教師とは一線を画します。志望校や学内順位目標から逆算したカリキュラムを「15分単位のタスク」へ細分化。さらに忘却曲線を制御する脳科学アプローチ（アクティブリコール・分散学習）に基づき、脳科学的に最適なタイミングでの復習タスクを計画表の中に自動で組み込み、自学自習の効率を最大化します。"
  },
  {
    title: "③ 「独自データベース × AI」による進捗の可視化と保護者共有",
    body: "生徒一人ひとりに構築される専用の学習管理データベース上で、単語や必須公式の定着度、過去問の得点推移、宿題の達成率を一元管理。テスト結果から「長期記憶化された知識」と「短期記憶に留まる知識」を可視化し、保護者様もリアルタイムでPCやスマホから進捗を確認可能。講師報告の曖昧さを完全に排除します。"
  }
];

const affiliateSchools = [
  { name: "慶應義塾高校（塾高）", target: "約740名中「上位22名」の医学部推薦枠争いを制する学内試験対策（数学・物理・化学の底上げ）" },
  { name: "慶應義塾志木高校", target: "少数枠（約5名）を勝ち取るための高い評定平均（GPA）維持と、難度の高い学内レポート・自由記述の対策" },
  { name: "慶應義塾女子高校", target: "医学部進学希望者（約5名枠）に対するハイレベルな学内選考テスト対策、および小論文の論理設計指導" },
  { name: "慶應湘南藤沢（SFC）", target: "評定平均の最大化はもちろん、SFC特有のプレゼン課題・卒業研究・英語エッセイ等の徹底サポート" },
  { name: "普通部・中等部・湘南中", target: "高校進学後の医学部ルート入りを見据えた、英語・数学の学年トップクラス先取り学習指導" }
];

const tableComparison = [
  {
    metric: "指導・計画システム",
    medvance: "15分単位の完全計画作成 ＋ 脳科学復習自動配分",
    competitor: "計画書はなく、授業時に簡単な宿題指示のみ",
    generic: "講師個人の裁量に依存（指導計画の均一性なし）"
  },
  {
    metric: "学習データの可視化",
    medvance: "独自データベース×AIでの進捗・定着率色分け管理（リアルタイム保護者共有）",
    competitor: "指導後の簡単なメール報告のみ。データの蓄積はなし",
    generic: "指導報告書が月に一度届くのみで進捗はブラックボックス"
  },
  {
    metric: "教材・公式対策",
    medvance: "英語・数学・理科の『医学部必須公式・オリジナル解説』をデータベース配信",
    competitor: "市販参考書のみ。自塾オリジナルデータベースはなし",
    generic: "手持ちの参考書の質問対応のみ"
  },
  {
    metric: "面接・小論文・願書",
    medvance: "学科指導と同等に重視し、担当慶應医学生講師が初期から一気通貫サポート",
    competitor: "直前期の簡素な練習のみで、詳細な文章添削などは別料金または対応外",
    generic: "指導ノウハウそのものがなく対応不可"
  }
];

const faqs = [
  {
    q: "一般的な慶應医学部家庭教師サービスと比べたMedvanceの最大の強みは何ですか？",
    a: "「指導をシステム化し、ブラックボックスを完全に排除している点」です。一般的な家庭教師マッチングでは、学生講師の個人的な裁量で教え方が左右されますが、Medvanceは全講師が「15分単位のタスク設計」「忘却曲線を制御する脳科学復習アプローチ」を徹底し、さらに「独自データベース×AI」によって日々の宿題定着度や模試結果を可視化します。また、保護者様もリアルタイムに進捗データを確認できるため、圧倒的な安心感と定着率を保証しています。"
  },
  {
    q: "系列校の定期テスト過去問や、各授業の対策ノウハウはありますか？",
    a: "はい、豊富に蓄積されています。塾高、志木、女子、SFCなど、各系列校のカリキュラムや定期テストの傾向、出題されやすい教材の分析データベースを完備しています。慶應の内部推薦で医学部を勝ち取った講師陣のリアルな実体験から、「どの科目のどのテストで何点取れば医学部推薦ラインに届くか」を細かく分析して逆算指導します。"
  },
  {
    q: "家庭教師として自宅への訪問指導と、オンライン指導はどちらがおすすめですか？",
    a: "学習効率の観点からは「オンライン指導」または「ハイブリッド指導」を推奨しております。オンライン指導では、講師の移動時間が不要なため、急な質問へのLINE即時対応や、画面共有を通じた論理の可視化がスムーズに行えます。また、全国どこからでも慶應医学部生講師をアサイン可能です。一方、関東圏（東京・神奈川・千葉・埼玉）ではご自宅に訪問しての対面指導もご選択いただけますので、ご要望に応じて最適な形式をご提案いたします。"
  },
  {
    q: "指導科目はどのように決めますか？",
    a: "現在の得意・不得意科目、および目標点（一般受験の合格最低点、または内部推薦に必要な評定評点目標）を元に個別に設計します。英語・数学をベースに、理科（物理・化学・生物）や二次試験対策まで、必要な科目を柔軟に組み合わせることが可能です。途中で指導科目を変更・追加することも可能です。"
  }
];

export default function KeioMedicalTutorPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── 1. PREMIUM HERO SECTION ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="relative py-28 px-4 text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#c9922a]/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <span 
            className="inline-block text-[10px] font-black tracking-[0.35em] uppercase mb-6 px-4 py-1.5 rounded-full border border-[#c9922a]/30"
            style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.08)" }}
          >
            Medvance Keio Medical Special Division
          </span>
          
          <h1 
            className="text-3xl md:text-5xl lg:text-[3.25rem] font-black mb-8 leading-tight tracking-wide"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            慶應医学部<br className="sm:hidden" />
            <span style={{ color: GOLD }}>一般受験 ＆ 内部推薦</span>特化<br />
            家庭教師指導センター
          </h1>
          
          <div className="w-20 h-1 bg-[#c9922a] mx-auto mb-8"></div>
          
          <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-slate-300 font-medium mb-12">
            仲介するだけの一般的な家庭教師サービスに打ち勝つ、圧倒的な指導品質。<br className="hidden md:block" />
            「15分単位の計画表」と「独自データベース×AI」を用い、確実な評定アップと合格力を養成します。
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact?from=competitor-hero"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
              style={{ backgroundColor: GOLD }}
            >
              無料合格戦略診断（80分）を申し込む
            </Link>
            <LineButton label="LINEで気軽に相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* ── 2. DUAL PATHWAYS (外部一般受験 vs 系列校内部推薦) ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Dual Target Strategy
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              一般受験・内部推薦。それぞれの勝路を完全網羅
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Medvanceは、外部から一般入試で挑む受験生と、系列校内で医学部進学枠（評定上位）を狙う生徒の両方に専用カリキュラムを提供します。
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {dualPathways.map((path, idx) => (
              <div 
                key={idx} 
                className="p-8 md:p-10 rounded-3xl border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                style={{ backgroundColor: path.bg }}
              >
                <div>
                  <span className="text-xs font-bold px-3 py-1 rounded-md text-white" style={{ backgroundColor: GOLD }}>
                    {path.title}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 mt-4 mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
                    {path.subtitle}
                  </h3>
                  <p className="text-xs md:text-sm leading-relaxed text-slate-500 mb-6">
                    {path.desc}
                  </p>
                  <div className="h-px bg-slate-200 w-full mb-6"></div>
                  <ul className="space-y-3 mb-8">
                    {path.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-semibold">
                        <span className="text-[#c9922a] font-bold">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact?from=competitor-pathway"
                  className="w-full inline-flex items-center justify-center py-3.5 rounded-xl font-bold text-xs text-white hover:opacity-95 transition-opacity"
                  style={{ backgroundColor: NAVY }}
                >
                  このコースの詳細を聞く →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. AFFILIATE SCHOOLS LIST ───────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Keio Affiliates
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              慶應系列各校に特化した「評定平均・定期試験」突破戦略
            </h2>
            <p className="text-sm text-slate-500">
              各校のシラバスと出題傾向を熟知した現役慶應医学生（内部進学突破者）が指導します
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {affiliateSchools.map((school, i) => (
              <div 
                key={i} 
                className="p-6 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-extrabold text-base mb-3 text-slate-900" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                  {school.name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {school.target}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. WHY MEDVANCE OUTPERFORMS MATCHING SERVICES ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Systematic Advantage
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              一般的な「慶應生家庭教師仲介サービス」とMedvanceの決定的な違い
            </h2>
            <p className="text-sm text-slate-500">
              指導の「再現性」と「管理体制」で、他サービスを圧倒します
            </p>
          </div>

          <div className="space-y-8">
            {competitorCounterPoints.map((point, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-sm transition-shadow duration-300"
              >
                <h3 className="font-extrabold text-base md:text-lg mb-3 text-slate-900" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
                  {point.title}
                </h3>
                <div className="w-12 h-0.5 bg-[#c9922a] mb-4"></div>
                <p className="text-xs md:text-sm leading-relaxed text-slate-500">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. COMPARISON TABLE ───────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              Comparison Board
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              慶應医学部対策・家庭教師サービス比較表
            </h2>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-[10px] font-bold tracking-widest uppercase text-white" style={{ backgroundColor: NAVY }}>
                  <th className="p-5 w-[15%]">比較指標</th>
                  <th className="p-5 w-[35%] bg-amber-500/5 text-[#c9922a] border-l border-r border-[#c9922a]/30">Medvance（慶應医学部特化指導）</th>
                  <th className="p-5 w-[25%] opacity-80">大手慶應家庭教師センター</th>
                  <th className="p-5 w-[25%] opacity-80">一般的な家庭教師センター</th>
                </tr>
              </thead>
              <tbody className="text-xs divide-y divide-slate-200">
                {tableComparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 font-bold text-slate-800">{item.metric}</td>
                    <td className="p-5 font-semibold text-slate-800 bg-amber-500/5 border-l border-r border-[#c9922a]/10">
                      <div className="flex items-start gap-2">
                        <span className="text-[#c9922a] font-bold">✓</span>
                        <span>{item.medvance}</span>
                      </div>
                    </td>
                    <td className="p-5 text-slate-500">{item.competitor}</td>
                    <td className="p-5 text-slate-500">{item.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden space-y-6">
            {tableComparison.map((item, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                <p className="font-extrabold text-sm mb-3 text-slate-900 border-b pb-2">{item.metric}</p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border border-[#c9922a]/20">
                    <p className="text-[10px] font-bold text-[#c9922a] mb-1">Medvance</p>
                    <p className="text-xs text-slate-800 leading-relaxed font-medium">{item.medvance}</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">大手慶應家庭教師</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.competitor}</p>
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-bold text-slate-400 mb-1">一般的な家庭教師センター</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.generic}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TUTOR PROFILES ───────────────────────────── */}
      <TutorProfiles />

      {/* ── 7. FAQ ACCORDION ───────────────────────────── */}
      <section className="py-24 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase mb-3 block" style={{ color: GOLD }}>
              FAQ
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
              よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 hover:shadow-xs transition-shadow duration-300"
              >
                <summary
                  className="flex items-center justify-between px-6 py-5 cursor-pointer font-bold text-sm select-none list-none text-slate-900"
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

      {/* ── 8. FINAL CALL TO ACTION ───────────────────────────── */}
      <section style={{ backgroundColor: NAVY }} className="py-24 px-4 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-[#0c1a33] to-[#0c1a33] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold tracking-[0.25em] text-[#c9922a] uppercase mb-4">
            Start Keio Medical Journey
          </span>
          <h2
            className="text-2xl md:text-4xl font-extrabold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            あなただけの「慶應医学部合格ロードマップ」を<br className="hidden md:block" />
            無料体験・合格戦略診断で作ります
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-10 text-slate-300 max-w-2xl mx-auto">
            現状の偏差値、系列校内の順位、定期テストの評定ギャップから、どの順序で勉強すべきか、慶應医学部に合格した現役アドバイザーがその場でお教えします。強引な勧誘等は一切ありません。
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/contact?from=competitor-cta"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wide text-white transition-opacity hover:opacity-90 w-full sm:w-auto shadow-md"
              style={{ backgroundColor: GOLD }}
            >
              無料合格戦略診断（80分）を申し込む
            </Link>
            <LineButton label="LINEで気軽に相談する" size="lg" className="!rounded-xl !py-4 !px-8 w-full sm:w-auto" />
          </div>

          <p className="text-[10px] mt-4 text-slate-400">
            ※保護者様のみ、あるいは親子ご同席での参加も大歓迎です。オンラインにて全国からご相談可能です。
          </p>
        </div>
      </section>
    </div>
  );
}
