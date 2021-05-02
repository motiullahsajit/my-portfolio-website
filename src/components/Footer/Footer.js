import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor:"#353353"}} className='container-fuild text-center'>
            <p className='py-3 text-white m-0'>Copyright {(new Date()).getFullYear()} All Rights Reserved Motiullah Sajit</p>
        </footer>
    );
};

export default Footer;