import React from 'react';
import { ReactComponent as FooterDots } from '../assets/footer-dots.svg';
import { ReactComponent as Github } from '../assets/githubb.svg';
import { ReactComponent as Linkedin } from '../assets/linkedin.svg';
import { ReactComponent as Mail } from '../assets/mail.svg';

const Footer = () => {
    const ankitLinks = {
        github: 'https://github.com/DiabolusGX',
        llinkedin: 'https://www.linkedin.com/in/ankitmalik0320/',
        website: 'http://diabolus.me/',
        email: 'ankit.malik1092@gmail.com'
    };
    const abhayLinks = {
        github: 'https://github.com/Abhay-G',
        llinkedin: 'https://www.linkedin.com/in/abhay-g07/',
        website: 'https://abhay.codes',
        email: 'abhayg.0704@gmail.com'
    };
    return (
        <div className='footer'>
            <div className='footer-inner'>
                <div className='footer-left'>
                    <h3>Developers</h3>
                    <p><a target='_blank' rel='noreferrer' href={abhayLinks.website}>Abhay Gupta</a></p>
                    <p><a target='_blank' rel='noreferrer' href={ankitLinks.website}>Ankit Malik</a></p>
                </div>
                <div className='footer-right'>
                    <h3>Links</h3>
                    <div className='links'>
                        <a target='_blank' rel='noreferrer' href={abhayLinks.github}><Github className='github' /></a>
                        <a target='_blank' rel='noreferrer' href={abhayLinks.llinkedin}><Linkedin className='linkedin' /></a>
                        <a target='_blank' rel='noreferrer' href={`mailto:${abhayLinks.email}`}><Mail className='mail' /></a>
                    </div>
                    <div className='links'>
                        <a target='_blank' rel='noreferrer' href={ankitLinks.github}><Github className='github' /></a>
                        <a target='_blank' rel='noreferrer' href={ankitLinks.llinkedin}><Linkedin className='linkedin' /></a>
                        <a target='_blank' rel='noreferrer' href={`mailto:${ankitLinks.email}`}><Mail className='mail' /></a>
                    </div>
                </div>
            </div>
            <h3 id='visit'>viSit agAin</h3>
            <FooterDots id='footer-dots' />
        </div>
    );
};

export default Footer;
