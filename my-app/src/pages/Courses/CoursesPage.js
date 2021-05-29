import React from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import './CoursesPage.css';
let CoursesPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="courses" />
                <div className="container" id="main-content">
                    <div className="container">
                        <div className="row">
                            <h2 className="d-flex justify-content-center">Computer Science courses I have taken at Mason</h2>
                            <div className="d-flex justify-content-center col">
                                <ul>
                                    <br />
                                    <li>Intro to Computer Science (Python)</li>
                                    <br />
                                    <li>Object Oriented Programming (Java)</li>
                                    <br />
                                    <li>Intro to Low-level programming (C)</li>
                                    <br />
                                    <li>Formal Methods and logic</li>
                                    <br />
                                    <li>Ethics/Law for Computer Science</li>
                                    <br />
                                    <li>Data Structures (Java)</li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-center col">
                                <ul>
                                    <br />
                                    <li>Software Engineering</li>
                                    <br />
                                    <li>Database Concepts (SQL)</li>
                                    <br />
                                    <li>Computer Systems and Programming (C)</li>
                                    <br />
                                    <li>Intro to Artificial Intelligence</li>
                                    <br />
                                    <li>Analysis of Algorithms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesPage