import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-zinc-900 bg-zinc-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Track Record
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience &amp; Leadership
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto mt-3">
            Over two decades of proven delivery, executive advisement, and technical program management.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-400">
                    {exp.company}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-zinc-800/80 px-2.5 py-1 rounded-md self-start">
                  <Calendar className="w-3 h-3 text-zinc-300" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-zinc-300">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <ChevronRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
