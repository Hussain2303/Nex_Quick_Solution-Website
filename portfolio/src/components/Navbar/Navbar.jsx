import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import Upwork from '../../img/Upwork.png';
import White from '../../img/White.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="navbar">
            {/* Left section: Hamburger + Logo */}
            <div className="nav-left">
                {/* Hamburger */}
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                {/* Logo */}
                <div className="nav-name">
                    <img src={White} height={60} width={180} alt="Brand Logo" />
                </div>
            </div>

            {/* Navigation links */}
            <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
                <div className="nav-links">
                    <ul>
                        <li>
                            <Link
                                activeClass="active"
                                to="intro"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                className="navlink"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                className="navlink"
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                className="navlink"
                                onClick={closeMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="testimonial"
                                spy={true}
                                smooth={true}
                                offset={-120}
                                duration={500}
                                className="navlink"
                                onClick={closeMenu}
                            >
                                Clients
                            </Link>
                        </li>
                    </ul>
                </div>

                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                    onClick={closeMenu}
                >
                    <button className="navBtn">Contact</button>
                </Link>
            </div>

            {/* Upwork icon */}
            <a
                href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac?mp_source=share"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Upwork} alt="Upwork" className="Upwork" />
            </a>
        </div>
    );
}

export default Navbar;
