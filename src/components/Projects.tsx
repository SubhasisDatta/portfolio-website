import { portfolioData } from "@/data/portfolio";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-20 border-b border-[#27272a] bg-[#101114]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Flagship Programs &amp; Case Studies
        </h2>
        <p className="text-sm text-[#a1a1aa] mb-12">
          High-impact artificial intelligence, fraud detection, and automation platforms delivered for US Federal agencies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="p-6 rounded-lg bg-[#141517] border border-[#27272a] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-emerald-400">
                    {proj.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs font-semibold text-white/90 bg-[#1c1d21] p-2.5 rounded mb-4 border border-[#2d2e33]">
                  Impact: {proj.impact}
                </p>
                <p className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#27272a]">
                {proj.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-[#1a1b1e] text-[#a1a1aa]"
                  >
                    {t}
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
