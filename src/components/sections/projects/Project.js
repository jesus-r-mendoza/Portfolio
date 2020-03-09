import React from "react";

class Project extends React.Component {

    render() {
        return (
            <div className="project-card floating">
                <h3 className="d-flex justify-content-center align-items-center text-center card-title">{this.props.project.name}</h3>
                <p>{this.props.project.description}</p>
                <div className="d-flex flex-column flex-nowrap justify-content-around">
                    <div className="d-flex justify-content-between">
                        <h6>Top Language</h6>
                        <h6>{this.props.project.language}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6>Collaborators</h6>
                        <h6>{this.props.project.contributors}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6>Commits</h6>
                        <h6>{this.props.project.commits}</h6>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h6>Updated</h6>
                        <h6>{this.props.project.updated}</h6>
                    </div>
                </div>
                <a href={this.props.project.url} className="btn btn-outline-primary my-1 w-75 mx-auto" target="_blank" rel="noopener noreferrer">View Source Code</a>
            </div>
        )
    }

}

export default Project;