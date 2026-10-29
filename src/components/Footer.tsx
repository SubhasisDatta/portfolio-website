"use client";

import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";
import { Heart } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-8 border-t border-zinc-900 bg-zinc-950 text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {year} {portfolioData.personal.name}. All rights reserved.
        </p>

        <p className="flex items-center gap-1.5">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>using Next.js, Tailwind CSS &amp; Vercel</span>
        </p>
      </div>
    </footer>
  );
}
