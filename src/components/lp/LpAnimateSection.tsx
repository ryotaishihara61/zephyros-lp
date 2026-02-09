"use client";

import { useRef, useEffect, type ReactNode } from "react";

interface LpAnimateSectionProps {
  children: ReactNode;
  className?: string;
}

/** スクロールで表示領域に入ったらふわっとフェードインするラッパー */
export function LpAnimateSection({
  children,
  className = "",
}: LpAnimateSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
          }
        });
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 translate-y-6 transition-all duration-700 ease-out [&[data-visible=true]]:opacity-100 [&[data-visible=true]]:translate-y-0 ${className}`}
    >
      {children}
    </div>
  );
}
