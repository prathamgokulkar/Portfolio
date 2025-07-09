// import React from "react";
// import ProjectCard from "./ProjectCard";

// const ProjectPage = () => {
//   return (
//     <div className="px-4 sm:px-8 lg:px-20 py-10" id="projects">
//       <h1 className="text-center py-12 text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-secondary decoration-8 underline-offset-12">
//         My Work
//       </h1>
//       <div className="flex flex-wrap justify-center gap-8">
//         <ProjectCard
//           title="Zerodha Clone"
//           image="/assets/Project_Clicks/Zerodha-clone.png"
//           github="https://github.com/prathamgokulkar/Zerodha_clone"
//           live="https://zerodha-clone-fv2o.vercel.app/"
//           stack={[
//             { name: "React", icon: "/assets/Skills/React.png" },
//             { name: "Express.js", icon: "/assets/Skills/express-js.png" },
//             { name: "Node.js", icon: "/assets/Skills/NodeJS.png" },
//             { name: "MongoDB", icon: "/assets/Skills/MongoDB.png" },
//           ]}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
            { name: "React", icon: "/assets/Skills/React.png" },
            { name: "Express.js", icon: "/assets/Skills/express-js.png" },
            { name: "Node.js", icon: "/assets/Skills/NodeJS.png" },
            { name: "MongoDB", icon: "/assets/Skills/MongoDB.png" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
