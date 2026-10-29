import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhasis Datta | Software Engineer & Builder",
  description: "Modern portfolio website showcasing engineering projects, technical stack, and software development experience.",
  keywords: ["Portfolio", "Software Engineer", "Full Stack Developer", "Next.js", "React", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Subhasis Datta" }],
  openGraph: {
    title: "Subhasis Datta | Portfolio",
    description: "Software Engineer & Builder — crafting fast, responsive web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen flex flex-col bg-zinc-950 text-zinc-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
