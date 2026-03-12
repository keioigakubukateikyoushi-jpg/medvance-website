import Link from "next/link";

export default function SubjectsPage() {
  return (
    <div className="py-16 px-4 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: "#142b57" }}>
          各教科の指導方法・勉強方法
        </h1>
        <p className="text-center mb-12 text-base" style={{ color: "#424f8f" }}>
          「わかるまで、分かるように」——一人ひとりに寄り添う、本質的な受験指導
        </p>

        <div className="mb-10 p-6 rounded-lg" style={{ backgroundColor: "#d1d3ca" }}>
          <p className="text-base leading-relaxed" style={{ color: "#142b57" }}>
            Medvanceでは、「ただ教える」だけでは終わりません。講師は、生徒が&quot;どこでつまずいているのか&quot;を丁寧に観察し、的確に見抜いたうえで、ピンポイントに解消していきます。
            各科目の詳しい指導方法・勉強方法については、以下のページをご覧ください。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: "🧠",
              label: "英語",
              href: "/subjects/english",
              desc: "読解・英作文・文法を本質から理解する指導",
            },
            {
              icon: "📐",
              label: "数学",
              href: "/subjects/math",
              desc: "思考力を育てる、本質的な数学指導",
            },
            {
              icon: "⚛",
              label: "物理",
              href: "/subjects/physics",
              desc: "原理原則から理解する物理指導",
            },
            {
              icon: "🧪",
              label: "化学",
              href: "/subjects/chemistry",
              desc: "体系的に学ぶ化学の指導方法",
            },
            {
              icon: "🧬",
              label: "生物",
              href: "/subjects/biology",
              desc: "医学部生物に特化した指導",
            },
          ].map((subject) => (
            <Link
              key={subject.href}
              href={subject.href}
              className="flex gap-4 p-6 rounded-lg hover:shadow-md transition-shadow"
              style={{ backgroundColor: "#f9f9f8", border: "1px solid #d1d3ca" }}
            >
              <span className="text-3xl flex-shrink-0">{subject.icon}</span>
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#142b57" }}>
                  {subject.label}
                </p>
                <p className="text-sm" style={{ color: "#424f8f" }}>
                  {subject.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
