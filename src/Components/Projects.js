import React from "react";
import projectsIcon from '../assets/Projects.png';
// import projects from '../data.js';

export default function Projects() {
  const projects = [
    {
      title: "React Reserve",
      subtitle: "MERN Stack",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-1.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "React Tracks",
      subtitle: "React and Python",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-2.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "DevChat",
      subtitle: "React and Firebase",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-3.gif",
      link: "https://reactbootcamp.com",
    },
    {
      title: "Epic Todo App",
      subtitle: "React Hooks",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?",
      image: "./project-4.gif",
      link: "https://reactbootcamp.com",
    },
  ];
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
      <div className="flex flex-wrap -m-4">
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
