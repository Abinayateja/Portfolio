import React from "react";
import ProjectCard from "./ProjectCard";
import img1 from '../images/ecomm.png';
import img2 from '../images/food.jpg';
import img3 from '../images/instagram.jpg';
import img4 from '../images/Blog.jpg';
import img5 from '../images/spotify.jpg';
import img6 from '../images/voicebot.png';
import '../pages/about.css';
function Projects() {

  return (
    <section id="projects">
      <div className="container">
        <h1 className="title">My Projects</h1>
        <div className="card-con row">
          <ProjectCard img = {img1} projtitle = "E-Commerce Website" projdis = "A sleek, responsive online store with a modern UI for showcasing and selling products."/>
          <ProjectCard img = {img2} projtitle = "Food Munch App" projdis = "A visually appealing restaurant or recipe site with a menu, images, and interactive elements."/>
          <ProjectCard img = {img3} projtitle = "Instagram Redesign" projdis = "A creative Figma redesign of Instagram with an improved UI/UX experience."/>
          <ProjectCard img = {img4} projtitle = "Blog Site" projdis = "A clean and minimal blog platform for sharing articles with categories and a reading-friendly design."/>
          <ProjectCard img = {img5} projtitle = "Spotify Redesign" projdis = "A Figma-based UI revamp of Spotify, focusing on a fresh, modern, and user-centric layout."/>
          <ProjectCard img = {img6} projtitle = "Gen AI Voice Bot" projdis = "An AI-powered voice assistant that interacts with users using natural language processing."/>
        </div>
        <div className="see-more-con text-center">
          <button className="but1">See more</button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
