import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="py-7 px-5 flex items-center justify-between lg:w-[70rem] xl:w-[80rem] 2xl:w-[90rem] lg:mx-auto">
            <div>
                <img className="" src="/images/logo.svg" alt="" />
            </div>

            {/* Navbar para desktop */}
            <ul className="hidden md:flex md:space-x-10">
                <li>
                    <Link to="" className="nav__links--desktop">
                        Stories
                    </Link>
                </li>
                <li>
                    <Link to="" className="nav__links--desktop">
                        Features
                    </Link>
                </li>
                <li>
                    <Link to="" className="nav__links--desktop">
                        Pricing
                    </Link>
                </li>
            </ul>

            {/* Botón para desktop */}
            <button className="nav__button--desktop">Get an invite</button>

            {/* Navbar para mobile */}
            <div className="md:hidden">
                <Hamburger toggled={isOpen} toggle={toggleNavbar} />
            </div>

            {/* Menú desplegable para mobile */}
            <div
                className={`bg-white w-full h-[253px] absolute top-[6.5rem] left-1/2 transform -translate-x-1/2 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                } transition-opacity duration-300 ease-in-out md:hidden`}>
                <div className="flex flex-col justify-center items-center mt-4 space-y-4">
                    <Link to="" className="nav__links--mobile">
                        Stories
                    </Link>
                    <Link to="" className="nav__links--mobile">
                        Features
                    </Link>
                    <Link to="" className="nav__links--mobile">
                        Pricing
                    </Link>
                    <div className="w-[310px] h-[1px] bg-[#979797]"></div>
                    <button className="nav__button--mobile">
                        Get an invite
                    </button>
                </div>
            </div>
        </nav>
    );
}
