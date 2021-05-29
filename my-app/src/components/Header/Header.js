import React  from 'react';
import './Header.css';

let Header = ({area}) => {
    let areaHeader = area;
    return (
        <div className="headerMaster">
            <div className="col-3">
                <h1>Gerardo Abaunza</h1>
            </div>
            <div className="col">
                <h1>{areaHeader}</h1>
            </div>
        </div>
    )
}

export default Header;