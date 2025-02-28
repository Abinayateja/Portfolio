import React from "react";
const ProjectCard = (props) => {
    return (
            <div className="Pcard col-12 col-md-4" style={{
                backgroundImage: `url(${props.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white"
              }}>

                
            </div>
    );
}
export default ProjectCard;
