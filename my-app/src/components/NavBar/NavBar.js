import React, {useState}  from 'react';
import {Redirect} from 'react-router-dom';
import './NavBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

let NavBar = () => {
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectContact, setRedirectContact] = useState(false);
    const [redirectProjects, setRedirectProjects] = useState(false);
    const [redirectAbout, setRedirectAbout] = useState(false);
    const [redirectHistory, setRedirectHistory] = useState(false);
    const [redirectSkills, setRedirectSkills] = useState(false);
    const [redirectCourses, setRedirectCourses] = useState(false);
    const [redirectWorkExperience, setRedirectWorkExperience] = useState(false);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand style={{marginLeft: '5%', color: 'cyan'}} href="/">Gerardo Abaunza</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/" onClick={(e) => {
                        e.preventDefault();
                        setRedirectHome(true);
                        setRedirectContact(false);
                        setRedirectProjects(false);
                        setRedirectAbout(false);
                        setRedirectHistory(false);
                        setRedirectSkills(false);
                        setRedirectCourses(false);
                        setRedirectWorkExperience(false);
                    }}>Home</Nav.Link>
                    <Nav.Link href="/about" onClick={(e) => {
                        e.preventDefault();
                        setRedirectHome(false);
                        setRedirectContact(false);
                        setRedirectProjects(false);
                        setRedirectAbout(true);
                        setRedirectHistory(false);
                        setRedirectSkills(false);
                        setRedirectCourses(false);
                        setRedirectWorkExperience(false);
                    }}>About</Nav.Link>
                    <Nav.Link href="/projects" onClick={(e) => {
                        e.preventDefault();
                        setRedirectHome(false);
                        setRedirectContact(false);
                        setRedirectProjects(true);
                        setRedirectAbout(false);
                        setRedirectHistory(false);
                        setRedirectSkills(false);
                        setRedirectCourses(false);
                        setRedirectWorkExperience(false);
                    }}>Projects</Nav.Link>
                    <Nav.Link href="/history" onClick={(e) => {
                        e.preventDefault();
                        setRedirectHome(false);
                        setRedirectContact(false);
                        setRedirectProjects(false);
                        setRedirectAbout(false);
                        setRedirectHistory(true);
                        setRedirectSkills(false);
                        setRedirectCourses(false);
                        setRedirectWorkExperience(false);
                    }}>History</Nav.Link>
                    <NavDropdown title="Experience" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="./skills" onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectAbout(false);
                            setRedirectHistory(false);
                            setRedirectSkills(true);
                            setRedirectCourses(false);
                            setRedirectWorkExperience(false);
                        }}>Skills</NavDropdown.Item>
                        <NavDropdown.Item href="./courses" onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectAbout(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(true);
                            setRedirectWorkExperience(false);
                        }}>Courses</NavDropdown.Item>
                        <NavDropdown.Item href="./workExperience" onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectAbout(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                            setRedirectWorkExperience(true);
                        }}>Work Experience</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className="right">
                    <Nav.Link href="./contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            {redirectHome ? <Redirect to="/" /> : ''}
            {redirectContact ? <Redirect to='/contact' /> : ''}
            {redirectProjects ? <Redirect to='/projects' /> : ''}
            {redirectAbout ? <Redirect to='/about' /> : ''}
            {redirectHistory ? <Redirect to='/history' /> : ''}
            {redirectSkills ? <Redirect to='/skills' /> : ''}
            {redirectCourses ? <Redirect to='/courses' /> : ''}
            {redirectWorkExperience ? <Redirect to='/workExperience' /> : ''}
        </Navbar>
    )
}

export default NavBar;