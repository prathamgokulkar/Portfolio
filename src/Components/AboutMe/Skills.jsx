import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "/assets/Skills/HTML.png" },
    { name: "CSS", icon: "/assets/Skills/CSS3.png" },
    { name: "JavaScript", icon: "/assets/Skills/JavaScript.png" },
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
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white underline decoration-secondary decoration-8 underline-offset-8 ">
          Skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6 max-w-4xl mx-auto px-4">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="w-full max-w-[160px] mx-auto h-40 py-3 bg-base-200 text-md rounded-3xl shadow-sm flex flex-col items-center justify-center"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-20 h-20 mb-2 object-contain"
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
