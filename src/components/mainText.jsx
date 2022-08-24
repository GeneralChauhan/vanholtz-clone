import React from 'react';

import './styles.css';

export default function MainText({text}) {
    return (
        <div className="titleMain">
        <div>{text}</div>
        </div>
    );
}

