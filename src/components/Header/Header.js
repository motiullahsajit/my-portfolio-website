import React from 'react';
import './Header.css'
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className='header sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={400}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={400}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" activeClass="active"
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={400}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" activeClass="active"
                                    to="blog"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={400}>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={400}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;