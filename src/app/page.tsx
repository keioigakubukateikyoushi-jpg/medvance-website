import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-2" style={{ color: "#142b57" }}>
              Medvance
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mt-2 mb-3" style={{ color: "#142b57" }}>
              メドバンス
            </h2>
            <h2 className="text-2xl md:text-3xl italic font-medium mb-6" style={{ color: "#424f8f" }}>
              １歩先の医学部受験を
            </h2>
            <p className="text-base md:text-lg mb-6 leading-relaxed" style={{ color: "#142b57" }}>
              偏差値40から慶應医学部合格！現役慶應医学部生による医学部受験専門塾Medvance｜家庭教師・オンライン対応・再受験生OK
            </p>
            <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "#142b57" }}>
              Medvanceは現役慶應医学部生による
            </h2>
            <h3 className="text-lg md:text-xl font-medium mb-6" style={{ color: "#424f8f" }}>
              最短で合格するための医学部受験塾です
            </h3>
            <p className="mb-4 text-sm md:text-base" style={{ color: "#142b57" }}>
              ↓ご依頼、無料相談、お問い合わせはこちらのリンクからお願いします↓
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#142b57" }}
            >
              無料相談、お問い合わせはこちらから
            </Link>
          </div>
          <div className="flex-1 w-full max-w-sm md:max-w-none">
            <Image
              src="/images/hero.png"
              alt="Medvance 医学部受験専門塾"
              width={500}
              height={600}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: "#142b57" }}>
            Medvanceとは？慶應医学部生による家庭教師型受験塾です
          </h2>
          <div className="mb-10">
            <Image
              src="/images/about.png"
              alt="Medvanceについて"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <ul className="space-y-6">
            {[
              {
                icon: "🎓",
                title: "【完全1対1指導】",
                body: "すべての授業が個別の家庭教師スタイル。生徒の理解度や目標に合わせて、学習内容・進度をフルカスタマイズします。",
              },
              {
                icon: "🧑‍🏫",
                title: "【講師は全員・現役慶應医学部生】",
                body: "指導にあたるのは、厳選された慶應医学部の合格者のみ。東大模試上位者・多浪経験者・地方公立出身者など、多様なバックグラウンドを持つ講師陣の中から、生徒に最も合った人物をマッチングし、派遣します。",
              },
              {
                icon: "📚",
                title: "【医学部に特化した専門対策】",
                body: "英数理に加え、面接・小論文・願書の書き方まで、医学部受験に必要なすべてをトータルサポート。",
              },
              {
                icon: "🧠",
                title: "【オーダーメイド学習計画】",
                body: "受験生一人ひとりの現在の学力・志望校・性格・生活スタイルに合わせて、最適な学習スケジュールと指導方針を完全オーダーメイドで作成。1か月・1週間・1日単位での学習計画により、最短距離で合格を目指します。",
              },
              {
                icon: "💡",
                title: "【合格者が実践した「本質的な勉強法」】",
                body: "本質を捉えて効率よく得点力を伸ばす──実際に偏差値40台から難関医学部に合格した講師の成功メソッドを再現可能な形で伝授します。",
              },
              {
                icon: "🏠",
                title: "【自宅でもオンラインでも受講可能】",
                body: "対面指導（関東圏）・オンライン指導の両方に対応。場所を選ばず、全国どこからでも最高レベルの家庭教師指導が受けられます。",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-4 p-5 rounded-lg"
                style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-base md:text-lg mb-1" style={{ color: "#142b57" }}>
                    {item.title}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "#424f8f" }}>
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Flow Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#424f8f" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
            無料相談、ご応募までの流れ
          </h2>
          <div className="mb-10">
            <Image
              src="/images/flow.jpg"
              alt="ご応募までの流れ"
              width={1440}
              height={517}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-6">
            {[
              {
                step: "Step 1",
                title: "無料カウンセリングのお申し込み",
                body: "まずは、公式LINEまたは専用フォームからお気軽にご連絡ください。学力状況・志望校・学習環境・現在の悩みなどをヒアリングします。",
              },
              {
                step: "Step 2",
                title: "最適な講師のご提案",
                body: "ヒアリング内容をもとに、性格・志望校・科目の相性まで考慮して、現役慶應医学部生から最適な講師を選定します。講師プロフィールの提示や、事前の面談も可能です。",
              },
              {
                step: "Step 3",
                title: "体験指導（1回60分〜）",
                body: "希望があれば、実際に担当予定の講師による体験指導を実施。相性や指導の質を確認したうえで、本契約に進むことができます。",
              },
              {
                step: "Step 4",
                title: "本契約と指導スタート",
                body: "スケジュールや指導方針をすり合わせたうえで契約を行い、完全1対1の本格指導がスタートします。指導後も継続的に進捗管理・相談対応・保護者報告などを行い、合格までしっかりサポートします。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-lg p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="flex-shrink-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white text-center"
                    style={{ backgroundColor: "#142b57" }}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-white text-lg mb-2">
                    {item.step}｜{item.title}
                  </p>
                  <p className="text-white text-sm leading-relaxed opacity-90">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#d1d3ca" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: "#142b57" }}>
            医学部受験専門塾Medvanceでは
          </h2>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#142b57" }}>
            慶應義塾大学医学部の現役医学部生が
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-8" style={{ color: "#142b57" }}>
            マンツーマンで合格まで指導します
          </h2>
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
            <h3 className="text-lg md:text-xl font-bold mb-4" style={{ color: "#142b57" }}>
              医学部合格は「才能」ではなく「戦略」
            </h3>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: "#424f8f" }}>
              どれだけ努力しても、やり方を間違えると結果は出ません。Medvanceは、合格者が実際に通った&quot;最短合格ルート&quot;を、あなた専用に最適化して提供します。1年で逆転合格を目指すなら──あなたの医学部合格を、私たちが本気でサポートします。
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#142b57" }}
            >
              依頼する
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Note Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2" style={{ color: "#142b57" }}>
            「どうすれば医学部に合格できるのか」
          </h2>
          <h2 className="text-xl md:text-2xl font-bold mb-8" style={{ color: "#142b57" }}>
            現役慶應医学部生のnoteも更新しています
          </h2>
          <div className="mb-8">
            <Image
              src="/images/note.png"
              alt="note記事"
              width={1280}
              height={819}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h3 className="text-base md:text-lg font-medium mb-8 leading-relaxed" style={{ color: "#424f8f" }}>
            noteでは、「偏差値40から慶應医学部に合格した戦略」「医学部に受かる人・落ちる人の決定的な違い」など、他では絶対に読めない、リアルで実践的な受験情報を公開中。実際の合格体験記、科目別の勉強法、面接・小論文対策、そして最短で結果を出すスケジュール設計まで──医学部合格のすべてが詰まったnoteです。無料記事だけでも多くの気づきが得られますが、有料記事では、読んだ翌日から実行できる合格ノウハウを詳しく紹介しています。まずは下のリンクから、noteをチェックしてみてください。きっと、合格への突破口が見えてくるはずです。
          </h3>
          <a
            href="https://note.com/igakubu_juken"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-white font-bold text-lg rounded shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#142b57" }}
          >
            ▶ note記事はこちらをクリック
          </a>
        </div>
      </section>

      {/* 6. Subjects Section */}
      <section className="py-16 px-4" style={{ backgroundColor: "#d1d3ca" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#142b57" }}>
            各教科の指導方法
          </h2>
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-center" style={{ color: "#424f8f" }}>
            「わかるまで、分かるように」——一人ひとりに寄り添う、本質的な受験指導
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-center mb-10 max-w-2xl mx-auto" style={{ color: "#142b57" }}>
            Medvanceでは、「ただ教える」だけでは終わりません。講師は、生徒が&quot;どこでつまずいているのか&quot;を丁寧に観察し、的確に見抜いたうえで、ピンポイントに解消していきます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: "🧠", label: "英語", href: "/subjects/english" },
              { icon: "📐", label: "数学", href: "/subjects/math" },
              { icon: "⚛", label: "物理", href: "/subjects/physics" },
              { icon: "🧪", label: "化学", href: "/subjects/chemistry" },
              { icon: "🧬", label: "生物", href: "/subjects/biology" },
            ].map((subject) => (
              <Link
                key={subject.href}
                href={subject.href}
                className="flex items-center gap-3 p-5 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow font-semibold text-lg"
                style={{ color: "#142b57" }}
              >
                <span className="text-2xl">{subject.icon}</span>
                {subject.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
