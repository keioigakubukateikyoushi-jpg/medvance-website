import type { Metadata } from "next";
import Link from "next/link";
import { LINE_URL } from "@/lib/links";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: "LINEで無料相談｜医学部受験の戦略を30分で整理 | Medvance",
  description:
    "LINEで医学部受験の無料相談。現役慶應医学部生が志望校・学力・残り期間から次の一手を30分で整理。勧誘なし・オンライン全国対応・戦略マニュアル進呈。",
  alternates: { canonical: "/line" },
  openGraph: {
    title: "LINEで無料相談 | Medvance",
    description:
      "LINE友だち追加で医学部受験の無料相談。現役慶應医学部生が30分で戦略を整理します。",
    url: "/line",
    type: "website",
  },
};

const faqs = [
  {
    q: "LINE相談は本当に無料ですか？",
    a: "はい、初回の戦略相談は完全無料です。30分を目安に、志望校・現在の学力・残り期間から次の一手を整理します。相談後に入会や契約を迫ることはありません。",
  },
  {
    q: "保護者だけで相談しても大丈夫ですか？",
    a: "問題ありません。お子様同席のご相談、保護者のみのご相談、どちらも多く承っています。匿名でのご質問にも対応します。",
  },
  {
    q: "LINE登録するとどんなメッセージが届きますか？",
    a: "担当者からの個別返信のみで、一斉配信の営業メッセージはお送りしません。ブロック・退会はいつでも可能です。",
  },
  {
    q: "相談できる内容は？",
    a: "志望校選び・科目別の勉強法・過去問の使い方・推薦AO入試・面接小論文・浪人/再受験の戦略・塾予備校選び・学費の相談など、医学部受験に関わる内容ならどのテーマでも大丈夫です。",
  },
  {
    q: "すぐ返信は来ますか？",
    a: "営業時間内（平日10:00〜22:00 / 土日10:00〜20:00）は概ね1時間以内に初回返信いたします。時間外は翌営業時間内にご連絡します。",
  },
  {
    q: "フォームとLINE、どちらが良いですか？",
    a: "スピード重視ならLINE、じっくり情報を整理して送りたい方はフォームがおすすめです。内容・対応品質に差はありません。",
  },
];

const schemas = [
  buildBreadcrumbSchema([
    { name: "ホーム", url: "/" },
    { name: "LINE無料相談", url: "/line" },
  ]),
  buildFaqSchema(faqs),
];

export default function LinePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      {/* Hero */}
      <section
        className="py-20 px-4"
        style={{
          background: "linear-gradient(135deg, #0c1a33 0%, #142b57 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5"
            style={{ backgroundColor: "#06C755", color: "#fff" }}
          >
            LINE Official Account
          </span>
          <h1
            className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            LINEで、医学部受験の
            <br className="hidden sm:block" />
            次の一手を30分で整理
          </h1>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            現役慶應医学部生が、志望校・学力・残り期間から
            <br className="hidden sm:block" />
            具体的な勉強計画と戦略を一緒に設計します。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold shadow-lg hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#06C755" }}
            >
              <svg viewBox="0 0 36 36" className="w-5 h-5" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
                />
              </svg>
              友だち追加して無料相談
            </a>
            <Link
              href="/contact?from=line-page"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              フォームで相談する
            </Link>
          </div>

          <p
            className="text-xs mt-6"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            完全無料 / 勧誘なし / 匿名OK / オンライン全国対応
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-3"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            LINE相談でできること
          </h2>
          <p
            className="text-sm text-center mb-10"
            style={{ color: "#6b7280" }}
          >
            30分の無料セッションで、以下のテーマを整理します。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "志望校の現実的な選定",
                body: "学力・学費・通学可否・偏差値推移から、本命／挑戦／併願の最適なポートフォリオを整理します。",
              },
              {
                title: "科目別の学習診断",
                body: "現在の得点・苦手分野・使用教材から、今すぐ着手すべき科目と教材を特定します。",
              },
              {
                title: "残り期間のスケジュール",
                body: "入試日から逆算した週次スケジュール、過去問着手時期、模試の活用方針を設計します。",
              },
              {
                title: "面接・小論文の方針",
                body: "志望理由書の骨子・頻出テーマへの考え方・MMI対策の進め方を短時間で共有します。",
              },
              {
                title: "推薦・AO入試の適合診断",
                body: "評定・活動実績・志望理由から、推薦/AO出願の現実性と準備タスクを提示します。",
              },
              {
                title: "塾・予備校の比較",
                body: "大手予備校／医専／オンライン個別の違いを、残り期間と到達目標に合わせて整理します。",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white"
                style={{ border: "1px solid #e5e1d8" }}
              >
                <p
                  className="font-bold text-base mb-3"
                  style={{ color: "#0c1a33" }}
                >
                  {item.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b7280" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            相談までの流れ
          </h2>

          <ol className="space-y-6">
            {[
              {
                step: "01",
                title: "LINE公式アカウントを友だち追加",
                body: "下のボタンから医進ラボ公式LINEを追加してください。スマホ／PCどちらでも利用できます。",
              },
              {
                step: "02",
                title: "相談内容をメッセージ送信",
                body: "志望校・学年・現在の学力・気になっていることを簡単にお送りください。フォーマット不要です。",
              },
              {
                step: "03",
                title: "担当者から日程調整",
                body: "営業時間内は通常1時間以内に返信します。都合の良い日時を2〜3候補ご提示ください。",
              },
              {
                step: "04",
                title: "30分の無料相談（Zoom or LINE）",
                body: "ZoomまたはLINEビデオ通話で、現役慶應医学部生が戦略を整理します。録画・資料共有も可能です。",
              },
              {
                step: "05",
                title: "相談後に戦略マニュアル進呈",
                body: "相談内容に合わせた6章構成の受験戦略マニュアルをPDFでお送りします。継続的な質問もLINEで可能です。",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="flex gap-5 p-5 rounded-2xl"
                style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}
              >
                <span
                  className="flex-shrink-0 font-bold text-lg"
                  style={{
                    color: "#c9922a",
                    fontVariantNumeric: "tabular-nums",
                    fontFamily: "var(--font-noto-serif)",
                  }}
                >
                  {item.step}
                </span>
                <div>
                  <p
                    className="font-bold text-base mb-1"
                    style={{ color: "#0c1a33" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trust / Policy */}
      <section className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold text-center mb-10"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            安心して相談いただくために
          </h2>
          <ul
            className="space-y-3 p-6 rounded-2xl bg-white"
            style={{ border: "1px solid #e5e1d8" }}
          >
            {[
              "入会・契約の勧誘は一切行いません",
              "保護者のみ・生徒本人のみ、どちらのご相談も歓迎します",
              "匿名・ニックネームでのご利用が可能です",
              "営業メッセージの一斉配信はありません。ブロック・退会はいつでも可能です",
              "ご相談内容・個人情報は第三者に提供しません（プライバシーポリシー準拠）",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: "#3d3d3d" }}
              >
                <span style={{ color: "#06C755" }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}
          >
            よくある質問
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={`${faq.q}-${index}`}
                className="rounded-xl overflow-hidden group"
                style={{ border: "1px solid #e5e1d8" }}
              >
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19 9-7 7-7-7"
                    />
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
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #0c1a33 0%, #142b57 100%)",
        }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-2xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-noto-serif)" }}
          >
            まずは1通、メッセージを送ってみてください
          </h2>
          <p
            className="text-sm mb-8"
            style={{ color: "rgba(255,255,255,0.78)" }}
          >
            志望校が決まっていなくても、現時点の学力に自信がなくても大丈夫です。
            <br className="hidden sm:block" />
            30分の整理で、やるべきことが驚くほど明確になります。
          </p>

          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-white font-bold shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#06C755" }}
          >
            <svg viewBox="0 0 36 36" className="w-5 h-5" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18 3C9.716 3 3 8.476 3 15.224c0 6.03 5.327 11.08 12.525 12.03.487.104 1.15.32 1.318.735.15.377.098.967.049 1.347l-.212 1.276c-.065.377-.302 1.478 1.294.805 1.596-.673 8.618-5.076 11.76-8.691C31.95 20.267 33 17.87 33 15.224 33 8.476 26.284 3 18 3zm-6.18 14.36h-3.4c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484.266 0 .483.217.483.484v5.005h2.916c.266 0 .483.216.483.484 0 .267-.217.485-.483.485zm1.935-.484c0 .267-.217.485-.484.485-.267 0-.484-.218-.484-.485v-5.49c0-.267.217-.484.484-.484.267 0 .484.217.484.484v5.49zm6.35 0c0 .208-.133.393-.33.46-.05.015-.102.023-.154.023-.155 0-.3-.07-.393-.191l-2.82-3.86v3.568c0 .267-.217.485-.484.485-.266 0-.482-.218-.482-.485v-5.49c0-.207.132-.392.33-.459.05-.017.103-.024.153-.024.15 0 .297.07.39.192l2.826 3.86v-3.569c0-.267.216-.484.483-.484.267 0 .484.217.484.484v5.49zm3.922-3.228c.267 0 .484.218.484.485 0 .267-.217.485-.484.485h-1.938v.76h1.938c.266 0 .484.217.484.484s-.217.484-.484.484h-2.42c-.266 0-.483-.217-.483-.484v-5.49c0-.267.217-.484.484-.484h2.42c.266 0 .483.217.483.484 0 .268-.217.485-.484.485h-1.938v.76h1.938z"
              />
            </svg>
            LINEで無料相談を始める
          </a>
          <p
            className="text-xs mt-5"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            ※ 友だち追加後、いつでも受付中 / 営業時間内は1時間以内に返信
          </p>
        </div>
      </section>
    </div>
  );
}
