import React from 'react'
import NavBar from '../../components/NavBar/NavBar.js';
import './SkillsPage.css';
let SkillsPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="skills" />
                <div className="container" id="main-content">
                    <div className="container">
                        <div className="row">
                            <h2 className="d-flex justify-content-center">Skills</h2>
                        </div>
                        <div className="row" >
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Javascript</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>CSS/Bootstrap</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Node.js</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100" />
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Java</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>React</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center col skill">
                                <div className="row">
                                    <div className="col">
                                        <h4>Git/Github</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsPage