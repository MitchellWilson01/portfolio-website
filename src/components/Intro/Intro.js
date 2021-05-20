import React from 'react';
import lion from '../../images/lion.png';
import './Intro.scss';

const Intro = () => {
    return (
        <div className="intro">
            <div className="text">
                <h1>Mitchell Wilson</h1>
                <h5>SOFTWARE DEVELOPER</h5>
            </div>
            <img src={lion} alt="lion"></img>
        </div>
    );
}

export default Intro;