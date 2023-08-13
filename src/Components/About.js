// import React from "react";
// import aboutMeIcon from "../assets/aboutMe.jpg";

// export default function About() {
//   return (
//     <section
//       id="aboutMe"
//       className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
//     >
//       <div className="flex justify-center">
//         <h1 className="mt-4 title-font text-3xl mb-2 font-medium text-green-500 ">
//           About Me
//         </h1>
//       </div>

//       <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-10 py-20">
//         <div className="lg:w-1/2 mb-10 md:mb-0">
//           <img
//             className="rounded-full w-70 h-60 md:w-60 md:h-60 mx-auto "
//             alt="aboutMe-Icon"
//             src={aboutMeIcon}
//           />
//         </div>
//         <div className="lg:w-1/2 text-center md:text-left md:pl-16">
//           <div>
//             <p className="mb-2">
//               Greetings, I'm Somya Bhatnagar – a frontend developer passionate
//               about crafting exceptional digital experiences. With a strong
//               affinity for React, I combine design finesse with coding prowess
//               to bring ideas to life.
//             </p>
//             <p className="mb-8">
//               My foundation in HTML, CSS, and JavaScript is the backbone of my
//               work. I constantly explore emerging trends and technologies,
//               ensuring my projects stay fresh and innovative.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
// import aboutMeIcon from "../assets/aboutMe.jpg";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedIn (3).png";
import aboutImg from "../assets/about.png";
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
            className=" w-80 h-80 md:w-60 md:h-60 mx-auto "
            alt="aboutMe-Icon"
            src={aboutImg}
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
            <div className="flex justify-center items-center md:justify-start">
              <a
                href="https://github.com/SomyaBhatnagar19"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transform transition-transform hover:scale-105 mr-4"
              >
                <img
                  class="w-12 h-12 object-cover object-center rounded shadow-glow"
                  alt="github-Icon"
                  src={githubIcon}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/somya-bhatnagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:text-green-600 transform transition-transform hover:scale-105 mr-4"
              >
                <img
                  className="w-12 h-12 object-cover object-center rounded shadow-glow"
                  alt="linkedin-Icon"
                  src={linkedInIcon}
                />
              </a>
              <a
                href="/path-to-your-cv.pdf"
                download
                className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded transition duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
