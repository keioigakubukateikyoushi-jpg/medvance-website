import Link from "next/link";

export const metadata = {
  title: "医学部受験ロードマップ｜いつから・何をすればいいか完全解説 | Medvance",
  description:
    "医学部受験のスケジュールを現役慶應医学部生が解説。高1・高2・高3・浪人・再受験それぞれのロードマップ。「いつから始めれば間に合う？」という疑問にお答えします。",
};

const roadmap = [
  {
    grade: "高校1年生",
    icon: "高1",
    focus: "基礎力の構築",
    body: "英語と数学の基礎を徹底的に固める時期。この時期にしっかりした土台を作ることが、高3・浪人期の伸びに直結します。医学部を目指すなら、英語は文法・語彙から丁寧に、数学は「なぜそうなるか」を理解しながら進めましょう。定期テストで手を抜かず、学校の授業を最大限に活用することが大切です。",
    actions: ["英語の文法・語彙の体系的習得", "数学の概念理解を最優先に", "定期テストで確実に点数を取る習慣"],
  },
  {
    grade: "高校2年生",
    icon: "高2",
    focus: "主要科目の完成",
    body: "英語・数学・理科の本格的な受験勉強を開始する時期。高2の終わりまでに英数の基礎を完成させることが理想です。理科（物理・化学または生物）もこの時期から本格的に取り組み始めます。高3になってから理科ゼロスタートでは間に合わないことが多いため、高2のうちに基礎を固めておきましょう。",
    actions: ["英語・数学の応用問題演習開始", "物理・化学（または生物）の基礎固め", "志望校の過去問に初めて目を通す"],
  },
  {
    grade: "高校3年生",
    icon: "高3",
    focus: "仕上げと過去問演習",
    body: "いよいよ本番の年。夏までに全科目の基礎を完成させ、秋以降は過去問演習と弱点補強を繰り返します。共通テスト対策（国公立志望の場合）も夏以降に本格化。面接・小論文の準備も10〜11月には始めましょう。直前期は新しいことに手を出さず、これまでの学習を確認・定着させることに集中します。",
    actions: ["夏までに全科目の基礎完成", "秋から過去問演習を本格化", "10〜11月に面接・小論文対策開始"],
  },
  {
    grade: "浪人・再受験",
    icon: "浪人",
    focus: "戦略的な1年間の設計",
    body: "現役時の反省を踏まえた、より戦略的な学習が必要です。「同じ勉強を繰り返さない」ことが最重要。なぜ去年不合格だったかを分析し、弱点を根本から解消する計画を立てます。予備校に通う場合でも、講師との1対1の補完的な指導を組み合わせることで、より効果的な学習が可能です。",
    actions: ["現役時の失敗原因の徹底分析", "弱点を根本から解消する計画設計", "5月頃から志望校の過去問に着手"],
  },
];

const ngActions = [
  {
    title: "「まだ早い」と後回しにする",
    body: "「高3になってから本気を出す」という考えは非常に危険です。医学部受験は準備期間が長いほど有利。早期スタートが合格確率を大きく高めます。",
  },
  {
    title: "計画なしに勉強を始める",
    body: "やみくもに勉強時間を積み重ねても成績は伸びません。現状の学力を把握し、合格までの道筋を逆算した計画を立ててから学習を始めることが重要です。",
  },
  {
    title: "模試の結果に一喜一憂する",
    body: "模試は現状把握のツールであり、合否の判定ではありません。判定が悪くても、それを次の学習改善のヒントとして使えれば十分。感情的になる必要はありません。",
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験ロードマップ：いつから・何をすべきか
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が、合格への道筋を解説します
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            学年別ロードマップ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {roadmap.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.grade}</p>
                    <p className="text-xs" style={{ color: "#c9922a" }}>{item.focus}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6b7280" }}>{item.body}</p>
                <ul className="space-y-1">
                  {item.actions.map((action, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs" style={{ color: "#3d3d3d" }}>
                      <span style={{ color: "#c9922a" }}>→</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            「いつから始めれば間に合う？」への回答
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              結論から言えば、「今すぐ始めること」が最善です。高1でも高3でも、あるいは浪人・再受験生であっても、スタートは早ければ早いほど選択肢が広がります。ただし、スタート時期によって必要な戦略は変わります。高3の秋から始めた場合でも、適切な戦略と集中した取り組みで合格を勝ち取ったケースがあります。まず現状を把握し、合格までに必要なことを逆算することが重要です。「間に合うかどうか」はMedvanceの無料相談でお答えします。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            やってはいけないNG行動
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ngActions.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            あなたの状況に合わせたロードマップを、一緒に作ります。
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 text-white font-bold text-base rounded-lg shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#c9922a" }}
          >
            無料相談・お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}
