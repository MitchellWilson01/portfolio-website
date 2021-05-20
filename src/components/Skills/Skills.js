import React, { useState, useEffect } from 'react';
import './Skills.scss';

const Skills = () => {
    const initialMobile = window.innerWidth < 875 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 875) {
                setMobile(true)
            } else {
                setMobile(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const frontEnd = <p>Fully responsive applications that strike a balance 
        between functional and aesthetic design without sacrificing either of 
        the two</p>
    const backEnd = <p>Management of back end processes such as data 
        retrieval, storage, and manipulation using a variety of different tools</p>
    const fullStack = <p>Equipped with a Bachelor of Science in Computer 
        Science from Texas State University and hands on experience as a 
        full-time developer</p>


    return (
        <div className="skills">
            <h2>My Skills</h2>
            <p className="description">Programming knowledge<br/>from the front
            to the back</p>
            <div className="deck">
                <div className="card other">
                    <i className="fab fa-css3"></i>
                    <div className="text">
                        <h3>Front End</h3>
                        {mobile ? <p>Fully Responsive</p> : frontEnd}
                    </div>
                </div>
                <div className="card">
                    <i className="fas fa-calculator"></i>
                    <div className="text">
                        <h3>Back End</h3>
                        {mobile ? <p>Data Management</p> : backEnd}
                    </div>
                </div>
                <div className="card other">
                    <i className="fas fa-fire-alt"></i>
                    <div className="text">
                        <h3>Full Stack</h3>
                        {mobile ? <p>Professional Developer</p> : fullStack}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;