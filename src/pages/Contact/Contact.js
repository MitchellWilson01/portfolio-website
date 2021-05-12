import React from 'react';
import { useHistory } from 'react-router-dom';
import './Contact.scss';

const Contact = () => {
    const history = useHistory();

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            history.push('/');
        }
    }
  
    window.addEventListener("resize", handleResize);

    return (
        <div className="contact">
            <i className="fas fa-comments"></i>
            <h2>Lets talk!</h2>
            <div className="info">
                <p><span><i className="fas fa-envelope-open-text"></i> &nbsp; 
                mitchellwilson@something.com</span></p>
                <p><span><i className="fab fa-linkedin"></i> &nbsp; 
                linkedin.com/mitchellwilson</span></p>
                <p><span><i className="fas fa-phone-square"></i> &nbsp; 
                (713) 713-7133</span></p>
            </div>
            <p className="text">Feel free to contact me about anything. Any 
            questions, comments, critiques, or oppurtunities are always welcome!</p>
        </div>
    );
}

export default Contact;