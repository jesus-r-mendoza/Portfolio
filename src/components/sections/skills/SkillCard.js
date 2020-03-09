import React, { Component } from 'react'
import SkillPill from './SkillPill';

class SkillCard extends Component {

    render() {
        return (
            <div className="skill-card floating">
                <h4>{this.props.skill.name}</h4>
                <div className="pills mt-3">
                    {this.props.skill.pills.map( (p) => <SkillPill key={p.id} pill={p} /> )}
                </div>
            </div>
        )
    }

}

export default SkillCard;