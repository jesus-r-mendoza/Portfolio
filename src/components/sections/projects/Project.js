import React from "react";

class Project extends React.Component {

    render() {
        return (
            <div className="project-card">
                <h3 className="text-center mb-3">State-Farm-Distracted-Driver-Detection {this.props.project.id}</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
                    ipsam eligendi maiore s commodi animi unde nesciunt incidunt omnis
                    voluptas ratione qui quisquam eum nobis, veniam iusto non
                    voluptas ratione qui quisquam eum nobis, veniam iusto non
                </p>
                <div className="d-flex flex-column flex-nowrap justify-content-around">
                    <div className="d-flex justify-content-between">
                        <h4>Collaborators</h4>
                        <h4>{this.props.project.id * 5}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>Commits</h4>
                        <h4>{this.props.project.id * 5}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h4>Updated</h4>
                        <h4>{this.props.project.id * 5}</h4>
                    </div>
                </div>
                <a href="#projects" className="btn btn-outline-primary my-1 w-75 mx-auto">View Source Code</a>
            </div>
        )
    }

}

export default Project;