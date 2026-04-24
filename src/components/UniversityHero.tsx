import Image from "next/image";
import type { ReactNode } from "react";
import { getUniversityImage } from "@/lib/universityImages";

type Props = {
  slug: string;
  children: ReactNode;
};

/**
 * 大学ページのヒーロー領域。
 * 該当する大学の実写があれば背景として敷き、暗めのグラデーションを重ねて可読性を保つ。
 * 画像がないスラッグでは従来通りのnavy背景にフォールバック。
 */
export default function UniversityHero({ slug, children }: Props) {
  const image = getUniversityImage(slug);

  if (!image) {
    return (
      <div style={{ backgroundColor: "#0c1a33" }} className="py-20 px-4">
        {children}
      </div>
    );
  }

  return (
    <div className="relative isolate" style={{ backgroundColor: "#0c1a33" }}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        priority
        className="object-cover"
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(180deg, rgba(12,26,51,0.62) 0%, rgba(12,26,51,0.78) 55%, rgba(12,26,51,0.94) 100%)",
        }}
      />
      <div className="relative z-10 py-24 px-4">{children}</div>
      {image.credit && (
        <p
          className="pointer-events-none absolute bottom-2 right-3 z-10 text-[10px]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          {image.credit}
        </p>
      )}
    </div>
  );
}
