import React from 'react';
import Project from './Project';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
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
                },
                {
                    id: 4,
                    name: 'Proj 4'
                },
                {
                    id: 5,
                    name: 'Proj 5'
                },
                {
                    id: 6,
                    name: 'Proj 6'
                }
            ]
        };
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-between my-3">
                {this.state.projects.map((p) => <Project project={p}/>)}
            </div>
        )
    }

}

export default ProjectList;