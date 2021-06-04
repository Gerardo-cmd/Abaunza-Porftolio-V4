import React from 'react'
import Sparkle from 'react-sparkle';
import NavBar from '../../components/NavBar/NavBar.js';
import WorkCard from '../../components/WorkExperienceComponents/WorkCard.js';
let WorkExperiencePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="workExperience"/>
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <WorkCard />
                </div>
            </div>
        </div>
    )
}

export default WorkExperiencePage