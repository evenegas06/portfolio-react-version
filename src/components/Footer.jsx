import React from 'react';

import Facebook from '../assets/static/facebook-blanco.svg';
import GitHub from '../assets/static/github-blanco.svg';
import Linkedin from '../assets/static/linkedin-blanco.svg';

const Footer = () => {
    return (
        <footer className="shadow-lg py-4" id="footer">
            <div className="container-fluid">
                <div className="row d-flex text-center justify-content-center align-items-center">
                    <div className="col-12 text-white">
                        <p> &copy;&nbsp;Eduardo Venegas 2021</p>
                    </div>
                    <div className="col-12">
                        <a href="https://www.facebook.com/evenegas06/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} className="mx-1 social-network-icon" alt="Facebook" />
                        </a>
                        <a href="https://github.com/evenegas06" target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} className="mx-1 social-network-icon" alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/evenegas06/" target="_blank" rel="noopener noreferrer">
                            <img src={Linkedin} className="mx-1 social-network-icon" alt="Linkedin" />
                        </a>
                        <a href="https://platzi.com/p/evenegas/" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" viewBox="0 0 32 32"
                                className="social-media-item-container__logo mx-1">
                                <path className="social-media-svg-icon" data-name="Sustracci\xF3n 1"
                                    d="M16 32a15.9 15.9 0 01-11.314-4.686A15.894 15.894 0 010 16 15.9 15.9 0 
                                    014.687 4.686 15.9 15.9 0 0116 0a15.9 15.9 0 0111.314 4.686A15.9 15.9 0 0132 
                                    16a15.894 15.894 0 01-4.687 11.313A15.9 15.9 0 0116 32zm1.66-30h-.153a7.105 7.105 0 
                                    00-1.75.233c-.552.189-1.512 1.074-6.041 5.574-6.157 6.113-6.215 6.19-6.215 8.186s.058 
                                    2.071 6.215 8.185l.361.359c5.4 5.361 5.5 5.463 7.231 5.463h.272c1.589 0 2.358-.447 
                                    4.567-2.656l1.78-1.795-1.6-1.6-1.606-1.59 3.56-3.589c3.951-3.98 4.027-4.093 4.027-6.055 
                                    0-1.787-.293-2.2-4.478-6.376C19.72 2.243 19.374 2 17.66 2zm-.153 23.4l-4.7-4.712-4.713-4.7 
                                    4.669-4.669c2.706-2.706 4.7-4.669 4.742-4.669s1.39 1.317 3.136 3.064l3.065 3.064-3.181 
                                    3.181-3.166 3.166 1.6 1.6 1.6 1.606-1.532 1.532-1.531 1.531z"
                                    fill="#fff"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;