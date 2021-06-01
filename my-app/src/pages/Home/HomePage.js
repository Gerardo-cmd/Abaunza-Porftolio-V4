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
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <h1 id="title" style={{fontWeight: 'bold', fontFamily: "monospace"}}>Gerardo Abaunza</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage