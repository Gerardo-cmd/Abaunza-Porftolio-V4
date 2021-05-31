import React, {useState} from 'react';
import './carousel.css';
import One from './one.png';
import Two from './two.png';
import Three from './three.png';
import Four from './four.png';
import Carousel from 'react-bootstrap/Carousel'
let Carouselcom = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100 show"
                    src={One}
                    alt="Version 1"
                />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100 show"
                    src={Two}
                    alt="Version 2"
                />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100 show"
                    src={Three}
                    alt="Version 3"
                />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100 show"
                    src={Four}
                    alt="Version 4"
                />
                </Carousel.Item>
            </Carousel>
            <br />
            {index === 0 ? 
                <div className="col-md website">
                    <h2>Version 1 - November 2020</h2>
                    <p>
                        This site was made about a month after I got the hang of Javascript, CSS, and HTML. 
                        I only used one (rather long) HTML file and one CSS file for this portfolio as well as some images.
                        This portfolio only has three projects to showcase as they were the ones I worked on when first learning
                        Javascript, HTML, and CSS. 
                        <a href="https://gerardo-abaunza-portfolio-v1.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the first version</a>
                    </p>
                </div>: ''}
            {index === 1 ? 
                <div className="col-md website">
                    <h2>Version 2 - January 2021</h2>
                    <p>
                        After a few more weeks, I picked up Bootstrap and Node.js. I decided to redo my portfolio to showcase
                        bootstrap on the portfolio as well as include some of the new projects
                        that were made using Node.js. The biggest difference between version 1 and version 2 
                        is the inclusion of bootstrap for styling and the fact that this one has multiple pages.
                        <a href="https://gerardo-abaunza-portfolio-v2.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the second version</a>
                    </p>
                </div>: ''}
            {index === 2 ? 
                <div className="col-md website">
                    <h2>Version 3 - February 2021</h2>
                    <p>
                        Ever since the last version, I learned React and Hooks so I decided to update my portfolio again 
                        to showcase React. Key differences between version 2 and version 3 is how version 3 was made in React
                        along with Browserrouter and Hooks.
                        Because I used Browser Router, one can load the different pages at a much faster rate. There are also some clear noticeable changes with the style.
                        <a href="https://gerardo-abaunza-portfolio-v3.netlify.app/" target="_blank" rel="noreferrer">Click here to visit the third version</a>
                    </p>
                </div>: ''}
            {index === 3 ? 
                <div className="col-md website">
                    <h2>Version 4 - May 2021</h2>
                    <p>
                        This is the current one you're on right now. Not a lot has transpired since version 3. I decided to update my portfolio with a 
                        better design (including better mobile compatability) and with updated information about my university 
                        courses, projects, and professional experience. Key differences between version 3 and version 4 
                        include an improved design due to better use of bootstrap and updated information.
                    </p>
                </div>: ''}
        </div>
    )
}
export default Carouselcom;