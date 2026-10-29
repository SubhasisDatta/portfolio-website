import { portfolioData } from "@/data/portfolio";
import { GraduationCap, BookOpen } from "lucide-react";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 border-b border-zinc-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundations
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Education &amp; Advanced Studies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors flex items-start gap-4"
            >
              <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/40 text-indigo-400 shrink-0 mt-0.5">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-white text-sm">
                    {item.institution}
                  </h3>
                  {item.period && (
                    <span className="text-[11px] font-mono text-indigo-400 shrink-0">
                      {item.period}
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-300 mt-1 leading-relaxed">
                  {item.degree}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
