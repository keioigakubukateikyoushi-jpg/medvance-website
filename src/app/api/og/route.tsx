import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "Medvance";
  const category = searchParams.get("cat") || "";

  // Truncate title for display
  const displayTitle = title.length > 52 ? title.slice(0, 50) + "…" : title;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0c1a33",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 72px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#c9922a",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", gap: "24px" }}>
          {/* Category badge */}
          {category && (
            <div style={{ display: "flex" }}>
              <div
                style={{
                  background: "rgba(201,146,42,0.2)",
                  border: "1px solid rgba(201,146,42,0.5)",
                  borderRadius: "24px",
                  padding: "6px 20px",
                  color: "#c9922a",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  display: "flex",
                }}
              >
                {category}
              </div>
            </div>
          )}

          {/* Title */}
          <div
            style={{
              color: "#ffffff",
              fontSize: displayTitle.length > 30 ? "52px" : "60px",
              fontWeight: 800,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              display: "flex",
              maxWidth: "980px",
            }}
          >
            {displayTitle}
          </div>

          {/* Subtitle */}
          <div
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "24px",
              fontWeight: 400,
              display: "flex",
            }}
          >
            現役慶應医学部生による完全1対1個別指導
          </div>
        </div>

        {/* Bottom: branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Logo placeholder - M letter mark */}
            <div
              style={{
                width: "48px",
                height: "48px",
                background: "#c9922a",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "26px",
                fontWeight: 800,
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 700, display: "flex" }}>
                Medvance
              </span>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "17px", display: "flex" }}>
                medvance-edu.com
              </span>
            </div>
          </div>

          {/* Features */}
          <div style={{ display: "flex", gap: "20px" }}>
            {["完全1対1", "全国オンライン", "無料相談あり"].map((feat) => (
              <div
                key={feat}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "18px",
                  display: "flex",
                }}
              >
                {feat}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
