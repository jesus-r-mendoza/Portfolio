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
        if ( this.state.haveLoaded !== this.state.pinnedRepos.length ) {
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
            <div className="d-flex flex-wrap justify-content-around my-3">
                {this.state.projects.map((p) => <Project key={p.id} project={p}/>)}
            </div>
        )
    }

    api = async (repoName) => {
        let repoRes = await fetch(repoAPI + repoName);
        let statsRes = await fetch(repoAPI + repoName + statsAPI);

        let repo = await repoRes.json();
        let stats = await statsRes.json();

        let data;

        try {
            data = getDataFromRepo(repo, stats);
        } catch(e) {
            // just ignore the project if error from api
            this.setState({
                haveLoaded: this.state.haveLoaded + 1
            });
            return;
        }

        this.setState({
            projects: this.state.projects.concat(data)
        });

        if ( this.state.haveLoaded === this.state.pinnedRepos.length - 1 ) {
            // this means the project just added was the last api call to finish
            this.sort();
        }

        this.setState({
            haveLoaded: this.state.haveLoaded + 1
        });
    }

    sort = () => {
        let sorted = this.state.projects.slice();
        sorted.sort((a,b) => a.updated_date < b.updated_date);
        this.setState({
            projects: sorted
        });
    }
}

function getDataFromRepo(repo, stats) {
    let data = {};
    data.id = repo.id;
    data.name = repo.name.replace(/-/g, " ");
    data.url = repo.svn_url;
    data.updated_date = new Date(repo.updated_at);
    data.updated = data.updated_date.toLocaleDateString('en-US');
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