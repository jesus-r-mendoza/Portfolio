import React from 'react';
import Title from './Title';
import '../../../layout/Volunteer.css';

class VolunteerSection extends React.Component {

    render() {
        return (
            <div id="volunteer" className="section">
                <h2 className="display-4">Volunteer</h2>
                <Title />
            </div>
        )
    }

}

export default VolunteerSection;