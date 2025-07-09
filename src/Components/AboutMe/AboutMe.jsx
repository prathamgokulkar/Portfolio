import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

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

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, delay: 0.1, ease: "easeOut" },
    },
  };

  return (
    <div>
      <div className="text-center px-12 mt-20 mb-12" ref={ref}>
        <div className="inline-block">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 text-white"
            variants={cardVariants}
            initial="hidden"
            animate={controls}
          >
            Who am I?
          </motion.h1>

          <motion.div
            className="h-1 bg-secondary rounded-full mt-1"
            variants={underlineVariants}
            initial="hidden"
            animate={controls}
            style={{
              transformOrigin: "left",
              width: "100%",
            }}
          />
        </div>

        <p className="mx-auto max-w-prose py-4">
          I'm a passionate developer blending the power of Python and React to
          build fast, modern, and meaningful web applications. Whether it's
          crafting sleek user interfaces or building robust backend systems, I
          love turning ideas into reality through code.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
