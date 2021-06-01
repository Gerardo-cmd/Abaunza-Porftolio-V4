import React from 'react'
import Sparkle from 'react-sparkle';
import './ContactPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import Github from './img_github.png';
import LinkedIn from  './img_linkedin.png';
import Handshake from './img_handshake.png';
import {Phone, Envelope} from 'akar-icons';
import Badge from 'react-bootstrap/Badge';
import githubLogo from '../Skills/githubLogo.png';
import linkedinLogo from './linkedinLogo.png';
import handshakeLogo from './handshakeLogo.png';
let ContactPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar />
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <h1>Connect with me</h1>
                    <h4>Click on one of the websites below to visit it</h4>
                    <br />
                    <div className="row">
                        <div className="col-sm element">
                            <a target="_blank" style={{color: 'red'}} className="link" href="https://app.joinhandshake.com/users/12808784" rel="noreferrer" ><Badge variant="secondary"><img src={handshakeLogo} alt="" style={{width: "35px",height: "35px", borderRadius: "25%"}} /></Badge>Handshake</a>
                            <br />
                            <br />
                            <img className="img d-block w-75 show" alt="Handshake" src={Handshake} onClick={() => {
                                window.open("https://app.joinhandshake.com/users/12808784", "_blank");
                            }}></img>
                        </div>
                        <br />
                        <div className="col-sm element">
                            <a target="_blank" className="link" href="https://github.com/Gerardo-cmd" rel="noreferrer" ><Badge variant="secondary"><img src={githubLogo} alt="" style={{width: "35px",height: "35px", borderRadius: "20%"}} /></Badge>Github</a>
                            <br />
                            <br />
                            <img className="img d-block w-75 show" alt="Github" src={Github} onClick={() => {
                                window.open("https://github.com/Gerardo-cmd", "_blank");
                            }}></img>
                        </div>
                        <br />
                        <div className="col-sm element">
                            <a target="_blank" style={{color: 'cyan'}} className="link" href="https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/" rel="noreferrer" ><Badge variant="secondary"><img src={linkedinLogo} alt="" style={{width: "35px",height: "35px", borderRadius: "25%"}} /></Badge>LinkedIn</a>
                            <br />
                            <br />
                            <img className="img d-block w-75 show" alt="LinkedIn" src={LinkedIn} onClick={() => {
                                window.open("https://www.linkedin.com/in/gerardo-abaunza-abaaa0170/", "_blank");
                            }}></img>
                        </div>
                    </div>
                    <br />
                    <br />
                    <h1>Or contact me directly!</h1>
                    <br />
                    <div className="row">
                        <div className="d-flex col-lg">
                        <Phone />
                        <p style={{ marginLeft: "5px"}}> 703-868-3702</p>
                        </div>
                        <div className="d-flex col-lg">
                        <Envelope />
                        <p style={{ marginLeft: "10px"}}>gerardoabaunza2015@gmail.com</p>
                        </div>
                        <div className="col-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPage