import React from 'react';
import Overview from './Overview';
import Summaries from './Summaries';

class ExperienceSection extends React.Component {

    render() {
        return (
            <div id="experience" className="section">
                <h2>Academic Internship</h2>
                <Overview />
                <Summaries />
            </div>
        )
    }

}

export default ExperienceSection;