"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/data/skills";
import { MAX_POWER } from "@/data/skills";
import PowerLevelBar, { ACCENTS } from "./PowerLevelBar";

export default function SkillGroupPanel({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const color = ACCENTS[group.accent];

  return (
    <motion.section
      id={group.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.4, delay: (index % 2) * 0.04 }}
      className="ki-panel ki-panel-hover hud-frame defer-paint scroll-mt-28 overflow-hidden p-7 sm:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-10 -right-6 select-none font-display text-[7rem] leading-none"
        style={{ color: `${color}14` }}
      >
        {group.kanji}
      </div>

      <div className="relative mb-7">
        <div className="mb-2 flex items-center gap-3">
          <span
            className="h-2.5 w-2.5 rotate-45"
            style={{ background: color, boxShadow: `0 0 12px ${color}` }}
          />
          <h3 className="font-display text-base font-black tracking-wide text-white uppercase">
            {group.title}
          </h3>
          <span className="font-mono text-[0.72rem] text-ash-dim">
            {group.skills.length} entries
          </span>
        </div>
        <p className="text-sm text-ash">{group.blurb}</p>
      </div>

      <div className="relative space-y-5">
        {group.skills.map((s, i) => (
          <PowerLevelBar
            key={s.name}
            label={s.name}
            note={s.note}
            value={s.power}
            max={MAX_POWER}
            accent={group.accent}
            delay={i * 0.06}
          />
        ))}
      </div>
    </motion.section>
  );
}
