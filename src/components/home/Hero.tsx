"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import KiButton from "../KiButton";
import TechChip from "../TechChip";
import DragonBall from "../DragonBall";
import { EASE } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.42, ease: EASE } },
};

function AuraOrb() {
  return (
    <div className="relative flex h-[22rem] w-[22rem] items-center justify-center sm:h-[26rem] sm:w-[26rem]">
      {/* outer ki flare */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,199,44,0.30) 0%, rgba(242,112,28,0.16) 42%, transparent 68%)",
        }}
        animate={{ scale: [1, 1.09, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* rotating rings */}
      <motion.div
        className="absolute inset-6 rounded-full border border-dashed border-ki/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-14 rounded-full border border-saiyan/25"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />

      {/* orbiting dragon balls */}
      {[1, 4, 7].map((stars, i) => (
        <div key={stars} className="absolute inset-4" style={{ transform: `rotate(${i * 120}deg)` }}>
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 18 + i * 7, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 drop-shadow-[0_0_14px_rgba(255,199,44,0.75)]">
              <DragonBall stars={stars as 1 | 4 | 7} size={26} />
            </div>
          </motion.div>
        </div>
      ))}

      {/* core */}
      <motion.div
        className="relative flex h-40 w-40 items-center justify-center rounded-full sm:h-48 sm:w-48"
        style={{
          background:
            "radial-gradient(circle at 38% 32%, #fff6d8, #ffc72c 38%, #f2701c 72%, #8f3703 100%)",
          boxShadow:
            "0 0 70px rgba(255,199,44,0.55), 0 0 140px rgba(242,112,28,0.35), inset 0 0 40px rgba(255,255,255,0.25)",
        }}
        animate={{ scale: [1, 1.035, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-display text-4xl font-black text-[#4a1e00] sm:text-5xl">悟</span>
      </motion.div>

      {/* scouter readout */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="ki-panel absolute -right-2 bottom-8 px-4 py-2.5 sm:-right-6"
      >
        <p className="readout text-[0.7rem]">Power Level</p>
        <p className="font-mono text-xl font-bold text-ki tabular-nums text-glow">9,001</p>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pt-28 pb-16 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] [&>*]:min-w-0">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-namek opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-namek" />
            </span>
            <span className="readout text-namek">Available for new missions</span>
          </motion.div>

          <motion.p variants={item} className="readout mb-3 text-saiyan">
            {site.location}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[2.6rem] leading-[0.98] font-black tracking-tight sm:text-6xl lg:text-[4.2rem]"
          >
            <span className="block text-white">AVINASH</span>
            <span className="saiyan-gradient block text-glow">KONDAVETI</span>
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <h2 className="font-display text-base font-bold tracking-[0.12em] text-white/90 uppercase sm:text-lg">
              {site.title}
            </h2>
            <span className="h-5 w-px bg-saiyan/60" />
            <span className="font-display text-base font-bold tracking-[0.18em] text-ki uppercase sm:text-lg">
              {site.specialty}
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-6 max-w-xl space-y-2">
            {site.intro.map((line) => (
              <p key={line} className="text-[0.98rem] leading-relaxed text-ash">
                {line}
              </p>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <KiButton href={site.resume} external download>
              Resume
            </KiButton>
            <KiButton href="/projects" variant="cyan">
              View Projects
            </KiButton>
            <KiButton href="/contact" variant="ghost">
              Contact
            </KiButton>
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <p className="readout mb-3">Battle Gear</p>
            <div className="flex flex-wrap gap-2">
              {site.heroStack.map((t) => (
                <TechChip key={t} label={t} tone={t === "Go" ? "gold" : "default"} />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="hidden justify-center lg:flex"
        >
          <AuraOrb />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="readout text-[0.7rem] text-ash-dim">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-ki to-transparent"
        />
      </motion.div>
    </section>
  );
}
