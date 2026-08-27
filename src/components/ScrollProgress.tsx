"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Kamehameha beam that charges as you scroll. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX: width }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-kame via-ki to-saiyan shadow-[0_0_18px_rgba(53,224,245,0.8)]"
    />
  );
}
