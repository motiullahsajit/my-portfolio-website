import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Project.css';

const Project = (props) => {
    const { name, category, technologies, images, description, liveSite, clientSite, serverSite } = props.project;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    return (
        <div className="container project mb-4">
            <div className="row align-items-center bg-white px-2 py-3">
                <div className="col-md-7 pb-2">
                    <h3 className='color-brand'>{name} | {category}</h3>
                    <p className='text-dark'>{description}</p>
                    <p><strong className='color-brand'>Technology:</strong> <span className="green-yellow-text">{technologies}</span></p>
                    <div className="mt-4 site-link">
                        <a className="badge rounded-pill bg-success mx-1" rel="noreferrer" target='_blank' href={liveSite}><FontAwesomeIcon icon={faWindowMaximize} /> Live Site</a>
                        <a className="badge rounded-pill bg-warning mx-1" rel="noreferrer" target='_blank' href={clientSite}><FontAwesomeIcon icon={faGithub} /> Client Site</a>
                        {serverSite && <a className="badge rounded-pill bg-secondary mx-1" rel="noreferrer" target='_blank' href={serverSite}><FontAwesomeIcon icon={faGithub} /> Server Site</a>}
                    </div>
                </div>
                <div className="col-md-5">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img2}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item >
                            <img
                                className="d-block w-100 img-fuild"
                                src={images.img3}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Project;