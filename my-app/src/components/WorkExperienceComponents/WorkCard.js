import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Internships from './Internships.js';
import Freelance from './Freelance.js';

let WorkCard = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Card style={{backgroundColor: 'rgb(35, 35, 35, 0.75)'}}>
        <Card.Header style={{backgroundColor: 'rgb(35, 35, 35, 0.75)'}}>
            <Nav>
                <Nav.Item>
                    <Nav.Link style={{color: 'rgb(100, 200, 255)'}} onClick={(e) => {
                        e.preventDefault();
                        setToggle(false);
                    }}>Internships</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link style={{color: 'rgb(100, 200, 255)'}} onClick={(e) => {
                        e.preventDefault();
                        setToggle(true);
                    }}>Freelance</Nav.Link>
                </Nav.Item>
            </Nav>
        </Card.Header>
        <Card.Body bg="dark">
            <Card.Title>{toggle ? <h2>Freelance</h2> : <h2>Internships</h2>}</Card.Title> 
            <Card.Text>
                {toggle ? <Freelance /> : <Internships />}
            </Card.Text>
        </Card.Body>
        </Card>
    )      
}

export default WorkCard;