import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className='container-fuild py-5 container-fluid-bg'>
            <div className="continer d-flex justify-content-center">
                <div className="col-md-8 row p-3 align-items-center container-bg">
                    <div className="col-md-6">
                        <h6>I'm a Front-End developer</h6>
                        <p>Seeking Web Developer work at companies that allows for the implementation of communication, service, and design skills to the programming essentials.</p>
                        <button className='btn btn-danger'>Download Resume</button>
                    </div>
                    <div className="col-md-6">
                        <h3>Skills</h3>
                        <p>Comfortable: JavaScript, ES6, React.js, React-Bootstrap, HTML, CSS, Bootstrap, Node.js,
                        Express.js, MongoDB, Firebase, Heroku, Netlify
                        </p>
                        <p>Familiar: Redux, Material-UI, SCSS, React Native</p>
                        <p>Tools: Git, GitHub, Vs Code, NPM, Chrome Dev Tools, Adobe XD, Figma</p>
                        <p>OS: Windows</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;