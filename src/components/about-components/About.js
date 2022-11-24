import React from "react";

function About() {
  return (
    <div className="body__content">
      <div className="card">
        <div className="card__content">
          <div className="card__front">
            <h2 className="card__title">ABOUT ME</h2>
          </div>
          <div className="card__back">
            <p className="card__body">
              I'm John Dale Unite, a graduating computer engineering student.
              I've been self-studying for one (1) year about front-end
              development.
            </p>
            <p className="card__body">
              Currently, I'm seeking an entry-level position for front-end
              development to start my career in web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
