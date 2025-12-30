import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AestheticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring configuration for a faster, smoother follow
  // Stiffness -> Higher = Faster
  // Damping -> Lower = More bounce, Higher = Less overshoot
  const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const mouseDown = () => setIsClicked(true);
    const mouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Neon Dot - Instant Follow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_4px_rgba(34,211,238,0.8)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "screen",
        }}
      />

      {/* Glowing Ring - Smooth Spring Follow */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2 border-cyan-400/60 bg-cyan-400/5 shadow-[0_0_32px_8px_rgba(34,211,238,0.15)]"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(1px)",
          mixBlendMode: "screen",
        }}
        animate={{
          scale: isClicked ? 1.5 : 1,
          borderColor: isClicked ? "rgba(232, 121, 249, 0.9)" : "rgba(34, 211, 238, 0.6)",
          backgroundColor: isClicked ? "rgba(232, 121, 249, 0.1)" : "rgba(34, 211, 238, 0.05)",
        }}
        transition={{
          scale: { duration: 0.15 },
          borderColor: { duration: 0.15 },
          backgroundColor: { duration: 0.15 },
        }}
      />
    </>
  );
}
