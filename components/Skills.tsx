"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";

const marquee = [
  "WordPress",
  "PHP",
  "Laravel",
  "Java",
  "JavaScript",
  "WooCommerce",
  "Elementor",
  "ACF",
  "SEO",
  "Cloudflare",
  "RTL",
  "MySQL",
  "Git",
  "Figma",
];

export default function Skills() {
  const loop = [...marquee, ...marquee];

  return (
    <section className="relative z-10 py-10">
      <div className="relative mb-16 overflow-x-clip border-y border-white/10 py-4">
        <div className="marquee-track flex w-max gap-10">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-2xl tracking-tight text-zinc-500 sm:text-4xl"
            >
              {item}
              <span className="ml-10 text-cyan-400/70">/</span>
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-4 px-5 md:grid-cols-2 lg:grid-cols-3 md:px-8">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="glass group rounded-3xl p-6 transition duration-500 hover:border-cyan-300/25"
          >
            <h3 className="font-display text-xl text-white">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
