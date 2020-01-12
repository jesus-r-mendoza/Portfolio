import React from 'react';
import Project from './Project';
import Spinner from 'react-bootstrap/Spinner'

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
            haveLoaded: 0,
            projects: []
        };
    }

    componentDidMount() {
        this.state.pinnedRepos.forEach((repo) => this.api(repo));
    }

    render() {
        if ( this.state.haveLoaded != this.state.pinnedRepos.length ) {
            return (
                <div className="d-flex flex-column align-items-center">
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <Spinner animation="border" />
                        <h4 className="ml-3">Fetching most recent Data from the Github API</h4>
                    </div>
                    <h5 className="text-danger">Not Loading?  Give it a few seconds...</h5>
                    <h5 className="text-danger">Or try refreshing the page.</h5>
                </div>
            )
        }
        return (
            <div className="d-flex flex-wrap justify-content-between my-3">
                {this.state.projects.map((p) => <Project project={p}/>)}
            </div>
        )
    }

    api = async (repoName) => {
        let repoRes = await fetch(repoAPI + repoName);
        let statsRes = await fetch(repoAPI + repoName + statsAPI);

        let repo = await repoRes.json();
        let stats = await statsRes.json();

        let data = getDataFromRepo(repo, stats);

        this.setState({
            projects: this.state.projects.concat(data),
            haveLoaded: this.state.haveLoaded + 1
        });
    }
}

function getDataFromRepo(repo, stats) {
    let data = {};
    data.id = repo.id;
    data.name = repo.name.replace(/-/g, " ");
    data.date = new Date(repo.updated_at).toLocaleDateString('en-US');
    if (!repo.language) {
        try {
            data.language = repo.parent.language;
        } catch(e) {
            data.language = 'View on Github';
        }
    } else {
        data.language = repo.language;
    }
    data.contributors = stats.length;
    data.commits = stats.reduce((sum, contributor) => sum + contributor.total, 0);
    return data;
}

export default ProjectList;