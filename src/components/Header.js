import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-content">
                    <div className="links">
                        <a href="#home" className="link">Home</a>
                        <a href="#experience" className="link">Experience</a>
                        <a href="#projects" className="link">Projects</a>
                        <a href="#skills" className="link">Skills</a>
                        <a href="#coursework" className="link">Coursework</a>
                        <a href="#volunteer" className="link">Volunteer</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;