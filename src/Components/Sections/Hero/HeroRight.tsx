"use client";

import Image from "next/image";
import { useState } from "react";

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "MongoDB",
  "JavaScript",
];

const VISIBLE_COUNT = 6;

export default function HeroRight() {
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? techStack : techStack.slice(0, VISIBLE_COUNT);
  const remaining = techStack.length - VISIBLE_COUNT;

  return (
    <div className="flex flex-col items-center gap-6">

      {/* Profile image */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

        {/* Gradient ring */}
        <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-primary via-primary/50 to-transparent">
          <div className="w-full h-full rounded-full p-[3px] bg-[#0B1120]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Sultan Mia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        {/* Status badge */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1120] border border-primary/30 whitespace-nowrap shadow-lg">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-para text-xs font-mono">Full Stack Developer</span>
        </div>
      </div>

      {/* Tech stack badges */}
      <div className="flex flex-wrap justify-center gap-2 pt-4 max-w-xs">
        {visible.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-white/5 border border-primary/20 text-para text-xs font-mono hover:border-primary/60 hover:text-primary transition-colors"
          >
            {tech}
          </span>
        ))}

        {remaining > 0 && (
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-3 py-1 rounded-full bg-white/5 border border-primary/20 text-primary text-xs font-mono hover:border-primary/60 transition-colors"
          >
            {showAll ? "Show less" : `+${remaining} more`}
          </button>
        )}
      </div>

    </div>
  );
}
