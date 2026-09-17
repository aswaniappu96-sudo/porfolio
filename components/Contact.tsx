"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto max-w-6xl overflow-x-hidden px-5 py-24 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-violet-500/10 to-transparent p-8 md:p-14"
      >
        <p className="font-mono text-xs tracking-[0.32em] text-cyan-300">
          04 — CONTACT
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight sm:text-6xl">
          Let’s build your next website — fast, secure, and made to last.
        </h2>
        <p className="mt-5 max-w-xl text-zinc-400">
          Available for WordPress, WooCommerce, bilingual/RTL, and full-cycle
          delivery: design, development, SEO, hosting, and handover — UAE, UK,
          India, or anywhere you need a site.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={profile.emailHref}
            className="max-w-full break-all rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 hover:bg-cyan-200"
          >
            {profile.email}
          </a>
          <a
            href={profile.phoneHref}
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200 hover:border-cyan-300/40"
          >
            {profile.phone}
          </a>
          <a
            href={profile.resume}
            download
            className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200 hover:border-cyan-300/40"
          >
            Download resume
          </a>
        </div>
        <p className="mt-8 font-mono text-xs text-zinc-500">{profile.location}</p>
      </motion.div>
      <footer className="mt-10 pb-8 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Aswani K A</p>
      </footer>
    </section>
  );
}
