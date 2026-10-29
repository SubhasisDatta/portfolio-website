"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600/30 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-400 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/80 rounded-lg transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center text-xs font-medium px-3.5 py-1.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-zinc-950 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-zinc-300 hover:text-white py-1"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-zinc-800 flex items-center justify-between">
            <div className="flex gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-white"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-2 text-zinc-400 hover:text-white"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs px-3 py-1.5 rounded-full bg-indigo-600 text-white"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
