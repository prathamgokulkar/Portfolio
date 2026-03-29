import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } },
  };

  const getPresentDuration = (startMonth, startYear) => {
    const startDate = new Date(startYear, startMonth - 1);
    const currentDate = new Date();
    
    let months = (currentDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += currentDate.getMonth();
    months += 1; 
    
    const years = Math.floor(months / 12);
    const extraMonths = months % 12;
    
    let durationStr = "";
    if (years > 0) durationStr += `${years} yr${years > 1 ? 's' : ''} `;
    if (extraMonths > 0) durationStr += `${extraMonths} mos`;
    if (years === 0 && extraMonths === 0) durationStr = "1 mos";
    
    return durationStr.trim();
  };

  const experiences = [
    {
      role: "Artificial Intelligence Intern",
      company: "Qualitia Software",
      duration: `Feb 2026 - Present · ${getPresentDuration(2, 2026)}`,
      location: "Remote",
      points: [
        "Working end-to-end from research and experimentation to production-ready implementation",
        "Experimenting with LLM integration (open-source + API-based) into existing products",
        "Collaborating directly with senior engineers to translate feedback into technical solutions",
      ],
    },
    {
      role: "AI Engineer Intern",
      company: "SigmoidAI",
      duration: "Nov 2025 - Jan 2026 · 3 mos",
      location: "Remote",
      points: [
        "Built and deployed AI-powered features for a Healthcare Management System, owning work across AI integration and product development.",
        "Built a WhatsApp-based patient chatbot handling appointment updates, report delivery, and image intake from patients integrated directly into the hospital dashboard, managed end-to-end deployment of AI services on Google Cloud Platform using Cloud Run",
        "Contributed to broader product development as part of a small early-stage team, working across AI and software development",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 + 0.3, ease: "easeOut" },
    }),
  };

  return (
    <div className="px-4 sm:px-8 lg:px-20 py-16" id="experience">
      <div className="text-center pb-12" ref={ref}>
        <div className="inline-block">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-3 text-white"
            variants={headingVariants}
            initial="hidden"
            animate={controls}
          >
            My Experience
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

      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className="bg-[#111111] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-secondary transition-colors duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-lg text-secondary font-semibold mt-1">
                  {exp.company}
                </h4>
              </div>
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p className="text-gray-400 font-medium">{exp.duration}</p>
                <p className="text-gray-500 text-sm">{exp.location}</p>
              </div>
            </div>
            <ul className="list-disc list-outside ml-5 text-gray-300 space-y-2">
              {exp.points.map((point, idx) => (
                <li key={idx} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
