import React, { useEffect, useRef } from "react";

export default function AestheticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const move = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      dot.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      ring.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
    };

    const click = () => {
      ring.classList.add("scale-125", "bg-fuchsia-500/20", "border-fuchsia-400/80");
      setTimeout(() => {
        ring.classList.remove("scale-125", "bg-fuchsia-500/20", "border-fuchsia-400/80");
      }, 180);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", click);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", click);
    };
  }, []);

  return (
    <>
      {/* Neon dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.5)] transition-transform duration-100"
        style={{ mixBlendMode: "lighten" }}
      />
      {/* Glowing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2 border-cyan-400/60 bg-cyan-400/10 shadow-[0_0_32px_8px_rgba(34,211,238,0.18)] transition-all duration-200"
        style={{ filter: "blur(1.5px)", mixBlendMode: "lighten" }}
      />
    </>
  );
}
