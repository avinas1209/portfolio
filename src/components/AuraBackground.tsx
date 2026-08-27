/**
 * Server component. The starfield and ki embers animate purely in CSS so they
 * stay off the main thread and out of Framer Motion's layout-projection tree —
 * 100+ animated nodes there made every route change measure the whole tree.
 */

/** Deterministic PRNG so the layout is stable between builds. */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const starRand = mulberry32(9001);
const STARS = Array.from({ length: 70 }, () => ({
  left: starRand() * 100,
  top: starRand() * 100,
  size: starRand() * 1.8 + 0.6,
  delay: starRand() * 4,
  duration: 2.5 + starRand() * 3.5,
}));

const emberRand = mulberry32(42);
const EMBERS = Array.from({ length: 12 }, () => ({
  left: emberRand() * 100,
  size: 2 + emberRand() * 4,
  delay: emberRand() * 8,
  duration: 9 + emberRand() * 9,
  drift: (emberRand() - 0.5) * 90,
}));

export default function AuraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* deep space base */}
      <div className="absolute inset-0 bg-[#05060a]" />

      {/* ki glows — radial gradients are already soft, so no blur filter needed */}
      <div className="absolute -top-40 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,112,28,0.20),transparent_62%)]" />
      <div className="absolute top-1/3 -left-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(43,127,255,0.16),transparent_65%)]" />
      <div className="absolute bottom-0 -right-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,199,44,0.13),transparent_65%)]" />

      {/* faint tech grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,199,44,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,199,44,0.10) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 0%, black 20%, transparent 78%)",
        }}
      />

      {STARS.map((s, i) => (
        <span
          key={`s-${i}`}
          className="ki-star"
          style={
            {
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              "--dur": `${s.duration}s`,
              "--delay": `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {EMBERS.map((e, i) => (
        <span
          key={`e-${i}`}
          className="ki-ember"
          style={
            {
              left: `${e.left}%`,
              width: e.size,
              height: e.size * 2.4,
              "--dur": `${e.duration}s`,
              "--delay": `${e.delay}s`,
              "--drift": `${e.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.85)_100%)]" />
    </div>
  );
}
