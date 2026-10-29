import { portfolioData } from "@/data/portfolio";

export function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-12 border-y border-zinc-900 bg-zinc-950/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-2">
                {stat.label}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
