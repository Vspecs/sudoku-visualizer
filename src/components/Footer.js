import React from 'react';
import { ReactComponent as FooterDots } from '../assets/footer-dots.svg';
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <h3>Developers</h3>
                    <p>Abhay gupta</p>
                    <p>Ankit Malik</p>
                </div>
                <div className='footer-right'>
                    <h3>Links</h3>
                    <p>Abhay gupta</p>
                    <p>Ankit Malik</p>
                </div>
            </div>
            <FooterDots />
        </div>
    );
};

export default Footer;
