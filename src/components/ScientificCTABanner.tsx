"use client";

import React, { useState } from "react";
import Link from "next/link";

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";

export default function ScientificCTABanner() {
  const [days, setDays] = useState<number>(0);

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
    retentionWithReview = Math.round(100 - (100 - 80) * days);
  } else if (days <= 3) {
    retentionWithReview = Math.round(100 - (100 - 85) * ((days - 1) / 2));
  } else if (days <= 7) {
    retentionWithReview = Math.round(100 - (100 - 90) * ((days - 3) / 4));
  } else if (days <= 14) {
    retentionWithReview = Math.round(100 - (100 - 95) * ((days - 7) / 7));
  } else {
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
    const x = (d / 30) * 350;
    const y = 92 - ((r - 10) / 90) * 84;
    pathNoReviewPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const pathNoReview = `M ${pathNoReviewPoints.join(" L ")}`;

  // Generate SVG path for Medvance spaced repetition (saw-tooth)
  const pathMedvance = [
    "M 0.0,8.0",
    `L ${(1/30*350).toFixed(1)},${(92 - (80-10)/90*84).toFixed(1)}`,
    `L ${(1/30*350).toFixed(1)},8.0`,
    `L ${(3/30*350).toFixed(1)},${(92 - (85-10)/90*84).toFixed(1)}`,
    `L ${(3/30*350).toFixed(1)},8.0`,
    `L ${(7/30*350).toFixed(1)},${(92 - (90-10)/90*84).toFixed(1)}`,
    `L ${(7/30*350).toFixed(1)},8.0`,
    `L ${(14/30*350).toFixed(1)},${(92 - (95-10)/90*84).toFixed(1)}`,
    `L ${(14/30*350).toFixed(1)},8.0`,
    `L 350.0,${(92 - (99 - 10) / 90 * 84).toFixed(1)}`
  ].join(" ");

  const indicatorX = (days / 30) * 350;
  const indicatorYNoReview = 92 - ((retentionNoReview - 10) / 90) * 84;
  const indicatorYMedvance = 92 - ((retentionWithReview - 10) / 90) * 84;

  return (
    <section className="bg-white py-16 px-4 border-b border-slate-200">
      <div className="max-w-5xl mx-auto animate-on-scroll">
        <div 
          className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center hover:shadow-md transition-shadow duration-300"
        >
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="inline-block text-[10px] font-bold tracking-[0.2em] px-2.5 py-0.5 rounded-full mb-3 text-white bg-[#0c1a33]">
              SCIENCE & EVIDENCE
            </span>
            <h3 
              className="text-xl md:text-2xl font-bold mb-3 text-[#0c1a33] leading-snug" 
              style={{ fontFamily: "var(--font-noto-serif)" }}
            >
              医学の脳科学エビデンスに基づく学習方法
            </h3>
            <p className="text-xs leading-relaxed text-slate-500 mb-6 max-w-lg">
              LTP現象を引き起こす「能動的想起」や、忘却曲線を制御する「分散学習（科学的復習）」など、最難関医学部を突破するための極限の学習メソッド。
              日々の15分計画へ科学的復習を完全自動で配分し、記憶を最大化します。
            </p>
            <Link
              href="/science"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white hover:opacity-90 transition-opacity bg-[#c9922a] shadow-xs"
            >
              脳科学メソッドとシミュレーターを見る →
            </Link>
          </div>

          {/* Right Column: Mini Forgetting Curve Widget */}
          <div className="bg-[#0c1a33] rounded-2xl p-5 border border-slate-800 relative overflow-hidden w-full max-w-md mx-auto">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:20px_16px] opacity-10 pointer-events-none"></div>

            <div className="flex justify-between items-center mb-3">
              <span className="text-[9px] font-bold text-slate-300 tracking-widest uppercase">定着率シミュレーター</span>
              <span className="text-xs font-black tracking-tight" style={{ color: GOLD }}>
                {days === 0 ? "当日" : `${days}日後`}
              </span>
            </div>

            {/* Slider */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="30"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-1 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${GOLD} 0%, ${GOLD} ${(days / 30) * 100}%, #1e293b ${(days / 30) * 100}%, #1e293b 100%)`,
                }}
              />
            </div>

            {/* Mini SVG Graph */}
            <div className="relative h-20 w-full mb-3.5">
              {/* Y Axis Marks */}
              <div className="absolute left-0 top-0 text-[7px] text-slate-500 font-bold leading-none">99%</div>
              <div className="absolute left-0 bottom-0 text-[7px] text-slate-500 font-bold leading-none">10%</div>

              <div className="h-full pl-5 pr-1">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 350 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="8" x2="350" y2="8" stroke="#1e293b" strokeWidth="0.75" strokeDasharray="2 2" />
                  <line x1="0" y1="92" x2="350" y2="92" stroke="#1e293b" strokeWidth="0.75" strokeDasharray="2 2" />

                  {/* curve 1: Forgetting Curve */}
                  <path
                    d={pathNoReview}
                    fill="none"
                    stroke="#475569"
                    strokeWidth="1.2"
                    strokeDasharray="3 3"
                    className="transition-all duration-300"
                  />

                  {/* curve 2: Medvance Spaced Repetition */}
                  <path
                    d={pathMedvance}
                    fill="none"
                    stroke="#c9922a"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />

                  {/* Active Vertical Indicator Line */}
                  <line
                    x1={indicatorX}
                    y1="0"
                    x2={indicatorX}
                    y2="100"
                    stroke="#c9922a"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                    className="transition-all duration-75 ease-out"
                  />

                  {/* Highlighting Dots */}
                  <circle
                    cx={indicatorX}
                    cy={indicatorYNoReview}
                    r="3.5"
                    fill="#475569"
                    stroke="#94a3b8"
                    strokeWidth="1.2"
                    className="transition-all duration-75 ease-out"
                  />
                  <circle
                    cx={indicatorX}
                    cy={indicatorYMedvance}
                    r="4.5"
                    fill="#ffffff"
                    stroke="#c9922a"
                    strokeWidth="2.5"
                    className="transition-all duration-75 ease-out"
                  />
                </svg>
              </div>
            </div>

            {/* Percentage Display Cards */}
            <div className="grid grid-cols-2 gap-3 mt-2 pt-2.5 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-[10px] bg-slate-900/60 rounded-lg p-2 border border-slate-800">
                <span className="text-slate-400 font-semibold">復習なし</span>
                <span className="font-black text-slate-300">{retentionNoReview}%</span>
              </div>
              <div className="flex justify-between items-center text-[10px] bg-[#c9922a]/10 rounded-lg p-2 border border-[#c9922a]/20">
                <span className="text-[#c9922a] font-bold">Medvance</span>
                <span className="font-black" style={{ color: GOLD }}>{retentionWithReview}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
