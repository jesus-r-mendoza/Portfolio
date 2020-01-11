import React from 'react';
import Project from './Project';

const repoAPI = 'https://api.github.com/repos/jesus-r-mendoza/';
const statsAPI = '/stats/contributors';

class ProjectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pinnedRepos: [
                'Operations-Data-and-Mgmt-System',
                'State-Farm-Distracted-Driver-Detection',
                'Notely',
                'Walmart-Store-Sales-Forecasting',
                'OS-File-Management-System',
                'RSA-Encryption'
            ],
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

    componentDidMount() {
        fetch(repoAPI + 'Operations-Data-and-Mgmt-System')
        .then(res => res.json())
        .then(
            (result) => {
                getDataFromRepo(result);
            },
            (error) => {
                console.log(error)
            }
        );
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-between my-3">
                {this.state.projects.map((p) => <Project project={p}/>)}
            </div>
        )
    }

}

function getDataFromRepo(response) {
    console.log('--------------------------------------');
    console.log(response.name);
    console.log(response.updated_at);
    if (!response.language) {
        try {
            console.log(response.parent.language);
        } catch(e) {
            console.log('View repo for more details');
        }
    } else {
        console.log(response.language);
    }
    fetch(repoAPI + 'Operations-Data-and-Mgmt-System' + statsAPI)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            console.log(result.length);
            let x = result.reduce((sum, contributor) => sum + contributor.total, 0);
            console.log(x);
        },
        (error) => {
            console.log(error);
        }
    );
    console.log('--------------------------------------');
}

export default ProjectList;