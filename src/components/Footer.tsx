import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-8 border-t border-[#27272a] bg-[#0c0d0e] text-xs text-[#71717a]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {portfolioData.personal.name}. All rights reserved.
        </p>
        <p>
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
