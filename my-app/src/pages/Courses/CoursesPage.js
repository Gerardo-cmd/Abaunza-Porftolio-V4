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
                            <h1 className="d-flex justify-content-center">Computer Science courses I have taken at George Mason</h1>
                            <div className="d-flex justify-content-center col">
                                <ul>
                                    <br />
                                    <li>CS 211: Object Oriented Programming
                                        <ul>
                                            <li>Language used: Java</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS 262: Intro to Low-level programming
                                        <ul>
                                            <li>Language used: C</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS 330: Formal Methods and logic
                                        <ul>
                                            <li>Language used: N/A</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS 306: Ethics/Law for Computer Science
                                        <ul>
                                            <li>Language used: N/A</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS 310: Data Structures
                                        <ul>
                                            <li>Language used: Java</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-center col">
                                <ul>
                                    <br />
                                    <li>CS 321: Software Engineering
                                        <ul>
                                            <li>Languages used: Javascript/Node.js</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS450: Database Concepts
                                        <ul>
                                            <li>Language used: SQL</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS367: Computer Systems and Programming 
                                        <ul>
                                            <li>Languages used: C and Assembly</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS480: Intro to Artificial Intelligence
                                        <ul>
                                            <li>Language used: N/A</li>
                                        </ul>
                                    </li>
                                    <br />
                                    <li>CS483: Analysis of Algorithms
                                        <ul>
                                            <li>Language used: Java</li>
                                        </ul>
                                    </li>
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