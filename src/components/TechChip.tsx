export default function TechChip({
  label,
  tone = "default",
}: {
  label: string;
  tone?: "default" | "gold" | "cyan";
}) {
  const tones = {
    default: "border-white/10 bg-white/[0.05] text-ash",
    gold: "border-ki/30 bg-ki/[0.08] text-ki",
    cyan: "border-kame/30 bg-kame/[0.08] text-kame",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-[0.72rem] tracking-wide whitespace-nowrap transition-colors duration-200 hover:border-saiyan/50 hover:text-white ${tones[tone]}`}
    >
      {label}
    </span>
  );
}
