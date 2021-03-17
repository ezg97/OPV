import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import './view_posts.css';

import Post from '../post/post.js';


function View_Posts(props) {
    return (
        <div className="posts">
            <div className='top-content'>
                <h3><Link to={`/posts/${props.id}`}>{props.title}</Link></h3>
            </div>
            <div className='middle-content'>
                <h6>{props.date}</h6>
                <span></span>
                {/* <p>{props.paragraph}</p> */}
                {/* <button className='button' type="button">Read More</button> */}
                <p>{props.read} min read</p>
            </div>
            <div className='bottom-content'>
                <button className='button' type="button">Read More</button>
            </div>
        </div>
    );
}

export default View_Posts;


