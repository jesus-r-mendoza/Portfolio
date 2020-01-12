import React from "react";

class Project extends React.Component {

    render() {
        return (
            <div className="project-card">
                <h3 className="text-center mb-3">{this.props.project.name}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                    ipsam eligendi maiore s commodi animi unde nesciunt incidunt omnis
                    voluptas ratione qui quisquam eum nobis, veniam iusto non
                    voluptas ratione qui quisquam eum nobis, veniam iusto non
                </p>
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
                <a href="#projects" className="btn btn-outline-primary my-1 w-75 mx-auto">View Source Code</a>
            </div>
        )
    }

}

export default Project;