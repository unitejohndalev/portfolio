import React, { useState, useEffect } from "react";
import {
  FaMoon,
  FaBars,

} from "react-icons/fa";

function Navbar({ opensidebar }) {
  const [navSize, setnavSize] = useState("5rem");
  const [navColor, setnavColor] = useState("#252734");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#252734") : setnavColor("#252734");
    window.scrollY > 10 ? setnavSize("4.5rem") : setnavSize("5rem");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow((prevShow) => !prevShow);
  };

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("homenav-container").style.top = "0";
  } else {
    document.getElementById("homenav-container").style.top = "-100px";
  }
}


  return (
    <div>
      <nav
        id="homenav-container"
        style={{
          backgroundColor: navColor,
          height: navSize,
          transition: "all .5s",
        }}
      >
        <div className="icons-container">
          <FaMoon className="faicons-moon" onClick={toggleTheme} />
          <FaBars className="faicons-bar" onClick={opensidebar} />
        </div>
        <div className="components-container">
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

          <a
            href="https://drive.google.com/file/d/1JHLzXOxzicjtjaBAEltzJOucV4-8LspK/view?usp=sharing"
            target="_blank"
          >
            <li>Resume</li>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
