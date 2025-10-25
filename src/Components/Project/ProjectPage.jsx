import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import {
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiHuggingface,
  SiPython,
  SiStreamlit,
  SiPostgresql,
  SiPytorch,
  SiLangchain,
  SiDocker,
} from "react-icons/si";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10" id="projects">
      <div className="text-center py-12" ref={ref}>
        <div className="inline-block">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 text-white"
            variants={headingVariants}
            initial="hidden"
            animate={controls}
          >
            My Work
          </motion.h1>

          <motion.div
            className="h-1 bg-secondary rounded-full mt-1"
            variants={underlineVariants}
            initial="hidden"
            animate={controls}
            style={{ transformOrigin: "left" }}
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="NutriGuide – AI-Powered Personalized Nutrition & Recipe Assistant"
          image="/assets/Project_Clicks/NutriGuide.png"
          github="https://github.com/prathamgokulkar/NutriGuide"
          live="https://drive.google.com/file/d/1Cob_HHlevTKpgNGs3F-8hw6CdpClRBuE/view?usp=drive_link"
          stack={[
            {
              name: "FastAPI",
              icon: <SiFastapi className="text-[#009688]" />,
            },
            {
              name: "LangChain",
              icon: <SiLangchain className="text-[#4A90E2]" />,
            },
            {
              name: "NextJS",
              icon: <FaReact className="text-blue-400" />,
            },
            {
              name: "ChromaDB",
              icon: <FaDatabase className="text-yellow-400" />,
            },
            {
              name: "Hugging Face API",
              icon: <SiHuggingface className="text-yellow-500" />,
            },
          ]}
        />
        <ProjectCard
          title="DevTalk"
          image="/assets/Project_Clicks/DevTalk.png"
          github="https://github.com/prathamgokulkar/DevTalk"
          live="https://drive.google.com/file/d/13tvc-Ptfq5PCKqYJWiorZrgjQJNFw3H3/view?usp=drive_link"
          stack={[
            {
              name: "Streamlit",
              icon: <SiStreamlit className="text-[#009688]" />,
            },
            {
              name: "Hugging Face API",
              icon: <SiHuggingface className="text-yellow-500" />,
            },
            {
              name: "PyTorch",
              icon: <SiPytorch className="text-[#4A90E2]" />,
            },
            {
              name: "Python",
              icon: <SiPython className="text-yellow-400" />,
            },
          ]}
        />
        <ProjectCard
          title="IntelliAgent AI: Multi-Agent PDF Chat"
          image="/assets/Project_Clicks/Intelliagent.png"
          github="https://github.com/prathamgokulkar/IntelliAgent"
          live="#"
          stack={[
            {
              name: "FastAPI",
              icon: <SiFastapi className="text-[#009688]" />,
            },
            {
              name: "LangChain",
              icon: <SiLangchain className="text-yellow-500" />,
            },
            {
              name: "Docker",
              icon: <SiDocker className="text-yellow-400" />,
            },
            {
              name: "React",
              icon: <FaReact className="text-yellow-400" />,
            },
            {
              name: "Python",
              icon: <SiPython className="text-yellow-400" />,
            },
          ]}
        />
        <ProjectCard
          title="Generative Search Engine"
          image="/assets/Project_Clicks/SearchEngine.png"
          github="https://github.com/prathamgokulkar/Search-engine-pipeline"
          live="https://search-engine-pipeline-prathamg.streamlit.app/"
          stack={[
            {
              name: "Streamlit",
              icon: <SiStreamlit className="text-[#009688]" />,
            },
            {
              name: "LangChain",
              icon: <SiLangchain className="text-yellow-500" />,
            },
            {
              name: "Python",
              icon: <SiPython className="text-yellow-400" />,
            },
          ]}
        />
        <ProjectCard
          title="EasyStay"
          image="/assets/Project_Clicks/EasyStay.png"
          github="https://github.com/prathamgokulkar/EasyStay"
          live="https://easystay-2.onrender.com/listings"
          stack={[
            {
              name: "Express.js",
              icon: <SiExpress className="text-gray-300" />,
            },
            {
              name: "Node.js",
              icon: <SiNodedotjs className="text-green-500" />,
            },
            {
              name: "MongoDB",
              icon: <SiMongodb className="text-green-600" />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
