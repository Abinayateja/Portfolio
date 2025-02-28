import React from "react";
const ProjectCard = (props) => {
    return (
            <div className="Pcard col-12 col-md-4" style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                
                color: "white",
                transition: "all 2s ease"
              }}>
              <div className="pro-con">
                <div className="card-text">
                  <h2 className="fw-bold">{props.projtitle}</h2>
                  <p>{props.projdis}</p>
                </div>
              </div>

                
            </div>
    );
}
export default ProjectCard;
