import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Icons() {
    return (
        <div className="d-flex justify-content-center w-100">
            <div className="my-5 d-flex justify-content-around align-items-center w-75">
                <OverlayTrigger placement="top"
                    overlay={ <Tooltip>View my Github projects</Tooltip> }>
                    <a href="https://github.com/jesus-r-mendoza" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <i className="fab fa-github-square icon"></i>
                    </a>
                </OverlayTrigger>

                <OverlayTrigger placement="top"
                    overlay={ <Tooltip>Contact me via Email</Tooltip> }>
                    <a href="mailto:jesus_r_mendoza@yahoo.com" className="icon-link">
                        <i className="far fa-envelope icon"></i>
                    </a>
                </OverlayTrigger>

                <OverlayTrigger placement="top"
                    overlay={ <Tooltip>Let's connect on LinkedIn</Tooltip> }>
                    <a href="https://www.linkedin.com/in/jesus-r-mendoza" target="_blank" rel="noopener noreferrer" className="icon-link">
                        <i className="fab fa-linkedin icon"></i>
                    </a>
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default  Icons;