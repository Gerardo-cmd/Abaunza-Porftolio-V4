import React from 'react'
import './ContactPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import Github from './img_github.png';
import LinkedIn from  './img_linkedin.png';
import Handshake from './img_handshake.png';

let ContactPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="contact"/>
                <div className="container" id="main-content">
                    <div className="col-1" />
                    <div className="col-10">
                        <h1>Connect with me</h1>
                        <br />
                        <h3>Click on one of the websites below to visit it</h3>
                        <br />
                        <div className="row">
                            <div className="col-sm element">
                                <a target="_blank" className="link" href="https://github.com/Gerardo-cmd">Github</a>
                                <br />
                                <br />
                                <img className="img d-block w-100 show" alt="Github" src={Github} onClick={() => {
                                    window.open("https://github.com/Gerardo-cmd", "_blank");
                                }}></img>
                            </div>
                            <br />
                            <div className="col-sm element">
                                <a target="_blank" className="link" href="https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/">LinkedIn</a>
                                <br />
                                <br />
                                <img className="img d-block w-100 show" alt="LinkedIn" src={LinkedIn} onClick={() => {
                                    window.open("https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/", "_blank");
                                }}></img>
                            </div>
                            <br />
                            <div className="col-sm element">
                                <a target="_blank" className="link" href="https://app.joinhandshake.com/users/12808784">Handshake</a>
                                <br />
                                <br />
                                <img className="img d-block w-100 show" alt="Handshake" src={Handshake} onClick={() => {
                                    window.open("https://app.joinhandshake.com/users/12808784", "_blank");
                                }}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage