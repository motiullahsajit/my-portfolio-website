import React from "react";
import Project from "../Project/Project";
import ProjectsData from "./ProjectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const projects = ProjectsData;
  return (
    <section
      className="container-fuild mt-5 pb-5 projects-bg rounded"
      id="projects"
    >
      <div className="container">
        <h1 className="text-center color-brand my-5">Project Highlights</h1>
        <div className="project-page">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a
            href="https://github.com/motiullahsajit?tab=repositories"
            className="btn btn-danger"
            style={{ background: "#353353", border: "none" }}
          >
            More Projects <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
