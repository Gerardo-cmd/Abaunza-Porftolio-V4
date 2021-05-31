import React, {useState}  from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

let Navbar = ({location}) => {   
    let homeKey = "false";
    let aboutKey = "false";
    let projectsKey = "false";
    let historyKey = "false";
    let experienceKey = "false";
    let skillsKey = "false";
    let coursesKey = "false";
    let workExperienceKey = "false";
    let contactKey = "false";

    if (location === "home") {
        homeKey = "true"
    }
    else if (location === "about") {
        aboutKey = "true"
    }
    else if (location === "projects") {
        projectsKey = "true"
    }
    else if (location === "history") {
        historyKey = "true"
    }
    else if (location === "skills") {
        experienceKey = "true"
        skillsKey = "about"
    }
    else if (location === "courses") {
        experienceKey = "true"
        coursesKey = "about"
    }
    else if (location === "workExperience") {
        experienceKey = "true"
        workExperienceKey = "about"
    }
    else if (location === "contact") {
        contactKey = "true"
    }
    return (
        <Nav variant="pills" activeKey="true" >
            <Nav.Item>
                <Nav.Link target="_blank" className="navbar-brand" rel="noreferrer" href="/">
                    Gerardo Abaunza
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={homeKey} target="_blank" rel="noreferrer" href="/">
                Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={aboutKey} target="_blank" rel="noreferrer" href="/about">
                About
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={projectsKey} target="_blank" rel="noreferrer" href="/projects" >
                Projects
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={historyKey} target="_blank" rel="noreferrer" href="/history">
                History
                </Nav.Link>
            </Nav.Item>
            <NavDropdown title="Experience" eventKey={experienceKey} id="nav-dropdown">
                <NavDropdown.Item eventKey={skillsKey} target="_blank" rel="noreferrer" href="/skills">Skills</NavDropdown.Item>
                <NavDropdown.Item eventKey={coursesKey} target="_blank" rel="noreferrer" href="/courses">Courses</NavDropdown.Item>
                <NavDropdown.Item eventKey={workExperienceKey} target="_blank" rel="noreferrer" href="/workExperience">Work Experience</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
                <Nav.Link eventKey={contactKey} href="/contact" >Contact
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default Navbar;