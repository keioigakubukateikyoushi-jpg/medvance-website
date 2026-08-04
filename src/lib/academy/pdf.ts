import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import type { AcademyUnit } from "./types";

export type QuizForPdf = {
  questions?: Array<{
    prompt?: string;
    question?: string;
    choices?: string[];
    answer?: string | number;
    explanation?: string;
    explain?: string;
  }>;
};

/** answer は選択肢テキストの場合と choices への数値インデックスの場合がある。 */
function resolveAnswerText(q: { choices?: string[]; answer?: string | number }): string | null {
  if (typeof q.answer === "number") return q.choices?.[q.answer] ?? null;
  return q.answer || null;
}

/** 簡易 LaTeX コマンド展開（API PDF の数式文字化け・生LaTeX残存対策） */
function latexCommands(s: string): string {
  let t = s;
  for (let i = 0; i < 6; i++) {
    const n = t
      .replace(/\\dfrac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
      .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
      .replace(/\\sqrt\{([^{}]+)\}/g, "√($1)")
      .replace(/\\sqrt/g, "√")
      .replace(/\\cdot/g, "·")
      .replace(/\\cdots|\\ldots|\\dots/g, "…")
      .replace(/\\times/g, "×")
      .replace(/\\pm/g, "±")
      .replace(/\\neq|\\ne/g, "≠")
      .replace(/\\leq|\\le/g, "≤")
      .replace(/\\geq|\\ge/g, "≥")
      .replace(/\\left|\\right/g, "")
      .replace(/\\,/g, " ")
      .replace(/\\;/g, " ")
      .replace(/\\quad/g, "  ")
      .replace(/\\text\{([^{}]*)\}/g, "$1")
      .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
      .replace(/\^{([^{}]+)}/g, "^($1)")
      .replace(/_\{([^{}]+)}/g, "_($1)")
      .replace(/\^(\w)/g, "^$1")
      .replace(/_(\w)/g, "_$1");
    if (n === t) break;
    t = n;
  }
  return t
    .replace(/\\([a-zA-Z]+)/g, "$1")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function latexToPlain(s: string): string {
  return s
    .replace(/\$\$([\s\S]+?)\$\$/g, (_: string, m: string) => ` ${latexCommands(m)} `)
    .replace(/\$([^$\n]+?)\$/g, (_: string, m: string) => latexCommands(m))
    .replace(/\\[a-zA-Z]+(?:\{[^{}]*\})*/g, (cmd) => {
      // 残った裸のコマンドも展開
      if (cmd.includes("{")) return latexCommands(cmd);
      return latexCommands(cmd);
    });
}

export function markdownToPlain(md: string): string {
  return latexToPlain(
    md
      .replace(/\r\n/g, "\n")
      .replace(/^#{1,6}\s+/gm, "")
      .replace(/\*\*(.+?)\*\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/^[-*]\s+/gm, "・ ")
      .replace(/^---+$/gm, ""),
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function sectionize(md: string): { heading: string; body: string }[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const sections: { heading: string; body: string }[] = [];
  let heading = "本文";
  let buf: string[] = [];
  const push = () => {
    const body = buf.join("\n").trim();
    if (body) sections.push({ heading, body });
    buf = [];
  };
  for (const line of lines) {
    if (/^##\s+/.test(line)) {
      push();
      heading = line.replace(/^##\s+/, "").trim();
      continue;
    }
    if (/^#\s+/.test(line)) continue;
    buf.push(line);
  }
  push();
  return sections;
}

function resolveJpFont(): string | null {
  // TTF を優先（OTF/Variable は pdfkit で字形欠けしやすい）
  const candidates = [
    path.join(process.cwd(), "public", "fonts", "NotoSansJP-Regular.ttf"),
    "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
    "/Library/Fonts/Arial Unicode.ttf",
    path.join(process.cwd(), "public", "fonts", "NotoSansJP-Regular.otf"),
    "/System/Library/Fonts/Supplemental/AppleGothic.ttf",
    "/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc",
    "/System/Library/Fonts/Hiragino Sans GB.ttc",
  ];
  for (const f of candidates) {
    if (fs.existsSync(f)) return f;
  }
  return null;
}

export async function buildUnitPdf(opts: {
  unit: AcademyUnit;
  subjectLabel: string;
  trackLabel: string;
  lessonMd: string;
  quiz?: QuizForPdf | null;
}): Promise<Buffer> {
  const { unit, subjectLabel, trackLabel, lessonMd, quiz } = opts;
  const jpFont = resolveJpFont();
  if (!jpFont) {
    throw new Error(
      "Japanese font not found. Place NotoSansJP-Regular.ttf in public/fonts/ or install Arial Unicode.",
    );
  }

  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margins: { top: 56, bottom: 56, left: 54, right: 54 },
        bufferPages: true,
        // Avoid default Helvetica load issues under some bundlers by setting font after create
        font: jpFont,
        info: {
          Title: `${unit.id} ${unit.title} | Medvance`,
          Author: "Medvance",
          Subject: subjectLabel,
        },
      });

      const chunks: Buffer[] = [];
      doc.on("data", (c) => chunks.push(c as Buffer));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      doc.registerFont("JP", jpFont);
      doc.font("JP");

      const navy = "#0c1a33";
      const gold = "#c9922a";
      const muted = "#4b5563";

      doc.rect(0, 0, doc.page.width, 8).fill(gold);
      doc.moveDown(1.2);
      doc.fontSize(10).fillColor(gold).text("MEDVANCE");
      doc.moveDown(0.25);
      doc.fontSize(9).fillColor(muted).text(`${trackLabel}  /  ${subjectLabel}`);
      doc.moveDown(0.7);
      doc.fontSize(14).fillColor(navy).text(unit.id);
      doc.fontSize(16).fillColor(navy).text(unit.title, { lineGap: 4 });
      doc.moveDown(0.45);
      doc.fontSize(11).fillColor(muted).text(`ゴール: ${unit.goal}`, { lineGap: 3 });
      doc.moveDown(0.25);
      doc.fontSize(9).fillColor(muted).text(`目安 ${unit.minutes}分  ·  ${unit.chapter}`);
      if (unit.prereq?.length) {
        doc.text(`前提: ${unit.prereq.join(", ")}`);
      }
      doc.moveDown(0.7);
      doc
        .moveTo(54, doc.y)
        .lineTo(doc.page.width - 54, doc.y)
        .strokeColor("#e5e1d8")
        .stroke();
      doc.moveDown(0.7);

      for (const sec of sectionize(lessonMd)) {
        if (doc.y > doc.page.height - 100) doc.addPage();
        doc.font("JP").fontSize(12).fillColor(navy).text(sec.heading, { lineGap: 2 });
        doc.moveDown(0.2);
        doc
          .font("JP")
          .fontSize(10)
          .fillColor("#1f2937")
          .text(markdownToPlain(sec.body), { lineGap: 3, paragraphGap: 4 });
        doc.moveDown(0.55);
      }

      if (quiz?.questions?.length) {
        if (doc.y > doc.page.height - 120) doc.addPage();
        doc.moveDown(0.3);
        doc
          .moveTo(54, doc.y)
          .lineTo(doc.page.width - 54, doc.y)
          .strokeColor("#e5e1d8")
          .stroke();
        doc.moveDown(0.55);
        doc.font("JP").fontSize(12).fillColor(navy).text("確認クイズ");
        doc.moveDown(0.35);
        quiz.questions.forEach((q, i) => {
          if (doc.y > doc.page.height - 90) doc.addPage();
          const prompt = q.prompt || q.question || "";
          doc
            .font("JP")
            .fontSize(10)
            .fillColor(navy)
            .text(`Q${i + 1}. ${markdownToPlain(prompt)}`, { lineGap: 2 });
          if (q.choices?.length) {
            doc.font("JP").fontSize(9).fillColor(muted);
            q.choices.forEach((c, j) => {
              doc.text(`   ${String.fromCharCode(65 + j)}. ${markdownToPlain(c)}`);
            });
          }
          const answerText = resolveAnswerText(q);
          if (answerText) {
            doc.font("JP").fontSize(9).fillColor("#17633a").text(`解答: ${markdownToPlain(answerText)}`);
          }
          const explain = q.explanation || q.explain;
          if (explain) {
            doc.font("JP").fontSize(8).fillColor(muted).text(`解説: ${markdownToPlain(explain)}`);
          }
          doc.moveDown(0.4);
        });
      }

      const range = doc.bufferedPageRange();
      for (let i = range.start; i < range.start + range.count; i++) {
        doc.switchToPage(i);
        doc.font("JP").fontSize(8).fillColor("#9ca3af");
        doc.text(
          `Medvance  ·  ${unit.id}  ·  ${i - range.start + 1}/${range.count}  ·  無断転載禁止`,
          54,
          doc.page.height - 36,
          { width: doc.page.width - 108, align: "center" },
        );
      }

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}
