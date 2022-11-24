import React from "react";
import { FaPlus } from "react-icons/fa";

export default function Sidebar({ sidebar, closesidebar }) {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <div className="navbar-container">
        <FaPlus className="closeicon-container" onClick={closesidebar} />

        <a href="#home-section">
          <li>Home</li>
        </a>

        <a href="#about-section">
          <li>About Me</li>
        </a>

        <a href="#projects-section">
          <li>Projects</li>
        </a>

        <a href="#skills-section">
          <li>Skills</li>
        </a>

        <a href="#contact-section">
          <li>Contact Me</li>
        </a>

        <a href="https://drive.google.com/file/d/1E77y8tON9IW22kdngoQOhUAKob1j5czJ/view?usp=share_link" target="_blank">
          <li>Resume</li>
        </a>
      </div>
    </div>
  );
}
