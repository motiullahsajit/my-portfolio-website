import React from 'react';
import './About.css'

const About = () => {
    return (
        <section id='about' className='container-fuild py-5 container-fluid-bg'>
            <div className="container d-flex justify-content-center">
                <div className="row p-3 align-items-center container-bg">
                    <div className="col-md-6">
                        <h5>I'm a Front-End developer,</h5>
                        <p>Seeking Web Developer work at companies that allows for the implementation of communication, service, and design skills to the programming essentials.</p>
                        <a className='btn btn-danger' href="https://drive.google.com/uc?export=download&amp;id=11vbCqXopQuQyZGIPRq7qELOt0JOH2sj6">Download Resume</a>
                    </div>
                    <div className="col-md-6">
                        <h3 className='color-brand'>Skills</h3>
                        <p><strong>Comfortable:</strong> JavaScript, ES6, React.js, React-Bootstrap, HTML, CSS, Bootstrap, Node.js,
                        Express.js, MongoDB, Firebase, Heroku, Netlify
                        </p>
                        <p><strong>Familiar:</strong> Redux, Material-UI, SCSS, React Native</p>
                        <p><strong>Tools:</strong> Git, GitHub, Vs Code, NPM, Chrome Dev Tools, Adobe XD, Figma</p>
                        <p><strong>OS:</strong> Windows</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;