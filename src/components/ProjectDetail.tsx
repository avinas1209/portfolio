"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import TechChip from "./TechChip";
import PowerLevelBar from "./PowerLevelBar";
import { EASE } from "@/lib/motion";

function Block({
  kanji,
  title,
  children,
  accent = "text-saiyan",
}: {
  kanji: string;
  title: string;
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <div className="relative">
      <div className="mb-4 flex items-center gap-3">
        <span className={`font-display text-lg leading-none ${accent}`} aria-hidden>
          {kanji}
        </span>
        <h4 className="font-display text-[0.72rem] font-bold tracking-[0.2em] text-white uppercase">
          {title}
        </h4>
        <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
      {children}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((it) => (
        <li key={it} className="flex gap-3 text-[0.92rem] leading-relaxed text-ash">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-saiyan/80" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ProjectDetail({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const hasLinks = Boolean(project.links.github || project.links.demo);

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.4, ease: EASE }}
      className="ki-panel hud-frame defer-paint scroll-mt-28 overflow-hidden"
    >
      {/* header */}
      <header className="relative border-b border-white/8 bg-gradient-to-r from-saiyan/[0.09] via-transparent to-transparent p-7 sm:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute top-4 right-6 font-display text-6xl leading-none font-black text-white/[0.05] sm:text-8xl"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative">
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="readout text-saiyan">{project.saga}</span>
            <span className="h-3 w-px bg-white/15" />
            <span className="font-mono text-[0.72rem] text-ash-dim">{project.period}</span>
            <span className="h-3 w-px bg-white/15" />
            <span className="font-mono text-[0.72rem] text-ash-dim">{project.role}</span>
          </div>

          <h3 className="font-display text-2xl font-black tracking-tight text-white sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 max-w-2xl text-[0.98rem] leading-relaxed text-ash">
            {project.tagline}
          </p>

          <div className="mt-6 max-w-sm">
            <PowerLevelBar
              label="Complexity reading"
              value={project.powerLevel}
              accent="gold"
            />
          </div>
        </div>
      </header>

      <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="space-y-10">
          <Block kanji="問" title="The Problem">
            <p className="text-[0.92rem] leading-relaxed text-ash">{project.problem}</p>
          </Block>

          <Block kanji="築" title="Architecture" accent="text-kame">
            <Bullets items={project.architecture} />
          </Block>
        </div>

        <div className="space-y-10">
          <Block kanji="我" title="My Contribution" accent="text-ki">
            <Bullets items={project.contribution} />
          </Block>

          <Block kanji="壁" title="Challenges" accent="text-blood">
            <div className="space-y-4">
              {project.challenges.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-white/8 bg-white/[0.025] p-4 transition-colors hover:border-blood/30"
                >
                  <p className="font-display text-[0.82rem] font-bold text-white/90">
                    {c.title}
                  </p>
                  <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ash">{c.body}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </div>

      {/* results */}
      <div className="border-t border-white/8 bg-white/[0.02] p-7 sm:p-10">
        <Block kanji="果" title="Results" accent="text-namek">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div
                key={r.label}
                className="rounded-xl border border-namek/20 bg-namek/[0.05] px-5 py-4"
              >
                <p className="font-display text-2xl font-black text-namek">{r.metric}</p>
                <p className="mt-1 text-[0.75rem] leading-snug text-ash">{r.label}</p>
              </div>
            ))}
          </div>
        </Block>

        <div className="mt-8 flex flex-col gap-5 border-t border-white/5 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-3">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 font-display text-[0.72rem] font-bold tracking-[0.16em] text-white/85 uppercase transition hover:border-ki/50 hover:text-ki"
              >
                GitHub
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-kame/40 bg-kame/10 px-4 py-2 font-display text-[0.72rem] font-bold tracking-[0.16em] text-kame uppercase transition hover:bg-kame/20"
              >
                Live Demo
              </a>
            )}
            {!hasLinks && (
              <span className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[0.72rem] tracking-wide text-ash-dim">
                Proprietary — walkthrough on request
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
