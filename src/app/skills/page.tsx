import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SkillGroupPanel from "@/components/SkillGroupPanel";
import Scouter from "@/components/Scouter";
import KiButton from "@/components/KiButton";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Go, distributed systems, MongoDB, PostgreSQL, Redis, NATS, Kafka, Docker, Kubernetes and observability — organised by discipline, not dumped as a logo wall.",
};

const total = skillGroups.reduce(
  (sum, g) => sum + g.skills.reduce((s, k) => s + k.power, 0),
  0,
);

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        stars={5}
        kanji="技"
        eyebrow="Chapter Five — The Techniques"
        title="Skills"
        description="Organised by what each tool is actually for. The numbers are a scouter joke, but the ordering inside each group is honest: highest bar means most production hours."
      />

      <section className="px-5 pb-12">
        <div className="mx-auto max-w-6xl">
          <Scouter total={total} />
        </div>
      </section>

      <section className="px-5 pb-8">
        <Reveal className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            {skillGroups.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[0.72rem] text-ash transition hover:border-ki/45 hover:text-ki"
              >
                {g.title}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2 [&>*]:min-w-0">
          {skillGroups.map((g, i) => (
            <SkillGroupPanel key={g.id} group={g} index={i} />
          ))}
        </div>
      </section>

      <section className="px-5 pb-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.95rem] leading-relaxed text-ash">
            Strongest signal: Go, event-driven architecture with NATS, and the data layer
            around them. Everything else is in service of shipping those safely.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <KiButton href="/projects">See Them Applied</KiButton>
            <KiButton href="/contact" variant="ghost">
              Talk Shop
            </KiButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
