import React from 'react'

export default function Award(props) {
    return (
        <div className="award mb-3">
            <div>
                <h5>{props.award.name}</h5>
                <em>{props.award.date}</em>
            </div>
            <p className="lead mt-2">{props.award.description}</p>
        </div>
    )
}
