import React from 'react'

function ReactInfo(props) {
  return (
    <section className="project--container">
      <img src={props.projectReact.projectImage} />
      <div className="Ui-icon-container">
        <div className="wrapper-icon">
          <img src={props.projectReact.projectIconHtml} />
          <img src={props.projectReact.projectIconCss} />
          <img src={props.projectReact.projectIconJs} />
          <img src={props.projectReact.projectIcon} />
        </div>
      </div>
      <div className="info-section-container">
        <p>{props.projectReact.projectTitle}</p>
        <p>{props.projectReact.projectInfo}</p>
        <section>
          <a href={props.projectReact.projectLink} target="_blank">
            <button>Live</button>
          </a>

          <a href={props.projectReact.projectSource} target="_blank">
            <button>Source</button>
          </a>
        </section>
      </div>
    </section>
  );
}

export default ReactInfo