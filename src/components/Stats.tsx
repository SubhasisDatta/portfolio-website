import { portfolioData } from "@/data/portfolio";

export function Stats() {
  const { stats } = portfolioData;

  return (
    <section className="py-16 border-b border-[#27272a] bg-[#101114]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                {s.label}
              </div>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
