"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      setProgress(window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#03030a]/75 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div
        className="progress-bar h-[2px] bg-gradient-to-r from-cyan-300 via-violet-400 to-fuchsia-400"
        style={{ transform: `scaleX(${progress})` }}
      />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg tracking-[0.18em]">
          AK<span className="text-cyan-300">.</span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={profile.resume}
          download
          className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-medium tracking-wide text-cyan-100 transition hover:bg-cyan-300/20"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
