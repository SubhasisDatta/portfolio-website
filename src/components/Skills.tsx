import { portfolioData } from "@/data/portfolio";

export function Skills() {
  const { skills, certifications, affiliations } = portfolioData;

  return (
    <section id="skills" className="py-20 border-b border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">
          Capabilities &amp; Technical Competencies
        </h2>
        <p className="text-sm text-[#a1a1aa] mb-12">
          Specialized expertise spanning Agentic AI, modern data engineering, and federal compliance.
        </p>

        {/* 4 Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skills.map((group) => (
            <div key={group.category} className="p-6 rounded-lg bg-[#141517] border border-[#27272a]">
              <h3 className="text-base font-semibold text-white mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded bg-[#1c1d21] border border-[#2d2e33] text-[#d4d4d8]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Working Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-[#141517] border border-[#27272a]">
            <h3 className="text-base font-semibold text-white mb-4">
              Certifications &amp; Credentials
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-xs px-2.5 py-1 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-[#141517] border border-[#27272a]">
            <h3 className="text-base font-semibold text-white mb-4">
              Public Service &amp; Standards Groups
            </h3>
            <ul className="space-y-2 text-xs text-[#a1a1aa]">
              {affiliations.map((a, i) => (
                <li key={i} className="leading-relaxed">
                  — {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
