import Link from "next/link";
import { ArrowRight, Mail, Download, Eye } from "lucide-react";
import cvData from "@/data/cv.json";

export default function HeroLeft() {
  return (
    <div className="flex flex-col gap-6">

      {/* Available badge */}
      <div className="flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-white/10 bg-white/5">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-para text-sm">Available for work</span>
      </div>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-primary">Sultan Mia</span>
        </h1>
        <h2 className="text-xl font-semibold text-white">
          Full Stack Developer
        </h2>
      </div>

      {/* Description */}
      <p className="text-para text-base leading-relaxed max-w-md">
        I build clean, fast and user-friendly web applications using React,
        Next.js, Node.js and MongoDB.
      </p>

      {/* CTA Buttons */}
      <div className="flex items-center gap-4 flex-wrap">
        <Link
          href="#projects"
          className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/80 transition-colors"
        >
          View Projects
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="#contact"
          className="flex items-center gap-2 border border-primary text-primary text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/10 transition-colors"
        >
          Contact Me
          <Mail className="w-4 h-4" />
        </Link>
      </div>

      {/* CV Buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <Link
          href={cvData.downloadUrl}
          download
          className="flex items-center gap-2 border border-white/15 text-para text-sm px-5 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Download className="w-4 h-4" />
          Download CV
        </Link>
        <Link
          href={cvData.viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white/15 text-para text-sm px-5 py-2 rounded-full hover:border-primary/50 hover:text-primary transition-colors"
        >
          <Eye className="w-4 h-4" />
          View CV
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <span className="text-para text-xs tracking-widest uppercase">Connect</span>
        <Link
          href="https://github.com/Sultanmia22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-para hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </Link>
        <Link
          href="https://linkedin.com/in/devmdsultanmia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-para hover:text-primary transition-colors"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </Link>
      </div>

    </div>
  );
}
