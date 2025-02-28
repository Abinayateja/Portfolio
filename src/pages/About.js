import React from "react";
import '../pages/about.css';

function About() {
  const openTab = (event, tabName) => {
    const tabcontents = document.getElementsByClassName("tab-contents");
    const tablinks = document.getElementsByClassName("tab-links");

    
    for (const tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }

    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-6 col-lg-6" id="aboutcon">
            <div  id="abtimg">
              
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h1>About</h1>
            <p className="obj">
              A Passionate and Hardworking, Highly Motivated student pursuing Computer Science. I am very much interested to learn new technologies and improving problem-solving and communication skills day by day. Currently, I am learning Full Stack Development, SQL, Python programming.
            </p>
            <div className="tab-titles">
              <p className="tab-links active-link" onClick={(e) => openTab(e, "skills")}>Skills</p>
              <p className="tab-links" onClick={(e) => openTab(e, "experience")}>Experience</p>
              <p className="tab-links" onClick={(e) => openTab(e, "education")}>Education</p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>UI/UX</span><br />Designing Web/App interfaces</li>
                <li><span>React</span><br />Developing Dynamic Web Apps</li>
                <li><span>Python</span><br />Data Analysis and Scripting</li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li><span>Intern</span><br />Built a dynamic website for a client</li>
                <li><span>Freelance</span><br />Developed an e-commerce platform</li>
                <li><span>Open Source</span><br />Contributed to React Libraries</li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li><span>Bachelor's</span><br />Computer Science Engineering</li>
                <li><span>Certifications</span><br />Full Stack Development</li>
                <li><span>Workshops</span><br />UI/UX and Cloud Computing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
