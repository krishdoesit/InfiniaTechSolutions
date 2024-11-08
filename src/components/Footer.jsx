import React from 'react';
import { Link } from 'react-router-dom';
import fb_logo from '../assets/facebook.svg';
import lnked_logo from '../assets/linked-in.svg';
import x_logo from '../assets/x.svg';


export const Footer = () => {
    return (
        <footer className="bg-[#1e1e2f] text-white py-8 text-center">
            <div className="flex flex-col items-center gap-6 max-w-6xl mx-auto px-4">
                {/* Company Info */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white max-sm:text-xs">
                        InfiniaTech Solutions
                    </h3>
                    <p className="text-gray-300 text-xl max-sm:text-xs">
                        Your Trusted IT Partner
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-3 gap-6 max-sm:gap-2 max-md:text-md">
                    <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-1">
                        Home
                    </Link>
                    <Link to="/services" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-">
                        Services
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-1">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-1">
                        Contact
                    </Link>
                    <Link to="/privacy" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-1">
                        Privacy Policy
                    </Link>
                </div>

                {/* Contact Info */}
                <div className="text-sm text-gray-300 max-md:text-md max-xs:text-xs">
                    <p className="mb-1">Email: info@infiniatech.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>

                {/* Social Media Links */}
                <div className="flex gap-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white transition-colors duration-200 text-xl invert" >
                        <img src={fb_logo} alt='Facebook' className='max-sm:h-8'></img>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-200 text-xl invert">
                        <img src={x_logo} alt='X' className='max-sm:h-8'/>

                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-500 transition-colors duration-200 text-xl invert">
                        <img src={lnked_logo} alt='LinkedIn' className='max-sm:h-8'/>
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-300 mt-6 max-xs:text-xs">
                © {new Date().getFullYear()} InfiniaTech Solutions.<br />All rights reserved.
            </p>
        </footer>
    );
};
