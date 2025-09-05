import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa";
import {
  SiNodedotjs,
  SiFastapi,
  SiExpress,
  SiMongodb,
  SiPython,
  SiTensorflow,
  SiPandas,
  SiNumpy,
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
          title="Zerodha Clone"
          image="/assets/Project_Clicks/Zerodha-clone.png"
          github="https://github.com/prathamgokulkar/Zerodha_clone"
          live="https://zerodha-clone-fv2o.vercel.app/"
          stack={[
            {
              name: "React",
              icon: <FaReact className="text-cyan-400" />,
            },
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
        <ProjectCard
          title="NutriGuide (Under progress)"
          image="/assets/Project_Clicks/NutriGuide.png"
          github="https://github.com/prathamgokulkar/NutriGuide"
          live="#"
          stack={[
            {
              name: "Python",
              icon: <SiPython className="text-yellow-400" />,
            },
            {
              name: "FastAPI",
              icon: <SiFastapi className="text-[#009688]" />,
            },
            {
              name: "NextJS",
              icon: <FaReact className="text-blue-400" />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
