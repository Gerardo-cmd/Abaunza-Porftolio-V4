import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './NavBar.css';

let NavBar = ({ location }) => {
    /*Below are states that will be used. They are all true/false values.*/
    const [redirectHome, setRedirectHome] = useState(false);
    const [redirectContact, setRedirectContact] = useState(false);
    const [redirectProjects, setRedirectProjects] = useState(false);
    const [redirectAbout, setRedirectAbout] = useState(false);
    const [redirectSkills, setRedirectSkills] = useState(false);
    const [redirectHistory, setRedirectHistory] = useState(false);

    let stylingHome = {};
    let stylingAbout = {};
    let stylingSkills = {};
    let stylingProjects = {};
    let stylingHistory = {};
    let stylingContact = {};

    if (location === 'home') {
        stylingHome = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else if (location === 'about') {
        stylingAbout = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else if (location === 'skills') {
        stylingSkills = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else if (location === 'projects') {
        stylingProjects = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else if (location === 'history') {
        stylingHistory = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else if (location === 'contact') {
        stylingContact = {
            backgroundColor: 'rgb(9, 16, 29)'
        }
    }
    else {

    }
    return (
        <div className="master">
            <div id="head" className="row">
                <h3 style={{paddingTop: '25px', paddingBottom: '10px'}}>NavBar</h3>
            </div>
            <a className="option" style={stylingHome} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(true);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectSkills(false);
                setRedirectHistory(false);
            }}>Home</a>

            <a className="option" style={stylingAbout} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(true);
                setRedirectSkills(false);
                setRedirectHistory(false);
            }}>About</a>

            <a className="option" style={stylingSkills} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectSkills(true);
                setRedirectHistory(false);
            }}>Skills</a>

            <a className="option" style={stylingProjects} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(true);
                setRedirectAbout(false);
                setRedirectSkills(false);
                setRedirectHistory(false);
            }}>Projects</a>

            <a className="option" style={stylingHistory} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(false);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectSkills(false);
                setRedirectHistory(true);
            }}>History</a>

            <a className="option" style={stylingContact} onClick={(e) => {
                e.preventDefault();
                setRedirectHome(false);
                setRedirectContact(true);
                setRedirectProjects(false);
                setRedirectAbout(false);
                setRedirectSkills(false);
                setRedirectHistory(false);
            }}>Contact</a>
            
            
            {redirectHome ? <Redirect to="/" /> : ''}
            {redirectContact ? <Redirect to='/contact' /> : ''}
            {redirectProjects ? <Redirect to='/projects' /> : ''}
            {redirectAbout ? <Redirect to='/about' /> : ''}
            {redirectSkills ? <Redirect to="/skills_course" /> : ''}
            {redirectHistory ? <Redirect to='/history' /> : ''}
        </div>
    )
}

export default NavBar;