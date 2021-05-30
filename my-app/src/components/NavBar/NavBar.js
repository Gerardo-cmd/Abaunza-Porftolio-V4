import React, {useState}  from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

let Navbar = ({key}) => {   
    let homeKey = "";
    return (
        <Nav variant="pills" activeKey="1" >
            <Nav.Item>
                <Nav.Link eventKey="1" href="/">
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="1" href="/about">
                About
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="1" href="/projects" >
                Projects
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="1" href="/history">
                History
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Experience" eventKey="1" id="nav-dropdown">
                <NavDropdown.Item href="/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
                <NavDropdown.Item href="/experience">Work Experience</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link eventKey="1" href="/contact" >Contact
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;