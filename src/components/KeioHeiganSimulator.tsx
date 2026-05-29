"use client";

import { useState } from "react";

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";

type PathwayPhase = "ko1" | "ko2_1" | "ko2_2" | "ko3_1" | "ko3_2";

export default function KeioHeiganSimulator() {
  const [phase, setPhase] = useState<PathwayPhase>("ko2_1");

  const getPhaseData = (p: PathwayPhase) => {
    switch (p) {
      case "ko1":
        return {
          title: "高1期：学校評定絶対安定 ＆ 英数先取り基礎期",
          ratioNaibu: 90,
          ratioGaibu: 10,
          focus: "主要科目（数学I A・英文法）の学内テストで常に『評定9以上』を維持するための習慣化。定期テスト範囲に絞った学習で100%の理解を目指します。",
          safety: "一般受験を意識した『英単語』『計算スピード』のデイリー先取り学習を毎日15分タスクとして実施。無理のない学習ベースを構築します。",
          targets: "学校の評定最大化に全パワーを注ぎ、医学部ルート（推薦枠）の第一集団に入り込むことを目標とします。"
        };
      case "ko2_1":
        return {
          title: "高2前半：内部成績維持 ＆ 一般模試A判定射程期",
          ratioNaibu: 75,
          ratioGaibu: 25,
          focus: "数II B・物理・化学の授業プリントの難問攻略。定期テストでは平均点＋20点以上をキープし、評定平均を8.5以上に安定させます。",
          safety: "駿台模試・河合模試などの外部全国模試を年3回以上受験し、偏差値65以上（医学部B判定以上）をターゲットに設定。数I A・II Bの『一般入試の典型難問』の解法パターンをデータベースで配信・インプット開始します。",
          targets: "慶應医（推薦）、千葉大（医）、横浜市立大（医）、慈恵・順天堂など超難関校へのベースを両立します。"
        };
      case "ko2_2":
        return {
          title: "高2後半：実戦力アドオン ＆ 数Ⅲ・理科応用演習期",
          ratioNaibu: 60,
          ratioGaibu: 40,
          focus: "学校での数Ⅲ・化学・物理の進度の速さに同調し、評定を落とさない対策を継続。レポートや小テストの点数も完璧に回収します。",
          safety: "冬までに数Ⅲ・理科（有機化学・電磁気など）の『一般入試レベル』の問題集演習を15分スケジュールに自動配分。忘却曲線を制御する脳科学復習モデルにタスクを載せ、長期記憶に定着させます。",
          targets: "順天堂大（医）、日本医科大（医）、昭和大（医）の合格力を一般ルートで同時に養成。"
        };
      case "ko3_1":
        return {
          title: "高3前半：最終評定確定 ＆ 過去問シナジー最大化期",
          ratioNaibu: 50,
          ratioGaibu: 50,
          focus: "評定平均の算出に関わる最後の定期テスト（1学期中間・期末）で自己最高得点をもぎ取ります。推薦用志望動機書の草稿を慶應医学生講師と添削開始。",
          safety: "併願予定である慈恵・順天堂・昭和の過去問から、慶應附属校のレジュメと関連性の高い『記述式良問』を抽出して演習。一般受験での現役合格率を極限まで高めます。",
          targets: "慶應医（推薦枠）、国公立医学部、慈恵・順天堂・日医の併願W合格ラインに到達させます。"
        };
      case "ko3_2":
      default:
        return {
          title: "高3後半：推薦内定最終選考 ＆ 一般直前総仕上げ期",
          ratioNaibu: 30,
          ratioGaibu: 70,
          focus: "内部推薦確定ボーダーを超えている場合は、学内の模擬面接・志望動機書・小論文を完璧に仕上げて推薦合格を確定させます。",
          safety: "僅差のボーダーで推薦確定を待つ間も一切緩まず、私立医学部一般入試および共通テストに向けた『過去問10年分演習』と苦手単元のAI個別総復習を実行。推薦確定日に万が一漏れた場合でも、その瞬間に一般入試の絶対合格者として仕上がっている状態を作ります。",
          targets: "慶應医（内定）または、慈恵・順天堂・日医・昭和・東邦・国公立医の一般受験現役突破。"
        };
    }
  };

  const { title, ratioNaibu, ratioGaibu, focus, safety, targets } = getPhaseData(phase);

  return (
    <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl max-w-3xl mx-auto my-12 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#c9922a]/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sky-500/5 rounded-full blur-2xl pointer-events-none"></div>

      <div className="text-center mb-8 relative z-10">
        <span 
          className="inline-block text-[9px] font-black tracking-[0.35em] uppercase mb-3 px-3 py-1 rounded-full border border-[#c9922a]/30"
          style={{ color: GOLD, backgroundColor: "rgba(201,146,42,0.06)" }}
        >
          Study Ratio Calculator
        </span>
        <h3 className="text-xl md:text-2xl font-bold" style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}>
          内部推薦 ＆ 外部一般受験 「学習時間・配分シミュレーター」
        </h3>
        <p className="text-xs text-slate-500 mt-2">
          学年や進捗フェーズを選択し、両立時に取るべき黄金比率と、今すぐやるべき両立アクションプランを可視化します。
        </p>
      </div>

      {/* Phase Navigation Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 relative z-10">
        {[
          { id: "ko1", label: "高1期" },
          { id: "ko2_1", label: "高2前半" },
          { id: "ko2_2", label: "高2後半" },
          { id: "ko3_1", label: "高3前半" },
          { id: "ko3_2", label: "高3後半" }
        ].map((btn) => (
          <button
            key={btn.id}
            onClick={() => setPhase(btn.id as PathwayPhase)}
            className="px-4 py-2.5 rounded-xl text-xs font-black transition-all border"
            style={{
              backgroundColor: phase === btn.id ? NAVY : "#fff",
              color: phase === btn.id ? "#fff" : "#4a5568",
              borderColor: phase === btn.id ? NAVY : "#cbd5e1"
            }}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Phase Title Card */}
      <div className="text-center p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6 relative z-10">
        <h4 className="font-extrabold text-sm text-slate-900" style={{ color: GOLD }}>
          {title}
        </h4>
      </div>

      {/* Dynamic Visual Ratio Bar */}
      <div className="mb-8 relative z-10">
        <div className="flex justify-between text-xs font-black text-slate-700 mb-2">
          <span>学校成績・評定対策（推薦枠確保）</span>
          <span>一般受験・記述対策（セーフティネット）</span>
        </div>
        <div className="w-full h-8 rounded-full overflow-hidden flex shadow-inner border border-slate-200">
          <div 
            className="h-full flex items-center justify-center text-xs font-black text-white transition-all duration-500 ease-out"
            style={{ 
              width: `${ratioNaibu}%`, 
              backgroundColor: NAVY, 
              background: `linear-gradient(45deg, ${NAVY}, ${NAVY_LIGHT})` 
            }}
          >
            {ratioNaibu}%
          </div>
          <div 
            className="h-full flex items-center justify-center text-xs font-black text-white transition-all duration-500 ease-out"
            style={{ 
              width: `${ratioGaibu}%`, 
              backgroundColor: GOLD, 
              background: `linear-gradient(45deg, ${GOLD}, ${GOLD_SOFT})` 
            }}
          >
            {ratioGaibu}%
          </div>
        </div>
        <div className="flex justify-between text-[9px] text-slate-400 font-bold mt-2 px-1">
          <span>※日々の学校予習復習・レポート・テスト範囲対策</span>
          <span>※一般過去問・模試対策・先取り問題演習</span>
        </div>
      </div>

      {/* Action Plan Cards */}
      <div className="grid gap-4 relative z-10">
        {/* Core Focus Card */}
        <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black text-white" style={{ backgroundColor: NAVY }}>
              ★
            </span>
            <h5 className="font-black text-xs text-slate-900">
              学校の定期試験・評定（GPA）対策の最重要ポイント
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-500 font-medium">
            {focus}
          </p>
        </div>

        {/* Safety Net Action Card */}
        <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black text-white" style={{ backgroundColor: GOLD }}>
              ✓
            </span>
            <h5 className="font-black text-xs text-slate-900">
              一般受験セーフティネットの準備アクション
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-500 font-medium">
            {safety}
          </p>
        </div>

        {/* Targets Card */}
        <div className="p-5 rounded-2xl border border-slate-100 bg-white shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-black text-white" style={{ backgroundColor: "#10b981" }}>
              ◎
            </span>
            <h5 className="font-black text-xs text-slate-900">
              この比率で合格圏に入る主な併願・合格ターゲット校
            </h5>
          </div>
          <p className="text-xs leading-relaxed text-slate-500 font-medium">
            {targets}
          </p>
        </div>
      </div>

      <div className="text-center mt-6 text-[10px] text-slate-400 font-medium">
        ※シミュレーターの比率は、生徒の得意・不得意科目や志望する併願校（国公立・私立別）により細かくカスタマイズされます。詳細は合格戦略診断にてプラン作成を行います。
      </div>
    </div>
  );
}
