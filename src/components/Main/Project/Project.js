import React, { useState, useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Project.css';

const Project = (props) => {
    const { name, category, technologies, images, description, githubRipository, liveWebsite } = props.project;
    //carousel
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);

    };
    return (
        <div className="container bg-white pl-4 pr-4 project mb-4 ">
            <div className="row align-items-center">
                <div className="col-md-7 pb-2">
                    <h3><span className="gold-text">{name}</span></h3>
                    <h5>Category: <span className="green-yellow-text">{category}</span></h5>
                    <p>{description}</p>
                    <p><strong>Technology:</strong> <span className="green-yellow-text">{technologies}</span></p>
                    <a className="btn mr-2 mt-2 btn-secondary" target='_blank' href={githubRipository}>Github Rispository</a>
                    <a className="btn mr-2 mt-2 btn-warning" target='_blank' href={liveWebsite}>Visit Live Website</a>
                </div>
                <div className="col-md-5">
                        <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={images.img1}
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
                                    src={images.img2}
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item >
                                <img
                                    className="d-block w-100"
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