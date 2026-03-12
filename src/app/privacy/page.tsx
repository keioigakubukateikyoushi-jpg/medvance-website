export default function PrivacyPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8" style={{ color: "#142b57" }}>
          プライバシーポリシー
        </h1>
        <div className="space-y-6 text-sm md:text-base leading-relaxed" style={{ color: "#424f8f" }}>
          <p>
            Medvance（以下「当社」）は、ユーザーの個人情報の保護を重要と考え、以下のプライバシーポリシーを定めます。
          </p>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              1. 収集する情報
            </h2>
            <p>
              当社は、お問い合わせフォームを通じて、お名前・メールアドレス・電話番号・お問い合わせ内容などの個人情報を収集することがあります。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              2. 利用目的
            </h2>
            <p>
              収集した個人情報は、お問い合わせへの回答・指導サービスの提供・連絡事項のお伝えなど、サービス提供に必要な範囲でのみ使用します。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              3. 第三者への提供
            </h2>
            <p>
              法令に基づく場合を除き、ユーザーの同意なく個人情報を第三者に提供することはありません。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              4. 安全管理
            </h2>
            <p>
              個人情報の漏洩・紛失・改ざんを防ぐため、適切なセキュリティ対策を講じています。
            </p>
          </section>
          <section>
            <h2 className="text-lg font-bold mb-2" style={{ color: "#142b57" }}>
              5. お問い合わせ
            </h2>
            <p>
              プライバシーポリシーに関するご質問は、お問い合わせフォームよりご連絡ください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
