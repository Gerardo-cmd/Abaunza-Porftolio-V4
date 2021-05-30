import React from 'react'
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar.js';
let HomePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="home"/>
                <div className="d-flex justify-content-center fade-in-text text-center" id="main-content">
                    <h1 id="title" style={{fontWeight: 'bold'}}>Gerardo Abaunza</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage