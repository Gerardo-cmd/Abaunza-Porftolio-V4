import React from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import Error from '../../components/Error/Error.js';
import './NotFoundPage.css';
let NotFoundPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <div className="col-lg">
                    <NavBar location="?"/>
                </div>
                <div className="d-flex justify-content-center containerFluid title" id="main-content">
                    <Error />
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage