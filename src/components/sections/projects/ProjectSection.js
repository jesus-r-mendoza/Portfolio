import React from 'react';
import ProjectList from './ProjectList';

class ProjectSection extends React.Component {

    render() {
        return (
            <div id="test" className="section">
                <h2>Projects</h2>
                <ProjectList />
            </div>
        )
    }

}

export default ProjectSection;