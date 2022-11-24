import React from 'react'

function Firebase(props) {
  return (
    <section className="project--container">
      <img src={props.projectFirebase.projectImage} />
      <div className="Ui-icon-container">
        <div className="wrapper-icon">
          <img src={props.projectFirebase.projectIconJava} />
          <img src={props.projectFirebase.projectIconFirebase} />
        </div>
      </div>
      <div className="info-section-container">
        <p>{props.projectFirebase.projectTitle}</p>
        <p>{props.projectFirebase.projectInfo}</p>
        <section>
          <a href={props.projectFirebase.projectLink} target="_blank">
            <button>Video</button>
          </a>
        </section>
      </div>
    </section>
  );
}

export default Firebase