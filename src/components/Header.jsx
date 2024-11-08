import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import menub from '../assets/menu.svg';
import closeb from '../assets/close.png';

const data = {
    Services: [
        { title: "Serv A", href: "#" },
        { title: "Serv B", href: "#" },
        { title: "Serv C", href: "#" },
        { title: "Serv D", href: "#" }
    ]
}

const Menu = ({ ChngMenuState }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return (
        <div className="fixed top-0 right-0 w-full h-fit bg-[#1e1e2f] border-solid rounded-2xl">
            <div className="relative p-6">
                <img src={closeb} className="absolute top-6 right-6 p-2 w-12 h-12" alt="Close Menu" onClick={() => ChngMenuState(false)} />
                <div className="flex flex-col space-y-6 mt-16 items-center">
                    <Link to='/' className="nav-links" onClick={() => ChngMenuState(false)}> Home </Link>
                    <span className="nav-links" onClick={() => setDropdownOpen(!dropdownOpen)}> Services <span className={`ml-2 inline-block transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>🞃</span></span>
                    {dropdownOpen && (
                        <div className="mt-2 px-2 py-2 w-fit h-fit bg-[#2a2a3f] rounded-lg">
                            {data.Services.map((service, index) => (
                                <Link key={index} to={service.href} className="block px-4 py-2 text-white hover:bg-[#3a3a4f] transition-colors" onClick={() => ChngMenuState(false)}> {service.title} </Link>
                            ))}
                        </div>
                    )}
                    <Link to='/blog' className="nav-links" onClick={() => ChngMenuState(false)}> Blog </Link>
                    <Link to='/about' className="nav-links" onClick={() => ChngMenuState(false)}> About Us</Link>
                    <Link to='/contact' className="nav-links" onClick={() => ChngMenuState(false)}> Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export const Header = () => {
    const [menuopen, ChangeMenuState] = useState(false);

    return (
        <nav className="fixed flex justify-between items-center px-[5rem] max-md:px-[2rem] p-[1rem] text-white bg-[#1e1e2f] w-full top-0 left-0 shadow-md z-[1000] max-xl:justify-between">
            <a className="font-black max-md:text-lg" href="/">
                INFINIA TECH SOLUTIONS
            </a>
            <div className="flex font-semibold items-end max-w-fit gap-6 max-xl:hidden">
                <Link to='/' className="nav-links"> Home </Link>
                <span className="nav-links"> Services </span>
                <Link to='/blog' className="nav-links"> Blog </Link>
                <Link to='/about' className="nav-links"> About Us</Link>
                <Link to='/contact' className="nav-links"> Contact Us</Link>
            </div>
            <img src={menub} alt="Open Menu" className="max-xl:visible max-md:max-h-[1.5rem] cursor-pointer" onClick={() => ChangeMenuState(!menuopen)} />
            <div
                className={`fixed inset-0 bg-[#1e1e2f] transform transition-transform duration-300 ease-in-out ${menuopen ? 'translate-y-0' : '-translate-y-full'} xl:hidden`}>
                {menuopen && <Menu ChngMenuState={ChangeMenuState} />}
            </div>
        </nav>
    )
}