import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbarWrapper">
            <div className="navbarContainer">
                <div className="logo">
                    <h2>sakshi.io</h2>
                </div>
                <div className="navLinks">
                    <a href="#about">About</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
