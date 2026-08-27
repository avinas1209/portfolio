import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import KiButton from "@/components/KiButton";
import Reveal, { StaggerGroup, RevealItem } from "@/components/Reveal";
import TechChip from "@/components/TechChip";
import { site, philosophy, currentlyTraining } from "@/data/site";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Backend engineer with 4.6 years building Go microservices, event-driven systems and real-time platforms across fintech and cloud security.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        stars={2}
        kanji="道"
        eyebrow="Chapter Two — The Fighter"
        title="About"
        description="Four and a half years of training: from analytics REST endpoints to leading the design of event-driven Go services that carry real money and real-time traffic."
      />

      {/* --- Summary -------------------------------------------------------- */}
      <section className="px-5 pb-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.4fr_1fr] [&>*]:min-w-0">
          <Reveal className="ki-panel hud-frame scanlines p-8 sm:p-10">
            <p className="readout mb-4">Professional Summary</p>
            <p className="text-[1.02rem] leading-relaxed text-white/85">{site.summary}</p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ash">
              In practice that means I spend my days on service boundaries, message
              contracts and the unglamorous parts of reliability: what happens on the
              second delivery of the same event, what happens when a provider stops
              answering, what happens at 3am when the graph goes flat. I like backend work
              precisely because those questions have concrete answers.
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ash">
              I have worked across fintech payment rails, cloud security modules and
              real-time platforms — three domains that punish sloppy state handling in
              three different ways, which turned out to be an excellent teacher.
            </p>
          </Reveal>

          <div className="space-y-4">
            <Reveal className="ki-panel p-6" delay={0.08}>
              <p className="readout mb-4">Vitals</p>
              <dl className="space-y-3 text-sm">
                {[
                  ["Base", site.location],
                  ["Experience", `${site.yearsOfExperience} years`],
                  ["Primary weapon", "Golang"],
                  ["Current form", "Golang Developer @ Tectoro"],
                  ["Focus", "Distributed systems & event-driven design"],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 border-b border-white/5 pb-2.5">
                    <dt className="text-ash-dim">{k}</dt>
                    <dd className="text-right font-medium text-white/90">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="ki-panel p-6" delay={0.16}>
              <p className="readout mb-4">Education</p>
              <p className="font-display text-sm font-bold text-white">{education.degree}</p>
              <p className="mt-1.5 text-sm text-ash">{education.school}</p>
              <div className="mt-3 flex items-center gap-3 font-mono text-[0.7rem] text-ash-dim">
                <span>{education.period}</span>
                <span className="h-3 w-px bg-white/15" />
                <span className="text-ki">GPA {education.gpa}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Career arc ------------------------------------------------------ */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kanji="歴"
            eyebrow="Training Arcs"
            title="The Career So Far"
            subtitle="Every saga added something the last one could not teach."
          />

          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
            {experiences.map((e) => (
              <RevealItem
                key={e.company}
                className="ki-panel ki-panel-hover flex h-full flex-col p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="readout text-saiyan">{e.saga}</span>
                  <span className="font-mono text-[0.72rem] text-ash-dim">{e.period}</span>
                </div>
                <h3 className="font-display text-base font-bold text-white">{e.company}</h3>
                <p className="mt-1 text-sm text-ki">{e.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-ash">{e.summary}</p>
              </RevealItem>
            ))}
          </StaggerGroup>

          <Reveal className="mt-10 flex justify-center">
            <KiButton href="/experience" variant="ghost">
              Full Experience
            </KiButton>
          </Reveal>
        </div>
      </section>

      {/* --- Philosophy ------------------------------------------------------ */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            kanji="哲"
            eyebrow="Fighting Style"
            title="Engineering Philosophy"
            subtitle="Four rules I have never regretted following, each one learned the expensive way."
          />

          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2">
            {philosophy.map((p) => (
              <RevealItem key={p.title} className="h-full">
                <article className="ki-panel ki-panel-hover group relative h-full overflow-hidden p-7">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-4 right-2 select-none font-display text-[6rem] leading-none text-white/[0.05] transition-colors duration-500 group-hover:text-ki/10"
                  >
                    {p.kanji}
                  </span>
                  <h3 className="relative font-display text-base font-bold text-white">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-[0.93rem] leading-relaxed text-ash">
                    {p.body}
                  </p>
                </article>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* --- Currently training ---------------------------------------------- */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="ki-panel hud-frame relative overflow-hidden p-8 sm:p-12">
            <div
              aria-hidden
              className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(53,224,245,0.20),transparent_66%)] blur-2xl"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] [&>*]:min-w-0">
              <div>
                <p className="readout mb-3">Hyperbolic Time Chamber</p>
                <h2 className="font-display text-2xl font-black text-white sm:text-3xl">
                  What I&apos;m <span className="saiyan-gradient">working with now</span>
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ash">
                  The stack I touch on a normal week, and the things I am deliberately
                  getting sharper at.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {site.heroStack.map((t) => (
                    <TechChip key={t} label={t} tone={t === "Go" ? "gold" : "default"} />
                  ))}
                </div>
              </div>

              <StaggerGroup className="space-y-3">
                {currentlyTraining.map((c) => (
                  <RevealItem
                    key={c.label}
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.03] px-5 py-4 transition-colors hover:border-kame/40"
                  >
                    <span className="text-sm text-white/90">{c.label}</span>
                    <span className="shrink-0 rounded-md border border-kame/25 bg-kame/10 px-2.5 py-1 font-mono text-[0.72rem] tracking-wide text-kame uppercase">
                      {c.level}
                    </span>
                  </RevealItem>
                ))}
              </StaggerGroup>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          <KiButton href="/projects">See The Work</KiButton>
          <KiButton href="/contact" variant="ghost">
            Get In Touch
          </KiButton>
        </Reveal>
      </section>
    </>
  );
}
