"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DragonBall from "./DragonBall";
import { site } from "@/data/site";

type NavItem = { href: string; label: string; stars: 1 | 2 | 3 | 4 | 5 | 6 };

const NAV: NavItem[] = [
  { href: "/", label: "Home", stars: 1 },
  { href: "/about", label: "About", stars: 2 },
  { href: "/projects", label: "Projects", stars: 3 },
  { href: "/experience", label: "Experience", stars: 4 },
  { href: "/skills", label: "Skills", stars: 5 },
  { href: "/contact", label: "Contact", stars: 6 },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-saiyan/20 bg-[#05060a]/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-18">
        <Link href="/" className="group flex items-center gap-3">
          <motion.span
            whileHover={{ rotate: 20, scale: 1.12 }}
            transition={{ type: "spring", stiffness: 320, damping: 14 }}
            className="drop-shadow-[0_0_12px_rgba(255,199,44,0.5)]"
          >
            <DragonBall stars={4} size={30} />
          </motion.span>
          <span className="font-display text-sm font-bold tracking-[0.2em] text-white/90 uppercase sm:text-base">
            Avinash<span className="text-saiyan">.</span>K
          </span>
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-2 rounded-lg px-3 py-2 font-display text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors ${
                    active ? "text-ki" : "text-ash hover:text-white"
                  }`}
                >
                  <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 data-[on=true]:opacity-100" data-on={active}>
                    <DragonBall stars={item.stars} size={14} />
                  </span>
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-2 -bottom-px h-px origin-center bg-gradient-to-r from-transparent via-ki to-transparent transition-transform duration-300 ${
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
          <li className="ml-2">
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-ki/40 bg-ki/10 px-3.5 py-2 font-display text-[0.72rem] font-semibold tracking-[0.16em] text-ki uppercase transition hover:bg-ki/20 hover:shadow-[0_0_24px_-4px_rgba(255,199,44,0.7)]"
            >
              <DragonBall stars={7} size={14} />
              Resume
            </a>
          </li>
        </ul>

        {/* mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-saiyan/30 bg-white/5 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-[5px]">
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-ki"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-[2px] w-5 bg-ki"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block h-[2px] w-5 bg-ki"
            />
          </div>
        </button>
      </nav>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden border-t border-saiyan/20 bg-[#05060a]/97 backdrop-blur-xl lg:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 py-4">
              {NAV.map((item, i) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center gap-3 border-b border-white/5 py-3.5 font-display text-sm tracking-[0.14em] uppercase ${
                        active ? "text-ki" : "text-ash"
                      }`}
                    >
                      <DragonBall stars={item.stars} size={20} inactive={!active} />
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.28 }}
              >
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-ki/40 bg-ki/10 py-3 font-display text-sm font-semibold tracking-[0.14em] text-ki uppercase"
                >
                  <DragonBall stars={7} size={18} />
                  Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
