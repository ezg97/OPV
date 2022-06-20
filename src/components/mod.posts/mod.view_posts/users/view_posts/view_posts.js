import {React } from 'react';
import {Link, useHistory  } from 'react-router-dom';

import './view_posts.css';

import '../post/post.js';


function View_Posts(props) {
    const history = useHistory();
    const titleCharLimit = 55;
    const bodyCharLimit = 100;
    
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

    const charLimitText = (text, limit) => {
        return text.length < limit ? text.trimEnd() : (text.substring(0, limit).trimEnd() + '...');
    }

    const createMarkup = (type, id) => {
        if (type === 'title') {
            return {
                __html: props.postData && id !== 0
                    ? charLimitText(props.postData[id-1].title, titleCharLimit)
                    : ''
            }; 
        } else if (type === 'body') {
            return {
                __html: props.postData && id !== 0
                    ? charLimitText(props.postData[id-1].body, bodyCharLimit)
                    : ''
            }; 
        }
            
    }
    

    return (
        <div className="posts">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className="post_img" src={props.postData[props.id-1].image_src ? props.postData[props.id-1].image_src : "https://blog.planttherapy.com/blog/wp-content/uploads/2022/02/PlantTherapy-Lucky2022-Blog-Lucky_Luckier_Luckiest_Essential_Oil_Blends-1038x576.jpg"}/>
            <div className="post_info">
                <div>
                    <span class="glyphicon glyphicon-calendar"></span>
                    <h6>{props.date}</h6>
                </div>
                <div className="time_read">
                    <span class="glyphicon glyphicon-time"></span>
                    <h6>{props.read} min read</h6>
                </div>
            </div>
            
            <div className='top-content'>
                <h4><Link className={"post_link_"+props.id} to={`/posts/${props.id}`} dangerouslySetInnerHTML={createMarkup('title', props.id)}></Link></h4>
            </div>
           
            <div className='content'>
                <p  dangerouslySetInnerHTML={createMarkup('body', props.id)}></p>
            </div>

            <div className={(props.admin) ? 'bottom-content bottom-content_admin' : 'bottom-content'}>
                {console.log(props)}
                {(props.admin)
                    ? <>
                        <button className='button button_admin' type="button" onClick={(e) => buttonLoad()} data-id={props.id}>Edit</button>
                        <button className='button button_admin delete' type="button" onClick={(e) => deleteRow()} data-id={props.id}>Delete</button>
                      </>
                    : <a className="read_more" onClick={(e) => buttonLoad()} data-id={props.id}>Read More</a>
                }
            </div>
        </div>
    );
}

export default View_Posts;


