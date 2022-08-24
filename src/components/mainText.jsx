import React from 'react';

import './styles.css';

export default function MainText({text}) {
    return (
        <div className="titleMain">
        <h1>{text}</h1>
        </div>
    );
}

