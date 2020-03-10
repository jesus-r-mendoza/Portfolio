import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-content">
                    <div className="links">
                        <a href="#home" className="link hide-link-decor">Home</a>
                        <a href="#experience" className="link hide-link-decor">Experience</a>
                        <a href="#projects" className="link hide-link-decor">Projects</a>
                        <a href="#skills" className="link hide-link-decor">Skills</a>
                        <a href="#coursework" className="link hide-link-decor">Coursework</a>
                        <a href="#volunteer" className="link hide-link-decor">Volunteer</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;