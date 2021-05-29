import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';

let Error = () => {
    const [redirectHome, setRedirectHome] = useState(false);
    return (
        <div>
            <h1>404</h1>
            <h2>Woah there, looks like you've wandered a bit too far...</h2>
            <button className="btn btn-info" onClick={(e) => {
                e.preventDefault();
                setRedirectHome(true);
            }}>Let's go back home</button>
            {redirectHome ? <Redirect to='/' /> : ''}
        </div>
    )
}

export default Error;