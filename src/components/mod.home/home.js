import React from 'react';
import {Route, useHistory} from 'react-router-dom';




import Box_Links from '../mod.box_link/box_link.js';

import './home.css';

function Home(props) {
    let boxes = [
        {'image': 'https://freshmommyblog.com/wp-content/uploads/2020/11/cinnamon-rolls-400-cropped.jpg', 'title': 'Recipes'},
        {'image': 'https://marquimanagement.com/info/wp-content/uploads/2010/11/write-for-us-new-guest-posting-opportunity-contributing-posts-articles-seo-web-design-marketing-consulting-800x400.jpg', 'title': 'Posts'},
        {'image': 'https://images.ctfassets.net/qx1dg9syx02d/92d115bc-68b6-f4d3-154f-dda230030b89/e08b9ec6084ad7f8421b9fbd37eb833a/92d115bc-68b6-f4d3-154f-dda230030b89', 'title': 'Kits'},
    ];
    const history = useHistory();


    function buttonLoad () {
        history.push(`/posts/1`);        
    }

    return (
        <div className='page'>

            <div className='newest_post'>
                <h6>RECENT POST - June 3, 2021</h6>
                <h3>Young Living’s ultraconcentrated Thieves Automatic Dishwasher Powder</h3>
                <div></div>
                <p>Young Living’s ultraconcentrated Thieves Automatic Dishwasher Powder is back in stock! But that’s not the only good news...</p>
                <button className='button' type="button" onClick={(e) => buttonLoad()} >Read More</button>
            </div>

            <div className="boxes">
                {boxes.map((box) => 
                    <Box_Links image = {box.image} title = {box.title}/>
                )}
            </div>
            
        </div>
    );
}

export default Home;