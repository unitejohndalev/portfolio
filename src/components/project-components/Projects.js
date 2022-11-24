import React, { useState, useRef } from "react";
import projectData from "./projectData";
import ProjectInfo from "./ProjectInfo";
import Ui from "./Ui";
import UiData from "./UiData";
import ReactInfo from "./ReactInfo";
import ReactData from "./ReactData";
import Firebase from "./Firebase";
import FirebaseData from "./FirebaseData";

function Projects() {
  // ALL DATA MAP
  const project = projectData.map((project) => {
    return (
      <div>
        <ProjectInfo project={project} key={project.uniqueId} />
      </div>
    );
  });

  // UI/UX DATA MAP
  const projectUi = UiData.map((projectUi) => {
    return <Ui projectUi={projectUi} key={projectUi.uniqueId} />;
  });

  // REACT DATA MAP
  const projectReact = ReactData.map((projectReact) => {
    return (
      <ReactInfo projectReact={projectReact} key={projectReact.uniqueId} />
    );
  });

  // FIREBASE DATA MAP
  const projectFirebase = FirebaseData.map((projectFirebase) => {
    return (
      <Firebase
        projectFirebase={projectFirebase}
        key={projectFirebase.uniqueId}
      />
    );
  });

  // ALL
  const [show, setShow] = useState(true);
  const toggleShowAll = () => {
    setShow((prevShow) => !prevShow);
    setShowUi(false);
    setShowReact(false);
    setShowFirebase(false);
  };

  // let allRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!allRef.current.contains(e.target)) {
  //       setShow(false);
  //     }
  //   });
  // });

  // UI
  const [showUi, setShowUi] = useState();
  const toggleShowUi = () => {
    setShowUi((prevShowUi) => !prevShowUi);
    setShow(false);
    setShowReact(false);
    setShowFirebase(false);
  };

  // let UiRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!UiRef.current.contains(e.target)) {
  //       setShowUi(false);
  //     }
  //   });
  // });

  // REACT
  const [showreact, setShowReact] = useState();
  const toggleShowReact = () => {
    setShowReact((prevShowReact) => !prevShowReact);
    setShow(false);
    setShowUi(false);
    setShowFirebase(false);
  };

  // let ReactRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!ReactRef.current.contains(e.target)) {
  //       setShowReact(false);
  //     }
  //   });
  // });

  // FIREBASE
  const [showFirebase, setShowFirebase] = useState();
  const toggleShowFirebase = () => {
    setShowFirebase((prevShowFirebase) => !prevShowFirebase);
    setShow(false);
    setShowUi(false);
    setShowReact(false);
  };

  // let FirebaseRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!FirebaseRef.current.contains(e.target)) {
  //       setShowFirebase(false);
  //     }
  //   });
  // });

  // All PROJECTS
  // const [showProjects, setShowProjects] = useState();

  // const toggleShowAllProjects = () => {
  //  setShowProjects(prevShowProjects => !prevShowProjects)
  //   setShow(true);
  // }

  // let ProjectsRef = useRef();
  // React.useEffect(() => {
  //   document.addEventListener("mousedown", (e) => {
  //     if (!ProjectsRef.current.contains(e.target)) {
  //       setShowProjects(false);
  //     }
  //   });
  // });

  return (
    <div className="project-container">
      {/* <img id='reactLogo' src="./images/project-images/reactLogo.gif"/> */}
      <div className="project-wrapper">
        {/* <h2 onClick={toggleShowAllProjects}>PROJECTS</h2> */}
        <h2>PROJECTS</h2>

        <div>
          <div className="project-section-container">
            <ul>
              <li onClick={toggleShowAll}>ALL</li>
              <li onClick={toggleShowUi}>UI/UX</li>
              <li onClick={toggleShowReact}>REACT</li>
              <li onClick={toggleShowFirebase}>FIREBASE</li>
            </ul>

            <div className="allprojects">
              {show && (
                <div className="project--wrapper tra">
                  <div className="project--wrapper2 tra">{projectReact}</div>
                  <div className="project--wrapper3 tra">{projectFirebase}</div>
                  <div className="project--wrapper1 tra">{projectUi}</div>
                </div>
              )}
            </div>
            <div>
              {showUi && (
                <div className="project--wrapper tra">{projectUi}</div>
              )}
            </div>

            <div>
              {showreact && (
                <div className="project--wrapper tra">{projectReact}</div>
              )}
            </div>

            <div>
              {showFirebase && (
                <div className="project--wrapper tra">{projectFirebase}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
