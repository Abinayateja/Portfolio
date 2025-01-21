import React from "react";

const ProjectCard = (props) => {
    return (
            <div className="Pcard col-12 col-md-6">
                <img src={props.img} alt=""/>
                <div className="layer">
                    <div>
                        <h1>
                            {props.projtitle}
                        </h1>
                        <p>
                            {props.projdis}
                        </p>
                        <a><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
    );
}
export default ProjectCard;