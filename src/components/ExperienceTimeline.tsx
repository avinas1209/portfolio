"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import type { Experience } from "@/data/experience";
import DragonBall from "./DragonBall";
import TechChip from "./TechChip";
import PowerLevelBar from "./PowerLevelBar";
import { EASE } from "@/lib/motion";

function Entry({ exp, index }: { exp: Experience; index: number }) {
  const stars = (Math.min(4, index + 1) as 1 | 2 | 3 | 4);

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.4, ease: EASE }}
      className="defer-paint relative pl-14 sm:pl-20"
    >
      {/* node */}
      <span className="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full border border-ki/30 bg-[#080a12] sm:h-12 sm:w-12">
        <span className="animate-pulse-ki absolute inset-0 rounded-full" />
        <DragonBall stars={stars} size={26} />
      </span>

      <article className="ki-panel ki-panel-hover scanlines p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="readout mb-2 text-saiyan">{exp.saga}</p>
            <h3 className="font-display text-lg font-black text-white sm:text-xl">
              {exp.company}
            </h3>
            <p className="mt-1 font-display text-sm font-semibold tracking-wide text-ki">
              {exp.role}
            </p>
          </div>
          <span className="shrink-0 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.72rem] whitespace-nowrap text-ash">
            {exp.period}
          </span>
        </div>

        <p className="mt-5 text-[0.95rem] leading-relaxed text-ash">{exp.summary}</p>

        <div className="mt-6 max-w-xs">
          <PowerLevelBar
            label="Power level at exit"
            value={exp.powerLevel}
            accent={index === 0 ? "gold" : "orange"}
          />
        </div>

        <div className="mt-7">
          <p className="readout mb-3">Key Responsibilities</p>
          <ul className="space-y-2.5">
            {exp.responsibilities.map((r) => (
              <li key={r} className="flex gap-3 text-[0.92rem] leading-relaxed text-ash">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-saiyan/80" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <p className="readout mb-3">Quantifiable Impact</p>
          <div className="grid gap-3 sm:grid-cols-3">
            {exp.achievements.map((a) => (
              <div
                key={a.label}
                className="rounded-xl border border-ki/20 bg-ki/[0.05] px-4 py-3.5"
              >
                <p className="font-display text-xl font-black text-ki">{a.metric}</p>
                <p className="mt-0.5 text-[0.72rem] leading-snug text-ash">{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-1.5 border-t border-white/5 pt-5">
          {exp.stack.map((t) => (
            <TechChip key={t} label={t} />
          ))}
        </div>
      </article>
    </motion.li>
  );
}

export default function ExperienceTimeline({ items }: { items: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 26 });

  return (
    <div ref={ref} className="relative mx-auto max-w-4xl">
      {/* rail */}
      <div className="absolute top-2 bottom-2 left-[1.35rem] w-px bg-white/8 sm:left-6" />
      <motion.div
        style={{ scaleY }}
        className="absolute top-2 bottom-2 left-[1.35rem] w-px origin-top bg-gradient-to-b from-ki via-saiyan to-saiyan/0 shadow-[0_0_16px_rgba(255,199,44,0.7)] sm:left-6"
      />

      <ul className="space-y-10">
        {items.map((exp, i) => (
          <Entry key={exp.company} exp={exp} index={i} />
        ))}
      </ul>
    </div>
  );
}
