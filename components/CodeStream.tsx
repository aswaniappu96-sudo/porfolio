"use client";

import { useEffect, useMemo, useState } from "react";
import { codeTokens } from "@/lib/data";

type Token = {
  text: string;
  top: string;
  left: string;
  kind: "ltr" | "rtl" | "fall";
  dur: string;
  delay: string;
  size: string;
  opacity: number;
};

export default function CodeStream() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const tokens = useMemo<Token[]>(() => {
    return Array.from({ length: 20 }, (_, i) => {
      const kind = i % 5 === 0 ? "fall" : i % 2 === 0 ? "ltr" : "rtl";
      return {
        text: codeTokens[i % codeTokens.length],
        top: `${4 + ((i * 13) % 88)}%`,
        left: `${(i * 17) % 92}%`,
        kind,
        dur: `${16 + (i % 12)}s`,
        delay: `${-(i * 1.4)}s`,
        size: i % 4 === 0 ? "0.9rem" : "0.72rem",
            opacity: 0.42 + (i % 5) * 0.08,
      };
    });
  }, []);

  if (!ready) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden [mask-image:radial-gradient(ellipse_at_center,transparent_18%,black_72%)]"
    >
      {tokens.map((token, i) => (
        <span
          key={`${token.text}-${i}`}
          className={`absolute font-mono tracking-tight text-cyan-200/80 ${
            token.kind === "ltr"
              ? "token-ltr"
              : token.kind === "rtl"
                ? "token-rtl"
                : "token-fall"
          }`}
          style={{
            top: token.top,
            left: token.kind === "fall" ? token.left : undefined,
            ["--dur" as string]: token.dur,
            ["--delay" as string]: token.delay,
            fontSize: token.size,
            opacity: token.opacity,
            textShadow: "0 0 12px rgba(94,234,212,0.35)",
          }}
        >
          {token.text}
        </span>
      ))}
    </div>
  );
}
