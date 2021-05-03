import React from 'react';

const Footer = () => {
    return (
        <footer className='container-fuild text-center bg-brand'>
            <p className='py-3 text-white m-0'>&copy; {(new Date()).getFullYear()} All Rights Reserved Motiullah Sajit</p>
        </footer>
    );
};

export default Footer;