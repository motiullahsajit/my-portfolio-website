import React from 'react';
import About from './About/About';
import Blogs from './Blogs/Blogs';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Projects from './Projects/Projects';

const Main = () => {
    return (
        <main>
            <Home />
            <About />
            <Projects />
            <Blogs />
            <Contact id='contact' />
        </main>
    );
};

export default Main;