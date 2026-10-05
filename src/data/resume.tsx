import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Prathamesh Gokulkar",
  initials: "PG",
  url: "https://prathamgokulkar.github.io",
  location: "Pune",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "AI Engineer building production-grade AI applications, LLM pipelines, RAG systems, and agentic workflows.",
  summary: `I'm an AI Engineer focused on building practical AI systems using LLMs, RAG, agentic workflows, and modern backend infrastructure.

I've worked across document intelligence, healthcare chatbots, LLM pipelines, model fine-tuning, and production AI applications.

My projects include SmartScan AI, a multi-agent document intelligence system that achieved 98% OCR accuracy and ~5s latency, and NutriGuide, where I optimized a RAG pipeline by tracing and eliminating database bottlenecks.

I enjoy working at the intersection of AI, software engineering, and product requirements — taking an idea from a problem statement to a working system.

Currently, I'm an AI Engineer at Intlnc AI, building AI applications against real client requirements.`,
  avatarUrl: "/me.png",
  highlights: [
    { value: "3rd / 48", label: "Technokratia 2026" },
    { value: "98% OCR", label: "SmartScan AI accuracy" },
    { value: "~5 sec", label: "SmartScan AI latency" },
    { value: "40%", label: "Less document parsing effort" },
    { value: "75%", label: "VRAM reduction, code assistant" },
    { value: "~2 ms", label: "PostgreSQL execution after optimization" },
    { value: "Intlnc AI", label: "AI Engineer · Present" },
  ],
  builds: [
    {
      title: "Understand unstructured data",
      description:
        "Document intelligence, OCR, extraction, and validation.",
    },
    {
      title: "Retrieve and reason over knowledge",
      description:
        "RAG pipelines using embeddings, vector search, and structured databases.",
    },
    {
      title: "Use multiple specialized agents",
      description:
        "Agentic workflows with orchestration, validation, and task-specific agents.",
    },
    {
      title: "Run efficiently",
      description:
        "Model optimization, quantization, LoRA/PEFT, database optimization, and latency reduction.",
    },
    {
      title: "Move beyond prototypes",
      description:
        "FastAPI backends, Dockerized applications, cloud deployment, and production-oriented architecture.",
    },
  ],
  skillGroups: [
    {
      title: "AI / LLM",
      skills: [
        "LLM Applications",
        "RAG",
        "Multi-Agent Systems",
        "LangChain",
        "LangGraph",
        "Prompt Engineering",
        "LLM Evaluation",
        "Embeddings",
        "Vector Search",
        "LoRA / PEFT",
        "Quantization",
        "Hugging Face",
      ],
    },
    {
      title: "Backend",
      skills: ["Python", "FastAPI", "REST APIs", "PostgreSQL", "MongoDB"],
    },
    {
      title: "AI Infrastructure",
      skills: [
        "Docker",
        "GCP Cloud Run",
        "AWS",
        "Vector Databases",
        "Model / API integration",
        "AI application deployment",
      ],
    },
    {
      title: "Databases / Retrieval",
      skills: [
        "PostgreSQL",
        "ChromaDB",
        "FAISS",
        "Pinecone",
        "Sentence Transformers",
      ],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js"],
    },
    {
      title: "Observability",
      skills: ["LangSmith", "Git / GitHub"],
    },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "prathamgokulkar@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/prathamgokulkar",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/prathamgokulkar/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "Twitter",
        url: "https://twitter.com/prathamgokulkar",
        icon: Icons.x,
        navbar: true,
      },
      Email: {
        name: "Email",
        url: "mailto:prathamgokulkar@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      scope: "production",
      company: "Intlnc AI",
      badges: [],
      href: "#",
      location: "Pune",
      title: "AI Engineer",
      logoUrl: "",
      start: "Sep 2026",
      end: "Present",
      description:
        "Building production AI applications from client requirements through technical breakdown, development, and delivery.",
      points: [
        "Working on production AI applications with high ownership",
        "Taking work from client requirements to a technical breakdown, implementation, and application delivery",
        "Exposure to enterprise and client-facing AI workflows",
        "Joining discussions with senior stakeholders and turning business requirements into engineering work",
        "Explaining technical AI concepts in language non-technical stakeholders can use",
        "Working inside real delivery constraints that don't show up in personal projects",
      ],
    },
    {
      scope: "experience",
      company: "Qualitia Software",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI / Software Intern",
      logoUrl: "",
      start: "Feb 2026",
      end: "Apr 2026",
      description:
        "Worked on LLM pipelines where the job was control over the model, the cost, and the architecture, not only a call to a proprietary API.",
      points: [
        "Worked on LLM pipelines and locator automation",
        "Migrated from proprietary APIs toward self-hosted open-weight 7B models",
        "Worked through LLM inference and model deployment considerations",
        "Helped move the system toward a decoupled architecture",
        "Worked on reducing dependency on external and proprietary model APIs",
      ],
    },
    {
      scope: "experience",
      company: "SigmoidAI",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI / ML Intern",
      logoUrl: "",
      start: "Nov 2025",
      end: "Jan 2026",
      description:
        "Early production exposure: a hospital chatbot and dashboard that had to run as a deployed service.",
      points: [
        "Built a WhatsApp-based hospital management chatbot",
        "Deployed services on GCP Cloud Run",
        "Built and connected backend services for the product",
        "Worked on the hospital dashboard the chatbot fed into",
        "Got early exposure to deploying an AI application in a real environment",
      ],
    },
  ],
  education: [] as any[],
  projects: [
    {
      title: "SmartScan AI",
      href: "https://github.com/prathamgokulkar/SmartScan",
      dates: "Technokratia 2026",
      active: true,
      achievement: "3rd place · 48 teams",
      description:
        "Designed an agentic document-processing pipeline where specialized agents handle OCR, extraction, reasoning, and validation instead of a single monolithic LLM call.",
      pipeline:
        "Document → Orchestrator → OCR → Extraction → LLM agent → Validation → Structured output",
      metrics: [
        { value: "98%", label: "OCR accuracy" },
        { value: "~5 sec", label: "Latency" },
        { value: "40%", label: "Less parsing effort" },
        { value: "3rd / 48", label: "Technokratia 2026" },
      ],
      technologies: [
        "Python",
        "LangGraph",
        "LangChain",
        "OCR",
        "RAG",
        "ChromaDB",
        "FastAPI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/prathamgokulkar/SmartScan",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/Project_Clicks/Smartscan.png",
      video: "",
    },
    {
      title: "NutriGuide",
      href: "https://github.com/prathamgokulkar/NutriGuide",
      dates: "RAG performance case study",
      active: true,
      achievement: "Traced the bottleneck, then fixed it",
      description:
        "Personalized nutrition assistant with onboarding, TDEE and macro recommendations, and recipe retrieval through a RAG pipeline over embeddings, ChromaDB, and PostgreSQL.\n\nInstrumented the pipeline with LangSmith and traced a ~26s response to a sequential ILIKE scan across 231K+ recipes. A trigram GIN index cut database execution to ~2ms and application-level lookup to ~9–30ms after warm-up.",
      pipeline:
        "Next.js → FastAPI → RAG → Embeddings → ChromaDB → PostgreSQL",
      metrics: [
        { value: "~26s", label: "Response before tracing" },
        { value: "~2 ms", label: "Query execution after" },
        { value: "9–30 ms", label: "Lookup after warm-up" },
        { value: "231K+", label: "Recipes in search" },
      ],
      technologies: [
        "Next.js",
        "FastAPI",
        "LangChain",
        "LangSmith",
        "ChromaDB",
        "PostgreSQL",
      ],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/1Cob_HHlevTKpgNGs3F-8hw6CdpClRBuE/view?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prathamgokulkar/NutriGuide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/Project_Clicks/NutriGuide.png",
      video: "",
    },
    {
      title: "DevTalk",
      href: "https://github.com/prathamgokulkar/DevTalk",
      dates: "Fine-tuned code assistant",
      active: true,
      achievement: "75% VRAM reduction",
      description:
        "Fine-tuned a 600M-parameter Qwen model with LoRA/PEFT and quantization on a T4 GPU, then built a coding assistant around that model. Parameter-efficient fine-tuning and quantization cut VRAM use by about 75%. The broader project also included speech-related functionality.",
      pipeline: "",
      metrics: [
        { value: "75%", label: "VRAM reduction" },
        { value: "600M", label: "Qwen parameters" },
        { value: "LoRA", label: "PEFT fine-tune" },
        { value: "T4", label: "Training GPU" },
      ],
      technologies: [
        "Python",
        "Hugging Face",
        "PyTorch",
        "LoRA / PEFT",
        "Quantization",
      ],
      links: [
        {
          type: "Demo",
          href: "https://drive.google.com/file/d/13tvc-Ptfq5PCKqYJWiorZrgjQJNFw3H3/view?usp=drive_link",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prathamgokulkar/DevTalk",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/Project_Clicks/DevTalk.png",
      video: "",
    },
  ],
  hackathons: [] as any[],
} as const;
