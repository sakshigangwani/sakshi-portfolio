import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbarWrapper">
            <div className="navbarContainer">
                <div className="logo">
                    <h2 className='title'>sakshi.io</h2>
                </div>

                <div className={`navLinks ${isOpen ? 'open' : ''}`}>
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#education" onClick={() => setIsOpen(false)}>Education</a>
                    <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;