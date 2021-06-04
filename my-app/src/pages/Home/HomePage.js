import React from 'react'
import Sparkle from 'react-sparkle';
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar.js';
let HomePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="home"/>
                <div className="d-flex justify-content-center fade-in-text text-center" id="main-content">
                    <Sparkle count={12} fadeOutSpeed={5} overflowPx={0}/>
                    <div className="container">
                        <div className="row fade-in-text">
                            <h1 style={{fontWeight: 'bold', fontFamily: "monospace"}} className="display-4">Gerardo Abaunza</h1>
                        </div>
                        <div className="row fade-in-second">
                            <p style={{ fontFamily: "monospace"}} className="lead">Creative | Analytical | Learner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage