import UniversityPageSchemas from "@/components/UniversityPageSchemas";
import Link from "next/link";
import MedvanceBanner from "@/components/MedvanceBanner";

export const metadata = {
  title: "東京慈恵会医科大学に受かるには｜入試対策・合格戦略 | Medvance",
  description:
    "東京慈恵会医科大学医学部の一般選抜を、2026年度学生募集要項と公式入試概要に基づいて整理。1次試験の英語・数学・理科2科目、2次試験の小論文とMMIまで、押さえるべきポイントを解説します。",

  alternates: {
    canonical: "/universities/jikei",
  },};

const subjects = [
  {
    name: "英語",
    level: "★★★★★",
    body: "1次試験は60分・100点です。短い試験時間で正確に処理する力が求められます。",
    detail: "2026年度一般選抜の出題範囲は「英語コミュニケーションI・II・III」「論理・表現I・II・III」です。数学100点・理科200点と並ぶ1次試験科目なので、時間内に読み切る精度を高めておく必要があります。",
  },
  {
    name: "数学",
    level: "★★★★★",
    body: "1次試験は90分・100点です。数III・Cまで含む広い範囲を90分で処理する必要があり、負荷の高い科目です。",
    detail: "2026年度一般選抜の出題範囲は数学I・II・III・A・B・Cで、Bは数列、Cはベクトル・平面上の曲線と複素数平面が指定されています。公式が難度を明示しているわけではありませんが、範囲と試験時間を考えると早めの仕上げが必要です。",
  },
  {
    name: "理科（2科目選択）",
    level: "★★★★★",
    body: "1次試験は120分・200点です。物理・化学・生物から2科目を選ぶ形式で、配点の大きい科目です。",
    detail: "2026年度一般選抜では「物理基礎・物理」「化学基礎・化学」「生物基礎・生物」から2科目選択です。理科だけで200点あるため、英数だけ先に進めるのではなく、理科2科目を含めた完成計画が必要です。",
  },
  {
    name: "小論文",
    level: "★★★★☆",
    body: "2次試験では90分で課題文の要約と自分の意見を記述します。読み取りと論理整理の両方が必要です。",
    detail: "2026年度一般選抜の小論文は90分・25点で、問題文の要約300字と、自分の考えを1200字以内で述べる形式です。1次試験後に慌てないよう、要約と論述を分けて練習しておくと安定します。",
  },
  {
    name: "面接（MMI）",
    level: "★★★★★",
    body: "2次試験の面接はMMI方式です。通常の個人面接とは違い、短い面接を連続して受ける準備が必要です。",
    detail: "2026年度一般選抜の面接は約60分・30点で、6つの面接を回るMMI方式です。小論文・調査書等評価と合わせて2次試験で評価されるため、志望理由だけでなく、その場で考えて答える練習も必要です。",
  },
];

const strategies = [
  {
    step: "01",
    title: "数学を早めに仕上げて90分に慣れる",
    body: "慈恵の数学は90分で数III・Cまで対応する必要があり、後回しにすると仕上がりません。高3の春までに全範囲を一通り終え、夏以降は90分での処理量を意識した演習に切り替えるのが安全です。",
  },
  {
    step: "02",
    title: "理科2科目200点を落とさない",
    body: "1次試験では理科が200点で最も配点が大きい科目です。英語・数学だけ整えても、理科2科目が未完成だと合格点に届きにくくなります。選択2科目を早めに固定し、秋には120分通し演習に入れる状態を目指してください。",
  },
  {
    step: "03",
    title: "英語は60分100点の時間感覚を作る",
    body: "英語は60分100点で、短時間での精度が重要です。高3春からは60分通しで解く練習を定期的に入れ、読み切れない原因が語彙不足なのか時間配分なのかを切り分けて修正してください。",
  },
  {
    step: "04",
    title: "2次試験は小論文とMMIを並行して準備する",
    body: "慈恵の2次試験は、90分の小論文と6ステーションのMMIです。面接だけ準備しても、小論文の要約と論述で崩れやすくなります。夏から秋にかけて、要約・論述・その場で答える練習を並行して入れるのが効率的です。",
  },
  {
    step: "05",
    title: "調査書と活動内容も含めて自己理解を整える",
    body: "慈恵の2次試験では、小論文25点・面接30点に加えて、調査書・課外活動等の評価が25点あります。書類に書いた内容と面接で話す内容がつながっているかを確認し、自分の経験を整理しておくことが重要です。",
  },
];

const timeline = [
  {
    period: "高1・高2",
    title: "1次試験の基礎完成と活動の蓄積",
    tasks: [
      "英語：60分で解くことを意識しつつ、語彙・文法・長文の基礎を固める",
      "数学：数III・Cまでを順次終え、90分で解ける土台を作る",
      "理科：1科目を高2までに形にし、2科目目へ早めに着手する",
      "活動：調査書や課外活動で説明できる経験を積み、振り返りを残す",
    ],
  },
  {
    period: "高3春（4〜6月）",
    title: "時間制限を意識した演習へ移る",
    tasks: [
      "英語：60分通し演習を始め、時間の足りない原因を特定する",
      "数学：90分演習を入れ、数III・Cまでの総点検を行う",
      "理科：選択2科目を固定し、120分通し演習に備える",
      "2次試験準備：小論文の要約練習と自己分析を始める",
    ],
  },
  {
    period: "高3夏（7〜8月）",
    title: "1次試験と2次試験を同時に立ち上げる",
    tasks: [
      "英語：60分100点を意識した通し演習を重ねる",
      "数学：90分で解く順番と見切りの判断を決める",
      "理科：120分で2科目を処理する練習を始める",
      "2次試験：小論文とMMIの模擬練習を少しずつ入れる",
    ],
  },
  {
    period: "高3秋〜冬（9〜12月）",
    title: "過去問演習と弱点補強",
    tasks: [
      "慈恵の過去問を科目別に分析し、得点目標を固める",
      "小論文は要約300字と意見1200字以内の両方を時間内で練習する",
      "MMIは複数回の模擬練習で、短時間で考えて答える感覚を掴む",
      "他私立医学部との受験スケジュール管理",
    ],
  },
  {
    period: "直前期（1月〜本番）",
    title: "仕上げと本番シミュレーション",
    tasks: [
      "過去問の最終確認と弱点科目の最終チェック",
      "英語60分・数学90分・理科120分の本番シミュレーションを維持する",
      "小論文とMMIの最終確認を行い、2次試験まで見据えて整える",
      "睡眠・食事・体調管理を最優先に",
    ],
  },
];

const failures = [
  {
    title: "数学を後回しにする",
    body: "慈恵の数学は90分で数III・Cまでを扱うため、仕上げが遅れると最後まで時間不足が解消しません。高3秋から慌てて全範囲を埋めようとすると、英語・理科・2次対策まで圧迫します。",
  },
  {
    title: "2次試験を面接だけで済ませる",
    body: "慈恵の2次試験はMMIだけでなく、90分の小論文もあります。面接練習だけをしていると、要約300字と意見1200字以内を時間内でまとめる部分が手薄になります。2次試験はセットで準備する必要があります。",
  },
  {
    title: "調査書・課外活動の整理をしない",
    body: "慈恵の2次試験では、調査書・課外活動等も25点で評価されます。書類と面接の内容が噛み合っていないと、せっかくの経験が評価に結びつきにくくなります。秋までに自分の経験を言語化しておくべきです。",
  },
];

const reasons = [
  {
    title: "慈恵の英語・医学系長文対策に特化した指導",
    body: "慈恵の英語は60分100点で、短時間での正確性が問われます。Medvanceでは読解速度だけでなく、時間内に失点を抑える演習設計まで含めて慈恵向けに調整します。",
  },
  {
    title: "慈恵のMMIを踏まえた模擬練習",
    body: "2次試験で実施されるMMI形式を踏まえ、短時間で考えて答える練習を行います。通常の個人面接だけでは対応しにくい慈恵の形式に合わせて準備できます。",
  },
  {
    title: "個別カリキュラムで弱点を最短で克服",
    body: "慈恵は英語・数学・理科2科目に加え、2次試験の小論文・MMI・調査書評価まで見据える必要があります。現状学力と活動歴の両方を整理し、優先順位を個別に設計します。",
  },
];

const faqs = [
  {
    q: "東京慈恵会医科大学の2次試験はどのような形式ですか？",
    a: "2026年度一般選抜では、2次試験は小論文90分・25点、面接約60分・30点で、面接は6つの面接を回るMMI方式です。これに加えて、調査書・課外活動等も25点で評価されます。",
  },
  {
    q: "慈恵は数学も難しいですか？",
    a: "公式が難度を明示しているわけではありませんが、2026年度一般選抜では数学は90分100点で、数III・Cまでが範囲です。範囲の広さと試験時間を考えると、私立医学部上位クラスとして早めに仕上げておくほうが安全です。",
  },
  {
    q: "慈恵の小論文はどんな形式ですか？",
    a: "2026年度一般選抜では、小論文は90分で、問題文の要約300字と、自分の考えを1200字以内で述べる形式です。要約と論述を分けて練習しておくと本番で崩れにくくなります。",
  },
  {
    q: "慈恵医科大学の対策はいつから始めるべきですか？",
    a: "数学と理科2科目は高3春までに1次試験仕様へ寄せ始め、遅くとも夏には2次試験の小論文とMMIにも着手したいところです。1次と2次を分けすぎず、秋には両方を並行して回せる形にしておくのが理想です。",
  },
  {
    q: "理科は何科目必要ですか？",
    a: "2026年度一般選抜では、理科は物理・化学・生物から2科目選択です。理科だけで200点あるため、英語・数学と同じ重さで学習計画に入れる必要があります。",
  },
  {
    q: "調査書や課外活動も評価されますか？",
    a: "はい。2026年度一般選抜では、2次試験で調査書・課外活動等が25点で評価されます。書類に書いた内容を面接で一貫して説明できるように整理しておくことが重要です。",
  },
];

export default function JikeiPage() {
  return (
    <>
      <UniversityPageSchemas name="東京慈恵会医科大学" slug="jikei" breadcrumbLabel="慈恵医科大対策" />
          <div className="min-h-screen bg-white">
      {/* Hero */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            東京慈恵会医科大学
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            慈恵医科大学合格への最短ルート。
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.65)" }}>
            英語・数学・理科2科目とMMIを見据えた、実践的な合格戦略
          </p>
        </div>
      </div>

      {/* 入試概要 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            東京慈恵会医科大学の入試概要と特徴
          </h2>
          <div className="p-8 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              東京慈恵会医科大学医学部の一般選抜は、1次試験（英語・数学・理科2科目）と2次試験（小論文・面接）の二段階選抜です。2026年度一般選抜では、1次試験は英語100点・数学100点・理科200点の合計400点で、理科は物理・化学・生物から2科目を選択します。
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#3d3d3d" }}>
              2次試験では、小論文90分・25点、面接約60分・30点が課され、面接は6つの面接を回るMMI方式です。さらに調査書・課外活動等も25点で評価されるため、学力だけでなく2次試験の形式理解と自己整理が合否を左右します。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {[
                { label: "募集人員", value: "一般約105名" },
                { label: "1次試験", value: "英・数・理2科目" },
                { label: "2次試験", value: "小論文・MMI" },
                { label: "試験日", value: "1次 2/11・2次 2/21〜23" },
              ].map((item) => (
                <div key={item.label} className="text-center p-3 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <p className="text-xs mb-1" style={{ color: "#c9922a" }}>{item.label}</p>
                  <p className="font-bold text-sm" style={{ color: "#0c1a33" }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 合格のための戦略 */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慈恵医科大学に受かるには｜合格のための5つの戦略
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            数学の仕上げ、理科2科目200点、そして小論文とMMIまで含めて、公式形式に沿った戦略を解説します。
          </p>
          <div className="space-y-6">
            {strategies.map((item) => (
              <div key={item.step} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 科目別対策 */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            科目別対策のポイント
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            各科目の出題傾向と、慈恵医科大学合格に向けた具体的な対策を解説します。
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-base" style={{ color: "#c9922a" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "#c9922a" }}>{item.level}</p>
                </div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#3d3d3d" }}>{item.body}</p>
                <p className="text-xs leading-relaxed p-3 rounded-lg" style={{ color: "#6b7280", backgroundColor: "#f7f5f0" }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 合格までのスケジュール */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慈恵医科大学合格までのスケジュール
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            いつ、何を、どのくらいやるべきか。合格者の勉強ロードマップを公開します。
          </p>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <div key={i} className="rounded-2xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                <div className="flex items-center gap-4 px-6 py-4" style={{ backgroundColor: i % 2 === 0 ? "#0c1a33" : "#1a3a72" }}>
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#c9922a" }}>{item.period}</span>
                  <span className="font-bold text-sm text-white">{item.title}</span>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {item.tasks.map((task, j) => (
                      <li key={j} className="flex gap-3 text-sm" style={{ color: "#6b7280" }}>
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: "#c9922a" }} />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* よくある失敗パターン */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            慈恵を目指す受験生が陥りやすい失敗パターン
          </h2>
          <p className="text-center text-sm mb-10 max-w-2xl mx-auto" style={{ color: "#6b7280" }}>
            難関校だからこそ、対策の方向性を間違えると大きなロスになります。よくある失敗パターンを把握して回避しましょう。
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {failures.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#0c1a33" }}>落とし穴 {i + 1}. {item.title}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* なぜMedvanceか */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            なぜMedvanceが慈恵医科大学合格に強いか
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
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

      {/* FAQ */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
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

      <MedvanceBanner />

      {/* CTA */}
      <div className="py-20 px-4" style={{ backgroundColor: "#0c1a33" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Free Consultation</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            まずは無料相談から
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
            慈恵医科大学合格への道筋を、一緒に考えます。
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
    </>
  );
}