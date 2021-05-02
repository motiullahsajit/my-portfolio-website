import React from 'react';
import './Home.css'
import myImg from '../../../images/myimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faMediumM } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <section className='home container-fluid' id='home'>
            <div className="container d-flex justify-content-center">
                <div className="col-md-3 my-5 text-center">
                    <div className="col-md-6 mx-auto my-3">
                        <img src={myImg} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-8 mx-auto my-3">
                        <h3>Motiullah Sajit</h3>
                        <h6>sajitmotiullah@gmail.com</h6>
                    </div>
                    <div className="d-flex justify-content-around my-3 col-md-6 mx-auto">
                        <a className='text-white' href="https://github.com/motiullahsajit"><FontAwesomeIcon icon={faGithub} /></a>
                        <a className='text-white' href="https://www.linkedin.com/in/motiullah-sajit/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a className='text-white' href="https://motiullahsajit.medium.com/"><FontAwesomeIcon icon={faMediumM} /></a>
                        <a className='text-white' href="https://www.facebook.com/Sajit01/"><FontAwesomeIcon icon={faFacebook} /></a>
                    </div>
                    <a href='https://drive.google.com/file/d/11vbCqXopQuQyZGIPRq7qELOt0JOH2sj6/view' className='btn btn-danger'>My resume</a>
                </div>
            </div>
        </section>
    );
};

export default Home;