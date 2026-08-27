import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import Reveal, { StaggerGroup, RevealItem } from "@/components/Reveal";
import DragonBall from "@/components/DragonBall";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} — backend engineer specialising in Go, microservices and event-driven systems.`,
};

const CHANNELS = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Fastest route. I read everything.",
    accent: "text-ki",
  },
  {
    label: "LinkedIn",
    value: "avinash-kondaveti",
    href: site.linkedin,
    note: "Roles, referrals and the professional stuff.",
    accent: "text-gi",
  },
  {
    label: "GitHub",
    value: "@avinas1209",
    href: site.github,
    note: "Experiments and whatever I can open-source.",
    accent: "text-kame",
  },
  {
    label: "Phone",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
    note: "For anything urgent.",
    accent: "text-namek",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        stars={6}
        kanji="縁"
        eyebrow="Chapter Six — The Summon"
        title="Contact"
        description="Building something that has to stay up? Hiring for backend? Or just want to argue about exactly-once delivery? Pick a channel."
      />

      <section className="px-5 pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.15fr] [&>*]:min-w-0">
          <div className="space-y-4">
            <StaggerGroup className="space-y-4">
              {CHANNELS.map((c) => (
                <RevealItem key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="ki-panel ki-panel-hover group flex items-center justify-between gap-5 p-6"
                  >
                    <div className="min-w-0">
                      <p className="readout mb-1.5">{c.label}</p>
                      <p
                        className={`truncate font-display text-sm font-bold ${c.accent} transition-colors`}
                      >
                        {c.value}
                      </p>
                      <p className="mt-1.5 text-[0.78rem] text-ash-dim">{c.note}</p>
                    </div>
                    <span
                      aria-hidden
                      className="shrink-0 font-display text-xl text-saiyan transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </RevealItem>
              ))}
            </StaggerGroup>

            <Reveal className="ki-panel scanlines flex items-center gap-5 p-6" delay={0.1}>
              <DragonBall stars={7} size={46} />
              <div>
                <p className="readout mb-1.5 text-namek">Status</p>
                <p className="text-sm text-white/90">
                  Open to backend engineering roles and consulting work.
                </p>
                <p className="mt-1 text-[0.78rem] text-ash-dim">
                  Based in {site.location} · Comfortable with remote and distributed teams.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
