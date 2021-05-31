import React  from 'react';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

let NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{marginLeft: '5%', color: 'cyan'}} href="/">Gerardo Abaunza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link variant="outline-info" href="/">Home</Nav.Link>
                    <Nav.Link variant="outline-info" href="/about">About</Nav.Link>
                    <Nav.Link variant="outline-info" href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/history">History</Nav.Link>
                    <NavDropdown title="Experience" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
                        <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                        <NavDropdown.Item href="/workExperience">Work Experience</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="right">
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;