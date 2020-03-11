import React from 'react';
import Overview from './Overview';
import Summaries from './Summaries';
import Updates from './Updates';
import '../../../layout/Experience.css';

class ExperienceSection extends React.Component {

    render() {
        return (
            <div id="experience" className="section">
                <h2 className="display-4">Academic Internship</h2>
                <Overview />
                <Summaries />
                {/* <Updates /> */}
            </div>
        )
    }

}

export default ExperienceSection;