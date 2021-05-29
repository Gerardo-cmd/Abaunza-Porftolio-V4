import React from 'react'
import './HomePage.css';
import NavBar from '../../components/NavBar/NavBar.js';
let HomePage = () => {
    return (
        <div className="row" id="page">
            <div>
                <div className="col-lg">
                    <NavBar location="home"/>
                </div>
                <div className="d-flex justify-content-center" id="main-content">
                    <h1 id="title">Gerardo Abaunza</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage