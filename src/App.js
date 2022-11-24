import React, { useState } from "react";
import "../src/styles/style.css";
import Backdrop from "./Backdrop";
import Navbar from "./components/navbar-components/Navbar";
import Sidebar from "./components/sidebar-component/Sidebar";
import Home from "./components/home-components/Home";
import About from "./components/about-components/About";
import Projects from "./components/project-components/Projects";
import Skills from "./components/skill-components/Skills";
import Contact from "./components/contact-components/Contact";
import Socials from "./components/social-components/Socials";
import Footer from "./components/footer-components/Footer";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const sidebartoggle = () => {
    setSidebar((prevSidebar) => !prevSidebar);
  };
  return (
    <div className="app-container">
      <Navbar opensidebar={sidebartoggle} />
      <Backdrop sidebar={sidebar} closesidebar={sidebartoggle} />
      <Sidebar sidebar={sidebar} closesidebar={sidebartoggle} />
      <div className="components-container">
        <section id="home-section">
          <Home />
        </section>

        <section id="about-section">
          <About />
        </section>

        <section id="projects-section">
          <Projects />
        </section>

        <section id="skills-section">
          <Skills />
        </section>

        <section id="contact-section">
          <Contact />
        </section>

        <Socials />
      </div>

      <Footer />
    </div>
  );
}

export default App;
