import { portfolioData } from "@/data/portfolio";

export function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="about" className="pt-24 pb-20 border-b border-[#27272a]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Clearance note */}
        <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold mb-6">
          {personal.status} · {personal.location}
        </p>

        {/* Primary headline: clear, authoritative, 2 lines */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight max-w-4xl">
          Subhasis Datta builds and leads mission-critical Federal AI/ML systems.
        </h1>

        {/* Narrative bio */}
        <p className="text-lg text-[#a1a1aa] leading-relaxed max-w-3xl mb-10">
          {personal.about}
        </p>

        {/* Key Actions & Links */}
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-white text-black font-semibold hover:bg-[#e4e4e7] transition-colors"
          >
            Download Resume (PDF)
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-[#18191c] border border-[#27272a] text-white hover:border-[#3f3f46] transition-colors"
          >
            LinkedIn Profile
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded bg-[#18191c] border border-[#27272a] text-white hover:border-[#3f3f46] transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="px-5 py-2.5 rounded bg-[#18191c] border border-[#27272a] text-white hover:border-[#3f3f46] transition-colors"
          >
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}
