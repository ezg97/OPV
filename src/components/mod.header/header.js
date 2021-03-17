import React from 'react';
import {Route, Link} from 'react-router-dom';

import './header.css';

function Header(props) {
    return (
        <h1 id='header'>        
            <Link to={"/"}>
            {/* <img id='logo' src="https://uc953087041b567a317bdf4211f8.previews.dropboxusercontent.com/p/thumb/ABH4D5bDu8t7NPCuEE1675a0QLUnQFYcfsKVx0OrE0bvPylzA_YSmb8YFRwjlHFahyVYFpiE51ohDkboG6Mac8hIkIIRs29agqKTiwymQnbIjNBybAlzl5aYoXNrckuiJLDptz3s3cYEdCsNNocBwR3TQnJanIMzfxa_L2h-khYtquMhblHHW8FCqiMUAjGGCzZ_FbKmK-N4q4ROvMVuFa_wmWzFESO_dZv3lFttXVUis4_7Rn-L7i5fRp3p2xXtTRYs7AJwI2h-39FnuO7nk4H1_3alaQ_uW10bxa05XWK2Ycs24Ev5mXvpT3Jp2gXX2Oa8enai62epEu50jLqpX8JTUp2dkDmX_n_PPPep_8atxWQC5Xh-29y1PxVfptRuRA6QxXDBRO-BJ3xWLjkebhB_/p.png?size=1280x960&size_mode=3"/> */}
            Oils Por Vida
            </Link>
        </h1>
    );
}

export default Header;