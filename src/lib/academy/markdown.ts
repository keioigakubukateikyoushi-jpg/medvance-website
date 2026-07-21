/**
 * Safe markdown → HTML for Medvance lessons (no raw HTML).
 * Keeps $...$ / $$...$$ for client-side KaTeX.
 */
export function academyMarkdownToHtml(src: string): string {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const out: string[] = [];
  let inList = false;
  let inOl = false;

  const flushUl = () => {
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
  };
  const flushOl = () => {
    if (inOl) {
      out.push("</ol>");
      inOl = false;
    }
  };
  const flush = () => {
    flushUl();
    flushOl();
  };

  for (const raw of lines) {
    const line = raw;
    if (/^\s*---+\s*$/.test(line)) {
      flush();
      out.push("<hr />");
      continue;
    }
    if (line.startsWith("### ")) {
      flush();
      out.push(`<h3>${inline(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flush();
      out.push(`<h2>${inline(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      flush();
      out.push(`<p class="academy-kicker">${inline(line.slice(2))}</p>`);
      continue;
    }
    if (/^[-*] /.test(line)) {
      flushOl();
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${inline(line.slice(2))}</li>`);
      continue;
    }
    if (/^\d+\.\s/.test(line)) {
      flushUl();
      if (!inOl) {
        out.push("<ol>");
        inOl = true;
      }
      out.push(`<li>${inline(line.replace(/^\d+\.\s/, ""))}</li>`);
      continue;
    }
    if (line.trim() === "") {
      flush();
      continue;
    }
    // skip pure copyright lines in body (footer on page)
    if (/^©\s*Medvance/.test(line.trim())) {
      flush();
      continue;
    }
    flush();
    const t = line.trim();
    if (t.startsWith("ゴール") || t.startsWith("今日のゴール") || t.startsWith("答え")) {
      out.push(`<p class="academy-goal">${inline(line)}</p>`);
    } else if (/^ブランド:|^科目:|^章:|^目安:|^前提:|^次:/.test(t.replace(/^[-*]\s*/, ""))) {
      out.push(`<p class="academy-meta">${inline(line)}</p>`);
    } else {
      out.push(`<p>${inline(line)}</p>`);
    }
  }
  flush();
  return out.join("\n");
}

/** Escape HTML but preserve $math$ spans for KaTeX */
function inline(s: string): string {
  const parts: { t: "text" | "math"; v: string }[] = [];
  const re = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(s))) {
    if (m.index > last) parts.push({ t: "text", v: s.slice(last, m.index) });
    parts.push({ t: "math", v: m[0] });
    last = m.index + m[0].length;
  }
  if (last < s.length) parts.push({ t: "text", v: s.slice(last) });

  return parts
    .map((p) => {
      if (p.t === "math") return p.v;
      return escText(p.v)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/`([^`]+)`/g, "<code>$1</code>")
        .replace(
          /(ME-[A-Z0-9-]+|ADV-[A-Z0-9-]+|ELI-[A-Z0-9-]+)/g,
          '<span class="academy-id">$1</span>',
        );
    })
    .join("");
}

function escText(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
