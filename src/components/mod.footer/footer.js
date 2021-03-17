import React from 'react';
import './footer.css';

import Media_Links from '../mod.media_links/media_links';
import Toggle from '../mod.toggle/toggle';


function Footer(props) {
    return (
        <footer>
            <form>
            <label htmlFor='email'>Newsletter & Giveaways</label>
            <div>
                <input type="email" name='email' placeholder='Enter your email'/>
                <input type='submit' value='Subscribe'/>
            </div>
            </form>
            <Media_Links />
            <Toggle />
            <a>sign in</a>

        </footer>
          );
}

export default Footer;