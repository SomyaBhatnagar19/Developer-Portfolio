import React from "react";
import projectsIcon from '../assets/Projects.png';
export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
    >
      <div className="flex justify-center">
        <h1 className="mt-4 title-font text-3xl mb-2 font-medium text-green-500 ">
          Projects
          <img className="w-24 h-auto mt-6 mb-8" alt="projects-icon" src={projectsIcon} />
        </h1>
      </div>
    </section>
  );
}
