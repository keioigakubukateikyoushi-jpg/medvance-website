import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie設定",
  description:
    "Medvance（メドバンス）のCookie（クッキー）の利用についてのご案内と設定方法を掲載しています。",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "#142b57" }}>
          Cookie設定
        </h1>
        <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ color: "#424f8f" }}>
          <p>
            当サイトでは、ユーザー体験の向上を目的としてCookieを使用することがあります。
          </p>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              Cookieとは
            </h2>
            <p>
              Cookieとは、ウェブサイトがブラウザに保存する小さなテキストファイルです。
              サイトへの再訪問時に、設定や閲覧情報を認識するために使用されます。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              使用するCookieの種類
            </h2>
            <ul className="space-y-2 list-disc ml-5">
              <li>必須Cookie：サイトの基本機能に必要なCookie</li>
              <li>分析Cookie：サイトの利用状況を把握するためのCookie（Google Analytics 4 等）</li>
              <li>行動分析Cookie：ヒートマップ等（Microsoft Clarity を有効にしている場合）</li>
              <li>流入経路の保存：初回ランディング・UTM 等をブラウザの localStorage に保持し、お問い合わせ時の経路把握に利用（氏名等の個人情報は含みません）</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              Cookieの無効化
            </h2>
            <p>
              ブラウザの設定からCookieを無効にすることができます。ただし、一部の機能が利用できなくなる場合があります。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
