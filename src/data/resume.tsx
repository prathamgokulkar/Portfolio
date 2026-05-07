import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";


export const DATA = {
  name: "Prathamesh Gokulkar",
  initials: "PG",
  url: "https://prathamgokulkar.github.io",
  location: "Remote",
  locationLink: "https://www.google.com/maps",
  description: "AI & Data Science Engineer",
  summary: "With 5+ months of industry experience, I engineer AI-powered solutions using Machine Learning, LLMs, and React/FastAPI \u2014 from RAG pipelines to production-grade full-stack applications. I am a final-year B.Tech student in Artificial Intelligence and Data Science with hands-on experience in building AI-powered and full-stack web applications. Skilled in Python, React, FastAPI, and Machine Learning, I design scalable, intelligent solutions that solve real-world problems and deliver impactful user experiences.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Python", icon: Python },
    { name: "NumPy", icon: undefined },
    { name: "Pandas", icon: undefined },
    { name: "Scikit-learn", icon: undefined },
    { name: "TensorFlow", icon: undefined },
    { name: "PyTorch", icon: undefined },
    { name: "Generative AI", icon: undefined },
    { name: "LLMs", icon: undefined },
    { name: "RAG", icon: undefined },
    { name: "NLP", icon: undefined },
    { name: "Vector Search", icon: undefined },
    { name: "LangChain", icon: undefined },
    { name: "LangGraph", icon: undefined },
    { name: "Fine-tuning (LoRA/PEFT)", icon: undefined },
    { name: "Quantization", icon: undefined },
    { name: "FAISS", icon: undefined },
    { name: "ChromaDB", icon: undefined },
    { name: "Pinecone", icon: undefined },
    { name: "Sentence Transformers", icon: undefined },
    { name: "OpenAI API", icon: undefined },
    { name: "Groq / Gemini API", icon: undefined },
    { name: "Prompt Engineering", icon: undefined },
    { name: "JavaScript", icon: Java },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Tailwind CSS", icon: undefined },
    { name: "FastAPI", icon: undefined },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: undefined },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: undefined },
    { name: "SQL", icon: undefined },
    { name: "SQLAlchemy", icon: undefined },
    { name: "Docker", icon: Docker },
    { name: "Git", icon: undefined },
    { name: "Postman", icon: undefined },
    { name: "GCP / Cloud Run", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
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
      company: "Qualitia Software",
      badges: [],
      href: "#",
      location: "Remote",
      title: "Artificial Intelligence Intern",
      logoUrl: "",
      start: "2/2026",
      end: "Present",
      description: "Working end-to-end from research and experimentation to production-ready implementation Experimenting with LLM integration (open-source + API-based) into existing products Collaborating directly with senior engineers to translate feedback into technical solutions",
    },
    {
      company: "SigmoidAI",
      badges: [],
      href: "#",
      location: "Remote",
      title: "AI Engineer Intern",
      logoUrl: "",
      start: "11/2025",
      end: "Jan 2026",
      description: "Built and deployed AI-powered features for a Healthcare Management System, owning work across AI integration and product development Built a WhatsApp-based patient chatbot handling appointment updates, report delivery, and image intake \u2014 integrated directly into the hospital dashboard Managed end-to-end deployment of AI services on Google Cloud Platform using Cloud Run",
    },
  ],
  education: [] as any[],
  projects: [
    {
      title: "NutriGuide",
      href: "https://drive.google.com/file/d/1Cob_HHlevTKpgNGs3F-8hw6CdpClRBuE/view?usp=drive_link",
      dates: "",
      active: true,
      description: "AI-Powered Personalized Nutrition & Recipe Assistant",
      technologies: ["FastAPI", "LangChain", "Next.js", "ChromaDB", "Hugging Face"],
      links: [
        {
          type: "Website",
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
      href: "https://drive.google.com/file/d/13tvc-Ptfq5PCKqYJWiorZrgjQJNFw3H3/view?usp=drive_link",
      dates: "",
      active: true,
      description: "A 0.6B Parameter Fine-Tuned AI Code Assistant",
      technologies: ["Streamlit", "Hugging Face", "PyTorch", "Python"],
      links: [
        {
          type: "Website",
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
    {
      title: "SmartScan",
      href: "#",
      dates: "",
      active: true,
      description: "A Multi-Agent RAG System",
      technologies: ["FastAPI", "LangChain", "Docker", "React", "Python"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
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
      title: "Generative Search Engine",
      href: "https://search-engine-pipeline-prathamg.streamlit.app/",
      dates: "",
      active: true,
      description: "AI-Powered Search Pipeline",
      technologies: ["Streamlit", "LangChain", "Python"],
      links: [
        {
          type: "Website",
          href: "https://search-engine-pipeline-prathamg.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prathamgokulkar/Search-engine-pipeline",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/Project_Clicks/SearchEngine.png",
      video: "",
    },
    {
      title: "Zerodha Clone",
      href: "https://zerodha-clone-fv2o.vercel.app/",
      dates: "",
      active: true,
      description: "Stock Market Trading Platform Clone",
      technologies: ["React", "Node.js", "Express.js", "MongoDB"],
      links: [
        {
          type: "Website",
          href: "https://zerodha-clone-fv2o.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/prathamgokulkar/Zerodha-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/Project_Clicks/Zerodha-clone.png",
      video: "",
    },
  ],
  hackathons: [] as any[],
} as const;
