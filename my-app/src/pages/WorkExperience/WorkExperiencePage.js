import React from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
let WorkExperiencePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="workExperience"/>
                <div className="container" id="main-content">
                    <h2>Internships</h2>
                    <h4>CMTSolutions - Software Engineer Intern</h4>
                    <h5>Date worked: 05/17/2021 - Present</h5>
                    <ul>
                        <li>Developed and supported web applications using Ruby on Rails and React</li>
                        <li>Helped maintain the documentation for the company's api by using API Blueprint</li>
                        <li>Used code enabling tools such as Github and Jira to view everyone's progress and perform code reviews</li>
                        <li>Took part in meetings with stakeholders to see how development expectations are defined for projects from the outset</li>
                        <li>Joined in all developer activities, including iteration planning, design, development, and deployment for mission critical applications and upgrades</li>
                    </ul>
                    <p></p>
                    <br />
                    <h2>Freelance</h2>
                    <h4>GE Electric</h4>
                    <ul>
                        <li>Developed a web application for GE Electric using React and Hooks</li>
                        <li>Took part in weekly meetings with client to review customer requirements and discuss progress</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default WorkExperiencePage