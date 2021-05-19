import React, { useState } from 'react';
import './Action.scss';

const Action = () => {
    return (
        <div className="action">
            <a><button>LinkedIn</button></a>
            <div className="spacer"></div>
            <a><button>GitHub</button></a>
        </div>
    );
}

export default Action;