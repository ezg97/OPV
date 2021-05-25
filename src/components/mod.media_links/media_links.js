import React from 'react';
import './media_links.css';

function Media_Links(props) {
    return (
        <div className='media_links'>
            <ul>
                <li>
                    <a href="https://www.facebook.com/oilsporvida">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                        <span> - Facebook</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/oilsporvida">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                        <span> - Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:oilsporvida@gmail.com?subject=Directed%20from%20Oilsporvida">
                        <i className="fa fa-google-plus" aria-hidden="true"></i>
                        <span> - Google</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/oilsporvida/?hl=en">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                        <span> - Instagram</span>
                    </a>
                </li>
            </ul>
        </div>
          );
}

export default Media_Links;