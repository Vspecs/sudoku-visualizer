import React from 'react';
import { ReactComponent as FooterDots } from '../assets/footer-dots.svg';
import { ReactComponent as Github } from '../assets/githubb.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

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
                    <div className='links'>
                        <Github className='github' />
                        <Linkedin className='linkedin' />
                        <Mail className='mail' />
                    </div>
                    <div className='links'>
                        <Github className='github' />
                        <Linkedin className='linkedin' />
                        <Mail className='mail' />
                    </div>
                </div>
            </div>
            <h3 id='visit'>viSit agAin</h3>
            <FooterDots id='footer-dots' />
        </div>
    );
};

export default Footer;
