import React from "react";

/* ─────────────────────────────────────────────────────────────
   Pentagon Method — light / parents-pay edition
   ───────────────────────────────────────────────────────────── */

const GOLD = "#c9922a";
const GOLD_SOFT = "#b88a26";
const NAVY = "#0c1a33";
const NAVY_INK = "#0c1a33";
const TEXT_BODY = "#4a5568";
const TEXT_MUTED = "#6b7280";
const BORDER = "#e5e1d8";
const CREAM = "#f7f5f0";

/* Line-art icons in navy (1.25 stroke, consistent weight) */
const IconExperts = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="9" cy="8" r="3" />
    <circle cx="17" cy="9.5" r="2.25" />
    <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0M14.5 19.5a4 4 0 0 1 7-2.4" />
  </svg>
);
const IconCap = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 4 2 9l10 5 10-5-10-5z" />
    <path d="M6 11v4.5c0 1.5 2.7 3 6 3s6-1.5 6-3V11" />
    <path d="M22 9v5" />
  </svg>
);
const IconPlan = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="4" y="4" width="16" height="17" rx="1.5" />
    <path d="M8 3v3M16 3v3M4 9h16" />
    <path d="M8 13h4M8 17h7" />
  </svg>
);
const IconDb = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6M5 11.5v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
  </svg>
);
const IconChat = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
  </svg>
);

const items = [
  { num: 1, pillar: "EXPERTISE",  label: "プロ講師エキスパートチーム",     body: "慶應医学部生が代表を務める医学部受験のプロ講師チーム。受験戦略、1対1指導、面接、小論文まで、合格に必要なすべてを一人の担当が一貫して見ます。", Icon: IconExperts },
  { num: 2, pillar: "MENTORSHIP", label: "現役医学部生講師",                   body: "全講師が現役の医学部在籍生。1〜2年前に自ら受験した経験を、科目別の時間配分から当日の心境まで、実体験として直接伝えます。", Icon: IconCap },
  { num: 3, pillar: "15-MIN & SCIENCE", label: "15分単位の計画 × 脳科学メソッド", body: "志望校から逆算した学習計画を15分単位のタスクに細分化。さらに忘却曲線を科学的に制御する脳科学メソッド（能動的想起・分散学習）に基づき、最適な復習スケジュールを完全自動で配分します。", Icon: IconPlan },
  { num: 4, pillar: "DATABASE & AI", label: "データベース × AI", body: "学習計画、医学部必須公式データ、オリジナル添削テキストなどの進捗データを生徒専用データベースへ一元集約。さらにAIによる模試分析や理解度トラッキングを組み込み、個別の弱点を完全に可視化・分析します。", Icon: IconDb },
  { num: 5, pillar: "CARE & FEEDBACK", label: "LINE質問対応・記述問題添削",     body: "授業外での疑問はLINEでいつでも直接質問可能。さらに、英作文や数学の記述答案、過去問の「問題添削」もオンラインで随時受け付け、弱点や論理のズレをその日のうちに解消します。", Icon: IconChat },
];

/* ─ Geometry ───────────────────────────────────────────────── */
const W = 1080;
const H = 920;
const CX = W / 2;
const CY = H / 2;
const CARD_R = 360;
const CARD_W = 282;

const SVG_VB = 400;
const SVG_RENDER = 460;
const SVG_CX = SVG_VB / 2;
const SVG_CY = SVG_VB / 2;
const SVG_VR_OUTER = 158;
const SVG_VR_INNER = 130;
const SVG_VERTEX_R_IN_CONTAINER = SVG_VR_OUTER * (SVG_RENDER / SVG_VB);

const angles = [0, 1, 2, 3, 4].map((i) => -Math.PI / 2 + (i * 2 * Math.PI) / 5);
const outerV = angles.map((a) => ({ x: SVG_CX + SVG_VR_OUTER * Math.cos(a), y: SVG_CY + SVG_VR_OUTER * Math.sin(a) }));
const innerV = angles.map((a) => ({ x: SVG_CX + SVG_VR_INNER * Math.cos(a), y: SVG_CY + SVG_VR_INNER * Math.sin(a) }));
const outerStr = outerV.map((v) => `${v.x.toFixed(2)},${v.y.toFixed(2)}`).join(" ");
const innerStr = innerV.map((v) => `${v.x.toFixed(2)},${v.y.toFixed(2)}`).join(" ");

const cardCenters = angles.map((a) => ({ x: CX + CARD_R * Math.cos(a), y: CY + CARD_R * Math.sin(a) }));
const containerV  = angles.map((a) => ({ x: CX + SVG_VERTEX_R_IN_CONTAINER * Math.cos(a), y: CY + SVG_VERTEX_R_IN_CONTAINER * Math.sin(a) }));
const connEnds    = angles.map((a) => ({ x: CX + (CARD_R - CARD_W / 2 - 22) * Math.cos(a), y: CY + (CARD_R - CARD_W / 2 - 22) * Math.sin(a) }));

const pad2 = (n: number) => n.toString().padStart(2, "0");

/* ─ Pentagon SVG ───────────────────────────────────────────── */
function PentagonSVG() {
  return (
    <svg viewBox={`0 0 ${SVG_VB} ${SVG_VB}`} className="h-full w-full" aria-hidden>
      {/* dashed spokes — very subtle */}
      {outerV.map((v, i) => {
        const dx = v.x - SVG_CX;
        const dy = v.y - SVG_CY;
        const len = Math.sqrt(dx * dx + dy * dy);
        const ux = dx / len;
        const uy = dy / len;
        return (
          <line
            key={`spoke-${i}`}
            x1={SVG_CX + ux * 70} y1={SVG_CY + uy * 70}
            x2={v.x - ux * 22}    y2={v.y - uy * 22}
            stroke="rgba(12,26,51,0.12)" strokeWidth="0.75" strokeDasharray="2 5"
          />
        );
      })}

      {/* outer pentagon */}
      <polygon
        points={outerStr}
        fill="none"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* inner pentagon — softer */}
      <polygon
        points={innerStr}
        fill="rgba(201,146,42,0.04)"
        stroke="rgba(201,146,42,0.35)"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />

      {/* center mark */}
      <line x1={SVG_CX - 40} y1={SVG_CY - 18} x2={SVG_CX + 40} y2={SVG_CY - 18} stroke="rgba(201,146,42,0.6)" strokeWidth="0.5" />
      <line x1={SVG_CX - 40} y1={SVG_CY + 18} x2={SVG_CX + 40} y2={SVG_CY + 18} stroke="rgba(201,146,42,0.6)" strokeWidth="0.5" />
      <text
        x={SVG_CX} y={SVG_CY - 5}
        textAnchor="middle" dominantBaseline="central"
        fill={NAVY}
        fontFamily="var(--font-noto-serif)"
        fontSize="11"
        letterSpacing="2"
        fontWeight="bold"
      >
        Medvance式
      </text>
      <text
        x={SVG_CX} y={SVG_CY + 9}
        textAnchor="middle" dominantBaseline="central"
        fill={GOLD_SOFT}
        fontFamily="var(--font-noto-serif)"
        fontSize="10"
        letterSpacing="2"
        fontWeight="bold"
      >
        勉強法
      </text>

      {/* vertex marks — white circle, gold border, navy number */}
      {outerV.map((v, i) => (
        <g key={`vtx-${i}`}>
          <circle cx={v.x} cy={v.y} r="22" fill="#ffffff" stroke={GOLD} strokeWidth="1.5" />
          <text
            x={v.x} y={v.y + 0.5}
            textAnchor="middle" dominantBaseline="central"
            fill={NAVY}
            fontFamily="var(--font-noto-sans), sans-serif"
            fontSize="13"
            fontWeight="bold"
            letterSpacing="0.5"
          >
            {pad2(i + 1)}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* ─ Card ──────────────────────────────────────────────────── */
function Card({ item }: { item: (typeof items)[number] }) {
  const { Icon } = item;
  return (
    <div
      className="relative h-full rounded-lg p-6"
      style={{
        background: "#ffffff",
        border: `1px solid ${BORDER}`,
        boxShadow: "0 8px 30px -16px rgba(12,26,51,0.12), 0 1px 2px rgba(12,26,51,0.05)",
      }}
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
            style={{
              border: `1px solid ${GOLD}`,
              color: GOLD_SOFT,
              fontFamily: "var(--font-noto-sans), sans-serif",
              backgroundColor: "#ffffff",
            }}
          >
            {pad2(item.num)}
          </span>
          <span
            className="text-[10px] font-semibold tracking-[0.28em]"
            style={{ color: GOLD_SOFT }}
          >
            {item.pillar}
          </span>
        </div>
        <Icon className="h-5 w-5 flex-shrink-0" style={{ color: NAVY_INK, opacity: 0.55 }} />
      </div>

      <p
        className="mb-3 text-base font-bold leading-snug"
        style={{ color: NAVY_INK, fontFamily: "var(--font-noto-serif)" }}
      >
        {item.label}
      </p>

      <div
        className="mb-3 h-px w-8"
        style={{ backgroundColor: GOLD }}
      />

      <p className="text-xs leading-relaxed" style={{ color: TEXT_BODY }}>
        {item.body}
      </p>
    </div>
  );
}

/* ─ Main ──────────────────────────────────────────────────── */
export default function PentagonMethod() {
  return (
    <section
      className="relative overflow-hidden px-4 py-28 md:py-32"
      style={{ backgroundColor: CREAM }}
    >
      {/* top hairline (subtle navy) */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(12,26,51,0.18) 50%, transparent)` }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* eyebrow */}
        <p
          className="mb-5 text-center text-xs font-semibold tracking-[0.35em]"
          style={{ color: GOLD_SOFT }}
        >
          MEDVANCE STUDY METHOD
        </p>

        {/* heading */}
        <h2
          className="mb-5 text-center text-3xl font-bold leading-snug md:text-[2.25rem]"
          style={{ color: NAVY_INK, fontFamily: "var(--font-noto-serif)", letterSpacing: "0.04em" }}
        >
          合格を確実にする「Medvance式勉強法」
        </h2>

        {/* subtitle */}
        <p
          className="mx-auto mb-20 max-w-2xl text-center text-sm leading-relaxed"
          style={{ color: TEXT_BODY }}
        >
          合格に必要な学習管理、データベース×AIによる進捗管理、LINEでの質問対応・問題添削まで。<br className="hidden md:block" />
          単なる個別指導ではなく、自学自習の効率を極限まで引き上げるMedvance独自の勉強法です。
        </p>

        {/* Desktop layout */}
        <div className="hidden lg:block">
          <div className="relative mx-auto" style={{ width: W, height: H, maxWidth: "100%" }}>
            {/* connector lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox={`0 0 ${W} ${H}`}
              aria-hidden
            >
              {containerV.map((v, i) => (
                <line
                  key={`conn-${i}`}
                  x1={v.x} y1={v.y}
                  x2={connEnds[i].x} y2={connEnds[i].y}
                  stroke={GOLD}
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
            </svg>

            {/* Pentagon */}
            <div
              className="absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: SVG_RENDER,
                height: SVG_RENDER,
              }}
            >
              <PentagonSVG />
            </div>

            {/* Cards at each vertex */}
            {items.map((item, i) => (
              <div
                key={item.num}
                className="absolute"
                style={{
                  left: cardCenters[i].x,
                  top: cardCenters[i].y,
                  transform: "translate(-50%, -50%)",
                  width: CARD_W,
                }}
              >
                <Card item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & mobile */}
        <div className="lg:hidden">
          <div className="mx-auto mb-14 w-full max-w-md" style={{ aspectRatio: "1/1" }}>
            <PentagonSVG />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item) => (
              <Card key={item.num} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* bottom hairline */}
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgba(12,26,51,0.18) 50%, transparent)` }}
      />
    </section>
  );
}
