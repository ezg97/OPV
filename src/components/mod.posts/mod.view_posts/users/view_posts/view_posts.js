import {React } from 'react';
import {Link, useHistory  } from 'react-router-dom';

import './view_posts.css';

import Post from '../post/post.js';


function View_Posts(props) {
    const history = useHistory();

    function buttonLoad () {
        history.push(`/posts/`+props.id);        
    }

    function addButtonAdmin() {
        // history.push('/posts/0');
       // history push isn't woring for some reason here, quick fix is to force the add page to load
        window.location.href = window.location.origin + '/posts/0';
    }

    function buttonDelete () {

        // Pop up modal, are you sure?

        // Send fetch request to delete the article
    }

    const deleteRow = () => {
        props.postData[props.id-1].delete();
        props.postData.splice(props.id-1,1);
        props.updateRows(props.postData)
        history.push(`/posts/`);        
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
            <div className={(props.admin) ? 'bottom-content bottom-content_admin' : 'bottom-content'}>
                {console.log(props)}
                {(props.admin)
                    ? <>
                        <button className='button button_admin' type="button" onClick={(e) => buttonLoad()} data-id={props.id}>Edit</button>
                        <button className='button button_admin delete' type="button" onClick={(e) => deleteRow()} data-id={props.id}>Delete</button>
                      </>
                    : <button className='button' type="button" onClick={(e) => buttonLoad()} data-id={props.id}>Read More</button>
                }
            </div>
        </div>
    );
}

export default View_Posts;


