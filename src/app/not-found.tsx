import Link from "next/link";
import DragonBall from "@/components/DragonBall";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center px-5 py-32">
      <div className="text-center">
        <div className="mb-8 flex justify-center gap-2">
          {([1, 2, 3] as const).map((n) => (
            <DragonBall key={n} stars={n} size={34} inactive />
          ))}
        </div>
        <p className="readout mb-4">Scouter Error</p>
        <h1 className="font-display text-6xl font-black sm:text-8xl">
          <span className="saiyan-gradient text-glow">404</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[0.95rem] leading-relaxed text-ash">
          This page&apos;s power level is zero — it does not exist. The remaining four
          dragon balls are scattered across the rest of the site.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center gap-2 rounded-xl border border-ki/45 bg-ki/10 px-6 py-3 font-display text-[0.74rem] font-bold tracking-[0.18em] text-ki uppercase transition hover:bg-ki/20"
        >
          Return To Base
        </Link>
      </div>
    </section>
  );
}
