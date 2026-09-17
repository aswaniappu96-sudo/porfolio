"use client";

import { motion } from "framer-motion";
import { extras, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-5 py-24 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.32em] text-cyan-300"
        >
          01 — ABOUT
        </motion.p>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl leading-tight sm:text-5xl"
          >
            Full-stack roots.
            <br />
            WordPress at production speed.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400"
          >
            {profile.summary}
          </motion.p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {extras.map((item) => (
              <article
                key={item.label}
                className="glass rounded-2xl p-4"
              >
                <p className="font-mono text-[10px] tracking-[0.22em] text-cyan-300/80">
                  {item.label.toUpperCase()}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block text-sm text-zinc-300 hover:text-cyan-200"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-zinc-300">{item.value}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
