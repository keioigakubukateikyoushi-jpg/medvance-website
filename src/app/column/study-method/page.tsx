import Link from "next/link";

export const metadata = {
  title: "医学部合格のための勉強法｜現役慶應医学部生が解説 | Medvance",
  description:
    "現役慶應医学部生が、医学部受験の正しい勉強法を科目別に解説。英語・数学・物理・化学・生物の効率的な学習法とよくある失敗パターン。",
};

const subjectMethods = [
  {
    name: "英語",
    body: "まず文法の本質的理解から始め、構文解析ができるようにします。単語暗記より長文の中で意味を類推する力を養うことが先決です。毎日少量でも継続することが最も効果的です。",
  },
  {
    name: "数学",
    body: "公式の丸暗記は禁物。なぜその公式が成り立つかを理解してから使う習慣をつけます。解けない問題は答えを見る前に最低20分は考える時間を確保し、思考力を育てます。",
  },
  {
    name: "物理",
    body: "「現象を理解する」ことが最優先。公式は現象理解の結果として導出できるようになることを目標にします。問題演習より教科書の丁寧な精読を優先すべき科目です。",
  },
  {
    name: "化学",
    body: "理論・無機・有機をバランスよく進めます。理論化学の計算は数学と同様に論理的思考が必要。有機化学は反応メカニズムの理解を優先し、丸暗記に頼らない学習を徹底します。",
  },
  {
    name: "生物",
    body: "暗記科目と思われがちですが、近年は考察問題の割合が増えています。用語の暗記より「なぜそのメカニズムが起きるか」を理解することが高得点への近道です。",
  },
];

const mistakes = [
  {
    title: "参考書を何冊もやる",
    body: "1冊を完璧に仕上げることの方が、5冊を中途半端にやるより何倍も効果があります。「完璧にやり切った1冊」が本番での自信になります。参考書はまず1冊に絞りましょう。",
  },
  {
    title: "暗記中心の学習",
    body: "医学部入試は理解力を問う問題が多く、暗記だけでは対応できません。「覚える」より「理解する」を意識した学習に切り替えることが成績向上の第一歩です。",
  },
  {
    title: "直前期まで過去問をやらない",
    body: "過去問は仕上げに使うものではなく、学習の方向性を確認するために早期から活用すべきものです。志望校の過去問は受験の半年前には着手し、傾向を把握しておきましょう。",
  },
];

export default function StudyMethodPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            コラム
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部合格のための正しい勉強法
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            現役慶應医学部生が解説
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-8 rounded-2xl bg-white mb-8" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              医学部受験で一番よく聞く相談が「何を勉強すればいいかわからない」というものです。参考書は山ほどある。YouTube動画も無限にある。でも、何が正解かわからない。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              実は、勉強法に迷っている時間が一番もったいないです。医学部受験で本当に必要なのは「完璧な勉強法」ではなく、「自分に合った方向性を決めて、それを続けること」です。
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              このページでは、科目別の具体的なアプローチと、実際によく見る失敗パターンをまとめました。参考にしてみてください。
            </p>
          </div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            まず知っておくべきこと：勉強量より勉強の質
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部受験で最も多い失敗パターンは「一生懸命勉強したのに成績が伸びない」というケースです。原因の多くは「量をこなすことに満足している」こと。1日10時間勉強していても、その方法が間違っていれば成績は上がりません。重要なのは「何を、どのように理解するか」という質の問題です。Medvanceの指導では、量より質を最優先に、一つひとつの概念を確実に理解した上で次のステップに進む学習法を徹底しています。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            科目別の勉強法
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectMethods.map((item, i) => (
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
            よくある失敗パターン
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mistakes.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>NG {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            1日8時間の使い方例
          </h2>
          <p className="text-sm mb-8" style={{ color: "#6b7280" }}>
            「8時間勉強したけど何もできた気がしない」という声はよく聞きます。時間を「科目ブロック」で区切ると、集中しやすく進捗も確認しやすいです。あくまで一例ですが、参考にしてください。
          </p>
          <div className="space-y-3">
            {[
              { time: "7:00〜9:00", label: "数学（2時間）", note: "脳が冴えている朝は思考力が必要な数学に。解けない問題は最低15分考えてから解答を見る。" },
              { time: "9:00〜11:00", label: "英語（2時間）", note: "長文読解1題＋文法復習。長文は時間を計って読むことで本番感覚を維持する。" },
              { time: "11:00〜12:00", label: "物理 or 化学（1時間）", note: "午前中の最後に理科を少し入れておく。概念の確認や問題演習。" },
              { time: "13:00〜15:00", label: "理科（2時間）", note: "昼食後は暗記より演習向き。物理なら問題を解いて解法を定着させる時間に。" },
              { time: "15:00〜17:00", label: "苦手科目の集中補強（2時間）", note: "その日の模試結果や前日の振り返りから、最も弱いポイントに絞って取り組む。" },
              { time: "夜（1時間）", label: "復習・翌日の準備", note: "その日学んだことを簡単にノートに書き出す。「できた」「まだ不安」を整理する時間。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 text-xs font-bold pt-0.5" style={{ color: "#c9922a", minWidth: "110px" }}>{item.time}</div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: "#0c1a33" }}>{item.label}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b7280" }}>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格するための思考法
          </h2>
          <div className="p-8 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
              医学部合格者に共通するのは「才能」ではなく「正しい戦略と継続力」です。自分の現在地を正確に把握し、合格までのギャップを埋める最短ルートを設計する。そして、毎日の学習で「理解できたか」を確認しながら積み上げていく。この思考法さえ身につければ、スタートの偏差値は関係ありません。Medvanceでは、合格に向けた思考法から一緒に構築します。
            </p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto rounded-2xl p-8 text-center" style={{ backgroundColor: "#0c1a33" }}>
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            あなたに合った勉強法を、一緒に設計しませんか？
          </h2>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
            現状の学習法を診断し、改善策をお伝えします。
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
