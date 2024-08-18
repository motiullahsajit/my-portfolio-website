import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header sticky-top bg-brand">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  activeClass="active"
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={400}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://drive.google.com/file/d/11vbCqXopQuQyZGIPRq7qELOt0JOH2sj6/view"
                >
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
