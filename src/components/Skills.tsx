import { portfolioData } from "@/data/portfolio";
import { Sparkles, Bot, BrainCircuit, Server, Award, GraduationCap } from "lucide-react";

export function Skills() {
  const { skills, certifications, affiliations } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Generative AI & Agentic AI": <Bot className="w-5 h-5 text-indigo-400" />,
    "Data Science & Machine Learning": <BrainCircuit className="w-5 h-5 text-purple-400" />,
    "Cloud, Infrastructure & Big Data": <Server className="w-5 h-5 text-sky-400" />,
    "Executive Governance & Strategy": <Award className="w-5 h-5 text-emerald-400" />,
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-zinc-900 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Core Capabilities
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            AI/ML Expertise &amp; Technical Competencies
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto mt-3">
            Extensive mastery across cutting-edge Agentic AI, large-scale federal data science, and mission-critical cloud infrastructure.
          </p>
        </div>

        {/* 4 Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skills.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-zinc-800/90 border border-zinc-700/60">
                  {categoryIcons[group.category] || <Sparkles className="w-5 h-5 text-indigo-400" />}
                </div>
                <h3 className="font-semibold text-zinc-100 text-base">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-lg bg-zinc-800/70 border border-zinc-700/60 text-zinc-200 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Working Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certifications */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center gap-2 mb-4 text-indigo-400">
              <Award className="w-5 h-5" />
              <h3 className="text-base font-semibold text-white">Certifications &amp; Credentials</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs px-2.5 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/50 text-indigo-300"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Federal Working Groups & Public Service */}
          <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <GraduationCap className="w-5 h-5" />
              <h3 className="text-base font-semibold text-white">Public Service &amp; Working Groups</h3>
            </div>
            <ul className="space-y-2 text-xs text-zinc-300">
              {affiliations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
