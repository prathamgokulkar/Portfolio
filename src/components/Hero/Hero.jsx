import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineArrowDown } from "react-icons/hi";
import { user } from "../../data/user";

const FlipWord = ({ words, interval = 3000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="inline-block relative overflow-hidden" style={{ height: "1.3em", verticalAlign: "bottom" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0, rotateX: -60 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: -30, opacity: 0, rotateX: 60 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="inline-block text-gradient"
          style={{ whiteSpace: "nowrap" }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const stagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const socialIcons = {
    GitHub: <FaGithub size={18} />,
    LinkedIn: <FaLinkedin size={18} />,
    Twitter: <FaXTwitter size={18} />,
  };

  return (
    <section
      id="scrollspyHero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      ref={ref}
    >
      {/* Subtle glow */}
      <div
        className="glow-dot animate-pulse-glow"
        style={{ top: "10%", right: "15%", width: 400, height: 400 }}
      />
      <div
        className="glow-dot animate-pulse-glow"
        style={{ bottom: "15%", left: "10%", width: 250, height: 250, animationDelay: "2s" }}
      />

      <motion.div
        className="section-container relative z-10 py-24"
        variants={stagger}
        initial="hidden"
        animate={controls}
      >
        {/* Status Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
            style={{
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              color: "var(--color-text-muted)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#22c55e" }}
            />
            Open to Full-Time AI/ML Roles
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{user.name}</span>
          <br />
          <span
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 inline-block"
            style={{ color: "var(--color-text-muted)" }}
          >
            I build{" "}
            <FlipWord words={user.roles} interval={2800} />
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg leading-relaxed max-w-lg mb-10"
          style={{ color: "var(--color-text-muted)" }}
        >
          {user.bio}
        </motion.p>


        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
          <a
            href={user.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom"
          >
            View Resume
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-64}
            className="btn-outline-custom cursor-pointer"
          >
            View Projects
          </Link>
        </motion.div>

        {/* Socials */}
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          {user.socials
            .filter((s) => socialIcons[s.label])
            .map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-muted)",
                }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "var(--color-border-hover)",
                  color: "var(--color-text)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {socialIcons[social.label]}
              </motion.a>
            ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link to="experience" smooth={true} duration={500} offset={-64}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="cursor-pointer"
              style={{ color: "var(--color-text-dim)" }}
            >
              <HiOutlineArrowDown size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
