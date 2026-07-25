"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Props = {
  /** サイト内 mp4 パス or 外部 https URL（YouTube もフォールバック可） */
  src: string;
  title?: string;
  className?: string;
  /** 任意: ポスター画像 URL */
  poster?: string | null;
};

/** YouTube の各種URLから 11桁 ID（フォールバック用） */
export function extractYoutubeId(raw: string): string | null {
  const url = raw.trim();
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = u.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }
    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com" ||
      host === "youtube-nocookie.com"
    ) {
      if (u.pathname.startsWith("/embed/")) {
        const id = u.pathname.split("/")[2];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      if (u.pathname.startsWith("/shorts/") || u.pathname.startsWith("/live/")) {
        const id = u.pathname.split("/")[2];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      const v = u.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
    }
  } catch {
    /* fall through */
  }
  if (/^[\w-]{11}$/.test(url)) return url;
  return null;
}

function youtubeEmbedUrl(id: string): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

/**
 * 通常はサイト内 mp4 を HTML5 で埋め込み。
 * 重くしない工夫:
 * - 画面付近まで video 要素を作らない
 * - クリックするまで src を付けない（帯域ゼロ）
 * - preload は none / metadata のみ
 * YouTube URL のときだけ iframe フォールバック（同様にクリック後）。
 */
export default function UnitVideoPlayer({
  src,
  title = "授業動画",
  className = "",
  poster = null,
}: Props) {
  const ytId = useMemo(() => extractYoutubeId(src), [src]);
  const shellRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [near, setNear] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = shellRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setNear(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "240px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !videoRef.current) return;
    const v = videoRef.current;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, [playing]);

  const shellClass = `relative w-full overflow-hidden rounded-lg bg-black ${className}`;
  const shellStyle = { aspectRatio: "16 / 9" as const };

  // —— YouTube フォールバック（クリック後のみ iframe）——
  if (ytId) {
    if (!playing) {
      return (
        <div ref={shellRef} className={shellClass} style={shellStyle}>
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full text-left group"
            aria-label={`${title}を再生`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
              loading="lazy"
              decoding="async"
            />
            <PlayOverlay label="再生" />
          </button>
        </div>
      );
    }
    return (
      <div ref={shellRef} className={shellClass} style={shellStyle}>
        <iframe
          title={title}
          src={`${youtubeEmbedUrl(ytId)}&autoplay=1`}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    );
  }

  // —— 通常 mp4: クリックするまで src を付けない ——
  return (
    <div ref={shellRef} className={shellClass} style={shellStyle}>
      {!playing || !near ? (
        <button
          type="button"
          onClick={() => {
            setNear(true);
            setPlaying(true);
          }}
          className="absolute inset-0 w-full h-full text-left group"
          aria-label={`${title}を再生`}
        >
          {poster ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-90"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 20%, #1e3a5f 0%, #0c1a33 55%, #050a12 100%)",
              }}
            />
          )}
          <PlayOverlay label="動画を再生" />
        </button>
      ) : (
        <video
          ref={videoRef}
          controls
          playsInline
          preload="metadata"
          className="h-full w-full bg-black"
          src={src}
          poster={poster || undefined}
          controlsList="nodownload"
        >
          <track kind="captions" />
        </video>
      )}
    </div>
  );
}

function PlayOverlay({ label }: { label: string }) {
  return (
    <>
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: "rgba(0,0,0,0.28)" }}
      >
        <span
          className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg group-hover:scale-105 transition-transform"
          style={{ background: "rgba(12,26,51,0.9)" }}
          aria-hidden
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
        </span>
      </span>
      <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-white/90">
        {label}
      </span>
    </>
  );
}
