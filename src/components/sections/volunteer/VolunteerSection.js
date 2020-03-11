import React from 'react';
import Title from './Title';
import Activity from './Activity';
import '../../../layout/Volunteer.css';

class VolunteerSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activities: [
                {
                    id: 1,
                    title: "Regional Vex Robotics Competitions",
                    date: "Fall 2016 - Spring 2017",
                    bullets: [
                        "Students build robots using Vex parts, including: servos, controllers, and programmable cortexes",
                        "Students Program their robot to behave autonomously and by user-control using the RobotC programming language",
                        "I mentored and taught students how to use the RobotC programming language, so they could program their robots for competitions"
                    ]
                },
                {
                    id: 2,
                    title: "Regional Vex Robotics Competitions",
                    date: "Fall 2017 - Spring 2018",
                    bullets: [
                        "Students build robots using Vex parts, including: servos, controllers, and programmable cortexes",
                        "Students Program their robot to behave autonomously and by user-control using the RobotC programming language",
                        "Competed in Regional Competitions, placed 13th out of 56 Teams from SoCal"
                    ]
                },
                {
                    id: 3,
                    title: "Programming with Python",
                    date: "Fall 2018 - Spring 2019",
                    bullets: [
                        "Introduced Computer Science material to students using Python",
                        "Used a classroom environment with the website Repl.it, where students could complete labs and projects"
                    ]
                },
                {
                    id: 4,
                    title: "Robotics with Arduino",
                    date: "Fall 2019 - Spring 2020",
                    bullets: [
                        "Students use Arduino UNO boards to program LEDs, Sensors, and Servos",
                        "After learning how to use these sensors, students build and program a robot to autonomously avoid obstacles"
                    ]
                }
            ]
        }
    }

    render() {
        return (
            <div id="volunteer" className="section">
                <h2 className="display-4">Volunteer</h2>
                <Title />
                <h4 className="my-3">A little bit about my Experience</h4>
                <p className="lead">
                    I graduated from <em>Montclair High School</em> in 2016 and am now a Senior at
                    <em> California State University, Los Angeles</em> about to graduate with a Bachelor of Science
                    in Computer Science. As a High School student, I was not sure what I wanted to study, but I was
                    fortunate enough to take numerous Advanced Placement classes in several subjects ranging from
                    AP US History to AP Physics. This allowed me to explore different career opportunities that I could
                    pursue through my college major.
                </p>
                <p className="lead">
                    By the end of my Junior, I had become comfortable with the idea of pursuing a degree in some engineering
                    field; despite not having a strong passion for it, I figured I would end up satisfied. However, as I was registering
                    for my Senior classes, it was announced  that they would be offering AP Computer Science and I signed up for it.
                    It was in that year, where I decisively knew that I wanted to pursue a career Computer Science. It is undoubtedly
                    clear that having been exposed to CS during High School, contributed to much of my success and comprehensive
                    understanding while studying Computer Science in College.
                </p>
                <p className="lead">
                    Unfortunately, due to a lack of resources, Montclair High School decided to no longer offer AP Computer Science
                    for the subsequent years. Montclair is a small and diverse city; so the fact that Montclair High School does not
                    offer or even expose students to Computer Science, serves as an example of the (although improving) lack of
                    diversity in our field. Because of this, I find that the volunteer work I do to support the exposure of
                    Computer Science to these students, is so critical to increase diversity in CS and serve as a mentor for the
                    future Computer Scientists from Montclair.
                </p>

                <h4 className="my-3">Activities</h4>
                <p className="lead">
                    I volunteer with Montclair High School Science Club as Mentor; there we introduce students to various CS related
                    fields ranging from Programming in Python to competing in Vex Robotics Competitions. Here is an overview
                    of the activities we've partaken in throughout the years I've been helping.
                </p>
                <div className="d-flex justify-content-between flex-wrap mb-5">
                    {this.state.activities.map( (act) => <Activity activity={act} /> )}
                </div>
                <p className="mt-5 text-center">
                    &copy; 2020, Jesus R Mendoza. All rights reserved.
                </p>
            </div>
        )
    }

}

export default VolunteerSection;