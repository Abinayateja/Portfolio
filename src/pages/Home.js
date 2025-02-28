import React from "react";
import './home.css';
function Home() {
  return (
      <div className="con-1 container" id="home">
        <div className="row home-con">
          <div className="header-text col-12 col-md-6 col-lg-6">
            <p>FrontEnd Developer</p>
            <h1>Hi, I'm <span id="name">Anusha</span><br/>valluri from India</h1>
          </div>
          <div className="col-12 col-md-6 col-lg-6 profile-con">
            <div className="profile">
              
            </div>
          </div>
        </div>
      </div>
  );
}

export default Home;
