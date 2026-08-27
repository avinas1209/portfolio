import Hero from "@/components/home/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import KiButton from "@/components/KiButton";
import Reveal, { StaggerGroup, RevealItem } from "@/components/Reveal";
import { featuredProjects } from "@/data/projects";
import { site } from "@/data/site";

const STATS = [
  { value: "4.6+", label: "Years in production Go" },
  { value: "30%", label: "Faster API response times" },
  { value: "25%", label: "Higher payment success rate" },
  { value: "4", label: "Engineering teams shipped with" },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* --- Power readings ------------------------------------------------ */}
      <section className="relative px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <StaggerGroup className="ki-panel scanlines grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
            {STATS.map((s) => (
              <RevealItem key={s.label} className="bg-[#0a0c14]/60 p-6 text-center sm:p-8">
                <p className="font-display text-3xl font-black text-ki text-glow sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[0.72rem] leading-snug text-ash">{s.label}</p>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* --- Featured projects --------------------------------------------- */}
      <section className="relative px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kanji="戦"
            eyebrow="Featured Battles"
            title="Systems I Have Fought For"
            subtitle="Three builds that carried real traffic. Every one of them started as a production problem, not a tutorial."
          />

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </StaggerGroup>

          <Reveal className="mt-12 flex justify-center" delay={0.1}>
            <KiButton href="/projects" variant="ghost">
              All Projects
            </KiButton>
          </Reveal>
        </div>
      </section>

      {/* --- Stack ---------------------------------------------------------- */}
      <section className="relative px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="ki-panel hud-frame relative overflow-hidden p-8 sm:p-14">
            <div
              aria-hidden
              className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(43,127,255,0.22),transparent_66%)] blur-2xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center [&>*]:min-w-0">
              <div>
                <p className="readout mb-3">Current Form</p>
                <h2 className="font-display text-2xl font-black text-white sm:text-3xl">
                  Go, an event backbone, and a healthy fear of{" "}
                  <span className="saiyan-gradient">distributed state</span>.
                </h2>
                <p className="mt-5 max-w-lg text-[0.95rem] leading-relaxed text-ash">
                  {site.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <KiButton href="/about" variant="cyan">
                    The Full Story
                  </KiButton>
                  <KiButton href="/skills" variant="ghost">
                    Skill Readout
                  </KiButton>
                </div>
              </div>

              <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                {site.heroStack.map((t) => (
                  <RevealItem
                    key={t}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center transition-colors hover:border-ki/40 hover:bg-ki/[0.06]"
                  >
                    <span className="font-display text-sm font-bold tracking-wide text-white/90">
                      {t}
                    </span>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA ------------------------------------------------------------ */}
      <section className="relative px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            kanji="縁"
            eyebrow="Summon Me"
            title="Got A System That Needs To Scale?"
            subtitle="Backend architecture, event-driven design, or a Go service that has outgrown its first draft — happy to talk through it."
          />
          <Reveal className="mt-10 flex flex-wrap justify-center gap-3" delay={0.1}>
            <KiButton href="/contact">Start A Conversation</KiButton>
            <KiButton href={site.resume} external download variant="ghost">
              Download Resume
            </KiButton>
          </Reveal>
        </div>
      </section>
    </>
  );
}
