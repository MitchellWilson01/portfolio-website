import React from 'react';
import './Action.scss';

const Action = () => {
    return (
        <div className="action">
            <a href="https://linkedin.com/in/mitchellwilson01" target="_blank" rel="noreferrer">
                <button>LinkedIn</button>
            </a>
            <div className="spacer"></div>
            <a href="https://github.com/mitchellwilson01" target="_blank" rel="noreferrer">
                <button>GitHub</button>
            </a>
        </div>
    );
}

export default Action;