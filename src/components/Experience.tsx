import { portfolioData } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            Career
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Experience &amp; Journey
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-indigo-950/60 border border-indigo-800/40 text-indigo-400">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-indigo-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-400 sm:self-start sm:mt-1">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-sm text-zinc-300 ml-9 list-disc">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {item}
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
