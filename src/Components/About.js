import React from "react";
import aboutMeIcon from "../assets/aboutMe.jpg";

export default function About() {
  return (
    <section
      id="aboutMe"
      className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
    >
      <div className="flex justify-center">
        <h1 className="mt-4 title-font text-3xl mb-2 font-medium text-green-500 ">
          About Me
        </h1>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-10 py-20">
        <div className="lg:w-1/2 mb-10 md:mb-0">
          <img
            className="rounded-full w-70 h-60 md:w-60 md:h-60 mx-auto "
            alt="aboutMe-Icon"
            src={aboutMeIcon}
          />
        </div>
        <div className="lg:w-1/2 text-center md:text-left md:pl-16">
          <div>
            <p className="mb-2">
              Greetings, I'm Somya Bhatnagar – a frontend developer passionate
              about crafting exceptional digital experiences. With a strong
              affinity for React, I combine design finesse with coding prowess
              to bring ideas to life.
            </p>
            <p className="mb-8">
              My foundation in HTML, CSS, and JavaScript is the backbone of my
              work. I constantly explore emerging trends and technologies,
              ensuring my projects stay fresh and innovative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
