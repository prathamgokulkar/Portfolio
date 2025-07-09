import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/assets/Skills/HTML.png" },
    { name: "CSS", icon: "/assets/Skills/CSS3.png" },
    { name: "JavaScript", icon: "/assets/Skills/JavaScript.png" },
    { name: "React", icon: "/assets/Skills/React.png" },
    { name: "Tailwind", icon: "/assets/Skills/Tailwind_CSS.png" },
    { name: "Node.js", icon: "/assets/Skills/NodeJS.png" },
    { name: "Python", icon: "/assets/Skills/Python.png" },
    { name: "Express.js", icon: "/assets/Skills/express-js.png" },
    { name: "MongoDB", icon: "/assets/Skills/MongoDB.png" },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
    >
      <div>
        <div className="text-center mt-20 ">
          <div className="text-center px-12 mt-20 mb-12" ref={ref}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-3 text-white"
              variants={headingVariants}
              initial="hidden"
              animate={controls}
            >
              Skills
            </motion.h1>

            <motion.div
              className="h-1 bg-secondary rounded-full w-24 mx-auto mt-1"
              variants={underlineVariants}
              initial="hidden"
              animate={controls}
              style={{ transformOrigin: "left" }}
            />
          </div>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 max-w-4xl mx-auto px-4 "
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="w-full max-w-[160px] mx-auto h-40 py-3 bg-base-200 text-md rounded-3xl shadow-sm flex flex-col items-center justify-center "
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-20 h-20 mb-2 object-contain hover:scale-[1.15] transition-all duration-300"
                />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
