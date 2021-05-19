import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
    const initialMobile = window.innerWidth < 768 ? true : false;
    const [mobile, setMobile] = useState(initialMobile);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            setMobile(true)
        } else {
            setMobile(false);
        }
    }

    window.addEventListener("resize", handleResize);

    if (mobile) {
        return (
            <div className="header">
                <Link className="link" to="/">
                    <i className="fas fa-home"></i>
                </Link>
                <Link className="link" to="/projects">
                    <i className="fas fa-palette"></i>
                </Link>
            </div>
        );
    } else {
        return (
            <div className="header">
                <Link className="link" to="/">
                    HOME
                </Link>
                <Link className="link" to="/projects">
                    PROJECTS
                </Link>
                <Link className="link" to="/">
                    LINKEDIN
                </Link>
                <Link className="link" to="/">
                    GITHUB
                </Link>
            </div>
        );
    }
}

export default Header;