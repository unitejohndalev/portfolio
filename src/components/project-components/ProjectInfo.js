import React from "react";

function ProjectInfo(props) {
  return (
    <section className="project--container">
      <img src={props.project.projectImage} />
      <a href={props.project.projectLink} target="_blank">
        <button>Visit</button>
      </a>

      <div className="Ui-icon-container">
        <div className="wrapper-icon">
          {/* <img src={props.project.projectIcon} className="img1"/>
          <img src={props.project.projectIconHtml} className="img2"/>
          <img src={props.project.projectIconCss} />
          <img src={props.project.projectIconJs} />
          <img src={props.project.projectIconReact} /> */}

          {/* <p>REACT</p> */}
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
