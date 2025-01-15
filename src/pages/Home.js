import React from "react";
import './home.css';
import image from '../images/images.png';
function Home() {
  return (
      <div className="con-1 container" id="home">
        <div className="row">
          <div className="header-text col-12 col-md-6 col-lg-6">
            <p>FrontEnd Developer</p>
            <h1>Hi, I'm <span id="name">Anusha</span><br/>valluri from India</h1>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <img src={image} alt="" className="pic1"/>
          </div>
        </div>
      </div>
  );
}

export default Home;