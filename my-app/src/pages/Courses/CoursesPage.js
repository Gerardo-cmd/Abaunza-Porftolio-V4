import React from 'react';
import Sparkle from 'react-sparkle';
import NavBar from '../../components/NavBar/NavBar.js';
import './CoursesPage.css';
let CoursesPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="courses" />
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <div className="row">
                        <h1 className="d-flex justify-content-center">Computer Science courses I have taken at George Mason</h1>
                        <div className="d-flex justify-content-center col">
                            <ul>
                                <br />
                                <br />
                                <li><h5 className="first">CS 211: Object-Oriented Programming</h5>
                                    <ul>
                                        <li>Language used: Java</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="second">CS 262: Intro to Low-level programming</h5>
                                    <ul>
                                        <li>Language used: C</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="third">CS 330: Formal Methods and logic</h5>
                                    <ul>
                                        <li>Language used: N/A</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="fourth">CS 306: Ethics/Law for Computer Science</h5>
                                    <ul>
                                        <li>Language used: N/A</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="fifth">CS 310: Data Structures</h5>
                                    <ul>
                                        <li>Language used: Java</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex justify-content-center col">
                            <ul>
                                <br />
                                <br />
                                <li><h5 className="second">CS 321: Software Engineering</h5>
                                    <ul>
                                        <li>Languages used: Javascript/Node.js</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="third">CS450: Database Concepts</h5>
                                    <ul>
                                        <li>Languages used: SQL and MongoDB</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="fourth">CS367: Computer Systems and Programming</h5>
                                    <ul>
                                        <li>Languages used: C and Assembly</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="fifth">CS480: Intro to Artificial Intelligence</h5>
                                    <ul>
                                        <li>Language used: N/A</li>
                                    </ul>
                                </li>
                                <br />
                                <li><h5 className="sixth">CS483: Analysis of Algorithms</h5>
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
    )
}

export default CoursesPage