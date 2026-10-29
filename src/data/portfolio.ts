export interface Project {
  title: string;
  category: string;
  impact: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period?: string;
  details?: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export const portfolioData = {
  personal: {
    name: "Subhasis Datta",
    headline: "Chief Data Scientist | Chief AI/Machine Learning Officer | Gen AI & Agentic AI SME",
    status: "US Citizen | Held DoD, DHS & Federal Full Background Clearances",
    location: "North Potomac, MD",
    email: "sxdatta@gmail.com",
    linkedin: "https://www.linkedin.com/in/subhasisdatta/",
    github: "https://github.com/SubhasisDatta",
    twitter: "https://x.com/DataPredictive",
    resumeUrl: "/resume.pdf",
    about:
      "25+ years of distinguished experience as Chief Data Scientist, AI/ML Subject Matter Expert, and Technical Project Manager across more than five dozen Federal AI/ML, Big Data, and advanced analytics initiatives. Proven leadership in delivering multi-million dollar mission-critical programs for IRS, USCIS, SEC, USAF, Census Bureau, and DHS, pioneering Agentic AI, GenAI orchestration, and enterprise fraud analytics.",
  },

  stats: [
    {
      value: "$25B+",
      label: "Revenue Protected",
      detail: "Transformed IRS AI/ML Fraud Detection System, scaling protected revenue from $1B to $25B+ with 90%+ scoring accuracy.",
    },
    {
      value: "25+ Yrs",
      label: "Leadership & R&D",
      detail: "Over 25 years designing, modeling, validating, and deploying enterprise AI/ML and Data Science programs.",
    },
    {
      value: "Millions",
      label: "Cases Automated",
      detail: "Led USCIS AI automated case adjudication, saving tens of millions and driving 10X processing speedups.",
    },
    {
      value: "$1B+",
      label: "Funded Contracts Won",
      detail: "Primary Technical Author and AI Lead winning $1B+ funded and $25B+ IDIQ federal awards.",
    },
  ] as Stat[],

  skills: [
    {
      category: "Generative AI & Agentic AI",
      skills: [
        "Agentic AI",
        "Multi-Agent Orchestration",
        "LangGraph",
        "LangChain",
        "MCP Servers",
        "LLMOps",
        "Agentic RAG",
        "LlamaIndex",
        "AutoGen",
        "Amazon Bedrock",
        "Claude Code",
        "Responsible AI & Guardrails",
      ],
    },
    {
      category: "Data Science & Machine Learning",
      skills: [
        "Predictive Modeling",
        "Time Series ARIMA",
        "Deep Learning",
        "NLP & Text Mining",
        "Fuzzy Logic",
        "Fraud Analytics",
        "Reliability Centered Maintenance (RCM)",
        "PySpark",
        "Python",
        "Databricks",
        "SPSS & SAS",
      ],
    },
    {
      category: "Cloud, Infrastructure & Big Data",
      skills: [
        "AWS Cloud Architecture",
        "Enterprise Architecture",
        "Docker & Containers",
        "PostgreSQL",
        "Netezza Enterprise Lake",
        "Apache Spark",
        "DevSecOps",
        "AIOps",
        "High-Performance Scalability Modeling",
      ],
    },
    {
      category: "Executive Governance & Strategy",
      skills: [
        "White House AI Executive Orders",
        "OMB AI Governance & Compliance",
        "C-Level Strategic Advisory",
        "Federal Procurement ($1B+ Technical Author)",
        "AI Risk Management",
        "Cross-Functional Team Leadership (20+ Scientists)",
      ],
    },
  ] as SkillGroup[],

  projects: [
    {
      title: "USCIS Signature Backlog Reduction AI System",
      category: "Federal Intelligent Automation",
      impact: "Millions of cases closed, $10s of millions saved, 10X process speedup",
      description:
        "Led a multidisciplinary team of 24 AI and Data Scientists building automated AI case closures, network/graph analytics, and rules-driven adjudicative workflows in PySpark and Databricks under the USCIS Chief Data Officer.",
      tags: ["Agentic Automation", "Python", "Databricks", "PySpark", "NLP", "Robotic Automation"],
    },
    {
      title: "IRS Enterprise AI/ML Fraud Detection System",
      category: "National Revenue Protection",
      impact: "Increased protected revenue by 2,500% from $1B to $25B+ in 4 years",
      description:
        "Architected an AI mining and real-time transaction scoring system processing billions of records across 200M tax returns with 90%+ accuracy, safeguarding national tax revenues from multi-billion dollar fraud syndicates.",
      tags: ["AI/ML Fraud Detection", "Real-Time Scoring", "Big Data", "Enterprise Architecture"],
    },
    {
      title: "USAF Predictive Readiness & CEMS Engine Modeling",
      category: "Defense & Mission Readiness",
      impact: "$70M program predicting aircraft readiness and maintenance failure",
      description:
        "Engineered predictive maintenance and fuzzy logic modeling analyzing billions of operational and geospatial metrics for the USAF Comprehensive Engine Management System (CEMS) to ensure optimal mission readiness.",
      tags: ["Predictive Maintenance", "Fuzzy Logic", "Modeling & Simulation", "Defense Logistics"],
    },
    {
      title: "SEC Enterprise AI Governance Platform",
      category: "Regulatory & Financial Oversight",
      impact: "Enterprise-wide AI standard lifecycle & OMB/White House compliance",
      description:
        "Partnered with the SEC Chief AI Officer to design enterprise AI governance, MLOps standards, AI risk guardrails, and secure cloud infrastructure supporting regulatory financial oversight across public corporations.",
      tags: ["AI Governance", "Responsible AI", "OMB Compliance", "MLOps", "AWS Cloud"],
    },
    {
      title: "2020 Decennial Census Cloud Infrastructure",
      category: "US Census Bureau",
      impact: "Engineered scalable cloud platform for largest national data collection",
      description:
        "Technical Program Manager and Chief Data Scientist leading hundreds of engineers deploying thousands of cloud servers, secure data lakes, and fraud analytics for the Decennial Census.",
      tags: ["Cloud Infrastructure", "DevOps", "Enterprise Data Lake", "ATO Security"],
    },
    {
      title: "Federal $1.5B IT Infrastructure Modernization",
      category: "Enterprise Transformation",
      impact: "$100M+ saved via mainframe-to-cloud migration and SLA performance engineering",
      description:
        "Transformed one of the largest federal IT outsourcing contracts across HUD, USPS, and DoS. Automated performance metrics across 100+ SLAs and utilized text mining on millions of incident records to cut downtime.",
      tags: ["Cloud Migration", "ITSM Operations", "Incident Mining", "Performance Analytics"],
    },
  ] as Project[],

  experience: [
    {
      role: "Technical Project Manager, US Air Force Programs",
      company: "Concept Plus",
      period: "2025 – Present",
      highlights: [
        "Lead team of engineers developing next-generation Predictive Maintenance models and systems for USAF Comprehensive Engine Management System (CEMS) and Reliability Centered Maintenance (RCM).",
        "Integrate predictive analytics, reliability statistics, AI/ML optimization, and flight parameters into depot and deployment readiness decision systems.",
      ],
    },
    {
      role: "Chief Data Scientist, Machine Learning Officer & Program Manager",
      company: "Digital Management Inc (DMI) / GreenZone / The Ambit Group",
      period: "2020 – 2025",
      highlights: [
        "Partnered with SEC Chief AI Officer and Strategy Office to establish enterprise AI/ML governance, standard MLOps pipelines, and White House EO compliance.",
        "Directed team of 24 AI and Data Scientists for USCIS Chief Data Officer, building automated case adjudication POC closing 500K+ cases and saving $5M in 6 months.",
        "Delivered technical program management across SEC enforcement and analytics programs on AWS Cloud and on-premises environments.",
        "Conducted ARIMA time-series workload prediction in Python and Apache Spark; earned Special Recognition Award from Chief Data Officer for AI Innovation.",
      ],
    },
    {
      role: "Chief Data Scientist & Chief AI/ML Officer",
      company: "Simple Technology Solutions LLC",
      period: "2019 – 2020",
      highlights: [
        "Spearheaded enterprise-wide AI/ML and Data Science practice across multiple federal agencies including DHS.",
        "Built enterprise data modeling for Data Lakes, NLP, and threat analytics models using PySpark and Netezza for TSA risk-based scoring.",
      ],
    },
    {
      role: "Chief Data Scientist & Director of AI/ML",
      company: "Analytica LLC",
      period: "2018 – 2019",
      highlights: [
        "Led financial fraud and insider trading detection for Federal Financial Oversight Enforcement agencies.",
        "Designed end-to-end cloud data ingestion architecture and prototype for DHS Person-to-Person matching and benefits fraud identification.",
      ],
    },
    {
      role: "Technical Program Manager & Chief Data Scientist",
      company: "SES Corporation",
      period: "2017 – 2018",
      highlights: [
        "Directed infrastructure, integration, and analytics for the 2020 Decennial Census, US Census Bureau.",
        "Oversaw hundreds of DevOps, infrastructure, and security engineers managing thousands of cloud servers for national data dissemination.",
      ],
    },
    {
      role: "Technical Program Manager, Chief Data Scientist & Innovation Lead",
      company: "ICF International",
      period: "2013 – 2017",
      highlights: [
        "Managed federal IT infrastructure outsourcing program valued at over $1.5B covering HUD, USPS, and DoS.",
        "Saved over $100M through data center and server consolidation and application migration to cloud environments.",
        "Automated performance analytics across 100+ SLA metrics, achieving a 10% operational efficiency improvement.",
      ],
    },
    {
      role: "Chief Data Scientist/ML Officer & Systems Engineer",
      company: "The MITRE Corporation",
      period: "2006 – 2013",
      highlights: [
        "Transformed Electronic Fraud Detection System (EFDS) for IRS, boosting protected revenue from $1B to $25B+ with 90%+ accuracy across 200M tax returns.",
        "Built dynamic simulation model of IRS filing systems processing $1.7+T annually for 200M taxpayers, boosting performance metrics by 25%.",
        "Honored twice with MITRE's highest recognition, the Director's Award, and the Corporate Knowledge Management President's Award.",
      ],
    },
    {
      role: "Asst. VP, Director for Center for Data Science & Sr. Data Scientist",
      company: "Alion Science & Technology",
      period: "1996 – 2006",
      highlights: [
        "Led AI/ML Center of Excellence with 20+ Data Scientists and $5-10M operational budget, delivering $200M in programs.",
        "Built $70M Air Force Predictive Readiness System using AI and fuzzy logic to evaluate military deployment readiness.",
        "Received President's Award from the IRS Commissioner and over 12 Excellence awards from Alion.",
      ],
    },
  ] as Experience[],

  education: [
    {
      degree: "Professional Education & MicroMasters in Probability & Data Science, Agentic AI Intensive",
      institution: "MIT (Massachusetts Institute of Technology)",
      period: "2025 – 2027",
    },
    {
      degree: "Professional Education in Machine Learning, AI Agents, LangGraph, LLMOps & MCP",
      institution: "Stanford University & DeepLearning.ai",
      period: "2025 – 2027",
    },
    {
      degree: "MS in Systems Engineering",
      institution: "Johns Hopkins University",
      period: "Expected 2027",
    },
    {
      degree: "PhD (ABD Status) & MS in Management Science and Information Systems",
      institution: "University of Maryland",
    },
    {
      degree: "MBA in Operations Research and MIS",
      institution: "Southern Illinois University",
    },
    {
      degree: "BS in Chemical Engineering",
      institution: "Jadavpur University",
    },
  ] as Education[],

  certifications: [
    "Certified Generative AI Expert™",
    "CAIE Certified Artificial Intelligence (AI and ML) Expert®",
    "Certified Agentic AI Developer™",
    "Forward Deployed Engineer",
    "Multi-Agent Orchestration & MCP Servers",
    "AWS Cloud Practitioner",
    "Azure AI Fundamentals",
    "Amazon Bedrock & Amazon SageMaker",
    "ITIL, KMPro, AIOps, DevSecOps",
    "Responsible AI & Guardrails",
  ],

  affiliations: [
    "Industry Lead, ACT-IAC AI Working Group (Chief AI Officers & Federal COE Leads)",
    "Member, NIST Public Working Group on Defining Big Data, Analytics & IoT Standards",
    "TPM & Citizen Data Scientist, UN Standby Task Force",
    "Senior Data Scientist, DataKind & Statistics Without Borders",
    "Former Adjunct Faculty, Robert H. Smith School of Business, University of Maryland",
  ],
};
