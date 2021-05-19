import React, { useState } from 'react';

import './Footer.scss';

const Footer = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    const bigScreenInfo = <p className="info">mitchellwilson@something.com 
        &nbsp; | &nbsp; (713) 713-7133 &nbsp; | &nbsp; linkedin.com/in/mitchellwilson</p>
    const smallScreenInfo = <p className="info">
        <i className="fas fa-envelope-square"></i> &nbsp;mitchellwilson@something.com<br/>
        <i className="fab fa-linkedin"></i> &nbsp;linkedin.com/in/mitchellwilson<br/>
        <i className="fas fa-phone-square"></i> &nbsp;(713) 713-7133</p>

    window.addEventListener("resize", handleResize);

    return (
        <div className="footer">
            {mobile ? null :
                <div className="buttons">
                    <i className="fas fa-home"></i>
                    <i className="fab fa-github-alt"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fas fa-palette"></i>
                </div>
            }
            {mobile ? smallScreenInfo : bigScreenInfo}
            <p className="bottom">Copyright © Mitchell Wilson 2021</p>
        </div>
    );
}
export default Footer;