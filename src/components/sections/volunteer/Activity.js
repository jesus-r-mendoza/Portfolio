import React from 'react';

function Activity(props) {
    return (
        <div className="activity floating">
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h5>{props.activity.title}</h5>
                <em>{props.activity.date}</em>
            </div>
            <ul>
                {props.activity.bullets.map( (b) => <li>{b}</li> )}
            </ul>
        </div>
    )
}

export default Activity;