"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import TechChip from "./TechChip";
import { itemVariants } from "./Reveal";

export default function ProjectCard({ project }: { project: Project }) {
  const headline = project.results[0];

  return (
    <motion.article
      variants={itemVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="ki-panel ki-panel-hover hud-frame scanlines group flex h-full flex-col p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="readout text-saiyan">{project.saga}</span>
        <span className="font-mono text-[0.72rem] text-ash-dim">{project.period}</span>
      </div>

      <h3 className="font-display text-lg font-bold text-white transition-colors group-hover:text-ki">
        {project.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ash">{project.tagline}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 5).map((t) => (
          <TechChip key={t} label={t} />
        ))}
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <div>
          <p className="font-display text-2xl font-black text-ki text-glow">
            {headline.metric}
          </p>
          <p className="mt-0.5 max-w-[14rem] text-[0.7rem] leading-snug text-ash-dim">
            {headline.label}
          </p>
        </div>

        <Link
          href={`/projects#${project.slug}`}
          className="-my-2 inline-flex items-center gap-1.5 py-2 font-display text-[0.72rem] font-bold tracking-[0.16em] text-saiyan uppercase transition-colors hover:text-ki"
        >
          Scan
          <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
