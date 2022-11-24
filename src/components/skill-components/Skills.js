import React from "react";
import skillData from "./skillData";
import Info from "./Info";

function Skills() {
  const skillname = skillData.map((skillname) => {
    return (
      <div>
        <Info skillname={skillname} />
      </div>
    );
  });
  return (
    <div className="skill-container">
      <div className="skill-wrapper">

      <h2>SKILLS</h2>
      <div className="skillInfo-wrapper">{skillname}</div>
      </div>
    </div>
  );
}

export default Skills;
