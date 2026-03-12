import Link from "next/link";

export default function EnglishPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: "#142b57" }}
        >
          【英語】医学部英語の勉強法｜読解・英作文・文法を本質から理解する指導
        </h1>
        <p className="text-center mb-12 text-sm md:text-base" style={{ color: "#424f8f" }}>
          医学部英語に特化した、本質から理解するMedvanceの英語指導
        </p>

        <div className="space-y-8">
          <div className="p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
            <h2 className="text-xl font-bold mb-3" style={{ color: "#142b57" }}>
              医学部英語の特徴
            </h2>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#142b57" }}>
              医学部の英語入試は、一般的な大学入試と比べて長文読解の比重が高く、医療・生命科学系のテーマが頻出します。
              専門用語の理解はもちろん、高い読解速度と正確な文意把握が求められます。
              また、英作文問題では論理的な表現力と医学的知識の組み合わせが評価されます。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              Medvanceの英語指導の特徴
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "読解力の根本強化",
                  body: "単語・文法の暗記だけでなく、「なぜこの訳になるのか」という文構造の理解から始めます。長文を正確に速く読む力を、段階的に育てていきます。",
                },
                {
                  title: "医学系テーマへの対応",
                  body: "医療・生命科学・公衆衛生など、医学部頻出テーマの英文に慣れ、専門語彙を効率的に習得する方法を指導します。",
                },
                {
                  title: "英作文の論理構成",
                  body: "日本語で考えたことを英語に変換する力を養います。模範解答を丸暗記するのではなく、自分で論理を組み立てて書ける力をつけます。",
                },
                {
                  title: "文法の体系的理解",
                  body: "文法を「暗記するルール集」ではなく、「英語の仕組みを理解するための道具」として捉える指導を行います。なぜそうなるのかを理解することで、初見問題にも対応できる力が身につきます。",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="p-5 rounded-lg"
                  style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
                >
                  <p className="font-bold mb-2" style={{ color: "#142b57" }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#424f8f" }}>
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/subjects"
            className="px-6 py-3 rounded font-semibold text-center hover:opacity-80 transition-opacity"
            style={{ border: "2px solid #142b57", color: "#142b57" }}
          >
            ← 各教科一覧に戻る
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded font-semibold text-white text-center hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            無料相談・お問い合わせはこちら
          </Link>
        </div>
      </div>
    </div>
  );
}
