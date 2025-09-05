import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const ProjectCard = ({ title, image, github, live, stack }) => {
  return (
    <div>
      <div className="card w-80 bg-base-100 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(220,93,5,0.2)] group overflow-hidden">
        <figure className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover h-48 w-full group-hover:scale-[1.05] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {stack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs bg-base-200 rounded-full px-3 py-1 flex items-center gap-1"
              >
                <div className="flex items-center justify-center">
                  {tech.icon}
                </div>
                {tech.name}
              </span>
            ))}
          </div>

          <div className="card-actions justify-between mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline btn-sm flex items-center gap-1"
            >
              <FaGithub />
              Code
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm flex items-center gap-1"
            >
              <BiLinkExternal />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
