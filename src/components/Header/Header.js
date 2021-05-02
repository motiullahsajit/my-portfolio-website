import React from 'react';
import './Header.css'
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='about'>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='projects'>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='blog'>Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to='contact'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;