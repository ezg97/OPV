import {React } from 'react';
import {Route, Link, Switch, useHistory  } from 'react-router-dom';

import './view_posts.css';

import Post from '../post/post.js';


function View_Posts(props) {
    const history = useHistory();

    function buttonLoad () {
        history.push(`/posts/`+props.id);        
    }

    return (
        <div className="posts">
            <div className='top-content'>
                <h3><Link className={"post_link_"+props.id} to={`/posts/${props.id}`}>{props.title}</Link></h3>
            </div>
            <div className='middle-content'>
                <h6>{props.date}</h6>
                <span></span>
                <p>{props.read} min read</p>
            </div>
            <div className='bottom-content'>
                <button className='button' type="button" onClick={(e) => buttonLoad()} data-id={props.id}>Read More</button>
            </div>
        </div>
    );
}

export default View_Posts;


