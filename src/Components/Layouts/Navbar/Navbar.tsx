"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { X, Menu, Download } from "lucide-react";
import Container from "@/Components/Ui/Container";
import cvData from "@/data/cv.json";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.4 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const active = useActiveSection();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav className="bg-secondary sticky top-0 z-50 border-b border-white/5">
        <Container className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="#home" className="text-white font-bold text-xl">
            Sultan<span className="text-accent">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm transition-colors ${
                      isActive ? "text-primary font-semibold" : "text-para hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <Link
            href={cvData.downloadUrl}
            download
            className="hidden md:flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-primary/80 transition-colors"
          >
            Download CV
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-para hover:text-white transition-colors p-1"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>

        </Container>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 left-0 h-full w-72 bg-secondary z-50 md:hidden flex flex-col border-r border-white/10"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/10">
                <Link
                  href="#home"
                  onClick={() => setIsOpen(false)}
                  className="text-white font-bold text-xl"
                >
                  Sultan<span className="text-accent">.</span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-para hover:text-white transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="flex flex-col px-4 py-6 gap-1">
                {navLinks.map((link, i) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-colors ${
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-para hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Drawer Footer */}
              <div className="mt-auto px-6 py-6 border-t border-white/10">
                <Link
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-primary/80 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </Link>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
