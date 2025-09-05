import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
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
    <div className="bg-black py-16 flex flex-col items-center justify-center px-4 md:px-8">
      <div className="inline-block">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Who am I?
        </motion.h1>
        <motion.div
          className="h-1 bg-secondary rounded-full w-24 mx-auto mb-6"
          initial="hidden"
          animate="visible"
          variants={underlineVariants}
          style={{ transformOrigin: "left", width: "100%" }}
        />
      </div>

      <p className="text-gray-300 max-w-prose mx-auto text-center">
        Pursuing my BTech in Artificial Intelligence and Data Science, I'm a
        passionate developer blending Python and React to build fast, modern,
        and meaningful web applications.
      </p>
    </div>
  );
};

export default AboutMe;
