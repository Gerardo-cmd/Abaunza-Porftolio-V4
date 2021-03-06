import React from 'react';
import Sparkle from 'react-sparkle';
import './ProjectsPage.css';
import NavBar from '../../components/NavBar/NavBar.js';
import todo from './todo.png';
import notes from './notes.png';
import weather from './weather.png';
import recipe from './recipe.png';
import charity from './charity.png';
import solarSystem from './solarSystem.png';

let ProjectsPage = () => {
    return (
        <div className="row" id="page">
            <div>
                <NavBar location="projects"/>
                <div className="container" id="main-content">
                    <Sparkle count={10} fadeOutSpeed={5} overflowPx={0}/>
                    <h1>Here are some of my projects</h1>
                    <br />
                    <br />
                    <div className="row" id = "Todo App">
                        <div className="col-lg">
                            <h2>Todo App</h2>
                            <p>The old classic 'Todo App'! The user can add todos and remove them as they wish. There are checkboxes next to each todo 
                                that the user can check to signify if it is completed or not. At the top of the website one
                                can find a search bar that will filter the todos based on what the user types in by looking for 
                                a matching title. The user will also be told how many todos are left based on how many unfinished 
                                (unchecked) todos exist. There is also an option to only display the incompleted 
                                todos. <a href="https://gerardo-todos.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the Todo App</a>
                            </p>
                        </div>
                        <div className="col-sm">
                            <img className="project d-block w-100 show" src={todo} alt="todo"></img>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row" id = "Notes App">
                        <div className="col-lg">
                            <img className="project d-block w-100 show" src={notes} alt="notes"></img>
                        </div>
                        <div className="col-lg">
                            <h2>Notes App</h2>
                            <p>This application allows the user to take notes and save them via their local storage. The notes can be sorted either 
                                alphabetically, by last edited, or by last created. Additionally, the notes can be searched by their title by using the filter notes search 
                                bar. <a href="https://gerardo-notes.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the Notes App</a>
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row" id = "Weather App">
                        <div className="col-lg">
                            <h2>Weather App</h2>
                            <p>
                                This application allows the user to input any location and recieve the current forecast for that location!
                                It will include the temperature it is outside, what temperature it feels like, the humidity, and the visibility.
                                It accomplishes this by using two APIs, which are linked to in the Weather App's About 
                                page. <a href="https://abaunza-weather-application.herokuapp.com/" target="_blank" rel="noreferrer">Click here to visit the Weather App</a>
                            </p>
                        </div>
                        <div className="col-lg">
                            <img className="project d-block w-100 show" src={weather} alt="weather"></img>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row" id = "Recipe App">
                        <div className="col-lg">
                            <img className="project d-block w-100 show" src={recipe} alt="recipe"></img>
                        </div>
                        <div className="col-lg">
                            <h2>Recipe App</h2>
                            <p>
                                This was actually a collaboration between another friend and I on github! 
                                <a target="_blank" href="https://github.com/JoshuaLamke/RecipeApp" rel="noreferrer">Click here to visit the github repository for this app!</a>
                            </p>
                            <p>
                                Users must sign up and create an account by inserting their name, email, and creating a new password.
                                This application allows the user to save their own recipes as well as edit them and delete them.
                                Users are also able to sort their recipe by type (which is the default sorting method), alphabetically, and by last created.
                                The database is on Heroku so logging in will take a bit of time but afterwards everything will work 
                                normally. <a href="https://recipe-app-jg.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the Recipe App</a>
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row" id = "Charity Microservice">
                        <div className="col-lg">
                            <h2>Charity Microservice</h2>
                            <p>
                                Users can use this api via postman, insomnia, or in their backend to get charities and save their favorites.
                                This microservice has the documentation for all of the endpoints.
                                Users are also able to sort charities by category or search them by ein. The microservice is hosted on 
                                Heroku. <a href="https://gerardo-abaunza-swe432-hw2.herokuapp.com/" target="_blank" rel="noreferrer">Click here to visit the Charity Microservice.</a>
                            </p>
                        </div>
                        <div className="col-lg">
                            <img className="project d-block w-100 show" src={charity} alt="charity"></img>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row" id = "Solar System">
                        <div className="col-lg">
                            <img className="project d-block w-100 show" src={solarSystem} alt="solar system"></img>
                        </div>
                        <div className="col-lg">
                            <h2>Solar System App</h2>
                            <p>
                                This application was made using React, Node.js, and Firebase! 
                                It's purpose is to provide information to users about our solar system. 
                                One can look at the moons or the planets in our solar system and learn more about them.
                                Because this is hosted on heroku, it may take a while for the website to boot up when first visiting 
                                it. <a href="https://solar-system-firebase.herokuapp.com/" target="_blank" rel="noreferrer">Click here to visit the Solar System App</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage