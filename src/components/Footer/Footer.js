import React, { useState } from 'react';
import './Footer.scss';

const Footer = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    const bigScreenInfo = <p className="info">mitchellwilson01@outlook.com 
        &nbsp; | &nbsp; (713) 206-7322 &nbsp; | &nbsp; linkedin.com/in/mitchellwilson01</p>
    const smallScreenInfo = <p className="info">
        <i className="fas fa-envelope-square"></i> &nbsp;mitchellwilson01@outlook.com<br/>
        <i className="fab fa-linkedin"></i> &nbsp;linkedin.com/in/mitchellwilson01<br/>
        <i className="fas fa-phone-square"></i> &nbsp;(713) 206-7322</p>

    window.addEventListener("resize", handleResize);

    return (
        <div className="footer">
            <div className="container">
            {mobile ? null :
                <div className="buttons">
                    <i className="fas fa-home"></i>
                    <i className="fab fa-github-alt"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fas fa-palette"></i>
                </div>
            }
            {mobile ? smallScreenInfo : bigScreenInfo}
            </div>
            <p className="bottom">Copyright © Mitchell Wilson 2021</p>
        </div>
    );
}
export default Footer;