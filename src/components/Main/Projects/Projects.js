import React from 'react';
import Project from '../Project/Project';
import ProjectsData from './ProjectsData';
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const projects = ProjectsData;
    return (
        <section className='container-fuild py-5 project' id="projects">
            <div className="container">
                <h1 className='text-center'>Recent Projects</h1>
                <div className="project-page" id="work">
                    {
                        projects.map(project => <Project key={project.id} project={project} />)
                    }
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a href='https://github.com/motiullahsajit?tab=repositories' className='btn btn-danger'>More Porjects <FontAwesomeIcon icon={faGithub} /></a>
                </div>
            </div>
        </section>
    );
};

export default Projects;