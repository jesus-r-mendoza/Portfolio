import React from 'react'

function Summaries() {
    return (
        <div className="d-flex justify-content-between flex-wrap my-5">
            <div className="summary">
                <h5>Frontend</h5>
                <p className="lead">
                    <strong>ODAS</strong> is built with modern Frontend frameworks. We're using React JS to
                    serve as the frontend that handles access and functionality provided by the backend. Since
                    our application will require many of the React components access to the Backend API's
                    response, our team is using state management using Redux methodologies.
                </p>
            </div>
            <div className="summary">
                <h5>Backend</h5>
                <p className="lead">
                    For our Backend, we chose to use the Django web framework since it provides a lot of functionality
                    to implement all of the features we need for <strong>ODAS</strong>. Our Backend serves as a REST API, which
                    communicates and delivers the desired data and information to the Frontend. We also manage connecting and storing
                    the telemetry data points, user / organization information, and files to the MySql database and file servers.
                </p>
            </div>
            <div className="summary">
                <h5>Machine Learning</h5>
                <p className="lead">
                    <strong>ODAS</strong> plans on delivering powerful Fault Detection capabilities. With the telemetry data provided
                    by our <strong>Boeing</strong> liaisons, we're implementing various Machine Learning techniques to detect anomalous
                    behavior based on the historical data for the provided component on the satellite. Since we're working with time-series
                    data, our approaches include <em>Sliding Window, with Classical ML algorithms</em> and
                    <em> Recurrent Neural Networks, using Long-Short Term Networks</em>.
                </p>
            </div>
            <div className="summary">
                <h5>Containerization</h5>
                <p className="lead">
                    We've been developing <strong>ODAS</strong> from scratch, so our mindset is to construct the foundation for an application
                    that, at some point, may be utilized in the Aerospace industry. Because of this, we're making sure that
                    <strong> ODAS</strong> has the capability to scale if and when demand grows. By containerizing our Frontend, Backend, and
                    Machine Learning applications, we're ensuring that we could launch multiple instances of either container; allowing us
                    to properly scale based on demand.
                </p>
            </div>
            <div className="summary">
                <h5>Amazon Web Services</h5>
                <p className="lead">
                    In order to complement our containerized application, we're hosting many of our services on AWS. This allows us to provide all
                    of <strong>ODAS</strong> for free, up until we meet a certain demand, when we can then start scaling by increasing
                    our compute, storage, and database necessities. From AWS, we're using RDS to manage our MySql Database, EC2 for our
                    compute resources which are used by the Docker containers, and S3 Buckets to manage file storage.
                </p>
            </div>
            <div className="summary">
                <h5>Database</h5>
                <p className="lead">
                    <strong>ODAS</strong> provides a lot of functionality which includes User and Organization registration, Token Authentication
                    to the Backend API endpoints, and User file uploads. Having a Relational Database made it simple to track Satellite, file, and data
                    ownership and permissions.
                </p>
            </div>
        </div>
    )
}

export default Summaries;