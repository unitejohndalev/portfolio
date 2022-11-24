import React from "react";

function Ui(props) {
  return (
    <section className="project--container">
      <img src={props.projectUi.projectImage} id="projectImg" />
      <div className="Ui-icon-container">
        <div className="wrapper-icon">
          <img src={props.projectUi.projectIcon} />
        </div>
      </div>
      <div className="info-section-container">
        <p>{props.projectUi.projectTitle}</p>
        <p>{props.projectUi.projectInfo}</p>
        <section>
       
          <a href={props.projectUi.projectLink} target="_blank">
            <button>View on Figma</button>
          </a>
        </section>
      </div>
    </section>
  );
}

export default Ui;
