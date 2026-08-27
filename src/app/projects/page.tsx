import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProjectDetail from "@/components/ProjectDetail";
import KiButton from "@/components/KiButton";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Deep dives into event-driven backends, real-time WebSocket gateways and fintech payment microservices built in Go — problem, architecture, contribution, challenges and results.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        stars={3}
        kanji="戦"
        eyebrow="Chapter Three — The Battles"
        title="Projects"
        description="Each of these is a production system, written up the way I would explain it in a design review: what was broken, how it was built, what I owned, what fought back, and what changed by the end."
      />

      {/* jump nav */}
      <section className="px-5 pb-10">
        <Reveal className="mx-auto max-w-6xl">
          <div className="ki-panel flex flex-wrap items-center gap-2 p-4">
            <span className="readout mr-2">Jump to</span>
            {projects.map((p, i) => (
              <a
                key={p.slug}
                href={`#${p.slug}`}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.72rem] text-ash transition hover:border-ki/45 hover:text-ki"
              >
                <span className="text-saiyan">{String(i + 1).padStart(2, "0")}</span>{" "}
                {p.name}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          {projects.map((p, i) => (
            <ProjectDetail key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.95rem] leading-relaxed text-ash">
            Most of this work lives inside private company repositories. Happy to walk
            through architecture decisions, trade-offs and code patterns in a conversation.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <KiButton href="/contact">Ask Me About Any Of It</KiButton>
            <KiButton href="/experience" variant="ghost">
              Where I Built Them
            </KiButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
