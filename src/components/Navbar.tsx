"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0c0d0e]/90 backdrop-blur border-b border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-white tracking-tight text-sm hover:text-emerald-400 transition-colors">
          {portfolioData.personal.name}
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-[#a1a1aa]">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#work" className="hover:text-white transition-colors">Key Programs</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#education" className="hover:text-white transition-colors">Education</a>
          <a href="#contact" className="text-white hover:text-emerald-400 font-medium transition-colors">Contact</a>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#a1a1aa] hover:text-white text-sm"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-b border-[#27272a] bg-[#0c0d0e] px-6 py-4 flex flex-col gap-3 text-sm text-[#a1a1aa]">
          <a href="#about" onClick={() => setOpen(false)} className="hover:text-white">About</a>
          <a href="#experience" onClick={() => setOpen(false)} className="hover:text-white">Experience</a>
          <a href="#work" onClick={() => setOpen(false)} className="hover:text-white">Key Programs</a>
          <a href="#skills" onClick={() => setOpen(false)} className="hover:text-white">Skills</a>
          <a href="#education" onClick={() => setOpen(false)} className="hover:text-white">Education</a>
          <a href="#contact" onClick={() => setOpen(false)} className="text-white">Contact</a>
        </div>
      )}
    </header>
  );
}
