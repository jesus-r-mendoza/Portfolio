import React from 'react';
import Name from './Name';
import Details from './Details';

class HomeSection extends React.Component {

    render() {
        return (
            <div id="home" className="section">
                <Name />
                <Details />
            </div>
        )
    }

}

export default HomeSection;