import React from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import './SkillsPage.css';
import jsLogo from './javascriptLogo.png';
import htmlLogo from './htmlLogo.png';
import bootstrapLogo from './bootstrapLogo.png';
import githubLogo from './githubLogo.png';
import rubyLogo from './rubyLogo.jpg';
import cLogo from './cLogo.png';
import pythonLogo from './pythonLogo.png';
import nodeLogo from './nodeLogo.jpg';
import reactLogo from './reactLogoNew.png';
import javaLogo from './javaLogo.png';
import sqlLogo from './sqlLogo.jpg';

let SkillsPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="skills" />
                <div className="container" id="main-content">
                    <div className="container ">
                        <div className="row" >
                            <h1 className="d-flex flex-column align-items-center">Skills</h1>

                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={pythonLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4 style={{textDecoration: 'line-through'}}>0. Python</h4>
                                    <p>
                                    Technically speaking, Python was the first language I ever learned. Unfortunately, 
                                    I would be lying if I added it as a skill. I only put it here to clarify that while it was my 
                                    first language chronologically, I don't remember much about it as I only used it for my first 
                                    semester of college and nothing more.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={javaLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4>1. Java</h4>
                                    <p>
                                    Java was one of the first languages I learned in college. It introduced 
                                    me to the world of object-oriented programming and was one of the things that ignited 
                                    my passion for software development.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={cLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4>2. C</h4>
                                    <p>
                                    C was one of the harder languages for me to get a grasp of. Admittedly, 
                                    I didn't use it much outside of school but I do see the benefits it has due 
                                    to it being able to it to being able to work at a low level.
                                    </p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={jsLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4 style={{color: 'orange'}}>JavaScript</h4>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={htmlLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4 style={{color: 'orange'}}>HTML</h4>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <p style={{color: 'orange'}}>
                                    I personally believe that these three languages make up the trifecta of web applications. 
                                    With HTML for documents to be displayed, CSS and Bootstrap allowing you to format the layout, and 
                                    Javascript implementing complex features on web pages, one can create a solid web application.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={bootstrapLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4 style={{color: 'orange'}}>CSS/Bootstrap</h4>
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <br />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center" />
                            </div>

                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={githubLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} />
                                    <h4>6. Git/Github</h4>
                                    <p>
                                    While I learned Github at the same time as Java at college, I didn't 
                                    really put it into practice and gain mroe experience with it until developing my first web applications.
                                    In fact, I didn't get familiar with Git until after Github.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={nodeLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} />
                                    <h4>7. Node.js</h4>
                                    <p>
                                    After laying the foundation for web development with the "trifecta", I decided to 
                                    learn Node.js. Doing this really kicked up my back-end work to the next level.
                                    It also allowed me to get accustomed to APIs and npm packages which really paved the way going forward.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={reactLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} />
                                    <h4>8. React</h4>
                                    <p>
                                    React is one of my newer languages. I admire how it improves
                                    reusability with its component architecture. This portfolio was made 
                                    using react and is one of my first defaults when developing web applications!
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={sqlLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} />
                                    <h4>9. SQL</h4>
                                    <p>
                                    SQL is a database programming language that I learned during one of my courses 
                                    at George Mason University. On top of that, I also used MongoDB. While I am 
                                    familiar with these languages now and can incorporate them into my projects,
                                    I'm mostly just happy that I can look at SQL queries and now actually understand what they mean.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 py-2">
                                <div className="d-flex flex-column align-items-center">
                                    <img src={rubyLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                    <h4>10. Ruby on Rails</h4>
                                    <p>
                                    This is the most recent language/framework I picked up. I was required to 
                                    (and had the privilege to) learn this at my first internship as it was the main language they used besides React.
                                    While I have no personal projects made from Ruby on Rails, I will be sure to make some and add them in the future!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage