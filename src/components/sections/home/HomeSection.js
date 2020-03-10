import React from 'react';
import Name from './Name';
import Details from './Details';
import Icons from './Icons';
import '../../../layout/Home.css';

class HomeSection extends React.Component {

    render() {
        return (
            <div id="home" className="section">
                <Name />
                <Details />
                <Icons />
            </div>
        )
    }

}

export default HomeSection;