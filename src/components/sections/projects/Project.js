import React from "react";

class Project extends React.Component {

    render() {
        return (
            <div>
                <h3>Project {this.props.project.id}</h3>
            </div>
        )
    }

}

export default Project;