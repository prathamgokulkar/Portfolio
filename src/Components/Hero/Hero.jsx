import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut", delay: 0.3 },
  },
};

const Hero = () => {
  return (
    <section id="scrollspyHero" className="bg-primary py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
          {/* Text Section */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left ml-0 lg:ml-20"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Hey, I'm <br />
              <span className="text-secondary my-2 inline-block">
                Prathamesh Gokulkar
              </span>
            </h1>
            <p className="text-lg mb-6 text-white">
              <p className="text-lg mb-6 text-white">
                Full-stack dev meets machine learning — I craft sleek,
                intelligent apps using <strong>React</strong>, and{" "}
                <strong>AI/ML</strong> to solve real-world problems.
              </p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-secondary rounded-full px-4 btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                <a
                  href="https://drive.google.com/file/d/1oPNVliMzFfBMnPwo27OgNpfLEZSbCSRZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View My Resume
                </a>
              </button>
              <button className="btn btn-outline rounded-full px-4 border-white text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg ">
                <Link to="projects" smooth={true} duration={500}>
                  View Projects
                </Link>
              </button>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 text-center"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <img
              src="/assets/hero-home.png"
              alt="Hero"
              loading="lazy"
              className="w-full h-auto max-w-md mx-auto"
              style={{
                WebkitMaskImage: "url(/assets/hero-blob-1.svg)",
                maskImage: "url(/assets/hero-blob-1.svg)",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskPosition: "center",
                maskPosition: "center",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
