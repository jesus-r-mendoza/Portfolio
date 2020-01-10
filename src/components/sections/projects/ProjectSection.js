import React from 'react';
import ProjectList from './ProjectList';

class ProjectSection extends React.Component {

    render() {
        return (
            <div id="projects" className="section">
                <h2>Projects</h2>
                <ProjectList />
                <div className="d-flex justify-content-center my-5">
                   <a href="#projects" className="btn btn-lg btn-outline-info">View more projects on my Github ></a>
                </div>
            </div>
        )
    }

}

export default ProjectSection;