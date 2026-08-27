"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ACCENTS = {
  orange: "#f2701c",
  gold: "#ffc72c",
  blue: "#2b7fff",
  green: "#35d07f",
  purple: "#a970ff",
  cyan: "#35e0f5",
  red: "#ff4d4d",
} as const;

export type Accent = keyof typeof ACCENTS;

type Props = {
  label: string;
  note?: string;
  value: number;
  max?: number;
  accent?: Accent;
  delay?: number;
};

export default function PowerLevelBar({
  label,
  note,
  value,
  max = 9001,
  accent = "gold",
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);
  const color = ACCENTS[accent];
  const pct = Math.min(100, Math.round((value / max) * 100));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.25,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, delay]);

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-baseline justify-between gap-4">
        <div className="min-w-0">
          <span className="font-display text-[0.82rem] font-semibold tracking-wide text-white">
            {label}
          </span>
          {note && (
            <span className="ml-2 hidden truncate text-xs text-ash-dim sm:inline">
              {note}
            </span>
          )}
        </div>
        <span
          className="font-mono text-[0.72rem] tabular-nums"
          style={{ color, textShadow: `0 0 10px ${color}66` }}
        >
          {display.toLocaleString()}
        </span>
      </div>

      <div className="relative h-[7px] overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/[0.06]">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.25, delay, ease: "easeOut" }}
          className="relative h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}55, ${color})`,
            boxShadow: `0 0 14px ${color}88`,
          }}
        >
          <span
            className="absolute inset-y-0 right-0 w-3 rounded-full opacity-90"
            style={{ background: `linear-gradient(90deg, transparent, ${color})` }}
          />
        </motion.div>
      </div>
    </div>
  );
}
