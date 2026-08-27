"use client";

import { motion } from "framer-motion";
import DragonBall from "./DragonBall";

type Props = {
  stars: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  eyebrow: string;
  title: string;
  kanji: string;
  description: string;
};

export default function PageHeader({ stars, eyebrow, title, kanji, description }: Props) {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,112,28,0.22),transparent_68%)] blur-2xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute top-16 right-4 select-none font-display text-[9rem] leading-none text-white/[0.04] sm:right-10 sm:text-[13rem]"
      >
        {kanji}
      </span>

      <div className="relative mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="mb-5 inline-block drop-shadow-[0_0_22px_rgba(255,199,44,0.55)]"
        >
          <DragonBall stars={stars} size={44} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -14 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.04, duration: 0.3 }}
          className="readout mb-3"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
          className="font-display text-4xl font-black tracking-tight sm:text-6xl"
        >
          <span className="saiyan-gradient">{title}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.14, duration: 0.35 }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-ash"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-8 h-px origin-left bg-gradient-to-r from-saiyan via-ki/50 to-transparent"
        />
      </div>
    </section>
  );
}
