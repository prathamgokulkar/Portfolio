import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
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
    <div id="contact">
      <div className="mt-20 p-4 text-center">
        <div className="text-center px-12 mt-20" ref={ref}>
          <div className="inline-block">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-3 text-white"
              variants={headingVariants}
              initial="hidden"
              animate={controls}
            >
              Contact Me:
            </motion.h1>

            <motion.div
              className="h-1 bg-secondary rounded-full mt-1"
              variants={underlineVariants}
              initial="hidden"
              animate={controls}
              style={{ transformOrigin: "left", width: "100%" }}
            />
          </div>
        </div>
        <p className="mx-auto max-w-prose	py-4">
          Feel free to reach out — I'm always open to collaboration, questions,
          or just a tech chat!
        </p>

        <div className="flex flex-col justify-center items-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/prathamesh-gokulkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-base-300 hover:shadow-secondary hover:scale-[1.02]"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/prathamgokulkar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-base-300 hover:shadow-secondary hover:scale-[1.02]"
          >
            <FaTwitter />
            <span>Twitter</span>
          </a>

          <a
            href="https://github.com/prathamgokulkar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-base-300 hover:shadow-secondary hover:scale-[1.02]"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="mailto:prathamgokulkar@gmail.com"
            className="px-4 py-4 w-full max-w-xs bg-base-200 text-md rounded-3xl shadow-sm flex items-center justify-center gap-2 transition-all duration-300 hover:bg-base-300 hover:shadow-secondary hover:scale-[1.02]"
          >
            <MdEmail />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
