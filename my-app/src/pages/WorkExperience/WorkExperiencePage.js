import React from 'react'
import Sparkle from 'react-sparkle';
import CMTSolutions from '../../components/Internships/CMTSolutions.js';
import GEElectric from '../../components/Freelance/GEElectric.js';
import NavBar from '../../components/NavBar/NavBar.js';
let WorkExperiencePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="workExperience"/>
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <h2>Internships</h2>
                    <CMTSolutions />
                    <br />
                    <h2>Freelance</h2>
                    <GEElectric />
                </div>
            </div>
        </div>
    )
}

export default WorkExperiencePage