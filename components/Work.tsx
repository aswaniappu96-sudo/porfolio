"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl overflow-x-hidden px-5 py-24 md:px-8">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-xs tracking-[0.32em] text-cyan-300">
            02 — SELECTED WORK
          </p>
          <h2 className="font-display mt-3 text-4xl sm:text-5xl">
            Recent live sites
          </h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-zinc-400">
          Independently designed, developed, and deployed WordPress experiences
          for UAE industry, catering, IT, real estate, and healthcare — including
          work shipped at Sweans Technologies.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.a
            key={project.url}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (index % 2) * 0.08 }}
            className="group glass relative overflow-hidden rounded-[1.6rem] p-3 transition duration-500 ease-out md:hover:-translate-y-2"
            style={{ boxShadow: `0 0 0 1px ${project.glow}22` }}
          >
            <div
              className={`relative h-52 overflow-hidden rounded-[1.15rem] bg-gradient-to-br ${project.accent}`}
            >
              <div className="absolute inset-0 opacity-40 mix-blend-overlay grid-fade" />
              <div className="absolute top-4 left-4 flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </div>
              <p className="absolute top-3.5 right-4 font-mono text-[10px] text-white/80">
                {project.code}
              </p>
              <div className="absolute inset-x-8 bottom-6 rounded-xl border border-white/20 bg-black/25 p-4 backdrop-blur-sm transition duration-500 group-hover:-translate-y-1">
                <p className="font-mono text-[11px] text-white/80">
                  {project.location}
                </p>
                <p className="mt-1 font-display text-2xl text-white">
                  {project.title}
                </p>
              </div>
            </div>
            <div className="px-3 py-5">
              <p className="text-sm leading-6 text-zinc-400">{project.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
                <span className="ml-auto text-xs text-cyan-200 opacity-0 transition group-hover:opacity-100">
                  Open live ↗
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
