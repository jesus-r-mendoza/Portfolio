import React from 'react';
import SkillCard from './SkillCard';
import '../../../layout/Skills.css';

class SkillsSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            skills: [
                {
                    id: 1,
                    name: "Programming Languages",
                    pills: [
                        "Java", "Python", "C/C++", "JavaScript", "Kotlin",
                        "Haskell", "Sql", "HTML", "CSS"
                    ]
                },
                {
                    id: 2,
                    name: "Software Engineering",
                    pills: [
                        "Django", "React", "MySql", "Docker", "Docker-Compose",
                        "AWS-EC2", "AWS-RDS", "AWS-S3"
                    ]
                },
                {
                    id: 3,
                    name: "Machine Learning",
                    pills: [
                        "Jupyter Notebook", "Pandas", "Numpy", "SciKitLearn",
                        "Keras", "Matplotlib"
                    ]
                },
                {
                    id: 4,
                    name: "Interpersonal",
                    pills: [
                        "Leadership", "Communication", "Critical Thinking",
                        "Collaborative", "Agile Development Methodologies", "Feedback Responsive",
                        "Spanish"
                    ]
                },
                {
                    id: 5,
                    name: "Environments",
                    pills: [
                        "Git", "Github", "Windows", "Linux", "Ubuntu", "WSL"
                    ]
                }
            ],
        };
    }

    render() {
        return (
            <div id="skills" className="section">
                <h2 className="display-4">Skills</h2>
                <div className="cards">
                    {this.state.skills.map( (skill) => <SkillCard skill={skill} /> )}
                </div>
            </div>
        )
    }

}

export default SkillsSection;