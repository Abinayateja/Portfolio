import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar({ isDarkMode, toggleDarkMode }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <h1 className=" logo">
          <span className="fir">A</span>nusha
        </h1>
        <button
          id="navb"
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ll">
            <li className="nav-item" id="l1">
              <Link
                className="nav-link"
                to="home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="nav-item" id="l2">
              <Link
                className="nav-link"
                to="about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item" id="l3">
              <Link
                className="nav-link"
                to="projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item" id="l4">
              <Link
                className="nav-link"
                to="skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item" id="l5">
              <Link
                className="nav-link"
                to="contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="icon-container" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <i className="fa-solid fa-sun" id="sun-icon"></i>
          ) : (
            <i className="fa-solid fa-moon" id="moon-icon"></i>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
