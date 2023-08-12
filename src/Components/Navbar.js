import React from "react";
import sIcon from "../assets/s.png";
export default function Navbar() {
  return (
    <nav className="text-white-800 py-4">
      <div className="flex justify-center items-center">
      <div className="flex justify-start items-start">
  <img className="w-10" alt="logo" src={sIcon} />
</div>


        <a href="/home" className="mr-6">
          Home
        </a>
        <a href="/About" className="mr-6">
          About Me
        </a>
        <a href="#" className="mr-6">
          Skills
        </a>
        <a href="#" className="mr-6">
          Projects
        </a>
        <div className="flex justify-end items-end">
          <a href="#" className="text-right">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
