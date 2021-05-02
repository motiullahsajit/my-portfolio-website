import React from 'react';
import './Home.css'
import myImg from '../../../images/myimg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedinIn, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    return (
        <section className='home container-fluid'>
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
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faTwitter} />
                        <FontAwesomeIcon icon={faMediumM} />
                    </div>
                    <button className='btn btn-danger'>My resume</button>
                </div>
            </div>
        </section>
    );
};

export default Home;