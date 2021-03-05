import React from 'react';

import './post.css';

function Post(props) {

    return (
        <div className='page'>
            <h1>Fetch post then display here... #{props.match.params.post_id}</h1>
            
        </div>
    );
}

export default Post;


