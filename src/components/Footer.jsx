import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import fb_logo from '../assets/facebook.svg';
import lnked_logo from '../assets/linked-in.svg';
import x_logo from '../assets/x.svg';

const data = {
    Services: [
        // change href to id
        { title: "Serv A", href: "#" },
        { title: "Serv B", href: "#" },
        { title: "Serv C", href: "#" },
        { title: "Serv D", href: "#" }
    ]
}

export const Footer = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);


    return (
        <footer className="bg-[#1e1e2f] text-white py-8  w-screen text-center px-[5rem] max-md:px-[2rem] p-[1rem]">
            <div className="flex flex-col items-center justify-evenly gap-6 mx-auto px-4">
                {/* Quick Links */}
                <div className="flex max-md:flex-col gap-6 max-sm:gap-4 max-xl:text-sm max-xs:text-xs text-xl text-left">
                    {/* Company  */}
                    <div className="comp-detail flex flex-col gap-4 items-start">
                        <span className="text-2xl font-bold text-white max-xs:text-xs">
                            Infinia Tech Solutions
                        </span>
                        <p className="text-gray-300 text-xl max-sm:text-xs">
                            Your Trusted IT Partner
                        </p>
                        <div className="text-sm text-gray-300 max-md:text-md max-xs:text-xs">
                            <p className="mb-1">Email: info@infiniatech.com</p>
                            <p>Phone: +1 (123) 456-7890</p>
                        </div>
                        <div className='flex gap-4 border-solid'>
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
                                <img src={x_logo} alt='X' className='max-sm:h-8' />
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-blue-500 transition-colors duration-200 text-xl invert">
                                <img src={lnked_logo} alt='LinkedIn' className='max-sm:h-8' />
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className='services flex flex-col gap-4 items-start'>
                        <h2 className='font-extrabold'>Quick Links</h2>
                        <Link to="/" className="text-gray-300 hover:text-blue-500 transition-colors duration-200 col-span-1">
                            Home
                        </Link>
                        <span className="flex text-gray-300 hover:text-blue-500 transition-colors duration-200" onClick={() => setDropdownOpen(!dropdownOpen)}> Services <span className={`ml-2 inline-block transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>🞃</span></span>
                        {dropdownOpen && (
                            <div className="mt-2 px-2 py-2 w-fit h-fit bg-[#2a2a3f] rounded-md">
                                {data.Services.map((service, index) => (
                                    <Link key={index} to={`/services/${service.href}`} className="block px-4 py-2 text-white hover:bg-[#3a3a4f] transition-colors" onClick={() => ChngMenuState(false)}> {service.title} </Link>
                                ))}
                            </div>
                        )}

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
                    <hr />
                    <div className='newsletter flex flex-col gap-4 items-start max-sm:text-md'>
                        <h2 className='font-extrabold'>Newsletter Signup</h2>
                        <span className='text-left max-sm:text-xs'>Sign up to for newsletter to receive exclusive news directly to your inbox.</span>
                        <input type="email" name="Email" id="user-email" className='w-full border-solid border-black rounded-lg p-2 text-black' placeholder='Enter email address'/>
                        {/* TODO: on click save email to database for future updates and send automated email to user to notify that they have updated to our newsletter */}
                        <input type="submit" value="Subscribe" className='border-solid border-black rounded-lg p-2 bg-red-600 font-extrabold' />
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-300 mt-6 max-xs:text-xs">
                © {new Date().getFullYear()} InfiniaTech Solutions.<br />All rights reserved.
            </p>
        </footer>
    );
};
