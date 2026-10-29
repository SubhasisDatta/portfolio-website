import { portfolioData } from "@/data/portfolio";

export function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Career History &amp; Leadership
        </h2>
        <p className="text-sm text-[#a1a1aa] mb-12">
          Two and a half decades directing federal data science, AI Centers of Excellence, and systems engineering.
        </p>

        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-[#27272a] pl-6 ml-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <h3 className="text-lg font-semibold text-white">
                  {exp.role}
                </h3>
                <span className="text-xs font-mono text-[#a1a1aa]">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-emerald-400 font-medium mb-3">
                {exp.company}
              </p>
              <ul className="space-y-2 text-sm text-[#a1a1aa]">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="leading-relaxed">
                    — {h}
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
