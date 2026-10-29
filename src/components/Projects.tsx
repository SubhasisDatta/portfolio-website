import { portfolioData } from "@/data/portfolio";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <h2 className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-2">
              Work &amp; Creations
            </h2>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              Featured Projects
            </p>
          </div>
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 sm:mt-0 text-sm font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View all on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-indigo-950/60 border border-indigo-800/50 text-indigo-400">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        aria-label={`GitHub source code for ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/60">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded bg-zinc-800/90 text-zinc-300 font-mono"
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
