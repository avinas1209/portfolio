"use client";

import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** The green scouter HUD: boots up, scans, then holds the total reading. */
export default function Scouter({ total }: { total: number }) {
  const [reading, setReading] = useState(0);
  const [status, setStatus] = useState("Booting");

  useEffect(() => {
    const t1 = setTimeout(() => setStatus("Scanning"), 500);
    const controls = animate(0, total, {
      duration: 2.2,
      delay: 0.7,
      ease: "circOut",
      onUpdate: (v) => setReading(Math.round(v)),
      onComplete: () => setStatus("Locked"),
    });
    return () => {
      clearTimeout(t1);
      controls.stop();
    };
  }, [total]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="ki-panel scanlines relative overflow-hidden p-6 sm:p-8"
      style={{ borderColor: "rgba(53,208,127,0.28)" }}
    >
      {/* sweep */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-namek/12 to-transparent"
        animate={{ x: ["-10%", "320%"] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="readout mb-2 text-namek">Scouter Readout</p>
          <p className="font-display text-3xl font-black text-namek sm:text-4xl">
            <span className="tabular-nums">{reading.toLocaleString()}</span>
            <span className="ml-2 text-sm font-bold tracking-[0.2em] text-namek/60 uppercase">
              total
            </span>
          </p>
          <p className="mt-2 max-w-md text-sm text-ash">
            Combined reading across every discipline. Individual bars are scaled against a
            9,001 ceiling, because of course they are.
          </p>
        </div>

        <div className="shrink-0 space-y-2 font-mono text-[0.72rem] text-namek/80">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-namek" />
            STATUS: {status.toUpperCase()}
          </div>
          <div>MODE: DEEP SCAN</div>
          <div>TARGET: BACKEND</div>
        </div>
      </div>
    </motion.div>
  );
}
