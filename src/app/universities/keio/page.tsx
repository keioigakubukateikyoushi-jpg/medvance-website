import Link from "next/link";

export const metadata = {
  title: "慶應義塾大学医学部対策｜現役慶應医学部生が入試を徹底解説 | Medvance",
  description:
    "慶應義塾大学医学部の入試対策を現役慶應医学部生が指導。英語・数学・物理・化学・小論文・面接の傾向と対策。合格者の視点から慶應医学部入試を徹底解説。",
};

const subjects = [
  {
    name: "英語",
    body: "長文読解中心で医療・科学系テーマが頻出。スピードと正確性が求められます。英作文では論理的な記述力が問われるため、文章構成力を丁寧に鍛えます。",
  },
  {
    name: "数学",
    body: "記述式で思考力・論証力が問われます。単なる計算力ではなく、解法の根拠を説明できる力が必要。基礎概念の深い理解から積み上げる指導を行います。",
  },
  {
    name: "物理・化学",
    body: "難易度が高く、本質的な理解がないと解けない問題が多い。公式の丸暗記ではなく、なぜその公式が成り立つかを理解する指導を行います。",
  },
  {
    name: "小論文",
    body: "医療倫理・生命科学・社会問題に関するテーマが出題されます。単なる意見の羅列ではなく、論理的な構成と深い考察が評価されます。",
  },
  {
    name: "面接",
    body: "グループ面接・個人面接の両形式があります。志望動機・医師としての倫理観・社会問題への意見など、思考の深さを問う質問が多い傾向です。",
  },
];

const reasons = [
  {
    title: "講師が現役慶應医学部生",
    body: "実際に慶應医学部の入試を突破した現役生が指導します。試験の雰囲気・傾向・当日の戦略まで、体験者だからこそ語れるリアルな情報を提供します。",
  },
  {
    title: "慶應医学部の過去問を完全分析",
    body: "過去10年以上の過去問を分析し、頻出テーマ・問われやすい思考パターンを体系的に把握。効率的な対策を行います。",
  },
  {
    title: "合格者の視点からの指導",
    body: "慶應医学部を実際に突破した講師だからこそ、本番で何が求められるかを正確に理解しています。スタート地点に関わらず、諦めずにご相談ください。",
  },
];

const faqs = [
  {
    q: "慶應医学部はどのくらい難しいですか？",
    a: "私立医学部の中でも最難関に位置する大学です。しかし、正しい対策と十分な準備があれば手が届かない大学ではありません。まずは現状の学力をヒアリングし、合格までの道筋をお伝えします。",
  },
  {
    q: "慶應医学部対策はいつから始めればいいですか？",
    a: "早ければ早いほどいいですが、高3からでも間に合ったケースがあります。まず現状を把握し、必要な準備期間を逆算します。",
  },
  {
    q: "慶應医学部専願で対策できますか？",
    a: "はい。慶應医学部に特化した対策プランを組むことが可能です。他の医学部と並行して受験する場合のプランもご提案できます。",
  },
];

export default function KeioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            慶應義塾大学医学部
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生だからこそ語れる、リアルな入試対策
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應義塾大学医学部の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              慶應義塾大学医学部の一般選抜は、1次試験（英語・数学・物理または化学）と2次試験（小論文・面接）の二段階選抜です。1次試験では高い学力が問われ、特に英語・数学は思考力・記述力重視の出題スタイルが特徴的です。2次試験の面接では医師としての適性・倫理観・社会問題への視点が問われ、単なる学力以上の準備が必要になります。私立医学部の中でも最難関と位置付けられていますが、Medvanceでは現役慶應医学部生の講師が自身の合格体験をもとに、戦略的な対策を提供しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別対策のポイント
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-base mb-3" style={{ color: "#c9922a" }}>{item.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            なぜMedvanceが慶應医学部合格に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mb-4" style={{ backgroundColor: "#c9922a" }}>
                  {i + 1}
                </div>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應義塾大学医学部の入試データ
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部の入試は年度によって変動しますが、ここでは概況をまとめます。最新の情報は大学公式サイトで確認してください。
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                label: "募集人員",
                value: "一般選抜：約66名",
                note: "推薦・帰国生等を含む全体の定員は110名程度。一般選抜の競争率は年度によって6〜8倍前後で推移します。",
              },
              {
                label: "1次試験科目",
                value: "英語・数学・物理または化学",
                note: "英語と数学は記述式・論述形式が中心。単なる知識の再現ではなく、思考過程を言語化する力が求められます。",
              },
              {
                label: "2次試験",
                value: "小論文・面接（グループ・個人）",
                note: "2次試験は1次通過者のみ受験可能。面接は複数の教員が担当し、医師としての資質・倫理観・思考力を総合的に評価します。",
              },
              {
                label: "出願期間・試験日",
                value: "例年1月中旬出願、2月上旬1次試験",
                note: "他の私立医学部と日程が重なることが多いため、出願スケジュールの管理が重要です。複数校受験の場合は日程の確認を早めに行いましょう。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-xs font-bold tracking-wide uppercase mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>{item.value}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            慶應医学部を目指す上で多くの受験生が陥る失敗
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            慶應医学部は「難しいから対策も難しいはず」と思いがちですが、実際に受験した立場から見ると、合格した人と落ちた人の間には、意外と共通した失敗パターンがあります。
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "英語の速度不足で時間切れ",
                body: "慶應医学部の英語は文量が多く、読解スピードが合否を分けます。「読めるけど時間が足りない」という状態のまま本番を迎える受験生が毎年います。日頃から時間を計って長文を読む訓練が不可欠です。",
              },
              {
                title: "数学の「答えは合っているが減点」",
                body: "記述式の数学では、答えが正しくても論証が不十分だと減点されます。「式だけ書いて答えを出す」スタイルでは通用しません。解法の根拠を言語化する練習を、早い段階から意識的に行う必要があります。",
              },
              {
                title: "面接を「最後に少しだけやればいい」と思う",
                body: "慶應の面接は準備なしでは対応できません。医師としての倫理観・社会問題への見解・志望理由の深掘りなど、即席で答えられる質問ではありません。3〜4か月前から取り組まないと間に合わないケースがあります。",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格者の声
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「高2の終わりに偏差値50程度の状態から慶應医学部を目指し始めました。周囲からは無謀と言われましたが、Medvanceの先生が最初から戦略を立ててくれたので、ブレずに勉強できました。特に数学の論証力と英語の読解速度が大きく伸び、本番でも自信をもって臨めました。面接の準備も何度も模擬練習をしていただき、本番は緊張しませんでした。」
            </p>
            <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>A.T.さん｜慶應義塾大学医学部合格</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>Q. {item.q}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>A. {item.a}</p>
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
            慶應医学部合格への道筋を、一緒に考えます。
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
