"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "cyan";

type Props = {
  children: ReactNode;
  href: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  download?: boolean;
};

const STYLES: Record<Variant, string> = {
  primary:
    "border-saiyan/60 bg-gradient-to-r from-saiyan/90 to-ki/90 text-[#1a0d02] shadow-[0_10px_40px_-12px_rgba(242,112,28,0.9)] hover:shadow-[0_14px_50px_-10px_rgba(255,199,44,0.95)]",
  ghost:
    "border-white/15 bg-white/[0.04] text-white/90 hover:border-ki/50 hover:bg-ki/10 hover:text-ki",
  cyan: "border-kame/50 bg-kame/10 text-kame hover:bg-kame/20 hover:shadow-[0_0_34px_-6px_rgba(53,224,245,0.8)]",
};

export default function KiButton({
  children,
  href,
  external = false,
  variant = "primary",
  className = "",
  download = false,
}: Props) {
  const inner = (
    <motion.span
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border px-6 py-3 font-display text-[0.76rem] font-bold tracking-[0.16em] uppercase transition-colors duration-300 ${STYLES[variant]} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative flex items-center gap-2">{children}</span>
    </motion.span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        download={download || undefined}
        className="inline-block"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {inner}
    </Link>
  );
}
