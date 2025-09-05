import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="scrollspyHero"
      className="relative bg-black py-20 overflow-hidden"
      ref={ref}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="text-center lg:text-left"
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-white">
              Hey, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aa94f7] to-[#4313ec] my-2 inline-block">
                Prathamesh Gokulkar
              </span>
            </h1>

            <h2 className="text-lg md:text-2xl text-gray-300 font-medium mb-8">
              <Typewriter
                words={[
                  "AI/ML Learner",
                  "Open to Internships",
                  "Full-stack Developer",
                  "AI/ML Enthusiast",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </h2>

            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Full-stack dev meets machine learning — I craft sleek, intelligent
              apps using <strong>React</strong> and <strong>AI/ML</strong> to
              solve real-world problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1H-zCgKCQ-lpWZhh42ozd34qhSW-EE8CR/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-8 py-3 font-semibold border border-white text-white shadow-lg bg-transparent transition transform hover:-translate-y-0.5 hover:scale-105 duration-300"
              >
                View My Resume
              </a>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="rounded-full px-8 py-3 font-semibold border border-white text-white shadow-lg bg-transparent transition transform hover:-translate-y-0.5 hover:scale-105 duration-300"
              >
                View Projects
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10 justify-center lg:justify-start">
              {[
                {
                  href: "https://github.com/prathamgokulkar",
                  icon: <FaGithub className="text-1xl md:text-2xl" />,
                },
                {
                  href: "https://www.linkedin.com/in/prathamgokulkar/",
                  icon: <FaLinkedin className="text-1xl md:text-2xl" />,
                },
                {
                  href: "https://twitter.com/prathamgokulkar",
                  icon: <FaTwitter className="text-1xl md:text-2xl" />,
                },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative p-2 rounded-full border border-gray-500 text-white flex items-center justify-center cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-secondary opacity-0"
                    whileHover={{ opacity: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
