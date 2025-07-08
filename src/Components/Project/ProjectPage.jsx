import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-20 py-10" id="projects">
      <h1 className="text-center py-12 text-4xl md:text-5xl font-bold mb-4 text-white underline decoration-secondary decoration-8 underline-offset-12">
        My Work
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        <ProjectCard
          title="Zerodha Clone"
          image="/assets/Project_Clicks/Zerodha-clone.png"
          github="https://github.com/prathamgokulkar/Zerodha_clone"
          live="https://zerodha-clone-fv2o.vercel.app/"
          stack={[
            { name: "React", icon: "/assets/Skills/React.png" },
            { name: "Express.js", icon: "/assets/Skills/express-js.png" },
            { name: "Node.js", icon: "/assets/Skills/NodeJS.png" },
            { name: "MongoDB", icon: "/assets/Skills/MongoDB.png" },
          ]}
        />
      </div>
    </div>
  );
};

export default ProjectPage;
