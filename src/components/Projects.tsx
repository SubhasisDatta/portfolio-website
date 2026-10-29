import { portfolioData } from "@/data/portfolio";
import { FolderGit2, CheckCircle2, TrendingUp } from "lucide-react";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Federal Impact
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            Major Programs &amp; Case Studies
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto mt-3">
            Flagship artificial intelligence, fraud detection, and automated modernization programs delivered for US Federal agencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-xl bg-indigo-950/60 border border-indigo-800/50 text-indigo-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-800 text-zinc-300">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {proj.title}
                </h3>

                {/* Key Impact Metric */}
                <div className="flex items-start gap-1.5 p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-xs font-medium mb-4">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-400" />
                  <span>{proj.impact}</span>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
