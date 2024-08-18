import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Project.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const {
    name,
    category,
    technologies,
    images,
    description,
    features,
    liveSite,
    repo,
  } = props.project;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="row align-items-center bg-white my-4 project-div">
      <div className="col-md-7 pb-2">
        <h3 className="color-brand project-title">{name}</h3>
        <h5>{category}</h5>

        <div className="my-3 site-link">
          <a
            className="badge rounded-pill"
            rel="noreferrer"
            target="_blank"
            href={liveSite}
          >
            <FontAwesomeIcon icon={faWindowMaximize} /> Live Site
          </a>
          <a
            className="badge rounded-pill"
            rel="noreferrer"
            target="_blank"
            href={repo}
          >
            <FontAwesomeIcon icon={faGithub} /> Repository
          </a>
        </div>

        <p
          className="text-dark"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>

        <p
          className="text-dark"
          dangerouslySetInnerHTML={{ __html: features }}
        ></p>

        <div className="tech-stack-projects">
          <p>Technology Stack:</p>
          <div>
            {technologies.map((tech, techIndex) => (
              <span key={techIndex} className="tech">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {Object.values(images).map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 img-fluid"
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ height: "300px", objectFit: "cover" }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
