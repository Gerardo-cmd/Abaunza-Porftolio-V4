import React, {useState}  from 'react';
import {Redirect} from 'react-router-dom';

let Navbar = ({location}) => {
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectAbout, setRedirectAbout] = useState(false);
    const [redirectContact, setRedirectContact] = useState(false);
    const [redirectProjects, setRedirectProjects] = useState(false);
    const [redirectHistory, setRedirectHistory] = useState(false);
    const [redirectSkills, setRedirectSkills] = useState(false);
    const [redirectCourses, setRedirectCourses] = useState(false);
    
    let stylingHome = {};
    let stylingAbout = {};
    let stylingContact = {};
    let stylingProjects = {};
    let stylingHistory = {};
    let stylingSkills = {};
    let stylingCourses = {};


    if (location === 'home') {
        stylingHome = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'about') {
        stylingAbout = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'projects') {
        stylingProjects = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'history') {
        stylingHistory = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'contact') {
        stylingContact = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'skills') {
        stylingSkills = {
            color: 'rgb(72, 184, 212)'
        }
    }
    else if (location === 'courses') {
        stylingCourses = {
            color: 'rgb(72, 184, 212)'
        }
    }
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse container" id="navbarNavAltMarkup">
                    <div className="navbar-nav" >
                        <a className="navbar-brand" onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(true);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                        }}>Gerardo Abaunza</a>
                        <a className="nav-link nav-item active" style={stylingHome} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(true);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                        }}>Home</a>
                        <a className="nav-link nav-item active" style={stylingAbout} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(true);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                        }}>About</a>
                        <a className="nav-link nav-item active" style={stylingProjects} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(true);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);                        
                        }}>Projects</a>
                        <a className="nav-link nav-item active" style={stylingHistory} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(true);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                        }}>History</a>
                        <a className="nav-link nav-item active" style={stylingSkills} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(true);
                            setRedirectCourses(false);
                        }}>Skills</a>
                        <a className="nav-link nav-item active" style={stylingCourses} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(false);
                            setRedirectContact(false);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(true);
                        }}>Courses</a>
                        <a className="nav-link nav-item active" style={stylingContact} onClick={(e) => {
                            e.preventDefault();
                            setRedirectHome(false);
                            setRedirectAbout(false);
                            setRedirectContact(true);
                            setRedirectProjects(false);
                            setRedirectHistory(false);
                            setRedirectSkills(false);
                            setRedirectCourses(false);
                        }}>Contact</a>
                    </div>
                </div>

                {redirectHome ? <Redirect to="/" /> : ''}
                {redirectAbout ? <Redirect to='/about' /> : ''}
                {redirectContact ? <Redirect to='/contact' /> : ''}
                {redirectProjects ? <Redirect to='/projects' /> : ''}
                {redirectHistory ? <Redirect to='/history' /> : ''}
                {redirectSkills ? <Redirect to='/skills' /> : ''}
                {redirectCourses ? <Redirect to='/courses' /> : ''}
            </nav>
    )
}

export default Navbar;