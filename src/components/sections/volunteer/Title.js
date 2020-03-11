import React from 'react'
import mhs from '../../../img/mhs-sm.png';

export default function Title() {
    return (
        <div className="title">
            <img src={mhs} alt="" />
            <div className="ml-4">
                <h3>Montclair High School Science Club</h3>
                <em>September 2016 - Present</em>
            </div>
        </div>
    )
}
