import React from 'react'
import Sparkle from 'react-sparkle';
import NavBar from '../../components/NavBar/NavBar.js';
import Error from '../../components/Error/Error.js';
import './NotFoundPage.css';
let NotFoundPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="?"/>
                <div className="d-flex justify-content-center containerFluid title" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <Error />
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage