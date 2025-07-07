import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/assets/Skills/HTML.png" },
    { name: "CSS", icon: "/assets/Skills/CSS3.png" },
    { name: "JavaScript", icon: "/assets/Skills/JavaScriptLogo.png" },
    { name: "React", icon: "/assets/Skills/React.png" },
    { name: "Tailwind", icon: "/assets/Skills/Tailwind_CSS.png" },
    { name: "Node.js", icon: "/assets/Skills/NodeJS.png" },
    { name: "Python", icon: "/assets/Skills/Python.png" },
    { name: "Express.js", icon: "/assets/Skills/express-js.png" },
    { name: "MongoDB", icon: "/assets/Skills/MongoDB.png" },
  ];

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-secondary ">
          Skills
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-6 max-w-2xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="px-3 h-40 w-40 py-1 bg-base-200 text-md rounded-3xl shadow-sm flex flex-col items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-28 h-28 mb-1"
              />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
