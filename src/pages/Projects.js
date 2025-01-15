import React from "react";
import ProjectCard from "./ProjectCard";
import image from '../images/book-store-v1.png';
import img1 from '../images/sleep-music-page.png';
import img2 from '../images/movie-nemo-page-v1.png';
import '../pages/about.css';
function Projects() {
  const projectList = [
    { 
      title: "Portfolio Website", 
      description: "A responsive portfolio website built using React, showcasing my work and skills.", 
      link: "https://example.com" 
    },
    { 
      title: "Weather App", 
      description: "A weather forecasting web app that fetches real-time weather data from a public API.", 
      link: "https://example.com/weather-app" 
    },
    { 
      title: "E-commerce Website", 
      description: "An online store built with React, Redux, and Firebase for managing authentication and databases.", 
      link: "https://example.com/ecommerce" 
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="title">My Projects</h1>
        <div className="card-con row">
          <ProjectCard img = {image} projtitle = "Food Munch App" projdis = "lklksjlskjlksjljslkjlaskjlkjdlkj"/>
          <ProjectCard img = {img1} projtitle = "Food Munch App" projdis = "lklksjlskjlksjljslkjlaskjlkjdlkj"/>
          <ProjectCard img = {img2} projtitle = "Food Munch App" projdis = "lklksjlskjlksjljslkjlaskjlkjdlkj"/>
        </div>
        <div className="text-center">
          <button className="but1">See more</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
