import React from 'react';
import deer from '../../images/deer.png';
import lion from '../../images/blueLion.png';
import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro">
            <div className="text">
                <h1>Mitchell Wilson</h1>
                <h5>SOFTWARE DEVELOPER</h5>
            </div>
            <img src={lion}></img>
        </div>
    );
}

export default Intro;