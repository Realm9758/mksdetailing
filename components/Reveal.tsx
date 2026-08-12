"use client";

import { useEffect, useRef } from "react";

/**
 * The page's one authored motion: a stamp landing.
 *
 * Elements start a little oversized, softly out of focus and turned a degree
 * or two off square, then settle. That is what a rubber stamp does, and it is
 * the only entrance on the page, so the document reads as being marked up
 * rather than as a slideshow of unrelated fades.
 *
 * The pre-state is applied by script and never by the server, so with
 * JavaScript off, or before hydration, every word is already on the page.
 * Only content below the first viewport uses this.
 */
export function Reveal({
  children,
  delay = 0,
  rotate = "-1.2deg",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  rotate?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    el.dataset.stamp = "pre";
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.stamp = "in";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    io.observe(el);

    // If anything goes wrong with the observer, the content still arrives.
    const failsafe = window.setTimeout(() => {
      el.dataset.stamp = "in";
    }, 2500);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        {
          "--stamp-delay": `${delay}ms`,
          "--stamp-in-rotate": rotate,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
