"use client";

import React, { useState } from "react";

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_LIGHT = "#162540";
const TEXT_BODY = "#4a5568";
const CREAM = "#f7f5f0";

// SVG Icons for the 4 Brain Science pillars
const IconActiveRecall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3M3 12c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M3 12l-3 3m3-3 3-3" />
  </svg>
);

const IconSpacedRepetition = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
  </svg>
);

const IconInterleaving = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);

const IconDualCoding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

export default function ScientificMethod() {
  const [days, setDays] = useState<number>(0);
  const [compareTab, setCompareTab] = useState<"compare" | "evidence">("compare");

  // 1. Calculate Forgetting Curve without review (Ebbinghaus decay)
  const retentionNoReview = Math.max(
    10,
    Math.round(100 / (1 + 1.5 * Math.pow(days, 0.6)))
  );

  // 2. Calculate Memory Strength with Medvance Spaced Repetition (Piecewise linear interpolation)
  let retentionWithReview = 100;
  if (days === 0) {
    retentionWithReview = 100;
  } else if (days <= 1) {
    // Review at Day 1 brings it back to 100
    retentionWithReview = Math.round(100 - (100 - 80) * days);
  } else if (days <= 3) {
    // Review at Day 3 brings it back to 100
    retentionWithReview = Math.round(100 - (100 - 85) * ((days - 1) / 2));
  } else if (days <= 7) {
    // Review at Day 7 brings it back to 100
    retentionWithReview = Math.round(100 - (100 - 90) * ((days - 3) / 4));
  } else if (days <= 14) {
    // Review at Day 14 brings it back to 100
    retentionWithReview = Math.round(100 - (100 - 95) * ((days - 7) / 7));
  } else {
    // After 14 days, spaced repetition has successfully solidified memory to 99%
    retentionWithReview = 99;
  }

  // Ensure 100% on the review days themselves to simulate active rehearsal consolidation
  if (days === 1 || days === 3 || days === 7 || days === 14) {
    retentionWithReview = 100;
  }

  // Generate SVG path for No Review curve (Ebbinghaus)
  const pathNoReviewPoints = [];
  for (let d = 0; d <= 30; d++) {
    const r = Math.max(10, 100 / (1 + 1.5 * Math.pow(d, 0.6)));
    const x = (d / 30) * 500;
    const y = 120 - ((r - 10) / 90) * 110;
    pathNoReviewPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const pathNoReview = `M ${pathNoReviewPoints.join(" L ")}`;

  // Generate SVG path for Medvance spaced repetition (saw-tooth)
  const pathMedvance = [
    "M 0.0,10.0",
    `L ${(1/30*500).toFixed(1)},${(120 - (80-10)/90*110).toFixed(1)}`,
    `L ${(1/30*500).toFixed(1)},10.0`,
    `L ${(3/30*500).toFixed(1)},${(120 - (85-10)/90*110).toFixed(1)}`,
    `L ${(3/30*500).toFixed(1)},10.0`,
    `L ${(7/30*500).toFixed(1)},${(120 - (90-10)/90*110).toFixed(1)}`,
    `L ${(7/30*500).toFixed(1)},10.0`,
    `L ${(14/30*500).toFixed(1)},${(120 - (95-10)/90*110).toFixed(1)}`,
    `L ${(14/30*500).toFixed(1)},10.0`,
    `L 500.0,${(120 - (99 - 10) / 90 * 110).toFixed(1)}`
  ].join(" ");

  const indicatorX = (days / 30) * 500;
  const indicatorYNoReview = 120 - ((retentionNoReview - 10) / 90) * 110;
  const indicatorYMedvance = 120 - ((retentionWithReview - 10) / 90) * 110;

  // Dynamic scientific commentary based on days
  const getCommentary = (d: number) => {
    if (d === 0) {
      return {
        phase: "短期記憶期（海馬）",
        desc: "学習直後の状態。情報は脳の一次保管庫『海馬』に電気信号として維持されています。鮮明ですが、適切な処理を行わなければ、20分後にはすでに約42%、1日後には約70%が急速に消失します。",
      };
    } else if (d === 1) {
      return {
        phase: "第1回避復期（アクティブリコール）",
        desc: "1日後、最初の復習。Medvanceではこのタイミングでテストや口頭説明を行います。この能動的想起により、シナプスの電気信号が『長期増強（LTP）』を引き起こし、記憶の急速な崩壊を防ぎます。",
      };
    } else if (d > 1 && d <= 3) {
      return {
        phase: "中期定着期（シナプス可塑性）",
        desc: "3日後、2回目の復習タイミング。記憶の崩壊スピードが著しく鈍化します。脳内でシナプス接続 of 構造的変化（タンパク質合成）が促され、忘れにくい頑丈な情報へと強化され始めます。",
      };
    } else if (d > 3 && d <= 7) {
      return {
        phase: "長期移行期（システム固定化）",
        desc: "7日後、3回目の復習タイミング。情報は海馬の依存から脱却し、強固な物理的保存庫である『大脳皮質』へと順次転送されます。これにより、他教科の干渉を受けても混同しにくい記憶になります。",
      };
    } else if (d > 7 && d <= 14) {
      return {
        phase: "永久記憶化（ミエリン鞘の形成）",
        desc: "14日後、4回目の復習。反復された情報伝達回路の周りに保護膜（ミエリン鞘）が形成され、神経伝達スピードが最大化。もはや思い出すのに無駄なエネルギーを使わない『結晶化された知識』となります。",
      };
    } else {
      return {
        phase: "長期システム固定化の完了",
        desc: "15日以降。4回のアウトプット復習を終えた脳は、完全に『99%長期記憶化』を達成し、時間が経過しても忘れることはありません。復習なしの脳はわずか10%まで記憶が衰退するのに対し、Medvanceの学習管理では永久忘却されない強固な知識として定着します。",
      };
    }
  };

  const commentary = getCommentary(days);

  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white" id="scientific-method">
      {/* Top Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <p
          className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ color: GOLD_SOFT }}
        >
          Scientific Evidence-Based Method
        </p>
        <h2
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 leading-snug"
          style={{ fontFamily: "var(--font-noto-serif)", color: NAVY }}
        >
          医学・脳科学のエビデンスが証明する、極限の学習効率
        </h2>
        <div className="w-12 h-1 bg-[#c9922a] mx-auto mb-6"></div>
        <p className="text-sm md:text-base max-w-3xl mx-auto leading-relaxed text-slate-500">
          難関医学部受験は、膨大な暗記量と緻密な論理的記述力が求められます。
          Medvanceでは、代表の「医学部全勝」を支えたアプローチを、脳科学・医学的に立証された4大原則に落とし込み、受験生へダイレクトに継承します。
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
        {/* Left Column: 4 Pillars of Science */}
        <div className="space-y-8">
          <h3
            className="text-xl font-bold pb-3 border-b border-slate-200"
            style={{ color: NAVY }}
          >
            記憶力と応用力を最大化する「4大原則」
          </h3>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Pillar 1 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: GOLD }}
              >
                <IconActiveRecall />
              </div>
              <h4 className="text-base font-bold mb-2" style={{ color: NAVY }}>
                1. 能動的想起（Active Recall）
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                教科書の再読ではなく、小テストや「解法の逆授業」によって意図的に記憶を取り出します。これにより海馬の
                <strong className="text-slate-900 font-semibold">長期増強（LTP）</strong>
                が劇的に活性化し、シナプスの結合を飛躍的に強化します。
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: GOLD }}
              >
                <IconSpacedRepetition />
              </div>
              <h4 className="text-base font-bold mb-2" style={{ color: NAVY }}>
                2. 分散学習（Spaced Repetition）
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                忘却曲線に基づき、最適な期間（1日、3日、7日、14日）を空けて復習を重ねます。一時的な
                <strong className="text-slate-900 font-semibold">短期記憶（海馬）</strong>
                から、物理的に強固な長期保管庫である
                <strong className="text-slate-900 font-semibold">大脳皮質</strong>
                へ知識を完全に定着させます。
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: GOLD }}
              >
                <IconInterleaving />
              </div>
              <h4 className="text-base font-bold mb-2" style={{ color: NAVY }}>
                3. 交互学習（Interleaving）
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                1分野を固めて解くブロック学習ではなく、異なる分野や難易度の問題を交互に混ぜて解く手法。前頭前野の回路切り替えを日常的に促し、入試本番で「どの解法を適用すべきか」を瞬時に見抜く解法選択力を高めます。
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all duration-300">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ backgroundColor: GOLD }}
              >
                <IconDualCoding />
              </div>
              <h4 className="text-base font-bold mb-2" style={{ color: NAVY }}>
                4. 二重符号化（Dual Coding）
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                文字による論理的理解（言語符号）と、図解やイメージによる直感的理解（非言語符号）を脳内で直結。異なる情報処理経路を重ね合わせることで、ど忘れしにくく、複雑な初見問題にも対応できる知識ネットワークを構築します。
              </p>
            </div>
          </div>

          <div
            className="p-5 rounded-2xl border border-amber-200/60 leading-relaxed text-xs"
            style={{ backgroundColor: "#faf8f4" }}
          >
            <strong style={{ color: NAVY }} className="block mb-1 text-sm">
              🔬 Medvanceでの実践体制
            </strong>
            Medvanceでは、これら4大原則を単なるスローガンにせず、専属の慶應医学部生コーチが作成する
            <strong className="text-slate-900 font-semibold">「15分単位の計画表」</strong>
            に復習スケジュールを完全自動で配分。さらに、学習管理データベースを用いて公式や問題の定着率を一括トラッキングします。
          </div>
        </div>

        {/* Right Column: Interactive Forgetting Curve Simulator */}
        <div className="relative">
          {/* Decorative background circle */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#c9922a]/20 to-[#0c1a33]/5 blur-lg opacity-80 pointer-events-none"></div>

          <div
            className="relative rounded-3xl p-8 bg-white border border-slate-200"
            style={{ boxShadow: "0 20px 40px -15px rgba(12,26,51,0.12)" }}
          >
            <span
              className="inline-block text-[10px] font-bold tracking-[0.2em] px-2.5 py-1 rounded-full mb-4 text-white"
              style={{ backgroundColor: NAVY }}
            >
              SIMULATOR
            </span>
            <h3
              className="text-lg font-bold mb-1"
              style={{ color: NAVY, fontFamily: "var(--font-noto-serif)" }}
            >
              記憶保持率シミュレーター
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              スライダーを動かして、復習の有無による記憶の定着度の違いをご確認ください。
            </p>

            {/* Slider Control Container */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs font-bold text-slate-500">学習からの経過時間</span>
                <span className="text-lg font-black tracking-tight" style={{ color: GOLD }}>
                  {days === 0 ? "当日" : `${days}日後`}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="30"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${(days / 30) * 100}%, #e2e8f0 ${(days / 30) * 100}%, #e2e8f0 100%)`,
                }}
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-2 px-1">
                <span>当日</span>
                <span>3日後</span>
                <span>7日後</span>
                <span>14日後</span>
                <span>30日後</span>
              </div>
            </div>

            {/* Dynamic Forgetting Curve Graph */}
            <div className="bg-[#0c1a33] border border-slate-800 rounded-2xl p-4 mb-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:25px_20px] opacity-10 pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold text-slate-300 tracking-wider">30日間の記憶保持率の推移（脳科学モデル）</span>
                <div className="flex gap-3 text-[9px] font-semibold">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <span className="w-2.5 h-0.5 bg-slate-400 inline-block rounded-xs"></span> 復習なし
                  </span>
                  <span className="flex items-center gap-1.5 text-[#c9922a]">
                    <span className="w-2.5 h-0.5 bg-[#c9922a] inline-block rounded-xs"></span> Medvance
                  </span>
                </div>
              </div>

              {/* Chart SVG */}
              <div className="relative h-28 w-full mt-2">
                {/* Y-Axis Grid labels on Left */}
                <div className="absolute left-0 top-0 text-[8px] text-slate-500 font-bold leading-none">100%</div>
                <div className="absolute left-0 top-[48%] text-[8px] text-slate-500 font-bold leading-none">50%</div>
                <div className="absolute left-0 bottom-0 text-[8px] text-slate-500 font-bold leading-none">10%</div>

                <div className="h-full pl-7 pr-2">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 500 130" preserveAspectRatio="none">
                    {/* SVG Filters for glowing effect */}
                    <defs>
                      <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Grid lines */}
                    <line x1="0" y1="10" x2="500" y2="10" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="65" x2="500" y2="65" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#1e293b" strokeWidth="1" strokeDasharray="3 3" />

                    {/* curve 1: Forgetting Curve (Ebbinghaus) */}
                    <path
                      d={pathNoReview}
                      fill="none"
                      stroke="#475569"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      className="transition-all duration-300"
                    />

                    {/* curve 2: Medvance Curve (Saw-tooth spaced repetition) */}
                    <path
                      d={pathMedvance}
                      fill="none"
                      stroke="#c9922a"
                      strokeWidth="2.5"
                      className="transition-all duration-300"
                      filter="url(#glow-gold)"
                    />

                    {/* Active Vertical Timeline Indicator */}
                    <line
                      x1={indicatorX}
                      y1="0"
                      x2={indicatorX}
                      y2="130"
                      stroke="#c9922a"
                      strokeWidth="1.2"
                      strokeDasharray="2 2"
                      className="transition-all duration-75 ease-out"
                    />

                    {/* Highlighting Dots for active state */}
                    {/* Circle for No Review */}
                    <circle
                      cx={indicatorX}
                      cy={indicatorYNoReview}
                      r="4"
                      fill="#475569"
                      stroke="#94a3b8"
                      strokeWidth="1.5"
                      className="transition-all duration-75 ease-out"
                    />

                    {/* Circle for Medvance with glow */}
                    <circle
                      cx={indicatorX}
                      cy={indicatorYMedvance}
                      r="5.5"
                      fill="#ffffff"
                      stroke="#c9922a"
                      strokeWidth="3.5"
                      className="transition-all duration-75 ease-out shadow-lg"
                    />
                  </svg>
                </div>
              </div>

              {/* X Axis labels */}
              <div className="flex justify-between text-[8px] text-slate-500 font-bold mt-2 pl-7 pr-2 border-t border-slate-800/80 pt-1.5">
                <span>当日</span>
                <span>3日後</span>
                <span>7日後</span>
                <span>14日後</span>
                <span>30日後</span>
              </div>
            </div>

            {/* Dynamic Retention Gain Indicator */}
            {days > 0 && (
              <div 
                className="mb-4 py-2.5 px-4 rounded-xl flex items-center justify-between text-[11px] font-bold border border-[#c9922a]/20 bg-[#c9922a]/5 transition-all duration-300"
              >
                <span className="text-[#0c1a33] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9922a]"></span>
                  科学的学習による記憶定着の差
                </span>
                <span style={{ color: GOLD_SOFT }} className="text-xs font-black">
                  +{retentionWithReview - retentionNoReview}% 定着率アップ！
                </span>
              </div>
            )}

            {/* Compare Gauge Cards */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Card A: No Review */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                <p className="text-[10px] font-bold text-slate-400 mb-3 tracking-wider">復習なしの学習</p>
                <div className="relative inline-flex items-center justify-center mb-2">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#e2e8f0"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#94a3b8"
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={2 * Math.PI * 32 * (1 - retentionNoReview / 100)}
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                  <span className="absolute text-base font-black text-slate-500 tracking-tighter">
                    {retentionNoReview}%
                  </span>
                </div>
                <p className="text-[10px] font-semibold text-slate-400 leading-tight">記憶の忘却進行中</p>
              </div>

              {/* Card B: Medvance Method */}
              <div className="bg-slate-50 border border-[#c9922a]/30 rounded-2xl p-4 text-center relative overflow-hidden">
                {/* Gold soft background glow */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#c9922a]/5 rounded-full blur-xl pointer-events-none"></div>

                <p className="text-[10px] font-bold tracking-wider mb-3" style={{ color: GOLD_SOFT }}>
                  Medvance科学的復習
                </p>
                <div className="relative inline-flex items-center justify-center mb-2">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#f1e6cf"
                      strokeWidth="6"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke={GOLD}
                      strokeWidth="6"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 32}
                      strokeDashoffset={2 * Math.PI * 32 * (1 - retentionWithReview / 100)}
                      className="transition-all duration-300 ease-out"
                    />
                  </svg>
                  <span className="absolute text-base font-black tracking-tighter" style={{ color: NAVY }}>
                    {retentionWithReview}%
                  </span>
                </div>
                <p className="text-[10px] font-bold leading-tight" style={{ color: GOLD_SOFT }}>
                  長期記憶として定着
                </p>
              </div>
            </div>

            {/* Dynamic Science Explanation */}
            <div className="border-t border-slate-100 pt-6">
              <span className="inline-block text-[9px] font-bold text-slate-400 tracking-widest uppercase mb-1.5">
                BRAIN STATE
              </span>
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2" style={{ color: NAVY }}>
                <span className="w-2 h-2 rounded-full bg-[#c9922a]"></span>
                {commentary.phase}
              </h4>
              <p className="text-xs leading-relaxed text-slate-500">
                {commentary.desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2.6 INTERACTIVE COMPARISON BOARD ──────────────────── */}
      <div className="max-w-5xl mx-auto mt-20 pt-16 border-t border-slate-200">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-[0.25em] text-[#b88a26] uppercase mb-3 block">METHOD COMPARISON</span>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0c1a33] mb-4" style={{ fontFamily: "var(--font-noto-serif)" }}>
            指導プロセスの徹底対比：一般の指導 vs Medvance式
          </h3>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed mb-8">
            多くの受験生が陥る「非効率な学習プロセス」と、データ・脳科学に基づく「Medvanceの超効率アプローチ」の明確な違い。
          </p>

          {/* Segmented Control Switch */}
          <div className="inline-flex p-1 bg-slate-100 rounded-full border border-slate-200">
            <button
              onClick={() => setCompareTab("compare")}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                compareTab === "compare"
                  ? "bg-[#0c1a33] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              📊 指導プロセスの違いを比較
            </button>
            <button
              onClick={() => setCompareTab("evidence")}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                compareTab === "evidence"
                  ? "bg-[#0c1a33] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              🔬 Medvance式の「脳科学的エビデンス」
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="space-y-6">
          {/* Row 1: Planning */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#c9922a] tracking-widest uppercase">PILLAR 01</span>
              <h4 className="text-base font-bold text-[#0c1a33] flex items-center gap-2">
                📅 学習計画の設計とタイミング
              </h4>
            </div>

            {compareTab === "compare" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {/* General */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-all duration-300">
                  <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">一般的な指導・独学</div>
                  <h5 className="font-bold text-slate-700 text-xs mb-3">「大雑把な課題指定」と「勘に頼る計画」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-500 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 「今週はこれを進めて」というざっくりした指示のみ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 毎朝「今日何を勉強すべきか」迷い、手が止まる
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 復習スケジュールがなく、一度解いた問題は忘れ去られる
                    </li>
                  </ul>
                </div>
                {/* Medvance */}
                <div className="bg-[#0c1a33] border border-[#c9922a]/30 rounded-2xl p-5 hover:border-[#c9922a]/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#c9922a]/5 rounded-full blur-xl pointer-events-none"></div>
                  <div className="text-[10px] font-bold text-[#c9922a] mb-2 uppercase">Medvance式</div>
                  <h5 className="font-bold text-white text-xs mb-3">「15分単位の計画」×「復習スケジュール完全自動化」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-300 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 1週間のタスクを「15分単位」で時間割に完全落とし込み
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 毎朝計画表通りに机に向かうだけで迷いなくスタート
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 忘却曲線に沿った最適な復習タスクを完全自動配置
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-[#faf8f4] border border-amber-200/50 rounded-2xl p-5 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0c1a33] block mb-2 font-bold text-sm">💡 分散学習（Spaced Repetition）の科学</strong>
                人の記憶は、適切なインターバル（1日、3日、7日、14日）をあけて想起を繰り返すことで、短期記憶を司る「海馬」から、物理的な保存庫である「大脳皮質」へと完全に移行します。Medvanceでは、この脳科学プロセスを日々の15分スケジュールに完全自動で組み込むことで、記憶定着率を99%へ結晶化させます。
              </div>
            )}
          </div>

          {/* Row 2: Management */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#c9922a] tracking-widest uppercase">PILLAR 02</span>
              <h4 className="text-base font-bold text-[#0c1a33] flex items-center gap-2">
                📈 計画と進捗のデータ管理
              </h4>
            </div>

            {compareTab === "compare" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {/* General */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-all duration-300">
                  <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">一般的な指導・独学</div>
                  <h5 className="font-bold text-slate-700 text-xs mb-3">「自己申告」と「紙ノートでの曖昧な管理」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-500 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 「先週どこまでやった？」の自己申告のみで客観データなし
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 公式や間違えた問題が手書きノートに埋もれ、再掲できない
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 保護者様から進捗やテスト定着度がまったく見えない
                    </li>
                  </ul>
                </div>
                {/* Medvance */}
                <div className="bg-[#0c1a33] border border-[#c9922a]/30 rounded-2xl p-5 hover:border-[#c9922a]/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#c9922a]/5 rounded-full blur-xl pointer-events-none"></div>
                  <div className="text-[10px] font-bold text-[#c9922a] mb-2 uppercase">Medvance式</div>
                  <h5 className="font-bold text-white text-xs mb-3">「学習管理データベースによる一元トラッキング」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-300 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 必須公式や暗記データが一元管理されたデータベースを共有
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 毎週の確認テスト結果から『定着度をカラーコード管理』し苦手可視化
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 保護者用アカウントも提供しデータベース進捗をリアルタイム共有
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-[#faf8f4] border border-amber-200/50 rounded-2xl p-5 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0c1a33] block mb-2 font-bold text-sm">💡 スキーマ構築とデータフィードバック</strong>
                脳は、情報が整理された構造（スキーマ）になって初めて新しい知識を正しく吸収します。バラバラの手書きノートではなく、一元化された学習管理データベース上に公式や課題データ、定着チェックを蓄積・カラーコード可視化することで、脳に負荷をかけずに「苦手」を抽出し、学習プランを精密に制御します。
              </div>
            )}
          </div>

          {/* Row 3: Lesson Style */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#c9922a] tracking-widest uppercase">PILLAR 03</span>
              <h4 className="text-base font-bold text-[#0c1a33] flex items-center gap-2">
                ✍️ 授業のスタイルと脳の活性化
              </h4>
            </div>

            {compareTab === "compare" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {/* General */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-all duration-300">
                  <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">一般的な指導・独学</div>
                  <h5 className="font-bold text-slate-700 text-xs mb-3">「解説を聞くだけの受け身なインプット指導」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-500 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 先生が黒板やホワイトボードに解答を書き、生徒は写すだけ
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 「分かったつもり」になるが、翌日一人で解くと再現できない
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 授業中の脳の活動率が著しく低く、定着に繋がらない
                    </li>
                  </ul>
                </div>
                {/* Medvance */}
                <div className="bg-[#0c1a33] border border-[#c9922a]/30 rounded-2xl p-5 hover:border-[#c9922a]/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#c9922a]/5 rounded-full blur-xl pointer-events-none"></div>
                  <div className="text-[10px] font-bold text-[#c9922a] mb-2 uppercase">Medvance式</div>
                  <h5 className="font-bold text-white text-xs mb-3">「解法の逆授業（アクティブリコール）」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-300 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 前半45分インプット ＋ 後半45分は生徒自身の完全再現授業
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 「なぜその解法を適用したか」を口頭説明させ理解の歪みを発見
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 脳を強制的にアクティブ状態に保ち、授業内で定着させる
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-[#faf8f4] border border-amber-200/50 rounded-2xl p-5 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0c1a33] block mb-2 font-bold text-sm">💡 長期増強（LTP現象）と能動的想起</strong>
                解説を受動的に聞いているとき、脳の神経伝達はほとんど不活性です。逆に「意図的に記憶を取り出そうと想起し、他者へ口頭で説明する（能動的想起）」とき、脳内の神経細胞の接合部で「長期増強（LTP）」が引き起こされます。Medvance独自の「解法の逆授業」は、このLTPを授業内で強制的に発生させ、一回の授業の定着率を劇的に引き上げます。
              </div>
            )}
          </div>

          {/* Row 4: Support */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4 pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-[#c9922a] tracking-widest uppercase">PILLAR 04</span>
              <h4 className="text-base font-bold text-[#0c1a33] flex items-center gap-2">
                💬 授業時間外のサポート体制
              </h4>
            </div>

            {compareTab === "compare" ? (
              <div className="grid md:grid-cols-2 gap-4">
                {/* General */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-all duration-300">
                  <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">一般的な指導・独学</div>
                  <h5 className="font-bold text-slate-700 text-xs mb-3">「質問が翌週まで持ち越されるタイムラグ」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-500 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 自習中に発生した疑問が解決せず、翌週の授業まで放置される
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 分からないままの勉強が進まず、モチベーションが著しく低下
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold">✗</span> 質問しても「答えの丸暗記」になって応用が効かない
                    </li>
                  </ul>
                </div>
                {/* Medvance */}
                <div className="bg-[#0c1a33] border border-[#c9922a]/30 rounded-2xl p-5 hover:border-[#c9922a]/70 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#c9922a]/5 rounded-full blur-xl pointer-events-none"></div>
                  <div className="text-[10px] font-bold text-[#c9922a] mb-2 uppercase">Medvance式</div>
                  <h5 className="font-bold text-white text-xs mb-3">「即時疑問解決システム ＆ 記述添削」</h5>
                  <ul className="space-y-2 text-[11px] text-slate-300 font-semibold">
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 自習中の疑問はLINEからいつでも即時質問可能
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 慶應医学部生アドバイザーがその日のうちに論理の歪みを解消
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#c9922a] font-bold">✓</span> 英作文や数学記述の「問題添削」もオンラインで随時対応
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-[#faf8f4] border border-amber-200/50 rounded-2xl p-5 text-xs text-slate-600 leading-relaxed">
                <strong className="text-[#0c1a33] block mb-2 font-bold text-sm">💡 誤ったスキーマの回避</strong>
                疑問を持った状態で勉強を続けると、脳内に間違った論理構造（不正確なスキーマ）が構築されてしまい、後から修正するのが非常に困難になります。疑問が発生した「その日」のうちに、論理的思考のプロである慶應医学部生コーチが紐解いて解消することで、正しい知識ネットワークを即時に形成します。
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
