import React from 'react';
import logoFooter from '../assets/logoKasaFooter.svg';

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logoFooter} alt="Logo Kasa" className='footer__image' />
            <p className='footer__text'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;