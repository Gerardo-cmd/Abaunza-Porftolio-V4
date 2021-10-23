import React from 'react'
import Sparkle from 'react-sparkle';
import NavBar from '../../components/NavBar/NavBar.js';
import Example from '../../components/Popover/Popover.js';
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
import jestLogo from './jestLogo.jpg';

let SkillsPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="skills" />
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <div className="row" >
                        <div className="">
                            <div className="d-flex">
                                <h1>Skills</h1>
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                            <div>
                                <Example direction="right"/>
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <img src={pythonLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                <h4 style={{color: 'red', textDecoration: 'line-through'}}>0. Python</h4>
                                <p>
                                Technically speaking, Python was the first language I ever learned. Unfortunately, 
                                I would be lying if I added it as a skill. I only put it here to clarify that while it was my 
                                first language chronologically, I don't remember much about it anymore as I only used it for my first 
                                semester of college and nothing more.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
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
                                <br />
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
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <img src={htmlLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                <h4 style={{color: 'orange'}}>HTML</h4>
                                <br />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <p style={{color: 'orange'}}>
                                I personally believe that these three languages make up the trifecta of web applications. 
                                With HTML for documents to be displayed, CSS and Bootstrap allowing you to format the layout, and 
                                Javascript implementing complex features on web pages, one can create a solid web application.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <img src={bootstrapLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                <h4 style={{color: 'orange'}}>CSS/Bootstrap</h4>
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
                                While I learned Github at the same time as Java in college, I didn't 
                                really put it into practice and gain more experience with it until developing my first web applications.
                                In fact, I didn't get familiar with Git until using Github to hold my first few web applications.
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
                                <h4>8. React/Typescript</h4>
                                <p>
                                React is one of my newer languages (Technically, it's a framework). I admire how it improves
                                reusability with its component architecture. This portfolio was made 
                                using react and is one of my first defaults when developing web applications!
                                Additionally, I started to use Typescript in my projects. I see it as a better version 
                                of Javascript as it includes static typing which can help prevent some bugs. 
                                I'm even redoing some of my earlier projects to improve them!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <img src={sqlLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}} />
                                <h4>9. Databases</h4>
                                <p>
                                SQL is a database programming language that I learned during one of my courses 
                                at George Mason University. On top of that, I also used MongoDBand Firebase. I am happy to be
                                familiar with these languages now as I can look at SQL queries and now actually understand what they mean. 
                                If I had to pick a database that I use most frequently, it would be firebase.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <img src={rubyLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                <h4>10. Ruby on Rails</h4>
                                <p>
                                I was required to (and had the privilege to) learn this at my first internship as it was the main 
                                language they used besides React. While I have no personal projects made from Ruby 
                                on Rails, I will be sure to make some and add them in the future!
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 py-2">
                            <div className="d-flex flex-column align-items-center">
                                <br />
                                <img src={jestLogo} alt="" style={{width: "75px",height: "75px", borderRadius: "50%"}}/>
                                <h4>11. Jest/Rspec</h4>
                                <p>
                                I started to fiddle with unit and integration testing during my internship. I made 
                                sure to practice (particularly with Jest) in my free time to get comfortable with unit and integration testing. 
                                I have experience with both Jest and Rspec but I personally prefer working with Jest.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage