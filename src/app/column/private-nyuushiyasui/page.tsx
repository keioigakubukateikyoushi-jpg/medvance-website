import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";
import { buildColumnPageSchemas } from "@/lib/seo";

const faqItems = [
  {
    q: "私立医学部の中で「入りやすい」とされる大学はどこですか？",
    a: "偏差値ベースでは東北医科薬科大学・北里大学・聖マリアンナ医科大学・帝京大学・川崎医科大学などが「私立医学部の中では」入りやすいとされます。ただし全国的にはいずれも偏差値60前後以上で、難関大学であることに変わりません。「入りやすい」の意味（偏差値・倍率・問題難易度・配点相性）を分けて考える必要があります。",
  },
  {
    q: "「偏差値が低い」と「入りやすい」は同じ意味ですか？",
    a: "違います。偏差値は受験者層の難易度を示しますが、実際の合否は倍率・問題傾向・科目配点・面接ウェイトに大きく影響されます。例えば帝京大は国語が課される独自4科目で、国語が得意な受験生にとっては偏差値以上に「入りやすい」大学になります。",
  },
  {
    q: "入りやすい私立医学部に入るデメリットはありますか？",
    a: "国家試験合格率・学費総額・立地・附属病院の規模に差があります。「入りやすい」大学のなかには学費が4,000万円を超えるところもあり、卒業後のキャリア設計まで含めて総合判定する必要があります。難易度の低さだけで選ぶと、6年間の負担で後悔するケースが多いです。",
  },
  {
    q: "偏差値60前後でも、私立医学部に合格できますか？",
    a: "可能です。ただし科目バランスと併願戦略が決定的に重要になります。理科2科目で稼げる構成、得意科目を活かせる出題傾向の大学を絞り込み、安全校・相性校・チャレンジ校を組み合わせれば、偏差値60前後から複数合格を取った事例は多数あります。",
  },
  {
    q: "私立医学部は何校受けるのが一般的ですか？",
    a: "5〜10校が目安です。私立医学部は1月下旬〜2月にかけて試験が集中し、日程が重なるため、現実的には7〜8校程度に収まります。第一志望・相性校・安全校をバランスよく組み込み、受験料・移動・体力負担も含めた戦略設計が重要です。",
  },
  {
    q: "私立医学部と国公立医学部、どちらを目指すべきですか？",
    a: "経済状況・残り期間・現状の偏差値で決まります。国公立は学費が約350万円ですが、共通テスト含め科目数が多く難易度も高い。私立は1校あたりの難易度はやや下がるが、学費は約2,000〜4,700万円。残り期間が短い場合や複数浪を経験している場合は私立に絞る選択も有力です。",
  },
  {
    q: "推薦入試で入りやすい私立医学部はありますか？",
    a: "東邦大・聖マリアンナ・東北医科薬科などが学校推薦・地域枠を比較的広く設けています。一般入試より評定基準・志望理由書・面接の比重が大きく、夏前から準備できる受験生にとっては有力なルートです。ただし併願不可の制約や条件が大学ごとに異なるため、要項を必ず確認してください。",
  },
  {
    q: "Medvanceは「入りやすい大学」だけを勧める塾ですか？",
    a: "いいえ。第一志望が慶應医・東大理三・国公立医学部であっても、現状の偏差値と残り期間から逆算して、伸ばせる科目を最優先で指導します。無料相談では「合格可能性が最も高い受験校の組み合わせ」と「無理のある受験校」をその場で率直にお伝えします。",
  },
];

const schemas = buildColumnPageSchemas({
  title: "【2026最新】入りやすい私立医学部ランキングTOP10｜偏差値・倍率・科目配点で徹底比較",
  description:
    "私立医学部の中で偏差値が比較的低く入りやすい大学TOP10を、偏差値・倍率・科目配点・学費・面接ウェイトで多角的に比較。慶應医学部全勝の現役医学生が併願戦略まで解説します。",
  slug: "private-nyuushiyasui",
  category: "大学選び",
  keywords: [
    "私立医学部 入りやすい",
    "私立医学部 偏差値低い",
    "私立医学部 ランキング",
    "私立医学部 倍率",
    "医学部 入りやすい 私立",
  ],
  faqItems,
});

export const metadata = {
  title: "【2026最新】入りやすい私立医学部ランキングTOP10｜偏差値・倍率・科目配点で徹底比較",
  description:
    "私立医学部の中で偏差値が比較的低く「入りやすい」とされる大学TOP10を、偏差値・倍率・問題難易度・科目配点・学費の5軸で比較。慶應医学部全勝の現役医学生監修。",
  alternates: { canonical: "/column/private-nyuushiyasui" },
};

const definitions = [
  {
    label: "定義 A",
    title: "偏差値が低い（合格可能性ベース）",
    body: "河合塾・駿台・ベネッセの偏差値ランキングで、私立医学部の下位5〜10位に位置する大学。受験者全体の中で必要な順位が下がるため、絶対値として合格可能性が上がる。",
  },
  {
    label: "定義 B",
    title: "問題が標準的（学力以外で詰みにくい）",
    body: "問題が奇問・難問に偏らず、典型問題・標準問題で構成されている大学。基礎が完成していれば取り切れるため、「奇問対策に時間を奪われない」点で入りやすい。",
  },
  {
    label: "定義 C",
    title: "配点・科目が自分に有利（相性ベース）",
    body: "配点が自分の得意科目に偏っている、または独自科目（国語・小論文）が課されることで競争相手が減る大学。同じ偏差値でも個人の得意科目によって難易度が変わる。",
  },
];

const rankingTop10 = [
  {
    rank: "01",
    name: "東北医科薬科大学医学部",
    hensachi: "62〜65",
    bairitsu: "8〜12倍",
    gakuhi: "約2,300万円",
    kokusen: "91.0%",
    type: "標準・地域枠",
    features: "2016年開設の新設医大。問題は標準的で奇問が少なく、基礎完成型の受験生に有利。宮城・岩手の地域枠を活用すれば学費負担を大幅に下げられる。",
  },
  {
    rank: "02",
    name: "聖マリアンナ医科大学",
    hensachi: "62〜65",
    bairitsu: "9〜13倍",
    gakuhi: "約3,300万円",
    kokusen: "88.7%",
    type: "面接重視",
    features: "川崎市。面接・小論文の比重が比較的高く、人物面で評価されたい受験生に向く。学費はやや高めだが、難易度は私立の中では低め。",
  },
  {
    rank: "03",
    name: "帝京大学医学部",
    hensachi: "60〜64",
    bairitsu: "12〜18倍",
    gakuhi: "約3,750万円",
    kokusen: "86.3%",
    type: "独自科目",
    features: "英・数・国語・理1科目の独自4教科入試。国語が得意な受験生にとっては偏差値以上に有利。受験者数が多いため倍率は高め。",
  },
  {
    rank: "04",
    name: "川崎医科大学",
    hensachi: "60〜63",
    bairitsu: "5〜8倍",
    gakuhi: "約4,700万円",
    kokusen: "87.4%",
    type: "学費高・難易度低",
    features: "岡山県倉敷市。私立医学部の中で最も学費が高い部類だが、難易度は最も低い水準。経済的に余裕があり、地方単科医大での集中環境を求める受験生向け。",
  },
  {
    rank: "05",
    name: "北里大学医学部",
    hensachi: "63〜66",
    bairitsu: "10〜15倍",
    gakuhi: "約3,900万円",
    kokusen: "89.5%",
    type: "標準・小問形式",
    features: "神奈川県相模原市。英・数・理2科目の標準的な試験。小問形式が多く「解ける問題を確実に取る」戦略が有効。附属病院が大規模で実習環境が充実。",
  },
  {
    rank: "06",
    name: "獨協医科大学",
    hensachi: "61〜64",
    bairitsu: "10〜14倍",
    gakuhi: "約3,700万円",
    kokusen: "92.3%",
    type: "標準・栃木地域",
    features: "栃木県壬生町。問題は標準的で、栃木県地域枠を活用すれば実質学費を抑えられる。国試合格率が高く、教育の安定感がある。",
  },
  {
    rank: "07",
    name: "埼玉医科大学",
    hensachi: "62〜65",
    bairitsu: "9〜13倍",
    gakuhi: "約3,950万円",
    kokusen: "88.0%",
    type: "標準・地域密着",
    features: "埼玉県毛呂山町。問題は標準的で、首都圏アクセスと学費のバランスが取りやすい。系列病院ネットワークが大きく、実習・研修環境が安定。",
  },
  {
    rank: "08",
    name: "杏林大学医学部",
    hensachi: "63〜66",
    bairitsu: "12〜17倍",
    gakuhi: "約3,800万円",
    kokusen: "92.7%",
    type: "標準・東京",
    features: "東京都三鷹市。問題は標準的で偏差値帯のわりに合格しやすい。都内通学が可能な数少ない学費中位校。",
  },
  {
    rank: "09",
    name: "金沢医科大学",
    hensachi: "60〜63",
    bairitsu: "8〜12倍",
    gakuhi: "約4,150万円",
    kokusen: "86.5%",
    type: "学費高・地方",
    features: "石川県内灘町。難易度は私立の中で低めだが、学費は高い。地方単科医大の集中環境を活かしたい受験生向け。",
  },
  {
    rank: "10",
    name: "愛知医科大学",
    hensachi: "62〜65",
    bairitsu: "10〜14倍",
    gakuhi: "約3,500万円",
    kokusen: "91.7%",
    type: "標準・東海",
    features: "愛知県長久手市。問題は標準的で、東海地方在住者にとって自宅から通学しやすい。学費・難易度・国試合格率のバランスが取れている。",
  },
];

const dangerSchools = [
  {
    name: "帝京大学医学部",
    reason: "偏差値は私立の中では低めだが、受験者数が極端に多く倍率が15倍を超える年がある。国語が苦手な受験生は実質的に不利になる。",
  },
  {
    name: "川崎医科大学",
    reason: "難易度は最も低い水準だが、6年間の総学費が約4,700万円と私立医学部最高クラス。学費の重さで卒業後のキャリア選択が制約されるリスクがある。",
  },
  {
    name: "聖マリアンナ医科大学",
    reason: "学力試験では合格圏でも、面接・小論文の比重が高く、人物評価で落ちるケースが目立つ。面接対策を後回しにすると本番で詰む。",
  },
];

const subjectStrategy = [
  {
    subject: "英語が得意な受験生",
    schools: "慈恵医大・順天堂大・東京医大",
    note: "英語の配点が高い、または英語の難度が極端に高い大学を狙うことで、得意科目で差をつけやすい。",
  },
  {
    subject: "数学が得意な受験生",
    schools: "日本医大・昭和大・北里大",
    note: "数学の配点が高く、記述で差がつく大学を選ぶと、典型問題の処理速度がそのまま得点に直結する。",
  },
  {
    subject: "理科2科目で稼げる受験生",
    schools: "東北医科薬科・獨協医大・愛知医大",
    note: "理科の配点比率が高く、問題が標準的で取りこぼしにくい大学を選ぶと、安定して得点できる。",
  },
  {
    subject: "国語が得意な受験生",
    schools: "帝京大",
    note: "私立医学部で唯一、独自に国語を課す。国語が得意なら他校受験生に対して大きなアドバンテージになる。",
  },
  {
    subject: "面接・小論文が得意な受験生",
    schools: "聖マリアンナ・順天堂・東邦大",
    note: "面接・小論文の比重が高い大学では、学力以外の評価で巻き返せる余地が大きい。",
  },
];

const heikgangStrategy = [
  {
    label: "01",
    title: "第一志望は『傾向相性』で1〜2校",
    body: "偏差値だけでなく、過去問が解きやすい・配点が自分に有利な大学を第一志望に据える。模試判定がBでも、傾向相性が良ければ十分に合格圏。",
  },
  {
    label: "02",
    title: "相性校は『得意科目を活かせる』2〜3校",
    body: "得意科目の配点が高い大学、または独自科目（国語など）が課される大学を組み込み、競争相手を絞る。",
  },
  {
    label: "03",
    title: "安全校は『標準問題で取り切れる』2〜3校",
    body: "東北医科薬科・獨協医大・愛知医大など、問題が標準的で奇問が少ない大学を組み込み、合格を1つ確保する。",
  },
  {
    label: "04",
    title: "日程は『連続2〜3日まで』",
    body: "1月下旬〜2月初旬は試験が集中する。連続3日以上の受験は集中力が落ちて結果が下がるため、3日以上連続を避けて組む。",
  },
];

const caseStudies = [
  {
    code: "Case",
    profile: "現役 高校3年生 / 私立医学部志望 / 河合 偏差値58からスタート",
    strategy: "数学と化学に絞った週次計画。傾向相性が良い東北医科薬科・愛知医大・北里大を中心に組み、聖マリアンナで面接対策の早期着手。",
    result: "11月模試で偏差値65到達、本番では4校合格・1校補欠。",
  },
  {
    code: "Case",
    profile: "1浪生 / 国公立志望から私立併願に切替 / 駿台 偏差値61",
    strategy: "国公立対策を捨てず、共通テスト後に私立4校に集中切替。帝京大の国語対策を1ヶ月で仕上げる戦略。",
    result: "私立3校合格、国公立は補欠繰上。",
  },
];

const relatedArticles = [
  { href: "/column/private-top5", title: "私立医学部トップ5（慶應・慈恵・順天堂・日医・昭和）の特徴と対策", label: "大学選び" },
  { href: "/column/gakuhi", title: "医学部の学費・費用を徹底比較｜国公立と私立で何が違うか", label: "費用" },
  { href: "/column/shigaku-vs-kokuritsu", title: "私立医学部と国公立医学部、どちらを目指すべきか", label: "受験戦略" },
  { href: "/column/hensachi", title: "医学部合格に必要な偏差値は？現実的な目標設定", label: "受験情報" },
  { href: "/column/medical-yobiko-cost", title: "医学部予備校の費用相場と選び方", label: "塾選び" },
  { href: "/column/juku-erabi", title: "医学部受験塾の選び方｜失敗しない7つの基準", label: "塾選び" },
  { href: "/column/igakubu-juku-osusume", title: "医学部受験塾おすすめ比較ランキング", label: "塾選び" },
  { href: "/column/private-kakomon-years", title: "私立医学部 過去問は何年分解くべきか", label: "過去問" },
  { href: "/column/mensetu", title: "医学部面接対策｜頻出質問と差をつけるポイント", label: "面接" },
  { href: "/column/shoronbun-taisaku", title: "医学部小論文対策｜書き方と頻出テーマ", label: "小論文" },
];

export default function PrivateNyuushiyasuiPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="min-h-screen bg-white">
        {/* Hero */}
        <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
              大学選び
            </p>
            <h1
              className="text-2xl md:text-4xl font-bold text-white mb-4 leading-snug"
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              【2026最新】入りやすい私立医学部ランキングTOP10
              <br className="hidden md:block" />
              偏差値・倍率・科目配点で徹底比較
            </h1>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              偏差値ランキングだけでは選べない。慶應医学部全勝の現役医学生が、
              <br className="hidden md:block" />
              倍率・問題難度・科目配点・学費まで含めた多角的な「入りやすさ」を解説します。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs" style={{ backgroundColor: "rgba(201,146,42,0.18)", border: "1px solid rgba(201,146,42,0.4)", color: "rgba(255,255,255,0.85)" }}>
              <span className="font-bold" style={{ color: "#c9922a" }}>監修</span>
              <Link href="/about/founder?from=column-private-nyuushiyasui" className="underline">
                Medvance代表 医学部受験コーチ（慶應医学部・偏差値40→全勝）
              </Link>
            </div>
          </div>
        </div>

        {/* Lead */}
        <div className="py-12 px-4 bg-white">
          <div className="max-w-3xl mx-auto column-body">
            <p>
              「私立医学部の中で、どこが一番入りやすいか」── 受験生・保護者から最も多く受ける質問のひとつです。
              偏差値ランキング表を見て下位の大学を選ぶ、という単純な選び方では、本番で合格を取りこぼします。
              なぜなら「入りやすさ」は<strong>偏差値・倍率・問題傾向・科目配点・面接ウェイト</strong>の5軸で決まり、
              受験生個人の得意科目や残り期間によって、同じ偏差値の大学でも難易度が大きく変わるからです。
            </p>
            <p>
              この記事では、慶應医学部を含む受験校全勝の経験を持つ現役慶應医学部生が、私立医学部のうち
              「<strong>3つの定義のいずれかで入りやすい</strong>」とされるTOP10校を比較・解説します。
              さらに「偏差値が低くても危ない3大学」「科目別の逆転狙い目大学」「学費との総合判定」「併願戦略」「Medvance受講生の実例」まで、
              受験校選びで本当に必要な情報を全て揃えます。
            </p>
            <div className="rounded-2xl p-6 my-6" style={{ backgroundColor: "#fff8ec", border: "1px solid rgba(201,146,42,0.3)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#c9922a" }}>
                先に結論
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                「入りやすい」を一言で決めない。あなたの<strong>得意科目・残り期間・経済状況</strong>で、
                狙うべき大学は変わります。記事末尾の<Link href="/contact?from=column-private-nyuushiyasui-lead" className="underline" style={{ color: "#c9922a" }}>無料相談</Link>では、
                あなた専用の併願校リストを30分で作成します。
              </p>
            </div>
          </div>
        </div>

        {/* 1. 「入りやすい」3定義 */}
        <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              1. 「入りやすい」とは何か ─ 3つの定義
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              「入りやすい大学」を選ぶ前に、自分にとっての「入りやすさ」がどれかを定義する必要があります。
              定義を間違えると、偏差値が低い大学を選んでも合格できません。
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {definitions.map((def) => (
                <div key={def.label} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <p className="text-xs font-bold tracking-widest mb-2" style={{ color: "#c9922a" }}>
                    {def.label}
                  </p>
                  <h3 className="text-base font-bold mb-3" style={{ color: "#0c1a33" }}>
                    {def.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {def.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. ランキングTOP10 */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              2. 入りやすい私立医学部 ランキングTOP10
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              偏差値・倍率・問題難度・学費・国試合格率を総合した「入りやすさ」のランキングです。
              数値は河合塾・駿台・各大学公表データを基準にした目安値です。
            </p>
            <div className="space-y-4">
              {rankingTop10.map((school) => (
                <div key={school.rank} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                    >
                      No.{school.rank}
                    </span>
                    <h3 className="text-lg font-bold" style={{ color: "#0c1a33" }}>
                      {school.name}
                    </h3>
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{ backgroundColor: "#fff8ec", color: "#c9922a" }}
                    >
                      {school.type}
                    </span>
                  </div>
                  <div className="grid sm:grid-cols-4 gap-3 mb-4 text-xs">
                    <div className="rounded-md p-3" style={{ backgroundColor: "#f7f5f0" }}>
                      <p className="font-bold mb-1" style={{ color: "#9ca3af" }}>偏差値</p>
                      <p className="font-bold" style={{ color: "#0c1a33" }}>{school.hensachi}</p>
                    </div>
                    <div className="rounded-md p-3" style={{ backgroundColor: "#f7f5f0" }}>
                      <p className="font-bold mb-1" style={{ color: "#9ca3af" }}>倍率</p>
                      <p className="font-bold" style={{ color: "#0c1a33" }}>{school.bairitsu}</p>
                    </div>
                    <div className="rounded-md p-3" style={{ backgroundColor: "#f7f5f0" }}>
                      <p className="font-bold mb-1" style={{ color: "#9ca3af" }}>6年学費</p>
                      <p className="font-bold" style={{ color: "#0c1a33" }}>{school.gakuhi}</p>
                    </div>
                    <div className="rounded-md p-3" style={{ backgroundColor: "#f7f5f0" }}>
                      <p className="font-bold mb-1" style={{ color: "#9ca3af" }}>国試合格率</p>
                      <p className="font-bold" style={{ color: "#0c1a33" }}>{school.kokusen}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {school.features}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed" style={{ color: "#6b7280" }}>
              ※ 偏差値・倍率・学費は各種模試・大学公表資料に基づく2026年時点の参考値。年度・入試方式により変動します。
            </p>
          </div>
        </div>

        {/* 3. 偏差値が低くても危ない3大学 */}
        <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              3. 偏差値が低くても「危ない」3大学
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              偏差値が低いからといって安易に選ぶと、別の理由で合格を逃したり、合格しても後悔するケースがあります。
              代表的な3大学を挙げます。
            </p>
            <div className="space-y-4">
              {dangerSchools.map((school) => (
                <div
                  key={school.name}
                  className="rounded-2xl p-6 bg-white"
                  style={{ border: "1px solid rgba(220,38,38,0.25)", backgroundColor: "#fff" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-bold"
                      style={{ backgroundColor: "#fee2e2", color: "#b91c1c" }}
                    >
                      要注意
                    </span>
                    <h3 className="text-base font-bold" style={{ color: "#0c1a33" }}>
                      {school.name}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {school.reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. 科目別 逆転狙い目大学 */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              4. 科目別・あなたの逆転狙い目大学
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              得意科目が明確なら、配点・出題傾向の相性で大学を選ぶことで、偏差値以上の合格可能性が生まれます。
              詳細な科目別対策は<Link href="/column/study-method" className="underline" style={{ color: "#c9922a" }}>医学部勉強法ガイド</Link>を併せてご覧ください。
            </p>
            <div className="space-y-4">
              {subjectStrategy.map((item) => (
                <div key={item.subject} className="rounded-2xl p-6" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-3">
                    <h3 className="text-base font-bold" style={{ color: "#0c1a33" }}>
                      {item.subject}
                    </h3>
                    <span className="text-sm font-semibold" style={{ color: "#c9922a" }}>
                      → {item.schools}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. 学費との総合判定 */}
        <div className="py-14 px-4" style={{ backgroundColor: "#0c1a33" }}>
          <div className="max-w-3xl mx-auto column-body">
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-noto-serif)" }}>
              5. 学費との総合判定 ─ 「入りやすさ」だけで選ばない
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.78)" }}>
              私立医学部の6年間の総学費は、最も安い順天堂大（約2,080万円）から、最も高い川崎医科大（約4,700万円）まで、
              実に2倍以上の幅があります。「入りやすい」だけで選ぶと、卒業後のキャリア選択（研究医、僻地医療、海外留学など）が
              学費返済のために制約されるリスクが生じます。
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.78)" }}>
              特に「入りやすい」に分類される川崎医大・帝京大・聖マリアンナ・北里大などは、いずれも学費が3,300万〜4,700万円と高めです。
              ご家庭の経済状況と、卒業後の選択肢の自由度を含めて判定する必要があります。詳しい比較は
              <Link href="/column/gakuhi" className="underline" style={{ color: "#c9922a" }}>医学部学費の徹底比較</Link>を参照してください。
            </p>
            <div className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(201,146,42,0.3)" }}>
              <p className="text-sm font-bold mb-2" style={{ color: "#c9922a" }}>判定の優先順位</p>
              <ol className="text-sm space-y-2" style={{ color: "rgba(255,255,255,0.85)" }}>
                <li>1. 6年間の総支払額が家計で無理なく出せるか</li>
                <li>2. 地域枠・特待生・奨学金の活用可能性</li>
                <li>3. 卒業後のキャリア（研究、僻地、開業、海外）に学費が制約をかけないか</li>
                <li>4. その上で、難易度・問題相性で合格可能性が高い大学を選ぶ</li>
              </ol>
            </div>
          </div>
        </div>

        {/* 6. 併願戦略 */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              6. 入りやすい大学を活かす『併願戦略』
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              私立医学部受験は1月下旬〜2月初旬に試験が集中します。日程・体力・受験料・問題相性を踏まえて、
              7〜8校程度を「第一志望・相性校・安全校」のバランスで組み合わせる必要があります。
              <Link href="/column/private-kakomon-years" className="underline" style={{ color: "#c9922a" }}>過去問の進め方</Link>と並行して計画してください。
            </p>
            <div className="space-y-4">
              {heikgangStrategy.map((item) => (
                <div key={item.label} className="flex gap-5 p-6 rounded-2xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                  <span className="text-2xl font-bold flex-shrink-0" style={{ color: "#c9922a", fontFamily: "var(--font-noto-serif)" }}>
                    {item.label}
                  </span>
                  <div>
                    <p className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>{item.title}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7. 受講生実例 */}
        <div className="py-14 px-4" style={{ backgroundColor: "#f7f5f0" }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              7. Medvance受講生の実例（匿名）
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#3d3d3d" }}>
              本人・保護者の同意のもと、現在指導中の事例を匿名で紹介します。
              詳しくは<Link href="/success-stories?from=column-private-nyuushiyasui" className="underline" style={{ color: "#c9922a" }}>合格実績・指導事例ページ</Link>もご覧ください。
            </p>
            <div className="space-y-5">
              {caseStudies.map((c, idx) => (
                <article key={idx} className="rounded-2xl p-6 bg-white" style={{ border: "1px solid #e5e1d8" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="rounded-full px-3 py-1 text-[11px] font-bold tracking-widest"
                      style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                    >
                      {c.code} {String(idx + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-semibold" style={{ color: "#0c1a33" }}>
                      {c.profile}
                    </p>
                  </div>
                  <div className="space-y-3 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                    <p>
                      <span className="font-bold" style={{ color: "#c9922a" }}>戦略：</span>
                      {c.strategy}
                    </p>
                    <p>
                      <span className="font-bold" style={{ color: "#c9922a" }}>結果：</span>
                      {c.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="py-14 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              よくある質問
            </h2>
            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <details key={i} className="rounded-xl overflow-hidden" style={{ border: "1px solid #e5e1d8" }}>
                  <summary
                    className="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-sm select-none list-none bg-white"
                    style={{ color: "#0c1a33" }}
                  >
                    <span>Q. {faq.q}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4 flex-shrink-0 ml-4"
                      style={{ color: "#c9922a" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
                    </svg>
                  </summary>
                  <div
                    className="px-6 pb-5 pt-1 text-sm leading-relaxed"
                    style={{ color: "#4a5568", backgroundColor: "#faf9f6" }}
                  >
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-6 mt-14" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
              関連記事
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-5 rounded-xl bg-white hover:shadow-md transition-shadow"
                  style={{ border: "1px solid #e5e1d8" }}
                >
                  <span
                    className="inline-block text-xs font-semibold tracking-wide px-2 py-0.5 rounded-full mb-3"
                    style={{ backgroundColor: "#0c1a33", color: "#c9922a" }}
                  >
                    {article.label}
                  </span>
                  <p className="text-sm font-bold leading-snug" style={{ color: "#0c1a33" }}>
                    {article.title}
                  </p>
                  <p className="text-xs font-semibold mt-3" style={{ color: "#c9922a" }}>
                    記事を読む →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <ColumnCTA
          heading="あなた専用の併願校リストを30分で作ります"
          subtext="現在の偏差値・得意科目・経済状況・残り期間を踏まえて、第一志望・相性校・安全校の組み合わせを慶應医学部全勝の代表が設計します。"
          source="column-private-nyuushiyasui"
        />
      </div>
    </>
  );
}
