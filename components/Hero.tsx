"use client";

import Image from "next/image";
import { profile, stats } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center overflow-x-clip px-5 pb-16 pt-24 md:px-8"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="hero-copy">
          <p className="font-mono text-xs tracking-[0.28em] text-cyan-300/90">
            {profile.location.toUpperCase()}
          </p>
          <h1 className="font-display mt-4 text-5xl leading-[0.92] font-semibold tracking-tight text-white sm:text-7xl lg:text-[5.6rem]">
            Aswani
            <br />
            <span className="bg-gradient-to-r from-cyan-200 via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
              K A
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-zinc-300 sm:text-xl">
            {profile.role} — independently shipping business websites with
            design, SEO, security, RTL, and scroll-driven 3D in the mix.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-200"
            >
              View recent work
            </a>
            <a
              href={profile.resume}
              download
              className="rounded-full border border-white/15 px-6 py-3 text-sm text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
            >
              Download resume
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs tracking-wide text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-photo relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-6 -bottom-8 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="relative rounded-[2rem] p-[1.5px]">
            <div className="glow-ring absolute inset-0 rounded-[2rem] opacity-80" />
            <div className="relative overflow-hidden rounded-[1.9rem] bg-zinc-950">
              <Image
                src="/aswani-studio.jpg"
                alt="Aswani K A, Senior WordPress Developer"
                width={720}
                height={900}
                priority
                className="h-[460px] w-full object-cover object-top sm:h-[540px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-cyan-300/5" />
              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md">
                <p className="font-mono text-[11px] text-cyan-200">
                  currently.building
                </p>
                <p className="mt-1 text-sm text-zinc-100">
                  UAE WordPress · RTL · WooCommerce · Crozio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="mt-12 inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-zinc-500"
      >
        SCROLL
        <span className="h-10 w-px bg-gradient-to-b from-cyan-300 to-transparent" />
      </a>
    </section>
  );
}
