import React, {useState} from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import './Skills_CoursesPage.css';
let Skills_CoursesPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <div className="col-lg">
                    <NavBar location="skills" />
                </div>
                <div className="container" id="main-content">
                    <div className="container">
                        <div className="row">
                            <h2 className="d-flex justify-content-center">Skills</h2>
                        </div>
                        <div className="row" >
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Javascript</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>CSS/Bootstrap</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Node.js</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100" />
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>React</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Ruby on Rails</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>SQL</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100" />
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Java</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>C</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Git/Github</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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

export default Skills_CoursesPage