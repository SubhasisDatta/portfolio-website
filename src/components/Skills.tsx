import { portfolioData } from "@/data/portfolio";
import { Code2, Server, Database, Cloud } from "lucide-react";

export function Skills() {
  const { skills } = portfolioData;

  const categoryIcons: Record<string, React.ReactNode> = {
    "Frontend Development": <Code2 className="w-5 h-5 text-indigo-400" />,
    "Backend & Systems": <Server className="w-5 h-5 text-purple-400" />,
    "Databases & Storage": <Database className="w-5 h-5 text-emerald-400" />,
    "DevOps & Cloud": <Cloud className="w-5 h-5 text-sky-400" />,
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-zinc-900 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
            Expertise
          </h2>
          <p className="text-2xl sm:text-3xl font-bold text-white">
            Skills &amp; Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-800/80 border border-zinc-700/60">
                  {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-indigo-400" />}
                </div>
                <h3 className="font-semibold text-zinc-100 text-sm">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/50 text-zinc-300"
                  >
                    {skill}
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
