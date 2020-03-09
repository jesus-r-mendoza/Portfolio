import React from 'react';
import ProjectList from './ProjectList';

class ProjectSection extends React.Component {

    render() {
        return (
            <div id="projects" className="section">
                <h2 className="display-4">Projects</h2>
                <ProjectList />
                <div className="d-flex justify-content-center my-5">
                    <a href="https://github.com/jesus-r-mendoza?tab=repositories" target="_blank" rel="noopener noreferrer"
                        className="btn btn-lg btn-outline-info">
                            View more projects on my Github
                            <i class="fas fa-chevron-right ml-2"></i>
                        </a>
                </div>
            </div>
        )
    }

}

export default ProjectSection;