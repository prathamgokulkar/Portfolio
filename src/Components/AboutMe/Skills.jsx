import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaDatabase, FaGithub  } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
  SiSqlalchemy,
  SiLangchain,
  SiDocker,
  SiPostman,
  SiKubernetes,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = {
    "AI / ML": [
      {
        name: "Python",
        icon: <SiPython className="text-yellow-300" size={40} />,
      },
      { name: "NumPy", icon: <SiNumpy className="text-blue-400" size={40} /> },
      {
        name: "Pandas",
        icon: <SiPandas className="text-green-400" size={40} />,
      },
      {
        name: "TensorFlow",
        icon: <SiTensorflow className="text-orange-400" size={40} />,
      },
      {
        name: "LangChain",
        icon: <SiLangchain className="text-purple-400" size={40} />,
      },
      {
        name: "LangGraph",
        icon: <SiLangchain className="text-violet-400" size={40} />,
      },
    ],
    "LLM / RAG": [
      {
        name: "FAISS",
        icon: <FaDatabase className="text-yellow-400" size={40} />,
      },
      {
        name: "ChromaDB",
        icon: <FaDatabase className="text-green-400" size={40} />,
      },
      {
        name: "Sentence Transformers",
        icon: <SiPython className="text-blue-400" size={40} />,
      },
      {
        name: "OpenAI API",
        icon: <SiPython className="text-gray-400" size={40} />,
      },
    ],
    Frontend: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript className="text-yellow-400" size={40} />,
      },
      { name: "React", icon: <FaReact className="text-cyan-400" size={40} /> },
      {
        name: "Next.js",
        icon: <RiNextjsFill className="text-gray-200" size={40} />,
      },
      {
        name: "Tailwind",
        icon: <RiTailwindCssFill className="text-teal-400" size={40} />,
      },
    ],
    Backend: [
      {
        name: "FastAPI",
        icon: <SiFastapi className="text-[#009688]" size={40} />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-500" size={40} />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-gray-300" size={40} />,
      },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600" size={40} />,
      },
      { name: "SQL", icon: <FaDatabase className="text-blue-500" size={40} /> },
      {
        name: "SQLAlchemy",
        icon: <SiSqlalchemy className="text-blue-500" size={40} />,
      },
    ],
    "DevOps / Tools": [
      {
        name: "Docker",
        icon: <SiDocker className="text-blue-400" size={40} />,
      },
      { name: "Git", icon: <FaGithub className="text-gray-200" size={40} /> },
      {
        name: "Postman",
        icon: <SiPostman className="text-orange-500" size={40} />,
      },
      {
        name: "Kubernetes (learning)",
        icon: <SiKubernetes className="text-blue-500" size={40} />,
      },
    ],
  };

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
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-16">
      {/* Main Heading */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-center mb-12"
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          variants={headingVariants}
        >
          Skills
        </motion.h1>
        <motion.div
          className="h-1 bg-secondary rounded-full w-24 mx-auto mb-6"
          variants={underlineVariants}
          style={{ transformOrigin: "left", width: "100%" }}
        />
      </motion.div>

      {/* Category Sections */}
      <div className="space-y-16 w-full max-w-6xl">
        {Object.entries(skillCategories).map(([category, skills], idx) => {
          const controls = useAnimation();
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          useEffect(() => {
            if (inView) controls.start("visible");
          }, [inView, controls]);

          return (
            <motion.div
              key={idx}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-neutral-900 rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-white font-medium text-sm md:text-base mt-2">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
