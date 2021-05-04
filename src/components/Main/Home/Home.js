import React, { useEffect } from 'react';
import './Home.css'
import myImg from '../../../images/sajit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <section className='home container-fluid' id='home'>
            <div className="container d-flex justify-content-center">
                <div data-aos="fade-up" className="col-lg-4 col-md-8 col-sm-10 my-5 text-center">
                    <div className="col-lg-6 col-md-4  mx-auto my-3">
                        <img src={myImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8 mx-auto my-3">
                        <h3>Motiullah Sajit</h3>
                        <h6>sajitmotiullah@gmail.com</h6>
                    </div>
                    <div className="d-flex justify-content-around my-3 col-lg-4 col-md-6 col-sm-8 mx-auto">
                        <a className='text-white' href="https://github.com/motiullahsajit"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className='text-white' href="https://www.linkedin.com/in/motiullah-sajit/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className='text-white' href="https://motiullahsajit.medium.com/"><FontAwesomeIcon icon={faMediumM} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;