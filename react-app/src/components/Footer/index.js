import React from 'react';
import './Footer.css'
import AboutMenu from './AboutMenu';

const Footer = () => {

    return (
        <div className='footer-body-div'>
            <div  className='about-menu-label-div'>
                <AboutMenu />
            </div>
        </div>
    );
}

export default Footer;
