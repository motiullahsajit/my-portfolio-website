import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
      }, [])

    return (
        <section data-aos="zoom-in" id='about' className='container-fuild my-3 container-fluid-bg'>
            <div className="container d-flex justify-content-center">
                <div className="row p-3 align-items-center bg-white">
                    <div className="col-md-6 my-3">
                        <h4 className='color-brand'>I'm a Front-End developer,</h4>
                        <p>Who is a self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local &#38; multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <a className='btn btn-danger' href="https://drive.google.com/uc?export=download&amp;id=11vbCqXopQuQyZGIPRq7qELOt0JOH2sj6">Download Resume</a>
                    </div>
                    <div className="col-md-6 skills my-3">
                        <h3 className='color-brand'>Skills</h3>
                        <p className='about-text'><strong>Comfortable:</strong> JavaScript(ES6), React.js, React-Bootstrap, HTML, CSS, Bootstrap, Node.js,
                        Express.js, MongoDB, Firebase, Heroku, Netlify
                        </p>
                        <p className='about-text'><strong>Familiar:</strong> Redux, Material-UI, SCSS, React Native</p>
                        <p className='about-text'><strong>Tools:</strong> Git, GitHub, Vs Code, NPM, Chrome Dev Tools, Adobe XD, Figma</p>
                        <p className='about-text'><strong>OS:</strong> Windows</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;