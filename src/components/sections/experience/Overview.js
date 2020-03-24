import React from 'react'
import boeing from '../../../img/boeing-sm.png';

function Overview() {
    return (
        <div className="my-5">
            <h3>Operations Data Analysis &amp; Mgmt. System</h3>
            <div className="d-flex justify-content-start align-items-center mb-4">
                <h3>sponsored by &nbsp;</h3>
                <img src={boeing} alt=""/>
            </div>
            <h4>Overview</h4>
            <p className="lead">
                For my Senior Design project at Cal State LA, we partnered with <strong>Boeing</strong> to develop
                a centralized application to manage Health and Status Telemetry from satellites.
            </p>
            <p className="lead">
                I am the <strong>Team Leader</strong> for this project, and work on several different roles. Here are some of my responsibilities:
            </p>
            <div className="d-flex justify-content-between mb-4">
                <div className="w-50 mr-3">
                    <h5>Administrative</h5>
                    <div className="w-75">
                        <ul>
                            <li>Organize and support team members during meetings 3 times a week</li>
                            <li>Meet weekly with Boeing representatives to discuss project progress, design, and implementation</li>
                            <li>Plan and update project priorities based on task completion or difficulties</li>
                            <li>Assist and oversee the development of the Software Requirements Specification</li>
                            <li>Develop Software Design Documentation</li>
                        </ul>
                    </div>
                </div>
                <div className="w-50">
                    <h5>Development</h5>
                    <div className="w-75">
                        <ul>
                            <li>Design and implementation for Containerization using Docker</li>
                            <li>Implementation of the Backend API using Django:</li>
                            <ul>
                                <li>Returning proper requests of User/Organization’s Satellite Telemetry</li>
                                <li>ODAS registration: Users, Organizations, and mgmt. of them</li>
                                <li>API Authentication using Tokens</li>
                            </ul>
                            <li>Predictive Analysis Using various Machine Learning Techniques</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h4>Abstract</h4>
            <p className="lead">
                As more and more satellites are launched into orbit, it is important to track of the status of each
                one. We're developing <strong>ODAS</strong>, with guidance from our <strong>Boeing</strong> liaisons,
                to function as a central hub which focuses on monitoring the Health and Status of your satellites.
                <strong> ODAS</strong> does so by analyzing the Health and Status Telemetry for each of your satellites,
                and providing powerful analytical tools, via a user-friendly Web interface, that allows any user or
                organization to monitor the state of their satellites. From the beginning we designed <strong>ODAS </strong>
                to be an <em><strong>Easy-to-Use</strong></em> system that deals with all of the dirty work for you,
                ranging from Fault Detection using Machine Learning to scalable storage solutions to manage millions
                of Telemetry data points.
            </p>
        </div>
    )
}

export default Overview;