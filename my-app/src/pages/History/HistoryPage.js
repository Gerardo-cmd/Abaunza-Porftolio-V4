import React from 'react'
import './HistoryPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import Carouselcom from '../../components/Carousel/carousel.js';
let HistoryPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <div className="col-lg">
                    <NavBar location="history"/>
                </div>
                <div className="row" id="main-content">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <h1>History of my portfolio</h1>
                        <br />
                        <h3>My portfolio has gone through a copious amount of changes, check it out below!</h3>
                        <h5>(Carousel will pause while your mouse hovers over the image.)</h5>
                        <br />
                        <div className="row">
                            <Carouselcom />
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    )
}

export default HistoryPage