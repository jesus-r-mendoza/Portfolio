import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <Navbar fixed="top" variant="dark" bg="dark">
                <Nav>
                    <Nav.Link href="#home" className="mr-3">Home</Nav.Link>
                    <Nav.Link href="#experience" className="mr-3">Experience</Nav.Link>
                    <Nav.Link href="#projects" className="mr-3">Projects</Nav.Link>
                    <Nav.Link href="#skills" className="mr-3">Skills</Nav.Link>
                    <Nav.Link href="#coursework" className="mr-3">Coursework</Nav.Link>
                    <Nav.Link href="#volunteer" className="mr-3">Volunteer</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;