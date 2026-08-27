"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

/**
 * Set NEXT_PUBLIC_FORMSPREE_ENDPOINT (e.g. https://formspree.io/f/xxxxxxx) in your
 * Vercel/Netlify env vars to receive submissions. Without it the form falls back to
 * opening the visitor's mail client, so it still works on a static deploy.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

type Status = "idle" | "charging" | "sent" | "error";

const FIELD =
  "w-full rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-white placeholder:text-ash-dim transition-colors outline-none focus:border-ki/55 focus:bg-white/[0.06] focus:ring-2 focus:ring-ki/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "Portfolio enquiry");
    const message = String(data.get("message") ?? "");

    setStatus("charging");
    setError("");

    if (!ENDPOINT) {
      // Static fallback: hand the message to the visitor's mail client.
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        subject,
      )}&body=${body}`;
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className="ki-panel hud-frame relative overflow-hidden p-7 sm:p-9">
      <p className="readout mb-2">Transmit</p>
      <h3 className="font-display text-xl font-black text-white">Send a message</h3>
      <p className="mt-2 text-sm text-ash">
        Roles, freelance backend work, or an architecture question — all welcome.
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="readout mb-2 block">
              Name
            </label>
            <input id="name" name="name" required className={FIELD} placeholder="Son Goku" />
          </div>
          <div>
            <label htmlFor="email" className="readout mb-2 block">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className={FIELD}
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="readout mb-2 block">
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            className={FIELD}
            placeholder="Backend role / project enquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="readout mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${FIELD} resize-y`}
            placeholder="Tell me about the system you're building…"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "charging"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full overflow-hidden rounded-xl border border-saiyan/60 bg-gradient-to-r from-saiyan to-ki px-6 py-3.5 font-display text-[0.76rem] font-bold tracking-[0.18em] text-[#1a0d02] uppercase shadow-[0_10px_40px_-12px_rgba(242,112,28,0.9)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          <span
            aria-hidden
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
          />
          <span className="relative">
            {status === "charging" ? "Charging…" : "Fire Kamehameha"}
          </span>
        </motion.button>

        <AnimatePresence mode="wait">
          {status === "sent" && (
            <motion.p
              key="sent"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-namek/30 bg-namek/10 px-4 py-3 text-sm text-namek"
            >
              {ENDPOINT
                ? "Message sent. I'll get back to you shortly."
                : "Your mail client should be open with the message ready to send."}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-blood/30 bg-blood/10 px-4 py-3 text-sm text-blood"
            >
              Transmission failed{error ? ` (${error})` : ""}. Email me directly at{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}
