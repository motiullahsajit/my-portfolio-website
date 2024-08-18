import React, { useEffect } from "react";
import Aos from "aos";
import myImg from "../../../images/sajit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section className="home container-fluid" id="about">
      <div className="home-content container">
        <div data-aos="fade-right" className="home-img">
          <img src={myImg} alt="Motiullah Sajit" />
        </div>
        <div data-aos="fade-left" className="home-about">
          <h3>Motiullah Sajit</h3>
          <h4>sajitmotiullah@gmail.com</h4>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/motiullahsajit"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/motiullah-sajit/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.upwork.com/freelancers/~01f38a315bc53adc2b"
              className="upwork-link"
            >
              Upwork
            </a>
          </div>
          <p>
            I’m a passionate developer with experience in both frontend and
            backend technologies. My journey began in 2021 with an internship at
            Isolpro, followed by a Full-Stack Intern role at Onethread, where I
            worked on their product which a company management tool. Since then,
            I’ve tackled various projects, including developing a mental health
            app at Quality Life and created a dynamic Admin Dashboard for
            Wellavi. I also worked with Justice AI on a legal tech platform and
            developed Gadgetsallbd, an e-commerce site for a client. Currently,
            I’m involved in Golden Vault, a mentorship platform, and I’m seeking
            full-time opportunities in modern web technologies and aim to build
            a career in AI and IoT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
