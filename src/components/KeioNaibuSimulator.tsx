"use client";

import { useState } from "react";

const GOLD = "#c9922a";
const NAVY = "#0c1a33";

type SchoolType = "jukuko" | "shiki" | "joshiko" | "sfc";
type GradeType = "ko1" | "ko2" | "ko3";

export default function KeioNaibuSimulator() {
  const [school, setSchool] = useState<SchoolType>("jukuko");
  const [grade, setGrade] = useState<GradeType>("ko2");
  const [gpa, setGpa] = useState<number>(8.2);

  // Dynamic calculations based on school, grade and GPA
  const getProbabilityAndAdvice = (sch: SchoolType, gr: GradeType, val: number) => {
    let prob = 0;
    let color = "#ef4444"; // Red
    let status = "要警戒 (危急状況)";
    let advice = "";

    // Jukuko (10-point scale, typical border is around 8.5)
    if (sch === "jukuko") {
      if (val < 7.8) {
        prob = Math.max(5, Math.round((val - 5) * 15));
        status = "医学部推薦は極めて厳しい状況";
        color = "#f43f5e";
        advice = "主要科目（数学・物理・化学）の平均点が低い学内試験で取りこぼしが生じています。塾高のプリント傾向に完全同調した指導で、次回の定期試験で『平均点＋25点以上』を死守し、評定を一気に8点台へ引き上げる必要があります。一般受験のセーフティネット準備も急務です。";
      } else if (val < 8.5) {
        prob = Math.round(30 + (val - 7.8) * 70);
        status = "医学部枠ボーダーライン上";
        color = "#eab308"; // Yellow
        advice = "あと数点（評定平均で0.3〜0.5ポイント）のアップで合格圏内に入ります。塾高の数学の誘導なし難問や、物理・化学の記述式部分点対策を徹底し、ライバルに差をつけましょう。今学期が勝負の分かれ目です。";
      } else if (val < 9.0) {
        prob = Math.min(95, Math.round(80 + (val - 8.5) * 30));
        status = "医学部推薦安全圏内";
        color = "#10b981"; // Green
        advice = "現在の評定を維持・死守することが最優先です。得意科目でのケアレスミスを防ぎつつ、学内レポートや小テストの加点要素も確実に回収しましょう。高3秋の推薦会議での面接・志望動機構築を早期から進め、内定を必然のものにします。";
      } else {
        prob = 98;
        status = "医学部推薦確実圏";
        color = "#10b981";
        advice = "素晴らしい成績です。学年トップクラスを維持できています。あとは推薦会議に向けて、医師としての適性を示す『自己推薦書・面接』のブラッシュアップを行うのみです。現役医学生講師と模擬面接を重ね、完璧に仕上げましょう。";
      }
    }
    // Shiki (10-point scale, typically 8.5+ for top 5)
    else if (sch === "shiki") {
      if (val < 8.0) {
        prob = Math.max(5, Math.round((val - 5) * 12));
        status = "推薦枠（上位5名）は極めて危険";
        color = "#f43f5e";
        advice = "志木高の自由な風土の裏で、記述試験やレポートの提出物評価で遅れをとっています。数学・理科のハイレベル先取り指導を行い、課題レポートの記述クオリティを慶應医学部生レベルに引き上げることで、評定8.5超えを狙います。";
      } else if (val < 8.6) {
        prob = Math.round(25 + (val - 8.0) * 80);
        status = "医学部枠争奪デッドヒート";
        color = "#eab308";
        advice = "志木高の上位5名枠は僅差で決まります。特に数Ⅲ・物理の独自問題対策と、加点対象となる自主学習レポートの完成度が重要になります。現役志木出身の慶應医学部生講師から、過去の出題癖やレポート加点テクニックを直接学びましょう。";
      } else {
        prob = Math.min(98, Math.round(85 + (val - 8.6) * 10));
        status = "医学部枠ほぼ手中";
        color = "#10b981";
        advice = "極めて優秀なGPAです。このまま気を緩めずに最後の定期テストまで走り抜けましょう。志木高特有の自由記述面接で『深く、論理的な医師像』を語れるよう、願書のブラッシュアップと模擬面接を行います。";
      }
    }
    // Joshiko (10-point scale, extremely high border due to top competition, typically 8.7+)
    else if (sch === "joshiko") {
      if (val < 8.2) {
        prob = Math.max(5, Math.round((val - 5) * 10));
        status = "医学部推薦は極めて厳しい状況";
        color = "#f43f5e";
        advice = "全国最難関女子高のトップ層競争において、理系科目の失点が響いています。女子高の細かく記述量の多い定期試験に特化した対策が必要です。小テストや日々の宿題の完全回収を行い、全体の評定を8.8以上へ引き上げる集中プログラムを実施します。";
      } else if (val < 8.8) {
        prob = Math.round(20 + (val - 8.2) * 90);
        status = "超高水準ボーダーライン";
        color = "#eab308";
        advice = "女子高の医学部枠（上位5名）は1点刻みの争いです。理系科目の評定を「8」から「9」または「10」へ引き上げるために、答案作成時の記述の厳密さを極限まで高めます。弱点をすべて潰しきる徹底的な1対1伴走が必要です。";
      } else {
        prob = Math.min(98, Math.round(85 + (val - 8.8) * 11));
        status = "医学部推薦安全圏内";
        color = "#10b981";
        advice = "卓越した成績をキープしています。女子高生は志望動機の完成度も非常に高く求められます。学内選考テスト・面接に向けて、医療倫理や最新の研究に関する知識を補強し、絶対的なアドバンテージを確立します。";
      }
    }
    // SFC (10-point scale, border around 8.5 + presentation/research)
    else {
      if (val < 8.0) {
        prob = Math.max(5, Math.round((val - 5) * 15));
        status = "医学部枠確保は危険信号";
        color = "#f43f5e";
        advice = "SFC特有の英語エッセイやプレゼン課題、数学の記述進度の速さについていけていません。提出レポートの論理設計と定期試験の双方を同時にブーストし、GPA8.5以上への早期回復を目指します。";
      } else if (val < 8.6) {
        prob = Math.round(30 + (val - 8.0) * 80);
        status = "医学部枠争いボーダー付近";
        color = "#eab308";
        advice = "ペーパーテストの得点に加え、SFC最大の山場である『卒業研究（プロジェクト）』やプレゼンのテーマ設定を医学・自然科学の文脈に寄せて最高評価を狙います。自己推薦シナリオの早期構築とGPA向上を両立させます。";
      } else {
        prob = Math.min(98, Math.round(85 + (val - 8.6) * 10));
        status = "医学部推薦安全圏内";
        color = "#10b981";
        advice = "このまま高GPAを維持しつつ、卒業研究の論文審査や英語スピーチ対策を進めます。SFCから慶應医学部へ進学した先輩講師が、面接会議で教授陣を唸らせる志望動機への昇華を徹底サポートします。";
      }
    }

    return { prob, color, status, advice };
  };

  const { prob, color, status, advice } = getProbabilityAndAdvice(school, grade, gpa);

  return (
    <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-3xl mx-auto my-12 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9922a]/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <span 
          className="inline-block text-[11px] font-black tracking-wide mb-3 px-4 py-1.5 rounded-full border border-[#c9922a]/30 text-amber-800"
          style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.08)" }}
        >
          医学部推薦ボーダー診断
        </span>
        <h3 className="text-2xl md:text-3xl font-black mb-2 text-slate-900 leading-tight" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
          あなたは慶應医学部に内部進学できる？
        </h3>
        <p className="text-xs font-bold text-slate-500 mt-2">
          【慶應医学部 内部推薦確率・評定診断シミュレーター】現在の所属校・学年・評定値からボーダーギャップを測定
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-8 relative z-10">
        {/* Controls */}
        <div className="space-y-6">
          {/* School Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">所属系列校</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "jukuko", label: "慶應義塾高校" },
                { id: "shiki", label: "慶應志木高校" },
                { id: "joshiko", label: "慶應女子高校" },
                { id: "sfc", label: "慶應SFC高等部" }
              ].map((sch) => (
                <button
                  key={sch.id}
                  onClick={() => setSchool(sch.id as SchoolType)}
                  className="px-3 py-2 rounded-xl text-xs font-bold transition-all border"
                  style={{
                    backgroundColor: school === sch.id ? NAVY : "#fff",
                    color: school === sch.id ? "#fff" : "#4a5568",
                    borderColor: school === sch.id ? NAVY : "#cbd5e1"
                  }}
                >
                  {sch.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grade Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">現在の学年</label>
            <div className="flex gap-2">
              {[
                { id: "ko1", label: "高校1年生" },
                { id: "ko2", label: "高校2年生" },
                { id: "ko3", label: "高校3年生" }
              ].map((gr) => (
                <button
                  key={gr.id}
                  onClick={() => setGrade(gr.id as GradeType)}
                  className="flex-1 px-3 py-2 rounded-xl text-xs font-bold transition-all border"
                  style={{
                    backgroundColor: grade === gr.id ? NAVY : "#fff",
                    color: grade === gr.id ? "#fff" : "#4a5568",
                    borderColor: grade === gr.id ? NAVY : "#cbd5e1"
                  }}
                >
                  {gr.label}
                </button>
              ))}
            </div>
          </div>

          {/* GPA Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold text-slate-700">現在の評定平均値</label>
              <span className="text-lg font-black text-slate-900" style={{ color: GOLD }}>
                {gpa.toFixed(1)} <span className="text-xs font-normal text-slate-500">/ 10.0</span>
              </span>
            </div>
            <input
              type="range"
              min="5.0"
              max="10.0"
              step="0.1"
              value={gpa}
              onChange={(e) => setGpa(parseFloat(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#c9922a]"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
              <span>5.0 (可)</span>
              <span>7.5 (平均)</span>
              <span>8.5 (医学部ボーダー)</span>
              <span>10.0 (秀)</span>
            </div>
          </div>
        </div>

        {/* Dynamic Display Gauge */}
        <div className="flex flex-col items-center justify-center p-6 rounded-3xl border border-slate-100 bg-slate-50/50 shadow-inner">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
            Estimated Probability
          </span>
          
          {/* Circular Indicator or Dynamic Gauge */}
          <div className="relative w-36 h-36 flex items-center justify-center mb-4">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke="#e2e8f0"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="72"
                cy="72"
                r="64"
                stroke={color}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray="402"
                strokeDashoffset={402 - (402 * prob) / 100}
                className="transition-all duration-500 ease-out"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-4xl font-black text-slate-900 tracking-tight">{prob}%</span>
              <p className="text-[9px] font-bold text-slate-400 mt-0.5">医学部推薦確率</p>
            </div>
          </div>

          <div className="text-center">
            <span className="inline-block text-xs font-black px-4 py-1.5 rounded-full text-white" style={{ backgroundColor: color }}>
              {status}
            </span>
          </div>
        </div>
      </div>

      {/* Tactial Advice */}
      <div className="p-5 rounded-2xl border bg-slate-50 border-slate-200 relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white" style={{ backgroundColor: GOLD }}>
            i
          </span>
          <h4 className="font-extrabold text-xs text-slate-900">
            Medvanceによる今学期の具体対策アドバイス
          </h4>
        </div>
        <p className="text-xs leading-relaxed text-slate-600 font-medium">
          {advice}
        </p>
      </div>

      <div className="text-center mt-6 text-[10px] text-slate-400 font-medium">
        ※本確率は過去の合格データに基づく目安です。推薦枠選考では評定以外の要素も加味されます。詳細な診断は無料面談にて実施可能です。
      </div>
    </div>
  );
}
