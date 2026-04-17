"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#selected-work", label: "Selected Work" },
  { href: "#what-i-do", label: "What I Do" },
  { href: "#how-i-think", label: "How I Think" },
  { href: "#writing", label: "Writing" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black/70 backdrop-blur-[20px] hairline-border border-t-0 border-x-0">
      <Link href="/" className="text-xl font-bold tracking-tighter text-white font-sans">
        徐应鹏 · 月月鸟
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`mono text-xs uppercase transition-all duration-150 pb-1 ${
              active === link.href
                ? "text-primary border-b border-primary"
                : "text-neutral-500 hover:text-primary hover:bg-white/5"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="/resume.pdf"
        className="px-4 py-2 bg-white text-black mono text-[10px] uppercase tracking-widest hover:bg-primary transition-colors scale-100 active:scale-[0.99]"
        target="_blank"
        rel="noopener noreferrer"
      >
        DOWNLOAD_CV
      </a>
    </nav>
  );
}
