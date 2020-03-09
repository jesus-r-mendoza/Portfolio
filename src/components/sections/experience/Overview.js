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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam eligendi maiore
                s commodi animi unde nesciunt incidunt omnis voluptas ratione qui quisquam eum
                maxime, quidem ex velit eos quisquam odit maiores rerum aliquam atque, quo
                numquam molestias magni temporibus explicabo obcaecati facilis? Debitis ad eos
                voluptate voluptates ullam, sapiente repudiandae delectus tempora aliquam illum
                laborum vel possimus nemo in officia quos optio ab eligendi. Error quisquam
                adipisci dolorem atque illo tempora, odio maxime fugiat deleniti officiis illum
                ex fugit, itaque accusamus asperiores porro? Aspernatur, animi.
            </p>
        </div>
    )
}

export default Overview;