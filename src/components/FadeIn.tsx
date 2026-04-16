import type { CSSProperties } from "react";

/**
 * Server component — zero hydration cost.
 * Visibility is toggled by a tiny vanilla-JS IntersectionObserver
 * injected once in the root layout (see FadeInObserver.tsx).
 */
export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const style: CSSProperties = delay
    ? ({ "--fi-delay": `${delay}s` } as CSSProperties)
    : {};

  return (
    <div className={`fade-in-el${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
