import Link from "next/link";

export const metadata = {
  title: "再受験生の医学部合格対策｜社会人・大学生からの医学部挑戦 | Medvance",
  description:
    "社会人・大学生から医学部を目指す再受験生を完全サポート。現役慶應医学部生が1対1で指導。忙しいあなたに合わせたオーダーメイド学習計画。全国オンライン対応・無料相談実施中。",
};

const challenges = [
  {
    title: "「仕事・学業との両立が難しい」",
    body: "限られた時間を最大限に活かす、再受験生専用の効率的な学習計画を設計します。週に使える時間をヒアリングし、無理のない継続可能なスケジュールを一緒に作ります。",
  },
  {
    title: "「ブランクがあって基礎から不安」",
    body: "ブランクの長さは関係ありません。現在の学力を正確に診断し、最適なスタート地点から指導します。基礎から丁寧に積み上げるので、何年ぶりの受験勉強でも安心です。",
  },
  {
    title: "「面接で再受験を聞かれるのが不安」",
    body: "再受験の動機を強みに変える面接対策を行います。社会人・他学部経験などの経歴を活かし、説得力のある志望理由を一緒に作り上げます。",
  },
];

const supports = [
  {
    title: "柔軟な指導スケジュール",
    body: "社会人・大学生の時間に合わせた指導時間の設定が可能です。夜間・週末対応も歓迎。ご自身のライフスタイルに合わせた無理のない受講スタイルを設計します。",
  },
  {
    title: "再受験専門の面接・小論文対策",
    body: "再受験生が必ず問われる「なぜ今医学部なのか」という問いに対する、説得力ある回答を一緒に作ります。実際の面接官視点でのフィードバックを行います。",
  },
  {
    title: "全科目のゼロからの再構築",
    body: "社会人などで長期ブランクがある方も、基礎から丁寧に立て直します。理解の抜けを確認しながら積み上げるので、確実に学力が定着します。",
  },
];

const faqs = [
  {
    q: "何歳まで受け入れてもらえますか？",
    a: "年齢制限はありません。30代・40代の再受験生の指導実績もあります。医学部合格への意欲がある方であればどなたでも歓迎します。まずはお気軽にご相談ください。",
  },
  {
    q: "社会人ですが、いつ勉強すればいいですか？",
    a: "まずは無料相談でライフスタイルをヒアリングします。仕事の忙しさに合わせた現実的な学習スケジュールを一緒に設計します。週数時間からでもスタートできる方法をご提案します。",
  },
  {
    q: "医学部に進学できるか不安です",
    a: "不安は当然です。まず無料相談で現状を確認し、合格可能性と必要な準備をお伝えします。一人で悩まずご相談ください。客観的な視点でサポートします。",
  },
  {
    q: "面接で年齢を聞かれることへの対策はありますか？",
    a: "はい、再受験生特有の面接対策を行っています。年齢・経歴を強みに変える回答作りを丁寧にサポートします。模擬面接を繰り返し、本番に備えます。",
  },
];

export default function SaijukenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            再受験生の方へ
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            何歳からでも、医学部合格はできる。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            社会人・大学生からの挑戦を、現役慶應医学部生が完全サポートします
          </p>
        </div>
      </div>

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            再受験生が抱える悩み
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {challenges.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>{item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            Medvanceの再受験サポート
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {supports.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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

      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            合格者の声
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              「大学卒業後に一般企業に就職しましたが、医師になりたいという気持ちが消えず、再受験を決意しました。働きながらの勉強は体力・時間的に非常にきつかったのですが、Medvanceの先生が毎週のスケジュールを一緒に組んでくれて、限られた時間でも着実に力が伸びました。面接では再受験の経緯を正直に話す準備ができており、慈恵医大の面接官の方にも好印象を持ってもらえたと感じています。」
            </p>
            <p className="text-sm font-bold" style={{ color: "#0c1a33" }}>K.M.さん｜再受験・東京慈恵会医科大学合格</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
            よくあるご質問
          </h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
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
            再受験の悩みをお気軽にお話しください。一緒に合格への道を考えます。
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
