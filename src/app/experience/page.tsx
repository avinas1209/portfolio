import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SectionHeading from "@/components/SectionHeading";
import KiButton from "@/components/KiButton";
import Reveal, { StaggerGroup, RevealItem } from "@/components/Reveal";
import { experiences, education } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "4.6 years across Tectoro Consulting, BPS, Nouveau Labs and Cognizant — Golang microservices, payment platforms, cloud security APIs and analytics backends.",
};

const HIGHLIGHTS = [
  { value: "4.6", label: "Years shipping backend systems" },
  { value: "4", label: "Companies, four different problem spaces" },
  { value: "30%", label: "Best measured latency reduction" },
  { value: "25%", label: "Payment success-rate improvement" },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        stars={4}
        kanji="歴"
        eyebrow="Chapter Four — The Record"
        title="Experience"
        description="Where the training happened. Roles, timelines, what I was responsible for, and the numbers that moved because of it."
      />

      <section className="px-5 pb-14">
        <div className="mx-auto max-w-6xl">
          <StaggerGroup className="ki-panel scanlines grid grid-cols-2 gap-px overflow-hidden md:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <RevealItem key={h.label} className="bg-[#0a0c14]/60 p-6 text-center sm:p-8">
                <p className="font-display text-3xl font-black text-ki text-glow">{h.value}</p>
                <p className="mt-2 text-[0.72rem] leading-snug text-ash">{h.label}</p>
              </RevealItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="px-5 py-10">
        <ExperienceTimeline items={experiences} />
      </section>

      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            kanji="学"
            eyebrow="Origin"
            title="Education"
            subtitle="Where the fundamentals came from."
          />
          <Reveal className="ki-panel hud-frame mt-10 flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-display text-base font-bold text-white">{education.degree}</h3>
              <p className="mt-1.5 text-sm text-ash">{education.school}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-[0.72rem] text-ash-dim">{education.period}</span>
              <span className="rounded-lg border border-ki/25 bg-ki/[0.07] px-3 py-1.5 font-mono text-[0.72rem] text-ki">
                GPA {education.gpa}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-8">
        <Reveal className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          <KiButton href="/projects">Read The Case Studies</KiButton>
          <KiButton href="/skills" variant="ghost">
            Skill Readout
          </KiButton>
        </Reveal>
      </section>
    </>
  );
}
