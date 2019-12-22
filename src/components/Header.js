import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <Navbar fixed="top" variant="dark" bg="dark">
                <Nav>
                    <Nav.Link href="" className="mr-3">Home</Nav.Link>
                    <Nav.Link href="" className="mr-3">Experience</Nav.Link>
                    <Nav.Link href="#test" className="mr-3">Projects</Nav.Link>
                    <Nav.Link href="" className="mr-3">Skills</Nav.Link>
                    <Nav.Link href="" className="mr-3">Coursework</Nav.Link>
                    <Nav.Link href="" className="mr-3">Volunteer</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;