import React, { useState, useEffect } from 'react';
import {Route, Link} from 'react-router-dom';

import './box_link.css'

function Box_Links(props) {

    const [url, setUrl] = useState({});

    useEffect(() => {
        setUrl({
            'background-image': `url("${props.image}")`,
          });
    }, []);

    return (
        <Link style={url} className="box_links" to={`/${props.title.toLowerCase()}`}>
            <div className='box_label' >
                <h3>{props.title}</h3>
            </div>
        </Link>
    );
}

export default Box_Links;