

import React from 'react';
import Lower from './components/lower';
import Middle from './components/middle';
import Upper from './components/upper';
const LandingPage = () => {

    return (
        <div className="landing-Page">
            <Upper/>
            <Middle/>
            <Lower/>
        </div>
    );
}

export default LandingPage;
