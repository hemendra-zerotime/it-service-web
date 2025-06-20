"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface BoxRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  boxColor?: string;
  duration?: number; // flip duration
}

export const BoxReveal = ({
  children,
  width = "fit-content",
  boxColor = "#5046e6",
  duration = 1.5,
}: BoxRevealProps) => {
  const animationControls = useAnimation();

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        // Flip in
        await animationControls.start({
          rotateY: 0,
          opacity: 1,
          transition: { duration, ease: "easeInOut" },
        });

        // Hold visible
        await new Promise((r) => setTimeout(r, 4000));

        // Flip out
        await animationControls.start({
          rotateY: 90,
          opacity: 0,
          transition: { duration: 1, ease: "easeInOut" },
        });

        // Instantly reset to hidden start position
        await animationControls.set({ rotateY: -90, opacity: 0 });

        // Small pause before flip-in again (optional)
        await new Promise((r) => setTimeout(r, 300));
      }
    };

    loopAnimation();
  }, [animationControls, duration]);

  return (
    <div
      style={{
        perspective: 1000,
        width,
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={{ rotateY: -90, opacity: 0 }}
        animate={animationControls}
        style={{
          transformStyle: "preserve-3d",
          background: boxColor,
          padding: "0.75rem 1.25rem",
          borderRadius: "0.5rem",
          display: "inline-block",
          color: "white",
          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
