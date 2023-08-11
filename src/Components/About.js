// import React from "react";
// import aboutMeIcon from "../assets/aboutMe.jpg";

// export default function About() {
//   return (
//     <section
//       id="aboutMe"
//       className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
//     >
//       <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
//         <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//           <h1 className="title-font text-3xl mb-4 font-medium text-green-500 text-center mx-auto">
//             About Me
//           </h1>
//           <div className="flex justify-center">
//             <div>
//               <p className="mb-2">
//                 Greetings, I'm Somya Bhatnagar – a frontend developer passionate
//                 about crafting exceptional digital experiences. With a strong
//                 affinity for React, I combine design finesse with coding prowess
//                 to bring ideas to life.
//               </p>
//               <p className="mb-8">
//                 My foundation in HTML, CSS, and JavaScript is the backbone of my
//                 work. I constantly explore emerging trends and technologies,
//                 ensuring my projects stay fresh and innovative.
//               </p>
//               <p>
//                 Let's collaborate to transform visions into captivating user
//                 journeys. Explore my portfolio to witness my dedication to
//                 elegant and functional web solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <img
//             className="rounded-full w-20 h-20"
//             alt="aboutMe-Icon"
//             src={aboutMeIcon}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import aboutMeIcon from "../assets/aboutMe.jpg";

export default function About() {
  return (
    <section
      id="aboutMe"
      className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between px-10 py-20">
        <div className="lg:w-1/2 mb-10 md:mb-0">
          <img
            className="rounded-full w-36 h-36 md:w-48 md:h-48 mx-auto md:ml-0"
            alt="aboutMe-Icon"
            src={aboutMeIcon}
          />
        </div>
        <div className="lg:w-1/2 text-center md:text-left md:pl-16">
          <h1 className="title-font text-3xl mb-4 font-medium text-green-500">
            About Me
          </h1>
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
            <p>
              Let's collaborate to transform visions into captivating user
              journeys. Explore my portfolio to witness my dedication to
              elegant and functional web solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

