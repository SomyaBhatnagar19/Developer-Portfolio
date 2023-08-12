import React from "react";
import skillsIcon from "../assets/skills.png";
import verifiedIcon from "../assets/verified.png";
export default function Skills() {
  const skills = [
    "React JS",
    "Next JS",
    "Bootstrap",
    "HTML",
    "JavaScript",
    "CSS",
    "Tailwind",
    "C++",
  ];

  return (
    <section id="skills" className="shadow-lg">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h4 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-500">
          Skills
        </h4>
        <img className="w-24 h-auto mt-6 mb-8" alt="skills" src={skillsIcon} />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
  {skills.map((skill, index) => (
    <div key={index} className="p-4 bg-green-800 rounded-lg shadow text-white flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-6 h-auto mr-2"
          alt='verified'
          src={verifiedIcon}
        />
        {skill}
      </div>
      
    </div>
    
  ))}
</div>
      </div>
    </section>
  );
}
