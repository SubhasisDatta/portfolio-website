import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhasis Datta — Chief Data Scientist & AI Officer",
  description:
    "Executive portfolio of Subhasis Datta. Over 25 years leading Federal AI/ML, Agentic AI, and Big Data programs across IRS, USCIS, USAF, and SEC.",
  authors: [{ name: "Subhasis Datta" }],
  openGraph: {
    title: "Subhasis Datta — Chief Data Scientist & AI Officer",
    description: "Federal AI/ML, Agentic AI, and Mission-Critical Systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#0c0d0e] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}
