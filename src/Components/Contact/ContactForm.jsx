import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/prathamgokulkar/",
    },
    {
      icon: <FaTwitter />,
      label: "Twitter",
      href: "https://x.com/prathamgokulkar",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/prathamgokulkar",
    },
    {
      icon: <MdEmail />,
      label: "Email",
      href: "mailto:prathamgokulkar@gmail.com",
    },
  ];

  return (
    <section id="contact" className="bg-black py-20 text-center">
      <div className="inline-block">
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
          initial="hidden"
          animate="visible"
          variants={headingVariants}
        >
          Get in Touch
        </motion.h1>

        <motion.div
          className="h-1 bg-secondary rounded-full w-24 mx-auto mb-6"
          initial="hidden"
          animate="visible"
          variants={underlineVariants}
          style={{ transformOrigin: "left", width: "100%" }}
        />
      </div>
      <motion.p
        className="text-gray-300 max-w-2xl mx-auto mb-12 "
        variants={itemVariants}
      >
        I’m open to collaboration, questions, or just a friendly tech chat. Feel
        free to connect with me on the platforms below!
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-6"
        variants={containerVariants}
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="flex flex-col items-center justify-center w-20 h-20 bg-base-200 rounded-full text-white text-xl shadow-md hover:bg-secondary hover:scale-110 transition-transform duration-300 cursor-pointer"
            title={link.label}
          >
            {link.icon}
            <span className="text-sm mt-1">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default ContactSection;
