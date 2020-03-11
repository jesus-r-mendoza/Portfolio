import React from 'react';
import Award from './Award';
import '../../../layout/Coursework.css';

class CourseworkSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [
                "Advanced Machine Learning", "Data Science", "Algorithm Analysis",
                "Data Structures", "Software Engineering", "Android App Development",
                "Operating Systems", "Parallel Computing", "Programming Language Paradigms",
                "Discrete Math", "Automata Theory", "Cryptography"
            ],
            awards: [
                {
                    id: 1,
                    name: "Dean's List",
                    date: "Fall 2016 - Fall 2020",
                    description: "Earned Dean's List 5 out of the past 7 semesters at Cal State LA."
                },
                {
                    id: 2,
                    name: "Boeing FIRST Robotics Scholarship",
                    date: "Spring 2017",
                    description: "Awarded for my volunteer work at my former high school's Science Club. I taught and mentored students how to build and program robots to compete in regional Vex Robotics Competitions."
                },
                {
                    id: 3,
                    name: "Engineering Alumni Network Scholarship",
                    date: "Spring 2017",
                    description: "After several interviews, I was selected as a Finalist to receive this award based on my academic achievements and impact on my community."
                }
            ]
        };
    }

    render() {
        return (
            <div id="coursework" className="section">
                <h2 className="display-4">Related Coursework</h2>
                <div className="bisect-container mb-5">
                    <div className="bisection mr-3">
                        <h3 className="mb-3">Awards</h3>
                        <div className="bisect-inner">
                            {this.state.awards.map( (a) => <Award key={a.id} award={a} /> )}
                        </div>
                    </div>
                    <div className="bisection">
                        <h3 className="mb-3">Courses</h3>
                        <div className="bisect-inner">
                            {this.state.courses.map( (c) => <div className="box">{c}</div> )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CourseworkSection;