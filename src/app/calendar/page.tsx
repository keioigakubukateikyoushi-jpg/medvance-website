"use client";

import { useState } from "react";
import Link from "next/link";
import ColumnCTA from "@/components/ColumnCTA";

type Area = "tokyo" | "kansai" | "other";

type ExamEvent = {
  date: string;
  university: string;
  type: "private-1st" | "private-2nd" | "national";
  area: Area;
  areaLabel: string;
  deadline: string;
  announcement: string;
  note?: string;
  overlapGroup?: string; // 日程が重複する大学を識別するグループ名
};

const examData: ExamEvent[] = [
  // --- 1次選抜日程 ---
  {
    date: "2027-01-16",
    university: "大学入学共通テスト (1日目)",
    type: "national",
    area: "other",
    areaLabel: "全国",
    deadline: "10月上旬締切",
    announcement: "-",
    note: "国公立医学部志願者は必須。私立の共通テスト利用入試でも使用。"
  },
  {
    date: "2027-01-17",
    university: "大学入学共通テスト (2日目)",
    type: "national",
    area: "other",
    areaLabel: "全国",
    deadline: "10月上旬締切",
    announcement: "-",
    note: "自己採点結果をもとに国公立2次出願校を選定。"
  },
  {
    date: "2027-01-20",
    university: "国際医療福祉大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月中旬締切",
    announcement: "1月28日発表",
    note: "私立医学部で最も早い日程の一つ。受験生が集中しやすい。",
    overlapGroup: "早期スタート校"
  },
  {
    date: "2027-01-22",
    university: "愛知医科大学 (1次)",
    type: "private-1st",
    area: "other",
    areaLabel: "東海",
    deadline: "1月中旬締切",
    announcement: "1月30日発表",
    note: "獨協医科大と重複。併願戦略に注意。",
    overlapGroup: "1月22日重複"
  },
  {
    date: "2027-01-22",
    university: "獨協医科大学 (1次)",
    type: "private-1st",
    area: "other",
    areaLabel: "北関東",
    deadline: "1月中旬締切",
    announcement: "1月29日発表",
    note: "愛知医科大と重複。併願戦略に注意。",
    overlapGroup: "1月22日重複"
  },
  {
    date: "2027-01-23",
    university: "東北医科薬科大学 (1次)",
    type: "private-1st",
    area: "other",
    areaLabel: "東北",
    deadline: "1月中旬締切",
    announcement: "2月2日発表",
    note: "東北地方の地域枠志望者は必須。"
  },
  {
    date: "2027-01-24",
    university: "川崎医科大学 (1次)",
    type: "private-1st",
    area: "other",
    areaLabel: "中国",
    deadline: "1月中旬締切",
    announcement: "2月1日発表",
    note: "西日本エリアの早期実施校。"
  },
  {
    date: "2027-01-26",
    university: "関西医科大学 (1次・前期)",
    type: "private-1st",
    area: "kansai",
    areaLabel: "関西",
    deadline: "1月中旬締切",
    announcement: "2月3日発表",
    note: "兵庫医科大と重複。関西勢の主力併願争い。",
    overlapGroup: "1月26日関西重複"
  },
  {
    date: "2027-01-26",
    university: "兵庫医科大学 (1次)",
    type: "private-1st",
    area: "kansai",
    areaLabel: "関西",
    deadline: "1月中旬締切",
    announcement: "2月2日発表",
    note: "関西医科大と重複。どちらに出願するか過去問相性で決定。",
    overlapGroup: "1月26日関西重複"
  },
  {
    date: "2027-01-28",
    university: "帝京大学 (1次・1日目)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月中旬締切",
    announcement: "2月8日発表",
    note: "3日間のうち試験日を選択可能。杏林大との重複に注意。",
    overlapGroup: "1月下旬選択校"
  },
  {
    date: "2027-01-29",
    university: "帝京大学 (1次・2日目)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月中旬締切",
    announcement: "2月8日発表",
    note: "3日間のうち選択可能。杏林大と重複しやすい。",
    overlapGroup: "1月下旬選択校"
  },
  {
    date: "2027-01-29",
    university: "杏林大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月中旬締切",
    announcement: "2月5日発表",
    note: "帝京大2日目と重複。東京西部の人気中堅校。",
    overlapGroup: "1月下旬選択校"
  },
  {
    date: "2027-01-30",
    university: "帝京大学 (1次・3日目)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月中旬締切",
    announcement: "2月8日発表",
    note: "選択可能。多くの受験生が杏林大避けてここに集中する傾向。",
    overlapGroup: "1月下旬選択校"
  },
  {
    date: "2027-02-01",
    university: "順天堂大学 (1次・A方式)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月6日発表",
    note: "日本医科大（前期）と重複！東京4大私立トップ校の激突日。",
    overlapGroup: "2月1日超重要重複"
  },
  {
    date: "2027-02-01",
    university: "日本医科大学 (1次・前期)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月6日発表",
    note: "順天堂大と重複！受験生の層が完全に被るため、出願決定は極めて慎重に。",
    overlapGroup: "2月1日超重要重複"
  },
  {
    date: "2027-02-02",
    university: "東京医科大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月9日発表",
    note: "標準問題が多く、高得点勝負になりやすい人気校。"
  },
  {
    date: "2027-02-03",
    university: "東邦大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月10日発表",
    note: "適性検査や論理思考に特徴あり。獨協2次と重複しやすい。"
  },
  {
    date: "2027-02-04",
    university: "昭和大学 (1次・期)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月12日発表",
    note: "英数国（または理）の3科目独自配点。藤田医科大と重複。",
    overlapGroup: "2月4日重複"
  },
  {
    date: "2027-02-05",
    university: "東京慈恵会医科大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月13日発表",
    note: "私立医学部御三家筆頭。記述力と長文化英語対策が必須。"
  },
  {
    date: "2027-02-07",
    university: "日本大学 (1次・N全学方式)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月15日発表",
    note: "他学部共通問題。基礎力の抜け漏れがないかを測る。"
  },
  {
    date: "2027-02-09",
    university: "聖マリアンナ医科大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "2月上旬締切",
    announcement: "2月16日発表",
    note: "面接小論文配点が高く、記述・コミュニケーション対策が効く。"
  },
  {
    date: "2027-02-10",
    university: "慶應義塾大学 (1次)",
    type: "private-1st",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1月下旬締切",
    announcement: "2月20日発表",
    note: "私立医学部最高峰。数学・理科の難度が極めて高く、物理必須।"
  },
  {
    date: "2027-02-25",
    university: "国公立大学 2次試験 (前期・1日目)",
    type: "national",
    area: "other",
    areaLabel: "全国",
    deadline: "2月上旬締切",
    announcement: "3月6日〜10日発表",
    note: "全国の国公立医学部で一斉実施。英数理＋面接小論文。"
  },
  {
    date: "2027-02-26",
    university: "国公立大学 2次試験 (前期・2日目)",
    type: "national",
    area: "other",
    areaLabel: "全国",
    deadline: "2月上旬締切",
    announcement: "3月6日〜10日発表",
    note: "一部大学で面接や2日目学科が継続実施。"
  },

  // --- 2次選抜日程 ---
  {
    date: "2027-02-03",
    university: "国際医療福祉大学 (2次・候補日)",
    type: "private-2nd",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1次合格後",
    announcement: "2月8日最終発表",
    note: "MMI面接と英作文面接。自己紹介書の深掘りあり。"
  },
  {
    date: "2027-02-05",
    university: "愛知医科大学 (2次・候補日)",
    type: "private-2nd",
    area: "other",
    areaLabel: "東海",
    deadline: "1次合格後",
    announcement: "2月9日最終発表",
    note: "面接および小論文。他校の1次と重複しやすいため日程調整に注意。"
  },
  {
    date: "2027-02-07",
    university: "順天堂大学 (2次・候補日)",
    type: "private-2nd",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1次合格後",
    announcement: "2月10日最終発表",
    note: "独自のプレゼンテーション面接（写真を見て答える）や小論文あり。"
  },
  {
    date: "2027-02-08",
    university: "日本医科大学 (2次・前期候補日)",
    type: "private-2nd",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1次合格後",
    announcement: "2月12日最終発表",
    note: "集団討論または個別面接2回。論理性と協調性を精査される。"
  },
  {
    date: "2027-02-12",
    university: "東京慈恵会医科大学 (2次・候補日)",
    type: "private-2nd",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1次合格後",
    announcement: "2月18日最終発表",
    note: "MMI形式面接（5ブース等）を導入。高い状況判断力が問われる。"
  },
  {
    date: "2027-03-01",
    university: "慶應義塾大学 (2次)",
    type: "private-2nd",
    area: "tokyo",
    areaLabel: "首都圏",
    deadline: "1次合格後",
    announcement: "3月4日最終発表",
    note: "小論文および個別面接。1次合格ラインが高いため、2次は丁寧かつ自然体で。"
  },
];

type MatrixRow = {
  date: string;
  private1st: string[];
  private2nd: string[];
  alert?: string;
  isImportant?: boolean;
};

const matrixData: MatrixRow[] = [
  { date: "2027-01-20", private1st: ["国際医療福祉大"], private2nd: [], alert: "私立医学部入試スタート！" },
  { date: "2027-01-22", private1st: ["愛知医科大", "獨協医科大"], private2nd: [], alert: "⚠️ 1次同士の重複（愛知・獨協）", isImportant: true },
  { date: "2027-01-23", private1st: ["東北医科薬科大"], private2nd: [] },
  { date: "2027-01-24", private1st: ["川崎医科大"], private2nd: [] },
  { date: "2027-01-26", private1st: ["関西医科大（前期）", "兵庫医科大"], private2nd: [], alert: "⚠️ 1次同士の重複（関西医・兵庫）", isImportant: true },
  { date: "2027-01-28", private1st: ["帝京大（1日目・選択）"], private2nd: ["国際医療福祉大"], alert: "🚨 1次（帝京）と2次（国際）のバッティング開始！" },
  { date: "2027-01-29", private1st: ["帝京大（2日目・選択）", "杏林大"], private2nd: ["国際医療福祉大", "獨協医科大"], alert: "🚨 1次（杏林/帝京）と2次（国際/獨協）がバッティング！", isImportant: true },
  { date: "2027-01-30", private1st: ["帝京大（3日目・選択）"], private2nd: ["国際医療福祉大", "獨協医科大"] },
  { date: "2027-02-01", private1st: ["順天堂大（A方式）", "日本医科大（前期）"], private2nd: ["愛知医科大"], alert: "🔥 最難関1次重複（順天・日医）！愛知2次被りにも注意", isImportant: true },
  { date: "2027-02-02", private1st: ["東京医科大"], private2nd: ["愛知医科大"] },
  { date: "2027-02-03", private1st: ["東邦大"], private2nd: ["国際医療福祉大", "愛知医科大"], alert: "🚨 東邦1次と国際医療2次が完全バッティング！", isImportant: true },
  { date: "2027-02-04", private1st: ["昭和大（I期）"], private2nd: ["獨協医科大", "愛知医科大"], alert: "🚨 昭和1次と獨協2次・愛知2次がバッティング！", isImportant: true },
  { date: "2027-02-05", private1st: ["東京慈恵会医科大"], private2nd: ["愛知医科大"] },
  { date: "2027-02-07", private1st: ["日本大（N方式）"], private2nd: ["順天堂大"], alert: "🚨 日大1次と順天堂2次（面接）が完全バッティング！", isImportant: true },
  { date: "2027-02-08", private1st: [], private2nd: ["順天堂大", "日本医科大"], alert: "⚠️ 上位2次同士の重複（順天・日医）" },
  { date: "2027-02-09", private1st: ["聖マリアンナ医科大"], private2nd: ["東京医科大"], alert: "🚨 聖マ1次と東医2次が完全バッティング！", isImportant: true },
  { date: "2027-02-10", private1st: ["慶應義塾大"], private2nd: ["東邦大", "東京医科大"], alert: "🚨 慶應1次と東邦2次・東医2次が完全バッティング！", isImportant: true },
  { date: "2027-02-12", private1st: [], private2nd: ["東京慈恵会医科大", "昭和大"], alert: "⚠️ 最難関・上位2次同士の重複（慈恵・昭和）", isImportant: true },
  { date: "2027-02-25", private1st: ["国公立大2次前期"], private2nd: [], alert: "国公立医学部一斉試験（筆記）" },
  { date: "2027-03-01", private1st: [], private2nd: ["慶應義塾大"], alert: "慶應医学部2次試験" }
];

export default function CalendarPage() {
  const [viewMode, setViewMode] = useState<"matrix" | "list">("matrix");
  const [activeTab, setActiveTab] = useState<"private-1st" | "private-2nd" | "national">("private-1st");
  const [activeArea, setActiveArea] = useState<Area | "all">("all");

  const filteredData = examData.filter((event) => {
    const tabMatch = event.type === activeTab;
    const areaMatch = activeArea === "all" || event.area === activeArea;
    return tabMatch && areaMatch;
  });

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) return dateStr;
    const days = ["日", "月", "火", "水", "木", "金", "土"];
    return `${d.getMonth() + 1}/${d.getDate()} (${days[d.getDay()]})`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Dynamic SEO metadata injected via schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Table",
            "name": "2027年度 医学部受験 入試日程カレンダー",
            "about": "国公立・私立医学部入試の1次試験日、2次試験日、共通テスト日程の一覧"
          })
        }}
      />

      {/* Hero Header */}
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "#c9922a" }}>
            受験情報・合格ナビゲーション
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-noto-serif)", lineHeight: 1.3 }}>
            2027年度 医学部入試日程カレンダー
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            私立医学部の過密な一次試験の「重複」から、二次面接試験の候補日程、国公立二次試験スケジュールまで完全網羅。過去問相性と重複リスクを考慮した出願戦略に活用してください。
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="py-16 px-4 bg-[#f7f5f0]">
        <div className="max-w-5xl mx-auto">
          
          {/* View Mode Toggle */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setViewMode("matrix")}
              className="px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-xs"
              style={{
                backgroundColor: viewMode === "matrix" ? "#0c1a33" : "#white",
                color: viewMode === "matrix" ? "#fff" : "#4b5563",
                border: viewMode === "matrix" ? "1px solid #0c1a33" : "1px solid #e5e1d8",
              }}
            >
              <span>📅</span> 1次・2次バッティング対比表 (おすすめ)
            </button>
            <button
              onClick={() => setViewMode("list")}
              className="px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-xs"
              style={{
                backgroundColor: viewMode === "list" ? "#0c1a33" : "#white",
                color: viewMode === "list" ? "#fff" : "#4b5563",
                border: viewMode === "list" ? "1px solid #0c1a33" : "1px solid #e5e1d8",
              }}
            >
              <span>🔍</span> 詳細日程リスト表示
            </button>
          </div>

          {/* VIEW 1: Matrix Table (Vertically Aligned 1st and 2nd exams) */}
          {viewMode === "matrix" && (
            <div className="bg-white rounded-2xl border shadow-sm overflow-hidden mb-12" style={{ borderColor: "#e5e1d8" }}>
              <div style={{ backgroundColor: "#0c1a33" }} className="p-6 text-white">
                <h2 className="text-lg font-bold flex items-center gap-2" style={{ fontFamily: "var(--font-noto-serif)" }}>
                  <span>📊</span> 1次試験 × 2次試験 縦型バッティング表
                </h2>
                <p className="text-xs mt-1 opacity-75">
                  日付を縦軸にし、その日に実施される「1次筆記試験」と「2次面接試験」を横並びに対比。バッティング関係が一目で把握できます。
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b text-xs font-bold" style={{ backgroundColor: "#f7f5f0", borderColor: "#e5e1d8" }}>
                      <th className="p-4 w-28 whitespace-nowrap text-gray-600">月日 (曜日)</th>
                      <th className="p-4 whitespace-nowrap text-blue-900 bg-blue-50/20" style={{ borderRight: "1px solid #e5e1d8" }}>📝 1次試験 (筆記) を行う大学</th>
                      <th className="p-4 whitespace-nowrap text-amber-900 bg-amber-50/20" style={{ borderRight: "1px solid #e5e1d8" }}>🗣️ 2次試験 (面接・小論文) 候補日の大学</th>
                      <th className="p-4 text-gray-600">🚨 バッティング・併願警戒情報</th>
                    </tr>
                  </thead>
                  <tbody>
                    {matrixData.map((row, idx) => {
                      return (
                        <tr
                          key={idx}
                          className="border-b transition-colors hover:bg-gray-50/50"
                          style={{
                            borderColor: "#e5e1d8",
                            backgroundColor: row.isImportant ? "rgba(201,146,42,0.03)" : ""
                          }}
                        >
                          {/* Date Column */}
                          <td className="p-4 text-xs font-bold whitespace-nowrap text-gray-700">
                            {formatDate(row.date)}
                          </td>

                          {/* 1st Exams Column */}
                          <td className="p-4 text-sm font-semibold bg-blue-50/5" style={{ borderRight: "1px solid #e5e1d8" }}>
                            {row.private1st.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {row.private1st.map((u) => (
                                  <span
                                    key={u}
                                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold text-blue-800 bg-blue-100/70 border border-blue-200"
                                  >
                                    {u}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-300 text-xs">-</span>
                            )}
                          </td>

                          {/* 2nd Exams Column */}
                          <td className="p-4 text-sm font-semibold bg-amber-50/5" style={{ borderRight: "1px solid #e5e1d8" }}>
                            {row.private2nd.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {row.private2nd.map((u) => (
                                  <span
                                    key={u}
                                    className="inline-block px-2.5 py-1 rounded-lg text-xs font-bold text-amber-800 bg-amber-100/70 border border-amber-200"
                                  >
                                    {u}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-300 text-xs">-</span>
                            )}
                          </td>

                          {/* Alert Column */}
                          <td className="p-4 text-xs">
                            {row.alert ? (
                              <span
                                className={`inline-block font-bold leading-relaxed ${
                                  row.isImportant ? "text-red-600" : "text-gray-600"
                                }`}
                              >
                                {row.alert}
                              </span>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* VIEW 2: Detailed List Mode */}
          {viewMode === "list" && (
            <div>
              {/* Calendar Controls */}
              <div className="bg-white p-6 rounded-2xl shadow-xs border mb-8" style={{ borderColor: "#e5e1d8" }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#c9922a" }}>
                  試験カテゴリ選択
                </p>
                
                {/* Category Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {[
                    { id: "private-1st", label: "私立1次日程" },
                    { id: "private-2nd", label: "私立2次日程" },
                    { id: "national", label: "国公立日程" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all ${
                        activeTab === tab.id
                          ? "text-white shadow-sm"
                          : "text-gray-600 hover:bg-gray-50 bg-gray-100/50"
                      }`}
                      style={{
                        backgroundColor: activeTab === tab.id ? "#0c1a33" : "",
                        border: activeTab === tab.id ? "1px solid #0c1a33" : "1px solid #e5e1d8",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#c9922a" }}>
                  エリア絞り込み
                </p>
                {/* Area Filter Buttons */}
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "all", label: "全地域" },
                    { id: "tokyo", label: "首都圏" },
                    { id: "kansai", label: "関西" },
                    { id: "other", label: "その他の地域" },
                  ].map((area) => (
                    <button
                      key={area.id}
                      onClick={() => setActiveArea(area.id as any)}
                      className={`py-2 px-4 rounded-lg text-xs font-bold transition-all ${
                        activeArea === area.id
                          ? "text-white"
                          : "text-gray-600 hover:bg-gray-50 border border-[#e5e1d8]"
                      }`}
                      style={{
                        backgroundColor: activeArea === area.id ? "#c9922a" : "",
                        borderColor: activeArea === area.id ? "#c9922a" : "",
                      }}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Warnings about overlap */}
              {activeTab === "private-1st" && (
                <div className="p-4 rounded-xl mb-6 flex gap-3 text-xs leading-relaxed" style={{ backgroundColor: "rgba(201,146,42,0.08)", border: "1px solid rgba(201,146,42,0.3)" }}>
                  <span className="text-lg">⚠️</span>
                  <div>
                    <strong style={{ color: "#0c1a33" }}>【重要】私立医学部の試験日重複について：</strong>
                    <p className="text-gray-600 mt-0.5">
                      特に<span className="font-bold">「2月1日（順天堂大 vs 日本医科大）」</span>や<span className="font-bold">「1月26日（関西医科大 vs 兵庫医科大）」</span>などの日程重複日は、受験者層が分散するため、どちらに出願するかで合格確率が極めて大きく変動します。偏差値の高さだけで選ばず、過去問の出題形式（英語の記述量や数学の難度相性）をもとに決定するのが合格の秘訣です。
                    </p>
                  </div>
                </div>
              )}

              {/* Event Timeline / List */}
              <div className="space-y-4">
                {filteredData.length > 0 ? (
                  filteredData.map((event, idx) => {
                    const isOverlap = event.overlapGroup;
                    return (
                      <div
                        key={idx}
                        className="bg-white p-5 rounded-2xl border transition-all hover:shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
                        style={{
                          borderColor: isOverlap ? "rgba(201,146,42,0.4)" : "#e5e1d8",
                          borderLeft: isOverlap ? "5px solid #c9922a" : "1px solid #e5e1d8",
                        }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Date Block */}
                          <div
                            className="flex-shrink-0 text-center py-2 px-3 rounded-xl text-white font-bold"
                            style={{
                              backgroundColor: event.type === "national" ? "#1a3a72" : "#0c1a33",
                              minWidth: "90px",
                            }}
                          >
                            <span className="block text-xs opacity-85">2027年</span>
                            <span className="block text-sm" style={{ fontFamily: "var(--font-noto-serif)" }}>{formatDate(event.date)}</span>
                          </div>

                          {/* University Details */}
                          <div>
                            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                              <span
                                className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full"
                                style={{
                                  backgroundColor: event.type === "private-1st" ? "rgba(201,146,42,0.12)" : "rgba(12,26,51,0.08)",
                                  color: event.type === "private-1st" ? "#c9922a" : "#0c1a33",
                                }}
                              >
                                {event.areaLabel}
                              </span>
                              {isOverlap && (
                                <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-red-600 border border-red-100">
                                  ⚠️ 日程重複注意
                                </span>
                              )}
                            </div>
                            <h3 className="text-base font-bold" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
                              {event.university}
                            </h3>
                            {event.note && (
                              <p className="text-xs leading-relaxed text-gray-500 mt-2 max-w-2xl">
                                {event.note}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Deadline and Result Info */}
                        <div className="flex md:flex-col items-end gap-x-4 gap-y-1.5 text-xs text-right border-t md:border-t-0 pt-3 md:pt-0" style={{ borderColor: "#f0ede6" }}>
                          <div className="flex md:block items-center gap-2">
                            <span className="text-gray-400">出願目安:</span>
                            <span className="font-semibold block text-gray-700">{event.deadline}</span>
                          </div>
                          <div className="flex md:block items-center gap-2">
                            <span className="text-gray-400">発表予定:</span>
                            <span className="font-semibold block text-gray-700">{event.announcement}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="bg-white p-12 rounded-2xl border text-center text-gray-500" style={{ borderColor: "#e5e1d8" }}>
                    選択された条件に該当する日程情報が登録されていません。
                  </div>
                )}
              </div>
            </div>
          )}
          
        </div>
      </div>

      {/* Overlap analysis feature section */}
      <div className="py-20 px-4 bg-white border-t" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            医学部受験の「併願戦略」を最適化するポイント
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>1. 一次試験日だけでなく「二次候補日」まで確認する</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                私立医学部の2次試験（面接・小論文）は多くの場合、1次合格後に複数の候補日から自動指定、または選択する形式です。しかし、これが他大学の「1次試験日」と丸被りすることが非常に多くあります。1次出願の段階で、2次候補日と他校の1次が被らないか先回りして「バッティング表」で整理しておくことが鉄則です。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#f7f5f0]" style={{ border: "1px solid #e5e1d8" }}>
              <h3 className="font-bold text-base mb-3" style={{ color: "#0c1a33" }}>2. 過去問の「出題配点・問題形式」から重複日の出願を絞る</h3>
              <p className="text-xs md:text-sm leading-relaxed text-gray-600">
                例えば「順天堂大」と「日本医科大」はどちらも超難関ですが、順天堂大は自由英作文や小論文が重視され、日本医科大は論理記述力や数学の厳密さが問われます。どちらが自分の学力特性（＝白紙から解法を組み立てられるか）と合致しているかを分析し、重複日には「本当に受かる確率の高い1校」に絞り込みます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1次試験と2次試験のバッティング解説 */}
      <div className="py-20 px-4 bg-[#f7f5f0] border-t border-b" style={{ borderColor: "#e5e1d8" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center" style={{ color: "#0c1a33", fontFamily: "var(--font-noto-serif)" }}>
            ⚠️ 多くの受験生が直面する「1次試験と2次試験のバッティング」対策
          </h2>
          <p className="text-xs md:text-sm text-gray-600 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
            私立医学部受験の最大の落とし穴は、「A大学の1次合格」を喜んだのも束の間、その2次試験日（面接・小論文）が「本命であるB大学の1次試験日（筆記）」と完全に重複してしまうケースです。出願前にこのリスクを想定し、対策を練っておく必要があります。
          </p>

          {/* 代表的なバッティング警戒パターン */}
          <h3 className="text-lg font-bold mb-4 animate-pulse" style={{ color: "#0c1a33" }}>代表的なバッティング（被り）の警戒パターン</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                title: "⚡ パターン1: 早期合格校の2次 vs 本命校の1次",
                body: "【国際医療福祉大の2次試験 (2/3付近)】と【東邦大の1次試験 (2/3)】の重複。1次合格を勝ち取った国際医療の面接に行くべきか、それとも東邦大の筆記を受けるべきかという葛藤が生じます。"
              },
              {
                title: "⚡ パターン2: 中堅人気校の2次 vs 後発校の1次",
                body: "【獨協医科大の2次試験 (2/3〜2/4)】と【昭和大の1次試験 (2/4)】の重複。獨協医科大の2次日程は複数候補日から自動指定されるため、昭和大1次と被るリスクが極めて高いです。"
              },
              {
                title: "⚡ パターン3: 御三家・上位校の2次同士のバッティング",
                body: "【順天堂大の2次試験 (2/7〜2/8)】と【日本大N方式の1次試験 (2/7)】や、他校の2次候補日との重複。上位校は2次の面接・小論文を丸一日かけて行うため、他大学の受験機会を奪いやすくなります。"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
                <p className="font-bold text-sm mb-3" style={{ color: "#c9922a" }}>{item.title}</p>
                <p className="text-xs leading-relaxed text-gray-500">{item.body}</p>
              </div>
            ))}
          </div>

          {/* バッティング発生時の「3大意思決定基準」 */}
          <h3 className="text-lg font-bold mb-4" style={{ color: "#0c1a33" }}>バッティングが発生した際の「3つの意思決定基準」</h3>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>1. 出願前に「2次試験日の変更・振替制度」があるか確認する</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                実は多くの私立医学部では、<strong>「他大学の本試験（筆記・1次）と自校の2次試験日が重複した場合に限り、申請することで2次試験日を別日程へ変更・振り替えてくれる救済措置」</strong>を公式に設けています（例：順天堂大、関西医科大、聖マリアンナ医科大など）。出願する大学が「他校本試験との重複による日程変更申請」を受け付けているか、募集要項を事前に精査しておくことが極めて重要です。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>2. 1次の「自己採点・手応え」と進学熱意による期待値判断</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                2次試験の日程変更がどうしても認められない場合は、1次の手応え（合格確信度）と進学熱意から期待値を冷静に天秤にかけます。「1次合格した大学（2次受験）」に行く方が、「これから1次を受ける大学」よりも最終合格への距離は圧倒的に近いです。そのため、基本的には『手応えのある2次試験を最優先する』のが王道ですが、本命校が他にある場合は、事前に『この点数以下なら2次を蹴って本命の1次に行く』という明確なボーダーを定めておくべきです。
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border" style={{ borderColor: "#e5e1d8" }}>
              <h4 className="font-bold text-sm mb-2" style={{ color: "#0c1a33" }}>3. 2次試験が「複数日」から選択可能な大学を戦略的に組み込む</h4>
              <p className="text-xs leading-relaxed text-gray-600">
                出願の段階で、2次試験日を出願時に自ら選択できる大学（例：帝京大など）を意図的にパズルのように配置し、バッティングを最初から避ける予防策が最も安全です。Medvanceでは、全私立医学部の2次試験の振替規定と選択可能日程をデータベース化しており、生徒一人ひとりの出願時にバッティングが起きない「完全セーフティネット型併願計画」を作成しています。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Box */}
      <ColumnCTA
        heading="あなたの模試判定と過去問相性から、最強の「併願黄金ルート」を無料作成します"
        subtext="医学部受験では、実力があっても出願日程の組み方を一つ間違えるだけで「連戦疲労による実力発揮不能」や「二次被りによる受験放棄」が発生します。現役慶應医学部の講師陣が、あなたの偏差値・得意科目から最も安全かつ合格率の高いカレンダーを個別設計いたします。"
      />
    </div>
  );
}
