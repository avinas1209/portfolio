"use client";

import { motion } from "framer-motion";

type Props = {
  kanji?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  kanji,
  eyebrow,
  title,
  subtitle,
  align = "left",
}: Props) {
  const centered = align === "center";

  return (
    <div className={`relative ${centered ? "text-center" : ""}`}>
      {kanji && (
        <span
          aria-hidden
          className={`pointer-events-none absolute -top-8 select-none font-display text-[6rem] leading-none text-white/[0.045] sm:text-[8rem] ${
            centered ? "left-1/2 -translate-x-1/2" : "-left-2"
          }`}
        >
          {kanji}
        </span>
      )}

      <div className="relative">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`readout mb-3 flex items-center gap-3 ${centered ? "justify-center" : ""}`}
          >
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-saiyan" />
            {eyebrow}
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-saiyan" />
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="font-display text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl"
        >
          <span className="saiyan-gradient">{title}</span>
        </motion.h2>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.3 }}
            className={`mt-4 max-w-2xl text-[0.98rem] leading-relaxed text-ash ${
              centered ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
