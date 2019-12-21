import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render() {
        return (
            <Navbar fixed="top" variant="dark" bg="dark">
                <Nav>
                    <Nav.Link href="#test">Projects</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header;