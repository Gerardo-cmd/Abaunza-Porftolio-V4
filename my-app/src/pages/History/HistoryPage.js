import React from 'react'
import './HistoryPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import Carouselcom from '../../components/Carousel/carousel.js';
let HistoryPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="history"/>
                <div className="container" id="main-content">
                    <h1>History of my portfolio</h1>
                    <br />
                    <h3>My portfolio has gone through a copious amount of changes, check it out below!</h3>
                    <h5>(Carousel will pause while your mouse hovers over the image.)</h5>
                    <br />
                    <Carouselcom />
                </div>
            </div>
        </div>
    )
}

export default HistoryPage