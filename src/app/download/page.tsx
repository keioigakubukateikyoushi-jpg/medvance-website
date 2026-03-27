"use client";

import { useState } from "react";
import Link from "next/link";

const chapters = [
  {
    num: "01",
    title: "医学部入試の全体像",
    points: [
      "私立医学部と国公立医学部の試験構造の違い",
      "1次試験・2次試験（面接・小論文）の配点と重要度",
      "競争倍率の実態と「合格ライン」の考え方",
    ],
  },
  {
    num: "02",
    title: "科目別・最短攻略法",
    points: [
      "英語：読解速度を上げる3つのトレーニング法",
      "数学：記述式で「部分点を最大化」する答案の書き方",
      "物理・化学：公式丸暗記から脱出する本質理解のアプローチ",
    ],
  },
  {
    num: "03",
    title: "合格者が実践した年間スケジュール",
    points: [
      "高3春・夏・秋・冬の優先事項と到達目標",
      "浪人生・再受験生向けの最短ルート設計",
      "過去問演習を始めるタイミングと使い方",
    ],
  },
  {
    num: "04",
    title: "面接・小論文の対策法",
    points: [
      "慶應・慈恵・順天堂など難関校の面接傾向",
      "医療倫理・生命科学テーマへの答え方",
      "面接で「思考の深さ」を見せる3つのポイント",
    ],
  },
  {
    num: "05",
    title: "合格者と不合格者を分ける5つの違い",
    points: [
      "勉強時間より「何を勉強するか」が重要な理由",
      "模試の偏差値に振り回されない学習管理法",
      "メンタル・体調管理の合格への影響",
    ],
  },
  {
    num: "06",
    title: "難関校別・攻略ポイント",
    points: [
      "慶應義塾大学医学部の英語・数学の特徴と対策",
      "私立上位校（慈恵・順天堂・日本医科）の傾向",
      "国公立医学部との併願戦略",
    ],
  },
];

export default function DownloadPage() {
  const [formData, setFormData] = useState({ name: "", email: "", status: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }
      setSubmitted(true);
      // スムーズにマニュアルへスクロール
      setTimeout(() => {
        document.getElementById("manual-content")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ─────────────────────────────── */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold mb-6" style={{ backgroundColor: "rgba(201,146,42,0.2)", color: "#c9922a", border: "1px solid rgba(201,146,42,0.4)" }}>
            無料配布中
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-snug" style={{ fontFamily: "'Noto Serif JP', serif" }}>
            医学部受験戦略マニュアル
          </h1>
          <p className="text-base mb-3 font-semibold" style={{ color: "#c9922a" }}>
            現役慶應医学部生が書いた、合格のための完全ガイド
          </p>
          <p className="text-sm leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
            科目別対策・年間スケジュール・面接対策・難関校攻略まで。
            受験生が本当に知りたかった情報を、合格者目線でまとめました。
          </p>
          {/* 特徴バッジ */}
          <div className="flex flex-wrap justify-center gap-3">
            {["完全無料", "6章構成", "現役慶應医学部生 監修", "メールで即時受け取り"].map((b) => (
              <span key={b} className="text-xs px-3 py-1.5 rounded-full font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)" }}>
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── 目次プレビュー + フォーム ──────────── */}
      <div className="py-16 px-4" style={{ backgroundColor: "#f7f5f0" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_360px] gap-10 items-start">

            {/* 目次 */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "#c9922a" }}>Contents</p>
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>
                マニュアルの内容
              </h2>
              <div className="space-y-4">
                {chapters.map((ch) => (
                  <div key={ch.num} className="p-5 rounded-xl bg-white" style={{ border: "1px solid #e5e1d8" }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold" style={{ color: "#c9922a" }}>Chapter {ch.num}</span>
                      <span className="font-bold text-sm" style={{ color: "#0c1a33" }}>{ch.title}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {ch.points.map((p, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs" style={{ color: "#6b7280" }}>
                          <span className="flex-shrink-0 mt-0.5" style={{ color: "#c9922a" }}>▸</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* フォーム */}
            <div className="md:sticky md:top-8">
              <div className="rounded-2xl p-7 bg-white shadow-md" style={{ border: "2px solid #c9922a" }}>
                {submitted ? (
                  <div className="text-center py-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl" style={{ backgroundColor: "rgba(201,146,42,0.1)", border: "2px solid #c9922a" }}>
                      ✓
                    </div>
                    <h3 className="font-bold text-base mb-2" style={{ color: "#0c1a33" }}>受け取り完了</h3>
                    <p className="text-xs mb-4" style={{ color: "#6b7280" }}>
                      ご登録のメールアドレスにマニュアルのURLをお送りしました。<br />
                      このまま下にスクロールしてお読みいただけます。
                    </p>
                    <a
                      href="#manual-content"
                      className="block text-center py-3 rounded-lg font-bold text-sm text-white hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: "#c9922a" }}
                    >
                      マニュアルを読む ↓
                    </a>
                  </div>
                ) : (
                  <>
                    <p className="font-bold text-center text-base mb-1" style={{ color: "#0c1a33" }}>無料で受け取る</p>
                    <p className="text-xs text-center mb-5" style={{ color: "#6b7280" }}>メールアドレスを登録してすぐ読めます</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                          お名前 <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                        </label>
                        <input
                          type="text" required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none"
                          style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                          placeholder="山田 太郎"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                          メールアドレス <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                        </label>
                        <input
                          type="email" required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none"
                          style={{ border: "1px solid #e5e1d8", color: "#0c1a33" }}
                          placeholder="example@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold mb-1.5" style={{ color: "#0c1a33" }}>
                          現在の状況 <span className="text-white text-xs px-1.5 py-0.5 rounded ml-1" style={{ backgroundColor: "#c9922a" }}>必須</span>
                        </label>
                        <select
                          required
                          value={formData.status}
                          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                          className="w-full rounded-lg px-3 py-2.5 text-sm focus:outline-none bg-white"
                          style={{ border: "1px solid #e5e1d8", color: formData.status ? "#0c1a33" : "#9ca3af" }}
                        >
                          <option value="" disabled>選択してください</option>
                          <option value="現役高校生（高1・高2）">現役高校生（高1・高2）</option>
                          <option value="現役高校生（高3）">現役高校生（高3）</option>
                          <option value="浪人生">浪人生</option>
                          <option value="再受験生（社会人・大学生）">再受験生（社会人・大学生）</option>
                          <option value="保護者">保護者</option>
                        </select>
                      </div>
                      {error && <p className="text-red-600 text-xs">{error}</p>}
                      <button
                        type="submit" disabled={loading}
                        className="w-full py-3.5 text-white font-bold text-sm rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                        style={{ backgroundColor: "#c9922a" }}
                      >
                        {loading ? "送信中..." : "無料でマニュアルを受け取る"}
                      </button>
                      <p className="text-xs text-center" style={{ color: "#9ca3af" }}>
                        勧誘・営業メールは一切送りません
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* 無料相談へのリンク */}
              <div className="mt-4 p-4 rounded-xl text-center" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                <p className="text-xs mb-2" style={{ color: "#6b7280" }}>もっと詳しく相談したい方は</p>
                <Link href="/contact" className="text-sm font-bold hover:underline" style={{ color: "#c9922a" }}>
                  無料相談（30分）を申し込む →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── マニュアル本文（フォーム送信後に表示） ── */}
      {submitted && (
        <div id="manual-content" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Medical School Strategy Manual</p>
              <h2 className="text-3xl font-bold mb-2" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>医学部受験戦略マニュアル</h2>
              <p className="text-sm" style={{ color: "#6b7280" }}>現役慶應医学部生 監修</p>
            </div>

            <div className="space-y-12">

              {/* Chapter 01 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 01</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>医学部入試の全体像</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  <p>医学部入試は、大きく「私立医学部」と「国公立医学部」に分かれます。この2つは試験の構造・難易度・対策法が根本的に異なります。</p>
                  <p><strong>私立医学部</strong>は、1次試験（英語・数学・理科）と2次試験（小論文・面接）の二段階選抜が基本です。1次試験の配点比率が高く、特に英語と数学での得点が合否を大きく左右します。慶應・慈恵・順天堂などの難関校では、思考力・記述力を問う形式が多く、単純な知識量だけでは勝てません。</p>
                  <p><strong>国公立医学部</strong>は、共通テストと二次試験の両方が必要です。共通テストで80〜85%以上の得点が求められるため、全科目の底上げが不可欠です。</p>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <p className="font-bold mb-2" style={{ color: "#c9922a" }}>合格ラインの現実</p>
                    <p>私立難関（慶應・慈恵）では、1次試験合格ラインは英数理の合計で7〜8割程度が目安。ただし「平均点が下がる年度」に強い受験生が合格する傾向があり、満点を取る必要はありません。「他の受験生が間違える問題を正解する」より「他の受験生が正解する問題を確実に取る」方が重要です。</p>
                  </div>
                </div>
              </section>

              {/* Chapter 02 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 02</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>科目別・最短攻略法</h3>
                </div>
                <div className="space-y-6 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  <div>
                    <p className="font-bold mb-2" style={{ color: "#0c1a33" }}>英語：速度と精度の両立</p>
                    <p>医学部英語で最も多い失敗が「時間切れ」です。長文の量が多く、読解スピードが直接得点に影響します。目標は1分あたり100語以上の読解速度。毎日時間を計りながら長文を読む習慣を3ヶ月続けることで、多くの受験生が大幅に改善しています。英作文は「採点者が読んで伝わる文章」かどうかがポイント。難しい表現より、正確な構文で書くことを優先してください。</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2" style={{ color: "#0c1a33" }}>数学：答えより「過程」が評価される</p>
                    <p>記述式の数学では、答えが正しくても論証が不十分だと減点されます。「式を書いて答えを出す」ではなく、「採点者が読んで納得できる答案」を書く練習が必要です。具体的には、問題を解いた後に「なぜこの解法を選んだか」を言語化する習慣をつけてください。友人や講師に「この解答で意図が伝わるか」を確認してもらうのが効果的です。</p>
                  </div>
                  <div>
                    <p className="font-bold mb-2" style={{ color: "#0c1a33" }}>物理・化学：公式より「なぜ」を理解する</p>
                    <p>難関医学部の理科は、公式を当てはめるだけでは解けない問題が多い。特に物理は「この状況でどの法則が適用できるか」を自分でモデル化する力が求められます。化学の有機構造決定は、反応機構を根拠に論理を組み立てる力が必要。教科書の定義や原理を「自分の言葉で説明できる」レベルまで理解することが近道です。</p>
                  </div>
                </div>
              </section>

              {/* Chapter 03 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 03</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格者が実践した年間スケジュール</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  {[
                    { period: "高3春（4〜6月）", body: "英語の読解速度トレーニング開始。数学は記述答案の練習を本格スタート。理科は教科書の原理理解の仕上げ。この時期に「方向性」を固めることが最重要。" },
                    { period: "高3夏（7〜8月）", body: "応用問題への移行。英語は英作文の本格練習。数学は時間内に論証を完成させる訓練。小論文・面接の準備も夏から始める（3ヶ月前が最低ライン）。" },
                    { period: "高3秋（9〜11月）", body: "志望校の過去問演習スタート。「採点者視点」で過去問を分析し、何が求められているかを理解する。複数校受験のスケジュール管理もこの時期に整理。" },
                    { period: "直前期（12月〜本番）", body: "過去問の最終確認と弱点補強。面接の最終模擬練習。体調管理と睡眠を最優先に。新しい参考書には手を出さない。" },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                      <p className="font-bold mb-2 text-xs" style={{ color: "#c9922a" }}>{item.period}</p>
                      <p>{item.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Chapter 04 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 04</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>面接・小論文の対策法</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  <p>面接と小論文は「直前にやればいい」と思われがちですが、慶應・慈恵などの難関校では準備なしでは対応できません。理由は、問われる内容が「医療倫理・生命科学・社会問題」であり、知識の蓄積に時間がかかるからです。</p>
                  <p><strong>小論文</strong>は、医療ニュース・書籍を定期的にインプットし、自分の意見をノートに書き留める習慣を高3の夏から始めてください。「賛否を述べる」ではなく「多面的に考えて自分の立場を示す」構成が高評価につながります。</p>
                  <p><strong>面接</strong>では、「なぜ医師になりたいのか」の答えを深掘りする練習が不可欠です。表面的な動機ではなく、体験・経験に基づいた具体的なストーリーが評価されます。模擬面接を外部の視点で複数回行うことが、本番での緊張軽減につながります。</p>
                </div>
              </section>

              {/* Chapter 05 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 05</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>合格者と不合格者を分ける5つの違い</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { num: "1", title: "「何を勉強するか」を常に考えている", body: "合格者は「今日何時間勉強したか」ではなく「今日何を理解できたか」を基準にしています。時間より質を優先する意識の差が、長期的な成長の差につながります。" },
                    { num: "2", title: "模試の偏差値に一喜一憂しない", body: "模試は現状確認のツールです。合格者は模試の結果より「何が原因で間違えたか」の分析に時間をかけています。偏差値が上がる前に「解けるべき問題が解けるようになる」フェーズを大切にしてください。" },
                    { num: "3", title: "わからない問題を放置しない", body: "「わかったふり」のまま先に進むのが最大の失敗パターンです。合格者は「なぜそうなるか」を説明できるまで一つの概念に向き合います。" },
                    { num: "4", title: "志望校の問題形式に早く慣れる", body: "各大学の出題形式・難易度・時間配分は異なります。合格者は早い段階から志望校の過去問を分析し、「この大学では何が求められるか」を理解した上で学習します。" },
                    { num: "5", title: "体調・メンタルを戦略的に管理する", body: "本番当日に実力を発揮できるかは、直前1ヶ月の体調管理にかかっています。合格者は直前期に無理な詰め込みをせず、睡眠・運動・食事を優先します。" },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4 p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: "#c9922a" }}>{item.num}</span>
                      <div className="text-sm" style={{ color: "#3d3d3d" }}>
                        <p className="font-bold mb-1" style={{ color: "#0c1a33" }}>{item.title}</p>
                        <p className="leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Chapter 06 */}
              <section>
                <div className="flex items-center gap-3 mb-5 pb-3" style={{ borderBottom: "2px solid #c9922a" }}>
                  <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: "#c9922a" }}>Chapter 06</span>
                  <h3 className="text-xl font-bold" style={{ color: "#0c1a33", fontFamily: "'Noto Serif JP', serif" }}>難関校別・攻略ポイント</h3>
                </div>
                <div className="space-y-5 text-sm leading-relaxed" style={{ color: "#3d3d3d" }}>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <p className="font-bold mb-2" style={{ color: "#c9922a" }}>慶應義塾大学医学部</p>
                    <p>英語は長文の量が多く読解速度が鍵。数学は記述形式で論証力が問われる。面接はグループ・個人の二段階構成で、医療倫理への深い見識が必要。早期から小論文・面接の準備を始めることが合格のカギ。</p>
                  </div>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <p className="font-bold mb-2" style={{ color: "#c9922a" }}>慈恵医科大学・順天堂大学・日本医科大学</p>
                    <p>私立上位3校はいずれも英語・数学の難易度が高い。慈恵は数学の難問への対応力、順天堂は英語の速度と正確性、日本医科は理科の計算精度が重要。過去問での傾向把握と、時間配分の練習が合否を分ける。</p>
                  </div>
                  <div className="p-5 rounded-xl" style={{ backgroundColor: "#f7f5f0", border: "1px solid #e5e1d8" }}>
                    <p className="font-bold mb-2" style={{ color: "#c9922a" }}>国公立医学部との併願戦略</p>
                    <p>私立と国公立を併願する場合、共通テストの準備が負担になりがちです。私立に特化するか、国公立も視野に入れるかは、現在の学力と残り期間によって判断が変わります。まずは現状分析と志望校の優先順位の整理から始めてください。</p>
                  </div>
                </div>
              </section>

              {/* CTA */}
              <div className="rounded-2xl p-8 text-center" style={{ backgroundColor: "#0c1a33" }}>
                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>Next Step</p>
                <h3 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "'Noto Serif JP', serif" }}>
                  マニュアルを読んだ次は、無料相談へ
                </h3>
                <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  あなたの現状・志望校・悩みをヒアリングして、具体的な合格プランをお伝えします。
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#c9922a" }}
                >
                  無料相談を申し込む（30分）
                </Link>
                <p className="text-xs mt-3" style={{ color: "rgba(255,255,255,0.35)" }}>
                  完全無料・勧誘なし・全国オンライン対応
                </p>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* フォーム未送信時のティーザー */}
      {!submitted && (
        <div className="py-16 px-4 text-center" style={{ backgroundColor: "#0c1a33" }}>
          <p className="text-sm mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
            マニュアルの内容は、登録後すぐにお読みいただけます
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            ↑ 上のフォームからメールアドレスを登録してください
          </p>
        </div>
      )}

    </div>
  );
}
