import { portfolioData } from "@/data/portfolio";

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-[#27272a] bg-[#101114]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Education &amp; Advanced Studies
        </h2>
        <p className="text-sm text-[#a1a1aa] mb-12">
          Academic foundations in engineering, operations research, systems analysis, and artificial intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => (
            <div key={idx} className="p-6 rounded-lg bg-[#141517] border border-[#27272a]">
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="text-base font-semibold text-white">
                  {edu.institution}
                </h3>
                {edu.period && (
                  <span className="text-xs font-mono text-emerald-400">
                    {edu.period}
                  </span>
                )}
              </div>
              <p className="text-sm text-[#a1a1aa] leading-relaxed">
                {edu.degree}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
