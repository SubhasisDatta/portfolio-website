import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Download, Mail, ShieldCheck, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="relative pt-16 pb-14 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-gradient-to-tr from-indigo-600/15 via-blue-600/10 to-purple-600/15 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headshot / Initials Avatar Badge */}
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-600 p-0.5 shadow-xl shadow-indigo-500/20">
              <div className="w-full h-full rounded-[14px] bg-zinc-950 flex flex-col items-center justify-center border border-zinc-800">
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-300 via-white to-purple-300 bg-clip-text text-transparent">
                  SD
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-300 mt-0.5">
                  Chief AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Clearance & Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{personal.status}</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-4">
          {personal.name}
        </h1>

        {/* Headline */}
        <p className="text-base sm:text-xl font-medium text-indigo-300 max-w-3xl mx-auto mb-4 leading-snug">
          {personal.headline}
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-zinc-300 mb-6">
          <MapPin className="w-3.5 h-3.5 text-zinc-300" />
          <span>{personal.location}</span>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-8">
          {personal.about}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.02]"
          >
            Explore Programs &amp; Case Studies
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 font-medium text-sm transition-all hover:scale-[1.02]"
          >
            <Download className="w-4 h-4 text-indigo-400" />
            Download Resume (PDF)
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-zinc-100 font-medium text-sm transition-all hover:scale-[1.02]"
          >
            <Mail className="w-4 h-4 text-indigo-400" />
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 text-zinc-400">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="X / Twitter"
          >
            <XIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:text-white hover:border-zinc-700 transition-colors"
            aria-label="Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
