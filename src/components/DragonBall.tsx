type Props = {
  stars?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  size?: number;
  className?: string;
  /** Dim the ball until it is "collected" (used by the nav) */
  inactive?: boolean;
};

const LAYOUTS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [
    [39, 39],
    [61, 61],
  ],
  3: [
    [50, 34],
    [37, 61],
    [63, 61],
  ],
  4: [
    [38, 38],
    [62, 38],
    [38, 62],
    [62, 62],
  ],
  5: [
    [37, 37],
    [63, 37],
    [50, 50],
    [37, 63],
    [63, 63],
  ],
  6: [
    [38, 32],
    [62, 32],
    [38, 50],
    [62, 50],
    [38, 68],
    [62, 68],
  ],
  7: [
    [40, 31],
    [60, 31],
    [33, 50],
    [50, 50],
    [67, 50],
    [40, 69],
    [60, 69],
  ],
};

/** Five-pointed star polygon points around (cx, cy). */
function starPoints(cx: number, cy: number, outer: number) {
  const inner = outer * 0.42;
  const pts: string[] = [];
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`);
  }
  return pts.join(" ");
}

export default function DragonBall({
  stars = 4,
  size = 28,
  className = "",
  inactive = false,
}: Props) {
  const layout = LAYOUTS[stars] ?? LAYOUTS[4];
  const starSize = stars >= 6 ? 8 : stars >= 4 ? 9.5 : 12;
  const id = `db-${stars}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label={`${stars}-star dragon ball`}
      className={className}
      style={{ opacity: inactive ? 0.45 : 1, transition: "opacity .3s ease" }}
    >
      <defs>
        <radialGradient id={`${id}-body`} cx="35%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#fff6d8" />
          <stop offset="35%" stopColor="#ffd35c" />
          <stop offset="75%" stopColor="#f0961a" />
          <stop offset="100%" stopColor="#b85c04" />
        </radialGradient>
        <radialGradient id={`${id}-glow`} cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="rgba(255,199,44,0.55)" />
          <stop offset="100%" stopColor="rgba(255,199,44,0)" />
        </radialGradient>
      </defs>

      <circle cx="50" cy="50" r="49" fill={`url(#${id}-glow)`} opacity={inactive ? 0 : 0.9} />
      <circle cx="50" cy="50" r="38" fill={`url(#${id}-body)`} />
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

      {layout.map(([cx, cy], i) => (
        <polygon
          key={i}
          points={starPoints(cx, cy, starSize)}
          fill="#d8302b"
          stroke="rgba(120,10,10,0.55)"
          strokeWidth="0.8"
        />
      ))}

      {/* specular highlight */}
      <ellipse cx="36" cy="30" rx="11" ry="7" fill="rgba(255,255,255,0.55)" transform="rotate(-28 36 30)" />
    </svg>
  );
}
