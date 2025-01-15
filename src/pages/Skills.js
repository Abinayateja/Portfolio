import React from "react";
function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Redux", "Git", "API Integration"];
  return (
    <section id="skills">
      <h1>My Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
