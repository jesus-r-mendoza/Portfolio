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
        api();
    }

    render() {
        return (
            <div className="d-flex flex-wrap justify-content-between my-3">
                {this.state.projects.map((p) => <Project project={p}/>)}
            </div>
        )
    }

}

async function api() {
    let repo, stats;
    let repoRes = await fetch(repoAPI + 'Operations-Data-and-Mgmt-System');
    let statsRes = await fetch(repoAPI + 'Operations-Data-and-Mgmt-System' + statsAPI);

    repo = await repoRes.json();
    stats = await statsRes.json();
    console.log('printing');

    console.log(repo);
    console.log(stats);
}

function getDataFromRepo(repo, stats) {
    let data = {};
    data.name = repo.name.replace(/-/g, " ");
    data.date = new Date(repo.updated_at).toLocaleDateString('en-US');
    if (!repo.language) {
        try {
            data.lang = repo.parent.language;
        } catch(e) {
            data.lang = 'View on Github';
        }
    } else {
        data.lang = repo.language;
    }
    data.contributors = stats.length;
    data.commits = stats.reduce((sum, contributor) => sum + contributor.total, 0);
    return data;
}

export default ProjectList;