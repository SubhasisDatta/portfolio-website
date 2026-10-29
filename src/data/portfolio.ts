export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export const portfolioData = {
  personal: {
    name: "Subhasis Datta",
    title: "Software Engineer & Builder",
    status: "Open to new opportunities",
    location: "Global / Remote",
    bio: "Passionate full-stack software engineer specializing in modern React/Next.js frontends, resilient backend architectures, and AI-driven developer workflows.",
    email: "subhasisdatta@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  skills: [
    {
      category: "Frontend Development",
      skills: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 & CSS3", "State Management"],
    },
    {
      category: "Backend & Systems",
      skills: ["Node.js", "Express", "REST APIs", "GraphQL", "Python", "Microservices"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Supabase"],
    },
    {
      category: "DevOps & Cloud",
      skills: ["Vercel", "Git & GitHub", "Docker", "CI/CD Pipelines", "AWS", "Linux"],
    },
  ] as SkillCategory[],
  projects: [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Interactive real-time web application featuring data visualizations, predictive metrics, and responsive telemetry stream management.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "Vercel"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
    },
    {
      title: "Cloud Infrastructure Orchestrator",
      description: "Automated workflow engine managing container deployments, health probes, and live alerting hooks across multi-cloud environments.",
      tags: ["Node.js", "Docker", "PostgreSQL", "Tailwind CSS", "WebSockets"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
    },
    {
      title: "Modern E-Commerce Storefront",
      description: "High-performance headless e-commerce store with optimized server-side rendering, instant search, and integrated checkout flow.",
      tags: ["Next.js", "React", "Stripe API", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://vercel.com",
      featured: true,
    },
  ] as Project[],
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Innovations",
      period: "2023 - Present",
      description: [
        "Architected scalable cloud web apps delivering sub-second response times for global user base.",
        "Engineered end-to-end automated deployment pipelines targeting Vercel and GitHub Actions.",
        "Mentored team members in modern TypeScript patterns and performance optimization.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Lab",
      period: "2021 - 2023",
      description: [
        "Built responsive client-facing web portals and REST APIs using React and Node.js.",
        "Optimized frontend bundle sizes and core web vitals, boosting Lighthouse performance scores by 35%.",
      ],
    },
  ] as Experience[],
};
