import React, { useEffect } from 'react';
import './About.css'
import Aos from 'aos';
import "aos/dist/aos.css";

const expertise = ["JavaScript(ES6)", "React.js", "React-Bootstrap", "Html", "CSS", "Bootstrap"];
const comfortables = ["Node.js", "Express.js", "MongoDB", "Firebase", "Heroku", "Netlify"];
const familiars = ["Redux", "Material-UI", "SCSS", "React Native"];
const tools = ["Git", "GitHub", "Vs Code", "NPM", "Chrome Dev Tools", "Adobe Xd", "Figma"];

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section data-aos="zoom-in" id='about' className='container-fuild my-5 container-fluid-bg'>
            <div className="container d-flex justify-content-center">
                <div className="row p-3 align-items-center bg-white">
                    <div className="col-md-5 my-3">
                        <h4 className='color-brand'>I'm a Front-End developer,</h4>
                        <p>Who is a self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local &#38; multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                        <a className='btn btn-danger' href="https://drive.google.com/uc?export=download&amp;id=11vbCqXopQuQyZGIPRq7qELOt0JOH2sj6">Download Resume</a>
                    </div>
                    <div className="col-md-7 skills my-3">
                        <h2 className='color-brand'>Skills</h2>
                        <p><strong className='fs-4'>Expertise: </strong>{expertise.map(expert => <span className='badge bg-secondary mx-1 px-3 py-2'>{expert}</span>)}
                        </p>
                        <p><strong className='fs-4'>Comfortable: </strong>{comfortables.map(comfortable => <span className='badge pill bg-secondary mx-1 p-2'>{comfortable}</span>)}
                        </p>
                        <p><strong className='fs-4'>Familiar: </strong>{familiars.map(familiar => <span className='badge bg-secondary mx-1 p-2'>{familiar}</span>)}</p>
                        <p><strong className='fs-4'>Tools: </strong>{tools.map(tool => <span className='badge bg-secondary mx-1 p-2'>{tool}</span>)}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;