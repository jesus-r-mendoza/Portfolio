import React from 'react';
import Project from './Project';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 1,
                    name: 'Proj 1'
                },
                {
                    id: 2,
                    name: 'Proj 2'
                },
                {
                    id: 3,
                    name: 'Proj 3'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.projects.map((p) => <Project project={p}/>)}
            </div>
        )
    }

}

export default ProjectList;