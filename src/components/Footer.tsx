import Link from "next/link";
import DragonBall from "./DragonBall";
import { site } from "@/data/site";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-saiyan/15 bg-[#05060a]/80">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="mb-4 flex items-center gap-3">
              <DragonBall stars={4} size={28} />
              <span className="font-display text-sm font-bold tracking-[0.2em] text-white uppercase">
                Avinash<span className="text-saiyan">.</span>K
              </span>
            </div>
            <p className="text-sm leading-relaxed text-ash">
              {site.title} building event-driven systems in Go. Currently powering up at
              Tectoro Consulting.
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="readout mb-3">Navigate</p>
              <ul className="space-y-1">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="inline-block py-1.5 text-sm text-ash transition-colors hover:text-ki"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="readout mb-3">Signal</p>
              <ul className="space-y-1">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-block py-1.5 text-sm text-ash transition-colors hover:text-ki"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1.5 text-sm text-ash transition-colors hover:text-ki"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1.5 text-sm text-ash transition-colors hover:text-ki"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block py-1.5 text-sm text-ash transition-colors hover:text-ki"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="font-mono text-[0.72rem] tracking-wider text-ash-dim">
            © {new Date().getFullYear()} {site.name}. All seven balls collected.
          </p>
          <div className="flex items-center gap-1.5">
            {([1, 2, 3, 4, 5, 6, 7] as const).map((n) => (
              <DragonBall key={n} stars={n} size={16} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
