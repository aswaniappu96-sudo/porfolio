"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 mx-auto max-w-6xl overflow-x-hidden px-5 py-24 md:px-8"
    >
      <p className="font-mono text-xs tracking-[0.32em] text-cyan-300">
        03 — EXPERIENCE
      </p>
      <h2 className="font-display mt-3 text-4xl sm:text-5xl">
        Path into senior WordPress
      </h2>
      <div className="relative mt-12 space-y-6 before:absolute before:top-0 before:bottom-0 before:left-[11px] before:w-px before:bg-gradient-to-b before:from-cyan-300 before:via-violet-400 before:to-transparent md:before:left-[19px]">
        {experience.map((job, index) => (
          <motion.article
            key={job.company}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass relative ml-8 rounded-3xl p-6 md:ml-12 md:p-8"
          >
            <span className="absolute top-8 -left-[39px] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_16px_#5eead4] md:-left-[55px] md:h-4 md:w-4" />
            <p className="font-mono text-xs text-cyan-200">{job.period}</p>
            <h3 className="font-display mt-2 text-2xl">{job.role}</h3>
            <p className="mt-1 text-sm text-zinc-400">{job.company}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
              {job.points.map((point) => (
                <li key={point} className="pl-4">
                  <span className="text-cyan-300">▹</span> {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
