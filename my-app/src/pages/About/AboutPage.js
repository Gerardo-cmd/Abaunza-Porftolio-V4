import React from 'react'
import Sparkle from 'react-sparkle';
import './AboutPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import profilePic from './profile.jpg';
let AboutPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="about"/>
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <div className="row">
                        <div className="col-lg">
                            <h2>Computer Science Background</h2>
                            <p>
                            I am a senior Computer Science student at George Mason University. 
                            It is there that I learned Java, Python, and C as well as various other topics such as agile methods, reading assembly, data structures, 
                            database concepts, and formal methods and logic. It really elped me establish the fundamentals of programming in general.
                            Additionally, I am self taught in front-end and back-end development tools such as Javascript/Typescript, CSS, Node.js, React, and many more!  I 
                            have coded for over three years now and love the challenge. I currently reside in Centreville, Virginia 
                            and am currently looking to work remotely or anywhere in the Northern Virginia and DC Metropolitan Area 
                            as a front-end developer, back-end developer, or software engineer!
                            </p>
                            <br />
                            <br />
                            <h2>Independent Learner</h2>
                            <p>
                            While I have studied a copious amount of things at George Mason University, a good portion of my skills have been from learning independently.
                            This includes most of the skills needed for web design. In my personal time, I taught myself through online resources and 
                            by working on personal projects, which are the ones you can view on this portfolio. 
                            I started by learning Javascript, HTML, and CSS. Once I got comfortable with those languages, 
                            I moved on to back-end development with Node.js/Express and then to frameworks for front-end and unit testing.
                            This is when my projects started to kick it up a notch. I even collaborated with a friend to work on a recipe app together. 
                            I'm always learning new things, both in and out of school as I'm eager to learn as much as I can.
                            </p>
                        </div>
                        <div className="col-lg">
                            <img src={profilePic} alt="profile pic" className="w-75" style={{borderRadius:'20%'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage