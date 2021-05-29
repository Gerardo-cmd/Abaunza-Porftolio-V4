import React  from 'react';

let Navbar = ({location}) => {    
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
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Gerardo Abaunza</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/projects">Projects</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/history">History</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/skills">Skills</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/courses">Courses</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/contact">Contact</a>
            </li>

          </ul>
        </div>
      </nav>
    )
}

export default Navbar;